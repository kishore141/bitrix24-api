import { Activity } from "./activity";
import { TimeLineComment } from "./timeline-comment";
import { Contact } from "./contact";
import { Deal } from "./deal";

export class Bitrix24Api {
  constructor(hookUrl) {
    this.hookUrl = hookUrl;
    this.Activity = Activity.withHook(hookUrl);
    this.TimeLineComment = TimeLineComment.withHook(hookUrl);
    this.Contact = Contact.withHook(hookUrl);
    this.Deal = Deal.withHook(hookUrl);
  }

  static withHook(url) {
    return new Bitrix24Api(url);
  }
}
