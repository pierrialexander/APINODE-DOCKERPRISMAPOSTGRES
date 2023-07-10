import { prisma } from "../services/prisma";

export const createProduct = async (data) => {
    const product = await prisma.product.create({
        data,
    })
    return product;
}

export const getAll = async () => {
    const products = await prisma.product.findMany({})
    return products;
}

export const getProductByBarCode = async (barcode) => {
    const product = await prisma.product.findFirst({
        where: {
            barcode
        }
    })
    return product;
}