import { SearchService } from "../services/search.service.js"
import { ProductsService } from "../services/products.service.js"

//스토어 찾기
//상품찾기( "name": "책입니다",
//   "description": "설명입니다",
//   "status": "FOR_SALE",
//   "price": 10000,)



export class SearchController {


    searchService = new SearchService();


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


    findProductsByWordAndStatus = async(req, res, next) => {

        try {
            const { status } = req.body;

            if (!status) {
                return res.status(400).json({ error: "상태를 선택해주세요" });
            }

            const { name, description } = req.body;
            if (!name || !description) {
                return res.status(400).json({ error: "검색어를 입력해주세요" });
            }

            const productByStatus = await this.searchService.findProductsByStatus(status);
            const productByWord = await this.searchService.findProductsByName(name, description);

            const combinedResults = productByStatus.filter(productStatus =>
                productByWord.some(productWord => productStatus.id === productWord.id)
            );

            return res.status(200).json(combinedResults);
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