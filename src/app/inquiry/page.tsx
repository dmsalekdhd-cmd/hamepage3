'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import {
  Inquiry,
  INQUIRY_CATEGORY_LABEL,
  INQUIRY_STATUS_LABEL,
  INQUIRY_STATUS_COLOR,
} from '@/types';
import Link from 'next/link';
import type { User } from '@supabase/supabase-js';

export default function InquiryPage() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Inquiry | null>(null);

  const fetchInquiries = useCallback(async (userId: string) => {
    const { data } = await supabase
      .from('inquiries')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    setInquiries(data || []);
  }, [supabase]);

  useEffect(() => {
    supabase.auth.getSession().then((res: any) => {
      const session = res.data?.session;
      setUser(session?.user ?? null);
      if (session?.user) fetchInquiries(session.user.id);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e: any, session: any) => {
      setUser(session?.user ?? null);
      if (session?.user) fetchInquiries(session.user.id);
    });
    return () => subscription.unsubscribe();
  }, [supabase, fetchInquiries]);

  const handleDelete = async (id: string) => {
    if (!confirm('문의를 삭제하시겠습니까?')) return;
    try {
      const { error } = await supabase.from('inquiries').delete().eq('id', id);
      if (error) {
        alert('문의 삭제 중 오류가 발생했습니다: ' + error.message);
      } else {
        setInquiries(prev => prev.filter(i => i.id !== id));
        if (selected?.id === id) setSelected(null);
      }
    } catch (err: any) {
      console.error(err);
      alert('연결 오류가 발생했습니다. Supabase 설정을 확인해주세요.');
    }
  };

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' });

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-gold-400 font-body animate-pulse text-lg">로딩 중...</div>
      </div>
    );
  }

  // 비로그인
  if (!user) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="card-arabian p-10 text-center max-w-md w-full">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="font-display text-gold-600 text-xl mb-3">회원 전용 서비스</h1>
          <p className="text-stone-500 font-body text-sm mb-6 leading-relaxed">
            문의 게시판은 회원만 이용하실 수 있습니다.<br />
            로그인 후 이용해 주세요.
          </p>
          <Link href="/membership" className="btn-gold block text-center">
            로그인 / 회원가입
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 pb-16">
      <div className="max-w-5xl mx-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between py-8">
          <div>
            <h1 className="title-arabian text-3xl">문의 게시판</h1>
            <p className="text-stone-400 font-body text-sm mt-1">
              총 {inquiries.length}건의 문의 내역
            </p>
          </div>
          <Link href="/inquiry/new" className="btn-gold text-sm">
            + 새 문의 작성
          </Link>
        </div>
        <div className="divider-gold" />

        {inquiries.length === 0 ? (
          <div className="card-arabian p-12 text-center mt-8">
            <div className="text-5xl mb-4">✉️</div>
            <p className="text-stone-500 font-body mb-6">아직 문의 내역이 없습니다.</p>
            <Link href="/inquiry/new" className="btn-gold">첫 문의 작성하기</Link>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* 목록 */}
            <div className="lg:col-span-2 space-y-2">
              {inquiries.map(inquiry => (
                <button
                  key={inquiry.id}
                  onClick={() => setSelected(inquiry)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200
                    ${selected?.id === inquiry.id
                      ? 'bg-gold-500/15 border-gold-200 shadow-gold'
                      : 'bg-white/80 border-gold-200 hover:border-gold-200 hover:bg-white/80'
                    }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-white font-body text-sm font-medium line-clamp-1 flex-1">
                      {inquiry.is_private && <span className="text-gold-600 mr-1">🔒</span>}
                      {inquiry.title}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 font-body ${INQUIRY_STATUS_COLOR[inquiry.status]}`}>
                      {INQUIRY_STATUS_LABEL[inquiry.status]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white text-stone-500 font-body">
                      {INQUIRY_CATEGORY_LABEL[inquiry.category]}
                    </span>
                    <span className="text-stone-400 text-xs font-body">{formatDate(inquiry.created_at)}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* 상세 */}
            <div className="lg:col-span-3">
              {selected ? (
                <div className="card-arabian p-7">
                  {/* 제목 & 상태 */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="font-display text-gold-600 text-lg leading-snug flex-1">
                      {selected.is_private && <span className="text-gold-600 mr-2">🔒</span>}
                      {selected.title}
                    </h2>
                    <span className={`text-sm px-3 py-1 rounded-full border font-body flex-shrink-0 ${INQUIRY_STATUS_COLOR[selected.status]}`}>
                      {INQUIRY_STATUS_LABEL[selected.status]}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-gold-200">
                    <span className="text-xs px-2 py-1 rounded-full bg-white text-stone-500 font-body">
                      {INQUIRY_CATEGORY_LABEL[selected.category]}
                    </span>
                    <span className="text-stone-400 text-xs font-body">{formatDate(selected.created_at)}</span>
                  </div>

                  {/* 문의 내용 */}
                  <div className="bg-white/80 rounded-xl p-5 mb-5">
                    <h3 className="text-xs text-stone-400 font-body mb-2 uppercase tracking-wide">문의 내용</h3>
                    <p className="text-stone-700 font-body text-sm leading-relaxed whitespace-pre-wrap">
                      {selected.content}
                    </p>
                  </div>

                  {/* 관리자 답변 */}
                  {selected.admin_reply ? (
                    <div className="bg-aqua-900/30 border border-sky-200 rounded-xl p-5 mb-5">
                      <h3 className="text-xs text-sky-500 font-body mb-2 uppercase tracking-wide flex items-center gap-1">
                        <span>✅</span> 관리자 답변
                        {selected.replied_at && (
                          <span className="text-stone-400 ml-2">{formatDate(selected.replied_at)}</span>
                        )}
                      </h3>
                      <p className="text-stone-700 font-body text-sm leading-relaxed whitespace-pre-wrap">
                        {selected.admin_reply}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-white/80 border border-dashed border-stone-200 rounded-xl p-5 mb-5 text-center">
                      <p className="text-stone-400 font-body text-sm">
                        ⏳ 답변 준비 중입니다. 1~2 영업일 내에 답변 드립니다.
                      </p>
                    </div>
                  )}

                  {/* 액션 버튼 */}
                  {selected.status === 'pending' && (
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => handleDelete(selected.id)}
                        className="px-4 py-2 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 text-sm font-body transition-all"
                      >
                        삭제
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="card-arabian p-10 text-center h-full flex flex-col items-center justify-center">
                  <div className="text-4xl mb-3">👈</div>
                  <p className="text-stone-400 font-body text-sm">문의를 선택하면 내용이 표시됩니다</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
