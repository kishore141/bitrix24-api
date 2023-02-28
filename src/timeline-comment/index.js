import { NetworkClient } from "@kishore141/network-client";

import CONFIG from "./config";
import Util from "./util";

const SEVEN_DAYS_IN_SECONDS = 604800;

export class TimeLineComment {
  constructor(hookUrl) {
    this.hookUrl = hookUrl;
  }

  static withHook(hookUrl) {
    return new TimeLineComment(hookUrl);
  }

  async getCommentsForDealWithDealIdInPastNumberOfSeconds(dealId, numSeconds = SEVEN_DAYS_IN_SECONDS) {
    const body = {
      FILTER: {
        ENTITY_ID: dealId,
        ENTITY_TYPE: "deal",
      },
    };
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.GET_LIST, body, {});
    if (success) {
      const filteredContactList = Util.getCommentsFromListInPastNumSeconds(response.result, numSeconds);
      return filteredContactList;
    } else {
      return false;
    }
  }

  async addCommentForDealWithDealId(dealId, message) {
    const body = {
      fields: {
        ENTITY_ID: dealId,
        ENTITY_TYPE: "deal",
        COMMENT: message,
      },
    };
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.ADD, body, {});
    if (success) {
      return response;
    } else {
      return false;
    }
  }
}
