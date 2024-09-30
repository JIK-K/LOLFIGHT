import { create } from "zustand";
import { MemberDTO } from "../DTOs/member/member.dto";
import { GuildDTO } from "../DTOs/guild/guild.dto";
import { MemberGameDTO } from "../DTOs/member/member_game.dto";

export interface MemberState {
  member: MemberDTO | null; // 멤버 상태
  setMember: (member: MemberDTO | null) => void; // 멤버 설정
  setMemberName: (name: string) => void; // 이름 설정
  setMemberId: (id: string) => void; // ID 설정
  setMemberPw: (pw: string) => void; // 비밀번호 설정
  setMemberIcon: (icon: string) => void; // 아이콘 설정
  setMemberGuild: (guild: GuildDTO | null) => void; // 길드 설정
  setMemberGame: (game: MemberGameDTO | null) => void; // 게임 설정
}

// Zustand 상태 생성
export const useMember = create<MemberState>((set) => ({
  member: null,
  setMember: (member) => set({ member }), // 멤버 설정
  setMemberName: (name) => {
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, memberName: name } : null, // 이름 업데이트
    }));
  },
  setMemberId: (id) => {
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, memberId: id } : null, // ID 업데이트
    }));
  },
  setMemberPw: (pw) => {
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, memberPw: pw } : null, // 비밀번호 업데이트
    }));
  },
  setMemberIcon: (icon) => {
    // 아이콘 설정 구현
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, memberIcon: icon } : null, // 아이콘 업데이트
    }));
  },
  setMemberGuild: (guild) => {
    // 길드 설정 구현
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, memberGuild: guild } : null, // 길드 업데이트
    }));
  },
  setMemberGame: (game) => {
    // 게임 설정 구현
    set((state) => ({
      ...state,
      member: state.member ? { ...state.member, memberGame: game } : null, // 게임 업데이트
    }));
  },
}));
