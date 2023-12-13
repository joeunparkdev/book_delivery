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



    findProductByKeyword = async(keyword) => {
        const keywords = keyword.split(',');

        const products = await prisma.products.findMany({
            where: {
                OR: keywords.map(keyword => ({
                    OR: [{
                            name: {
                                contains: keyword
                            }
                        },
                        {
                            status: {
                                contains: keyword
                            }
                        },
                        {
                            author: {
                                contains: keyword
                            }
                        },
                        {
                            description: {
                                contains: keyword
                            }
                        },
                    ]
                }))
            }
        });

        return products;
    }

    findStoreByKeyword = async(keyword) => {
        const keywords = keyword.split(',');

        console.log(keywords)
        console.log(keyword)

        const stores = await prisma.bookstores.findMany({
            where: {
                OR: keywords.map(keyword => ({
                    OR: [{
                            name: {
                                contains: keyword
                            }
                        },
                        {
                            address: {
                                contains: keyword
                            }
                        },
                        {
                            description: {
                                contains: keyword
                            }
                        },
                        {
                            status: {
                                contains: keyword
                            }
                        },
                    ]
                }))
            }
        });

        console.log(stores);
        return stores;
    }



    findStoresByName = async(name) => {

        const stores = await prisma.bookstores.findMany({
            where: {
                name: {
                    contains: name
                }
            },
        });

        return stores;
    };
    findStoresByAddress = async(address) => {

        const stores = await prisma.bookstores.findMany({
            where: {
                address: {
                    contains: address
                }
            },
        });

        return stores;
    };

    findStoreByStatus = async(status) => {

        const stores = await prisma.bookstores.findMany({
            where: {
                status: status

            },
        });

        return stores;
    };

}