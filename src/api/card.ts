import req from '../libs/axios';
import { queryType, optionType, cardType } from "../type/index";
export default {
    getCardById(id: number): Promise<cardType[]> {
        return req({
            url: `api/Acard`,
            method: 'get',
            params: {
                id: id,
            },
        }) as any
    },
    getCard(query?: queryType): Promise<cardType[]> {
        return req({
            url: `api/card`,
            method: 'get',
            params: {
                id: query?.id,
                type: query?.type,
                pack: query?.pack,
                pageSize: query?.pageSize,
                page: query?.page,
                keyword: query?.keyword,
            },
        }) as any
    },
    getCardTotal(query?: queryType): Promise<cardType[]> {
        return req({
            url: `api/cardtotal`,
            method: 'get',
            params: {
                id: query?.id,
                type: query?.type,
                pack: query?.pack,
                pageSize: query?.pageSize,
                page: query?.page,
            },
        }) as any
    },
    getPack(): optionType[] {
        return req({
            url: `api/pack`,
            method: 'get',
        }) as any
    },
    getType(): optionType[] {
        return req({
            url: `api/type`,
            method: 'get',
        }) as any
    }
}
