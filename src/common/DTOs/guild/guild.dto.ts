import { BaseDTO } from "../base.dto";

export interface GuildDTO extends BaseDTO {
  id: string;
  guildMaster: string;
  guildName: string;
  guildMembers: number;
  guildDescription: string;
  guildTier: string;
  guildIcon: string;
}
