import req from "../libs/axios";
import { queryType, optionType, cardType } from "../type/index";
export default {
  getCard(query?: queryType): Promise<cardType[]> {
    return req({
      url: `api/card`,
      method: "get",
      params: query,
    }) as any;
  },
  getPack(): optionType[] {
    return req({
      url: `api/enablePack`,
      method: "get",
    }) as any;
  },
  getType(): optionType[] {
    return req({
      url: `api/type`,
      method: "get",
    }) as any;
  },
};
