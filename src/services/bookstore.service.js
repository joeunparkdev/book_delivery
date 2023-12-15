import { StoreRepository } from '../repositories/bookstore.repository.js'
import { ProductsRepository } from '../repositories/products.repository.js'

export class StoresService {
  storeRepository = new StoreRepository()
  productsRepository = new ProductsRepository()

  // findAllStore
  findAllStore = async () => {
    try {
      const bookStores = await this.storeRepository.findAllStore()

      // createdAt을 기준으로 정렬
      bookStores.sort((a, b) => b.createdAt - a.createdAt)

      const bookStoresWithProducts = await Promise.all(
        bookStores.map(async (bookStore) => {
          const products = await this.productsRepository.findProductsByUserId(
            bookStore.userId,
          )

          return {
            userId: bookStore.userId,
            imagePath: bookStore.imagePath,
            imageUrl: bookStore.imageUrl,
            name: bookStore.name,
            price: bookStore.price,
            address: bookStore.address,
            description: bookStore.description,
            status: bookStore.status,
            createdAt: bookStore.createdAt,
            updatedAt: bookStore.updatedAt,
            products: products, // 수정: product를 products로 변경
          }
        }),
      )

      // createdAt을 기준으로 정렬
      bookStoresWithProducts.sort((a, b) => b.createdAt - a.createdAt)

      return bookStoresWithProducts
    } catch (error) {
      console.error('Error in findAllStore:', error)
      throw error // 에러 처리를 적절히 수행하거나 상위 호출자에게 전파합니다.
    }
  }

  findStoreById = async (bookstoreId) => {
    // 저장소(Repository)에게 특정 게시글 하나를 요청합니다.
    try {
      let bookStore = await this.storeRepository.findStoreById(bookstoreId)
      if (!Array.isArray(bookStore)) {
        bookStore = [bookStore]
      }

      const userId = bookStore.length > 0 ? bookStore[0].userId : null

      const bookStoresWithProducts = await Promise.all(
        bookStore.map(async (bookStore) => {
          const products =
            await this.productsRepository.findProductsByUserId(userId)

          return {
            bookstoreId: bookStore.bookstoreId,
            userId: bookStore.userId,
            imagePath: bookStore.imagePath,
            imageUrl: bookStore.imageUrl,
            name: bookStore.name,
            price: bookStore.price,
            address: bookStore.address,
            description: bookStore.description,
            status: bookStore.status,
            createdAt: bookStore.createdAt,
            updatedAt: bookStore.updatedAt,
            products: products,
          }
        }),
      )
      bookStoresWithProducts.sort((a, b) => b.createdAt - a.createdAt)

      return bookStoresWithProducts
    } catch (err) {
      throw err
    }
  }
  // findStoreByUserId
  findStoreByUserId = async (userId) => {
    try {
      const bookstores = await this.storeRepository.findStoreByUserId(userId)
      return bookstores
    } catch (err) {
      throw err
    }
  }

  findMyStore = async (userId) => {
    try {
      let bookstore = await this.storeRepository.findMyStore(userId)

      if (!Array.isArray(bookstore)) {
        bookstore = [bookstore]
      }

      const bookStoresWithProducts = await Promise.all(
        bookstore.map(async (bookStore) => {
          const products =
            await this.productsRepository.findProductsByUserId(userId)

          return {
            bookstoreId: bookStore.bookstoreId,
            userId: bookStore.userId,
            imagePath: bookStore.imagePath,
            imageUrl: bookStore.imageUrl,
            name: bookStore.name,
            price: bookStore.price,
            address: bookStore.address,
            description: bookStore.description,
            status: bookStore.status,
            createdAt: bookStore.createdAt,
            updatedAt: bookStore.updatedAt,
            products: products,
          }
        }),
      )
      bookStoresWithProducts.sort((a, b) => b.createdAt - a.createdAt)

      return bookStoresWithProducts
    } catch (err) {
      throw err
    }
  }

  // createStore
  createStore = async (
    imagePath,
    imageUrl,
    name,
    price,
    address,
    description,
    status,
    userId,
  ) => {
    const createdStore = await this.storeRepository.createStore(
      imagePath,
      imageUrl,
      name,
      price,
      address,
      description,
      status,
      userId,
    )

    return {
      userId: createdStore.userId,
      imagePath: createdStore.imagePath,
      imageUrl: createdStore.imageUrl,
      name: createdStore.name,
      price: createdStore.price,
      address: createdStore.address,
      description: createdStore.description,
      status: createdStore.status,
      createdAt: createdStore.createdAt,
      updatedAt: createdStore.updatedAt,
    }
  }

  // updateStore
  updateStore = async (
    bookstoreId,
    imagePath,
    imageUrl,
    name,
    price,
    address,
    description,
    status,
    updatedAt,
    userId,
  ) => {
    try {
      const existingStore =
        await this.storeRepository.findStoreById(bookstoreId)

      if (!existingStore) {
        throw new Error('해당 ID의 Store이 존재하지 않습니다.')
      }

      console.log(existingStore)
      console.log(userId)
      console.log(existingStore.userId)

      if (existingStore.userId !== userId) {
        throw new Error('해당 Store을 수정할 권한이 없습니다.')
      }

      await this.storeRepository.updateStore(
        bookstoreId,
        imagePath,
        imageUrl,
        name,
        price,
        address,
        description,
        status,
        updatedAt,
        userId,
      )
    } catch (error) {
      console.error('Store 수정 실패:', error.message)
      throw new Error('Store 수정 실패')
    }
  }

  //deleteStore

  deleteStore = async (bookstoreId, userId) => {
    try {
      const existingStore =
        await this.storeRepository.findStoreById(bookstoreId)

      if (!existingStore) {
        throw new Error('Store 조회에 실패하였습니다.')
      }

      if (existingStore.userId !== userId) {
        throw new Error('해당 Store을 삭제할 권한이 없습니다.')
      }

      await this.storeRepository.deleteStore(bookstoreId)

      return {
        message: 'Store 삭제 완료',
      }
    } catch (error) {
      console.error(error)
      throw new Error('Store 삭제 실패')
    }
  }
}
