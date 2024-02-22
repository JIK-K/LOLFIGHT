import { BaseDTO } from "../base.dto";

export interface GuildRecrodDTO extends BaseDTO {
  id: string;
  recordLadder: number;
  recordVictory: number;
  recordDefeat: number;
  recordRanking: string;
}
