import mongoose, { model, Schema } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>({
    product_name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category_id: {
        type: String,
        // ref: 'Category', // Reference to Category collection
        // required: true,
    },
    discountPercentage: {
        type: Number,
        default: 0,
    },
    photoUrl: {
        type: String,
        required: true,
    },

}, {
    timestamps: false,
    versionKey: false
})

export const Product = model<IProduct>('Product', productSchema)