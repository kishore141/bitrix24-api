import { NetworkClient } from "@kishore141/network-client";

import CONFIG from "./config";

export class User {
  constructor(hookUrl) {
    this.hookUrl = hookUrl;
  }

  static withHook(hookUrl) {
    return new User(hookUrl);
  }

  async getList(filter = { Active: true }, select = ["ID", "CITY", "BRANCH"]) {
    const body = {
      FILTER: filter,
      SELECT: select,
    };
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.GET_LIST, body, {});
    if (success) {
      return response.result;
    } else {
      return false;
    }
  }
}
