import { defineStore } from "pinia";
import Api from "../api/card";
import { queryType, optionType, cardType } from "../type/index";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      typeOptions: <optionType[]>[],
      packOptions: <optionType[]>[],
      cardTableData: <cardType[]>[],
      searchQuery: <queryType>{},
      cardTableDataTotal: 309,
      pageSize: 30,
      page: 1,
    };
  },
  getters: {},
  actions: {
    async getOption() {
      this.typeOptions = await Api.getType();
      this.packOptions = await Api.getPack();
    },
    async getCard(query?: queryType) {
      const res = (await Api.getCard({
        ...query,
        page: this.page,
        pageSize: this.pageSize,
      })) as any;
      this.cardTableData = res.rows;
      this.cardTableDataTotal = res.count;
    },
    pageChange(page: number) {
      this.page = page;
    },
  },
});
