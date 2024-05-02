import { ProductModel, SortEnum } from "@/app/lib/definitions";


export type SortActions = { type: SortEnum }

export interface SortReducerState {
    sort: SortEnum
    products: ProductModel[]
}

export const sortReducer = (state : SortReducerState, action : SortActions) : SortReducerState => {
    switch (action.type) {
        case SortEnum.rating:
            return {
                sort: SortEnum.rating,
                products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
            }
        case SortEnum.price:
            return {
                sort: SortEnum.price,
                products: state.products.sort((a, b) => a.price > b.price ? 1 : - 1)
            }
        default:
            throw new Error('wrong type of sorting')
    }
}