import { create, get, getId } from "../controllers/productCategory.controller";

const productCateogryRoutes = app => {
    app.post('/productcategory', create);
    app.get('/productcategories', get);
    app.get('/productcategory/:id', getId);
}

export default productCateogryRoutes;