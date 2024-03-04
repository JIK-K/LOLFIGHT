import { BaseDTO } from "../base.dto";

export interface MemberGameDTO extends BaseDTO {
  id: string;
  gameName: string;
  gameTier: string;
}
