import { prisma } from "../utils/prisma/index.js";

export class StoreRepository {

    // findAllStore 

    findAllStore = async() => {
        const bookStore = await prisma.bookstores.findMany();

        return bookStore;
    };


    // findStoreByUserId
    findStoreByUserId = async(userId) => {

        const bookStore = await prisma.bookstores.findFirst({
            where: { userId: +userId },
        });

        return bookStore;
    }

    // findStoreByUserId
    findStoreById = async(bookstoreId) => {
        const bookStore = await prisma.bookstores.findUnique({
            where: {
                bookstoreId: +bookstoreId,
            },
        });

        if (!bookStore) {
            return null;
        }

        return bookStore;
    };


    //createStore
    createStore = async(imageUrl, name, price, address, description, status, userId) => {
        const createdStore = await prisma.bookstores.create({
            data: {
                imageUrl,
                name,
                price,
                address,
                description,
                status,
                userId
            },
        });

        return createdStore;
    };

    // updateStore
    updateStore = async(
        bookstoreId,
        imageUrl,
        name,
        price,
        address,
        description,
        status,
        updatedAt,
        userId) => {
        try {
            const updatedStore = await prisma.bookstores.update({
                where: {
                    bookstoreId: +bookstoreId,
                },
                data: {
                    imageUrl,
                    name,
                    price,
                    address,
                    description,
                    status,
                    updatedAt,
                    userId
                },
            });
            return updatedStore;
        } catch (error) {
            console.error("Store 수정 실패:", error.message);
            throw new Error("Store 수정 실패");
        }
    };



    // deleteStore
    deleteStore = async(bookstoreId) => {
        const deletedStore = await prisma.bookstores.delete({
            where: {
                bookstoreId: +bookstoreId
            }
        });
        return deletedStore
    }

}