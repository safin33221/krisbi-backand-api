import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: IProduct) => {
    const product = await Product.create(payload)
    return product
}

const getAllProduct = async()=>{
    const allProduct = await Product.find({})
    const totalProduct = await Product.countDocuments()

    return {
        allProduct,
        totalProduct
        
    }
}

export const productService = {
    createProduct,
    getAllProduct
}
