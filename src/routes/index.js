import userRoutes from './user.routes';
import productRoutes from './product.routes';
import productCateogryRoutes from './productCategory.routes';

const routes = app => {
    userRoutes(app);
    productRoutes(app);
    productCateogryRoutes(app);
}

export default routes;