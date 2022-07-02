// export interface cardDetal {
//     type: string;
//     pack: string;
//     front: string;
//     back: string;
//     id?: number;
// }

export interface queryType {
    type?: number;
    pack?: number;
    id?: number;
    pageSize?: number;
    page?: number;
    keyword?: string;
}

export interface cardType {
    type?: string;
    pack?: string;
    front: string;
    back?: string;
    id?: number;
    author?: string;
}

export interface optionType {
    label: string;
    value: number;
}