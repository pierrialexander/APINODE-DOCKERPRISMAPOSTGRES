import { createProductCategory, getAll } from "../repositorys/productCategory.repository";

export const create = async (req, res) => {
    try {
        const productCategory = await createProductCategory(req.body);
        res.status(200).send(productCategory);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const get = async (req, res) => {
    try {
        const getAllCategories = await getAll({});
        res.status(200).send(getAllCategories);
    } catch (error) {
        res.status(400).send(error);
    }
}