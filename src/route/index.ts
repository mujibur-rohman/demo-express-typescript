import { Application, Router } from "express";
import { ProductRouter } from "./product";

const _routes: Array<[string, Router]> = [["/product", ProductRouter]];

const router: (app: Application) => void = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

export default router;
