import { create, get, getByBarCode, update, deleteIdProduct } from "../controllers/product.controller";

const productRoutes = app => {
    app.post('/product', create);
    app.get('/products', get);
    app.get('/product/:barcode', getByBarCode);
    app.put('/product/:id', update);
    app.delete('/product/:id', deleteIdProduct);
}

export default productRoutes;