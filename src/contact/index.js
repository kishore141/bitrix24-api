import { NetworkClient } from "@kishore141/network-client";

import CONFIG from "./config";

export class Contact {
  constructor(hookUrl) {
    this.hookUrl = hookUrl;
  }

  static withHook(hookUrl) {
    return new Contact(hookUrl);
  }

  async getList(filter = {}, select = ["ID", "Name", "Second_Name", "Last_Name"]) {
    const { success, response } = await NetworkClient.postJson(
      this.hookUrl + CONFIG.URL.GET_LIST,
      {
        filter,
        select,
      },
      {}
    );
    if (success) {
      return response.result;
    } else {
      return false;
    }
  }

  async updateById(id, contact) {
    const body = { id, fields: contact };
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.UPDATE, body, {});
    if (success) {
      return response.result;
    } else {
      return false;
    }
  }

  async create(contact) {
    const body = {
      fields: contact,
      params: { REGISTER_SONET_EVENT: "Y" },
    };
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.ADD, body, {});
    if (success) {
      return response;
    } else {
      return false;
    }
  }
}
