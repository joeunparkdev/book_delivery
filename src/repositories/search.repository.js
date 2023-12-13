import { prisma } from "../utils/prisma/index.js";

export class SearchRepository {


    findProducts = async() => {

        const products = await prisma.products.findMany();

        return products
    }

    findProductsByName = async(name) => {

        const products = await prisma.products.findMany({
            where: {
                name: {
                    contains: name
                }
            },
        });

        return products;
    };
    findProductsByAuthor = async(author) => {

        const products = await prisma.products.findMany({
            where: {
                author: {
                    contains: author
                }
            },
        });

        return products;
    };
    findProductsByStatus = async(status) => {

        const products = await prisma.products.findMany({
            where: {
                status: {
                    contains: status
                }
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

    findStores = async() => {

        const stores = await prisma.bookstores.findMany();

        return stores
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

    findStoreByKeyword = async(keyword) => {
        const keywords = keyword.split(',');

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

        return stores;
    }

}