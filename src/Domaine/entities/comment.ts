export type Comment = {
    id: Promise<string>;
    comment: string;
    article_id: string;
    buyer_id: string;
    date: string;
}