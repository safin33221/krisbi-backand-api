import { IProduct } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: IProduct) => {
    const product = await Product.create(payload)
    return product
}

const getAllProduct = async () => {
    const allProduct = await Product.find({})
    const totalProduct = await Product.countDocuments()

    return {
        allProduct,
        totalProduct

    }
}


const updateProduct = async (id: string, payload: Partial<IProduct>) => {
    const isProductExist = await Product.findById(id)
    if (!isProductExist) {
        throw new Error("Product Not Found")
    }

    const updateProduct = await Product.findByIdAndUpdate(id, payload, { new: true, runValidators: true })
    return updateProduct
}

const deleteProduct = async (id: string) => {
    await Product.findByIdAndDelete(id)
    return null
}
export const productService = {
    createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
}
