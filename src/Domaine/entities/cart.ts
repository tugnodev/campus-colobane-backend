import type { Articles } from "./articles.js"

type item = {
    article: Articles
    quantity: number
}


export type Cart = {
    id : Promise<string>
    cart_details : item[]
    user_id : string
}