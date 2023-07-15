import { create, get, getId, update, deleteIdProductCategory } from "../controllers/productCategory.controller";

const productCateogryRoutes = app => {
    app.post('/productcategory', create);
    app.get('/productcategories', get);
    app.get('/productcategory/:id', getId);
    app.put('/productcategory/:id', update);
    app.delete('/productcategory/:id', deleteIdProductCategory);
}

export default productCateogryRoutes;