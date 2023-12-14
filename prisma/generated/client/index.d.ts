
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Bookstores
 * 
 */
export type Bookstores = $Result.DefaultSelection<Prisma.$BookstoresPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model UsersProducts
 * 
 */
export type UsersProducts = $Result.DefaultSelection<Prisma.$UsersProductsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Follow
 * 
 */
export type Follow = $Result.DefaultSelection<Prisma.$FollowPayload>
/**
 * Model Verify
 * 
 */
export type Verify = $Result.DefaultSelection<Prisma.$VerifyPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs>;

  /**
   * `prisma.bookstores`: Exposes CRUD operations for the **Bookstores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookstores
    * const bookstores = await prisma.bookstores.findMany()
    * ```
    */
  get bookstores(): Prisma.BookstoresDelegate<ExtArgs>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs>;

  /**
   * `prisma.usersProducts`: Exposes CRUD operations for the **UsersProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsersProducts
    * const usersProducts = await prisma.usersProducts.findMany()
    * ```
    */
  get usersProducts(): Prisma.UsersProductsDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs>;

  /**
   * `prisma.follow`: Exposes CRUD operations for the **Follow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Follows
    * const follows = await prisma.follow.findMany()
    * ```
    */
  get follow(): Prisma.FollowDelegate<ExtArgs>;

  /**
   * `prisma.verify`: Exposes CRUD operations for the **Verify** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifies
    * const verifies = await prisma.verify.findMany()
    * ```
    */
  get verify(): Prisma.VerifyDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'products' | 'bookstores' | 'refreshToken' | 'usersProducts' | 'orders' | 'reviews' | 'follow' | 'verify'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Bookstores: {
        payload: Prisma.$BookstoresPayload<ExtArgs>
        fields: Prisma.BookstoresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookstoresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookstoresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookstoresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookstoresPayload>
          }
          findFirst: {
            args: Prisma.BookstoresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookstoresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookstoresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookstoresPayload>
          }
          findMany: {
            args: Prisma.BookstoresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookstoresPayload>[]
          }
          create: {
            args: Prisma.BookstoresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookstoresPayload>
          }
          createMany: {
            args: Prisma.BookstoresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BookstoresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookstoresPayload>
          }
          update: {
            args: Prisma.BookstoresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookstoresPayload>
          }
          deleteMany: {
            args: Prisma.BookstoresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BookstoresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BookstoresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BookstoresPayload>
          }
          aggregate: {
            args: Prisma.BookstoresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookstores>
          }
          groupBy: {
            args: Prisma.BookstoresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookstoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookstoresCountArgs<ExtArgs>,
            result: $Utils.Optional<BookstoresCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      UsersProducts: {
        payload: Prisma.$UsersProductsPayload<ExtArgs>
        fields: Prisma.UsersProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersProductsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersProductsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersProductsPayload>
          }
          findFirst: {
            args: Prisma.UsersProductsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersProductsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersProductsPayload>
          }
          findMany: {
            args: Prisma.UsersProductsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersProductsPayload>[]
          }
          create: {
            args: Prisma.UsersProductsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersProductsPayload>
          }
          createMany: {
            args: Prisma.UsersProductsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersProductsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersProductsPayload>
          }
          update: {
            args: Prisma.UsersProductsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersProductsPayload>
          }
          deleteMany: {
            args: Prisma.UsersProductsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersProductsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersProductsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersProductsPayload>
          }
          aggregate: {
            args: Prisma.UsersProductsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsersProducts>
          }
          groupBy: {
            args: Prisma.UsersProductsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersProductsCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersProductsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>,
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>,
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Follow: {
        payload: Prisma.$FollowPayload<ExtArgs>
        fields: Prisma.FollowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findFirst: {
            args: Prisma.FollowFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          findMany: {
            args: Prisma.FollowFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>[]
          }
          create: {
            args: Prisma.FollowCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          createMany: {
            args: Prisma.FollowCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FollowDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          update: {
            args: Prisma.FollowUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          deleteMany: {
            args: Prisma.FollowDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FollowUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FollowUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowPayload>
          }
          aggregate: {
            args: Prisma.FollowAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFollow>
          }
          groupBy: {
            args: Prisma.FollowGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FollowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowCountArgs<ExtArgs>,
            result: $Utils.Optional<FollowCountAggregateOutputType> | number
          }
        }
      }
      Verify: {
        payload: Prisma.$VerifyPayload<ExtArgs>
        fields: Prisma.VerifyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerifyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerifyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerifyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerifyPayload>
          }
          findFirst: {
            args: Prisma.VerifyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerifyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerifyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerifyPayload>
          }
          findMany: {
            args: Prisma.VerifyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerifyPayload>[]
          }
          create: {
            args: Prisma.VerifyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerifyPayload>
          }
          createMany: {
            args: Prisma.VerifyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerifyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerifyPayload>
          }
          update: {
            args: Prisma.VerifyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerifyPayload>
          }
          deleteMany: {
            args: Prisma.VerifyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerifyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerifyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerifyPayload>
          }
          aggregate: {
            args: Prisma.VerifyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerify>
          }
          groupBy: {
            args: Prisma.VerifyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerifyGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerifyCountArgs<ExtArgs>,
            result: $Utils.Optional<VerifyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    products: number
    refreshTokens: number
    userProducts: number
    followers: number
    following: number
    bookstores: number
    Orders: number
    userReviews: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | UsersCountOutputTypeCountProductsArgs
    refreshTokens?: boolean | UsersCountOutputTypeCountRefreshTokensArgs
    userProducts?: boolean | UsersCountOutputTypeCountUserProductsArgs
    followers?: boolean | UsersCountOutputTypeCountFollowersArgs
    following?: boolean | UsersCountOutputTypeCountFollowingArgs
    bookstores?: boolean | UsersCountOutputTypeCountBookstoresArgs
    Orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    userReviews?: boolean | UsersCountOutputTypeCountUserReviewsArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersProductsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountBookstoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookstoresWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }



  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    userProducts: number
    bookstores: number
    Orders: number
    productReviews: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userProducts?: boolean | ProductsCountOutputTypeCountUserProductsArgs
    bookstores?: boolean | ProductsCountOutputTypeCountBookstoresArgs
    Orders?: boolean | ProductsCountOutputTypeCountOrdersArgs
    productReviews?: boolean | ProductsCountOutputTypeCountProductReviewsArgs
  }

  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountUserProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersProductsWhereInput
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountBookstoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookstoresWhereInput
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProductReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }



  /**
   * Count Type BookstoresCountOutputType
   */

  export type BookstoresCountOutputType = {
    products: number
  }

  export type BookstoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BookstoresCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * BookstoresCountOutputType without action
   */
  export type BookstoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookstoresCountOutputType
     */
    select?: BookstoresCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BookstoresCountOutputType without action
   */
  export type BookstoresCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userId: number | null
    kakaoUserId: number | null
    points: number | null
  }

  export type UsersSumAggregateOutputType = {
    userId: number | null
    kakaoUserId: number | null
    points: number | null
  }

  export type UsersMinAggregateOutputType = {
    userId: number | null
    usertype: string | null
    username: string | null
    kakaoUserId: number | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    points: number | null
    isVerified: boolean | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: number | null
    usertype: string | null
    username: string | null
    kakaoUserId: number | null
    email: string | null
    password: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    points: number | null
    isVerified: boolean | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    usertype: number
    username: number
    kakaoUserId: number
    email: number
    password: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    points: number
    isVerified: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userId?: true
    kakaoUserId?: true
    points?: true
  }

  export type UsersSumAggregateInputType = {
    userId?: true
    kakaoUserId?: true
    points?: true
  }

  export type UsersMinAggregateInputType = {
    userId?: true
    usertype?: true
    username?: true
    kakaoUserId?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    points?: true
    isVerified?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    usertype?: true
    username?: true
    kakaoUserId?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    points?: true
    isVerified?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    usertype?: true
    username?: true
    kakaoUserId?: true
    email?: true
    password?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    points?: true
    isVerified?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: number
    usertype: string
    username: string
    kakaoUserId: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
    points: number | null
    isVerified: boolean
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    usertype?: boolean
    username?: boolean
    kakaoUserId?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    points?: boolean
    isVerified?: boolean
    products?: boolean | Users$productsArgs<ExtArgs>
    refreshTokens?: boolean | Users$refreshTokensArgs<ExtArgs>
    userProducts?: boolean | Users$userProductsArgs<ExtArgs>
    followers?: boolean | Users$followersArgs<ExtArgs>
    following?: boolean | Users$followingArgs<ExtArgs>
    bookstores?: boolean | Users$bookstoresArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    userReviews?: boolean | Users$userReviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    userId?: boolean
    usertype?: boolean
    username?: boolean
    kakaoUserId?: boolean
    email?: boolean
    password?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    points?: boolean
    isVerified?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Users$productsArgs<ExtArgs>
    refreshTokens?: boolean | Users$refreshTokensArgs<ExtArgs>
    userProducts?: boolean | Users$userProductsArgs<ExtArgs>
    followers?: boolean | Users$followersArgs<ExtArgs>
    following?: boolean | Users$followingArgs<ExtArgs>
    bookstores?: boolean | Users$bookstoresArgs<ExtArgs>
    Orders?: boolean | Users$OrdersArgs<ExtArgs>
    userReviews?: boolean | Users$userReviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      userProducts: Prisma.$UsersProductsPayload<ExtArgs>[]
      followers: Prisma.$FollowPayload<ExtArgs>[]
      following: Prisma.$FollowPayload<ExtArgs>[]
      bookstores: Prisma.$BookstoresPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      userReviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      usertype: string
      username: string
      kakaoUserId: number | null
      email: string
      password: string
      isAdmin: boolean
      createdAt: Date
      updatedAt: Date
      points: number | null
      isVerified: boolean
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Users$productsArgs<ExtArgs> = {}>(args?: Subset<T, Users$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    refreshTokens<T extends Users$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, Users$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, 'findMany'> | Null>;

    userProducts<T extends Users$userProductsArgs<ExtArgs> = {}>(args?: Subset<T, Users$userProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    followers<T extends Users$followersArgs<ExtArgs> = {}>(args?: Subset<T, Users$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findMany'> | Null>;

    following<T extends Users$followingArgs<ExtArgs> = {}>(args?: Subset<T, Users$followingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findMany'> | Null>;

    bookstores<T extends Users$bookstoresArgs<ExtArgs> = {}>(args?: Subset<T, Users$bookstoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'findMany'> | Null>;

    Orders<T extends Users$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Users$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findMany'> | Null>;

    userReviews<T extends Users$userReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Users$userReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly userId: FieldRef<"Users", 'Int'>
    readonly usertype: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly kakaoUserId: FieldRef<"Users", 'Int'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly isAdmin: FieldRef<"Users", 'Boolean'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
    readonly points: FieldRef<"Users", 'Int'>
    readonly isVerified: FieldRef<"Users", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users.products
   */
  export type Users$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * Users.refreshTokens
   */
  export type Users$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }


  /**
   * Users.userProducts
   */
  export type Users$userProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    where?: UsersProductsWhereInput
    orderBy?: UsersProductsOrderByWithRelationInput | UsersProductsOrderByWithRelationInput[]
    cursor?: UsersProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersProductsScalarFieldEnum | UsersProductsScalarFieldEnum[]
  }


  /**
   * Users.followers
   */
  export type Users$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }


  /**
   * Users.following
   */
  export type Users$followingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    cursor?: FollowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }


  /**
   * Users.bookstores
   */
  export type Users$bookstoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    where?: BookstoresWhereInput
    orderBy?: BookstoresOrderByWithRelationInput | BookstoresOrderByWithRelationInput[]
    cursor?: BookstoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookstoresScalarFieldEnum | BookstoresScalarFieldEnum[]
  }


  /**
   * Users.Orders
   */
  export type Users$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * Users.userReviews
   */
  export type Users$userReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }


  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
  }



  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    productId: number | null
    price: number | null
    userId: number | null
  }

  export type ProductsSumAggregateOutputType = {
    productId: number | null
    price: number | null
    userId: number | null
  }

  export type ProductsMinAggregateOutputType = {
    productId: number | null
    name: string | null
    author: string | null
    imageUrl: string | null
    price: number | null
    description: string | null
    status: string | null
    usertype: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    productId: number | null
    name: string | null
    author: string | null
    imageUrl: string | null
    price: number | null
    description: string | null
    status: string | null
    usertype: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type ProductsCountAggregateOutputType = {
    productId: number
    name: number
    author: number
    imageUrl: number
    price: number
    description: number
    status: number
    usertype: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    productId?: true
    price?: true
    userId?: true
  }

  export type ProductsSumAggregateInputType = {
    productId?: true
    price?: true
    userId?: true
  }

  export type ProductsMinAggregateInputType = {
    productId?: true
    name?: true
    author?: true
    imageUrl?: true
    price?: true
    description?: true
    status?: true
    usertype?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProductsMaxAggregateInputType = {
    productId?: true
    name?: true
    author?: true
    imageUrl?: true
    price?: true
    description?: true
    status?: true
    usertype?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type ProductsCountAggregateInputType = {
    productId?: true
    name?: true
    author?: true
    imageUrl?: true
    price?: true
    description?: true
    status?: true
    usertype?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    productId: number
    name: string
    author: string | null
    imageUrl: string | null
    price: number
    description: string
    status: string
    usertype: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    name?: boolean
    author?: boolean
    imageUrl?: boolean
    price?: boolean
    description?: boolean
    status?: boolean
    usertype?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    userProducts?: boolean | Products$userProductsArgs<ExtArgs>
    bookstores?: boolean | Products$bookstoresArgs<ExtArgs>
    Orders?: boolean | Products$OrdersArgs<ExtArgs>
    productReviews?: boolean | Products$productReviewsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    productId?: boolean
    name?: boolean
    author?: boolean
    imageUrl?: boolean
    price?: boolean
    description?: boolean
    status?: boolean
    usertype?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    userProducts?: boolean | Products$userProductsArgs<ExtArgs>
    bookstores?: boolean | Products$bookstoresArgs<ExtArgs>
    Orders?: boolean | Products$OrdersArgs<ExtArgs>
    productReviews?: boolean | Products$productReviewsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      userProducts: Prisma.$UsersProductsPayload<ExtArgs>[]
      bookstores: Prisma.$BookstoresPayload<ExtArgs>[]
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
      productReviews: Prisma.$ReviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      name: string
      author: string | null
      imageUrl: string | null
      price: number
      description: string
      status: string
      usertype: string
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["products"]>
    composites: {}
  }


  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const productsWithProductIdOnly = await prisma.products.findMany({ select: { productId: true } })
     * 
    **/
    findMany<T extends ProductsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends ProductsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends ProductsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends ProductsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>
    ): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    userProducts<T extends Products$userProductsArgs<ExtArgs> = {}>(args?: Subset<T, Products$userProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    bookstores<T extends Products$bookstoresArgs<ExtArgs> = {}>(args?: Subset<T, Products$bookstoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'findMany'> | Null>;

    Orders<T extends Products$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Products$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findMany'> | Null>;

    productReviews<T extends Products$productReviewsArgs<ExtArgs> = {}>(args?: Subset<T, Products$productReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Products model
   */ 
  interface ProductsFieldRefs {
    readonly productId: FieldRef<"Products", 'Int'>
    readonly name: FieldRef<"Products", 'String'>
    readonly author: FieldRef<"Products", 'String'>
    readonly imageUrl: FieldRef<"Products", 'String'>
    readonly price: FieldRef<"Products", 'Int'>
    readonly description: FieldRef<"Products", 'String'>
    readonly status: FieldRef<"Products", 'String'>
    readonly usertype: FieldRef<"Products", 'String'>
    readonly createdAt: FieldRef<"Products", 'DateTime'>
    readonly updatedAt: FieldRef<"Products", 'DateTime'>
    readonly userId: FieldRef<"Products", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }


  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
  }


  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }


  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }


  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
  }


  /**
   * Products.userProducts
   */
  export type Products$userProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    where?: UsersProductsWhereInput
    orderBy?: UsersProductsOrderByWithRelationInput | UsersProductsOrderByWithRelationInput[]
    cursor?: UsersProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersProductsScalarFieldEnum | UsersProductsScalarFieldEnum[]
  }


  /**
   * Products.bookstores
   */
  export type Products$bookstoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    where?: BookstoresWhereInput
    orderBy?: BookstoresOrderByWithRelationInput | BookstoresOrderByWithRelationInput[]
    cursor?: BookstoresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookstoresScalarFieldEnum | BookstoresScalarFieldEnum[]
  }


  /**
   * Products.Orders
   */
  export type Products$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * Products.productReviews
   */
  export type Products$productReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }


  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
  }



  /**
   * Model Bookstores
   */

  export type AggregateBookstores = {
    _count: BookstoresCountAggregateOutputType | null
    _avg: BookstoresAvgAggregateOutputType | null
    _sum: BookstoresSumAggregateOutputType | null
    _min: BookstoresMinAggregateOutputType | null
    _max: BookstoresMaxAggregateOutputType | null
  }

  export type BookstoresAvgAggregateOutputType = {
    bookstoreId: number | null
    price: number | null
    userId: number | null
  }

  export type BookstoresSumAggregateOutputType = {
    bookstoreId: number | null
    price: number | null
    userId: number | null
  }

  export type BookstoresMinAggregateOutputType = {
    bookstoreId: number | null
    imageUrl: string | null
    name: string | null
    price: number | null
    address: string | null
    description: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type BookstoresMaxAggregateOutputType = {
    bookstoreId: number | null
    imageUrl: string | null
    name: string | null
    price: number | null
    address: string | null
    description: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type BookstoresCountAggregateOutputType = {
    bookstoreId: number
    imageUrl: number
    name: number
    price: number
    address: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type BookstoresAvgAggregateInputType = {
    bookstoreId?: true
    price?: true
    userId?: true
  }

  export type BookstoresSumAggregateInputType = {
    bookstoreId?: true
    price?: true
    userId?: true
  }

  export type BookstoresMinAggregateInputType = {
    bookstoreId?: true
    imageUrl?: true
    name?: true
    price?: true
    address?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BookstoresMaxAggregateInputType = {
    bookstoreId?: true
    imageUrl?: true
    name?: true
    price?: true
    address?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BookstoresCountAggregateInputType = {
    bookstoreId?: true
    imageUrl?: true
    name?: true
    price?: true
    address?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type BookstoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookstores to aggregate.
     */
    where?: BookstoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookstores to fetch.
     */
    orderBy?: BookstoresOrderByWithRelationInput | BookstoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookstoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookstores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookstores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookstores
    **/
    _count?: true | BookstoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookstoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookstoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookstoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookstoresMaxAggregateInputType
  }

  export type GetBookstoresAggregateType<T extends BookstoresAggregateArgs> = {
        [P in keyof T & keyof AggregateBookstores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookstores[P]>
      : GetScalarType<T[P], AggregateBookstores[P]>
  }




  export type BookstoresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookstoresWhereInput
    orderBy?: BookstoresOrderByWithAggregationInput | BookstoresOrderByWithAggregationInput[]
    by: BookstoresScalarFieldEnum[] | BookstoresScalarFieldEnum
    having?: BookstoresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookstoresCountAggregateInputType | true
    _avg?: BookstoresAvgAggregateInputType
    _sum?: BookstoresSumAggregateInputType
    _min?: BookstoresMinAggregateInputType
    _max?: BookstoresMaxAggregateInputType
  }

  export type BookstoresGroupByOutputType = {
    bookstoreId: number
    imageUrl: string
    name: string
    price: number
    address: string
    description: string
    status: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: BookstoresCountAggregateOutputType | null
    _avg: BookstoresAvgAggregateOutputType | null
    _sum: BookstoresSumAggregateOutputType | null
    _min: BookstoresMinAggregateOutputType | null
    _max: BookstoresMaxAggregateOutputType | null
  }

  type GetBookstoresGroupByPayload<T extends BookstoresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookstoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookstoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookstoresGroupByOutputType[P]>
            : GetScalarType<T[P], BookstoresGroupByOutputType[P]>
        }
      >
    >


  export type BookstoresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bookstoreId?: boolean
    imageUrl?: boolean
    name?: boolean
    price?: boolean
    address?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    products?: boolean | Bookstores$productsArgs<ExtArgs>
    _count?: boolean | BookstoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookstores"]>

  export type BookstoresSelectScalar = {
    bookstoreId?: boolean
    imageUrl?: boolean
    name?: boolean
    price?: boolean
    address?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type BookstoresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    products?: boolean | Bookstores$productsArgs<ExtArgs>
    _count?: boolean | BookstoresCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BookstoresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bookstores"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      bookstoreId: number
      imageUrl: string
      name: string
      price: number
      address: string
      description: string
      status: string
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["bookstores"]>
    composites: {}
  }


  type BookstoresGetPayload<S extends boolean | null | undefined | BookstoresDefaultArgs> = $Result.GetResult<Prisma.$BookstoresPayload, S>

  type BookstoresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookstoresFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BookstoresCountAggregateInputType | true
    }

  export interface BookstoresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bookstores'], meta: { name: 'Bookstores' } }
    /**
     * Find zero or one Bookstores that matches the filter.
     * @param {BookstoresFindUniqueArgs} args - Arguments to find a Bookstores
     * @example
     * // Get one Bookstores
     * const bookstores = await prisma.bookstores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BookstoresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BookstoresFindUniqueArgs<ExtArgs>>
    ): Prisma__BookstoresClient<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bookstores that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BookstoresFindUniqueOrThrowArgs} args - Arguments to find a Bookstores
     * @example
     * // Get one Bookstores
     * const bookstores = await prisma.bookstores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BookstoresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookstoresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookstoresClient<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bookstores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookstoresFindFirstArgs} args - Arguments to find a Bookstores
     * @example
     * // Get one Bookstores
     * const bookstores = await prisma.bookstores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BookstoresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BookstoresFindFirstArgs<ExtArgs>>
    ): Prisma__BookstoresClient<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bookstores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookstoresFindFirstOrThrowArgs} args - Arguments to find a Bookstores
     * @example
     * // Get one Bookstores
     * const bookstores = await prisma.bookstores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BookstoresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BookstoresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookstoresClient<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bookstores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookstoresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookstores
     * const bookstores = await prisma.bookstores.findMany()
     * 
     * // Get first 10 Bookstores
     * const bookstores = await prisma.bookstores.findMany({ take: 10 })
     * 
     * // Only select the `bookstoreId`
     * const bookstoresWithBookstoreIdOnly = await prisma.bookstores.findMany({ select: { bookstoreId: true } })
     * 
    **/
    findMany<T extends BookstoresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookstoresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bookstores.
     * @param {BookstoresCreateArgs} args - Arguments to create a Bookstores.
     * @example
     * // Create one Bookstores
     * const Bookstores = await prisma.bookstores.create({
     *   data: {
     *     // ... data to create a Bookstores
     *   }
     * })
     * 
    **/
    create<T extends BookstoresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BookstoresCreateArgs<ExtArgs>>
    ): Prisma__BookstoresClient<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bookstores.
     *     @param {BookstoresCreateManyArgs} args - Arguments to create many Bookstores.
     *     @example
     *     // Create many Bookstores
     *     const bookstores = await prisma.bookstores.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BookstoresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookstoresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bookstores.
     * @param {BookstoresDeleteArgs} args - Arguments to delete one Bookstores.
     * @example
     * // Delete one Bookstores
     * const Bookstores = await prisma.bookstores.delete({
     *   where: {
     *     // ... filter to delete one Bookstores
     *   }
     * })
     * 
    **/
    delete<T extends BookstoresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BookstoresDeleteArgs<ExtArgs>>
    ): Prisma__BookstoresClient<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bookstores.
     * @param {BookstoresUpdateArgs} args - Arguments to update one Bookstores.
     * @example
     * // Update one Bookstores
     * const bookstores = await prisma.bookstores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BookstoresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BookstoresUpdateArgs<ExtArgs>>
    ): Prisma__BookstoresClient<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bookstores.
     * @param {BookstoresDeleteManyArgs} args - Arguments to filter Bookstores to delete.
     * @example
     * // Delete a few Bookstores
     * const { count } = await prisma.bookstores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BookstoresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BookstoresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookstores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookstoresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookstores
     * const bookstores = await prisma.bookstores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BookstoresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BookstoresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bookstores.
     * @param {BookstoresUpsertArgs} args - Arguments to update or create a Bookstores.
     * @example
     * // Update or create a Bookstores
     * const bookstores = await prisma.bookstores.upsert({
     *   create: {
     *     // ... data to create a Bookstores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bookstores we want to update
     *   }
     * })
    **/
    upsert<T extends BookstoresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BookstoresUpsertArgs<ExtArgs>>
    ): Prisma__BookstoresClient<$Result.GetResult<Prisma.$BookstoresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bookstores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookstoresCountArgs} args - Arguments to filter Bookstores to count.
     * @example
     * // Count the number of Bookstores
     * const count = await prisma.bookstores.count({
     *   where: {
     *     // ... the filter for the Bookstores we want to count
     *   }
     * })
    **/
    count<T extends BookstoresCountArgs>(
      args?: Subset<T, BookstoresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookstoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bookstores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookstoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookstoresAggregateArgs>(args: Subset<T, BookstoresAggregateArgs>): Prisma.PrismaPromise<GetBookstoresAggregateType<T>>

    /**
     * Group by Bookstores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookstoresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookstoresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookstoresGroupByArgs['orderBy'] }
        : { orderBy?: BookstoresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookstoresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookstoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bookstores model
   */
  readonly fields: BookstoresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bookstores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookstoresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    products<T extends Bookstores$productsArgs<ExtArgs> = {}>(args?: Subset<T, Bookstores$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bookstores model
   */ 
  interface BookstoresFieldRefs {
    readonly bookstoreId: FieldRef<"Bookstores", 'Int'>
    readonly imageUrl: FieldRef<"Bookstores", 'String'>
    readonly name: FieldRef<"Bookstores", 'String'>
    readonly price: FieldRef<"Bookstores", 'Int'>
    readonly address: FieldRef<"Bookstores", 'String'>
    readonly description: FieldRef<"Bookstores", 'String'>
    readonly status: FieldRef<"Bookstores", 'String'>
    readonly createdAt: FieldRef<"Bookstores", 'DateTime'>
    readonly updatedAt: FieldRef<"Bookstores", 'DateTime'>
    readonly userId: FieldRef<"Bookstores", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Bookstores findUnique
   */
  export type BookstoresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    /**
     * Filter, which Bookstores to fetch.
     */
    where: BookstoresWhereUniqueInput
  }


  /**
   * Bookstores findUniqueOrThrow
   */
  export type BookstoresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    /**
     * Filter, which Bookstores to fetch.
     */
    where: BookstoresWhereUniqueInput
  }


  /**
   * Bookstores findFirst
   */
  export type BookstoresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    /**
     * Filter, which Bookstores to fetch.
     */
    where?: BookstoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookstores to fetch.
     */
    orderBy?: BookstoresOrderByWithRelationInput | BookstoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookstores.
     */
    cursor?: BookstoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookstores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookstores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookstores.
     */
    distinct?: BookstoresScalarFieldEnum | BookstoresScalarFieldEnum[]
  }


  /**
   * Bookstores findFirstOrThrow
   */
  export type BookstoresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    /**
     * Filter, which Bookstores to fetch.
     */
    where?: BookstoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookstores to fetch.
     */
    orderBy?: BookstoresOrderByWithRelationInput | BookstoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookstores.
     */
    cursor?: BookstoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookstores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookstores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookstores.
     */
    distinct?: BookstoresScalarFieldEnum | BookstoresScalarFieldEnum[]
  }


  /**
   * Bookstores findMany
   */
  export type BookstoresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    /**
     * Filter, which Bookstores to fetch.
     */
    where?: BookstoresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookstores to fetch.
     */
    orderBy?: BookstoresOrderByWithRelationInput | BookstoresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookstores.
     */
    cursor?: BookstoresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookstores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookstores.
     */
    skip?: number
    distinct?: BookstoresScalarFieldEnum | BookstoresScalarFieldEnum[]
  }


  /**
   * Bookstores create
   */
  export type BookstoresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    /**
     * The data needed to create a Bookstores.
     */
    data: XOR<BookstoresCreateInput, BookstoresUncheckedCreateInput>
  }


  /**
   * Bookstores createMany
   */
  export type BookstoresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookstores.
     */
    data: BookstoresCreateManyInput | BookstoresCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bookstores update
   */
  export type BookstoresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    /**
     * The data needed to update a Bookstores.
     */
    data: XOR<BookstoresUpdateInput, BookstoresUncheckedUpdateInput>
    /**
     * Choose, which Bookstores to update.
     */
    where: BookstoresWhereUniqueInput
  }


  /**
   * Bookstores updateMany
   */
  export type BookstoresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookstores.
     */
    data: XOR<BookstoresUpdateManyMutationInput, BookstoresUncheckedUpdateManyInput>
    /**
     * Filter which Bookstores to update
     */
    where?: BookstoresWhereInput
  }


  /**
   * Bookstores upsert
   */
  export type BookstoresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    /**
     * The filter to search for the Bookstores to update in case it exists.
     */
    where: BookstoresWhereUniqueInput
    /**
     * In case the Bookstores found by the `where` argument doesn't exist, create a new Bookstores with this data.
     */
    create: XOR<BookstoresCreateInput, BookstoresUncheckedCreateInput>
    /**
     * In case the Bookstores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookstoresUpdateInput, BookstoresUncheckedUpdateInput>
  }


  /**
   * Bookstores delete
   */
  export type BookstoresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
    /**
     * Filter which Bookstores to delete.
     */
    where: BookstoresWhereUniqueInput
  }


  /**
   * Bookstores deleteMany
   */
  export type BookstoresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookstores to delete
     */
    where?: BookstoresWhereInput
  }


  /**
   * Bookstores.products
   */
  export type Bookstores$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }


  /**
   * Bookstores without action
   */
  export type BookstoresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bookstores
     */
    select?: BookstoresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BookstoresInclude<ExtArgs> | null
  }



  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    expirationDate: Date | null
    userId: number | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    expirationDate: Date | null
    userId: number | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    expirationDate: number
    userId: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    expirationDate?: true
    userId?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    expirationDate?: true
    userId?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    expirationDate?: true
    userId?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    token: string
    expirationDate: Date
    userId: number
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    expirationDate?: boolean
    userId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    expirationDate?: boolean
    userId?: boolean
  }

  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }


  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      expirationDate: Date
      userId: number
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }


  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RefreshTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RefreshToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RefreshTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RefreshTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
    **/
    create<T extends RefreshTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RefreshTokens.
     *     @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     *     @example
     *     // Create many RefreshTokens
     *     const refreshToken = await prisma.refreshToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RefreshTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
    **/
    delete<T extends RefreshTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RefreshTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RefreshTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RefreshTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
    **/
    upsert<T extends RefreshTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>
    ): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RefreshToken model
   */ 
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly expirationDate: FieldRef<"RefreshToken", 'DateTime'>
    readonly userId: FieldRef<"RefreshToken", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }


  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }


  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }


  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }


  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
  }


  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }


  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }


  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
  }


  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }



  /**
   * Model UsersProducts
   */

  export type AggregateUsersProducts = {
    _count: UsersProductsCountAggregateOutputType | null
    _avg: UsersProductsAvgAggregateOutputType | null
    _sum: UsersProductsSumAggregateOutputType | null
    _min: UsersProductsMinAggregateOutputType | null
    _max: UsersProductsMaxAggregateOutputType | null
  }

  export type UsersProductsAvgAggregateOutputType = {
    userId: number | null
    productId: number | null
  }

  export type UsersProductsSumAggregateOutputType = {
    userId: number | null
    productId: number | null
  }

  export type UsersProductsMinAggregateOutputType = {
    userId: number | null
    productId: number | null
  }

  export type UsersProductsMaxAggregateOutputType = {
    userId: number | null
    productId: number | null
  }

  export type UsersProductsCountAggregateOutputType = {
    userId: number
    productId: number
    _all: number
  }


  export type UsersProductsAvgAggregateInputType = {
    userId?: true
    productId?: true
  }

  export type UsersProductsSumAggregateInputType = {
    userId?: true
    productId?: true
  }

  export type UsersProductsMinAggregateInputType = {
    userId?: true
    productId?: true
  }

  export type UsersProductsMaxAggregateInputType = {
    userId?: true
    productId?: true
  }

  export type UsersProductsCountAggregateInputType = {
    userId?: true
    productId?: true
    _all?: true
  }

  export type UsersProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersProducts to aggregate.
     */
    where?: UsersProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersProducts to fetch.
     */
    orderBy?: UsersProductsOrderByWithRelationInput | UsersProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsersProducts
    **/
    _count?: true | UsersProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersProductsMaxAggregateInputType
  }

  export type GetUsersProductsAggregateType<T extends UsersProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateUsersProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsersProducts[P]>
      : GetScalarType<T[P], AggregateUsersProducts[P]>
  }




  export type UsersProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersProductsWhereInput
    orderBy?: UsersProductsOrderByWithAggregationInput | UsersProductsOrderByWithAggregationInput[]
    by: UsersProductsScalarFieldEnum[] | UsersProductsScalarFieldEnum
    having?: UsersProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersProductsCountAggregateInputType | true
    _avg?: UsersProductsAvgAggregateInputType
    _sum?: UsersProductsSumAggregateInputType
    _min?: UsersProductsMinAggregateInputType
    _max?: UsersProductsMaxAggregateInputType
  }

  export type UsersProductsGroupByOutputType = {
    userId: number
    productId: number
    _count: UsersProductsCountAggregateOutputType | null
    _avg: UsersProductsAvgAggregateOutputType | null
    _sum: UsersProductsSumAggregateOutputType | null
    _min: UsersProductsMinAggregateOutputType | null
    _max: UsersProductsMaxAggregateOutputType | null
  }

  type GetUsersProductsGroupByPayload<T extends UsersProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersProductsGroupByOutputType[P]>
            : GetScalarType<T[P], UsersProductsGroupByOutputType[P]>
        }
      >
    >


  export type UsersProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    productId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usersProducts"]>

  export type UsersProductsSelectScalar = {
    userId?: boolean
    productId?: boolean
  }

  export type UsersProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }


  export type $UsersProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsersProducts"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      productId: number
    }, ExtArgs["result"]["usersProducts"]>
    composites: {}
  }


  type UsersProductsGetPayload<S extends boolean | null | undefined | UsersProductsDefaultArgs> = $Result.GetResult<Prisma.$UsersProductsPayload, S>

  type UsersProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersProductsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UsersProductsCountAggregateInputType | true
    }

  export interface UsersProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsersProducts'], meta: { name: 'UsersProducts' } }
    /**
     * Find zero or one UsersProducts that matches the filter.
     * @param {UsersProductsFindUniqueArgs} args - Arguments to find a UsersProducts
     * @example
     * // Get one UsersProducts
     * const usersProducts = await prisma.usersProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersProductsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersProductsFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersProductsClient<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UsersProducts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersProductsFindUniqueOrThrowArgs} args - Arguments to find a UsersProducts
     * @example
     * // Get one UsersProducts
     * const usersProducts = await prisma.usersProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersProductsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersProductsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersProductsClient<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UsersProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProductsFindFirstArgs} args - Arguments to find a UsersProducts
     * @example
     * // Get one UsersProducts
     * const usersProducts = await prisma.usersProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersProductsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersProductsFindFirstArgs<ExtArgs>>
    ): Prisma__UsersProductsClient<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UsersProducts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProductsFindFirstOrThrowArgs} args - Arguments to find a UsersProducts
     * @example
     * // Get one UsersProducts
     * const usersProducts = await prisma.usersProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersProductsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersProductsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersProductsClient<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UsersProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsersProducts
     * const usersProducts = await prisma.usersProducts.findMany()
     * 
     * // Get first 10 UsersProducts
     * const usersProducts = await prisma.usersProducts.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersProductsWithUserIdOnly = await prisma.usersProducts.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UsersProductsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersProductsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UsersProducts.
     * @param {UsersProductsCreateArgs} args - Arguments to create a UsersProducts.
     * @example
     * // Create one UsersProducts
     * const UsersProducts = await prisma.usersProducts.create({
     *   data: {
     *     // ... data to create a UsersProducts
     *   }
     * })
     * 
    **/
    create<T extends UsersProductsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersProductsCreateArgs<ExtArgs>>
    ): Prisma__UsersProductsClient<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UsersProducts.
     *     @param {UsersProductsCreateManyArgs} args - Arguments to create many UsersProducts.
     *     @example
     *     // Create many UsersProducts
     *     const usersProducts = await prisma.usersProducts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersProductsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersProductsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UsersProducts.
     * @param {UsersProductsDeleteArgs} args - Arguments to delete one UsersProducts.
     * @example
     * // Delete one UsersProducts
     * const UsersProducts = await prisma.usersProducts.delete({
     *   where: {
     *     // ... filter to delete one UsersProducts
     *   }
     * })
     * 
    **/
    delete<T extends UsersProductsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersProductsDeleteArgs<ExtArgs>>
    ): Prisma__UsersProductsClient<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UsersProducts.
     * @param {UsersProductsUpdateArgs} args - Arguments to update one UsersProducts.
     * @example
     * // Update one UsersProducts
     * const usersProducts = await prisma.usersProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersProductsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersProductsUpdateArgs<ExtArgs>>
    ): Prisma__UsersProductsClient<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UsersProducts.
     * @param {UsersProductsDeleteManyArgs} args - Arguments to filter UsersProducts to delete.
     * @example
     * // Delete a few UsersProducts
     * const { count } = await prisma.usersProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersProductsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersProductsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsersProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsersProducts
     * const usersProducts = await prisma.usersProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersProductsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersProductsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsersProducts.
     * @param {UsersProductsUpsertArgs} args - Arguments to update or create a UsersProducts.
     * @example
     * // Update or create a UsersProducts
     * const usersProducts = await prisma.usersProducts.upsert({
     *   create: {
     *     // ... data to create a UsersProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsersProducts we want to update
     *   }
     * })
    **/
    upsert<T extends UsersProductsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersProductsUpsertArgs<ExtArgs>>
    ): Prisma__UsersProductsClient<$Result.GetResult<Prisma.$UsersProductsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UsersProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProductsCountArgs} args - Arguments to filter UsersProducts to count.
     * @example
     * // Count the number of UsersProducts
     * const count = await prisma.usersProducts.count({
     *   where: {
     *     // ... the filter for the UsersProducts we want to count
     *   }
     * })
    **/
    count<T extends UsersProductsCountArgs>(
      args?: Subset<T, UsersProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsersProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersProductsAggregateArgs>(args: Subset<T, UsersProductsAggregateArgs>): Prisma.PrismaPromise<GetUsersProductsAggregateType<T>>

    /**
     * Group by UsersProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersProductsGroupByArgs['orderBy'] }
        : { orderBy?: UsersProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsersProducts model
   */
  readonly fields: UsersProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsersProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UsersProducts model
   */ 
  interface UsersProductsFieldRefs {
    readonly userId: FieldRef<"UsersProducts", 'Int'>
    readonly productId: FieldRef<"UsersProducts", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * UsersProducts findUnique
   */
  export type UsersProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    /**
     * Filter, which UsersProducts to fetch.
     */
    where: UsersProductsWhereUniqueInput
  }


  /**
   * UsersProducts findUniqueOrThrow
   */
  export type UsersProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    /**
     * Filter, which UsersProducts to fetch.
     */
    where: UsersProductsWhereUniqueInput
  }


  /**
   * UsersProducts findFirst
   */
  export type UsersProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    /**
     * Filter, which UsersProducts to fetch.
     */
    where?: UsersProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersProducts to fetch.
     */
    orderBy?: UsersProductsOrderByWithRelationInput | UsersProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersProducts.
     */
    cursor?: UsersProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersProducts.
     */
    distinct?: UsersProductsScalarFieldEnum | UsersProductsScalarFieldEnum[]
  }


  /**
   * UsersProducts findFirstOrThrow
   */
  export type UsersProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    /**
     * Filter, which UsersProducts to fetch.
     */
    where?: UsersProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersProducts to fetch.
     */
    orderBy?: UsersProductsOrderByWithRelationInput | UsersProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsersProducts.
     */
    cursor?: UsersProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsersProducts.
     */
    distinct?: UsersProductsScalarFieldEnum | UsersProductsScalarFieldEnum[]
  }


  /**
   * UsersProducts findMany
   */
  export type UsersProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    /**
     * Filter, which UsersProducts to fetch.
     */
    where?: UsersProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsersProducts to fetch.
     */
    orderBy?: UsersProductsOrderByWithRelationInput | UsersProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsersProducts.
     */
    cursor?: UsersProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsersProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsersProducts.
     */
    skip?: number
    distinct?: UsersProductsScalarFieldEnum | UsersProductsScalarFieldEnum[]
  }


  /**
   * UsersProducts create
   */
  export type UsersProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a UsersProducts.
     */
    data: XOR<UsersProductsCreateInput, UsersProductsUncheckedCreateInput>
  }


  /**
   * UsersProducts createMany
   */
  export type UsersProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsersProducts.
     */
    data: UsersProductsCreateManyInput | UsersProductsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UsersProducts update
   */
  export type UsersProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a UsersProducts.
     */
    data: XOR<UsersProductsUpdateInput, UsersProductsUncheckedUpdateInput>
    /**
     * Choose, which UsersProducts to update.
     */
    where: UsersProductsWhereUniqueInput
  }


  /**
   * UsersProducts updateMany
   */
  export type UsersProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsersProducts.
     */
    data: XOR<UsersProductsUpdateManyMutationInput, UsersProductsUncheckedUpdateManyInput>
    /**
     * Filter which UsersProducts to update
     */
    where?: UsersProductsWhereInput
  }


  /**
   * UsersProducts upsert
   */
  export type UsersProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the UsersProducts to update in case it exists.
     */
    where: UsersProductsWhereUniqueInput
    /**
     * In case the UsersProducts found by the `where` argument doesn't exist, create a new UsersProducts with this data.
     */
    create: XOR<UsersProductsCreateInput, UsersProductsUncheckedCreateInput>
    /**
     * In case the UsersProducts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersProductsUpdateInput, UsersProductsUncheckedUpdateInput>
  }


  /**
   * UsersProducts delete
   */
  export type UsersProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
    /**
     * Filter which UsersProducts to delete.
     */
    where: UsersProductsWhereUniqueInput
  }


  /**
   * UsersProducts deleteMany
   */
  export type UsersProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsersProducts to delete
     */
    where?: UsersProductsWhereInput
  }


  /**
   * UsersProducts without action
   */
  export type UsersProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersProducts
     */
    select?: UsersProductsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersProductsInclude<ExtArgs> | null
  }



  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    orderId: number | null
    userId: number | null
    productId: number | null
  }

  export type OrdersSumAggregateOutputType = {
    orderId: number | null
    userId: number | null
    productId: number | null
  }

  export type OrdersMinAggregateOutputType = {
    orderId: number | null
    userId: number | null
    productId: number | null
    address: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    orderId: number | null
    userId: number | null
    productId: number | null
    address: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    orderId: number
    userId: number
    productId: number
    address: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    orderId?: true
    userId?: true
    productId?: true
  }

  export type OrdersSumAggregateInputType = {
    orderId?: true
    userId?: true
    productId?: true
  }

  export type OrdersMinAggregateInputType = {
    orderId?: true
    userId?: true
    productId?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    orderId?: true
    userId?: true
    productId?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    orderId?: true
    userId?: true
    productId?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    orderId: number
    userId: number
    productId: number
    address: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderId?: boolean
    userId?: boolean
    productId?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    orderId?: boolean
    userId?: boolean
    productId?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }


  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orderId: number
      userId: number
      productId: number
      address: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }


  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrdersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrdersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `orderId`
     * const ordersWithOrderIdOnly = await prisma.orders.findMany({ select: { orderId: true } })
     * 
    **/
    findMany<T extends OrdersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends OrdersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrdersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends OrdersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrdersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrdersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrdersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends OrdersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>
    ): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Orders model
   */ 
  interface OrdersFieldRefs {
    readonly orderId: FieldRef<"Orders", 'Int'>
    readonly userId: FieldRef<"Orders", 'Int'>
    readonly productId: FieldRef<"Orders", 'Int'>
    readonly address: FieldRef<"Orders", 'String'>
    readonly status: FieldRef<"Orders", 'String'>
    readonly createdAt: FieldRef<"Orders", 'DateTime'>
    readonly updatedAt: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }


  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
  }


  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }


  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
  }


  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrdersInclude<ExtArgs> | null
  }



  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    reviewId: number | null
    userId: number | null
    productId: number | null
    rating: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    reviewId: number | null
    userId: number | null
    productId: number | null
    rating: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    reviewId: number | null
    userId: number | null
    productId: number | null
    reviewText: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsMaxAggregateOutputType = {
    reviewId: number | null
    userId: number | null
    productId: number | null
    reviewText: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewsCountAggregateOutputType = {
    reviewId: number
    userId: number
    productId: number
    reviewText: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    reviewId?: true
    userId?: true
    productId?: true
    rating?: true
  }

  export type ReviewsSumAggregateInputType = {
    reviewId?: true
    userId?: true
    productId?: true
    rating?: true
  }

  export type ReviewsMinAggregateInputType = {
    reviewId?: true
    userId?: true
    productId?: true
    reviewText?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsMaxAggregateInputType = {
    reviewId?: true
    userId?: true
    productId?: true
    reviewText?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewsCountAggregateInputType = {
    reviewId?: true
    userId?: true
    productId?: true
    reviewText?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    reviewId: number
    userId: number
    productId: number
    reviewText: string
    rating: number
    createdAt: Date
    updatedAt: Date
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    reviewId?: boolean
    userId?: boolean
    productId?: boolean
    reviewText?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    reviewId?: boolean
    userId?: boolean
    productId?: boolean
    reviewText?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    product?: boolean | ProductsDefaultArgs<ExtArgs>
  }


  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      product: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      reviewId: number
      userId: number
      productId: number
      reviewText: string
      rating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }


  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReviewsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reviews that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReviewsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `reviewId`
     * const reviewsWithReviewIdOnly = await prisma.reviews.findMany({ select: { reviewId: true } })
     * 
    **/
    findMany<T extends ReviewsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
    **/
    create<T extends ReviewsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reviews.
     *     @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const reviews = await prisma.reviews.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReviewsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
    **/
    delete<T extends ReviewsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReviewsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReviewsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReviewsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
    **/
    upsert<T extends ReviewsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>
    ): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    product<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reviews model
   */ 
  interface ReviewsFieldRefs {
    readonly reviewId: FieldRef<"Reviews", 'Int'>
    readonly userId: FieldRef<"Reviews", 'Int'>
    readonly productId: FieldRef<"Reviews", 'Int'>
    readonly reviewText: FieldRef<"Reviews", 'String'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly createdAt: FieldRef<"Reviews", 'DateTime'>
    readonly updatedAt: FieldRef<"Reviews", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }


  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }


  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }


  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }


  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }


  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }


  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }


  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
  }


  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }


  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }


  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
  }


  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReviewsInclude<ExtArgs> | null
  }



  /**
   * Model Follow
   */

  export type AggregateFollow = {
    _count: FollowCountAggregateOutputType | null
    _avg: FollowAvgAggregateOutputType | null
    _sum: FollowSumAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  export type FollowAvgAggregateOutputType = {
    followerId: number | null
    followingId: number | null
  }

  export type FollowSumAggregateOutputType = {
    followerId: number | null
    followingId: number | null
  }

  export type FollowMinAggregateOutputType = {
    followerId: number | null
    followingId: number | null
  }

  export type FollowMaxAggregateOutputType = {
    followerId: number | null
    followingId: number | null
  }

  export type FollowCountAggregateOutputType = {
    followerId: number
    followingId: number
    _all: number
  }


  export type FollowAvgAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowSumAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowMinAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowMaxAggregateInputType = {
    followerId?: true
    followingId?: true
  }

  export type FollowCountAggregateInputType = {
    followerId?: true
    followingId?: true
    _all?: true
  }

  export type FollowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follow to aggregate.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Follows
    **/
    _count?: true | FollowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowMaxAggregateInputType
  }

  export type GetFollowAggregateType<T extends FollowAggregateArgs> = {
        [P in keyof T & keyof AggregateFollow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollow[P]>
      : GetScalarType<T[P], AggregateFollow[P]>
  }




  export type FollowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowWhereInput
    orderBy?: FollowOrderByWithAggregationInput | FollowOrderByWithAggregationInput[]
    by: FollowScalarFieldEnum[] | FollowScalarFieldEnum
    having?: FollowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowCountAggregateInputType | true
    _avg?: FollowAvgAggregateInputType
    _sum?: FollowSumAggregateInputType
    _min?: FollowMinAggregateInputType
    _max?: FollowMaxAggregateInputType
  }

  export type FollowGroupByOutputType = {
    followerId: number
    followingId: number
    _count: FollowCountAggregateOutputType | null
    _avg: FollowAvgAggregateOutputType | null
    _sum: FollowSumAggregateOutputType | null
    _min: FollowMinAggregateOutputType | null
    _max: FollowMaxAggregateOutputType | null
  }

  type GetFollowGroupByPayload<T extends FollowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowGroupByOutputType[P]>
            : GetScalarType<T[P], FollowGroupByOutputType[P]>
        }
      >
    >


  export type FollowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    followerId?: boolean
    followingId?: boolean
    follower?: boolean | UsersDefaultArgs<ExtArgs>
    following?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["follow"]>

  export type FollowSelectScalar = {
    followerId?: boolean
    followingId?: boolean
  }

  export type FollowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    follower?: boolean | UsersDefaultArgs<ExtArgs>
    following?: boolean | UsersDefaultArgs<ExtArgs>
  }


  export type $FollowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Follow"
    objects: {
      follower: Prisma.$UsersPayload<ExtArgs>
      following: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      followerId: number
      followingId: number
    }, ExtArgs["result"]["follow"]>
    composites: {}
  }


  type FollowGetPayload<S extends boolean | null | undefined | FollowDefaultArgs> = $Result.GetResult<Prisma.$FollowPayload, S>

  type FollowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FollowFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: FollowCountAggregateInputType | true
    }

  export interface FollowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Follow'], meta: { name: 'Follow' } }
    /**
     * Find zero or one Follow that matches the filter.
     * @param {FollowFindUniqueArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FollowFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Follow that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FollowFindUniqueOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FollowFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Follow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowFindFirstArgs<ExtArgs>>
    ): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Follow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindFirstOrThrowArgs} args - Arguments to find a Follow
     * @example
     * // Get one Follow
     * const follow = await prisma.follow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FollowFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Follows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Follows
     * const follows = await prisma.follow.findMany()
     * 
     * // Get first 10 Follows
     * const follows = await prisma.follow.findMany({ take: 10 })
     * 
     * // Only select the `followerId`
     * const followWithFollowerIdOnly = await prisma.follow.findMany({ select: { followerId: true } })
     * 
    **/
    findMany<T extends FollowFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Follow.
     * @param {FollowCreateArgs} args - Arguments to create a Follow.
     * @example
     * // Create one Follow
     * const Follow = await prisma.follow.create({
     *   data: {
     *     // ... data to create a Follow
     *   }
     * })
     * 
    **/
    create<T extends FollowCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowCreateArgs<ExtArgs>>
    ): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Follows.
     *     @param {FollowCreateManyArgs} args - Arguments to create many Follows.
     *     @example
     *     // Create many Follows
     *     const follow = await prisma.follow.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Follow.
     * @param {FollowDeleteArgs} args - Arguments to delete one Follow.
     * @example
     * // Delete one Follow
     * const Follow = await prisma.follow.delete({
     *   where: {
     *     // ... filter to delete one Follow
     *   }
     * })
     * 
    **/
    delete<T extends FollowDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FollowDeleteArgs<ExtArgs>>
    ): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Follow.
     * @param {FollowUpdateArgs} args - Arguments to update one Follow.
     * @example
     * // Update one Follow
     * const follow = await prisma.follow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowUpdateArgs<ExtArgs>>
    ): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Follows.
     * @param {FollowDeleteManyArgs} args - Arguments to filter Follows to delete.
     * @example
     * // Delete a few Follows
     * const { count } = await prisma.follow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Follows
     * const follow = await prisma.follow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FollowUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Follow.
     * @param {FollowUpsertArgs} args - Arguments to update or create a Follow.
     * @example
     * // Update or create a Follow
     * const follow = await prisma.follow.upsert({
     *   create: {
     *     // ... data to create a Follow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Follow we want to update
     *   }
     * })
    **/
    upsert<T extends FollowUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FollowUpsertArgs<ExtArgs>>
    ): Prisma__FollowClient<$Result.GetResult<Prisma.$FollowPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Follows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowCountArgs} args - Arguments to filter Follows to count.
     * @example
     * // Count the number of Follows
     * const count = await prisma.follow.count({
     *   where: {
     *     // ... the filter for the Follows we want to count
     *   }
     * })
    **/
    count<T extends FollowCountArgs>(
      args?: Subset<T, FollowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FollowAggregateArgs>(args: Subset<T, FollowAggregateArgs>): Prisma.PrismaPromise<GetFollowAggregateType<T>>

    /**
     * Group by Follow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FollowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowGroupByArgs['orderBy'] }
        : { orderBy?: FollowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Follow model
   */
  readonly fields: FollowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Follow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    follower<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    following<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Follow model
   */ 
  interface FollowFieldRefs {
    readonly followerId: FieldRef<"Follow", 'Int'>
    readonly followingId: FieldRef<"Follow", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Follow findUnique
   */
  export type FollowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }


  /**
   * Follow findUniqueOrThrow
   */
  export type FollowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where: FollowWhereUniqueInput
  }


  /**
   * Follow findFirst
   */
  export type FollowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }


  /**
   * Follow findFirstOrThrow
   */
  export type FollowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follow to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Follows.
     */
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }


  /**
   * Follow findMany
   */
  export type FollowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter, which Follows to fetch.
     */
    where?: FollowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Follows to fetch.
     */
    orderBy?: FollowOrderByWithRelationInput | FollowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Follows.
     */
    cursor?: FollowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Follows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Follows.
     */
    skip?: number
    distinct?: FollowScalarFieldEnum | FollowScalarFieldEnum[]
  }


  /**
   * Follow create
   */
  export type FollowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to create a Follow.
     */
    data: XOR<FollowCreateInput, FollowUncheckedCreateInput>
  }


  /**
   * Follow createMany
   */
  export type FollowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Follows.
     */
    data: FollowCreateManyInput | FollowCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Follow update
   */
  export type FollowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The data needed to update a Follow.
     */
    data: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
    /**
     * Choose, which Follow to update.
     */
    where: FollowWhereUniqueInput
  }


  /**
   * Follow updateMany
   */
  export type FollowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Follows.
     */
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyInput>
    /**
     * Filter which Follows to update
     */
    where?: FollowWhereInput
  }


  /**
   * Follow upsert
   */
  export type FollowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * The filter to search for the Follow to update in case it exists.
     */
    where: FollowWhereUniqueInput
    /**
     * In case the Follow found by the `where` argument doesn't exist, create a new Follow with this data.
     */
    create: XOR<FollowCreateInput, FollowUncheckedCreateInput>
    /**
     * In case the Follow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowUpdateInput, FollowUncheckedUpdateInput>
  }


  /**
   * Follow delete
   */
  export type FollowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
    /**
     * Filter which Follow to delete.
     */
    where: FollowWhereUniqueInput
  }


  /**
   * Follow deleteMany
   */
  export type FollowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Follows to delete
     */
    where?: FollowWhereInput
  }


  /**
   * Follow without action
   */
  export type FollowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Follow
     */
    select?: FollowSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowInclude<ExtArgs> | null
  }



  /**
   * Model Verify
   */

  export type AggregateVerify = {
    _count: VerifyCountAggregateOutputType | null
    _avg: VerifyAvgAggregateOutputType | null
    _sum: VerifySumAggregateOutputType | null
    _min: VerifyMinAggregateOutputType | null
    _max: VerifyMaxAggregateOutputType | null
  }

  export type VerifyAvgAggregateOutputType = {
    verificationId: number | null
  }

  export type VerifySumAggregateOutputType = {
    verificationId: number | null
  }

  export type VerifyMinAggregateOutputType = {
    verificationId: number | null
    email: string | null
    verificationCode: string | null
    createdAt: Date | null
    expiredAt: Date | null
  }

  export type VerifyMaxAggregateOutputType = {
    verificationId: number | null
    email: string | null
    verificationCode: string | null
    createdAt: Date | null
    expiredAt: Date | null
  }

  export type VerifyCountAggregateOutputType = {
    verificationId: number
    email: number
    verificationCode: number
    createdAt: number
    expiredAt: number
    _all: number
  }


  export type VerifyAvgAggregateInputType = {
    verificationId?: true
  }

  export type VerifySumAggregateInputType = {
    verificationId?: true
  }

  export type VerifyMinAggregateInputType = {
    verificationId?: true
    email?: true
    verificationCode?: true
    createdAt?: true
    expiredAt?: true
  }

  export type VerifyMaxAggregateInputType = {
    verificationId?: true
    email?: true
    verificationCode?: true
    createdAt?: true
    expiredAt?: true
  }

  export type VerifyCountAggregateInputType = {
    verificationId?: true
    email?: true
    verificationCode?: true
    createdAt?: true
    expiredAt?: true
    _all?: true
  }

  export type VerifyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verify to aggregate.
     */
    where?: VerifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifies to fetch.
     */
    orderBy?: VerifyOrderByWithRelationInput | VerifyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifies
    **/
    _count?: true | VerifyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VerifyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VerifySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerifyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerifyMaxAggregateInputType
  }

  export type GetVerifyAggregateType<T extends VerifyAggregateArgs> = {
        [P in keyof T & keyof AggregateVerify]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerify[P]>
      : GetScalarType<T[P], AggregateVerify[P]>
  }




  export type VerifyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerifyWhereInput
    orderBy?: VerifyOrderByWithAggregationInput | VerifyOrderByWithAggregationInput[]
    by: VerifyScalarFieldEnum[] | VerifyScalarFieldEnum
    having?: VerifyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerifyCountAggregateInputType | true
    _avg?: VerifyAvgAggregateInputType
    _sum?: VerifySumAggregateInputType
    _min?: VerifyMinAggregateInputType
    _max?: VerifyMaxAggregateInputType
  }

  export type VerifyGroupByOutputType = {
    verificationId: number
    email: string
    verificationCode: string
    createdAt: Date
    expiredAt: Date | null
    _count: VerifyCountAggregateOutputType | null
    _avg: VerifyAvgAggregateOutputType | null
    _sum: VerifySumAggregateOutputType | null
    _min: VerifyMinAggregateOutputType | null
    _max: VerifyMaxAggregateOutputType | null
  }

  type GetVerifyGroupByPayload<T extends VerifyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerifyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerifyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerifyGroupByOutputType[P]>
            : GetScalarType<T[P], VerifyGroupByOutputType[P]>
        }
      >
    >


  export type VerifySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    verificationId?: boolean
    email?: boolean
    verificationCode?: boolean
    createdAt?: boolean
    expiredAt?: boolean
  }, ExtArgs["result"]["verify"]>

  export type VerifySelectScalar = {
    verificationId?: boolean
    email?: boolean
    verificationCode?: boolean
    createdAt?: boolean
    expiredAt?: boolean
  }


  export type $VerifyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verify"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      verificationId: number
      email: string
      verificationCode: string
      createdAt: Date
      expiredAt: Date | null
    }, ExtArgs["result"]["verify"]>
    composites: {}
  }


  type VerifyGetPayload<S extends boolean | null | undefined | VerifyDefaultArgs> = $Result.GetResult<Prisma.$VerifyPayload, S>

  type VerifyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerifyFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: VerifyCountAggregateInputType | true
    }

  export interface VerifyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verify'], meta: { name: 'Verify' } }
    /**
     * Find zero or one Verify that matches the filter.
     * @param {VerifyFindUniqueArgs} args - Arguments to find a Verify
     * @example
     * // Get one Verify
     * const verify = await prisma.verify.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerifyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerifyFindUniqueArgs<ExtArgs>>
    ): Prisma__VerifyClient<$Result.GetResult<Prisma.$VerifyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Verify that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerifyFindUniqueOrThrowArgs} args - Arguments to find a Verify
     * @example
     * // Get one Verify
     * const verify = await prisma.verify.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerifyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerifyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerifyClient<$Result.GetResult<Prisma.$VerifyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Verify that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyFindFirstArgs} args - Arguments to find a Verify
     * @example
     * // Get one Verify
     * const verify = await prisma.verify.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerifyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerifyFindFirstArgs<ExtArgs>>
    ): Prisma__VerifyClient<$Result.GetResult<Prisma.$VerifyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Verify that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyFindFirstOrThrowArgs} args - Arguments to find a Verify
     * @example
     * // Get one Verify
     * const verify = await prisma.verify.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerifyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerifyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerifyClient<$Result.GetResult<Prisma.$VerifyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Verifies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifies
     * const verifies = await prisma.verify.findMany()
     * 
     * // Get first 10 Verifies
     * const verifies = await prisma.verify.findMany({ take: 10 })
     * 
     * // Only select the `verificationId`
     * const verifyWithVerificationIdOnly = await prisma.verify.findMany({ select: { verificationId: true } })
     * 
    **/
    findMany<T extends VerifyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerifyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerifyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Verify.
     * @param {VerifyCreateArgs} args - Arguments to create a Verify.
     * @example
     * // Create one Verify
     * const Verify = await prisma.verify.create({
     *   data: {
     *     // ... data to create a Verify
     *   }
     * })
     * 
    **/
    create<T extends VerifyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerifyCreateArgs<ExtArgs>>
    ): Prisma__VerifyClient<$Result.GetResult<Prisma.$VerifyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Verifies.
     *     @param {VerifyCreateManyArgs} args - Arguments to create many Verifies.
     *     @example
     *     // Create many Verifies
     *     const verify = await prisma.verify.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerifyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerifyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Verify.
     * @param {VerifyDeleteArgs} args - Arguments to delete one Verify.
     * @example
     * // Delete one Verify
     * const Verify = await prisma.verify.delete({
     *   where: {
     *     // ... filter to delete one Verify
     *   }
     * })
     * 
    **/
    delete<T extends VerifyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerifyDeleteArgs<ExtArgs>>
    ): Prisma__VerifyClient<$Result.GetResult<Prisma.$VerifyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Verify.
     * @param {VerifyUpdateArgs} args - Arguments to update one Verify.
     * @example
     * // Update one Verify
     * const verify = await prisma.verify.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerifyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerifyUpdateArgs<ExtArgs>>
    ): Prisma__VerifyClient<$Result.GetResult<Prisma.$VerifyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Verifies.
     * @param {VerifyDeleteManyArgs} args - Arguments to filter Verifies to delete.
     * @example
     * // Delete a few Verifies
     * const { count } = await prisma.verify.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerifyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerifyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifies
     * const verify = await prisma.verify.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerifyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerifyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verify.
     * @param {VerifyUpsertArgs} args - Arguments to update or create a Verify.
     * @example
     * // Update or create a Verify
     * const verify = await prisma.verify.upsert({
     *   create: {
     *     // ... data to create a Verify
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verify we want to update
     *   }
     * })
    **/
    upsert<T extends VerifyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerifyUpsertArgs<ExtArgs>>
    ): Prisma__VerifyClient<$Result.GetResult<Prisma.$VerifyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Verifies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyCountArgs} args - Arguments to filter Verifies to count.
     * @example
     * // Count the number of Verifies
     * const count = await prisma.verify.count({
     *   where: {
     *     // ... the filter for the Verifies we want to count
     *   }
     * })
    **/
    count<T extends VerifyCountArgs>(
      args?: Subset<T, VerifyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerifyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verify.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerifyAggregateArgs>(args: Subset<T, VerifyAggregateArgs>): Prisma.PrismaPromise<GetVerifyAggregateType<T>>

    /**
     * Group by Verify.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerifyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerifyGroupByArgs['orderBy'] }
        : { orderBy?: VerifyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerifyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerifyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verify model
   */
  readonly fields: VerifyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verify.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerifyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Verify model
   */ 
  interface VerifyFieldRefs {
    readonly verificationId: FieldRef<"Verify", 'Int'>
    readonly email: FieldRef<"Verify", 'String'>
    readonly verificationCode: FieldRef<"Verify", 'String'>
    readonly createdAt: FieldRef<"Verify", 'DateTime'>
    readonly expiredAt: FieldRef<"Verify", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Verify findUnique
   */
  export type VerifyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verify
     */
    select?: VerifySelect<ExtArgs> | null
    /**
     * Filter, which Verify to fetch.
     */
    where: VerifyWhereUniqueInput
  }


  /**
   * Verify findUniqueOrThrow
   */
  export type VerifyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verify
     */
    select?: VerifySelect<ExtArgs> | null
    /**
     * Filter, which Verify to fetch.
     */
    where: VerifyWhereUniqueInput
  }


  /**
   * Verify findFirst
   */
  export type VerifyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verify
     */
    select?: VerifySelect<ExtArgs> | null
    /**
     * Filter, which Verify to fetch.
     */
    where?: VerifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifies to fetch.
     */
    orderBy?: VerifyOrderByWithRelationInput | VerifyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifies.
     */
    cursor?: VerifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifies.
     */
    distinct?: VerifyScalarFieldEnum | VerifyScalarFieldEnum[]
  }


  /**
   * Verify findFirstOrThrow
   */
  export type VerifyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verify
     */
    select?: VerifySelect<ExtArgs> | null
    /**
     * Filter, which Verify to fetch.
     */
    where?: VerifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifies to fetch.
     */
    orderBy?: VerifyOrderByWithRelationInput | VerifyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifies.
     */
    cursor?: VerifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifies.
     */
    distinct?: VerifyScalarFieldEnum | VerifyScalarFieldEnum[]
  }


  /**
   * Verify findMany
   */
  export type VerifyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verify
     */
    select?: VerifySelect<ExtArgs> | null
    /**
     * Filter, which Verifies to fetch.
     */
    where?: VerifyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifies to fetch.
     */
    orderBy?: VerifyOrderByWithRelationInput | VerifyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifies.
     */
    cursor?: VerifyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifies.
     */
    skip?: number
    distinct?: VerifyScalarFieldEnum | VerifyScalarFieldEnum[]
  }


  /**
   * Verify create
   */
  export type VerifyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verify
     */
    select?: VerifySelect<ExtArgs> | null
    /**
     * The data needed to create a Verify.
     */
    data: XOR<VerifyCreateInput, VerifyUncheckedCreateInput>
  }


  /**
   * Verify createMany
   */
  export type VerifyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifies.
     */
    data: VerifyCreateManyInput | VerifyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Verify update
   */
  export type VerifyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verify
     */
    select?: VerifySelect<ExtArgs> | null
    /**
     * The data needed to update a Verify.
     */
    data: XOR<VerifyUpdateInput, VerifyUncheckedUpdateInput>
    /**
     * Choose, which Verify to update.
     */
    where: VerifyWhereUniqueInput
  }


  /**
   * Verify updateMany
   */
  export type VerifyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifies.
     */
    data: XOR<VerifyUpdateManyMutationInput, VerifyUncheckedUpdateManyInput>
    /**
     * Filter which Verifies to update
     */
    where?: VerifyWhereInput
  }


  /**
   * Verify upsert
   */
  export type VerifyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verify
     */
    select?: VerifySelect<ExtArgs> | null
    /**
     * The filter to search for the Verify to update in case it exists.
     */
    where: VerifyWhereUniqueInput
    /**
     * In case the Verify found by the `where` argument doesn't exist, create a new Verify with this data.
     */
    create: XOR<VerifyCreateInput, VerifyUncheckedCreateInput>
    /**
     * In case the Verify was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerifyUpdateInput, VerifyUncheckedUpdateInput>
  }


  /**
   * Verify delete
   */
  export type VerifyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verify
     */
    select?: VerifySelect<ExtArgs> | null
    /**
     * Filter which Verify to delete.
     */
    where: VerifyWhereUniqueInput
  }


  /**
   * Verify deleteMany
   */
  export type VerifyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifies to delete
     */
    where?: VerifyWhereInput
  }


  /**
   * Verify without action
   */
  export type VerifyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verify
     */
    select?: VerifySelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
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

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    productId: 'productId',
    name: 'name',
    author: 'author',
    imageUrl: 'imageUrl',
    price: 'price',
    description: 'description',
    status: 'status',
    usertype: 'usertype',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const BookstoresScalarFieldEnum: {
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

  export type BookstoresScalarFieldEnum = (typeof BookstoresScalarFieldEnum)[keyof typeof BookstoresScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    expirationDate: 'expirationDate',
    userId: 'userId'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const UsersProductsScalarFieldEnum: {
    userId: 'userId',
    productId: 'productId'
  };

  export type UsersProductsScalarFieldEnum = (typeof UsersProductsScalarFieldEnum)[keyof typeof UsersProductsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    orderId: 'orderId',
    userId: 'userId',
    productId: 'productId',
    address: 'address',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    reviewId: 'reviewId',
    userId: 'userId',
    productId: 'productId',
    reviewText: 'reviewText',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const FollowScalarFieldEnum: {
    followerId: 'followerId',
    followingId: 'followingId'
  };

  export type FollowScalarFieldEnum = (typeof FollowScalarFieldEnum)[keyof typeof FollowScalarFieldEnum]


  export const VerifyScalarFieldEnum: {
    verificationId: 'verificationId',
    email: 'email',
    verificationCode: 'verificationCode',
    createdAt: 'createdAt',
    expiredAt: 'expiredAt'
  };

  export type VerifyScalarFieldEnum = (typeof VerifyScalarFieldEnum)[keyof typeof VerifyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userId?: IntFilter<"Users"> | number
    usertype?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    kakaoUserId?: IntNullableFilter<"Users"> | number | null
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    isAdmin?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    points?: IntNullableFilter<"Users"> | number | null
    isVerified?: BoolFilter<"Users"> | boolean
    products?: ProductsListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    userProducts?: UsersProductsListRelationFilter
    followers?: FollowListRelationFilter
    following?: FollowListRelationFilter
    bookstores?: BookstoresListRelationFilter
    Orders?: OrdersListRelationFilter
    userReviews?: ReviewsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    userId?: SortOrder
    usertype?: SortOrder
    username?: SortOrder
    kakaoUserId?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    products?: ProductsOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    userProducts?: UsersProductsOrderByRelationAggregateInput
    followers?: FollowOrderByRelationAggregateInput
    following?: FollowOrderByRelationAggregateInput
    bookstores?: BookstoresOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    userReviews?: ReviewsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    usertype?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    kakaoUserId?: IntNullableFilter<"Users"> | number | null
    password?: StringFilter<"Users"> | string
    isAdmin?: BoolFilter<"Users"> | boolean
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    points?: IntNullableFilter<"Users"> | number | null
    isVerified?: BoolFilter<"Users"> | boolean
    products?: ProductsListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    userProducts?: UsersProductsListRelationFilter
    followers?: FollowListRelationFilter
    following?: FollowListRelationFilter
    bookstores?: BookstoresListRelationFilter
    Orders?: OrdersListRelationFilter
    userReviews?: ReviewsListRelationFilter
  }, "userId" | "email">

  export type UsersOrderByWithAggregationInput = {
    userId?: SortOrder
    usertype?: SortOrder
    username?: SortOrder
    kakaoUserId?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Users"> | number
    usertype?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    kakaoUserId?: IntNullableWithAggregatesFilter<"Users"> | number | null
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    isAdmin?: BoolWithAggregatesFilter<"Users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    points?: IntNullableWithAggregatesFilter<"Users"> | number | null
    isVerified?: BoolWithAggregatesFilter<"Users"> | boolean
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    productId?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    author?: StringNullableFilter<"Products"> | string | null
    imageUrl?: StringNullableFilter<"Products"> | string | null
    price?: IntFilter<"Products"> | number
    description?: StringFilter<"Products"> | string
    status?: StringFilter<"Products"> | string
    usertype?: StringFilter<"Products"> | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    userId?: IntFilter<"Products"> | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    userProducts?: UsersProductsListRelationFilter
    bookstores?: BookstoresListRelationFilter
    Orders?: OrdersListRelationFilter
    productReviews?: ReviewsListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    productId?: SortOrder
    name?: SortOrder
    author?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    description?: SortOrder
    status?: SortOrder
    usertype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    userProducts?: UsersProductsOrderByRelationAggregateInput
    bookstores?: BookstoresOrderByRelationAggregateInput
    Orders?: OrdersOrderByRelationAggregateInput
    productReviews?: ReviewsOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    productId?: number
    name?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    author?: StringNullableFilter<"Products"> | string | null
    imageUrl?: StringNullableFilter<"Products"> | string | null
    price?: IntFilter<"Products"> | number
    description?: StringFilter<"Products"> | string
    status?: StringFilter<"Products"> | string
    usertype?: StringFilter<"Products"> | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    userId?: IntFilter<"Products"> | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    userProducts?: UsersProductsListRelationFilter
    bookstores?: BookstoresListRelationFilter
    Orders?: OrdersListRelationFilter
    productReviews?: ReviewsListRelationFilter
  }, "productId" | "name">

  export type ProductsOrderByWithAggregationInput = {
    productId?: SortOrder
    name?: SortOrder
    author?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    price?: SortOrder
    description?: SortOrder
    status?: SortOrder
    usertype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"Products"> | number
    name?: StringWithAggregatesFilter<"Products"> | string
    author?: StringNullableWithAggregatesFilter<"Products"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Products"> | string | null
    price?: IntWithAggregatesFilter<"Products"> | number
    description?: StringWithAggregatesFilter<"Products"> | string
    status?: StringWithAggregatesFilter<"Products"> | string
    usertype?: StringWithAggregatesFilter<"Products"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Products"> | Date | string
    userId?: IntWithAggregatesFilter<"Products"> | number
  }

  export type BookstoresWhereInput = {
    AND?: BookstoresWhereInput | BookstoresWhereInput[]
    OR?: BookstoresWhereInput[]
    NOT?: BookstoresWhereInput | BookstoresWhereInput[]
    bookstoreId?: IntFilter<"Bookstores"> | number
    imageUrl?: StringFilter<"Bookstores"> | string
    name?: StringFilter<"Bookstores"> | string
    price?: IntFilter<"Bookstores"> | number
    address?: StringFilter<"Bookstores"> | string
    description?: StringFilter<"Bookstores"> | string
    status?: StringFilter<"Bookstores"> | string
    createdAt?: DateTimeFilter<"Bookstores"> | Date | string
    updatedAt?: DateTimeFilter<"Bookstores"> | Date | string
    userId?: IntFilter<"Bookstores"> | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    products?: ProductsListRelationFilter
  }

  export type BookstoresOrderByWithRelationInput = {
    bookstoreId?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    price?: SortOrder
    address?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
    products?: ProductsOrderByRelationAggregateInput
  }

  export type BookstoresWhereUniqueInput = Prisma.AtLeast<{
    bookstoreId?: number
    AND?: BookstoresWhereInput | BookstoresWhereInput[]
    OR?: BookstoresWhereInput[]
    NOT?: BookstoresWhereInput | BookstoresWhereInput[]
    imageUrl?: StringFilter<"Bookstores"> | string
    name?: StringFilter<"Bookstores"> | string
    price?: IntFilter<"Bookstores"> | number
    address?: StringFilter<"Bookstores"> | string
    description?: StringFilter<"Bookstores"> | string
    status?: StringFilter<"Bookstores"> | string
    createdAt?: DateTimeFilter<"Bookstores"> | Date | string
    updatedAt?: DateTimeFilter<"Bookstores"> | Date | string
    userId?: IntFilter<"Bookstores"> | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    products?: ProductsListRelationFilter
  }, "bookstoreId">

  export type BookstoresOrderByWithAggregationInput = {
    bookstoreId?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    price?: SortOrder
    address?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: BookstoresCountOrderByAggregateInput
    _avg?: BookstoresAvgOrderByAggregateInput
    _max?: BookstoresMaxOrderByAggregateInput
    _min?: BookstoresMinOrderByAggregateInput
    _sum?: BookstoresSumOrderByAggregateInput
  }

  export type BookstoresScalarWhereWithAggregatesInput = {
    AND?: BookstoresScalarWhereWithAggregatesInput | BookstoresScalarWhereWithAggregatesInput[]
    OR?: BookstoresScalarWhereWithAggregatesInput[]
    NOT?: BookstoresScalarWhereWithAggregatesInput | BookstoresScalarWhereWithAggregatesInput[]
    bookstoreId?: IntWithAggregatesFilter<"Bookstores"> | number
    imageUrl?: StringWithAggregatesFilter<"Bookstores"> | string
    name?: StringWithAggregatesFilter<"Bookstores"> | string
    price?: IntWithAggregatesFilter<"Bookstores"> | number
    address?: StringWithAggregatesFilter<"Bookstores"> | string
    description?: StringWithAggregatesFilter<"Bookstores"> | string
    status?: StringWithAggregatesFilter<"Bookstores"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bookstores"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bookstores"> | Date | string
    userId?: IntWithAggregatesFilter<"Bookstores"> | number
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    expirationDate?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: IntFilter<"RefreshToken"> | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    expirationDate?: SortOrder
    userId?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    token?: StringFilter<"RefreshToken"> | string
    expirationDate?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: IntFilter<"RefreshToken"> | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    expirationDate?: SortOrder
    userId?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    expirationDate?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    userId?: IntWithAggregatesFilter<"RefreshToken"> | number
  }

  export type UsersProductsWhereInput = {
    AND?: UsersProductsWhereInput | UsersProductsWhereInput[]
    OR?: UsersProductsWhereInput[]
    NOT?: UsersProductsWhereInput | UsersProductsWhereInput[]
    userId?: IntFilter<"UsersProducts"> | number
    productId?: IntFilter<"UsersProducts"> | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    product?: XOR<ProductsRelationFilter, ProductsWhereInput>
  }

  export type UsersProductsOrderByWithRelationInput = {
    userId?: SortOrder
    productId?: SortOrder
    user?: UsersOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type UsersProductsWhereUniqueInput = Prisma.AtLeast<{
    userId_productId?: UsersProductsUserIdProductIdCompoundUniqueInput
    AND?: UsersProductsWhereInput | UsersProductsWhereInput[]
    OR?: UsersProductsWhereInput[]
    NOT?: UsersProductsWhereInput | UsersProductsWhereInput[]
    userId?: IntFilter<"UsersProducts"> | number
    productId?: IntFilter<"UsersProducts"> | number
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    product?: XOR<ProductsRelationFilter, ProductsWhereInput>
  }, "userId_productId">

  export type UsersProductsOrderByWithAggregationInput = {
    userId?: SortOrder
    productId?: SortOrder
    _count?: UsersProductsCountOrderByAggregateInput
    _avg?: UsersProductsAvgOrderByAggregateInput
    _max?: UsersProductsMaxOrderByAggregateInput
    _min?: UsersProductsMinOrderByAggregateInput
    _sum?: UsersProductsSumOrderByAggregateInput
  }

  export type UsersProductsScalarWhereWithAggregatesInput = {
    AND?: UsersProductsScalarWhereWithAggregatesInput | UsersProductsScalarWhereWithAggregatesInput[]
    OR?: UsersProductsScalarWhereWithAggregatesInput[]
    NOT?: UsersProductsScalarWhereWithAggregatesInput | UsersProductsScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UsersProducts"> | number
    productId?: IntWithAggregatesFilter<"UsersProducts"> | number
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    orderId?: IntFilter<"Orders"> | number
    userId?: IntFilter<"Orders"> | number
    productId?: IntFilter<"Orders"> | number
    address?: StringFilter<"Orders"> | string
    status?: StringFilter<"Orders"> | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    product?: XOR<ProductsRelationFilter, ProductsWhereInput>
  }

  export type OrdersOrderByWithRelationInput = {
    orderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    orderId?: number
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    userId?: IntFilter<"Orders"> | number
    productId?: IntFilter<"Orders"> | number
    address?: StringFilter<"Orders"> | string
    status?: StringFilter<"Orders"> | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    product?: XOR<ProductsRelationFilter, ProductsWhereInput>
  }, "orderId">

  export type OrdersOrderByWithAggregationInput = {
    orderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    orderId?: IntWithAggregatesFilter<"Orders"> | number
    userId?: IntWithAggregatesFilter<"Orders"> | number
    productId?: IntWithAggregatesFilter<"Orders"> | number
    address?: StringWithAggregatesFilter<"Orders"> | string
    status?: StringWithAggregatesFilter<"Orders"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    reviewId?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    productId?: IntFilter<"Reviews"> | number
    reviewText?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    product?: XOR<ProductsRelationFilter, ProductsWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    reviewId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    reviewText?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    reviewId?: number
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    userId?: IntFilter<"Reviews"> | number
    productId?: IntFilter<"Reviews"> | number
    reviewText?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
    user?: XOR<UsersRelationFilter, UsersWhereInput>
    product?: XOR<ProductsRelationFilter, ProductsWhereInput>
  }, "reviewId">

  export type ReviewsOrderByWithAggregationInput = {
    reviewId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    reviewText?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    reviewId?: IntWithAggregatesFilter<"Reviews"> | number
    userId?: IntWithAggregatesFilter<"Reviews"> | number
    productId?: IntWithAggregatesFilter<"Reviews"> | number
    reviewText?: StringWithAggregatesFilter<"Reviews"> | string
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reviews"> | Date | string
  }

  export type FollowWhereInput = {
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    followerId?: IntFilter<"Follow"> | number
    followingId?: IntFilter<"Follow"> | number
    follower?: XOR<UsersRelationFilter, UsersWhereInput>
    following?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type FollowOrderByWithRelationInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    follower?: UsersOrderByWithRelationInput
    following?: UsersOrderByWithRelationInput
  }

  export type FollowWhereUniqueInput = Prisma.AtLeast<{
    followingId_followerId?: FollowFollowingIdFollowerIdCompoundUniqueInput
    AND?: FollowWhereInput | FollowWhereInput[]
    OR?: FollowWhereInput[]
    NOT?: FollowWhereInput | FollowWhereInput[]
    followerId?: IntFilter<"Follow"> | number
    followingId?: IntFilter<"Follow"> | number
    follower?: XOR<UsersRelationFilter, UsersWhereInput>
    following?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "followingId_followerId">

  export type FollowOrderByWithAggregationInput = {
    followerId?: SortOrder
    followingId?: SortOrder
    _count?: FollowCountOrderByAggregateInput
    _avg?: FollowAvgOrderByAggregateInput
    _max?: FollowMaxOrderByAggregateInput
    _min?: FollowMinOrderByAggregateInput
    _sum?: FollowSumOrderByAggregateInput
  }

  export type FollowScalarWhereWithAggregatesInput = {
    AND?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    OR?: FollowScalarWhereWithAggregatesInput[]
    NOT?: FollowScalarWhereWithAggregatesInput | FollowScalarWhereWithAggregatesInput[]
    followerId?: IntWithAggregatesFilter<"Follow"> | number
    followingId?: IntWithAggregatesFilter<"Follow"> | number
  }

  export type VerifyWhereInput = {
    AND?: VerifyWhereInput | VerifyWhereInput[]
    OR?: VerifyWhereInput[]
    NOT?: VerifyWhereInput | VerifyWhereInput[]
    verificationId?: IntFilter<"Verify"> | number
    email?: StringFilter<"Verify"> | string
    verificationCode?: StringFilter<"Verify"> | string
    createdAt?: DateTimeFilter<"Verify"> | Date | string
    expiredAt?: DateTimeNullableFilter<"Verify"> | Date | string | null
  }

  export type VerifyOrderByWithRelationInput = {
    verificationId?: SortOrder
    email?: SortOrder
    verificationCode?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrderInput | SortOrder
  }

  export type VerifyWhereUniqueInput = Prisma.AtLeast<{
    verificationId?: number
    AND?: VerifyWhereInput | VerifyWhereInput[]
    OR?: VerifyWhereInput[]
    NOT?: VerifyWhereInput | VerifyWhereInput[]
    email?: StringFilter<"Verify"> | string
    verificationCode?: StringFilter<"Verify"> | string
    createdAt?: DateTimeFilter<"Verify"> | Date | string
    expiredAt?: DateTimeNullableFilter<"Verify"> | Date | string | null
  }, "verificationId">

  export type VerifyOrderByWithAggregationInput = {
    verificationId?: SortOrder
    email?: SortOrder
    verificationCode?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrderInput | SortOrder
    _count?: VerifyCountOrderByAggregateInput
    _avg?: VerifyAvgOrderByAggregateInput
    _max?: VerifyMaxOrderByAggregateInput
    _min?: VerifyMinOrderByAggregateInput
    _sum?: VerifySumOrderByAggregateInput
  }

  export type VerifyScalarWhereWithAggregatesInput = {
    AND?: VerifyScalarWhereWithAggregatesInput | VerifyScalarWhereWithAggregatesInput[]
    OR?: VerifyScalarWhereWithAggregatesInput[]
    NOT?: VerifyScalarWhereWithAggregatesInput | VerifyScalarWhereWithAggregatesInput[]
    verificationId?: IntWithAggregatesFilter<"Verify"> | number
    email?: StringWithAggregatesFilter<"Verify"> | string
    verificationCode?: StringWithAggregatesFilter<"Verify"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Verify"> | Date | string
    expiredAt?: DateTimeNullableWithAggregatesFilter<"Verify"> | Date | string | null
  }

  export type UsersCreateInput = {
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    userReviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    userId?: number
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    userReviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    userId?: number
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
  }

  export type UsersUpdateManyMutationInput = {
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsersUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsCreateInput = {
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutProductsInput
    userProducts?: UsersProductsCreateNestedManyWithoutProductInput
    bookstores?: BookstoresCreateNestedManyWithoutProductsInput
    Orders?: OrdersCreateNestedManyWithoutProductInput
    productReviews?: ReviewsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    productId?: number
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutProductInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutProductsInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutProductInput
    productReviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProductsNestedInput
    userProducts?: UsersProductsUpdateManyWithoutProductNestedInput
    bookstores?: BookstoresUpdateManyWithoutProductsNestedInput
    Orders?: OrdersUpdateManyWithoutProductNestedInput
    productReviews?: ReviewsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    userProducts?: UsersProductsUncheckedUpdateManyWithoutProductNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutProductsNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutProductNestedInput
    productReviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    productId?: number
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type ProductsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BookstoresCreateInput = {
    imageUrl: string
    name: string
    price: number
    address?: string
    description: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutBookstoresInput
    products?: ProductsCreateNestedManyWithoutBookstoresInput
  }

  export type BookstoresUncheckedCreateInput = {
    bookstoreId?: number
    imageUrl: string
    name: string
    price: number
    address?: string
    description: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    products?: ProductsUncheckedCreateNestedManyWithoutBookstoresInput
  }

  export type BookstoresUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookstoresNestedInput
    products?: ProductsUpdateManyWithoutBookstoresNestedInput
  }

  export type BookstoresUncheckedUpdateInput = {
    bookstoreId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    products?: ProductsUncheckedUpdateManyWithoutBookstoresNestedInput
  }

  export type BookstoresCreateManyInput = {
    bookstoreId?: number
    imageUrl: string
    name: string
    price: number
    address?: string
    description: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type BookstoresUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookstoresUncheckedUpdateManyInput = {
    bookstoreId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshTokenCreateInput = {
    token: string
    expirationDate: Date | string
    user: UsersCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    token: string
    expirationDate: Date | string
    userId: number
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    token: string
    expirationDate: Date | string
    userId: number
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersProductsCreateInput = {
    user: UsersCreateNestedOneWithoutUserProductsInput
    product: ProductsCreateNestedOneWithoutUserProductsInput
  }

  export type UsersProductsUncheckedCreateInput = {
    userId: number
    productId: number
  }

  export type UsersProductsUpdateInput = {
    user?: UsersUpdateOneRequiredWithoutUserProductsNestedInput
    product?: ProductsUpdateOneRequiredWithoutUserProductsNestedInput
  }

  export type UsersProductsUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersProductsCreateManyInput = {
    userId: number
    productId: number
  }

  export type UsersProductsUpdateManyMutationInput = {

  }

  export type UsersProductsUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersCreateInput = {
    address?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutOrdersInput
    product: ProductsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    orderId?: number
    userId: number
    productId: number
    address?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput
    product?: ProductsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateManyInput = {
    orderId?: number
    userId: number
    productId: number
    address?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateInput = {
    reviewText: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutUserReviewsInput
    product: ProductsCreateNestedOneWithoutProductReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    reviewId?: number
    userId: number
    productId: number
    reviewText: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUpdateInput = {
    reviewText?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUserReviewsNestedInput
    product?: ProductsUpdateOneRequiredWithoutProductReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    reviewText?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsCreateManyInput = {
    reviewId?: number
    userId: number
    productId: number
    reviewText: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsUpdateManyMutationInput = {
    reviewText?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    reviewText?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowCreateInput = {
    follower: UsersCreateNestedOneWithoutFollowersInput
    following: UsersCreateNestedOneWithoutFollowingInput
  }

  export type FollowUncheckedCreateInput = {
    followerId: number
    followingId: number
  }

  export type FollowUpdateInput = {
    follower?: UsersUpdateOneRequiredWithoutFollowersNestedInput
    following?: UsersUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowUncheckedUpdateInput = {
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowCreateManyInput = {
    followerId: number
    followingId: number
  }

  export type FollowUpdateManyMutationInput = {

  }

  export type FollowUncheckedUpdateManyInput = {
    followerId?: IntFieldUpdateOperationsInput | number
    followingId?: IntFieldUpdateOperationsInput | number
  }

  export type VerifyCreateInput = {
    email: string
    verificationCode: string
    createdAt?: Date | string
    expiredAt?: Date | string | null
  }

  export type VerifyUncheckedCreateInput = {
    verificationId?: number
    email: string
    verificationCode: string
    createdAt?: Date | string
    expiredAt?: Date | string | null
  }

  export type VerifyUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerifyUncheckedUpdateInput = {
    verificationId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerifyCreateManyInput = {
    verificationId?: number
    email: string
    verificationCode: string
    createdAt?: Date | string
    expiredAt?: Date | string | null
  }

  export type VerifyUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerifyUncheckedUpdateManyInput = {
    verificationId?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type UsersProductsListRelationFilter = {
    every?: UsersProductsWhereInput
    some?: UsersProductsWhereInput
    none?: UsersProductsWhereInput
  }

  export type FollowListRelationFilter = {
    every?: FollowWhereInput
    some?: FollowWhereInput
    none?: FollowWhereInput
  }

  export type BookstoresListRelationFilter = {
    every?: BookstoresWhereInput
    some?: BookstoresWhereInput
    none?: BookstoresWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookstoresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    userId?: SortOrder
    usertype?: SortOrder
    username?: SortOrder
    kakaoUserId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: SortOrder
    isVerified?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    userId?: SortOrder
    kakaoUserId?: SortOrder
    points?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userId?: SortOrder
    usertype?: SortOrder
    username?: SortOrder
    kakaoUserId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: SortOrder
    isVerified?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userId?: SortOrder
    usertype?: SortOrder
    username?: SortOrder
    kakaoUserId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    points?: SortOrder
    isVerified?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    userId?: SortOrder
    kakaoUserId?: SortOrder
    points?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ProductsCountOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    description?: SortOrder
    status?: SortOrder
    usertype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    productId?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    description?: SortOrder
    status?: SortOrder
    usertype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    productId?: SortOrder
    name?: SortOrder
    author?: SortOrder
    imageUrl?: SortOrder
    price?: SortOrder
    description?: SortOrder
    status?: SortOrder
    usertype?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    productId?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BookstoresCountOrderByAggregateInput = {
    bookstoreId?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    price?: SortOrder
    address?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BookstoresAvgOrderByAggregateInput = {
    bookstoreId?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type BookstoresMaxOrderByAggregateInput = {
    bookstoreId?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    price?: SortOrder
    address?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BookstoresMinOrderByAggregateInput = {
    bookstoreId?: SortOrder
    imageUrl?: SortOrder
    name?: SortOrder
    price?: SortOrder
    address?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BookstoresSumOrderByAggregateInput = {
    bookstoreId?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expirationDate?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expirationDate?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    expirationDate?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProductsRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type UsersProductsUserIdProductIdCompoundUniqueInput = {
    userId: number
    productId: number
  }

  export type UsersProductsCountOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UsersProductsAvgOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UsersProductsMaxOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UsersProductsMinOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UsersProductsSumOrderByAggregateInput = {
    userId?: SortOrder
    productId?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    orderId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type ReviewsCountOrderByAggregateInput = {
    reviewId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    reviewText?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    reviewId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    reviewId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    reviewText?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    reviewId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    reviewText?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    reviewId?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    rating?: SortOrder
  }

  export type FollowFollowingIdFollowerIdCompoundUniqueInput = {
    followingId: number
    followerId: number
  }

  export type FollowCountOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowAvgOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowMaxOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowMinOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type FollowSumOrderByAggregateInput = {
    followerId?: SortOrder
    followingId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VerifyCountOrderByAggregateInput = {
    verificationId?: SortOrder
    email?: SortOrder
    verificationCode?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type VerifyAvgOrderByAggregateInput = {
    verificationId?: SortOrder
  }

  export type VerifyMaxOrderByAggregateInput = {
    verificationId?: SortOrder
    email?: SortOrder
    verificationCode?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type VerifyMinOrderByAggregateInput = {
    verificationId?: SortOrder
    email?: SortOrder
    verificationCode?: SortOrder
    createdAt?: SortOrder
    expiredAt?: SortOrder
  }

  export type VerifySumOrderByAggregateInput = {
    verificationId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProductsCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductsCreateWithoutUserInput, ProductsUncheckedCreateWithoutUserInput> | ProductsCreateWithoutUserInput[] | ProductsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutUserInput | ProductsCreateOrConnectWithoutUserInput[]
    createMany?: ProductsCreateManyUserInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UsersProductsCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersProductsCreateWithoutUserInput, UsersProductsUncheckedCreateWithoutUserInput> | UsersProductsCreateWithoutUserInput[] | UsersProductsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersProductsCreateOrConnectWithoutUserInput | UsersProductsCreateOrConnectWithoutUserInput[]
    createMany?: UsersProductsCreateManyUserInputEnvelope
    connect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type BookstoresCreateNestedManyWithoutUserInput = {
    create?: XOR<BookstoresCreateWithoutUserInput, BookstoresUncheckedCreateWithoutUserInput> | BookstoresCreateWithoutUserInput[] | BookstoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookstoresCreateOrConnectWithoutUserInput | BookstoresCreateOrConnectWithoutUserInput[]
    createMany?: BookstoresCreateManyUserInputEnvelope
    connect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductsCreateWithoutUserInput, ProductsUncheckedCreateWithoutUserInput> | ProductsCreateWithoutUserInput[] | ProductsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutUserInput | ProductsCreateOrConnectWithoutUserInput[]
    createMany?: ProductsCreateManyUserInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type UsersProductsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsersProductsCreateWithoutUserInput, UsersProductsUncheckedCreateWithoutUserInput> | UsersProductsCreateWithoutUserInput[] | UsersProductsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersProductsCreateOrConnectWithoutUserInput | UsersProductsCreateOrConnectWithoutUserInput[]
    createMany?: UsersProductsCreateManyUserInputEnvelope
    connect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowerInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type FollowUncheckedCreateNestedManyWithoutFollowingInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
  }

  export type BookstoresUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookstoresCreateWithoutUserInput, BookstoresUncheckedCreateWithoutUserInput> | BookstoresCreateWithoutUserInput[] | BookstoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookstoresCreateOrConnectWithoutUserInput | BookstoresCreateOrConnectWithoutUserInput[]
    createMany?: BookstoresCreateManyUserInputEnvelope
    connect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductsCreateWithoutUserInput, ProductsUncheckedCreateWithoutUserInput> | ProductsCreateWithoutUserInput[] | ProductsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutUserInput | ProductsCreateOrConnectWithoutUserInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutUserInput | ProductsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductsCreateManyUserInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutUserInput | ProductsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutUserInput | ProductsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UsersProductsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersProductsCreateWithoutUserInput, UsersProductsUncheckedCreateWithoutUserInput> | UsersProductsCreateWithoutUserInput[] | UsersProductsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersProductsCreateOrConnectWithoutUserInput | UsersProductsCreateOrConnectWithoutUserInput[]
    upsert?: UsersProductsUpsertWithWhereUniqueWithoutUserInput | UsersProductsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersProductsCreateManyUserInputEnvelope
    set?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    disconnect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    delete?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    connect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    update?: UsersProductsUpdateWithWhereUniqueWithoutUserInput | UsersProductsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersProductsUpdateManyWithWhereWithoutUserInput | UsersProductsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersProductsScalarWhereInput | UsersProductsScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowingInput | FollowUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowingInput | FollowUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowingInput | FollowUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type BookstoresUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookstoresCreateWithoutUserInput, BookstoresUncheckedCreateWithoutUserInput> | BookstoresCreateWithoutUserInput[] | BookstoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookstoresCreateOrConnectWithoutUserInput | BookstoresCreateOrConnectWithoutUserInput[]
    upsert?: BookstoresUpsertWithWhereUniqueWithoutUserInput | BookstoresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookstoresCreateManyUserInputEnvelope
    set?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    disconnect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    delete?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    connect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    update?: BookstoresUpdateWithWhereUniqueWithoutUserInput | BookstoresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookstoresUpdateManyWithWhereWithoutUserInput | BookstoresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookstoresScalarWhereInput | BookstoresScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductsCreateWithoutUserInput, ProductsUncheckedCreateWithoutUserInput> | ProductsCreateWithoutUserInput[] | ProductsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutUserInput | ProductsCreateOrConnectWithoutUserInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutUserInput | ProductsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductsCreateManyUserInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutUserInput | ProductsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutUserInput | ProductsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UsersProductsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsersProductsCreateWithoutUserInput, UsersProductsUncheckedCreateWithoutUserInput> | UsersProductsCreateWithoutUserInput[] | UsersProductsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsersProductsCreateOrConnectWithoutUserInput | UsersProductsCreateOrConnectWithoutUserInput[]
    upsert?: UsersProductsUpsertWithWhereUniqueWithoutUserInput | UsersProductsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsersProductsCreateManyUserInputEnvelope
    set?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    disconnect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    delete?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    connect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    update?: UsersProductsUpdateWithWhereUniqueWithoutUserInput | UsersProductsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsersProductsUpdateManyWithWhereWithoutUserInput | UsersProductsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsersProductsScalarWhereInput | UsersProductsScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowerNestedInput = {
    create?: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput> | FollowCreateWithoutFollowerInput[] | FollowUncheckedCreateWithoutFollowerInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowerInput | FollowCreateOrConnectWithoutFollowerInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowerInput | FollowUpsertWithWhereUniqueWithoutFollowerInput[]
    createMany?: FollowCreateManyFollowerInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowerInput | FollowUpdateWithWhereUniqueWithoutFollowerInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowerInput | FollowUpdateManyWithWhereWithoutFollowerInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type FollowUncheckedUpdateManyWithoutFollowingNestedInput = {
    create?: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput> | FollowCreateWithoutFollowingInput[] | FollowUncheckedCreateWithoutFollowingInput[]
    connectOrCreate?: FollowCreateOrConnectWithoutFollowingInput | FollowCreateOrConnectWithoutFollowingInput[]
    upsert?: FollowUpsertWithWhereUniqueWithoutFollowingInput | FollowUpsertWithWhereUniqueWithoutFollowingInput[]
    createMany?: FollowCreateManyFollowingInputEnvelope
    set?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    disconnect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    delete?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    connect?: FollowWhereUniqueInput | FollowWhereUniqueInput[]
    update?: FollowUpdateWithWhereUniqueWithoutFollowingInput | FollowUpdateWithWhereUniqueWithoutFollowingInput[]
    updateMany?: FollowUpdateManyWithWhereWithoutFollowingInput | FollowUpdateManyWithWhereWithoutFollowingInput[]
    deleteMany?: FollowScalarWhereInput | FollowScalarWhereInput[]
  }

  export type BookstoresUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookstoresCreateWithoutUserInput, BookstoresUncheckedCreateWithoutUserInput> | BookstoresCreateWithoutUserInput[] | BookstoresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookstoresCreateOrConnectWithoutUserInput | BookstoresCreateOrConnectWithoutUserInput[]
    upsert?: BookstoresUpsertWithWhereUniqueWithoutUserInput | BookstoresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookstoresCreateManyUserInputEnvelope
    set?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    disconnect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    delete?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    connect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    update?: BookstoresUpdateWithWhereUniqueWithoutUserInput | BookstoresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookstoresUpdateManyWithWhereWithoutUserInput | BookstoresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookstoresScalarWhereInput | BookstoresScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput> | OrdersCreateWithoutUserInput[] | OrdersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutUserInput | OrdersCreateOrConnectWithoutUserInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutUserInput | OrdersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrdersCreateManyUserInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutUserInput | OrdersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutUserInput | OrdersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput> | ReviewsCreateWithoutUserInput[] | ReviewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutUserInput | ReviewsCreateOrConnectWithoutUserInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutUserInput | ReviewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewsCreateManyUserInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutUserInput | ReviewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutUserInput | ReviewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutProductsInput = {
    create?: XOR<UsersCreateWithoutProductsInput, UsersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutProductsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersProductsCreateNestedManyWithoutProductInput = {
    create?: XOR<UsersProductsCreateWithoutProductInput, UsersProductsUncheckedCreateWithoutProductInput> | UsersProductsCreateWithoutProductInput[] | UsersProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UsersProductsCreateOrConnectWithoutProductInput | UsersProductsCreateOrConnectWithoutProductInput[]
    createMany?: UsersProductsCreateManyProductInputEnvelope
    connect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
  }

  export type BookstoresCreateNestedManyWithoutProductsInput = {
    create?: XOR<BookstoresCreateWithoutProductsInput, BookstoresUncheckedCreateWithoutProductsInput> | BookstoresCreateWithoutProductsInput[] | BookstoresUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: BookstoresCreateOrConnectWithoutProductsInput | BookstoresCreateOrConnectWithoutProductsInput[]
    connect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutProductInput = {
    create?: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput> | OrdersCreateWithoutProductInput[] | OrdersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutProductInput | OrdersCreateOrConnectWithoutProductInput[]
    createMany?: OrdersCreateManyProductInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ReviewsCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type UsersProductsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UsersProductsCreateWithoutProductInput, UsersProductsUncheckedCreateWithoutProductInput> | UsersProductsCreateWithoutProductInput[] | UsersProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UsersProductsCreateOrConnectWithoutProductInput | UsersProductsCreateOrConnectWithoutProductInput[]
    createMany?: UsersProductsCreateManyProductInputEnvelope
    connect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
  }

  export type BookstoresUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<BookstoresCreateWithoutProductsInput, BookstoresUncheckedCreateWithoutProductsInput> | BookstoresCreateWithoutProductsInput[] | BookstoresUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: BookstoresCreateOrConnectWithoutProductsInput | BookstoresCreateOrConnectWithoutProductsInput[]
    connect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput> | OrdersCreateWithoutProductInput[] | OrdersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutProductInput | OrdersCreateOrConnectWithoutProductInput[]
    createMany?: OrdersCreateManyProductInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UsersCreateWithoutProductsInput, UsersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutProductsInput
    upsert?: UsersUpsertWithoutProductsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutProductsInput, UsersUpdateWithoutProductsInput>, UsersUncheckedUpdateWithoutProductsInput>
  }

  export type UsersProductsUpdateManyWithoutProductNestedInput = {
    create?: XOR<UsersProductsCreateWithoutProductInput, UsersProductsUncheckedCreateWithoutProductInput> | UsersProductsCreateWithoutProductInput[] | UsersProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UsersProductsCreateOrConnectWithoutProductInput | UsersProductsCreateOrConnectWithoutProductInput[]
    upsert?: UsersProductsUpsertWithWhereUniqueWithoutProductInput | UsersProductsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UsersProductsCreateManyProductInputEnvelope
    set?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    disconnect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    delete?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    connect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    update?: UsersProductsUpdateWithWhereUniqueWithoutProductInput | UsersProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UsersProductsUpdateManyWithWhereWithoutProductInput | UsersProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UsersProductsScalarWhereInput | UsersProductsScalarWhereInput[]
  }

  export type BookstoresUpdateManyWithoutProductsNestedInput = {
    create?: XOR<BookstoresCreateWithoutProductsInput, BookstoresUncheckedCreateWithoutProductsInput> | BookstoresCreateWithoutProductsInput[] | BookstoresUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: BookstoresCreateOrConnectWithoutProductsInput | BookstoresCreateOrConnectWithoutProductsInput[]
    upsert?: BookstoresUpsertWithWhereUniqueWithoutProductsInput | BookstoresUpsertWithWhereUniqueWithoutProductsInput[]
    set?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    disconnect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    delete?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    connect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    update?: BookstoresUpdateWithWhereUniqueWithoutProductsInput | BookstoresUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: BookstoresUpdateManyWithWhereWithoutProductsInput | BookstoresUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: BookstoresScalarWhereInput | BookstoresScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput> | OrdersCreateWithoutProductInput[] | OrdersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutProductInput | OrdersCreateOrConnectWithoutProductInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutProductInput | OrdersUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrdersCreateManyProductInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutProductInput | OrdersUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutProductInput | OrdersUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ReviewsUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutProductInput | ReviewsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutProductInput | ReviewsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutProductInput | ReviewsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type UsersProductsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UsersProductsCreateWithoutProductInput, UsersProductsUncheckedCreateWithoutProductInput> | UsersProductsCreateWithoutProductInput[] | UsersProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UsersProductsCreateOrConnectWithoutProductInput | UsersProductsCreateOrConnectWithoutProductInput[]
    upsert?: UsersProductsUpsertWithWhereUniqueWithoutProductInput | UsersProductsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UsersProductsCreateManyProductInputEnvelope
    set?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    disconnect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    delete?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    connect?: UsersProductsWhereUniqueInput | UsersProductsWhereUniqueInput[]
    update?: UsersProductsUpdateWithWhereUniqueWithoutProductInput | UsersProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UsersProductsUpdateManyWithWhereWithoutProductInput | UsersProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UsersProductsScalarWhereInput | UsersProductsScalarWhereInput[]
  }

  export type BookstoresUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<BookstoresCreateWithoutProductsInput, BookstoresUncheckedCreateWithoutProductsInput> | BookstoresCreateWithoutProductsInput[] | BookstoresUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: BookstoresCreateOrConnectWithoutProductsInput | BookstoresCreateOrConnectWithoutProductsInput[]
    upsert?: BookstoresUpsertWithWhereUniqueWithoutProductsInput | BookstoresUpsertWithWhereUniqueWithoutProductsInput[]
    set?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    disconnect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    delete?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    connect?: BookstoresWhereUniqueInput | BookstoresWhereUniqueInput[]
    update?: BookstoresUpdateWithWhereUniqueWithoutProductsInput | BookstoresUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: BookstoresUpdateManyWithWhereWithoutProductsInput | BookstoresUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: BookstoresScalarWhereInput | BookstoresScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput> | OrdersCreateWithoutProductInput[] | OrdersUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutProductInput | OrdersCreateOrConnectWithoutProductInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutProductInput | OrdersUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrdersCreateManyProductInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutProductInput | OrdersUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutProductInput | OrdersUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput> | ReviewsCreateWithoutProductInput[] | ReviewsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutProductInput | ReviewsCreateOrConnectWithoutProductInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutProductInput | ReviewsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewsCreateManyProductInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutProductInput | ReviewsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutProductInput | ReviewsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutBookstoresInput = {
    create?: XOR<UsersCreateWithoutBookstoresInput, UsersUncheckedCreateWithoutBookstoresInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookstoresInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductsCreateNestedManyWithoutBookstoresInput = {
    create?: XOR<ProductsCreateWithoutBookstoresInput, ProductsUncheckedCreateWithoutBookstoresInput> | ProductsCreateWithoutBookstoresInput[] | ProductsUncheckedCreateWithoutBookstoresInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBookstoresInput | ProductsCreateOrConnectWithoutBookstoresInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutBookstoresInput = {
    create?: XOR<ProductsCreateWithoutBookstoresInput, ProductsUncheckedCreateWithoutBookstoresInput> | ProductsCreateWithoutBookstoresInput[] | ProductsUncheckedCreateWithoutBookstoresInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBookstoresInput | ProductsCreateOrConnectWithoutBookstoresInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutBookstoresNestedInput = {
    create?: XOR<UsersCreateWithoutBookstoresInput, UsersUncheckedCreateWithoutBookstoresInput>
    connectOrCreate?: UsersCreateOrConnectWithoutBookstoresInput
    upsert?: UsersUpsertWithoutBookstoresInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutBookstoresInput, UsersUpdateWithoutBookstoresInput>, UsersUncheckedUpdateWithoutBookstoresInput>
  }

  export type ProductsUpdateManyWithoutBookstoresNestedInput = {
    create?: XOR<ProductsCreateWithoutBookstoresInput, ProductsUncheckedCreateWithoutBookstoresInput> | ProductsCreateWithoutBookstoresInput[] | ProductsUncheckedCreateWithoutBookstoresInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBookstoresInput | ProductsCreateOrConnectWithoutBookstoresInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutBookstoresInput | ProductsUpsertWithWhereUniqueWithoutBookstoresInput[]
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutBookstoresInput | ProductsUpdateWithWhereUniqueWithoutBookstoresInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutBookstoresInput | ProductsUpdateManyWithWhereWithoutBookstoresInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutBookstoresNestedInput = {
    create?: XOR<ProductsCreateWithoutBookstoresInput, ProductsUncheckedCreateWithoutBookstoresInput> | ProductsCreateWithoutBookstoresInput[] | ProductsUncheckedCreateWithoutBookstoresInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBookstoresInput | ProductsCreateOrConnectWithoutBookstoresInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutBookstoresInput | ProductsUpsertWithWhereUniqueWithoutBookstoresInput[]
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutBookstoresInput | ProductsUpdateWithWhereUniqueWithoutBookstoresInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutBookstoresInput | ProductsUpdateManyWithWhereWithoutBookstoresInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UsersCreateWithoutRefreshTokensInput, UsersUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRefreshTokensInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UsersCreateWithoutRefreshTokensInput, UsersUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRefreshTokensInput
    upsert?: UsersUpsertWithoutRefreshTokensInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRefreshTokensInput, UsersUpdateWithoutRefreshTokensInput>, UsersUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UsersCreateNestedOneWithoutUserProductsInput = {
    create?: XOR<UsersCreateWithoutUserProductsInput, UsersUncheckedCreateWithoutUserProductsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserProductsInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutUserProductsInput = {
    create?: XOR<ProductsCreateWithoutUserProductsInput, ProductsUncheckedCreateWithoutUserProductsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutUserProductsInput
    connect?: ProductsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserProductsNestedInput = {
    create?: XOR<UsersCreateWithoutUserProductsInput, UsersUncheckedCreateWithoutUserProductsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserProductsInput
    upsert?: UsersUpsertWithoutUserProductsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserProductsInput, UsersUpdateWithoutUserProductsInput>, UsersUncheckedUpdateWithoutUserProductsInput>
  }

  export type ProductsUpdateOneRequiredWithoutUserProductsNestedInput = {
    create?: XOR<ProductsCreateWithoutUserProductsInput, ProductsUncheckedCreateWithoutUserProductsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutUserProductsInput
    upsert?: ProductsUpsertWithoutUserProductsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutUserProductsInput, ProductsUpdateWithoutUserProductsInput>, ProductsUncheckedUpdateWithoutUserProductsInput>
  }

  export type UsersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductsCreateWithoutOrdersInput, ProductsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrdersInput
    connect?: ProductsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOrdersInput
    upsert?: UsersUpsertWithoutOrdersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOrdersInput, UsersUpdateWithoutOrdersInput>, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductsCreateWithoutOrdersInput, ProductsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutOrdersInput
    upsert?: ProductsUpsertWithoutOrdersInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutOrdersInput, ProductsUpdateWithoutOrdersInput>, ProductsUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersCreateNestedOneWithoutUserReviewsInput = {
    create?: XOR<UsersCreateWithoutUserReviewsInput, UsersUncheckedCreateWithoutUserReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserReviewsInput
    connect?: UsersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutProductReviewsInput = {
    create?: XOR<ProductsCreateWithoutProductReviewsInput, ProductsUncheckedCreateWithoutProductReviewsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductReviewsInput
    connect?: ProductsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUserReviewsNestedInput = {
    create?: XOR<UsersCreateWithoutUserReviewsInput, UsersUncheckedCreateWithoutUserReviewsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserReviewsInput
    upsert?: UsersUpsertWithoutUserReviewsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserReviewsInput, UsersUpdateWithoutUserReviewsInput>, UsersUncheckedUpdateWithoutUserReviewsInput>
  }

  export type ProductsUpdateOneRequiredWithoutProductReviewsNestedInput = {
    create?: XOR<ProductsCreateWithoutProductReviewsInput, ProductsUncheckedCreateWithoutProductReviewsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductReviewsInput
    upsert?: ProductsUpsertWithoutProductReviewsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutProductReviewsInput, ProductsUpdateWithoutProductReviewsInput>, ProductsUncheckedUpdateWithoutProductReviewsInput>
  }

  export type UsersCreateNestedOneWithoutFollowersInput = {
    create?: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowersInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutFollowingInput = {
    create?: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowingInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowersInput
    upsert?: UsersUpsertWithoutFollowersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFollowersInput, UsersUpdateWithoutFollowersInput>, UsersUncheckedUpdateWithoutFollowersInput>
  }

  export type UsersUpdateOneRequiredWithoutFollowingNestedInput = {
    create?: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
    connectOrCreate?: UsersCreateOrConnectWithoutFollowingInput
    upsert?: UsersUpsertWithoutFollowingInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutFollowingInput, UsersUpdateWithoutFollowingInput>, UsersUncheckedUpdateWithoutFollowingInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProductsCreateWithoutUserInput = {
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userProducts?: UsersProductsCreateNestedManyWithoutProductInput
    bookstores?: BookstoresCreateNestedManyWithoutProductsInput
    Orders?: OrdersCreateNestedManyWithoutProductInput
    productReviews?: ReviewsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutUserInput = {
    productId?: number
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutProductInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutProductsInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutProductInput
    productReviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutUserInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutUserInput, ProductsUncheckedCreateWithoutUserInput>
  }

  export type ProductsCreateManyUserInputEnvelope = {
    data: ProductsCreateManyUserInput | ProductsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    token: string
    expirationDate: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expirationDate: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UsersProductsCreateWithoutUserInput = {
    product: ProductsCreateNestedOneWithoutUserProductsInput
  }

  export type UsersProductsUncheckedCreateWithoutUserInput = {
    productId: number
  }

  export type UsersProductsCreateOrConnectWithoutUserInput = {
    where: UsersProductsWhereUniqueInput
    create: XOR<UsersProductsCreateWithoutUserInput, UsersProductsUncheckedCreateWithoutUserInput>
  }

  export type UsersProductsCreateManyUserInputEnvelope = {
    data: UsersProductsCreateManyUserInput | UsersProductsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutFollowerInput = {
    following: UsersCreateNestedOneWithoutFollowingInput
  }

  export type FollowUncheckedCreateWithoutFollowerInput = {
    followingId: number
  }

  export type FollowCreateOrConnectWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowCreateManyFollowerInputEnvelope = {
    data: FollowCreateManyFollowerInput | FollowCreateManyFollowerInput[]
    skipDuplicates?: boolean
  }

  export type FollowCreateWithoutFollowingInput = {
    follower: UsersCreateNestedOneWithoutFollowersInput
  }

  export type FollowUncheckedCreateWithoutFollowingInput = {
    followerId: number
  }

  export type FollowCreateOrConnectWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    create: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput>
  }

  export type FollowCreateManyFollowingInputEnvelope = {
    data: FollowCreateManyFollowingInput | FollowCreateManyFollowingInput[]
    skipDuplicates?: boolean
  }

  export type BookstoresCreateWithoutUserInput = {
    imageUrl: string
    name: string
    price: number
    address?: string
    description: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductsCreateNestedManyWithoutBookstoresInput
  }

  export type BookstoresUncheckedCreateWithoutUserInput = {
    bookstoreId?: number
    imageUrl: string
    name: string
    price: number
    address?: string
    description: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductsUncheckedCreateNestedManyWithoutBookstoresInput
  }

  export type BookstoresCreateOrConnectWithoutUserInput = {
    where: BookstoresWhereUniqueInput
    create: XOR<BookstoresCreateWithoutUserInput, BookstoresUncheckedCreateWithoutUserInput>
  }

  export type BookstoresCreateManyUserInputEnvelope = {
    data: BookstoresCreateManyUserInput | BookstoresCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutUserInput = {
    address?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutUserInput = {
    orderId?: number
    productId: number
    address?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateOrConnectWithoutUserInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersCreateManyUserInputEnvelope = {
    data: OrdersCreateManyUserInput | OrdersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutUserInput = {
    reviewText: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutProductReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutUserInput = {
    reviewId?: number
    productId: number
    reviewText: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsCreateManyUserInputEnvelope = {
    data: ReviewsCreateManyUserInput | ReviewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutUserInput, ProductsUncheckedUpdateWithoutUserInput>
    create: XOR<ProductsCreateWithoutUserInput, ProductsUncheckedCreateWithoutUserInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutUserInput, ProductsUncheckedUpdateWithoutUserInput>
  }

  export type ProductsUpdateManyWithWhereWithoutUserInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    productId?: IntFilter<"Products"> | number
    name?: StringFilter<"Products"> | string
    author?: StringNullableFilter<"Products"> | string | null
    imageUrl?: StringNullableFilter<"Products"> | string | null
    price?: IntFilter<"Products"> | number
    description?: StringFilter<"Products"> | string
    status?: StringFilter<"Products"> | string
    usertype?: StringFilter<"Products"> | string
    createdAt?: DateTimeFilter<"Products"> | Date | string
    updatedAt?: DateTimeFilter<"Products"> | Date | string
    userId?: IntFilter<"Products"> | number
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    expirationDate?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: IntFilter<"RefreshToken"> | number
  }

  export type UsersProductsUpsertWithWhereUniqueWithoutUserInput = {
    where: UsersProductsWhereUniqueInput
    update: XOR<UsersProductsUpdateWithoutUserInput, UsersProductsUncheckedUpdateWithoutUserInput>
    create: XOR<UsersProductsCreateWithoutUserInput, UsersProductsUncheckedCreateWithoutUserInput>
  }

  export type UsersProductsUpdateWithWhereUniqueWithoutUserInput = {
    where: UsersProductsWhereUniqueInput
    data: XOR<UsersProductsUpdateWithoutUserInput, UsersProductsUncheckedUpdateWithoutUserInput>
  }

  export type UsersProductsUpdateManyWithWhereWithoutUserInput = {
    where: UsersProductsScalarWhereInput
    data: XOR<UsersProductsUpdateManyMutationInput, UsersProductsUncheckedUpdateManyWithoutUserInput>
  }

  export type UsersProductsScalarWhereInput = {
    AND?: UsersProductsScalarWhereInput | UsersProductsScalarWhereInput[]
    OR?: UsersProductsScalarWhereInput[]
    NOT?: UsersProductsScalarWhereInput | UsersProductsScalarWhereInput[]
    userId?: IntFilter<"UsersProducts"> | number
    productId?: IntFilter<"UsersProducts"> | number
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
    create: XOR<FollowCreateWithoutFollowerInput, FollowUncheckedCreateWithoutFollowerInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowerInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowerInput, FollowUncheckedUpdateWithoutFollowerInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowerInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowerInput>
  }

  export type FollowScalarWhereInput = {
    AND?: FollowScalarWhereInput | FollowScalarWhereInput[]
    OR?: FollowScalarWhereInput[]
    NOT?: FollowScalarWhereInput | FollowScalarWhereInput[]
    followerId?: IntFilter<"Follow"> | number
    followingId?: IntFilter<"Follow"> | number
  }

  export type FollowUpsertWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    update: XOR<FollowUpdateWithoutFollowingInput, FollowUncheckedUpdateWithoutFollowingInput>
    create: XOR<FollowCreateWithoutFollowingInput, FollowUncheckedCreateWithoutFollowingInput>
  }

  export type FollowUpdateWithWhereUniqueWithoutFollowingInput = {
    where: FollowWhereUniqueInput
    data: XOR<FollowUpdateWithoutFollowingInput, FollowUncheckedUpdateWithoutFollowingInput>
  }

  export type FollowUpdateManyWithWhereWithoutFollowingInput = {
    where: FollowScalarWhereInput
    data: XOR<FollowUpdateManyMutationInput, FollowUncheckedUpdateManyWithoutFollowingInput>
  }

  export type BookstoresUpsertWithWhereUniqueWithoutUserInput = {
    where: BookstoresWhereUniqueInput
    update: XOR<BookstoresUpdateWithoutUserInput, BookstoresUncheckedUpdateWithoutUserInput>
    create: XOR<BookstoresCreateWithoutUserInput, BookstoresUncheckedCreateWithoutUserInput>
  }

  export type BookstoresUpdateWithWhereUniqueWithoutUserInput = {
    where: BookstoresWhereUniqueInput
    data: XOR<BookstoresUpdateWithoutUserInput, BookstoresUncheckedUpdateWithoutUserInput>
  }

  export type BookstoresUpdateManyWithWhereWithoutUserInput = {
    where: BookstoresScalarWhereInput
    data: XOR<BookstoresUpdateManyMutationInput, BookstoresUncheckedUpdateManyWithoutUserInput>
  }

  export type BookstoresScalarWhereInput = {
    AND?: BookstoresScalarWhereInput | BookstoresScalarWhereInput[]
    OR?: BookstoresScalarWhereInput[]
    NOT?: BookstoresScalarWhereInput | BookstoresScalarWhereInput[]
    bookstoreId?: IntFilter<"Bookstores"> | number
    imageUrl?: StringFilter<"Bookstores"> | string
    name?: StringFilter<"Bookstores"> | string
    price?: IntFilter<"Bookstores"> | number
    address?: StringFilter<"Bookstores"> | string
    description?: StringFilter<"Bookstores"> | string
    status?: StringFilter<"Bookstores"> | string
    createdAt?: DateTimeFilter<"Bookstores"> | Date | string
    updatedAt?: DateTimeFilter<"Bookstores"> | Date | string
    userId?: IntFilter<"Bookstores"> | number
  }

  export type OrdersUpsertWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
    create: XOR<OrdersCreateWithoutUserInput, OrdersUncheckedCreateWithoutUserInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutUserInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutUserInput, OrdersUncheckedUpdateWithoutUserInput>
  }

  export type OrdersUpdateManyWithWhereWithoutUserInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutUserInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    orderId?: IntFilter<"Orders"> | number
    userId?: IntFilter<"Orders"> | number
    productId?: IntFilter<"Orders"> | number
    address?: StringFilter<"Orders"> | string
    status?: StringFilter<"Orders"> | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
  }

  export type ReviewsUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewsCreateWithoutUserInput, ReviewsUncheckedCreateWithoutUserInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutUserInput, ReviewsUncheckedUpdateWithoutUserInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutUserInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    reviewId?: IntFilter<"Reviews"> | number
    userId?: IntFilter<"Reviews"> | number
    productId?: IntFilter<"Reviews"> | number
    reviewText?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    createdAt?: DateTimeFilter<"Reviews"> | Date | string
    updatedAt?: DateTimeFilter<"Reviews"> | Date | string
  }

  export type UsersCreateWithoutProductsInput = {
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    userReviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutProductsInput = {
    userId?: number
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    userReviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutProductsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutProductsInput, UsersUncheckedCreateWithoutProductsInput>
  }

  export type UsersProductsCreateWithoutProductInput = {
    user: UsersCreateNestedOneWithoutUserProductsInput
  }

  export type UsersProductsUncheckedCreateWithoutProductInput = {
    userId: number
  }

  export type UsersProductsCreateOrConnectWithoutProductInput = {
    where: UsersProductsWhereUniqueInput
    create: XOR<UsersProductsCreateWithoutProductInput, UsersProductsUncheckedCreateWithoutProductInput>
  }

  export type UsersProductsCreateManyProductInputEnvelope = {
    data: UsersProductsCreateManyProductInput | UsersProductsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BookstoresCreateWithoutProductsInput = {
    imageUrl: string
    name: string
    price: number
    address?: string
    description: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutBookstoresInput
  }

  export type BookstoresUncheckedCreateWithoutProductsInput = {
    bookstoreId?: number
    imageUrl: string
    name: string
    price: number
    address?: string
    description: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type BookstoresCreateOrConnectWithoutProductsInput = {
    where: BookstoresWhereUniqueInput
    create: XOR<BookstoresCreateWithoutProductsInput, BookstoresUncheckedCreateWithoutProductsInput>
  }

  export type OrdersCreateWithoutProductInput = {
    address?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutProductInput = {
    orderId?: number
    userId: number
    address?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateOrConnectWithoutProductInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput>
  }

  export type OrdersCreateManyProductInputEnvelope = {
    data: OrdersCreateManyProductInput | OrdersCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ReviewsCreateWithoutProductInput = {
    reviewText: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutUserReviewsInput
  }

  export type ReviewsUncheckedCreateWithoutProductInput = {
    reviewId?: number
    userId: number
    reviewText: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateOrConnectWithoutProductInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput>
  }

  export type ReviewsCreateManyProductInputEnvelope = {
    data: ReviewsCreateManyProductInput | ReviewsCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutProductsInput = {
    update: XOR<UsersUpdateWithoutProductsInput, UsersUncheckedUpdateWithoutProductsInput>
    create: XOR<UsersCreateWithoutProductsInput, UsersUncheckedCreateWithoutProductsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutProductsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutProductsInput, UsersUncheckedUpdateWithoutProductsInput>
  }

  export type UsersUpdateWithoutProductsInput = {
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutProductsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersProductsUpsertWithWhereUniqueWithoutProductInput = {
    where: UsersProductsWhereUniqueInput
    update: XOR<UsersProductsUpdateWithoutProductInput, UsersProductsUncheckedUpdateWithoutProductInput>
    create: XOR<UsersProductsCreateWithoutProductInput, UsersProductsUncheckedCreateWithoutProductInput>
  }

  export type UsersProductsUpdateWithWhereUniqueWithoutProductInput = {
    where: UsersProductsWhereUniqueInput
    data: XOR<UsersProductsUpdateWithoutProductInput, UsersProductsUncheckedUpdateWithoutProductInput>
  }

  export type UsersProductsUpdateManyWithWhereWithoutProductInput = {
    where: UsersProductsScalarWhereInput
    data: XOR<UsersProductsUpdateManyMutationInput, UsersProductsUncheckedUpdateManyWithoutProductInput>
  }

  export type BookstoresUpsertWithWhereUniqueWithoutProductsInput = {
    where: BookstoresWhereUniqueInput
    update: XOR<BookstoresUpdateWithoutProductsInput, BookstoresUncheckedUpdateWithoutProductsInput>
    create: XOR<BookstoresCreateWithoutProductsInput, BookstoresUncheckedCreateWithoutProductsInput>
  }

  export type BookstoresUpdateWithWhereUniqueWithoutProductsInput = {
    where: BookstoresWhereUniqueInput
    data: XOR<BookstoresUpdateWithoutProductsInput, BookstoresUncheckedUpdateWithoutProductsInput>
  }

  export type BookstoresUpdateManyWithWhereWithoutProductsInput = {
    where: BookstoresScalarWhereInput
    data: XOR<BookstoresUpdateManyMutationInput, BookstoresUncheckedUpdateManyWithoutProductsInput>
  }

  export type OrdersUpsertWithWhereUniqueWithoutProductInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutProductInput, OrdersUncheckedUpdateWithoutProductInput>
    create: XOR<OrdersCreateWithoutProductInput, OrdersUncheckedCreateWithoutProductInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutProductInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutProductInput, OrdersUncheckedUpdateWithoutProductInput>
  }

  export type OrdersUpdateManyWithWhereWithoutProductInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutProductInput>
  }

  export type ReviewsUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutProductInput, ReviewsUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewsCreateWithoutProductInput, ReviewsUncheckedCreateWithoutProductInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutProductInput, ReviewsUncheckedUpdateWithoutProductInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutProductInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutProductInput>
  }

  export type UsersCreateWithoutBookstoresInput = {
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    userReviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutBookstoresInput = {
    userId?: number
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    userReviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutBookstoresInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutBookstoresInput, UsersUncheckedCreateWithoutBookstoresInput>
  }

  export type ProductsCreateWithoutBookstoresInput = {
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutProductsInput
    userProducts?: UsersProductsCreateNestedManyWithoutProductInput
    Orders?: OrdersCreateNestedManyWithoutProductInput
    productReviews?: ReviewsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutBookstoresInput = {
    productId?: number
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutProductInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutProductInput
    productReviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutBookstoresInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutBookstoresInput, ProductsUncheckedCreateWithoutBookstoresInput>
  }

  export type UsersUpsertWithoutBookstoresInput = {
    update: XOR<UsersUpdateWithoutBookstoresInput, UsersUncheckedUpdateWithoutBookstoresInput>
    create: XOR<UsersCreateWithoutBookstoresInput, UsersUncheckedCreateWithoutBookstoresInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutBookstoresInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutBookstoresInput, UsersUncheckedUpdateWithoutBookstoresInput>
  }

  export type UsersUpdateWithoutBookstoresInput = {
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutBookstoresInput = {
    userId?: IntFieldUpdateOperationsInput | number
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductsUpsertWithWhereUniqueWithoutBookstoresInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutBookstoresInput, ProductsUncheckedUpdateWithoutBookstoresInput>
    create: XOR<ProductsCreateWithoutBookstoresInput, ProductsUncheckedCreateWithoutBookstoresInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutBookstoresInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutBookstoresInput, ProductsUncheckedUpdateWithoutBookstoresInput>
  }

  export type ProductsUpdateManyWithWhereWithoutBookstoresInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutBookstoresInput>
  }

  export type UsersCreateWithoutRefreshTokensInput = {
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    userReviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRefreshTokensInput = {
    userId?: number
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsUncheckedCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    userReviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRefreshTokensInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRefreshTokensInput, UsersUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UsersUpsertWithoutRefreshTokensInput = {
    update: XOR<UsersUpdateWithoutRefreshTokensInput, UsersUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UsersCreateWithoutRefreshTokensInput, UsersUncheckedCreateWithoutRefreshTokensInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRefreshTokensInput, UsersUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UsersUpdateWithoutRefreshTokensInput = {
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRefreshTokensInput = {
    userId?: IntFieldUpdateOperationsInput | number
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUncheckedUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateWithoutUserProductsInput = {
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    userReviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUserProductsInput = {
    userId?: number
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    userReviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserProductsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserProductsInput, UsersUncheckedCreateWithoutUserProductsInput>
  }

  export type ProductsCreateWithoutUserProductsInput = {
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutProductsInput
    bookstores?: BookstoresCreateNestedManyWithoutProductsInput
    Orders?: OrdersCreateNestedManyWithoutProductInput
    productReviews?: ReviewsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutUserProductsInput = {
    productId?: number
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutProductsInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutProductInput
    productReviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutUserProductsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutUserProductsInput, ProductsUncheckedCreateWithoutUserProductsInput>
  }

  export type UsersUpsertWithoutUserProductsInput = {
    update: XOR<UsersUpdateWithoutUserProductsInput, UsersUncheckedUpdateWithoutUserProductsInput>
    create: XOR<UsersCreateWithoutUserProductsInput, UsersUncheckedCreateWithoutUserProductsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserProductsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserProductsInput, UsersUncheckedUpdateWithoutUserProductsInput>
  }

  export type UsersUpdateWithoutUserProductsInput = {
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserProductsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductsUpsertWithoutUserProductsInput = {
    update: XOR<ProductsUpdateWithoutUserProductsInput, ProductsUncheckedUpdateWithoutUserProductsInput>
    create: XOR<ProductsCreateWithoutUserProductsInput, ProductsUncheckedCreateWithoutUserProductsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutUserProductsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutUserProductsInput, ProductsUncheckedUpdateWithoutUserProductsInput>
  }

  export type ProductsUpdateWithoutUserProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProductsNestedInput
    bookstores?: BookstoresUpdateManyWithoutProductsNestedInput
    Orders?: OrdersUpdateManyWithoutProductNestedInput
    productReviews?: ReviewsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutUserProductsInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    bookstores?: BookstoresUncheckedUpdateManyWithoutProductsNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutProductNestedInput
    productReviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UsersCreateWithoutOrdersInput = {
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresCreateNestedManyWithoutUserInput
    userReviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutOrdersInput = {
    userId?: number
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutUserInput
    userReviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutOrdersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
  }

  export type ProductsCreateWithoutOrdersInput = {
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutProductsInput
    userProducts?: UsersProductsCreateNestedManyWithoutProductInput
    bookstores?: BookstoresCreateNestedManyWithoutProductsInput
    productReviews?: ReviewsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutOrdersInput = {
    productId?: number
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutProductInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutProductsInput
    productReviews?: ReviewsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutOrdersInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutOrdersInput, ProductsUncheckedCreateWithoutOrdersInput>
  }

  export type UsersUpsertWithoutOrdersInput = {
    update: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
    create: XOR<UsersCreateWithoutOrdersInput, UsersUncheckedCreateWithoutOrdersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOrdersInput, UsersUncheckedUpdateWithoutOrdersInput>
  }

  export type UsersUpdateWithoutOrdersInput = {
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutOrdersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductsUpsertWithoutOrdersInput = {
    update: XOR<ProductsUpdateWithoutOrdersInput, ProductsUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductsCreateWithoutOrdersInput, ProductsUncheckedCreateWithoutOrdersInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutOrdersInput, ProductsUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductsUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProductsNestedInput
    userProducts?: UsersProductsUpdateManyWithoutProductNestedInput
    bookstores?: BookstoresUpdateManyWithoutProductsNestedInput
    productReviews?: ReviewsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutOrdersInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    userProducts?: UsersProductsUncheckedUpdateManyWithoutProductNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutProductsNestedInput
    productReviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UsersCreateWithoutUserReviewsInput = {
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutUserReviewsInput = {
    userId?: number
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutUserReviewsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserReviewsInput, UsersUncheckedCreateWithoutUserReviewsInput>
  }

  export type ProductsCreateWithoutProductReviewsInput = {
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutProductsInput
    userProducts?: UsersProductsCreateNestedManyWithoutProductInput
    bookstores?: BookstoresCreateNestedManyWithoutProductsInput
    Orders?: OrdersCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutProductReviewsInput = {
    productId?: number
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutProductInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutProductsInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutProductReviewsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProductReviewsInput, ProductsUncheckedCreateWithoutProductReviewsInput>
  }

  export type UsersUpsertWithoutUserReviewsInput = {
    update: XOR<UsersUpdateWithoutUserReviewsInput, UsersUncheckedUpdateWithoutUserReviewsInput>
    create: XOR<UsersCreateWithoutUserReviewsInput, UsersUncheckedCreateWithoutUserReviewsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserReviewsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserReviewsInput, UsersUncheckedUpdateWithoutUserReviewsInput>
  }

  export type UsersUpdateWithoutUserReviewsInput = {
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserReviewsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductsUpsertWithoutProductReviewsInput = {
    update: XOR<ProductsUpdateWithoutProductReviewsInput, ProductsUncheckedUpdateWithoutProductReviewsInput>
    create: XOR<ProductsCreateWithoutProductReviewsInput, ProductsUncheckedCreateWithoutProductReviewsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutProductReviewsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutProductReviewsInput, ProductsUncheckedUpdateWithoutProductReviewsInput>
  }

  export type ProductsUpdateWithoutProductReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProductsNestedInput
    userProducts?: UsersProductsUpdateManyWithoutProductNestedInput
    bookstores?: BookstoresUpdateManyWithoutProductsNestedInput
    Orders?: OrdersUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProductReviewsInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    userProducts?: UsersProductsUncheckedUpdateManyWithoutProductNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutProductsNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UsersCreateWithoutFollowersInput = {
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsCreateNestedManyWithoutUserInput
    following?: FollowCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    userReviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutFollowersInput = {
    userId?: number
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutUserInput
    following?: FollowUncheckedCreateNestedManyWithoutFollowingInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    userReviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutFollowersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput>
  }

  export type UsersCreateWithoutFollowingInput = {
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsCreateNestedManyWithoutUserInput
    followers?: FollowCreateNestedManyWithoutFollowerInput
    bookstores?: BookstoresCreateNestedManyWithoutUserInput
    Orders?: OrdersCreateNestedManyWithoutUserInput
    userReviews?: ReviewsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutFollowingInput = {
    userId?: number
    usertype?: string
    username: string
    kakaoUserId?: number | null
    email: string
    password: string
    isAdmin: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    points?: number | null
    isVerified?: boolean
    products?: ProductsUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    userProducts?: UsersProductsUncheckedCreateNestedManyWithoutUserInput
    followers?: FollowUncheckedCreateNestedManyWithoutFollowerInput
    bookstores?: BookstoresUncheckedCreateNestedManyWithoutUserInput
    Orders?: OrdersUncheckedCreateNestedManyWithoutUserInput
    userReviews?: ReviewsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutFollowingInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
  }

  export type UsersUpsertWithoutFollowersInput = {
    update: XOR<UsersUpdateWithoutFollowersInput, UsersUncheckedUpdateWithoutFollowersInput>
    create: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFollowersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFollowersInput, UsersUncheckedUpdateWithoutFollowersInput>
  }

  export type UsersUpdateWithoutFollowersInput = {
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUpdateManyWithoutUserNestedInput
    following?: FollowUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutFollowersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUncheckedUpdateManyWithoutUserNestedInput
    following?: FollowUncheckedUpdateManyWithoutFollowingNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersUpsertWithoutFollowingInput = {
    update: XOR<UsersUpdateWithoutFollowingInput, UsersUncheckedUpdateWithoutFollowingInput>
    create: XOR<UsersCreateWithoutFollowingInput, UsersUncheckedCreateWithoutFollowingInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutFollowingInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutFollowingInput, UsersUncheckedUpdateWithoutFollowingInput>
  }

  export type UsersUpdateWithoutFollowingInput = {
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUpdateManyWithoutUserNestedInput
    followers?: FollowUpdateManyWithoutFollowerNestedInput
    bookstores?: BookstoresUpdateManyWithoutUserNestedInput
    Orders?: OrdersUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutFollowingInput = {
    userId?: IntFieldUpdateOperationsInput | number
    usertype?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    kakaoUserId?: NullableIntFieldUpdateOperationsInput | number | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    products?: ProductsUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    userProducts?: UsersProductsUncheckedUpdateManyWithoutUserNestedInput
    followers?: FollowUncheckedUpdateManyWithoutFollowerNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutUserNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutUserNestedInput
    userReviews?: ReviewsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductsCreateManyUserInput = {
    productId?: number
    name: string
    author?: string | null
    imageUrl?: string | null
    price: number
    description: string
    status?: string
    usertype?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: number
    token: string
    expirationDate: Date | string
  }

  export type UsersProductsCreateManyUserInput = {
    productId: number
  }

  export type FollowCreateManyFollowerInput = {
    followingId: number
  }

  export type FollowCreateManyFollowingInput = {
    followerId: number
  }

  export type BookstoresCreateManyUserInput = {
    bookstoreId?: number
    imageUrl: string
    name: string
    price: number
    address?: string
    description: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateManyUserInput = {
    orderId?: number
    productId: number
    address?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateManyUserInput = {
    reviewId?: number
    productId: number
    reviewText: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProducts?: UsersProductsUpdateManyWithoutProductNestedInput
    bookstores?: BookstoresUpdateManyWithoutProductsNestedInput
    Orders?: OrdersUpdateManyWithoutProductNestedInput
    productReviews?: ReviewsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userProducts?: UsersProductsUncheckedUpdateManyWithoutProductNestedInput
    bookstores?: BookstoresUncheckedUpdateManyWithoutProductsNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutProductNestedInput
    productReviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersProductsUpdateWithoutUserInput = {
    product?: ProductsUpdateOneRequiredWithoutUserProductsNestedInput
  }

  export type UsersProductsUncheckedUpdateWithoutUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersProductsUncheckedUpdateManyWithoutUserInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowUpdateWithoutFollowerInput = {
    following?: UsersUpdateOneRequiredWithoutFollowingNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowerInput = {
    followingId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowUncheckedUpdateManyWithoutFollowerInput = {
    followingId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowUpdateWithoutFollowingInput = {
    follower?: UsersUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type FollowUncheckedUpdateWithoutFollowingInput = {
    followerId?: IntFieldUpdateOperationsInput | number
  }

  export type FollowUncheckedUpdateManyWithoutFollowingInput = {
    followerId?: IntFieldUpdateOperationsInput | number
  }

  export type BookstoresUpdateWithoutUserInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUpdateManyWithoutBookstoresNestedInput
  }

  export type BookstoresUncheckedUpdateWithoutUserInput = {
    bookstoreId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductsUncheckedUpdateManyWithoutBookstoresNestedInput
  }

  export type BookstoresUncheckedUpdateManyWithoutUserInput = {
    bookstoreId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutUserInput = {
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutUserInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyWithoutUserInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutUserInput = {
    reviewText?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutProductReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutUserInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    reviewText?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutUserInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    reviewText?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersProductsCreateManyProductInput = {
    userId: number
  }

  export type OrdersCreateManyProductInput = {
    orderId?: number
    userId: number
    address?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewsCreateManyProductInput = {
    reviewId?: number
    userId: number
    reviewText: string
    rating: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersProductsUpdateWithoutProductInput = {
    user?: UsersUpdateOneRequiredWithoutUserProductsNestedInput
  }

  export type UsersProductsUncheckedUpdateWithoutProductInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UsersProductsUncheckedUpdateManyWithoutProductInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BookstoresUpdateWithoutProductsInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutBookstoresNestedInput
  }

  export type BookstoresUncheckedUpdateWithoutProductsInput = {
    bookstoreId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BookstoresUncheckedUpdateManyWithoutProductsInput = {
    bookstoreId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdersUpdateWithoutProductInput = {
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutProductInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyWithoutProductInput = {
    orderId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUpdateWithoutProductInput = {
    reviewText?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutUserReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateWithoutProductInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reviewText?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewsUncheckedUpdateManyWithoutProductInput = {
    reviewId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reviewText?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUpdateWithoutBookstoresInput = {
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutProductsNestedInput
    userProducts?: UsersProductsUpdateManyWithoutProductNestedInput
    Orders?: OrdersUpdateManyWithoutProductNestedInput
    productReviews?: ReviewsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutBookstoresInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    userProducts?: UsersProductsUncheckedUpdateManyWithoutProductNestedInput
    Orders?: OrdersUncheckedUpdateManyWithoutProductNestedInput
    productReviews?: ReviewsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutBookstoresInput = {
    productId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    author?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    usertype?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductsCountOutputTypeDefaultArgs instead
     */
    export type ProductsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookstoresCountOutputTypeDefaultArgs instead
     */
    export type BookstoresCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookstoresCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductsDefaultArgs instead
     */
    export type ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookstoresDefaultArgs instead
     */
    export type BookstoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookstoresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RefreshTokenDefaultArgs instead
     */
    export type RefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RefreshTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersProductsDefaultArgs instead
     */
    export type UsersProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersProductsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrdersDefaultArgs instead
     */
    export type OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrdersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewsDefaultArgs instead
     */
    export type ReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowDefaultArgs instead
     */
    export type FollowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FollowDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerifyDefaultArgs instead
     */
    export type VerifyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerifyDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}