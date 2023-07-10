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

export const getById = async (id) => {
    const productCategory = await prisma.product_Category.findUnique({
        where: {
            id
        },
    })
    return productCategory;
}