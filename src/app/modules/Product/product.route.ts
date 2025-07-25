import { Router } from "express";
import { productController } from "./product.controller";

const router = Router()

router.post("/create", productController.createProduct)
router.get("/",productController.getAllProduct)

export const productRoute = router

