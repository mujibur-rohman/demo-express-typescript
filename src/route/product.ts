import { Router } from "express";
import productController from "../controller/product.controller";

export const ProductRouter: Router = Router();

ProductRouter.post("/", productController.add);
