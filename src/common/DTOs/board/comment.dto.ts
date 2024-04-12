import { BaseDTO } from "../base.dto";
import { PostDTO } from "./post.dto";

export interface CommentDTO extends BaseDTO {
  id?: string;
  commentContent: string;
  depth: number;
  orderNumber: number;
  deltedTrue: boolean;
  deltedAt?: Date;
  parentComment: string;
  isCommentForComment: boolean;
  postId: number;
  postBoardId: PostDTO;
  commentDate: Date;
  writer: string;
  writerId: string;
}
