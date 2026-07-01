'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { InquiryCategory, INQUIRY_CATEGORY_LABEL } from '@/types';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import type { User } from '@supabase/supabase-js';

const categories: InquiryCategory[] = ['general', 'membership', 'facility', 'complaint', 'other'];

export default function NewInquiryPage() {
  const supabase = createClient();
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<InquiryCategory>('general');
  const [isPrivate, setIsPrivate] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then((res: any) => {
      const session = res.data?.session;
      setUser(session?.user ?? null);
      setLoading(false);
    });
  }, [supabase]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setError('');
    setSubmitting(true);
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    if (!supabaseUrl || supabaseUrl === 'your_supabase_project_url') {
      setError('Supabase 연결 설정이 완료되지 않았습니다. .env.local 파일에 환경 변수를 입력해 주세요.');
      setSubmitting(false);
      return;
    }
    try {
      const { error } = await supabase.from('inquiries').insert({
        user_id: user.id,
        title: title.trim(),
        content: content.trim(),
        category,
        is_private: isPrivate,
      });
      if (error) {
        setError('문의 등록 중 오류가 발생했습니다. 다시 시도해 주세요.');
      } else {
        router.push('/inquiry');
      }
    } catch (err: any) {
      console.error(err);
      setError('연결 오류가 발생했습니다. Supabase 설정 또는 네트워크 상태를 확인해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-gold-400 font-body animate-pulse">로딩 중...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-4">
        <div className="card-arabian p-10 text-center max-w-md w-full">
          <div className="text-5xl mb-4">🔒</div>
          <h1 className="font-display text-gold-600 text-xl mb-3">로그인이 필요합니다</h1>
          <p className="text-stone-500 font-body text-sm mb-6">문의 작성은 회원만 가능합니다.</p>
          <Link href="/membership" className="btn-gold block text-center">로그인 / 회원가입</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 pb-16">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="py-8">
          <div className="flex items-center gap-2 text-stone-400 text-sm font-body mb-4">
            <Link href="/inquiry" className="hover:text-gold-600 transition-colors">문의 게시판</Link>
            <span>›</span>
            <span className="text-gold-400">새 문의 작성</span>
          </div>
          <h1 className="title-arabian text-3xl">문의 작성</h1>
        </div>
        <div className="divider-gold mb-8" />

        <div className="card-arabian p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 카테고리 */}
            <div>
              <label className="block text-sm text-stone-600 font-body mb-2 font-medium">
                문의 유형 <span className="text-gold-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-body transition-all duration-200
                      ${category === cat
                        ? 'bg-gold-500/25 text-gold-600 border border-gold-200'
                        : 'bg-white/80 text-stone-500 border border-stone-200 hover:border-gold-200'
                      }`}
                  >
                    {INQUIRY_CATEGORY_LABEL[cat]}
                  </button>
                ))}
              </div>
            </div>

            {/* 제목 */}
            <div>
              <label className="block text-sm text-stone-600 font-body mb-2 font-medium">
                제목 <span className="text-gold-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                maxLength={100}
                placeholder="문의 제목을 입력해 주세요"
                className="input-field"
              />
              <div className="text-right text-xs text-stone-400 mt-1 font-body">{title.length}/100</div>
            </div>

            {/* 내용 */}
            <div>
              <label className="block text-sm text-stone-600 font-body mb-2 font-medium">
                내용 <span className="text-gold-500">*</span>
              </label>
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                required
                minLength={10}
                maxLength={2000}
                rows={8}
                placeholder="문의 내용을 자세히 입력해 주세요."
                className="input-field resize-none"
              />
              <div className="text-right text-xs text-stone-400 mt-1 font-body">{content.length}/2000</div>
            </div>

            {/* 비공개 설정 */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/80 border border-gold-200">
              <button
                type="button"
                onClick={() => setIsPrivate(!isPrivate)}
                className={`relative w-12 h-6 rounded-full transition-all duration-300 flex-shrink-0
                  ${isPrivate ? 'bg-gold-500' : 'bg-gray-600'}`}
              >
                <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all duration-300
                  ${isPrivate ? 'left-6' : 'left-0.5'}`} />
              </button>
              <div>
                <div className="text-sm text-white font-body font-medium">
                  {isPrivate ? '🔒 비공개 문의' : '🔓 공개 문의'}
                </div>
                <div className="text-xs text-stone-400 font-body mt-0.5">
                  {isPrivate
                    ? '나와 관리자만 볼 수 있습니다'
                    : '다른 회원에게도 공개됩니다'}
                </div>
              </div>
            </div>

            {error && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-body">
                {error}
              </div>
            )}

            {/* 버튼 */}
            <div className="flex gap-3 pt-2">
              <Link href="/inquiry" className="flex-1 py-3 rounded-xl border border-stone-200 text-stone-500 hover:text-stone-700 text-sm font-body text-center transition-all">
                취소
              </Link>
              <button
                type="submit"
                disabled={submitting || !title.trim() || content.trim().length < 10}
                className="flex-1 btn-gold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? '등록 중...' : '문의 등록'}
              </button>
            </div>
          </form>
        </div>

        {/* 안내 */}
        <div className="mt-6 p-5 rounded-2xl bg-white/80 border border-gold-200">
          <h3 className="text-gold-400 text-sm font-body font-medium mb-3">📌 문의 전 확인사항</h3>
          <ul className="space-y-1.5 text-xs text-stone-400 font-body">
            <li>• 답변은 1~2 영업일 내에 이루어집니다.</li>
            <li>• 긴급 문의는 카카오톡 오픈채팅을 이용해 주세요.</li>
            <li>• 답변 전에는 문의를 수정·삭제할 수 있습니다.</li>
            <li>• 비방·욕설·광고성 내용은 관리자에 의해 삭제될 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
