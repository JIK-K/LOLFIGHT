import { BaseDTO } from "../base.dto";
import { GuildRecrodDTO } from "./guild_record.dto";

export interface GuildDTO extends BaseDTO {
  id: string;
  guildMaster: string;
  guildName: string;
  guildMembers: number;
  guildDescription: string;
  guildTier: string;
  guildIcon: string;
  guildRecord: GuildRecrodDTO | null;
}
