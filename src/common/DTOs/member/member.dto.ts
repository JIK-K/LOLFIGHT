import { BaseDTO } from "../base.dto";
import { GuildDTO } from "../guild/guild.dto";
import { MemberGameDTO } from "./member_game.dto";

export interface MemberDTO extends BaseDTO {
  id: string;
  memberId: string;
  memberPw: string;
  memberName: string;
  memberGuild: GuildDTO | null;
  memberGame: MemberGameDTO | null;
}
