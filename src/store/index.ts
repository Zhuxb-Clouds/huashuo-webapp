import { defineStore } from 'pinia';
import Api from "../api/card";
import { queryType, optionType, cardType } from "../type/index";

export const mainStore = defineStore('main', {
  state: () => {
    return {
      typeOptions: <optionType[]>[],
      packOptions: <optionType[]>[],
      cardTableData: <cardType[]>[],
      searchQuery: <queryType>{},
      cardTableDataTotal: 309,
      pageSize: 30,
      page: 1,
    }
  },
  getters: {},
  actions: {
    async getOption() {
      this.typeOptions = await Api.getType()
      this.packOptions = await Api.getPack()
    },
    async getCardById(id: number) {
      return await Api.getCardById(id) as any
    },
    async getCard(query?: queryType) {
      const res = await Api.getCard({ ...query, ...this.searchQuery, page: this.page, pageSize: this.pageSize }) as any;
      this.cardTableData = res.rows;
      this.cardTableDataTotal = res.count;
    },
    search(type: number, pack: number, keyword: string) {
      this.searchQuery = { type: type, pack: pack, keyword: keyword }
    },
    pageChange(page: number) {
      this.page = page
    },
  }
})