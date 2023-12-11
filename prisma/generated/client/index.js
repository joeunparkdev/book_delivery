
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
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.6.0
 * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
 */
Prisma.prismaVersion = {
  client: "5.6.0",
  engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee"
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
  username: 'username',
  kakaoUserId: 'kakaoUserId',
  email: 'email',
  password: 'password',
  isAdmin: 'isAdmin',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductsScalarFieldEnum = {
  productId: 'productId',
  name: 'name',
  price: 'price',
  city: 'city',
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

exports.Prisma.FollowScalarFieldEnum = {
  followerId: 'followerId',
  followingId: 'followingId'
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
  RefreshToken: 'RefreshToken',
  UsersProducts: 'UsersProducts',
  Follow: 'Follow'
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
      "value": "/Users/joeunpark/Documents/GitHub/advanced_mall/prisma/generated/client",
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
  "clientVersion": "5.6.0",
  "engineVersion": "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
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
  "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2dlbmVyYXRlZC9jbGllbnQiCn0KCmRhdGFzb3VyY2UgZGIgewogIHByb3ZpZGVyID0gIm15c3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9Cgptb2RlbCBVc2VycyB7CiAgdXNlcklkICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBtYXAoInVzZXJJZCIpCiAgdXNlcm5hbWUgICAgICAgICBTdHJpbmcKICBrYWthb1VzZXJJZCAgICAgIEludD8gICAKICBlbWFpbCAgICAgICAgICAgIFN0cmluZyAgICAgICAgICAgICAgQHVuaXF1ZQogIHBhc3N3b3JkICAgICAgICAgU3RyaW5nCiAgaXNBZG1pbiAgICAgICAgICBCb29sZWFuICAgICAgICAgICAgIEBtYXAoImlzX2FkbWluIikKICBjcmVhdGVkQXQgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgQGRlZmF1bHQobm93KCkpIEBtYXAoImNyZWF0ZWRBdCIpCiAgdXBkYXRlZEF0ICAgICAgICBEYXRlVGltZSAgICAgICAgICAgIEB1cGRhdGVkQXQgQG1hcCgidXBkYXRlZEF0IikKICBwcm9kdWN0cyAgICAgICAgIFByb2R1Y3RzW10gICAgICAgICAgQHJlbGF0aW9uKCJVc2VyUHJvZHVjdHMiKQogIHJlZnJlc2hUb2tlbnMgICAgUmVmcmVzaFRva2VuW10KICB1c2VyUHJvZHVjdHMgICAgIFVzZXJzUHJvZHVjdHNbXQogIGZvbGxvd2VycyAgRm9sbG93W10gQHJlbGF0aW9uKCJGb2xsb3dlcnMiKQogIGZvbGxvd2luZyBGb2xsb3dbXSBAcmVsYXRpb24oIkZvbGxvd2luZyIpCn0KCm1vZGVsIFByb2R1Y3RzIHsKICBwcm9kdWN0SWQgICAgICAgIEludCAgICAgICAgICAgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkgQG1hcCgicHJvZHVjdElkIikKICBuYW1lICAgICAgICAgICAgIFN0cmluZwogIHByaWNlICAgICAgICAgICAgSW50CiAgY2l0eSAgICAgICAgICAgICBTdHJpbmcgICAgICAgICAgICAgIEBkZWZhdWx0KCJVbmtub3duIikKICBkZXNjcmlwdGlvbiAgICAgIFN0cmluZwogIHN0YXR1cyAgICAgICAgICAgU3RyaW5nICAgICAgICAgICAgICBAZGVmYXVsdCgiRk9SX1NBTEUiKQogIGNyZWF0ZWRBdCAgICAgICAgRGF0ZVRpbWUgICAgICAgICAgICBAZGVmYXVsdChub3coKSkgQG1hcCgiY3JlYXRlZEF0IikKICB1cGRhdGVkQXQgICAgICAgIERhdGVUaW1lICAgICAgICAgICAgQHVwZGF0ZWRBdCBAbWFwKCJ1cGRhdGVkQXQiKQogIHVzZXJJZCAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAbWFwKCJ1c2VySWQiKQogIHVzZXIgICAgICAgICAgICAgVXNlcnMgICAgICAgICAgICAgICBAcmVsYXRpb24oIlVzZXJQcm9kdWN0cyIsIGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICB1c2VyUHJvZHVjdHMgICAgIFVzZXJzUHJvZHVjdHNbXQp9Cgptb2RlbCBSZWZyZXNoVG9rZW4gewogIGlkICAgICAgICAgICAgICAgSW50ICAgICAgICAgICAgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIHRva2VuICAgICAgICAgICAgU3RyaW5nCiAgZXhwaXJhdGlvbkRhdGUgICBEYXRlVGltZSAgICAgICAgICAgIEBtYXAoImV4cGlyYXRpb25fZGF0ZSIpCiAgdXNlcklkICAgICAgICAgICBJbnQgICAgICAgICAgICAgICAgIEBtYXAoInVzZXJJZCIpCiAgdXNlciAgICAgICAgICAgICBVc2VycyAgICAgICAgICAgICAgIEByZWxhdGlvbihmaWVsZHM6IFt1c2VySWRdLCByZWZlcmVuY2VzOiBbdXNlcklkXSwgb25EZWxldGU6IENhc2NhZGUpCn0KCm1vZGVsIFVzZXJzUHJvZHVjdHMgewogIHVzZXJJZCAgICAgICAgICAgSW50CiAgcHJvZHVjdElkICAgICAgICBJbnQKICB1c2VyICAgICAgICAgICAgIFVzZXJzICAgICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3VzZXJJZF0sIHJlZmVyZW5jZXM6IFt1c2VySWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICBwcm9kdWN0ICAgICAgICAgIFByb2R1Y3RzICAgICAgICAgICAgQHJlbGF0aW9uKGZpZWxkczogW3Byb2R1Y3RJZF0sIHJlZmVyZW5jZXM6IFtwcm9kdWN0SWRdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKCiAgQEBpZChbdXNlcklkLCBwcm9kdWN0SWRdKQp9Cgptb2RlbCBGb2xsb3cgewogIGZvbGxvd2VySWQgICAgICBJbnQgICAgICAgICAgICAgICAgIAogIGZvbGxvd2VyICAgICAgIFVzZXJzICAgICAgICAgICAgICAgQHJlbGF0aW9uKCJGb2xsb3dlcnMiLCBmaWVsZHM6IFtmb2xsb3dlcklkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQogIGZvbGxvd2luZ0lkICAgICAgSW50ICAgICAgICAgICAgICAgICAKICBmb2xsb3dpbmcgICAgICAgVXNlcnMgICAgICAgICAgICAgICBAcmVsYXRpb24oIkZvbGxvd2luZyIsIGZpZWxkczogW2ZvbGxvd2luZ0lkXSwgcmVmZXJlbmNlczogW3VzZXJJZF0sIG9uRGVsZXRlOiBDYXNjYWRlKQoKIEBAaWQoW2ZvbGxvd2luZ0lkLCBmb2xsb3dlcklkXSkKfQo=",
  "inlineSchemaHash": "8af977919ab717869b5eacb726fed843e598fc4d9fc70ed67b734bde3bb8a78c"
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

config.runtimeDataModel = JSON.parse("{\"models\":{\"Users\":{\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kakaoUserId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isAdmin\",\"dbName\":\"is_admin\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"products\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"UserProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshTokens\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"RefreshToken\",\"relationName\":\"RefreshTokenToUsers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UsersProducts\",\"relationName\":\"UsersToUsersProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"Followers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"following\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Follow\",\"relationName\":\"Following\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Products\":{\"dbName\":null,\"fields\":[{\"name\":\"productId\",\"dbName\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"city\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"Unknown\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"FOR_SALE\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"dbName\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"dbName\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UserProducts\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userProducts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UsersProducts\",\"relationName\":\"ProductsToUsersProducts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"RefreshToken\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expirationDate\",\"dbName\":\"expiration_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"dbName\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"RefreshTokenToUsers\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"UsersProducts\":{\"dbName\":null,\"fields\":[{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"productId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"UsersToUsersProducts\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"product\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Products\",\"relationName\":\"ProductsToUsersProducts\",\"relationFromFields\":[\"productId\"],\"relationToFields\":[\"productId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"userId\",\"productId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Follow\":{\"dbName\":null,\"fields\":[{\"name\":\"followerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"follower\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"Followers\",\"relationFromFields\":[\"followerId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followingId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"following\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Users\",\"relationName\":\"Following\",\"relationFromFields\":[\"followingId\"],\"relationToFields\":[\"userId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"followingId\",\"followerId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
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
