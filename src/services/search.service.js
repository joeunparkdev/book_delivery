import { SearchRepository } from "../repositories/search.repository.js"

export class SearchService {

    searchRepository = new SearchRepository();

    findProductsByName = async(name) => {
        try {
            const products = await this.searchRepository.findProductsByName(name);
            return {
                productId: products.productId,
                userId: products.userId,
                name: products.name,
                description: products.description,
                status: products.status,
                price: products.price,
                userType: products.userType,
                createdAt: products.createdAt,
                updatedAt: products.updatedAt,
            };
        } catch (err) {
            next(err);
        }
    }

    findProductsByAuthor = async(author) => {
        try {
            const products = await this.searchRepository.findProductsByAuthor(author);
            return {
                productId: products.productId,
                userId: products.userId,
                name: products.name,
                description: products.description,
                status: products.status,
                price: products.price,
                userType: products.userType,
                createdAt: products.createdAt,
                updatedAt: products.updatedAt,
            };
        } catch (err) {
            next(err);
        }
    }

    findProductsByStatus = async(status) => {
        try {
            const products = await this.searchRepository.findProductsByStatus(status);
            return {
                productId: products.productId,
                userId: products.userId,
                name: products.name,
                description: products.description,
                status: products.status,
                price: products.price,
                userType: products.userType,
                createdAt: products.createdAt,
                updatedAt: products.updatedAt,
            };
        } catch (err) {
            next(err);
        }
    }



    findProductsByMaxPrice = async(price) => {
        try {
            const product = await this.productsRepository.findProductsByMaxPrice(price);
            return {
                productId: product.productId,
                userId: product.userId,
                name: product.name,
                description: product.description,
                status: product.status,
                price: product.price,
                userType: product.userType,
                createdAt: product.createdAt,
                updatedAt: product.updatedAt,
            };
        } catch (err) {
            next(err);
        }
    }
}