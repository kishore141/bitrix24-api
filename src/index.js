import { Activity } from "./activity";
import { TimeLineComment } from "./timeline-comment";

export class Bitrix24Api {
  constructor(hookUrl) {
    this.hookUrl = hookUrl;
    this.Activity = Activity.withHook(hookUrl);
    this.TimeLineComment = TimeLineComment.withHook(hookUrl);
  }

  static withHook(url) {
    return new Bitrix24Api(url);
  }
}
