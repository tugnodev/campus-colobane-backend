export type Shop = {
    id: number;
    name: string;
    description: string;
    User_ID: number; // Foreign key to User
    image: string;
};