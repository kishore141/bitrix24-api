import { NetworkClient } from "@kishore141/network-client";

import CONFIG from "./config";

export class Department {
  constructor(hookUrl) {
    this.hookUrl = hookUrl;
  }

  static withHook(hookUrl) {
    return new Department(hookUrl);
  }

  async getList(filter = {}, select = ["ID", "NAME", "UF_HEAD"]) {
    const { success, response } = await NetworkClient.postJson(
      this.hookUrl + CONFIG.URL.GET_LIST,
      {
        SELECT: select,
      },
      {}
    );
    if (success) {
      return response.result;
    } else {
      return false;
    }
  }
}
