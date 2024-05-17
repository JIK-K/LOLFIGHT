import { BaseDTO } from "../base.dto";
import { BattlePlayerDTO } from "./battle_player.dto";

export interface BattleTeamDTO extends BaseDTO {
  id: string;
  isWinning: boolean;
  point: number;
  guildName: string;
  player1: BattlePlayerDTO;
  player2: BattlePlayerDTO;
  player3: BattlePlayerDTO;
  player4: BattlePlayerDTO;
  player5: BattlePlayerDTO;
}
