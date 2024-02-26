import { BaseDTO } from "../base.dto";
import { MemberDTO } from "../member/member.dto";
import { GuildDTO } from "./guild.dto";

export interface GuildInviteSendDTO extends BaseDTO {
  id: string;
  memberId: string | undefined;
  guildId: string | undefined;
}
