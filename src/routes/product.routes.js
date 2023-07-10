import { create, get } from "../controllers/product.controller";

const productRoutes = app => {
    app.post('/product', create);
    app.get('/products', get);
}

export default productRoutes;