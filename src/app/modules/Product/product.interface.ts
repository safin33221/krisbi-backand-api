import mongoose from "mongoose";

export interface IProduct {
    _id: mongoose.ObjectId
    product_name: string;
    description: string;
    price: number;
    category_id: mongoose.ObjectId;
    discountPercentage: number;
    photoUrl: string;
}