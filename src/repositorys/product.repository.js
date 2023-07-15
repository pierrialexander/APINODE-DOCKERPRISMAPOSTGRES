import { prisma } from "../services/prisma";

export const createProduct = async (data) => {
    const product = await prisma.product.create({
        data,
    })
    return product;
}

export const getAll = async () => {
    const products = await prisma.product.findMany({
        orderBy: {
            id: 'asc'
        }
    })
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

export const updateProduct = async (id, data) => {
    const product = await prisma.product.update({
        where: {
            id 
        },
        data,
    })
    return product;
}

export const deleteProduct = async (id) => {
    await prisma.product.delete({
        where: {
            id
        }
    });
    return;
}