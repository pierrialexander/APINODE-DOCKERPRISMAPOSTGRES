import { create, get } from "../controllers/productCategory.controller";

const productCateogryRoutes = app => {
    app.post('/productcategory', create);
    app.get('/productcategories', get);
}

export default productCateogryRoutes;