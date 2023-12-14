
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
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.7.0
 * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
 */
Prisma.prismaVersion = {
  client: "5.7.0",
  engine: "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UsersScalarFieldEnum = {
  userId: 'userId',
  usertype: 'usertype',
  username: 'username',
  kakaoUserId: 'kakaoUserId',
  email: 'email',
  password: 'password',
  isAdmin: 'isAdmin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  points: 'points',
  isVerified: 'isVerified'
};

exports.Prisma.ProductsScalarFieldEnum = {
  productId: 'productId',
  name: 'name',
  author: 'author',
  imageUrl: 'imageUrl',
  imagePath: 'imagePath',
  price: 'price',
  description: 'description',
  status: 'status',
  usertype: 'usertype',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.BookstoresScalarFieldEnum = {
  bookstoreId: 'bookstoreId',
  imageUrl: 'imageUrl',
  name: 'name',
  price: 'price',
  address: 'address',
  description: 'description',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId'
};

exports.Prisma.RefreshTokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  expirationDate: 'expirationDate',
  userId: 'userId'
};

exports.Prisma.UsersProductsScalarFieldEnum = {
  userId: 'userId',
  productId: 'productId'
};

exports.Prisma.OrdersScalarFieldEnum = {
  orderId: 'orderId',
  userId: 'userId',
  productId: 'productId',
  address: 'address',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReviewsScalarFieldEnum = {
  reviewId: 'reviewId',
  userId: 'userId',
  productId: 'productId',
  reviewText: 'reviewText',
  rating: 'rating',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.FollowScalarFieldEnum = {
  followerId: 'followerId',
  followingId: 'followingId'
};

exports.Prisma.VerifyScalarFieldEnum = {
  verificationId: 'verificationId',
  email: 'email',
  verificationCode: 'verificationCode',
  createdAt: 'createdAt',
  expiredAt: 'expiredAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Users: 'Users',
  Products: 'Products',
  Bookstores: 'Bookstores',
  RefreshToken: 'RefreshToken',
  UsersProducts: 'UsersProducts',
  Orders: 'Orders',
  Reviews: 'Reviews',
  Follow: 'Follow',
  Verify: 'Verify'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/joeunpark/book_delivery/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin-arm64",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.7.0",
  "engineVersion": "79fb5193cf0a8fdbef536e4b4a159cad677ab1b9",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KbW9kZWwgVXNlcnMgewogIHVzZXJJZCAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBtYXAoInVzZXJJZCIpCiAgdXNlcnR5cGUgICAgICBTdHJpbmcgICAgICAgICAgQGRlZmF1bHQoIuqzoOqwneuLmCIpCiAgdXNlcm5hbWUgICAgICBTdHJpbmcKICBrYWthb1VzZXJJZCAgIEludD8KICBlbWFpbCAgICAgICAgIFN0cmluZyAgICAgICAgICBAdW5pcXVlCiAgcGFzc3dvcmQgICAgICBTdHJpbmcKICBpc0FkbWluICAgICAgIEJvb2xlYW4gICAgICAgICBAbWFwKCJpc19hZG1pbiIpCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgICAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRBdCIpCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZSAgICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkQXQiKQogIHByb2R1Y3RzICAgICAgUHJvZHVjdHNbXSAgICAgIEByZWxhdGlvbigiVXNlclByb2R1Y3RzIikKICBwb2ludHMgICAgICAgIEludD8KICByZWZyZXNoVG9rZW5zIFJlZnJlc2hUb2tlbltdCiAgdXNlclByb2R1Y3RzICBVc2Vyc1Byb2R1Y3RzW10KICBmb2xsb3dlcnMgICAgIEZvbGxvd1tdICAgICAgICBAcmVsYXRpb24oIkZvbGxvd2VycyIpCiAgZm9sbG93aW5nICAgICBGb2xsb3dbXSAgICAgICAgQHJlbGF0aW9uKCJGb2xsb3dpbmciKQogIGJvb2tzdG9yZXMgICAgQm9va3N0b3Jlc1tdCiAgT3JkZXJzICAgICAgICBPcmRlcnNbXQogIHVzZXJSZXZpZXdzICAgUmV2aWV3c1tdICAgICAgIEByZWxhdGlvbigiVXNlclJldmlld3MiKQogIGlzVmVyaWZpZWQgICAgQm9vbGVhbiAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQp9Cm1vZGVsIFByb2R1Y3RzIHsKICBwcm9kdWN0SWQgICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQG1hcCgicHJvZHVjdElkIikKICBuYW1lICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQHVuaXF1ZQogIGF1dGhvciAgICAgICAgIFN0cmluZz8KICBpbWFnZVVybCAgICAgICBTdHJpbmc/CiAgaW1hZ2VQYXRoICAgICAgU3RyaW5nPwogIHByaWNlICAgICAgICAgIEludAogIGRlc2NyaXB0aW9uICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgIFN0cmluZyAgICAgICAgICBAZGVmYXVsdCgiRk9SX1NBTEUiKQogIHVzZXJ0eXBlICAgICAgIFN0cmluZyAgICAgICAgICBAZGVmYXVsdCgiT1dORVIiKQogIGNyZWF0ZWRBdCAgICAgIERhdGVUaW1lICAgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICB1cGRhdGVkQXQgICAgICBEYXRlVGltZSAgICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkQXQiKQogIHVzZXJJZCAgICAgICAgIEludCAgICAgICAgICAgICBAbWFwKCJ1c2VySWQiKQogIHVzZXIgICAgICAgICAgIFVzZXJzICAgICAgICAgICBAcmVsYXRpb24oIlVzZXJQcm9kdWN0cyIsIGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICB1c2VyUHJvZHVjdHMgICBVc2Vyc1Byb2R1Y3RzW10KICBib29rc3RvcmVzICAgICBCb29rc3RvcmVzW10gICAgQHJlbGF0aW9uKCJVc2VyQm9va3N0b3JlcyIpCiAgT3JkZXJzICAgICAgICAgT3JkZXJzW10KICBwcm9kdWN0UmV2aWV3cyBSZXZpZXdzW10gICAgICAgQHJlbGF0aW9uKCJQcm9kdWN0UmV2aWV3cyIpCn0KbW9kZWwgQm9va3N0b3JlcyB7CiAgYm9va3N0b3JlSWQgSW50ICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKSBAbWFwKCJib29rc3RvcmVJZCIpCiAgaW1hZ2VVcmwgICAgU3RyaW5nCiAgbmFtZSAgICAgICAgU3RyaW5nCiAgcHJpY2UgICAgICAgSW50CiAgYWRkcmVzcyAgICAgU3RyaW5nICAgICBAZGVmYXVsdCgiVW5rbm93biIpCiAgZGVzY3JpcHRpb24gU3RyaW5nCiAgc3RhdHVzICAgICAgU3RyaW5nICAgICBAZGVmYXVsdCgiT1BFTiIpCiAgY3JlYXRlZEF0ICAgRGF0ZVRpbWUgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICB1cGRhdGVkQXQgICBEYXRlVGltZSAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZEF0IikKICB1c2VySWQgICAgICBJbnQgICAgICAgIEBtYXAoInVzZXJJZCIpCiAgdXNlciAgICAgICAgVXNlcnMgICAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHByb2R1Y3RzICAgIFByb2R1Y3RzW10gQHJlbGF0aW9uKCJVc2VyQm9va3N0b3JlcyIpCn0KbW9kZWwgUmVmcmVzaFRva2VuIHsKICBpZCAgICAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHRva2VuICAgICAgICAgIFN0cmluZwogIGV4cGlyYXRpb25EYXRlIERhdGVUaW1lIEBtYXAoImV4cGlyYXRpb25fZGF0ZSIpCiAgdXNlcklkICAgICAgICAgSW50ICAgICAgQG1hcCgidXNlcklkIikKICB1c2VyICAgICAgICAgICBVc2VycyAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQp9Cm1vZGVsIFVzZXJzUHJvZHVjdHMgewogIHVzZXJJZCAgICBJbnQKICBwcm9kdWN0SWQgSW50CiAgdXNlciAgICAgIFVzZXJzICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgcHJvZHVjdCAgIFByb2R1Y3RzIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbcHJvZHVjdElkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgQEBpZChbdXNlcklkLCBwcm9kdWN0SWRdKQp9Cm1vZGVsIE9yZGVycyB7CiAgb3JkZXJJZCAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBtYXAoIm9yZGVySWQiKQogIHVzZXJJZCAgICBJbnQgICAgICBAbWFwKCJ1c2VySWQiKQogIHVzZXIgICAgICBVc2VycyAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHByb2R1Y3RJZCBJbnQgICAgICBAbWFwKCJwcm9kdWN0SWQiKQogIHByb2R1Y3QgICBQcm9kdWN0cyBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW3Byb2R1Y3RJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIGFkZHJlc3MgICBTdHJpbmcgICBAZGVmYXVsdCgiVW5rbm93biIpCiAgc3RhdHVzICAgIFN0cmluZyAgIEBkZWZhdWx0KCJSRUNFSVZFRCIpCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKSBAbWFwKCJjcmVhdGVkQXQiKQogIHVwZGF0ZWRBdCBEYXRlVGltZSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRBdCIpCiAgQEBpbmRleChbdXNlcklkXSwgbmFtZTogImlkeF91c2VyX2lkIikKICBAQGluZGV4KFtwcm9kdWN0SWRdLCBuYW1lOiAiaWR4X3Byb2R1Y3RfaWQiKQp9Cm1vZGVsIFJldmlld3MgewogIHJldmlld0lkICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB1c2VySWQgICAgIEludCAgICAgIEBtYXAoInVzZXJJZCIpCiAgdXNlciAgICAgICBVc2VycyAgICBAcmVsYXRpb24oIlVzZXJSZXZpZXdzIiwgZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHByb2R1Y3RJZCAgSW50ICAgICAgQG1hcCgicHJvZHVjdElkIikKICBwcm9kdWN0ICAgIFByb2R1Y3RzIEByZWxhdGlvbigiUHJvZHVjdFJldmlld3MiLCBmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbcHJvZHVjdElkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgcmV2aWV3VGV4dCBTdHJpbmcKICByYXRpbmcgICAgIEludAogIGNyZWF0ZWRBdCAgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRBdCIpCiAgdXBkYXRlZEF0ICBEYXRlVGltZSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRBdCIpCiAgQEBpbmRleChbdXNlcklkXSwgbmFtZTogImlkeF91c2VyX2lkIikKICBAQGluZGV4KFtwcm9kdWN0SWRdLCBuYW1lOiAiaWR4X3Byb2R1Y3RfaWQiKQp9Cm1vZGVsIEZvbGxvdyB7CiAgZm9sbG93ZXJJZCAgSW50CiAgZm9sbG93ZXIgICAgVXNlcnMgQHJlbGF0aW9uKCJGb2xsb3dlcnMiLCBmaWVsZHM6IFtmb2xsb3dlcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIGZvbGxvd2luZ0lkIEludAogIGZvbGxvd2luZyAgIFVzZXJzIEByZWxhdGlvbigiRm9sbG93aW5nIiwgZmllbGRzOiBbZm9sbG93aW5nSWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgQEBpZChbZm9sbG93aW5nSWQsIGZvbGxvd2VySWRdKQp9Cm1vZGVsIFZlcmlmeSB7CiAgdmVyaWZpY2F0aW9uSWQgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGVtYWlsICAgICAgICAgICAgU3RyaW5nCiAgdmVyaWZpY2F0aW9uQ29kZSBTdHJpbmcKICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRBdCIpCiAgZXhwaXJlZEF0IERhdGVUaW1lPyBAbWFwKCJleHBpcmVkQXQiKQp9",
  "inlineSchemaHash": "c93ee8f7f4bb30890278310fa47ab101f52bf59c0de91a15dbc916e65ab33a4b"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Users\":{\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usertype\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"고객님\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kakaoUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isAdmin\",\"dbName\":\"is_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"UserProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshTokens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RefreshToken\",\"relationName\":\"RefreshTokenToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UsersProducts\",\"relationName\":\"UsersToUsersProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"Followers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"following\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"Following\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookstores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bookstores\",\"relationName\":\"BookstoresToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrdersToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userReviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reviews\",\"relationName\":\"UserReviews\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Products\":{\"dbName\":null,\"fields\":[{\"name\":\"productId\",\"dbName\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imagePath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"FOR_SALE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usertype\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"OWNER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UserProducts\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UsersProducts\",\"relationName\":\"ProductsToUsersProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookstores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bookstores\",\"relationName\":\"UserBookstores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrdersToProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productReviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reviews\",\"relationName\":\"ProductReviews\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Bookstores\":{\"dbName\":null,\"fields\":[{\"name\":\"bookstoreId\",\"dbName\":\"bookstoreId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Unknown\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"OPEN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"BookstoresToUsers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"UserBookstores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RefreshToken\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expirationDate\",\"dbName\":\"expiration_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"RefreshTokenToUsers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UsersProducts\":{\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UsersToUsersProducts\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductsToUsersProducts\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"productId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"productId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Orders\":{\"dbName\":null,\"fields\":[{\"name\":\"orderId\",\"dbName\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"OrdersToUsers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"dbName\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"OrdersToProducts\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"productId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Unknown\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"RECEIVED\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reviews\":{\"dbName\":null,\"fields\":[{\"name\":\"reviewId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UserReviews\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"dbName\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductReviews\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"productId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Follow\":{\"dbName\":null,\"fields\":[{\"name\":\"followerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"follower\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"Followers\",\"relationFromFields\":[\"followerId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followingId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"following\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"Following\",\"relationFromFields\":[\"followingId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"followingId\",\"followerId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Verify\":{\"dbName\":null,\"fields\":[{\"name\":\"verificationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiredAt\",\"dbName\":\"expiredAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined


const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-darwin-arm64.dylib.node");
path.join(process.cwd(), "prisma/generated/client/libquery_engine-darwin-arm64.dylib.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
