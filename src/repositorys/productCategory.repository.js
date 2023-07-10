import { prisma } from "../services/prisma";

export const createProductCategory = async (data) => {
    const productCategory = await prisma.product_Category.create({
        data,
    })
    return productCategory;
}

export const getAll = async () => {
    const productCategory = await prisma.product_Category.findMany({})
    return productCategory;
}