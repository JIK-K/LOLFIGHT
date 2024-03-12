import { BaseDTO } from "../base.dto";
import { PostDTO } from "./post.dto";

export interface CommentDTO extends BaseDTO {
  id?: string;
  commentContent: string;
  depth: number;
  orderNumber: number;
  deltedTrue: boolean;
  deltedAt?: Date;
  isCommentForComment: boolean;
  postId: number;
  postBoardId: PostDTO;
  memberId: string;
}
