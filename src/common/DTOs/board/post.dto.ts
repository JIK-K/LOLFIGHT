import { BaseDTO } from "../base.dto";

export interface PostDTO extends BaseDTO {
  id?: string;
  postTitle: string;
  postContent: string;
  postWriter: string;
  postDate: string;
  postViews: number;
  postLikes: number;
  postComments: number;
  postBoard: string;
}
