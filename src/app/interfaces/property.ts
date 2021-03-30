export interface Property {
    reference:string;
    title: string;
    specification:string;
    category: string;
    surface: string;
    rooms: string;
    description?: string;
    description2?: string;
    price: string;
    sold: boolean;
    photos?: any[];
}