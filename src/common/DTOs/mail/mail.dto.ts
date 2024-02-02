import { BaseDTO } from "../base.dto";

export interface MailDTO extends BaseDTO {
  id?: string;
  mailAddr: string;
  mailCode: string;
  mailStatus: string;
}
