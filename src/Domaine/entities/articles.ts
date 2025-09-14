export type Articles = {
    id : Promise<string>
    user_ID : string
    shop_ID : string
    title : string
    images : string[]
    category : string[]
    description : string
    price : number
    stock : number
}