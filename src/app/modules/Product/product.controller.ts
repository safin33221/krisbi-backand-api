import { NextFunction, Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await productService.createProduct(req.body)

        res.status(201).json({
            success:true,
            message:"Product Add successfully",
            data:result
        })
    } catch (error) {
        console.log(error);
    }
}

export const productController ={
    createProduct
}