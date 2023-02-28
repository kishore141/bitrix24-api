import { NetworkClient } from "@kishore141/network-client";

import CONFIG from "./config";
import Util from "./util";

const SEVEN_DAYS_IN_SECONDS = 604800;

export class Activity {
  constructor(hookUrl) {
    this.hookUrl = hookUrl;
  }

  static withHook(hookUrl) {
    return new Activity(hookUrl);
  }

  async getActivityForDealWithDealIdInPastNumberOfSeconds(dealId, numSeconds = SEVEN_DAYS_IN_SECONDS) {
    const body = {
      FILTER: {
        OWNER_TYPE_ID: "2", // for deal
        OWNER_ID: dealId,
      },
    };
    const { success, response } = await NetworkClient.postJson(this.hookUrl + CONFIG.URL.GET_LIST, body, {});
    if (success) {
      const filteredList = Util.getInActiveActivityFromListInPastNumSeconds(response.result, numSeconds);
      return filteredList;
    } else {
      return false;
    }
  }
}
