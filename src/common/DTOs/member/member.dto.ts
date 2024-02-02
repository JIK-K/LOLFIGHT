import { BaseDTO } from "../base.dto";

export interface MemberDTO extends BaseDTO {
  id: string;
  memberId: string;
  memberPw: string;
  memberName: string;
  memberPhone: string;
  memberGuild: string;
}
