import { Activity } from "./activity";
import { TimeLineComment } from "./timeline-comment";
import { Contact } from "./contact";
import { Deal } from "./deal";
import { Department } from "./department";
import { User } from "./user";
import { DriveAttachedObject } from "./drive-attached-object";
import { DiskFile } from "./disk-file";

export class Bitrix24Api {
  constructor(hookUrl) {
    this.hookUrl = hookUrl;
    this.Activity = Activity.withHook(hookUrl);
    this.TimeLineComment = TimeLineComment.withHook(hookUrl);
    this.Contact = Contact.withHook(hookUrl);
    this.Deal = Deal.withHook(hookUrl);
    this.Department = Department.withHook(hookUrl);
    this.User = User.withHook(hookUrl);
    this.DriveAttachedObject = DriveAttachedObject.withHook(hookUrl);
    this.DiskFile = DiskFile.withHook(hookUrl);
  }

  static withHook(url) {
    return new Bitrix24Api(url);
  }
}
