import { prisma } from "../utils/prisma/index.js";
import aws from "aws-sdk";
export class StoreRepository {
  // findAllStore

  findAllStore = async () => {
    const bookStore = await prisma.bookstores.findMany();

    return bookStore;
  };

  // findStoreByUserId
  findStoreByUserId = async (userId) => {
    const bookStore = await prisma.bookstores.findFirst({
      where: { userId: +userId },
    });

    return bookStore;
  };
  findMyStore = async (userId) => {
    const bookStore = await prisma.bookstores.findFirst({
      where: { userId: +userId },
    });

    return bookStore;
  };

  // findStoreByUserId
  findStoreById = async (bookstoreId) => {
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
  createStore = async (
    imagePath,
    imageUrl,
    name,

    address,
    description,
    status,
    userId,
  ) => {
    const createdStore = await prisma.bookstores.create({
      data: {
        imagePath,
        imageUrl,
        name,
        address,
        description,
        status,
        userId,
      },
    });

    return createdStore;
  };

  // updateStore
  updateStore = async (
    bookstoreId,
    imagePath,
    imageUrl,
    name,

    address,
    description,
    status,
    updatedAt,
    userId,
  ) => {
    try {
      const findS3Image = await prisma.bookstores.findUnique({
        where: {
          bookstoreId: +bookstoreId,
        },
        select: {
          imagePath: true,
        },
      });

      new aws.S3({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: process.env.REGION,
      }).deleteObject({
        Bucket: process.env.BUCKET,
        Key: findS3Image.imagePath,
      });

      if (!imagePath || !imageUrl) {
        imagePath = null;
        imageUrl = null;
      }

      const updatedStore = await prisma.bookstores.update({
        where: {
          bookstoreId: +bookstoreId,
        },
        data: {
          imagePath,
          imageUrl,
          name,
          address,
          description,
          status,
          updatedAt,
          userId,
        },
      });
      return updatedStore;
    } catch (error) {
      console.error("Store 수정 실패:", error.message);
      throw new Error("Store 수정 실패");
    }
  };

  // deleteStore
  deleteStore = async (bookstoreId) => {
    const findS3Image = await prisma.bookstores.findUnique({
      where: {
        bookstoreId: +bookstoreId,
      },
      select: {
        imagePath: true,
      },
    });

    new aws.S3({
      accessKeyId: process.env.ACCESS_KEY,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
      region: process.env.REGION,
    }).deleteObject({
      Bucket: process.env.BUCKET,
      Key: findS3Image.imagePath,
    });

    const deletedStore = await prisma.bookstores.delete({
      where: {
        bookstoreId: +bookstoreId,
      },
    });
    return deletedStore;
  };
}
