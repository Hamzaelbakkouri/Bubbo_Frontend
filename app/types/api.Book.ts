export interface book {
    id: number;
    title: string;
    creationDate: string;
    image : string;
    author: string;
    description: string;
    rating: number;
    price: number;
    category: Category;
    language: string;
    bgColor: string;
}


export interface Category {
    id: number;
    name: string;
    description: string;
}