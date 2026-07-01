export type MembershipType = 'outdoor' | 'indoor_once' | 'indoor_monthly';

export type EntryAction = 'in' | 'out';

export interface Profile {
  id: string;
  email: string;
  name: string;
  phone: string;
  created_at: string;
}

export interface Membership {
  id: string;
  user_id: string;
  type: MembershipType;
  purchased_at: string;
  expires_at: string | null;
  is_active: boolean;
}

export interface EntryLog {
  id: string;
  user_id: string;
  membership_id: string;
  membership_type: MembershipType;
  action: EntryAction;
  created_at: string;
}

export interface MembershipPrice {
  type: MembershipType;
  label: string;
  price: number;
  description: string;
  duration: string | null;
}

export const MEMBERSHIP_PRICES: MembershipPrice[] = [
  {
    type: 'outdoor',
    label: '야외 이용권',
    price: 50000,
    description: '유수풀, 파도풀, 미끄럼틀, 영유아풀, 평상, BBQ',
    duration: '1일',
  },
  {
    type: 'indoor_once',
    label: '실내 1회권',
    price: 10000,
    description: '25m 레인 수영장 1회 이용',
    duration: '1회',
  },
  {
    type: 'indoor_monthly',
    label: '실내 월정액',
    price: 50000,
    description: '25m 레인 수영장 1개월 무제한 이용',
    duration: '1개월',
  },
];

export const MEMBERSHIP_LABEL: Record<MembershipType, string> = {
  outdoor: '야외 이용권',
  indoor_once: '실내 1회권',
  indoor_monthly: '실내 월정액',
};

// ── 문의 게시판 ──────────────────────────────────────────────
export type InquiryStatus = 'pending' | 'answered' | 'closed';
export type InquiryCategory = 'general' | 'membership' | 'facility' | 'complaint' | 'other';

export interface Inquiry {
  id: string;
  user_id: string;
  title: string;
  content: string;
  category: InquiryCategory;
  status: InquiryStatus;
  is_private: boolean;
  admin_reply: string | null;
  replied_at: string | null;
  created_at: string;
  updated_at: string;
  // 조인 시
  profiles?: { name: string };
}

export const INQUIRY_CATEGORY_LABEL: Record<InquiryCategory, string> = {
  general: '일반 문의',
  membership: '회원권 문의',
  facility: '시설 문의',
  complaint: '불편 신고',
  other: '기타',
};

export const INQUIRY_STATUS_LABEL: Record<InquiryStatus, string> = {
  pending: '답변 대기',
  answered: '답변 완료',
  closed: '처리 완료',
};

export const INQUIRY_STATUS_COLOR: Record<InquiryStatus, string> = {
  pending: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
  answered: 'text-aqua-400 bg-aqua-400/10 border-aqua-400/30',
  closed: 'text-gray-400 bg-gray-400/10 border-gray-400/30',
};
