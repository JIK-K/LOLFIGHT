import { BaseDTO } from "../base.dto";

export interface JudgmentDTO extends BaseDTO {
  id: string;
  judgmentWriter: string;
  judgmentTitle: string;
  judgmentDesc: string;
  judgmentLeftChampion: string;
  judgmentLeftName: string;
  judgmentLeftTier: string;
  judgmentLeftLine: string;
  judgmentLeftLike: number;
  judgmentRightChampion: string;
  judgmentRightName: string;
  judgmentRightTier: string;
  judgmentRightLine: string;
  judgmentRightLike: number;
  judgmentVideo: string;
}
