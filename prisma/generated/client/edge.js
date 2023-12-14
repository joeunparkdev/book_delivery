Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  detectRuntime,
} = require("./runtime/edge");

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9",
};

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.NotFoundError = NotFoundError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull,
};

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable",
});

exports.Prisma.UsersScalarFieldEnum = {
  userId: "userId",
  usertype: "usertype",
  username: "username",
  kakaoUserId: "kakaoUserId",
  email: "email",
  password: "password",
  isAdmin: "isAdmin",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  points: "points",
  isVerified: "isVerified",
};

exports.Prisma.ProductsScalarFieldEnum = {
  productId: "productId",
  name: "name",
  author: "author",
  imageUrl: "imageUrl",
  price: "price",
  description: "description",
  status: "status",
  usertype: "usertype",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  userId: "userId",
};

exports.Prisma.BookstoresScalarFieldEnum = {
  bookstoreId: "bookstoreId",
  imageUrl: "imageUrl",
  name: "name",
  price: "price",
  address: "address",
  description: "description",
  status: "status",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  userId: "userId",
};

exports.Prisma.RefreshTokenScalarFieldEnum = {
  id: "id",
  token: "token",
  expirationDate: "expirationDate",
  userId: "userId",
};

exports.Prisma.UsersProductsScalarFieldEnum = {
  userId: "userId",
  productId: "productId",
};

