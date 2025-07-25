import { NextFunction, Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await productService.createProduct(req.body)

        res.status(201).json({
            success: true,
            message: "Product Add successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const getAllProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await productService.getAllProduct()
        res.status(201).json({
            success: true,
            message: "Product get successfully",
            data: result.allProduct,
            meta: {
                totalProduct: result.totalProduct
            }
        })
    } catch (error) {
        console.log(error);
    }



}

const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id
        const result = await productService.updateProduct(id, req.body)
        res.status(201).json({
            success: true,
            message: "Product updated successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const result = await productService.deleteProduct(id)
    res.status(201).json({
        success: true,
        message: "Product Deleted  successfully",
        data: result
    })
}


export const productController = {
    createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct
}