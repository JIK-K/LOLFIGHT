import { LargeNumberLike } from "crypto";
import { BaseDTO } from "../base.dto";
import { PostDTO } from "./post.dto";
import { MemberDTO } from "../member/member.dto";

export interface LikeDTO extends BaseDTO {
  id: number;
  likePost: PostDTO;
  likeMember: MemberDTO;
}
