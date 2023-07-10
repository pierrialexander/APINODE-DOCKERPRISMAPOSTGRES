import { create, get, getByBarCode } from "../controllers/product.controller";

const productRoutes = app => {
    app.post('/product', create);
    app.get('/products', get);
    app.get('/product/:barcode', getByBarCode);
}

export default productRoutes;