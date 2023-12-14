import { SearchService } from "../services/search.service.js"
export class SearchController {

    searchService = new SearchService();

    findProducts = async(req, res, next) => {
        try {
            const products = await this.searchService.findProducts();

            return res.status(200).json({ data: products });
        } catch (err) {
            next(err);
        }
    };


    findProductsByName = async(req, res, next) => {

        try {
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ error: "검색어를 입력해주세요" });
            }

            const products = await this.searchService.findProductsByName(name);

            return res.status(200).json({ data: products })
        } catch (err) {
            next(err);
        }
    }

    findProductsByAuthor = async(req, res, next) => {

        try {
            const { author } = req.body;
            if (!author) {
                return res.status(400).json({ error: "작가를 입력해주세요" });
            }

            const products = await this.searchService.findProductsByAuthor(author);
            return res.status(200).json({ data: products })
        } catch (err) {
            next(err);
        }
    }


    findProductsByStatus = async(req, res, next) => {
        try {
            const { status } = req.body;
            if (!status) {
                return res.status(400).json({ error: "상태를 선택해주세요" });
            }
            const product = await this.searchService.findProductsByStatus(status)

            return res.status(200).json({ data: product })
        } catch (err) {
            next(err);
        }
    }

    findProductsByMaxPrice = async(req, res, next) => {

        try {
            const { price } = req.body;

            if (!price) {
                return res.status(400).json({ error: "가격을 선택해주세요" });
            }
            const products = await this.searchService.findProductsByMaxPrice(price);

            if (!products || products.length === 0) {
                return res.status(404).json({ error: "해당 가격보다 낮은 가격대의 상품을 찾을 수 없습니다." });
            }

            return res.status(200).json({ data: products });
        } catch (err) {
            next(err);
        }
    };

    findProductByKeyword = async(req, res, next) => {
        try {
            const { keyword } = req.params;
            const { price } = req.body;
            console.log(price)
            console.log(keyword)

            if (!keyword) {
                return res.status(400).json({ error: "keyword을 입력해주세요" });
            }
            const Producs = await this.searchService.findProductByKeyword(keyword, price);

            return res.status(200).json(Producs);
        } catch (err) {
            next(err);
        }

    }
    findStoreByKeyword = async(req, res, next) => {
        try {
            const { keyword } = req.params;

            if (!keyword) {
                return res.status(400).json({ error: "keyword을 입력해주세요" });
            }
            const stores = await this.searchService.findStoreByKeyword(keyword);

            return res.status(200).json(stores);
        } catch (err) {
            next(err);
        }

    }

    findStores = async(req, res, next) => {
        try {
            const stores = await this.searchService.findStores();

            return res.status(200).json({ data: stores });
        } catch (err) {
            next(err);
        }
    };


    findStoresByName = async(req, res, next) => {

        try {
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ error: "검색어를 입력해주세요" });
            }

            const Stores = await this.searchService.findStoresByName(name);

            return res.status(200).json({ data: Stores })
        } catch (err) {
            next(err);
        }
    }


    findStoresByAddress = async(req, res, next) => {

        try {
            const { address } = req.body;
            if (!address) {
                return res.status(400).json({ error: "검색어를 입력해주세요" });
            }

            const stores = await this.searchService.findStoresByAddress(address);

            return res.status(200).json({ data: stores })
        } catch (err) {
            next(err);
        }
    }

    findStoreByStatus = async(req, res, next) => {

        try {
            const { status } = req.body;
            if (!status) {
                return res.status(400).json({ error: "검색어를 입력해주세요" });
            }

            const stores = await this.searchService.findStoreByStatus(status);

            return res.status(200).json({ data: stores })
        } catch (err) {
            next(err);
        }
    }


}






// //별점순 정렬
// document.querySelector(".vote_average").addEventListener("click", async function voteAverage() {
//     searchMovies.sort((a, b) => {
//         return b.vote_average - a.vote_average;
//     });

//     deleteSearchCard();

//     searchMovies.forEach((movie) => {
//         createSearchCard(movie);
//     });
// });

// //최신순 정렬
// document.querySelector(".release_date").addEventListener("click", async function releaseDate() {
//     searchMovies.sort((a, b) => {
//         return new Date(b.release_date) - new Date(a.release_date);
//     });

//     deleteSearchCard();

//     searchMovies.forEach((movie) => {
//         createSearchCard(movie);
//     });
// })

// //조회수 정렬
// document.querySelector(".vote_count").addEventListener("click", async function voteCount() {
//     searchMovies.sort((a, b) => {
//         return b.vote_count - a.vote_count;
//     });

//     deleteSearchCard();

//     searchMovies.forEach((movie) => {
//         createSearchCard(movie);
//     });
// });