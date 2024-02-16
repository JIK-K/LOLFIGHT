import { BaseDTO } from "../base.dto";
import { GuildDTO } from "../guild/guild.dto";

export interface MemberDTO extends BaseDTO {
  id: string;
  memberId: string;
  memberPw: string;
  memberName: string;
  memberGuild: GuildDTO | null;
}
