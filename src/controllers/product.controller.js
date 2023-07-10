import { createProduct, getAll } from "../repositorys/product.repository";

export const create = async (req, res) => {
    try {
        const product = await createProduct(req.body);
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const get = async (req, res) => {
    try {
        const products = await getAll({});
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send(error);
    }
}
