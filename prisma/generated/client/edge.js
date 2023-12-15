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
} = require('./runtime/edge')


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
    userId: 'userId',
    bookstoreId: 'bookstoreId'
};

exports.Prisma.BookstoresScalarFieldEnum = {
    bookstoreId: 'bookstoreId',
    imageUrl: 'imageUrl',
    imagePath: 'imagePath',
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

exports.Prisma.TakeOrdersScalarFieldEnum = {
    takeOrderId: 'takeOrderId',
    orderId: 'orderId',
    ownerId: 'ownerId',
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
    TakeOrders: 'TakeOrders',
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
        "binaryTargets": [{
            "fromEnvVar": null,
            "value": "darwin-arm64",
            "native": true
        }],
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
    "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibXlzcWwiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KbW9kZWwgVXNlcnMgewogIHVzZXJJZCAgICAgICAgSW50ICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBtYXAoInVzZXJJZCIpCiAgdXNlcnR5cGUgICAgICBTdHJpbmcgICAgICAgICAgQGRlZmF1bHQoIuqzoOqwneuLmCIpCiAgdXNlcm5hbWUgICAgICBTdHJpbmcKICBrYWthb1VzZXJJZCAgIEludD8KICBlbWFpbCAgICAgICAgIFN0cmluZyAgICAgICAgICBAdW5pcXVlCiAgcGFzc3dvcmQgICAgICBTdHJpbmcKICBpc0FkbWluICAgICAgIEJvb2xlYW4gICAgICAgICBAbWFwKCJpc19hZG1pbiIpCiAgY3JlYXRlZEF0ICAgICBEYXRlVGltZSAgICAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRBdCIpCiAgdXBkYXRlZEF0ICAgICBEYXRlVGltZSAgICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkQXQiKQogIHByb2R1Y3RzICAgICAgUHJvZHVjdHNbXSAgICAgIEByZWxhdGlvbigiVXNlclByb2R1Y3RzIikKICBwb2ludHMgICAgICAgIEludD8KICByZWZyZXNoVG9rZW5zIFJlZnJlc2hUb2tlbltdCiAgdXNlclByb2R1Y3RzICBVc2Vyc1Byb2R1Y3RzW10KICBmb2xsb3dlcnMgICAgIEZvbGxvd1tdICAgICAgICBAcmVsYXRpb24oIkZvbGxvd2VycyIpCiAgZm9sbG93aW5nICAgICBGb2xsb3dbXSAgICAgICAgQHJlbGF0aW9uKCJGb2xsb3dpbmciKQogIGJvb2tzdG9yZXMgICAgQm9va3N0b3Jlc1tdCiAgT3JkZXJzICAgICAgICBPcmRlcnNbXQogIHVzZXJSZXZpZXdzICAgUmV2aWV3c1tdICAgICAgIEByZWxhdGlvbigiVXNlclJldmlld3MiKQogIGlzVmVyaWZpZWQgICAgQm9vbGVhbiAgICAgICAgIEBkZWZhdWx0KGZhbHNlKQp9Cm1vZGVsIFByb2R1Y3RzIHsKICBwcm9kdWN0SWQgICAgICBJbnQgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQG1hcCgicHJvZHVjdElkIikKICBuYW1lICAgICAgICAgICBTdHJpbmcgICAgICAgICAgQHVuaXF1ZQogIGF1dGhvciAgICAgICAgIFN0cmluZz8KICBpbWFnZVVybCAgICAgICBTdHJpbmc/CiAgaW1hZ2VQYXRoICAgICAgU3RyaW5nPwogIHByaWNlICAgICAgICAgIEludAogIGRlc2NyaXB0aW9uICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgIFN0cmluZyAgICAgICAgICBAZGVmYXVsdCgiRk9SX1NBTEUiKQogIHVzZXJ0eXBlICAgICAgIFN0cmluZyAgICAgICAgICBAZGVmYXVsdCgiT1dORVIiKQogIGNyZWF0ZWRBdCAgICAgIERhdGVUaW1lICAgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICB1cGRhdGVkQXQgICAgICBEYXRlVGltZSAgICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkQXQiKQogIHVzZXJJZCAgICAgICAgIEludCAgICAgICAgICAgICBAbWFwKCJ1c2VySWQiKQogIHVzZXIgICAgICAgICAgIFVzZXJzICAgICAgICAgICBAcmVsYXRpb24oIlVzZXJQcm9kdWN0cyIsIGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBib29rc3RvcmVJZCAgICBJbnQgICAgICAgICAgICAgQG1hcCgiYm9va3N0b3JlSWQiKQogIHVzZXJQcm9kdWN0cyAgIFVzZXJzUHJvZHVjdHNbXQogIGJvb2tzdG9yZXMgICAgIEJvb2tzdG9yZXNbXSAgICBAcmVsYXRpb24oIlVzZXJCb29rc3RvcmVzIikKICBPcmRlcnMgICAgICAgICBPcmRlcnNbXQogIHByb2R1Y3RSZXZpZXdzIFJldmlld3NbXSAgICAgICBAcmVsYXRpb24oIlByb2R1Y3RSZXZpZXdzIikKfQptb2RlbCBCb29rc3RvcmVzIHsKICBib29rc3RvcmVJZCBJbnQgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBtYXAoImJvb2tzdG9yZUlkIikKICBpbWFnZVVybCAgICBTdHJpbmc/CiAgaW1hZ2VQYXRoICAgU3RyaW5nPwogIG5hbWUgICAgICAgIFN0cmluZwogIHByaWNlICAgICAgIEludAogIGFkZHJlc3MgICAgIFN0cmluZyAgICAgQGRlZmF1bHQoIlVua25vd24iKQogIGRlc2NyaXB0aW9uIFN0cmluZwogIHN0YXR1cyAgICAgIFN0cmluZyAgICAgQGRlZmF1bHQoIk9QRU4iKQogIGNyZWF0ZWRBdCAgIERhdGVUaW1lICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRBdCIpCiAgdXBkYXRlZEF0ICAgRGF0ZVRpbWUgICBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRBdCIpCiAgdXNlcklkICAgICAgSW50ICAgICAgICBAbWFwKCJ1c2VySWQiKQogIHVzZXIgICAgICAgIFVzZXJzICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBwcm9kdWN0cyAgICBQcm9kdWN0c1tdIEByZWxhdGlvbigiVXNlckJvb2tzdG9yZXMiKQp9Cm1vZGVsIFJlZnJlc2hUb2tlbiB7CiAgaWQgICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICB0b2tlbiAgICAgICAgICBTdHJpbmcKICBleHBpcmF0aW9uRGF0ZSBEYXRlVGltZSBAbWFwKCJleHBpcmF0aW9uX2RhdGUiKQogIHVzZXJJZCAgICAgICAgIEludCAgICAgIEBtYXAoInVzZXJJZCIpCiAgdXNlciAgICAgICAgICAgVXNlcnMgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKfQptb2RlbCBVc2Vyc1Byb2R1Y3RzIHsKICB1c2VySWQgICAgSW50CiAgcHJvZHVjdElkIEludAogIHVzZXIgICAgICBVc2VycyAgICBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIHByb2R1Y3QgICBQcm9kdWN0cyBAcmVsYXRpb24oZmllbGRzOiBbcHJvZHVjdElkXSwgcmVmZXJlbmNlczogW3Byb2R1Y3RJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIEBAaWQoW3VzZXJJZCwgcHJvZHVjdElkXSkKfQptb2RlbCBPcmRlcnMgewogIG9yZGVySWQgICAgSW50ICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBtYXAoIm9yZGVySWQiKQogIHVzZXJJZCAgICAgSW50ICAgICAgIEBtYXAoInVzZXJJZCIpCiAgdXNlciAgICAgICBVc2VycyAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBwcm9kdWN0SWQgIEludCAgICAgICBAbWFwKCJwcm9kdWN0SWQiKQogIHByb2R1Y3QgICAgUHJvZHVjdHMgIEByZWxhdGlvbihmaWVsZHM6IFtwcm9kdWN0SWRdLCByZWZlcmVuY2VzOiBbcHJvZHVjdElkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgYWRkcmVzcyAgICBTdHJpbmcgICAgQGRlZmF1bHQoIlVua25vd24iKQogIHN0YXR1cyAgICAgU3RyaW5nICAgIEBkZWZhdWx0KCJSRUNFSVZFRCIpCiAgY3JlYXRlZEF0ICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRBdCIpCiAgdXBkYXRlZEF0ICBEYXRlVGltZSAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkQXQiKQoKICB0YWtlT3JkZXIgIFRha2VPcmRlcnNbXSAKICAKICBAQGluZGV4KFt1c2VySWRdLCBuYW1lOiAiaWR4X3VzZXJfaWQiKQogIEBAaW5kZXgoW3Byb2R1Y3RJZF0sIG5hbWU6ICJpZHhfcHJvZHVjdF9pZCIpCn0KCm1vZGVsIFRha2VPcmRlcnMgewogIHRha2VPcmRlcklkIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBtYXAoIlRha2VPcmRlcklkIikKICBvcmRlcklkICAgICBJbnQgICAgICBAbWFwKCJvcmRlcklkIikKICBvd25lcklkICAgICBJbnQgICAgICBAbWFwKCJvd25lcklkIikKICBjcmVhdGVkQXQgICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICB1cGRhdGVkQXQgICBEYXRlVGltZSBAdXBkYXRlZEF0IEBtYXAoInVwZGF0ZWRBdCIpCgogIG9yZGVyICAgICAgIE9yZGVycyAgIEByZWxhdGlvbihmaWVsZHM6IFtvcmRlcklkXSwgcmVmZXJlbmNlczogW29yZGVySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKfQoKbW9kZWwgUmV2aWV3cyB7CiAgcmV2aWV3SWQgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHVzZXJJZCAgICAgSW50ICAgICAgQG1hcCgidXNlcklkIikKICB1c2VyICAgICAgIFVzZXJzICAgIEByZWxhdGlvbigiVXNlclJldmlld3MiLCBmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgcHJvZHVjdElkICBJbnQgICAgICBAbWFwKCJwcm9kdWN0SWQiKQogIHByb2R1Y3QgICAgUHJvZHVjdHMgQHJlbGF0aW9uKCJQcm9kdWN0UmV2aWV3cyIsIGZpZWxkczogW3Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtwcm9kdWN0SWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICByZXZpZXdUZXh0IFN0cmluZwogIHJhdGluZyAgICAgSW50CiAgY3JlYXRlZEF0ICBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICB1cGRhdGVkQXQgIERhdGVUaW1lIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZEF0IikKICBAQGluZGV4KFt1c2VySWRdLCBuYW1lOiAiaWR4X3VzZXJfaWQiKQogIEBAaW5kZXgoW3Byb2R1Y3RJZF0sIG5hbWU6ICJpZHhfcHJvZHVjdF9pZCIpCn0KbW9kZWwgRm9sbG93IHsKICBmb2xsb3dlcklkICBJbnQKICBmb2xsb3dlciAgICBVc2VycyBAcmVsYXRpb24oIkZvbGxvd2VycyIsIGZpZWxkczogW2ZvbGxvd2VySWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgZm9sbG93aW5nSWQgSW50CiAgZm9sbG93aW5nICAgVXNlcnMgQHJlbGF0aW9uKCJGb2xsb3dpbmciLCBmaWVsZHM6IFtmb2xsb3dpbmdJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBAQGlkKFtmb2xsb3dpbmdJZCwgZm9sbG93ZXJJZF0pCn0KbW9kZWwgVmVyaWZ5IHsKICB2ZXJpZmljYXRpb25JZCAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpCiAgZW1haWwgICAgICAgICAgICBTdHJpbmcKICB2ZXJpZmljYXRpb25Db2RlIFN0cmluZwogIGNyZWF0ZWRBdCBEYXRlVGltZSBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICBleHBpcmVkQXQgRGF0ZVRpbWU/IEBtYXAoImV4cGlyZWRBdCIpCn0=",
    "inlineSchemaHash": "bede65c641d79c14abaffe06a0446fce438367b0ddea1eda22813919b46455bd"
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Users\":{\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usertype\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"고객님\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kakaoUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isAdmin\",\"dbName\":\"is_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"UserProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"points\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshTokens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RefreshToken\",\"relationName\":\"RefreshTokenToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UsersProducts\",\"relationName\":\"UsersToUsersProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"Followers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"following\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"Following\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookstores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bookstores\",\"relationName\":\"BookstoresToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrdersToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userReviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reviews\",\"relationName\":\"UserReviews\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isVerified\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Products\":{\"dbName\":null,\"fields\":[{\"name\":\"productId\",\"dbName\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imagePath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"FOR_SALE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"usertype\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"OWNER\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UserProducts\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookstoreId\",\"dbName\":\"bookstoreId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UsersProducts\",\"relationName\":\"ProductsToUsersProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bookstores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bookstores\",\"relationName\":\"UserBookstores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Orders\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrdersToProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productReviews\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Reviews\",\"relationName\":\"ProductReviews\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Bookstores\":{\"dbName\":null,\"fields\":[{\"name\":\"bookstoreId\",\"dbName\":\"bookstoreId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imagePath\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Unknown\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"OPEN\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"BookstoresToUsers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"UserBookstores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RefreshToken\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expirationDate\",\"dbName\":\"expiration_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"RefreshTokenToUsers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UsersProducts\":{\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UsersToUsersProducts\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductsToUsersProducts\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"productId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"productId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Orders\":{\"dbName\":null,\"fields\":[{\"name\":\"orderId\",\"dbName\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"OrdersToUsers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"dbName\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"OrdersToProducts\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"productId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"address\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Unknown\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"RECEIVED\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"takeOrder\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TakeOrders\",\"relationName\":\"OrdersToTakeOrders\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"TakeOrders\":{\"dbName\":null,\"fields\":[{\"name\":\"takeOrderId\",\"dbName\":\"TakeOrderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"orderId\",\"dbName\":\"orderId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ownerId\",\"dbName\":\"ownerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"order\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Orders\",\"relationName\":\"OrdersToTakeOrders\",\"relationFromFields\":[\"orderId\"],\"relationToFields\":[\"orderId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Reviews\":{\"dbName\":null,\"fields\":[{\"name\":\"reviewId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UserReviews\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"dbName\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductReviews\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"productId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reviewText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Follow\":{\"dbName\":null,\"fields\":[{\"name\":\"followerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"follower\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"Followers\",\"relationFromFields\":[\"followerId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followingId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"following\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"Following\",\"relationFromFields\":[\"followingId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"followingId\",\"followerId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Verify\":{\"dbName\":null,\"fields\":[{\"name\":\"verificationId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verificationCode\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiredAt\",\"dbName\":\"expiredAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.getQueryEngineWasmModule = undefined

config.injectableEdgeEnv = () => ({
    parsed: {
        DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
    }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
    Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)