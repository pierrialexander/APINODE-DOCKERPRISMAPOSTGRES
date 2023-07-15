import { createProductCategory, getAll, getById, updateProductCategory, deleteProductCategory } from "../repositorys/productCategory.repository";

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

export const getId = async (req, res) => {
    try {
        const getProductCategoryId = await getById(Number(req.params.id));
        res.status(200).send(getProductCategoryId);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const update = async (req, res) => {
    try {
        const updateProductCategoryId = await updateProductCategory(Number(req.params.id), req.body);
        res.status(200).send(updateProductCategoryId);
    } catch (error) {
        res.status(400).send(error);
    }
}

export const deleteIdProductCategory = async (req, res) => {
    try {
        await deleteProductCategory(Number(req.params.id));
        res.status(200).send({ msg: "Categoria excluída com sucesso" });
    } catch (error) {
        res.status(400).send(error);
    }
}