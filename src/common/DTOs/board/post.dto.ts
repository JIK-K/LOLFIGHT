import { BaseDTO } from "../base.dto";

export interface PostDTO extends BaseDTO {
  id: number;
  postTitle: string;
  postContent: string;
  postWriter: string;
  postDate: Date;
  postViews: number;
  postLikes: number;
  postComments: number;
  postBoard: string;
}
