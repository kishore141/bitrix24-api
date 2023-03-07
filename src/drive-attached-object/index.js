import { NetworkClient } from "@kishore141/network-client";

import CONFIG from "./config";

export class DriveAttachedObject {
  constructor(hookUrl) {
    this.hookUrl = hookUrl;
  }

  static withHook(hookUrl) {
    return new DriveAttachedObject(hookUrl);
  }

  async getById(id) {
    const body = { id };
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.GET_BY_ID, body, {});
    if (success) {
      return response.result;
    } else {
      return false;
    }
  }
}
