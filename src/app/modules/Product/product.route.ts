import { Router } from "express";
import { productController } from "./product.controller";

const router = Router()

router.post("/create", productController.createProduct)
router.get("/", productController.getAllProduct)
router.patch("/:id", productController.updateProduct)
router.delete("/:id", productController.deleteProduct)
export const productRoute = router

