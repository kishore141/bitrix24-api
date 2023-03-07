import { NetworkClient } from "@kishore141/network-client";

import CONFIG from "./config";

export class Deal {
  constructor(hookUrl) {
    this.hookUrl = hookUrl;
  }

  static withHook(hookUrl) {
    return new Deal(hookUrl);
  }

  async getList(filter = {}, select = ["ID", "Title", "ASSIGNED_BY_ID"]) {
    const body = {
      filter,
      select,
    };
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.GET_LIST, body, {});
    if (success) {
      return response.result;
    } else {
      return false;
    }
  }

  async update(id, data) {
    const body = {
      id,
      fields: data,
    };
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.UPDATE, body, {});
    if (success) {
      return response;
    } else {
      return false;
    }
  }

  async create(data) {
    const body = {
      fields: data,
    };
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.CREATE, body, {});
    if (success) {
      return response;
    } else {
      return false;
    }
  }

  async getFields() {
    const body = {};
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.FIELDS, body, {});
    if (success) {
      return response.result;
    } else {
      return false;
    }
  }
}
