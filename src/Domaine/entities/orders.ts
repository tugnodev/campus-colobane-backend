enum OrderStatus {
    ACCEPTED = 'accepted',
    SHIPPED = 'shipped',
    DELIVRED = 'delivred',
    CANCELLED = 'cancelled'
}

export type Order = {
    id : Promise<string>
    article_details : {}
    buyer_id : string
    seller_id : string
    order_date : string
    order_status : OrderStatus
}