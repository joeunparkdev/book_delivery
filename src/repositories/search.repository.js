import { prisma } from "../utils/prisma/index.js";

export class SearchRepository {
    findProductsByName = async(name) => {

        const products = await prisma.products.findMany({
            where: {
                name: name,
            },
        });

        return products;
    };
    findProductsByAuthor = async(author) => {

        const products = await prisma.products.findMany({
            where: {
                author: author,
            },
        });

        return products;
    };
    findProductsByStatus = async(status) => {

        const products = await prisma.products.findMany({
            where: {
                status: status,
            },
        });

        return products;
    };
    findProductsByMaxPrice = async(price) => {
        const products = await prisma.products.findMany({
            where: {
                price: {
                    lte: +price
                },
            },
        });

        return products;
    };

}