exports.Prisma.OrdersScalarFieldEnum = {
  orderId: "orderId",
  userId: "userId",
  productId: "productId",
  address: "address",
  status: "status",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.ReviewsScalarFieldEnum = {
  reviewId: "reviewId",
  userId: "userId",
  productId: "productId",
  reviewText: "reviewText",
  rating: "rating",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
};

exports.Prisma.FollowScalarFieldEnum = {
  followerId: "followerId",
  followingId: "followingId",
};

exports.Prisma.VerifyScalarFieldEnum = {
  verificationId: "verificationId",
  email: "email",
  verificationCode: "verificationCode",
  createdAt: "createdAt",
  expiredAt: "expiredAt",
};

exports.Prisma.SortOrder = {
  asc: "asc",
  desc: "desc",
};

exports.Prisma.NullsOrder = {
  first: "first",
  last: "last",
};

exports.Prisma.ModelName = {
  Users: "Users",
  Products: "Products",
  Bookstores: "Bookstores",
  RefreshToken: "RefreshToken",
  UsersProducts: "UsersProducts",
  Orders: "Orders",
  Reviews: "Reviews",
  Follow: "Follow",
  Verify: "Verify",
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client-js",
    },
    output: {
      value:
        "C:\\Users\\q9887\\바탕 화면\\코딩\\NodeJS_book_delivery\\prisma\\generated\\client",
      fromEnvVar: null,
    },
    config: {
      engineType: "library",
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: "windows",
        native: true,
      },
    ],
    previewFeatures: [],
    isCustomOutput: true,
  },
  relativeEnvPaths: {
    rootEnvPath: "../../../.env",
    schemaEnvPath: "../../../.env",
  },
  relativePath: "../..",
  clientVersion: "5.7.0",
  engineVersion: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9",
  datasourceNames: ["db"],
  activeProvider: "mysql",
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: "DATABASE_URL",
        value: null,
      },
    },
  },
  inlineSchema:
    "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBVc2VycyB7CiAgdXNlcklkICAgICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQG1hcCgidXNlcklkIikKICB1c2VydHlwZSAgICAgIFN0cmluZyAgICAgICAgICBAZGVmYXVsdCgi6rOg6rCd64uYIikKICB1c2VybmFtZSAgICAgIFN0cmluZwogIGtha2FvVXNlcklkICAgSW50PwogIGVtYWlsICAgICAgICAgU3RyaW5nICAgICAgICAgIEB1bmlxdWUKICBwYXNzd29yZCAgICAgIFN0cmluZwogIGlzQWRtaW4gICAgICAgQm9vbGVhbiAgICAgICAgIEBtYXAoImlzX2FkbWluIikKICBjcmVhdGVkQXQgICAgIERhdGVUaW1lICAgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICB1cGRhdGVkQXQgICAgIERhdGVUaW1lICAgICAgICBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRBdCIpCiAgcHJvZHVjdHMgICAgICBQcm9kdWN0c1tdICAgICAgQHJlbGF0aW9uKCJVc2VyUHJvZHVjdHMiKQogIHBvaW50cyAgICAgICAgSW50PwogIHJlZnJlc2hUb2tlbnMgUmVmcmVzaFRva2VuW10KICB1c2VyUHJvZHVjdHMgIFVzZXJzUHJvZHVjdHNbXQogIGZvbGxvd2VycyAgICAgRm9sbG93W10gICAgICAgIEByZWxhdGlvbigiRm9sbG93ZXJzIikKICBmb2xsb3dpbmcgICAgIEZvbGxvd1tdICAgICAgICBAcmVsYXRpb24oIkZvbGxvd2luZyIpCiAgYm9va3N0b3JlcyAgICBCb29rc3RvcmVzW10KICBPcmRlcnMgICAgICAgIE9yZGVyc1tdCiAgdXNlclJldmlld3MgICBSZXZpZXdzW10gICAgICAgQHJlbGF0aW9uKCJVc2VyUmV2aWV3cyIpCiAgaXNWZXJpZmllZCAgICBCb29sZWFuICAgICAgICAgQGRlZmF1bHQoZmFsc2UpCn0KCm1vZGVsIFByb2R1Y3RzIHsKICBwcm9kdWN0SWQgICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQG1hcCgicHJvZHVjdElkIikKICBuYW1lICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQHVuaXF1ZQogIGF1dGhvciAgICAgICAgIFN0cmluZz8KICBpbWFnZVVybCAgICAgICBTdHJpbmc/CiAgcHJpY2UgICAgICAgICAgSW50CiAgZGVzY3JpcHRpb24gICAgU3RyaW5nCiAgc3RhdHVzICAgICAgICAgU3RyaW5nICAgICAgICAgIEBkZWZhdWx0KCJGT1JfU0FMRSIpCiAgdXNlcnR5cGUgICAgICAgU3RyaW5nICAgICAgICAgIEBkZWZhdWx0KCJPV05FUiIpCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgICAgICAgIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkQXQiKQogIHVwZGF0ZWRBdCAgICAgIERhdGVUaW1lICAgICAgICBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRBdCIpCiAgdXNlcklkICAgICAgICAgSW50ICAgICAgICAgICAgIEBtYXAoInVzZXJJZCIpCiAgdXNlciAgICAgICAgICAgVXNlcnMgICAgICAgICAgIEByZWxhdGlvbigiVXNlclByb2R1Y3RzIiwgZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHVzZXJQcm9kdWN0cyAgIFVzZXJzUHJvZHVjdHNbXQogIGJvb2tzdG9yZXMgICAgIEJvb2tzdG9yZXNbXSAgICBAcmVsYXRpb24oIlVzZXJCb29rc3RvcmVzIikKICBPcmRlcnMgICAgICAgICBPcmRlcnNbXQogIHByb2R1Y3RSZXZpZXdzIFJldmlld3NbXSAgICAgICBAcmVsYXRpb24oIlByb2R1Y3RSZXZpZXdzIikKfQoKbW9kZWwgQm9va3N0b3JlcyB7CiAgYm9va3N0b3JlSWQgSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAbWFwKCJib29rc3RvcmVJZCIpCiAgaW1hZ2VVcmwgICAgU3RyaW5nCiAgbmFtZSAgICAgICAgU3RyaW5nCiAgcHJpY2UgICAgICAgSW50CiAgYWRkcmVzcyAgICAgU3RyaW5nICAgICBAZGVmYXVsdCgiVW5rbm93biIpCiAgZGVzY3JpcHRpb24gU3RyaW5nCiAgc3RhdHVzICAgICAgU3RyaW5nICAgICBAZGVmYXVsdCgiT1BFTiIpCiAgY3JlYXRlZEF0ICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICB1cGRhdGVkQXQgICBEYXRlVGltZSAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZEF0IikKICB1c2VySWQgICAgICBJbnQgICAgICAgIEBtYXAoInVzZXJJZCIpCiAgdXNlciAgICAgICAgVXNlcnMgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHByb2R1Y3RzICAgIFByb2R1Y3RzW10gQHJlbGF0aW9uKCJVc2VyQm9va3N0b3JlcyIpCn0KCm1vZGVsIFJlZnJlc2hUb2tlbiB7CiAgaWQgICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB0b2tlbiAgICAgICAgICBTdHJpbmcKICBleHBpcmF0aW9uRGF0ZSBEYXRlVGltZSBAbWFwKCJleHBpcmF0aW9uX2RhdGUiKQogIHVzZXJJZCAgICAgICAgIEludCAgICAgIEBtYXAoInVzZXJJZCIpCiAgdXNlciAgICAgICAgICAgVXNlcnMgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKfQoKbW9kZWwgVXNlcnNQcm9kdWN0cyB7CiAgdXNlcklkICAgIEludAogIHByb2R1Y3RJZCBJbnQKICB1c2VyICAgICAgVXNlcnMgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBwcm9kdWN0ICAgUHJvZHVjdHMgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtwcm9kdWN0SWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgQEBpZChbdXNlcklkLCBwcm9kdWN0SWRdKQp9Cgptb2RlbCBPcmRlcnMgewogIG9yZGVySWQgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAbWFwKCJvcmRlcklkIikKICB1c2VySWQgICAgSW50ICAgICAgQG1hcCgidXNlcklkIikKICB1c2VyICAgICAgVXNlcnMgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBwcm9kdWN0SWQgSW50ICAgICAgQG1hcCgicHJvZHVjdElkIikKICBwcm9kdWN0ICAgUHJvZHVjdHMgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtwcm9kdWN0SWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBhZGRyZXNzICAgU3RyaW5nICAgQGRlZmF1bHQoIlVua25vd24iKQogIHN0YXR1cyAgICBTdHJpbmcgICBAZGVmYXVsdCgiUkVDRUlWRUQiKQogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkQXQiKQoKICBAQGluZGV4KFt1c2VySWRdLCBuYW1lOiAiaWR4X3VzZXJfaWQiKQogIEBAaW5kZXgoW3Byb2R1Y3RJZF0sIG5hbWU6ICJpZHhfcHJvZHVjdF9pZCIpCn0KCm1vZGVsIFJldmlld3MgewogIHJldmlld0lkICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB1c2VySWQgICAgIEludCAgICAgIEBtYXAoInVzZXJJZCIpCiAgdXNlciAgICAgICBVc2VycyAgICBAcmVsYXRpb24oIlVzZXJSZXZpZXdzIiwgZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHByb2R1Y3RJZCAgSW50ICAgICAgQG1hcCgicHJvZHVjdElkIikKICBwcm9kdWN0ICAgIFByb2R1Y3RzIEByZWxhdGlvbigiUHJvZHVjdFJldmlld3MiLCBmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbcHJvZHVjdElkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgcmV2aWV3VGV4dCBTdHJpbmcKICByYXRpbmcgICAgIEludAogIGNyZWF0ZWRBdCAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRBdCIpCiAgdXBkYXRlZEF0ICBEYXRlVGltZSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRBdCIpCgogIEBAaW5kZXgoW3VzZXJJZF0sIG5hbWU6ICJpZHhfdXNlcl9pZCIpCiAgQEBpbmRleChbcHJvZHVjdElkXSwgbmFtZTogImlkeF9wcm9kdWN0X2lkIikKfQoKbW9kZWwgRm9sbG93IHsKICBmb2xsb3dlcklkICBJbnQKICBmb2xsb3dlciAgICBVc2VycyBAcmVsYXRpb24oIkZvbGxvd2VycyIsIGZpZWxkczogW2ZvbGxvd2VySWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgZm9sbG93aW5nSWQgSW50CiAgZm9sbG93aW5nICAgVXNlcnMgQHJlbGF0aW9uKCJGb2xsb3dpbmciLCBmaWVsZHM6IFtmb2xsb3dpbmdJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgQEBpZChbZm9sbG93aW5nSWQsIGZvbGxvd2VySWRdKQp9Cgptb2RlbCBWZXJpZnkgewogIHZlcmlmaWNhdGlvbklkICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBlbWFpbCAgICAgICAgICAgIFN0cmluZwogIHZlcmlmaWNhdGlvbkNvZGUgU3RyaW5nIAogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICBleHBpcmVkQXQgRGF0ZVRpbWU/IEBtYXAoImV4cGlyZWRBdCIpCn0K",
  inlineSchemaHash:
    "c0053711b441f5d61a7d0d9ac3dea2770258aa12d3ec4743c46ca518bcd03a21",
  noEngine: false,
};
config.dirname = "/";

