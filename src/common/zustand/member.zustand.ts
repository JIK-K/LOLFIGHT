// member.zustand.ts

import { create } from "zustand";
import { MemberDTO } from "../DTOs/member/member.dto";

export interface MemberState {
  member: MemberDTO | null;
  setMember: (member: MemberDTO | null) => void;
  setMemberName: (name: string) => void;
  setMemberId: (id: string) => void;
  setMemberPw: (pw: string) => void;
  setMemberPhone: (phone: string) => void;
  setMemberGuild: (guild: string) => void;
}

export const useMember = create<MemberState>((set) => ({
  member: null,
  setMember: (member) => set({ member }),
  setMemberName: (name) => {
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, memberName: name } : null,
    }));
  },
  setMemberId: (id) => {
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, id } : null,
    }));
  },
  setMemberPw: (pw) => {
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, memberPw: pw } : null,
    }));
  },
  setMemberPhone: (phone) => {
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, memberPhone: phone } : null,
    }));
  },
  setMemberGuild: (guild) => {
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, memberGuild: guild } : null,
    }));
  },
}));
