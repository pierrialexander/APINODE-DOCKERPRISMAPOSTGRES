import { create, get, getId, update, deleteIdUser } from "../controllers/user.controller";

const userRoutes = app => {
    app.post('/user', create);
    app.get('/users', get);
    app.get('/user/:id', getId);
    app.put('/user/:id', update);
    app.delete('/user/:id', deleteIdUser);
}

export default userRoutes;