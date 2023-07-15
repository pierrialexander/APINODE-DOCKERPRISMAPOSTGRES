import { createProduct, getAll, getProductByBarCode, updateProduct, deleteProduct } from "../repositorys/product.repository";

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

export const getByBarCode = async (req, res) => {
    try {
        const product = await getProductByBarCode(req.params.barcode);
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const update = async (req, res) => {
    try {
        const product = await updateProduct(Number(req.params.id), req.body);
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const deleteIdProduct = async (req, res) => {
    try {
        await deleteProduct(Number(req.params.id));
        res.status(200).send({ msg: 'Produto excluído com sucesso' });
    } catch (error) {
        res.status(400).send(error);
    }
}