config.runtimeDataModel = JSON.parse(
  '{"models":{"Users":{"dbName":null,"fields":[{"name":"userId","dbName":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"usertype","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"고객님","isGenerated":false,"isUpdatedAt":false},{"name":"username","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"kakaoUserId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"isAdmin","dbName":"is_admin","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Boolean","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"products","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Products","relationName":"UserProducts","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"points","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"refreshTokens","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"RefreshToken","relationName":"RefreshTokenToUsers","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"userProducts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UsersProducts","relationName":"UsersToUsersProducts","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"followers","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Follow","relationName":"Followers","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"following","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Follow","relationName":"Following","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"bookstores","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Bookstores","relationName":"BookstoresToUsers","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Orders","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Orders","relationName":"OrdersToUsers","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"userReviews","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Reviews","relationName":"UserReviews","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"isVerified","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","default":false,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Products":{"dbName":null,"fields":[{"name":"productId","dbName":"productId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"imageUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"price","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"FOR_SALE","isGenerated":false,"isUpdatedAt":false},{"name":"usertype","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"OWNER","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"userId","dbName":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Users","relationName":"UserProducts","relationFromFields":["userId"],"relationToFields":["userId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"userProducts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"UsersProducts","relationName":"ProductsToUsersProducts","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"bookstores","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Bookstores","relationName":"UserBookstores","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"Orders","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Orders","relationName":"OrdersToProducts","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"productReviews","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Reviews","relationName":"ProductReviews","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Bookstores":{"dbName":null,"fields":[{"name":"bookstoreId","dbName":"bookstoreId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"imageUrl","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"price","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"address","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"Unknown","isGenerated":false,"isUpdatedAt":false},{"name":"description","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"OPEN","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"userId","dbName":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Users","relationName":"BookstoresToUsers","relationFromFields":["userId"],"relationToFields":["userId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"products","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Products","relationName":"UserBookstores","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"RefreshToken":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"token","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"expirationDate","dbName":"expiration_date","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Users","relationName":"RefreshTokenToUsers","relationFromFields":["userId"],"relationToFields":["userId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"UsersProducts":{"dbName":null,"fields":[{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"productId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Users","relationName":"UsersToUsersProducts","relationFromFields":["userId"],"relationToFields":["userId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"product","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Products","relationName":"ProductsToUsersProducts","relationFromFields":["productId"],"relationToFields":["productId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":{"name":null,"fields":["userId","productId"]},"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Orders":{"dbName":null,"fields":[{"name":"orderId","dbName":"orderId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Users","relationName":"OrdersToUsers","relationFromFields":["userId"],"relationToFields":["userId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"productId","dbName":"productId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"product","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Products","relationName":"OrdersToProducts","relationFromFields":["productId"],"relationToFields":["productId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"address","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"Unknown","isGenerated":false,"isUpdatedAt":false},{"name":"status","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"String","default":"RECEIVED","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Reviews":{"dbName":null,"fields":[{"name":"reviewId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"userId","dbName":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Users","relationName":"UserReviews","relationFromFields":["userId"],"relationToFields":["userId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"productId","dbName":"productId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"product","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Products","relationName":"ProductReviews","relationFromFields":["productId"],"relationToFields":["productId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"reviewText","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"rating","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","dbName":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Follow":{"dbName":null,"fields":[{"name":"followerId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"follower","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Users","relationName":"Followers","relationFromFields":["followerId"],"relationToFields":["userId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"followingId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"following","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Users","relationName":"Following","relationFromFields":["followingId"],"relationToFields":["userId"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false}],"primaryKey":{"name":null,"fields":["followingId","followerId"]},"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Verify":{"dbName":null,"fields":[{"name":"verificationId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"verificationCode","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","dbName":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"expiredAt","dbName":"expiredAt","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}',
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.getQueryEngineWasmModule = undefined;

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL:
      (typeof globalThis !== "undefined" && globalThis["DATABASE_URL"]) ||
      (typeof process !== "undefined" &&
        process.env &&
        process.env.DATABASE_URL) ||
      undefined,
  },
});

if (
  (typeof globalThis !== "undefined" && globalThis["DEBUG"]) ||
  (typeof process !== "undefined" && process.env && process.env.DEBUG) ||
  undefined
) {
  Debug.enable(
    (typeof globalThis !== "undefined" && globalThis["DEBUG"]) ||
      (typeof process !== "undefined" && process.env && process.env.DEBUG) ||
      undefined,
  );
}

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);
