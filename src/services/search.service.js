import { SearchRepository } from "../repositories/search.repository.js";

export class SearchService {
    searchRepository = new SearchRepository();

    findProductsByName = async(name) => {
        try {
            const products = await this.searchRepository.findProductsByName(name);
            console.log(products);
            return products;
        } catch (err) {
            throw err;
        }
    }

    findProductsByAuthor = async(author) => {
        try {
            const products = await this.searchRepository.findProductsByAuthor(author);
            return products;
        } catch (err) {

            throw err;
        }
    }

    findProductsByStatus = async(status) => {
        try {
            const products = await this.searchRepository.findProductsByStatus(status);
            return products;
        } catch (err) {
            throw err;
        }
    }

    findProductsByMaxPrice = async(price) => {
        try {
            const products = await this.searchRepository.findProductsByMaxPrice(price);
            return products;
        } catch (err) {

            throw err;
        }
    }
    findProductByKeyword = async(keyword, price) => {
        try {
            const products = await this.searchRepository.findProductByKeyword(keyword);

            if (products.length === 0) {
                throw new Error('키워드에 해당하는 상품이 없습니다.');
            }

            if (price) {
                const filteredProducts = products.filter(product => product.price <= price);

                if (filteredProducts.length === 0) {
                    throw new Error('조건에 맞는 상품이 없습니다.');
                }

                console.log(filteredProducts);
                return filteredProducts;
            }

            return products;
        } catch (err) {
            throw new Error(`Keyword 불러오기 실패하였습니다.`);
        }
    }

    findStoreByKeyword = async(keyword) => {
        try {
            const stores = await this.searchRepository.findStoreByKeyword(keyword);

            console.log(stores)
            if (stores.length === 0) {
                throw new Error('스토어가 존재하지 않습니다.')
            }

            return stores;
        } catch (err) {
            throw new Error('findStoreByKeyword을 실패하였습니다.')
        }
    }

    findStoresByName = async(name) => {
        try {
            const stores = await this.searchRepository.findStoresByName(name);
            return stores;
        } catch (err) {
            throw err;
        }
    }

    findStoresByAddress = async(address) => {
        try {
            const stores = await this.searchRepository.findStoresByAddress(address);

            return stores;
        } catch (err) {
            throw err;
        }
    }

    findStoreByStatus = async(status) => {
        try {
            const stores = await this.searchRepository.findStoreByStatus(status);
            return stores;
        } catch (err) {
            throw err;
        }
    }


}