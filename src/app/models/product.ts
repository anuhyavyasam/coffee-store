
export class Product {
    id : number;
    name : string;
    category: string;
    description : string;
    price : number;
    imageUrl : string;
    quantity: number;

    constructor(id: number, name: string, category: string, description: string = '', price: number = 0, imageUrl: string = 'https://i5.walmartimages.com/asr/27fe5d8e-9333-4856-80f0-e83bae30bf04_1.703beb4dc678b58fe42fb4c20f5bec81.jpeg',
    quantity: number = 0){
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.quantity = quantity;
    }
}
