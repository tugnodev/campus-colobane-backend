
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ArticleRates
 * 
 */
export type ArticleRates = $Result.DefaultSelection<Prisma.$ArticleRatesPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Articles
 * 
 */
export type Articles = $Result.DefaultSelection<Prisma.$ArticlesPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>
/**
 * Model Numbers
 * 
 */
export type Numbers = $Result.DefaultSelection<Prisma.$NumbersPayload>
/**
 * Model Carts
 * 
 */
export type Carts = $Result.DefaultSelection<Prisma.$CartsPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articleRates`: Exposes CRUD operations for the **ArticleRates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArticleRates
    * const articleRates = await prisma.articleRates.findMany()
    * ```
    */
  get articleRates(): Prisma.ArticleRatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.articles`: Exposes CRUD operations for the **Articles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Articles
    * const articles = await prisma.articles.findMany()
    * ```
    */
  get articles(): Prisma.ArticlesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.numbers`: Exposes CRUD operations for the **Numbers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Numbers
    * const numbers = await prisma.numbers.findMany()
    * ```
    */
  get numbers(): Prisma.NumbersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **Carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.CartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    ArticleRates: 'ArticleRates',
    Categories: 'Categories',
    Articles: 'Articles',
    Comments: 'Comments',
    Messages: 'Messages',
    Numbers: 'Numbers',
    Carts: 'Carts',
    Orders: 'Orders',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "articleRates" | "categories" | "articles" | "comments" | "messages" | "numbers" | "carts" | "orders" | "session" | "account" | "verification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ArticleRates: {
        payload: Prisma.$ArticleRatesPayload<ExtArgs>
        fields: Prisma.ArticleRatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticleRatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticleRatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload>
          }
          findFirst: {
            args: Prisma.ArticleRatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticleRatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload>
          }
          findMany: {
            args: Prisma.ArticleRatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload>[]
          }
          create: {
            args: Prisma.ArticleRatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload>
          }
          createMany: {
            args: Prisma.ArticleRatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticleRatesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload>[]
          }
          delete: {
            args: Prisma.ArticleRatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload>
          }
          update: {
            args: Prisma.ArticleRatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload>
          }
          deleteMany: {
            args: Prisma.ArticleRatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticleRatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticleRatesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload>[]
          }
          upsert: {
            args: Prisma.ArticleRatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticleRatesPayload>
          }
          aggregate: {
            args: Prisma.ArticleRatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticleRates>
          }
          groupBy: {
            args: Prisma.ArticleRatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticleRatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticleRatesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticleRatesCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Articles: {
        payload: Prisma.$ArticlesPayload<ExtArgs>
        fields: Prisma.ArticlesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArticlesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArticlesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findFirst: {
            args: Prisma.ArticlesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArticlesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          findMany: {
            args: Prisma.ArticlesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          create: {
            args: Prisma.ArticlesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          createMany: {
            args: Prisma.ArticlesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArticlesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          delete: {
            args: Prisma.ArticlesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          update: {
            args: Prisma.ArticlesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          deleteMany: {
            args: Prisma.ArticlesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArticlesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArticlesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>[]
          }
          upsert: {
            args: Prisma.ArticlesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArticlesPayload>
          }
          aggregate: {
            args: Prisma.ArticlesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArticles>
          }
          groupBy: {
            args: Prisma.ArticlesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArticlesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArticlesCountArgs<ExtArgs>
            result: $Utils.Optional<ArticlesCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      Numbers: {
        payload: Prisma.$NumbersPayload<ExtArgs>
        fields: Prisma.NumbersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NumbersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NumbersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          findFirst: {
            args: Prisma.NumbersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NumbersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          findMany: {
            args: Prisma.NumbersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>[]
          }
          create: {
            args: Prisma.NumbersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          createMany: {
            args: Prisma.NumbersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NumbersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>[]
          }
          delete: {
            args: Prisma.NumbersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          update: {
            args: Prisma.NumbersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          deleteMany: {
            args: Prisma.NumbersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NumbersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NumbersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>[]
          }
          upsert: {
            args: Prisma.NumbersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NumbersPayload>
          }
          aggregate: {
            args: Prisma.NumbersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNumbers>
          }
          groupBy: {
            args: Prisma.NumbersGroupByArgs<ExtArgs>
            result: $Utils.Optional<NumbersGroupByOutputType>[]
          }
          count: {
            args: Prisma.NumbersCountArgs<ExtArgs>
            result: $Utils.Optional<NumbersCountAggregateOutputType> | number
          }
        }
      }
      Carts: {
        payload: Prisma.$CartsPayload<ExtArgs>
        fields: Prisma.CartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findFirst: {
            args: Prisma.CartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          findMany: {
            args: Prisma.CartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          create: {
            args: Prisma.CartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          createMany: {
            args: Prisma.CartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          delete: {
            args: Prisma.CartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          update: {
            args: Prisma.CartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          deleteMany: {
            args: Prisma.CartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>[]
          }
          upsert: {
            args: Prisma.CartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.CartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    articleRates?: ArticleRatesOmit
    categories?: CategoriesOmit
    articles?: ArticlesOmit
    comments?: CommentsOmit
    messages?: MessagesOmit
    numbers?: NumbersOmit
    carts?: CartsOmit
    orders?: OrdersOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Articles: number
    Comments: number
    MessagesSent: number
    MessagesReceived: number
    OrdersBuyer: number
    OrdersSeller: number
    Carts: number
    Account: number
    Session: number
    Numbers: number
    Appreciations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Articles?: boolean | UserCountOutputTypeCountArticlesArgs
    Comments?: boolean | UserCountOutputTypeCountCommentsArgs
    MessagesSent?: boolean | UserCountOutputTypeCountMessagesSentArgs
    MessagesReceived?: boolean | UserCountOutputTypeCountMessagesReceivedArgs
    OrdersBuyer?: boolean | UserCountOutputTypeCountOrdersBuyerArgs
    OrdersSeller?: boolean | UserCountOutputTypeCountOrdersSellerArgs
    Carts?: boolean | UserCountOutputTypeCountCartsArgs
    Account?: boolean | UserCountOutputTypeCountAccountArgs
    Session?: boolean | UserCountOutputTypeCountSessionArgs
    Numbers?: boolean | UserCountOutputTypeCountNumbersArgs
    Appreciations?: boolean | UserCountOutputTypeCountAppreciationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersBuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersSellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumbersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppreciationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleRatesWhereInput
  }


  /**
   * Count Type ArticlesCountOutputType
   */

  export type ArticlesCountOutputType = {
    Comments: number
    Messages: number
    Appreciations: number
  }

  export type ArticlesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | ArticlesCountOutputTypeCountCommentsArgs
    Messages?: boolean | ArticlesCountOutputTypeCountMessagesArgs
    Appreciations?: boolean | ArticlesCountOutputTypeCountAppreciationsArgs
  }

  // Custom InputTypes
  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticlesCountOutputType
     */
    select?: ArticlesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * ArticlesCountOutputType without action
   */
  export type ArticlesCountOutputTypeCountAppreciationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleRatesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    code: number | null
  }

  export type UserSumAggregateOutputType = {
    code: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    vendeur: boolean | null
    code: number | null
    address: string | null
    image: string | null
    certified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    vendeur: boolean | null
    code: number | null
    address: string | null
    image: string | null
    certified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    vendeur: number
    code: number
    address: number
    image: number
    certified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    code?: true
  }

  export type UserSumAggregateInputType = {
    code?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    vendeur?: true
    code?: true
    address?: true
    image?: true
    certified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    vendeur?: true
    code?: true
    address?: true
    image?: true
    certified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    vendeur?: true
    code?: true
    address?: true
    image?: true
    certified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
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
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    vendeur: boolean
    code: number | null
    address: string | null
    image: string | null
    certified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    vendeur?: boolean
    code?: boolean
    address?: boolean
    image?: boolean
    certified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Articles?: boolean | User$ArticlesArgs<ExtArgs>
    Comments?: boolean | User$CommentsArgs<ExtArgs>
    MessagesSent?: boolean | User$MessagesSentArgs<ExtArgs>
    MessagesReceived?: boolean | User$MessagesReceivedArgs<ExtArgs>
    OrdersBuyer?: boolean | User$OrdersBuyerArgs<ExtArgs>
    OrdersSeller?: boolean | User$OrdersSellerArgs<ExtArgs>
    Carts?: boolean | User$CartsArgs<ExtArgs>
    Account?: boolean | User$AccountArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    Numbers?: boolean | User$NumbersArgs<ExtArgs>
    Appreciations?: boolean | User$AppreciationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    vendeur?: boolean
    code?: boolean
    address?: boolean
    image?: boolean
    certified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    vendeur?: boolean
    code?: boolean
    address?: boolean
    image?: boolean
    certified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    vendeur?: boolean
    code?: boolean
    address?: boolean
    image?: boolean
    certified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "vendeur" | "code" | "address" | "image" | "certified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Articles?: boolean | User$ArticlesArgs<ExtArgs>
    Comments?: boolean | User$CommentsArgs<ExtArgs>
    MessagesSent?: boolean | User$MessagesSentArgs<ExtArgs>
    MessagesReceived?: boolean | User$MessagesReceivedArgs<ExtArgs>
    OrdersBuyer?: boolean | User$OrdersBuyerArgs<ExtArgs>
    OrdersSeller?: boolean | User$OrdersSellerArgs<ExtArgs>
    Carts?: boolean | User$CartsArgs<ExtArgs>
    Account?: boolean | User$AccountArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    Numbers?: boolean | User$NumbersArgs<ExtArgs>
    Appreciations?: boolean | User$AppreciationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Articles: Prisma.$ArticlesPayload<ExtArgs>[]
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      MessagesSent: Prisma.$MessagesPayload<ExtArgs>[]
      MessagesReceived: Prisma.$MessagesPayload<ExtArgs>[]
      OrdersBuyer: Prisma.$OrdersPayload<ExtArgs>[]
      OrdersSeller: Prisma.$OrdersPayload<ExtArgs>[]
      Carts: Prisma.$CartsPayload<ExtArgs>[]
      Account: Prisma.$AccountPayload<ExtArgs>[]
      Session: Prisma.$SessionPayload<ExtArgs>[]
      Numbers: Prisma.$NumbersPayload<ExtArgs>[]
      Appreciations: Prisma.$ArticleRatesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      vendeur: boolean
      code: number | null
      address: string | null
      image: string | null
      certified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Articles<T extends User$ArticlesArgs<ExtArgs> = {}>(args?: Subset<T, User$ArticlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Comments<T extends User$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MessagesSent<T extends User$MessagesSentArgs<ExtArgs> = {}>(args?: Subset<T, User$MessagesSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MessagesReceived<T extends User$MessagesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$MessagesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrdersBuyer<T extends User$OrdersBuyerArgs<ExtArgs> = {}>(args?: Subset<T, User$OrdersBuyerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrdersSeller<T extends User$OrdersSellerArgs<ExtArgs> = {}>(args?: Subset<T, User$OrdersSellerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Carts<T extends User$CartsArgs<ExtArgs> = {}>(args?: Subset<T, User$CartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Account<T extends User$AccountArgs<ExtArgs> = {}>(args?: Subset<T, User$AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Session<T extends User$SessionArgs<ExtArgs> = {}>(args?: Subset<T, User$SessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Numbers<T extends User$NumbersArgs<ExtArgs> = {}>(args?: Subset<T, User$NumbersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Appreciations<T extends User$AppreciationsArgs<ExtArgs> = {}>(args?: Subset<T, User$AppreciationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly vendeur: FieldRef<"User", 'Boolean'>
    readonly code: FieldRef<"User", 'Int'>
    readonly address: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly certified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Articles
   */
  export type User$ArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    cursor?: ArticlesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * User.Comments
   */
  export type User$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * User.MessagesSent
   */
  export type User$MessagesSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * User.MessagesReceived
   */
  export type User$MessagesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * User.OrdersBuyer
   */
  export type User$OrdersBuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User.OrdersSeller
   */
  export type User$OrdersSellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * User.Carts
   */
  export type User$CartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    cursor?: CartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * User.Account
   */
  export type User$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.Session
   */
  export type User$SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.Numbers
   */
  export type User$NumbersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    where?: NumbersWhereInput
    orderBy?: NumbersOrderByWithRelationInput | NumbersOrderByWithRelationInput[]
    cursor?: NumbersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NumbersScalarFieldEnum | NumbersScalarFieldEnum[]
  }

  /**
   * User.Appreciations
   */
  export type User$AppreciationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    where?: ArticleRatesWhereInput
    orderBy?: ArticleRatesOrderByWithRelationInput | ArticleRatesOrderByWithRelationInput[]
    cursor?: ArticleRatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleRatesScalarFieldEnum | ArticleRatesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ArticleRates
   */

  export type AggregateArticleRates = {
    _count: ArticleRatesCountAggregateOutputType | null
    _avg: ArticleRatesAvgAggregateOutputType | null
    _sum: ArticleRatesSumAggregateOutputType | null
    _min: ArticleRatesMinAggregateOutputType | null
    _max: ArticleRatesMaxAggregateOutputType | null
  }

  export type ArticleRatesAvgAggregateOutputType = {
    rate: number | null
  }

  export type ArticleRatesSumAggregateOutputType = {
    rate: number | null
  }

  export type ArticleRatesMinAggregateOutputType = {
    rate: number | null
    seller_id: string | null
    article_id: string | null
  }

  export type ArticleRatesMaxAggregateOutputType = {
    rate: number | null
    seller_id: string | null
    article_id: string | null
  }

  export type ArticleRatesCountAggregateOutputType = {
    rate: number
    seller_id: number
    article_id: number
    _all: number
  }


  export type ArticleRatesAvgAggregateInputType = {
    rate?: true
  }

  export type ArticleRatesSumAggregateInputType = {
    rate?: true
  }

  export type ArticleRatesMinAggregateInputType = {
    rate?: true
    seller_id?: true
    article_id?: true
  }

  export type ArticleRatesMaxAggregateInputType = {
    rate?: true
    seller_id?: true
    article_id?: true
  }

  export type ArticleRatesCountAggregateInputType = {
    rate?: true
    seller_id?: true
    article_id?: true
    _all?: true
  }

  export type ArticleRatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleRates to aggregate.
     */
    where?: ArticleRatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleRates to fetch.
     */
    orderBy?: ArticleRatesOrderByWithRelationInput | ArticleRatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticleRatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArticleRates
    **/
    _count?: true | ArticleRatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticleRatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticleRatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticleRatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticleRatesMaxAggregateInputType
  }

  export type GetArticleRatesAggregateType<T extends ArticleRatesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticleRates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticleRates[P]>
      : GetScalarType<T[P], AggregateArticleRates[P]>
  }




  export type ArticleRatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticleRatesWhereInput
    orderBy?: ArticleRatesOrderByWithAggregationInput | ArticleRatesOrderByWithAggregationInput[]
    by: ArticleRatesScalarFieldEnum[] | ArticleRatesScalarFieldEnum
    having?: ArticleRatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticleRatesCountAggregateInputType | true
    _avg?: ArticleRatesAvgAggregateInputType
    _sum?: ArticleRatesSumAggregateInputType
    _min?: ArticleRatesMinAggregateInputType
    _max?: ArticleRatesMaxAggregateInputType
  }

  export type ArticleRatesGroupByOutputType = {
    rate: number
    seller_id: string
    article_id: string
    _count: ArticleRatesCountAggregateOutputType | null
    _avg: ArticleRatesAvgAggregateOutputType | null
    _sum: ArticleRatesSumAggregateOutputType | null
    _min: ArticleRatesMinAggregateOutputType | null
    _max: ArticleRatesMaxAggregateOutputType | null
  }

  type GetArticleRatesGroupByPayload<T extends ArticleRatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticleRatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticleRatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticleRatesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticleRatesGroupByOutputType[P]>
        }
      >
    >


  export type ArticleRatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rate?: boolean
    seller_id?: boolean
    article_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleRates"]>

  export type ArticleRatesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rate?: boolean
    seller_id?: boolean
    article_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleRates"]>

  export type ArticleRatesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    rate?: boolean
    seller_id?: boolean
    article_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articleRates"]>

  export type ArticleRatesSelectScalar = {
    rate?: boolean
    seller_id?: boolean
    article_id?: boolean
  }

  export type ArticleRatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"rate" | "seller_id" | "article_id", ExtArgs["result"]["articleRates"]>
  export type ArticleRatesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
  }
  export type ArticleRatesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
  }
  export type ArticleRatesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
  }

  export type $ArticleRatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArticleRates"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Articles: Prisma.$ArticlesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      rate: number
      seller_id: string
      article_id: string
    }, ExtArgs["result"]["articleRates"]>
    composites: {}
  }

  type ArticleRatesGetPayload<S extends boolean | null | undefined | ArticleRatesDefaultArgs> = $Result.GetResult<Prisma.$ArticleRatesPayload, S>

  type ArticleRatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticleRatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticleRatesCountAggregateInputType | true
    }

  export interface ArticleRatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArticleRates'], meta: { name: 'ArticleRates' } }
    /**
     * Find zero or one ArticleRates that matches the filter.
     * @param {ArticleRatesFindUniqueArgs} args - Arguments to find a ArticleRates
     * @example
     * // Get one ArticleRates
     * const articleRates = await prisma.articleRates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticleRatesFindUniqueArgs>(args: SelectSubset<T, ArticleRatesFindUniqueArgs<ExtArgs>>): Prisma__ArticleRatesClient<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ArticleRates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticleRatesFindUniqueOrThrowArgs} args - Arguments to find a ArticleRates
     * @example
     * // Get one ArticleRates
     * const articleRates = await prisma.articleRates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticleRatesFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticleRatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticleRatesClient<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleRatesFindFirstArgs} args - Arguments to find a ArticleRates
     * @example
     * // Get one ArticleRates
     * const articleRates = await prisma.articleRates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticleRatesFindFirstArgs>(args?: SelectSubset<T, ArticleRatesFindFirstArgs<ExtArgs>>): Prisma__ArticleRatesClient<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ArticleRates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleRatesFindFirstOrThrowArgs} args - Arguments to find a ArticleRates
     * @example
     * // Get one ArticleRates
     * const articleRates = await prisma.articleRates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticleRatesFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticleRatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticleRatesClient<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ArticleRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleRatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArticleRates
     * const articleRates = await prisma.articleRates.findMany()
     * 
     * // Get first 10 ArticleRates
     * const articleRates = await prisma.articleRates.findMany({ take: 10 })
     * 
     * // Only select the `rate`
     * const articleRatesWithRateOnly = await prisma.articleRates.findMany({ select: { rate: true } })
     * 
     */
    findMany<T extends ArticleRatesFindManyArgs>(args?: SelectSubset<T, ArticleRatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ArticleRates.
     * @param {ArticleRatesCreateArgs} args - Arguments to create a ArticleRates.
     * @example
     * // Create one ArticleRates
     * const ArticleRates = await prisma.articleRates.create({
     *   data: {
     *     // ... data to create a ArticleRates
     *   }
     * })
     * 
     */
    create<T extends ArticleRatesCreateArgs>(args: SelectSubset<T, ArticleRatesCreateArgs<ExtArgs>>): Prisma__ArticleRatesClient<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ArticleRates.
     * @param {ArticleRatesCreateManyArgs} args - Arguments to create many ArticleRates.
     * @example
     * // Create many ArticleRates
     * const articleRates = await prisma.articleRates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticleRatesCreateManyArgs>(args?: SelectSubset<T, ArticleRatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ArticleRates and returns the data saved in the database.
     * @param {ArticleRatesCreateManyAndReturnArgs} args - Arguments to create many ArticleRates.
     * @example
     * // Create many ArticleRates
     * const articleRates = await prisma.articleRates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ArticleRates and only return the `rate`
     * const articleRatesWithRateOnly = await prisma.articleRates.createManyAndReturn({
     *   select: { rate: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticleRatesCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticleRatesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ArticleRates.
     * @param {ArticleRatesDeleteArgs} args - Arguments to delete one ArticleRates.
     * @example
     * // Delete one ArticleRates
     * const ArticleRates = await prisma.articleRates.delete({
     *   where: {
     *     // ... filter to delete one ArticleRates
     *   }
     * })
     * 
     */
    delete<T extends ArticleRatesDeleteArgs>(args: SelectSubset<T, ArticleRatesDeleteArgs<ExtArgs>>): Prisma__ArticleRatesClient<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ArticleRates.
     * @param {ArticleRatesUpdateArgs} args - Arguments to update one ArticleRates.
     * @example
     * // Update one ArticleRates
     * const articleRates = await prisma.articleRates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticleRatesUpdateArgs>(args: SelectSubset<T, ArticleRatesUpdateArgs<ExtArgs>>): Prisma__ArticleRatesClient<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ArticleRates.
     * @param {ArticleRatesDeleteManyArgs} args - Arguments to filter ArticleRates to delete.
     * @example
     * // Delete a few ArticleRates
     * const { count } = await prisma.articleRates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticleRatesDeleteManyArgs>(args?: SelectSubset<T, ArticleRatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleRatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArticleRates
     * const articleRates = await prisma.articleRates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticleRatesUpdateManyArgs>(args: SelectSubset<T, ArticleRatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArticleRates and returns the data updated in the database.
     * @param {ArticleRatesUpdateManyAndReturnArgs} args - Arguments to update many ArticleRates.
     * @example
     * // Update many ArticleRates
     * const articleRates = await prisma.articleRates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ArticleRates and only return the `rate`
     * const articleRatesWithRateOnly = await prisma.articleRates.updateManyAndReturn({
     *   select: { rate: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticleRatesUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticleRatesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ArticleRates.
     * @param {ArticleRatesUpsertArgs} args - Arguments to update or create a ArticleRates.
     * @example
     * // Update or create a ArticleRates
     * const articleRates = await prisma.articleRates.upsert({
     *   create: {
     *     // ... data to create a ArticleRates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArticleRates we want to update
     *   }
     * })
     */
    upsert<T extends ArticleRatesUpsertArgs>(args: SelectSubset<T, ArticleRatesUpsertArgs<ExtArgs>>): Prisma__ArticleRatesClient<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ArticleRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleRatesCountArgs} args - Arguments to filter ArticleRates to count.
     * @example
     * // Count the number of ArticleRates
     * const count = await prisma.articleRates.count({
     *   where: {
     *     // ... the filter for the ArticleRates we want to count
     *   }
     * })
    **/
    count<T extends ArticleRatesCountArgs>(
      args?: Subset<T, ArticleRatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticleRatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArticleRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleRatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticleRatesAggregateArgs>(args: Subset<T, ArticleRatesAggregateArgs>): Prisma.PrismaPromise<GetArticleRatesAggregateType<T>>

    /**
     * Group by ArticleRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticleRatesGroupByArgs} args - Group by arguments.
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
      T extends ArticleRatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticleRatesGroupByArgs['orderBy'] }
        : { orderBy?: ArticleRatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticleRatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticleRatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArticleRates model
   */
  readonly fields: ArticleRatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArticleRates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticleRatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Articles<T extends ArticlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticlesDefaultArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ArticleRates model
   */
  interface ArticleRatesFieldRefs {
    readonly rate: FieldRef<"ArticleRates", 'Float'>
    readonly seller_id: FieldRef<"ArticleRates", 'String'>
    readonly article_id: FieldRef<"ArticleRates", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ArticleRates findUnique
   */
  export type ArticleRatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    /**
     * Filter, which ArticleRates to fetch.
     */
    where: ArticleRatesWhereUniqueInput
  }

  /**
   * ArticleRates findUniqueOrThrow
   */
  export type ArticleRatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    /**
     * Filter, which ArticleRates to fetch.
     */
    where: ArticleRatesWhereUniqueInput
  }

  /**
   * ArticleRates findFirst
   */
  export type ArticleRatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    /**
     * Filter, which ArticleRates to fetch.
     */
    where?: ArticleRatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleRates to fetch.
     */
    orderBy?: ArticleRatesOrderByWithRelationInput | ArticleRatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleRates.
     */
    cursor?: ArticleRatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleRates.
     */
    distinct?: ArticleRatesScalarFieldEnum | ArticleRatesScalarFieldEnum[]
  }

  /**
   * ArticleRates findFirstOrThrow
   */
  export type ArticleRatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    /**
     * Filter, which ArticleRates to fetch.
     */
    where?: ArticleRatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleRates to fetch.
     */
    orderBy?: ArticleRatesOrderByWithRelationInput | ArticleRatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArticleRates.
     */
    cursor?: ArticleRatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArticleRates.
     */
    distinct?: ArticleRatesScalarFieldEnum | ArticleRatesScalarFieldEnum[]
  }

  /**
   * ArticleRates findMany
   */
  export type ArticleRatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    /**
     * Filter, which ArticleRates to fetch.
     */
    where?: ArticleRatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArticleRates to fetch.
     */
    orderBy?: ArticleRatesOrderByWithRelationInput | ArticleRatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArticleRates.
     */
    cursor?: ArticleRatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArticleRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArticleRates.
     */
    skip?: number
    distinct?: ArticleRatesScalarFieldEnum | ArticleRatesScalarFieldEnum[]
  }

  /**
   * ArticleRates create
   */
  export type ArticleRatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    /**
     * The data needed to create a ArticleRates.
     */
    data: XOR<ArticleRatesCreateInput, ArticleRatesUncheckedCreateInput>
  }

  /**
   * ArticleRates createMany
   */
  export type ArticleRatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArticleRates.
     */
    data: ArticleRatesCreateManyInput | ArticleRatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ArticleRates createManyAndReturn
   */
  export type ArticleRatesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * The data used to create many ArticleRates.
     */
    data: ArticleRatesCreateManyInput | ArticleRatesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleRates update
   */
  export type ArticleRatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    /**
     * The data needed to update a ArticleRates.
     */
    data: XOR<ArticleRatesUpdateInput, ArticleRatesUncheckedUpdateInput>
    /**
     * Choose, which ArticleRates to update.
     */
    where: ArticleRatesWhereUniqueInput
  }

  /**
   * ArticleRates updateMany
   */
  export type ArticleRatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArticleRates.
     */
    data: XOR<ArticleRatesUpdateManyMutationInput, ArticleRatesUncheckedUpdateManyInput>
    /**
     * Filter which ArticleRates to update
     */
    where?: ArticleRatesWhereInput
    /**
     * Limit how many ArticleRates to update.
     */
    limit?: number
  }

  /**
   * ArticleRates updateManyAndReturn
   */
  export type ArticleRatesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * The data used to update ArticleRates.
     */
    data: XOR<ArticleRatesUpdateManyMutationInput, ArticleRatesUncheckedUpdateManyInput>
    /**
     * Filter which ArticleRates to update
     */
    where?: ArticleRatesWhereInput
    /**
     * Limit how many ArticleRates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ArticleRates upsert
   */
  export type ArticleRatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    /**
     * The filter to search for the ArticleRates to update in case it exists.
     */
    where: ArticleRatesWhereUniqueInput
    /**
     * In case the ArticleRates found by the `where` argument doesn't exist, create a new ArticleRates with this data.
     */
    create: XOR<ArticleRatesCreateInput, ArticleRatesUncheckedCreateInput>
    /**
     * In case the ArticleRates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticleRatesUpdateInput, ArticleRatesUncheckedUpdateInput>
  }

  /**
   * ArticleRates delete
   */
  export type ArticleRatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    /**
     * Filter which ArticleRates to delete.
     */
    where: ArticleRatesWhereUniqueInput
  }

  /**
   * ArticleRates deleteMany
   */
  export type ArticleRatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArticleRates to delete
     */
    where?: ArticleRatesWhereInput
    /**
     * Limit how many ArticleRates to delete.
     */
    limit?: number
  }

  /**
   * ArticleRates without action
   */
  export type ArticleRatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    name: string | null
    description: string | null
    image: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    name: string | null
    description: string | null
    image: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    name: number
    description: number
    image: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    name?: true
    description?: true
    image?: true
  }

  export type CategoriesMaxAggregateInputType = {
    name?: true
    description?: true
    image?: true
  }

  export type CategoriesCountAggregateInputType = {
    name?: true
    description?: true
    image?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    name: string
    description: string | null
    image: string | null
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    description?: boolean
    image?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    name?: boolean
    description?: boolean
    image?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "description" | "image", ExtArgs["result"]["categories"]>

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string
      description: string | null
      image: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const categoriesWithNameOnly = await prisma.categories.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `name`
     * const categoriesWithNameOnly = await prisma.categories.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `name`
     * const categoriesWithNameOnly = await prisma.categories.updateManyAndReturn({
     *   select: { name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly name: FieldRef<"Categories", 'String'>
    readonly description: FieldRef<"Categories", 'String'>
    readonly image: FieldRef<"Categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
  }


  /**
   * Model Articles
   */

  export type AggregateArticles = {
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  export type ArticlesAvgAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ArticlesSumAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ArticlesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    price: number | null
    stock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    price: number | null
    stock: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ArticlesCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    images: number
    category: number
    description: number
    price: number
    stock: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ArticlesAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ArticlesSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ArticlesMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    price?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    price?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ArticlesCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    images?: true
    category?: true
    description?: true
    price?: true
    stock?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ArticlesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to aggregate.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Articles
    **/
    _count?: true | ArticlesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArticlesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArticlesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArticlesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArticlesMaxAggregateInputType
  }

  export type GetArticlesAggregateType<T extends ArticlesAggregateArgs> = {
        [P in keyof T & keyof AggregateArticles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArticles[P]>
      : GetScalarType<T[P], AggregateArticles[P]>
  }




  export type ArticlesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArticlesWhereInput
    orderBy?: ArticlesOrderByWithAggregationInput | ArticlesOrderByWithAggregationInput[]
    by: ArticlesScalarFieldEnum[] | ArticlesScalarFieldEnum
    having?: ArticlesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArticlesCountAggregateInputType | true
    _avg?: ArticlesAvgAggregateInputType
    _sum?: ArticlesSumAggregateInputType
    _min?: ArticlesMinAggregateInputType
    _max?: ArticlesMaxAggregateInputType
  }

  export type ArticlesGroupByOutputType = {
    id: string
    userId: string
    title: string
    images: string[]
    category: string[]
    description: string
    price: number
    stock: number
    createdAt: Date
    updatedAt: Date
    _count: ArticlesCountAggregateOutputType | null
    _avg: ArticlesAvgAggregateOutputType | null
    _sum: ArticlesSumAggregateOutputType | null
    _min: ArticlesMinAggregateOutputType | null
    _max: ArticlesMaxAggregateOutputType | null
  }

  type GetArticlesGroupByPayload<T extends ArticlesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArticlesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArticlesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
            : GetScalarType<T[P], ArticlesGroupByOutputType[P]>
        }
      >
    >


  export type ArticlesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    images?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Comments?: boolean | Articles$CommentsArgs<ExtArgs>
    Messages?: boolean | Articles$MessagesArgs<ExtArgs>
    Appreciations?: boolean | Articles$AppreciationsArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type ArticlesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    images?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type ArticlesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    images?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["articles"]>

  export type ArticlesSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    images?: boolean
    category?: boolean
    description?: boolean
    price?: boolean
    stock?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ArticlesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "images" | "category" | "description" | "price" | "stock" | "createdAt" | "updatedAt", ExtArgs["result"]["articles"]>
  export type ArticlesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Comments?: boolean | Articles$CommentsArgs<ExtArgs>
    Messages?: boolean | Articles$MessagesArgs<ExtArgs>
    Appreciations?: boolean | Articles$AppreciationsArgs<ExtArgs>
    _count?: boolean | ArticlesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArticlesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ArticlesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ArticlesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Articles"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      Messages: Prisma.$MessagesPayload<ExtArgs>[]
      Appreciations: Prisma.$ArticleRatesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      images: string[]
      category: string[]
      description: string
      price: number
      stock: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["articles"]>
    composites: {}
  }

  type ArticlesGetPayload<S extends boolean | null | undefined | ArticlesDefaultArgs> = $Result.GetResult<Prisma.$ArticlesPayload, S>

  type ArticlesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArticlesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArticlesCountAggregateInputType | true
    }

  export interface ArticlesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Articles'], meta: { name: 'Articles' } }
    /**
     * Find zero or one Articles that matches the filter.
     * @param {ArticlesFindUniqueArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArticlesFindUniqueArgs>(args: SelectSubset<T, ArticlesFindUniqueArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Articles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArticlesFindUniqueOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArticlesFindUniqueOrThrowArgs>(args: SelectSubset<T, ArticlesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArticlesFindFirstArgs>(args?: SelectSubset<T, ArticlesFindFirstArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Articles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindFirstOrThrowArgs} args - Arguments to find a Articles
     * @example
     * // Get one Articles
     * const articles = await prisma.articles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArticlesFindFirstOrThrowArgs>(args?: SelectSubset<T, ArticlesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Articles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Articles
     * const articles = await prisma.articles.findMany()
     * 
     * // Get first 10 Articles
     * const articles = await prisma.articles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const articlesWithIdOnly = await prisma.articles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArticlesFindManyArgs>(args?: SelectSubset<T, ArticlesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Articles.
     * @param {ArticlesCreateArgs} args - Arguments to create a Articles.
     * @example
     * // Create one Articles
     * const Articles = await prisma.articles.create({
     *   data: {
     *     // ... data to create a Articles
     *   }
     * })
     * 
     */
    create<T extends ArticlesCreateArgs>(args: SelectSubset<T, ArticlesCreateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Articles.
     * @param {ArticlesCreateManyArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArticlesCreateManyArgs>(args?: SelectSubset<T, ArticlesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Articles and returns the data saved in the database.
     * @param {ArticlesCreateManyAndReturnArgs} args - Arguments to create many Articles.
     * @example
     * // Create many Articles
     * const articles = await prisma.articles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Articles and only return the `id`
     * const articlesWithIdOnly = await prisma.articles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArticlesCreateManyAndReturnArgs>(args?: SelectSubset<T, ArticlesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Articles.
     * @param {ArticlesDeleteArgs} args - Arguments to delete one Articles.
     * @example
     * // Delete one Articles
     * const Articles = await prisma.articles.delete({
     *   where: {
     *     // ... filter to delete one Articles
     *   }
     * })
     * 
     */
    delete<T extends ArticlesDeleteArgs>(args: SelectSubset<T, ArticlesDeleteArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Articles.
     * @param {ArticlesUpdateArgs} args - Arguments to update one Articles.
     * @example
     * // Update one Articles
     * const articles = await prisma.articles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArticlesUpdateArgs>(args: SelectSubset<T, ArticlesUpdateArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Articles.
     * @param {ArticlesDeleteManyArgs} args - Arguments to filter Articles to delete.
     * @example
     * // Delete a few Articles
     * const { count } = await prisma.articles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArticlesDeleteManyArgs>(args?: SelectSubset<T, ArticlesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArticlesUpdateManyArgs>(args: SelectSubset<T, ArticlesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Articles and returns the data updated in the database.
     * @param {ArticlesUpdateManyAndReturnArgs} args - Arguments to update many Articles.
     * @example
     * // Update many Articles
     * const articles = await prisma.articles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Articles and only return the `id`
     * const articlesWithIdOnly = await prisma.articles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArticlesUpdateManyAndReturnArgs>(args: SelectSubset<T, ArticlesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Articles.
     * @param {ArticlesUpsertArgs} args - Arguments to update or create a Articles.
     * @example
     * // Update or create a Articles
     * const articles = await prisma.articles.upsert({
     *   create: {
     *     // ... data to create a Articles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Articles we want to update
     *   }
     * })
     */
    upsert<T extends ArticlesUpsertArgs>(args: SelectSubset<T, ArticlesUpsertArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesCountArgs} args - Arguments to filter Articles to count.
     * @example
     * // Count the number of Articles
     * const count = await prisma.articles.count({
     *   where: {
     *     // ... the filter for the Articles we want to count
     *   }
     * })
    **/
    count<T extends ArticlesCountArgs>(
      args?: Subset<T, ArticlesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArticlesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArticlesAggregateArgs>(args: Subset<T, ArticlesAggregateArgs>): Prisma.PrismaPromise<GetArticlesAggregateType<T>>

    /**
     * Group by Articles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArticlesGroupByArgs} args - Group by arguments.
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
      T extends ArticlesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArticlesGroupByArgs['orderBy'] }
        : { orderBy?: ArticlesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArticlesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArticlesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Articles model
   */
  readonly fields: ArticlesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Articles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArticlesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Comments<T extends Articles$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Articles$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Messages<T extends Articles$MessagesArgs<ExtArgs> = {}>(args?: Subset<T, Articles$MessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Appreciations<T extends Articles$AppreciationsArgs<ExtArgs> = {}>(args?: Subset<T, Articles$AppreciationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArticleRatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Articles model
   */
  interface ArticlesFieldRefs {
    readonly id: FieldRef<"Articles", 'String'>
    readonly userId: FieldRef<"Articles", 'String'>
    readonly title: FieldRef<"Articles", 'String'>
    readonly images: FieldRef<"Articles", 'String[]'>
    readonly category: FieldRef<"Articles", 'String[]'>
    readonly description: FieldRef<"Articles", 'String'>
    readonly price: FieldRef<"Articles", 'Int'>
    readonly stock: FieldRef<"Articles", 'Int'>
    readonly createdAt: FieldRef<"Articles", 'DateTime'>
    readonly updatedAt: FieldRef<"Articles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Articles findUnique
   */
  export type ArticlesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findUniqueOrThrow
   */
  export type ArticlesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles findFirst
   */
  export type ArticlesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findFirstOrThrow
   */
  export type ArticlesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Articles.
     */
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles findMany
   */
  export type ArticlesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter, which Articles to fetch.
     */
    where?: ArticlesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Articles to fetch.
     */
    orderBy?: ArticlesOrderByWithRelationInput | ArticlesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Articles.
     */
    cursor?: ArticlesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Articles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Articles.
     */
    skip?: number
    distinct?: ArticlesScalarFieldEnum | ArticlesScalarFieldEnum[]
  }

  /**
   * Articles create
   */
  export type ArticlesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The data needed to create a Articles.
     */
    data: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
  }

  /**
   * Articles createMany
   */
  export type ArticlesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Articles.
     */
    data: ArticlesCreateManyInput | ArticlesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Articles createManyAndReturn
   */
  export type ArticlesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The data used to create many Articles.
     */
    data: ArticlesCreateManyInput | ArticlesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Articles update
   */
  export type ArticlesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The data needed to update a Articles.
     */
    data: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
    /**
     * Choose, which Articles to update.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles updateMany
   */
  export type ArticlesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
  }

  /**
   * Articles updateManyAndReturn
   */
  export type ArticlesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * The data used to update Articles.
     */
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyInput>
    /**
     * Filter which Articles to update
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Articles upsert
   */
  export type ArticlesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * The filter to search for the Articles to update in case it exists.
     */
    where: ArticlesWhereUniqueInput
    /**
     * In case the Articles found by the `where` argument doesn't exist, create a new Articles with this data.
     */
    create: XOR<ArticlesCreateInput, ArticlesUncheckedCreateInput>
    /**
     * In case the Articles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArticlesUpdateInput, ArticlesUncheckedUpdateInput>
  }

  /**
   * Articles delete
   */
  export type ArticlesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    /**
     * Filter which Articles to delete.
     */
    where: ArticlesWhereUniqueInput
  }

  /**
   * Articles deleteMany
   */
  export type ArticlesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Articles to delete
     */
    where?: ArticlesWhereInput
    /**
     * Limit how many Articles to delete.
     */
    limit?: number
  }

  /**
   * Articles.Comments
   */
  export type Articles$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Articles.Messages
   */
  export type Articles$MessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Articles.Appreciations
   */
  export type Articles$AppreciationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArticleRates
     */
    select?: ArticleRatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ArticleRates
     */
    omit?: ArticleRatesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticleRatesInclude<ExtArgs> | null
    where?: ArticleRatesWhereInput
    orderBy?: ArticleRatesOrderByWithRelationInput | ArticleRatesOrderByWithRelationInput[]
    cursor?: ArticleRatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArticleRatesScalarFieldEnum | ArticleRatesScalarFieldEnum[]
  }

  /**
   * Articles without action
   */
  export type ArticlesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    article_id: string | null
    buyer_id: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    article_id: string | null
    buyer_id: string | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    article_id: number
    buyer_id: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    id?: true
    article_id?: true
    buyer_id?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    article_id?: true
    buyer_id?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    article_id?: true
    buyer_id?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    article_id: string
    buyer_id: string
    comment: string
    createdAt: Date
    updatedAt: Date
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    article_id?: boolean
    buyer_id?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    article_id?: boolean
    buyer_id?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    article_id?: boolean
    buyer_id?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    article_id?: boolean
    buyer_id?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "article_id" | "buyer_id" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Articles?: boolean | ArticlesDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      Articles: Prisma.$ArticlesPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      article_id: string
      buyer_id: string
      comment: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Articles<T extends ArticlesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArticlesDefaultArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'String'>
    readonly article_id: FieldRef<"Comments", 'String'>
    readonly buyer_id: FieldRef<"Comments", 'String'>
    readonly comment: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
    readonly updatedAt: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    message: string | null
    sender_id: string | null
    receiver_id: string | null
    article_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    message: string | null
    sender_id: string | null
    receiver_id: string | null
    article_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    message: number
    sender_id: number
    receiver_id: number
    article_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    message?: true
    sender_id?: true
    receiver_id?: true
    article_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    message?: true
    sender_id?: true
    receiver_id?: true
    article_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    message?: true
    sender_id?: true
    receiver_id?: true
    article_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    message: string
    sender_id: string
    receiver_id: string
    article_id: string | null
    createdAt: Date
    updatedAt: Date
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    article_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Sender?: boolean | UserDefaultArgs<ExtArgs>
    Receiver?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | Messages$ArticlesArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    article_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Sender?: boolean | UserDefaultArgs<ExtArgs>
    Receiver?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | Messages$ArticlesArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    article_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Sender?: boolean | UserDefaultArgs<ExtArgs>
    Receiver?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | Messages$ArticlesArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    id?: boolean
    message?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    article_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "sender_id" | "receiver_id" | "article_id" | "createdAt" | "updatedAt", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sender?: boolean | UserDefaultArgs<ExtArgs>
    Receiver?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | Messages$ArticlesArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sender?: boolean | UserDefaultArgs<ExtArgs>
    Receiver?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | Messages$ArticlesArgs<ExtArgs>
  }
  export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sender?: boolean | UserDefaultArgs<ExtArgs>
    Receiver?: boolean | UserDefaultArgs<ExtArgs>
    Articles?: boolean | Messages$ArticlesArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      Sender: Prisma.$UserPayload<ExtArgs>
      Receiver: Prisma.$UserPayload<ExtArgs>
      Articles: Prisma.$ArticlesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      sender_id: string
      receiver_id: string
      article_id: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
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
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Articles<T extends Messages$ArticlesArgs<ExtArgs> = {}>(args?: Subset<T, Messages$ArticlesArgs<ExtArgs>>): Prisma__ArticlesClient<$Result.GetResult<Prisma.$ArticlesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'String'>
    readonly message: FieldRef<"Messages", 'String'>
    readonly sender_id: FieldRef<"Messages", 'String'>
    readonly receiver_id: FieldRef<"Messages", 'String'>
    readonly article_id: FieldRef<"Messages", 'String'>
    readonly createdAt: FieldRef<"Messages", 'DateTime'>
    readonly updatedAt: FieldRef<"Messages", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages.Articles
   */
  export type Messages$ArticlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Articles
     */
    select?: ArticlesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Articles
     */
    omit?: ArticlesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArticlesInclude<ExtArgs> | null
    where?: ArticlesWhereInput
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
  }


  /**
   * Model Numbers
   */

  export type AggregateNumbers = {
    _count: NumbersCountAggregateOutputType | null
    _avg: NumbersAvgAggregateOutputType | null
    _sum: NumbersSumAggregateOutputType | null
    _min: NumbersMinAggregateOutputType | null
    _max: NumbersMaxAggregateOutputType | null
  }

  export type NumbersAvgAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type NumbersSumAggregateOutputType = {
    id: number | null
    number: number | null
  }

  export type NumbersMinAggregateOutputType = {
    id: number | null
    number: number | null
    seller_id: string | null
  }

  export type NumbersMaxAggregateOutputType = {
    id: number | null
    number: number | null
    seller_id: string | null
  }

  export type NumbersCountAggregateOutputType = {
    id: number
    number: number
    seller_id: number
    _all: number
  }


  export type NumbersAvgAggregateInputType = {
    id?: true
    number?: true
  }

  export type NumbersSumAggregateInputType = {
    id?: true
    number?: true
  }

  export type NumbersMinAggregateInputType = {
    id?: true
    number?: true
    seller_id?: true
  }

  export type NumbersMaxAggregateInputType = {
    id?: true
    number?: true
    seller_id?: true
  }

  export type NumbersCountAggregateInputType = {
    id?: true
    number?: true
    seller_id?: true
    _all?: true
  }

  export type NumbersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Numbers to aggregate.
     */
    where?: NumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Numbers to fetch.
     */
    orderBy?: NumbersOrderByWithRelationInput | NumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Numbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Numbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Numbers
    **/
    _count?: true | NumbersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NumbersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NumbersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NumbersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NumbersMaxAggregateInputType
  }

  export type GetNumbersAggregateType<T extends NumbersAggregateArgs> = {
        [P in keyof T & keyof AggregateNumbers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNumbers[P]>
      : GetScalarType<T[P], AggregateNumbers[P]>
  }




  export type NumbersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NumbersWhereInput
    orderBy?: NumbersOrderByWithAggregationInput | NumbersOrderByWithAggregationInput[]
    by: NumbersScalarFieldEnum[] | NumbersScalarFieldEnum
    having?: NumbersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NumbersCountAggregateInputType | true
    _avg?: NumbersAvgAggregateInputType
    _sum?: NumbersSumAggregateInputType
    _min?: NumbersMinAggregateInputType
    _max?: NumbersMaxAggregateInputType
  }

  export type NumbersGroupByOutputType = {
    id: number
    number: number
    seller_id: string
    _count: NumbersCountAggregateOutputType | null
    _avg: NumbersAvgAggregateOutputType | null
    _sum: NumbersSumAggregateOutputType | null
    _min: NumbersMinAggregateOutputType | null
    _max: NumbersMaxAggregateOutputType | null
  }

  type GetNumbersGroupByPayload<T extends NumbersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NumbersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NumbersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NumbersGroupByOutputType[P]>
            : GetScalarType<T[P], NumbersGroupByOutputType[P]>
        }
      >
    >


  export type NumbersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    seller_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["numbers"]>

  export type NumbersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    seller_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["numbers"]>

  export type NumbersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    seller_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["numbers"]>

  export type NumbersSelectScalar = {
    id?: boolean
    number?: boolean
    seller_id?: boolean
  }

  export type NumbersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "seller_id", ExtArgs["result"]["numbers"]>
  export type NumbersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NumbersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NumbersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NumbersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Numbers"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: number
      seller_id: string
    }, ExtArgs["result"]["numbers"]>
    composites: {}
  }

  type NumbersGetPayload<S extends boolean | null | undefined | NumbersDefaultArgs> = $Result.GetResult<Prisma.$NumbersPayload, S>

  type NumbersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NumbersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NumbersCountAggregateInputType | true
    }

  export interface NumbersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Numbers'], meta: { name: 'Numbers' } }
    /**
     * Find zero or one Numbers that matches the filter.
     * @param {NumbersFindUniqueArgs} args - Arguments to find a Numbers
     * @example
     * // Get one Numbers
     * const numbers = await prisma.numbers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NumbersFindUniqueArgs>(args: SelectSubset<T, NumbersFindUniqueArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Numbers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NumbersFindUniqueOrThrowArgs} args - Arguments to find a Numbers
     * @example
     * // Get one Numbers
     * const numbers = await prisma.numbers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NumbersFindUniqueOrThrowArgs>(args: SelectSubset<T, NumbersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Numbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersFindFirstArgs} args - Arguments to find a Numbers
     * @example
     * // Get one Numbers
     * const numbers = await prisma.numbers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NumbersFindFirstArgs>(args?: SelectSubset<T, NumbersFindFirstArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Numbers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersFindFirstOrThrowArgs} args - Arguments to find a Numbers
     * @example
     * // Get one Numbers
     * const numbers = await prisma.numbers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NumbersFindFirstOrThrowArgs>(args?: SelectSubset<T, NumbersFindFirstOrThrowArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Numbers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Numbers
     * const numbers = await prisma.numbers.findMany()
     * 
     * // Get first 10 Numbers
     * const numbers = await prisma.numbers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const numbersWithIdOnly = await prisma.numbers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NumbersFindManyArgs>(args?: SelectSubset<T, NumbersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Numbers.
     * @param {NumbersCreateArgs} args - Arguments to create a Numbers.
     * @example
     * // Create one Numbers
     * const Numbers = await prisma.numbers.create({
     *   data: {
     *     // ... data to create a Numbers
     *   }
     * })
     * 
     */
    create<T extends NumbersCreateArgs>(args: SelectSubset<T, NumbersCreateArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Numbers.
     * @param {NumbersCreateManyArgs} args - Arguments to create many Numbers.
     * @example
     * // Create many Numbers
     * const numbers = await prisma.numbers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NumbersCreateManyArgs>(args?: SelectSubset<T, NumbersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Numbers and returns the data saved in the database.
     * @param {NumbersCreateManyAndReturnArgs} args - Arguments to create many Numbers.
     * @example
     * // Create many Numbers
     * const numbers = await prisma.numbers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Numbers and only return the `id`
     * const numbersWithIdOnly = await prisma.numbers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NumbersCreateManyAndReturnArgs>(args?: SelectSubset<T, NumbersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Numbers.
     * @param {NumbersDeleteArgs} args - Arguments to delete one Numbers.
     * @example
     * // Delete one Numbers
     * const Numbers = await prisma.numbers.delete({
     *   where: {
     *     // ... filter to delete one Numbers
     *   }
     * })
     * 
     */
    delete<T extends NumbersDeleteArgs>(args: SelectSubset<T, NumbersDeleteArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Numbers.
     * @param {NumbersUpdateArgs} args - Arguments to update one Numbers.
     * @example
     * // Update one Numbers
     * const numbers = await prisma.numbers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NumbersUpdateArgs>(args: SelectSubset<T, NumbersUpdateArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Numbers.
     * @param {NumbersDeleteManyArgs} args - Arguments to filter Numbers to delete.
     * @example
     * // Delete a few Numbers
     * const { count } = await prisma.numbers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NumbersDeleteManyArgs>(args?: SelectSubset<T, NumbersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Numbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Numbers
     * const numbers = await prisma.numbers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NumbersUpdateManyArgs>(args: SelectSubset<T, NumbersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Numbers and returns the data updated in the database.
     * @param {NumbersUpdateManyAndReturnArgs} args - Arguments to update many Numbers.
     * @example
     * // Update many Numbers
     * const numbers = await prisma.numbers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Numbers and only return the `id`
     * const numbersWithIdOnly = await prisma.numbers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NumbersUpdateManyAndReturnArgs>(args: SelectSubset<T, NumbersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Numbers.
     * @param {NumbersUpsertArgs} args - Arguments to update or create a Numbers.
     * @example
     * // Update or create a Numbers
     * const numbers = await prisma.numbers.upsert({
     *   create: {
     *     // ... data to create a Numbers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Numbers we want to update
     *   }
     * })
     */
    upsert<T extends NumbersUpsertArgs>(args: SelectSubset<T, NumbersUpsertArgs<ExtArgs>>): Prisma__NumbersClient<$Result.GetResult<Prisma.$NumbersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Numbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersCountArgs} args - Arguments to filter Numbers to count.
     * @example
     * // Count the number of Numbers
     * const count = await prisma.numbers.count({
     *   where: {
     *     // ... the filter for the Numbers we want to count
     *   }
     * })
    **/
    count<T extends NumbersCountArgs>(
      args?: Subset<T, NumbersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NumbersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Numbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NumbersAggregateArgs>(args: Subset<T, NumbersAggregateArgs>): Prisma.PrismaPromise<GetNumbersAggregateType<T>>

    /**
     * Group by Numbers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NumbersGroupByArgs} args - Group by arguments.
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
      T extends NumbersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NumbersGroupByArgs['orderBy'] }
        : { orderBy?: NumbersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NumbersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNumbersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Numbers model
   */
  readonly fields: NumbersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Numbers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NumbersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Numbers model
   */
  interface NumbersFieldRefs {
    readonly id: FieldRef<"Numbers", 'Int'>
    readonly number: FieldRef<"Numbers", 'Int'>
    readonly seller_id: FieldRef<"Numbers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Numbers findUnique
   */
  export type NumbersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter, which Numbers to fetch.
     */
    where: NumbersWhereUniqueInput
  }

  /**
   * Numbers findUniqueOrThrow
   */
  export type NumbersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter, which Numbers to fetch.
     */
    where: NumbersWhereUniqueInput
  }

  /**
   * Numbers findFirst
   */
  export type NumbersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter, which Numbers to fetch.
     */
    where?: NumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Numbers to fetch.
     */
    orderBy?: NumbersOrderByWithRelationInput | NumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Numbers.
     */
    cursor?: NumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Numbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Numbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Numbers.
     */
    distinct?: NumbersScalarFieldEnum | NumbersScalarFieldEnum[]
  }

  /**
   * Numbers findFirstOrThrow
   */
  export type NumbersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter, which Numbers to fetch.
     */
    where?: NumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Numbers to fetch.
     */
    orderBy?: NumbersOrderByWithRelationInput | NumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Numbers.
     */
    cursor?: NumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Numbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Numbers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Numbers.
     */
    distinct?: NumbersScalarFieldEnum | NumbersScalarFieldEnum[]
  }

  /**
   * Numbers findMany
   */
  export type NumbersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter, which Numbers to fetch.
     */
    where?: NumbersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Numbers to fetch.
     */
    orderBy?: NumbersOrderByWithRelationInput | NumbersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Numbers.
     */
    cursor?: NumbersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Numbers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Numbers.
     */
    skip?: number
    distinct?: NumbersScalarFieldEnum | NumbersScalarFieldEnum[]
  }

  /**
   * Numbers create
   */
  export type NumbersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * The data needed to create a Numbers.
     */
    data: XOR<NumbersCreateInput, NumbersUncheckedCreateInput>
  }

  /**
   * Numbers createMany
   */
  export type NumbersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Numbers.
     */
    data: NumbersCreateManyInput | NumbersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Numbers createManyAndReturn
   */
  export type NumbersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * The data used to create many Numbers.
     */
    data: NumbersCreateManyInput | NumbersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Numbers update
   */
  export type NumbersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * The data needed to update a Numbers.
     */
    data: XOR<NumbersUpdateInput, NumbersUncheckedUpdateInput>
    /**
     * Choose, which Numbers to update.
     */
    where: NumbersWhereUniqueInput
  }

  /**
   * Numbers updateMany
   */
  export type NumbersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Numbers.
     */
    data: XOR<NumbersUpdateManyMutationInput, NumbersUncheckedUpdateManyInput>
    /**
     * Filter which Numbers to update
     */
    where?: NumbersWhereInput
    /**
     * Limit how many Numbers to update.
     */
    limit?: number
  }

  /**
   * Numbers updateManyAndReturn
   */
  export type NumbersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * The data used to update Numbers.
     */
    data: XOR<NumbersUpdateManyMutationInput, NumbersUncheckedUpdateManyInput>
    /**
     * Filter which Numbers to update
     */
    where?: NumbersWhereInput
    /**
     * Limit how many Numbers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Numbers upsert
   */
  export type NumbersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * The filter to search for the Numbers to update in case it exists.
     */
    where: NumbersWhereUniqueInput
    /**
     * In case the Numbers found by the `where` argument doesn't exist, create a new Numbers with this data.
     */
    create: XOR<NumbersCreateInput, NumbersUncheckedCreateInput>
    /**
     * In case the Numbers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NumbersUpdateInput, NumbersUncheckedUpdateInput>
  }

  /**
   * Numbers delete
   */
  export type NumbersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
    /**
     * Filter which Numbers to delete.
     */
    where: NumbersWhereUniqueInput
  }

  /**
   * Numbers deleteMany
   */
  export type NumbersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Numbers to delete
     */
    where?: NumbersWhereInput
    /**
     * Limit how many Numbers to delete.
     */
    limit?: number
  }

  /**
   * Numbers without action
   */
  export type NumbersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Numbers
     */
    select?: NumbersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Numbers
     */
    omit?: NumbersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NumbersInclude<ExtArgs> | null
  }


  /**
   * Model Carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
  }

  export type CartsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
  }

  export type CartsCountAggregateOutputType = {
    id: number
    cart: number
    user_id: number
    _all: number
  }


  export type CartsMinAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartsMaxAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartsCountAggregateInputType = {
    id?: true
    cart?: true
    user_id?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to aggregate.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type CartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartsWhereInput
    orderBy?: CartsOrderByWithAggregationInput | CartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: CartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id: string
    cart: JsonValue
    user_id: string
    _count: CartsCountAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends CartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type CartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart?: boolean
    user_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart?: boolean
    user_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart?: boolean
    user_id?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type CartsSelectScalar = {
    id?: boolean
    cart?: boolean
    user_id?: boolean
  }

  export type CartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cart" | "user_id", ExtArgs["result"]["carts"]>
  export type CartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CartsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CartsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carts"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cart: Prisma.JsonValue
      user_id: string
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type CartsGetPayload<S extends boolean | null | undefined | CartsDefaultArgs> = $Result.GetResult<Prisma.$CartsPayload, S>

  type CartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface CartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carts'], meta: { name: 'Carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {CartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartsFindUniqueArgs>(args: SelectSubset<T, CartsFindUniqueArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartsFindUniqueOrThrowArgs>(args: SelectSubset<T, CartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartsFindFirstArgs>(args?: SelectSubset<T, CartsFindFirstArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartsFindFirstOrThrowArgs>(args?: SelectSubset<T, CartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartsFindManyArgs>(args?: SelectSubset<T, CartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {CartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends CartsCreateArgs>(args: SelectSubset<T, CartsCreateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartsCreateManyArgs>(args?: SelectSubset<T, CartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartsCreateManyAndReturnArgs>(args?: SelectSubset<T, CartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carts.
     * @param {CartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends CartsDeleteArgs>(args: SelectSubset<T, CartsDeleteArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {CartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartsUpdateArgs>(args: SelectSubset<T, CartsUpdateArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartsDeleteManyArgs>(args?: SelectSubset<T, CartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartsUpdateManyArgs>(args: SelectSubset<T, CartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartsUpdateManyAndReturnArgs>(args: SelectSubset<T, CartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carts.
     * @param {CartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends CartsUpsertArgs>(args: SelectSubset<T, CartsUpsertArgs<ExtArgs>>): Prisma__CartsClient<$Result.GetResult<Prisma.$CartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartsCountArgs>(
      args?: Subset<T, CartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsGroupByArgs} args - Group by arguments.
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
      T extends CartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartsGroupByArgs['orderBy'] }
        : { orderBy?: CartsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carts model
   */
  readonly fields: CartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carts model
   */
  interface CartsFieldRefs {
    readonly id: FieldRef<"Carts", 'String'>
    readonly cart: FieldRef<"Carts", 'Json'>
    readonly user_id: FieldRef<"Carts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Carts findUnique
   */
  export type CartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findUniqueOrThrow
   */
  export type CartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts findFirst
   */
  export type CartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts findFirstOrThrow
   */
  export type CartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts findMany
   */
  export type CartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartsOrderByWithRelationInput | CartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * Carts create
   */
  export type CartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to create a Carts.
     */
    data: XOR<CartsCreateInput, CartsUncheckedCreateInput>
  }

  /**
   * Carts createMany
   */
  export type CartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carts createManyAndReturn
   */
  export type CartsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartsCreateManyInput | CartsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carts update
   */
  export type CartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The data needed to update a Carts.
     */
    data: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
    /**
     * Choose, which Carts to update.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts updateMany
   */
  export type CartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Carts updateManyAndReturn
   */
  export type CartsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Carts upsert
   */
  export type CartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * The filter to search for the Carts to update in case it exists.
     */
    where: CartsWhereUniqueInput
    /**
     * In case the Carts found by the `where` argument doesn't exist, create a new Carts with this data.
     */
    create: XOR<CartsCreateInput, CartsUncheckedCreateInput>
    /**
     * In case the Carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartsUpdateInput, CartsUncheckedUpdateInput>
  }

  /**
   * Carts delete
   */
  export type CartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
    /**
     * Filter which Carts to delete.
     */
    where: CartsWhereUniqueInput
  }

  /**
   * Carts deleteMany
   */
  export type CartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartsWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Carts without action
   */
  export type CartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carts
     */
    select?: CartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carts
     */
    omit?: CartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartsInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    buyer_id: string | null
    seller_id: string | null
    order_status: string | null
    order_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    buyer_id: string | null
    seller_id: string | null
    order_status: string | null
    order_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    article_details: number
    buyer_id: number
    seller_id: number
    order_status: number
    order_date: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersMinAggregateInputType = {
    id?: true
    buyer_id?: true
    seller_id?: true
    order_status?: true
    order_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    buyer_id?: true
    seller_id?: true
    order_status?: true
    order_date?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    article_details?: true
    buyer_id?: true
    seller_id?: true
    order_status?: true
    order_date?: true
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
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    article_details: JsonValue
    buyer_id: string
    seller_id: string
    order_status: string
    order_date: Date
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
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
    id?: boolean
    article_details?: boolean
    buyer_id?: boolean
    seller_id?: boolean
    order_status?: boolean
    order_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Buyer?: boolean | UserDefaultArgs<ExtArgs>
    Seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    article_details?: boolean
    buyer_id?: boolean
    seller_id?: boolean
    order_status?: boolean
    order_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Buyer?: boolean | UserDefaultArgs<ExtArgs>
    Seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    article_details?: boolean
    buyer_id?: boolean
    seller_id?: boolean
    order_status?: boolean
    order_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Buyer?: boolean | UserDefaultArgs<ExtArgs>
    Seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    article_details?: boolean
    buyer_id?: boolean
    seller_id?: boolean
    order_status?: boolean
    order_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "article_details" | "buyer_id" | "seller_id" | "order_status" | "order_date" | "createdAt" | "updatedAt", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Buyer?: boolean | UserDefaultArgs<ExtArgs>
    Seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Buyer?: boolean | UserDefaultArgs<ExtArgs>
    Seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Buyer?: boolean | UserDefaultArgs<ExtArgs>
    Seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      Buyer: Prisma.$UserPayload<ExtArgs>
      Seller: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      article_details: Prisma.JsonValue
      buyer_id: string
      seller_id: string
      order_status: string
      order_date: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'String'>
    readonly article_details: FieldRef<"Orders", 'Json'>
    readonly buyer_id: FieldRef<"Orders", 'String'>
    readonly seller_id: FieldRef<"Orders", 'String'>
    readonly order_status: FieldRef<"Orders", 'String'>
    readonly order_date: FieldRef<"Orders", 'DateTime'>
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
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
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
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date | null
    updatedAt: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    vendeur: 'vendeur',
    code: 'code',
    address: 'address',
    image: 'image',
    certified: 'certified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ArticleRatesScalarFieldEnum: {
    rate: 'rate',
    seller_id: 'seller_id',
    article_id: 'article_id'
  };

  export type ArticleRatesScalarFieldEnum = (typeof ArticleRatesScalarFieldEnum)[keyof typeof ArticleRatesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    name: 'name',
    description: 'description',
    image: 'image'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ArticlesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    images: 'images',
    category: 'category',
    description: 'description',
    price: 'price',
    stock: 'stock',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ArticlesScalarFieldEnum = (typeof ArticlesScalarFieldEnum)[keyof typeof ArticlesScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    article_id: 'article_id',
    buyer_id: 'buyer_id',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    message: 'message',
    sender_id: 'sender_id',
    receiver_id: 'receiver_id',
    article_id: 'article_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const NumbersScalarFieldEnum: {
    id: 'id',
    number: 'number',
    seller_id: 'seller_id'
  };

  export type NumbersScalarFieldEnum = (typeof NumbersScalarFieldEnum)[keyof typeof NumbersScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id: 'id',
    cart: 'cart',
    user_id: 'user_id'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    article_details: 'article_details',
    buyer_id: 'buyer_id',
    seller_id: 'seller_id',
    order_status: 'order_status',
    order_date: 'order_date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    vendeur?: BoolFilter<"User"> | boolean
    code?: IntNullableFilter<"User"> | number | null
    address?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    certified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Articles?: ArticlesListRelationFilter
    Comments?: CommentsListRelationFilter
    MessagesSent?: MessagesListRelationFilter
    MessagesReceived?: MessagesListRelationFilter
    OrdersBuyer?: OrdersListRelationFilter
    OrdersSeller?: OrdersListRelationFilter
    Carts?: CartsListRelationFilter
    Account?: AccountListRelationFilter
    Session?: SessionListRelationFilter
    Numbers?: NumbersListRelationFilter
    Appreciations?: ArticleRatesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    vendeur?: SortOrder
    code?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    certified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Articles?: ArticlesOrderByRelationAggregateInput
    Comments?: CommentsOrderByRelationAggregateInput
    MessagesSent?: MessagesOrderByRelationAggregateInput
    MessagesReceived?: MessagesOrderByRelationAggregateInput
    OrdersBuyer?: OrdersOrderByRelationAggregateInput
    OrdersSeller?: OrdersOrderByRelationAggregateInput
    Carts?: CartsOrderByRelationAggregateInput
    Account?: AccountOrderByRelationAggregateInput
    Session?: SessionOrderByRelationAggregateInput
    Numbers?: NumbersOrderByRelationAggregateInput
    Appreciations?: ArticleRatesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    vendeur?: BoolFilter<"User"> | boolean
    code?: IntNullableFilter<"User"> | number | null
    address?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    certified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Articles?: ArticlesListRelationFilter
    Comments?: CommentsListRelationFilter
    MessagesSent?: MessagesListRelationFilter
    MessagesReceived?: MessagesListRelationFilter
    OrdersBuyer?: OrdersListRelationFilter
    OrdersSeller?: OrdersListRelationFilter
    Carts?: CartsListRelationFilter
    Account?: AccountListRelationFilter
    Session?: SessionListRelationFilter
    Numbers?: NumbersListRelationFilter
    Appreciations?: ArticleRatesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    vendeur?: SortOrder
    code?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    certified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    vendeur?: BoolWithAggregatesFilter<"User"> | boolean
    code?: IntNullableWithAggregatesFilter<"User"> | number | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    certified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ArticleRatesWhereInput = {
    AND?: ArticleRatesWhereInput | ArticleRatesWhereInput[]
    OR?: ArticleRatesWhereInput[]
    NOT?: ArticleRatesWhereInput | ArticleRatesWhereInput[]
    rate?: FloatFilter<"ArticleRates"> | number
    seller_id?: StringFilter<"ArticleRates"> | string
    article_id?: StringFilter<"ArticleRates"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Articles?: XOR<ArticlesScalarRelationFilter, ArticlesWhereInput>
  }

  export type ArticleRatesOrderByWithRelationInput = {
    rate?: SortOrder
    seller_id?: SortOrder
    article_id?: SortOrder
    User?: UserOrderByWithRelationInput
    Articles?: ArticlesOrderByWithRelationInput
  }

  export type ArticleRatesWhereUniqueInput = Prisma.AtLeast<{
    rate?: number
    AND?: ArticleRatesWhereInput | ArticleRatesWhereInput[]
    OR?: ArticleRatesWhereInput[]
    NOT?: ArticleRatesWhereInput | ArticleRatesWhereInput[]
    seller_id?: StringFilter<"ArticleRates"> | string
    article_id?: StringFilter<"ArticleRates"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Articles?: XOR<ArticlesScalarRelationFilter, ArticlesWhereInput>
  }, "rate">

  export type ArticleRatesOrderByWithAggregationInput = {
    rate?: SortOrder
    seller_id?: SortOrder
    article_id?: SortOrder
    _count?: ArticleRatesCountOrderByAggregateInput
    _avg?: ArticleRatesAvgOrderByAggregateInput
    _max?: ArticleRatesMaxOrderByAggregateInput
    _min?: ArticleRatesMinOrderByAggregateInput
    _sum?: ArticleRatesSumOrderByAggregateInput
  }

  export type ArticleRatesScalarWhereWithAggregatesInput = {
    AND?: ArticleRatesScalarWhereWithAggregatesInput | ArticleRatesScalarWhereWithAggregatesInput[]
    OR?: ArticleRatesScalarWhereWithAggregatesInput[]
    NOT?: ArticleRatesScalarWhereWithAggregatesInput | ArticleRatesScalarWhereWithAggregatesInput[]
    rate?: FloatWithAggregatesFilter<"ArticleRates"> | number
    seller_id?: StringWithAggregatesFilter<"ArticleRates"> | string
    article_id?: StringWithAggregatesFilter<"ArticleRates"> | string
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    description?: StringNullableFilter<"Categories"> | string | null
    image?: StringNullableFilter<"Categories"> | string | null
  }

  export type CategoriesOrderByWithRelationInput = {
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    description?: StringNullableFilter<"Categories"> | string | null
    image?: StringNullableFilter<"Categories"> | string | null
  }, "name">

  export type CategoriesOrderByWithAggregationInput = {
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Categories"> | string
    description?: StringNullableWithAggregatesFilter<"Categories"> | string | null
    image?: StringNullableWithAggregatesFilter<"Categories"> | string | null
  }

  export type ArticlesWhereInput = {
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    id?: StringFilter<"Articles"> | string
    userId?: StringFilter<"Articles"> | string
    title?: StringFilter<"Articles"> | string
    images?: StringNullableListFilter<"Articles">
    category?: StringNullableListFilter<"Articles">
    description?: StringFilter<"Articles"> | string
    price?: IntFilter<"Articles"> | number
    stock?: IntFilter<"Articles"> | number
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Comments?: CommentsListRelationFilter
    Messages?: MessagesListRelationFilter
    Appreciations?: ArticleRatesListRelationFilter
  }

  export type ArticlesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    images?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Comments?: CommentsOrderByRelationAggregateInput
    Messages?: MessagesOrderByRelationAggregateInput
    Appreciations?: ArticleRatesOrderByRelationAggregateInput
  }

  export type ArticlesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArticlesWhereInput | ArticlesWhereInput[]
    OR?: ArticlesWhereInput[]
    NOT?: ArticlesWhereInput | ArticlesWhereInput[]
    userId?: StringFilter<"Articles"> | string
    title?: StringFilter<"Articles"> | string
    images?: StringNullableListFilter<"Articles">
    category?: StringNullableListFilter<"Articles">
    description?: StringFilter<"Articles"> | string
    price?: IntFilter<"Articles"> | number
    stock?: IntFilter<"Articles"> | number
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Comments?: CommentsListRelationFilter
    Messages?: MessagesListRelationFilter
    Appreciations?: ArticleRatesListRelationFilter
  }, "id">

  export type ArticlesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    images?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ArticlesCountOrderByAggregateInput
    _avg?: ArticlesAvgOrderByAggregateInput
    _max?: ArticlesMaxOrderByAggregateInput
    _min?: ArticlesMinOrderByAggregateInput
    _sum?: ArticlesSumOrderByAggregateInput
  }

  export type ArticlesScalarWhereWithAggregatesInput = {
    AND?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    OR?: ArticlesScalarWhereWithAggregatesInput[]
    NOT?: ArticlesScalarWhereWithAggregatesInput | ArticlesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Articles"> | string
    userId?: StringWithAggregatesFilter<"Articles"> | string
    title?: StringWithAggregatesFilter<"Articles"> | string
    images?: StringNullableListFilter<"Articles">
    category?: StringNullableListFilter<"Articles">
    description?: StringWithAggregatesFilter<"Articles"> | string
    price?: IntWithAggregatesFilter<"Articles"> | number
    stock?: IntWithAggregatesFilter<"Articles"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Articles"> | Date | string
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<"Comments"> | string
    article_id?: StringFilter<"Comments"> | string
    buyer_id?: StringFilter<"Comments"> | string
    comment?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    Articles?: XOR<ArticlesScalarRelationFilter, ArticlesWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    article_id?: SortOrder
    buyer_id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Articles?: ArticlesOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    article_id?: StringFilter<"Comments"> | string
    buyer_id?: StringFilter<"Comments"> | string
    comment?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
    Articles?: XOR<ArticlesScalarRelationFilter, ArticlesWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    article_id?: SortOrder
    buyer_id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comments"> | string
    article_id?: StringWithAggregatesFilter<"Comments"> | string
    buyer_id?: StringWithAggregatesFilter<"Comments"> | string
    comment?: StringWithAggregatesFilter<"Comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: StringFilter<"Messages"> | string
    message?: StringFilter<"Messages"> | string
    sender_id?: StringFilter<"Messages"> | string
    receiver_id?: StringFilter<"Messages"> | string
    article_id?: StringNullableFilter<"Messages"> | string | null
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeFilter<"Messages"> | Date | string
    Sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    Receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    Articles?: XOR<ArticlesNullableScalarRelationFilter, ArticlesWhereInput> | null
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    article_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Sender?: UserOrderByWithRelationInput
    Receiver?: UserOrderByWithRelationInput
    Articles?: ArticlesOrderByWithRelationInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    message?: StringFilter<"Messages"> | string
    sender_id?: StringFilter<"Messages"> | string
    receiver_id?: StringFilter<"Messages"> | string
    article_id?: StringNullableFilter<"Messages"> | string | null
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeFilter<"Messages"> | Date | string
    Sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    Receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    Articles?: XOR<ArticlesNullableScalarRelationFilter, ArticlesWhereInput> | null
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    article_id?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Messages"> | string
    message?: StringWithAggregatesFilter<"Messages"> | string
    sender_id?: StringWithAggregatesFilter<"Messages"> | string
    receiver_id?: StringWithAggregatesFilter<"Messages"> | string
    article_id?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
  }

  export type NumbersWhereInput = {
    AND?: NumbersWhereInput | NumbersWhereInput[]
    OR?: NumbersWhereInput[]
    NOT?: NumbersWhereInput | NumbersWhereInput[]
    id?: IntFilter<"Numbers"> | number
    number?: IntFilter<"Numbers"> | number
    seller_id?: StringFilter<"Numbers"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NumbersOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    seller_id?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type NumbersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: number
    AND?: NumbersWhereInput | NumbersWhereInput[]
    OR?: NumbersWhereInput[]
    NOT?: NumbersWhereInput | NumbersWhereInput[]
    seller_id?: StringFilter<"Numbers"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "number">

  export type NumbersOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    seller_id?: SortOrder
    _count?: NumbersCountOrderByAggregateInput
    _avg?: NumbersAvgOrderByAggregateInput
    _max?: NumbersMaxOrderByAggregateInput
    _min?: NumbersMinOrderByAggregateInput
    _sum?: NumbersSumOrderByAggregateInput
  }

  export type NumbersScalarWhereWithAggregatesInput = {
    AND?: NumbersScalarWhereWithAggregatesInput | NumbersScalarWhereWithAggregatesInput[]
    OR?: NumbersScalarWhereWithAggregatesInput[]
    NOT?: NumbersScalarWhereWithAggregatesInput | NumbersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Numbers"> | number
    number?: IntWithAggregatesFilter<"Numbers"> | number
    seller_id?: StringWithAggregatesFilter<"Numbers"> | string
  }

  export type CartsWhereInput = {
    AND?: CartsWhereInput | CartsWhereInput[]
    OR?: CartsWhereInput[]
    NOT?: CartsWhereInput | CartsWhereInput[]
    id?: StringFilter<"Carts"> | string
    cart?: JsonFilter<"Carts">
    user_id?: StringFilter<"Carts"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CartsOrderByWithRelationInput = {
    id?: SortOrder
    cart?: SortOrder
    user_id?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type CartsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartsWhereInput | CartsWhereInput[]
    OR?: CartsWhereInput[]
    NOT?: CartsWhereInput | CartsWhereInput[]
    cart?: JsonFilter<"Carts">
    user_id?: StringFilter<"Carts"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CartsOrderByWithAggregationInput = {
    id?: SortOrder
    cart?: SortOrder
    user_id?: SortOrder
    _count?: CartsCountOrderByAggregateInput
    _max?: CartsMaxOrderByAggregateInput
    _min?: CartsMinOrderByAggregateInput
  }

  export type CartsScalarWhereWithAggregatesInput = {
    AND?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[]
    OR?: CartsScalarWhereWithAggregatesInput[]
    NOT?: CartsScalarWhereWithAggregatesInput | CartsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Carts"> | string
    cart?: JsonWithAggregatesFilter<"Carts">
    user_id?: StringWithAggregatesFilter<"Carts"> | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: StringFilter<"Orders"> | string
    article_details?: JsonFilter<"Orders">
    buyer_id?: StringFilter<"Orders"> | string
    seller_id?: StringFilter<"Orders"> | string
    order_status?: StringFilter<"Orders"> | string
    order_date?: DateTimeFilter<"Orders"> | Date | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    Buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    Seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    article_details?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    order_status?: SortOrder
    order_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Buyer?: UserOrderByWithRelationInput
    Seller?: UserOrderByWithRelationInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    article_details?: JsonFilter<"Orders">
    buyer_id?: StringFilter<"Orders"> | string
    seller_id?: StringFilter<"Orders"> | string
    order_status?: StringFilter<"Orders"> | string
    order_date?: DateTimeFilter<"Orders"> | Date | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    Buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    Seller?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    article_details?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    order_status?: SortOrder
    order_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orders"> | string
    article_details?: JsonWithAggregatesFilter<"Orders">
    buyer_id?: StringWithAggregatesFilter<"Orders"> | string
    seller_id?: StringWithAggregatesFilter<"Orders"> | string
    order_status?: StringWithAggregatesFilter<"Orders"> | string
    order_date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleRatesCreateInput = {
    rate: number
    User: UserCreateNestedOneWithoutAppreciationsInput
    Articles: ArticlesCreateNestedOneWithoutAppreciationsInput
  }

  export type ArticleRatesUncheckedCreateInput = {
    rate: number
    seller_id: string
    article_id: string
  }

  export type ArticleRatesUpdateInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutAppreciationsNestedInput
    Articles?: ArticlesUpdateOneRequiredWithoutAppreciationsNestedInput
  }

  export type ArticleRatesUncheckedUpdateInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    seller_id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleRatesCreateManyInput = {
    rate: number
    seller_id: string
    article_id: string
  }

  export type ArticleRatesUpdateManyMutationInput = {
    rate?: FloatFieldUpdateOperationsInput | number
  }

  export type ArticleRatesUncheckedUpdateManyInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    seller_id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriesCreateInput = {
    name: string
    description?: string | null
    image?: string | null
  }

  export type CategoriesUncheckedCreateInput = {
    name: string
    description?: string | null
    image?: string | null
  }

  export type CategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriesUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriesCreateManyInput = {
    name: string
    description?: string | null
    image?: string | null
  }

  export type CategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoriesUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArticlesCreateInput = {
    id?: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutArticlesInput
    Comments?: CommentsCreateNestedManyWithoutArticlesInput
    Messages?: MessagesCreateNestedManyWithoutArticlesInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutArticlesInput
    Messages?: MessagesUncheckedCreateNestedManyWithoutArticlesInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutArticlesNestedInput
    Comments?: CommentsUpdateManyWithoutArticlesNestedInput
    Messages?: MessagesUpdateManyWithoutArticlesNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutArticlesNestedInput
    Messages?: MessagesUncheckedUpdateManyWithoutArticlesNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type ArticlesCreateManyInput = {
    id?: string
    userId: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticlesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticlesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles: ArticlesCreateNestedOneWithoutCommentsInput
    User: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    article_id: string
    buyer_id: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateOneRequiredWithoutCommentsNestedInput
    User?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
    buyer_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyInput = {
    id?: string
    article_id: string
    buyer_id: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
    buyer_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Sender: UserCreateNestedOneWithoutMessagesSentInput
    Receiver: UserCreateNestedOneWithoutMessagesReceivedInput
    Articles?: ArticlesCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateInput = {
    id?: string
    message: string
    sender_id: string
    receiver_id: string
    article_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    Receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
    Articles?: ArticlesUpdateOneWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    article_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesCreateManyInput = {
    id?: string
    message: string
    sender_id: string
    receiver_id: string
    article_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    article_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NumbersCreateInput = {
    id: number
    number: number
    User: UserCreateNestedOneWithoutNumbersInput
  }

  export type NumbersUncheckedCreateInput = {
    id: number
    number: number
    seller_id: string
  }

  export type NumbersUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutNumbersNestedInput
  }

  export type NumbersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    seller_id?: StringFieldUpdateOperationsInput | string
  }

  export type NumbersCreateManyInput = {
    id: number
    number: number
    seller_id: string
  }

  export type NumbersUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
  }

  export type NumbersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    seller_id?: StringFieldUpdateOperationsInput | string
  }

  export type CartsCreateInput = {
    id?: string
    cart: JsonNullValueInput | InputJsonValue
    User: UserCreateNestedOneWithoutCartsInput
  }

  export type CartsUncheckedCreateInput = {
    id?: string
    cart: JsonNullValueInput | InputJsonValue
    user_id: string
  }

  export type CartsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart?: JsonNullValueInput | InputJsonValue
    User?: UserUpdateOneRequiredWithoutCartsNestedInput
  }

  export type CartsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart?: JsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type CartsCreateManyInput = {
    id?: string
    cart: JsonNullValueInput | InputJsonValue
    user_id: string
  }

  export type CartsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart?: JsonNullValueInput | InputJsonValue
  }

  export type CartsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart?: JsonNullValueInput | InputJsonValue
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersCreateInput = {
    id?: string
    article_details: JsonNullValueInput | InputJsonValue
    order_status?: string
    order_date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Buyer: UserCreateNestedOneWithoutOrdersBuyerInput
    Seller: UserCreateNestedOneWithoutOrdersSellerInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: string
    article_details: JsonNullValueInput | InputJsonValue
    buyer_id: string
    seller_id: string
    order_status?: string
    order_date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_details?: JsonNullValueInput | InputJsonValue
    order_status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Buyer?: UserUpdateOneRequiredWithoutOrdersBuyerNestedInput
    Seller?: UserUpdateOneRequiredWithoutOrdersSellerNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_details?: JsonNullValueInput | InputJsonValue
    buyer_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateManyInput = {
    id?: string
    article_details: JsonNullValueInput | InputJsonValue
    buyer_id: string
    seller_id: string
    order_status?: string
    order_date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_details?: JsonNullValueInput | InputJsonValue
    order_status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_details?: JsonNullValueInput | InputJsonValue
    buyer_id?: StringFieldUpdateOperationsInput | string
    seller_id?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    user: UserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ArticlesListRelationFilter = {
    every?: ArticlesWhereInput
    some?: ArticlesWhereInput
    none?: ArticlesWhereInput
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type CartsListRelationFilter = {
    every?: CartsWhereInput
    some?: CartsWhereInput
    none?: CartsWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type NumbersListRelationFilter = {
    every?: NumbersWhereInput
    some?: NumbersWhereInput
    none?: NumbersWhereInput
  }

  export type ArticleRatesListRelationFilter = {
    every?: ArticleRatesWhereInput
    some?: ArticleRatesWhereInput
    none?: ArticleRatesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArticlesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NumbersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArticleRatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    vendeur?: SortOrder
    code?: SortOrder
    address?: SortOrder
    image?: SortOrder
    certified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    code?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    vendeur?: SortOrder
    code?: SortOrder
    address?: SortOrder
    image?: SortOrder
    certified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    vendeur?: SortOrder
    code?: SortOrder
    address?: SortOrder
    image?: SortOrder
    certified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    code?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ArticlesScalarRelationFilter = {
    is?: ArticlesWhereInput
    isNot?: ArticlesWhereInput
  }

  export type ArticleRatesCountOrderByAggregateInput = {
    rate?: SortOrder
    seller_id?: SortOrder
    article_id?: SortOrder
  }

  export type ArticleRatesAvgOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type ArticleRatesMaxOrderByAggregateInput = {
    rate?: SortOrder
    seller_id?: SortOrder
    article_id?: SortOrder
  }

  export type ArticleRatesMinOrderByAggregateInput = {
    rate?: SortOrder
    seller_id?: SortOrder
    article_id?: SortOrder
  }

  export type ArticleRatesSumOrderByAggregateInput = {
    rate?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CategoriesCountOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ArticlesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    images?: SortOrder
    category?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type ArticlesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    buyer_id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    buyer_id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    article_id?: SortOrder
    buyer_id?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesNullableScalarRelationFilter = {
    is?: ArticlesWhereInput | null
    isNot?: ArticlesWhereInput | null
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    article_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    article_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    article_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NumbersCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    seller_id?: SortOrder
  }

  export type NumbersAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type NumbersMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    seller_id?: SortOrder
  }

  export type NumbersMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    seller_id?: SortOrder
  }

  export type NumbersSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CartsCountOrderByAggregateInput = {
    id?: SortOrder
    cart?: SortOrder
    user_id?: SortOrder
  }

  export type CartsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CartsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    article_details?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    order_status?: SortOrder
    order_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    order_status?: SortOrder
    order_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    buyer_id?: SortOrder
    seller_id?: SortOrder
    order_status?: SortOrder
    order_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ArticlesCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticlesCreateWithoutUserInput, ArticlesUncheckedCreateWithoutUserInput> | ArticlesCreateWithoutUserInput[] | ArticlesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUserInput | ArticlesCreateOrConnectWithoutUserInput[]
    createMany?: ArticlesCreateManyUserInputEnvelope
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
  }

  export type CommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput> | OrdersCreateWithoutBuyerInput[] | OrdersUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBuyerInput | OrdersCreateOrConnectWithoutBuyerInput[]
    createMany?: OrdersCreateManyBuyerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersCreateNestedManyWithoutSellerInput = {
    create?: XOR<OrdersCreateWithoutSellerInput, OrdersUncheckedCreateWithoutSellerInput> | OrdersCreateWithoutSellerInput[] | OrdersUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutSellerInput | OrdersCreateOrConnectWithoutSellerInput[]
    createMany?: OrdersCreateManySellerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type CartsCreateNestedManyWithoutUserInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NumbersCreateNestedManyWithoutUserInput = {
    create?: XOR<NumbersCreateWithoutUserInput, NumbersUncheckedCreateWithoutUserInput> | NumbersCreateWithoutUserInput[] | NumbersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NumbersCreateOrConnectWithoutUserInput | NumbersCreateOrConnectWithoutUserInput[]
    createMany?: NumbersCreateManyUserInputEnvelope
    connect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
  }

  export type ArticleRatesCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleRatesCreateWithoutUserInput, ArticleRatesUncheckedCreateWithoutUserInput> | ArticleRatesCreateWithoutUserInput[] | ArticleRatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleRatesCreateOrConnectWithoutUserInput | ArticleRatesCreateOrConnectWithoutUserInput[]
    createMany?: ArticleRatesCreateManyUserInputEnvelope
    connect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
  }

  export type ArticlesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticlesCreateWithoutUserInput, ArticlesUncheckedCreateWithoutUserInput> | ArticlesCreateWithoutUserInput[] | ArticlesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUserInput | ArticlesCreateOrConnectWithoutUserInput[]
    createMany?: ArticlesCreateManyUserInputEnvelope
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput> | OrdersCreateWithoutBuyerInput[] | OrdersUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBuyerInput | OrdersCreateOrConnectWithoutBuyerInput[]
    createMany?: OrdersCreateManyBuyerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<OrdersCreateWithoutSellerInput, OrdersUncheckedCreateWithoutSellerInput> | OrdersCreateWithoutSellerInput[] | OrdersUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutSellerInput | OrdersCreateOrConnectWithoutSellerInput[]
    createMany?: OrdersCreateManySellerInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type CartsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type NumbersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NumbersCreateWithoutUserInput, NumbersUncheckedCreateWithoutUserInput> | NumbersCreateWithoutUserInput[] | NumbersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NumbersCreateOrConnectWithoutUserInput | NumbersCreateOrConnectWithoutUserInput[]
    createMany?: NumbersCreateManyUserInputEnvelope
    connect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
  }

  export type ArticleRatesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ArticleRatesCreateWithoutUserInput, ArticleRatesUncheckedCreateWithoutUserInput> | ArticleRatesCreateWithoutUserInput[] | ArticleRatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleRatesCreateOrConnectWithoutUserInput | ArticleRatesCreateOrConnectWithoutUserInput[]
    createMany?: ArticleRatesCreateManyUserInputEnvelope
    connect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ArticlesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticlesCreateWithoutUserInput, ArticlesUncheckedCreateWithoutUserInput> | ArticlesCreateWithoutUserInput[] | ArticlesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUserInput | ArticlesCreateOrConnectWithoutUserInput[]
    upsert?: ArticlesUpsertWithWhereUniqueWithoutUserInput | ArticlesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticlesCreateManyUserInputEnvelope
    set?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    disconnect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    delete?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    update?: ArticlesUpdateWithWhereUniqueWithoutUserInput | ArticlesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticlesUpdateManyWithWhereWithoutUserInput | ArticlesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
  }

  export type CommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutReceiverInput | MessagesUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutReceiverInput | MessagesUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutReceiverInput | MessagesUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput> | OrdersCreateWithoutBuyerInput[] | OrdersUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBuyerInput | OrdersCreateOrConnectWithoutBuyerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutBuyerInput | OrdersUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrdersCreateManyBuyerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutBuyerInput | OrdersUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutBuyerInput | OrdersUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OrdersCreateWithoutSellerInput, OrdersUncheckedCreateWithoutSellerInput> | OrdersCreateWithoutSellerInput[] | OrdersUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutSellerInput | OrdersCreateOrConnectWithoutSellerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutSellerInput | OrdersUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OrdersCreateManySellerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutSellerInput | OrdersUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutSellerInput | OrdersUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type CartsUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutUserInput | CartsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutUserInput | CartsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutUserInput | CartsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NumbersUpdateManyWithoutUserNestedInput = {
    create?: XOR<NumbersCreateWithoutUserInput, NumbersUncheckedCreateWithoutUserInput> | NumbersCreateWithoutUserInput[] | NumbersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NumbersCreateOrConnectWithoutUserInput | NumbersCreateOrConnectWithoutUserInput[]
    upsert?: NumbersUpsertWithWhereUniqueWithoutUserInput | NumbersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NumbersCreateManyUserInputEnvelope
    set?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    disconnect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    delete?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    connect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    update?: NumbersUpdateWithWhereUniqueWithoutUserInput | NumbersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NumbersUpdateManyWithWhereWithoutUserInput | NumbersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NumbersScalarWhereInput | NumbersScalarWhereInput[]
  }

  export type ArticleRatesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleRatesCreateWithoutUserInput, ArticleRatesUncheckedCreateWithoutUserInput> | ArticleRatesCreateWithoutUserInput[] | ArticleRatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleRatesCreateOrConnectWithoutUserInput | ArticleRatesCreateOrConnectWithoutUserInput[]
    upsert?: ArticleRatesUpsertWithWhereUniqueWithoutUserInput | ArticleRatesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleRatesCreateManyUserInputEnvelope
    set?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    disconnect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    delete?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    connect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    update?: ArticleRatesUpdateWithWhereUniqueWithoutUserInput | ArticleRatesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleRatesUpdateManyWithWhereWithoutUserInput | ArticleRatesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleRatesScalarWhereInput | ArticleRatesScalarWhereInput[]
  }

  export type ArticlesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticlesCreateWithoutUserInput, ArticlesUncheckedCreateWithoutUserInput> | ArticlesCreateWithoutUserInput[] | ArticlesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticlesCreateOrConnectWithoutUserInput | ArticlesCreateOrConnectWithoutUserInput[]
    upsert?: ArticlesUpsertWithWhereUniqueWithoutUserInput | ArticlesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticlesCreateManyUserInputEnvelope
    set?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    disconnect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    delete?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    connect?: ArticlesWhereUniqueInput | ArticlesWhereUniqueInput[]
    update?: ArticlesUpdateWithWhereUniqueWithoutUserInput | ArticlesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticlesUpdateManyWithWhereWithoutUserInput | ArticlesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput> | CommentsCreateWithoutUserInput[] | CommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUserInput | CommentsCreateOrConnectWithoutUserInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUserInput | CommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentsCreateManyUserInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUserInput | CommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUserInput | CommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutReceiverInput | MessagesUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutReceiverInput | MessagesUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutReceiverInput | MessagesUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput> | OrdersCreateWithoutBuyerInput[] | OrdersUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutBuyerInput | OrdersCreateOrConnectWithoutBuyerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutBuyerInput | OrdersUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrdersCreateManyBuyerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutBuyerInput | OrdersUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutBuyerInput | OrdersUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OrdersCreateWithoutSellerInput, OrdersUncheckedCreateWithoutSellerInput> | OrdersCreateWithoutSellerInput[] | OrdersUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutSellerInput | OrdersCreateOrConnectWithoutSellerInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutSellerInput | OrdersUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OrdersCreateManySellerInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutSellerInput | OrdersUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutSellerInput | OrdersUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type CartsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput> | CartsCreateWithoutUserInput[] | CartsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CartsCreateOrConnectWithoutUserInput | CartsCreateOrConnectWithoutUserInput[]
    upsert?: CartsUpsertWithWhereUniqueWithoutUserInput | CartsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CartsCreateManyUserInputEnvelope
    set?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    disconnect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    delete?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    connect?: CartsWhereUniqueInput | CartsWhereUniqueInput[]
    update?: CartsUpdateWithWhereUniqueWithoutUserInput | CartsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CartsUpdateManyWithWhereWithoutUserInput | CartsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CartsScalarWhereInput | CartsScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NumbersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NumbersCreateWithoutUserInput, NumbersUncheckedCreateWithoutUserInput> | NumbersCreateWithoutUserInput[] | NumbersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NumbersCreateOrConnectWithoutUserInput | NumbersCreateOrConnectWithoutUserInput[]
    upsert?: NumbersUpsertWithWhereUniqueWithoutUserInput | NumbersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NumbersCreateManyUserInputEnvelope
    set?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    disconnect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    delete?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    connect?: NumbersWhereUniqueInput | NumbersWhereUniqueInput[]
    update?: NumbersUpdateWithWhereUniqueWithoutUserInput | NumbersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NumbersUpdateManyWithWhereWithoutUserInput | NumbersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NumbersScalarWhereInput | NumbersScalarWhereInput[]
  }

  export type ArticleRatesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ArticleRatesCreateWithoutUserInput, ArticleRatesUncheckedCreateWithoutUserInput> | ArticleRatesCreateWithoutUserInput[] | ArticleRatesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ArticleRatesCreateOrConnectWithoutUserInput | ArticleRatesCreateOrConnectWithoutUserInput[]
    upsert?: ArticleRatesUpsertWithWhereUniqueWithoutUserInput | ArticleRatesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ArticleRatesCreateManyUserInputEnvelope
    set?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    disconnect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    delete?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    connect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    update?: ArticleRatesUpdateWithWhereUniqueWithoutUserInput | ArticleRatesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ArticleRatesUpdateManyWithWhereWithoutUserInput | ArticleRatesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ArticleRatesScalarWhereInput | ArticleRatesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAppreciationsInput = {
    create?: XOR<UserCreateWithoutAppreciationsInput, UserUncheckedCreateWithoutAppreciationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppreciationsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticlesCreateNestedOneWithoutAppreciationsInput = {
    create?: XOR<ArticlesCreateWithoutAppreciationsInput, ArticlesUncheckedCreateWithoutAppreciationsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutAppreciationsInput
    connect?: ArticlesWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAppreciationsNestedInput = {
    create?: XOR<UserCreateWithoutAppreciationsInput, UserUncheckedCreateWithoutAppreciationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAppreciationsInput
    upsert?: UserUpsertWithoutAppreciationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAppreciationsInput, UserUpdateWithoutAppreciationsInput>, UserUncheckedUpdateWithoutAppreciationsInput>
  }

  export type ArticlesUpdateOneRequiredWithoutAppreciationsNestedInput = {
    create?: XOR<ArticlesCreateWithoutAppreciationsInput, ArticlesUncheckedCreateWithoutAppreciationsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutAppreciationsInput
    upsert?: ArticlesUpsertWithoutAppreciationsInput
    connect?: ArticlesWhereUniqueInput
    update?: XOR<XOR<ArticlesUpdateToOneWithWhereWithoutAppreciationsInput, ArticlesUpdateWithoutAppreciationsInput>, ArticlesUncheckedUpdateWithoutAppreciationsInput>
  }

  export type ArticlesCreateimagesInput = {
    set: string[]
  }

  export type ArticlesCreatecategoryInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutArticlesInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    connect?: UserWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutArticlesInput = {
    create?: XOR<CommentsCreateWithoutArticlesInput, CommentsUncheckedCreateWithoutArticlesInput> | CommentsCreateWithoutArticlesInput[] | CommentsUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutArticlesInput | CommentsCreateOrConnectWithoutArticlesInput[]
    createMany?: CommentsCreateManyArticlesInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutArticlesInput = {
    create?: XOR<MessagesCreateWithoutArticlesInput, MessagesUncheckedCreateWithoutArticlesInput> | MessagesCreateWithoutArticlesInput[] | MessagesUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutArticlesInput | MessagesCreateOrConnectWithoutArticlesInput[]
    createMany?: MessagesCreateManyArticlesInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type ArticleRatesCreateNestedManyWithoutArticlesInput = {
    create?: XOR<ArticleRatesCreateWithoutArticlesInput, ArticleRatesUncheckedCreateWithoutArticlesInput> | ArticleRatesCreateWithoutArticlesInput[] | ArticleRatesUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: ArticleRatesCreateOrConnectWithoutArticlesInput | ArticleRatesCreateOrConnectWithoutArticlesInput[]
    createMany?: ArticleRatesCreateManyArticlesInputEnvelope
    connect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutArticlesInput = {
    create?: XOR<CommentsCreateWithoutArticlesInput, CommentsUncheckedCreateWithoutArticlesInput> | CommentsCreateWithoutArticlesInput[] | CommentsUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutArticlesInput | CommentsCreateOrConnectWithoutArticlesInput[]
    createMany?: CommentsCreateManyArticlesInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutArticlesInput = {
    create?: XOR<MessagesCreateWithoutArticlesInput, MessagesUncheckedCreateWithoutArticlesInput> | MessagesCreateWithoutArticlesInput[] | MessagesUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutArticlesInput | MessagesCreateOrConnectWithoutArticlesInput[]
    createMany?: MessagesCreateManyArticlesInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type ArticleRatesUncheckedCreateNestedManyWithoutArticlesInput = {
    create?: XOR<ArticleRatesCreateWithoutArticlesInput, ArticleRatesUncheckedCreateWithoutArticlesInput> | ArticleRatesCreateWithoutArticlesInput[] | ArticleRatesUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: ArticleRatesCreateOrConnectWithoutArticlesInput | ArticleRatesCreateOrConnectWithoutArticlesInput[]
    createMany?: ArticleRatesCreateManyArticlesInputEnvelope
    connect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
  }

  export type ArticlesUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArticlesUpdatecategoryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutArticlesNestedInput = {
    create?: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    connectOrCreate?: UserCreateOrConnectWithoutArticlesInput
    upsert?: UserUpsertWithoutArticlesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArticlesInput, UserUpdateWithoutArticlesInput>, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type CommentsUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<CommentsCreateWithoutArticlesInput, CommentsUncheckedCreateWithoutArticlesInput> | CommentsCreateWithoutArticlesInput[] | CommentsUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutArticlesInput | CommentsCreateOrConnectWithoutArticlesInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutArticlesInput | CommentsUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: CommentsCreateManyArticlesInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutArticlesInput | CommentsUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutArticlesInput | CommentsUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<MessagesCreateWithoutArticlesInput, MessagesUncheckedCreateWithoutArticlesInput> | MessagesCreateWithoutArticlesInput[] | MessagesUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutArticlesInput | MessagesCreateOrConnectWithoutArticlesInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutArticlesInput | MessagesUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: MessagesCreateManyArticlesInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutArticlesInput | MessagesUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutArticlesInput | MessagesUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type ArticleRatesUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<ArticleRatesCreateWithoutArticlesInput, ArticleRatesUncheckedCreateWithoutArticlesInput> | ArticleRatesCreateWithoutArticlesInput[] | ArticleRatesUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: ArticleRatesCreateOrConnectWithoutArticlesInput | ArticleRatesCreateOrConnectWithoutArticlesInput[]
    upsert?: ArticleRatesUpsertWithWhereUniqueWithoutArticlesInput | ArticleRatesUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: ArticleRatesCreateManyArticlesInputEnvelope
    set?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    disconnect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    delete?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    connect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    update?: ArticleRatesUpdateWithWhereUniqueWithoutArticlesInput | ArticleRatesUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: ArticleRatesUpdateManyWithWhereWithoutArticlesInput | ArticleRatesUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: ArticleRatesScalarWhereInput | ArticleRatesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<CommentsCreateWithoutArticlesInput, CommentsUncheckedCreateWithoutArticlesInput> | CommentsCreateWithoutArticlesInput[] | CommentsUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutArticlesInput | CommentsCreateOrConnectWithoutArticlesInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutArticlesInput | CommentsUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: CommentsCreateManyArticlesInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutArticlesInput | CommentsUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutArticlesInput | CommentsUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<MessagesCreateWithoutArticlesInput, MessagesUncheckedCreateWithoutArticlesInput> | MessagesCreateWithoutArticlesInput[] | MessagesUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutArticlesInput | MessagesCreateOrConnectWithoutArticlesInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutArticlesInput | MessagesUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: MessagesCreateManyArticlesInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutArticlesInput | MessagesUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutArticlesInput | MessagesUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type ArticleRatesUncheckedUpdateManyWithoutArticlesNestedInput = {
    create?: XOR<ArticleRatesCreateWithoutArticlesInput, ArticleRatesUncheckedCreateWithoutArticlesInput> | ArticleRatesCreateWithoutArticlesInput[] | ArticleRatesUncheckedCreateWithoutArticlesInput[]
    connectOrCreate?: ArticleRatesCreateOrConnectWithoutArticlesInput | ArticleRatesCreateOrConnectWithoutArticlesInput[]
    upsert?: ArticleRatesUpsertWithWhereUniqueWithoutArticlesInput | ArticleRatesUpsertWithWhereUniqueWithoutArticlesInput[]
    createMany?: ArticleRatesCreateManyArticlesInputEnvelope
    set?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    disconnect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    delete?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    connect?: ArticleRatesWhereUniqueInput | ArticleRatesWhereUniqueInput[]
    update?: ArticleRatesUpdateWithWhereUniqueWithoutArticlesInput | ArticleRatesUpdateWithWhereUniqueWithoutArticlesInput[]
    updateMany?: ArticleRatesUpdateManyWithWhereWithoutArticlesInput | ArticleRatesUpdateManyWithWhereWithoutArticlesInput[]
    deleteMany?: ArticleRatesScalarWhereInput | ArticleRatesScalarWhereInput[]
  }

  export type ArticlesCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ArticlesCreateWithoutCommentsInput, ArticlesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutCommentsInput
    connect?: ArticlesWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type ArticlesUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ArticlesCreateWithoutCommentsInput, ArticlesUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutCommentsInput
    upsert?: ArticlesUpsertWithoutCommentsInput
    connect?: ArticlesWhereUniqueInput
    update?: XOR<XOR<ArticlesUpdateToOneWithWhereWithoutCommentsInput, ArticlesUpdateWithoutCommentsInput>, ArticlesUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserCreateNestedOneWithoutMessagesSentInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesReceivedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type ArticlesCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ArticlesCreateWithoutMessagesInput, ArticlesUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutMessagesInput
    connect?: ArticlesWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesSentNestedInput = {
    create?: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesSentInput
    upsert?: UserUpsertWithoutMessagesSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesSentInput, UserUpdateWithoutMessagesSentInput>, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesReceivedInput
    upsert?: UserUpsertWithoutMessagesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesReceivedInput, UserUpdateWithoutMessagesReceivedInput>, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type ArticlesUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<ArticlesCreateWithoutMessagesInput, ArticlesUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ArticlesCreateOrConnectWithoutMessagesInput
    upsert?: ArticlesUpsertWithoutMessagesInput
    disconnect?: ArticlesWhereInput | boolean
    delete?: ArticlesWhereInput | boolean
    connect?: ArticlesWhereUniqueInput
    update?: XOR<XOR<ArticlesUpdateToOneWithWhereWithoutMessagesInput, ArticlesUpdateWithoutMessagesInput>, ArticlesUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutNumbersInput = {
    create?: XOR<UserCreateWithoutNumbersInput, UserUncheckedCreateWithoutNumbersInput>
    connectOrCreate?: UserCreateOrConnectWithoutNumbersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNumbersNestedInput = {
    create?: XOR<UserCreateWithoutNumbersInput, UserUncheckedCreateWithoutNumbersInput>
    connectOrCreate?: UserCreateOrConnectWithoutNumbersInput
    upsert?: UserUpsertWithoutNumbersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNumbersInput, UserUpdateWithoutNumbersInput>, UserUncheckedUpdateWithoutNumbersInput>
  }

  export type UserCreateNestedOneWithoutCartsInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartsInput
    upsert?: UserUpsertWithoutCartsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartsInput, UserUpdateWithoutCartsInput>, UserUncheckedUpdateWithoutCartsInput>
  }

  export type UserCreateNestedOneWithoutOrdersBuyerInput = {
    create?: XOR<UserCreateWithoutOrdersBuyerInput, UserUncheckedCreateWithoutOrdersBuyerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersBuyerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersSellerInput = {
    create?: XOR<UserCreateWithoutOrdersSellerInput, UserUncheckedCreateWithoutOrdersSellerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersSellerInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrdersBuyerNestedInput = {
    create?: XOR<UserCreateWithoutOrdersBuyerInput, UserUncheckedCreateWithoutOrdersBuyerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersBuyerInput
    upsert?: UserUpsertWithoutOrdersBuyerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersBuyerInput, UserUpdateWithoutOrdersBuyerInput>, UserUncheckedUpdateWithoutOrdersBuyerInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersSellerNestedInput = {
    create?: XOR<UserCreateWithoutOrdersSellerInput, UserUncheckedCreateWithoutOrdersSellerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersSellerInput
    upsert?: UserUpsertWithoutOrdersSellerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersSellerInput, UserUpdateWithoutOrdersSellerInput>, UserUncheckedUpdateWithoutOrdersSellerInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ArticlesCreateWithoutUserInput = {
    id?: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsCreateNestedManyWithoutArticlesInput
    Messages?: MessagesCreateNestedManyWithoutArticlesInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutArticlesInput
    Messages?: MessagesUncheckedCreateNestedManyWithoutArticlesInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesCreateOrConnectWithoutUserInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutUserInput, ArticlesUncheckedCreateWithoutUserInput>
  }

  export type ArticlesCreateManyUserInputEnvelope = {
    data: ArticlesCreateManyUserInput | ArticlesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentsCreateWithoutUserInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles: ArticlesCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutUserInput = {
    id?: string
    article_id: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutUserInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsCreateManyUserInputEnvelope = {
    data: CommentsCreateManyUserInput | CommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutSenderInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Receiver: UserCreateNestedOneWithoutMessagesReceivedInput
    Articles?: ArticlesCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutSenderInput = {
    id?: string
    message: string
    receiver_id: string
    article_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesCreateOrConnectWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesCreateManySenderInputEnvelope = {
    data: MessagesCreateManySenderInput | MessagesCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutReceiverInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Sender: UserCreateNestedOneWithoutMessagesSentInput
    Articles?: ArticlesCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutReceiverInput = {
    id?: string
    message: string
    sender_id: string
    article_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesCreateOrConnectWithoutReceiverInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput>
  }

  export type MessagesCreateManyReceiverInputEnvelope = {
    data: MessagesCreateManyReceiverInput | MessagesCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutBuyerInput = {
    id?: string
    article_details: JsonNullValueInput | InputJsonValue
    order_status?: string
    order_date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Seller: UserCreateNestedOneWithoutOrdersSellerInput
  }

  export type OrdersUncheckedCreateWithoutBuyerInput = {
    id?: string
    article_details: JsonNullValueInput | InputJsonValue
    seller_id: string
    order_status?: string
    order_date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateOrConnectWithoutBuyerInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput>
  }

  export type OrdersCreateManyBuyerInputEnvelope = {
    data: OrdersCreateManyBuyerInput | OrdersCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type OrdersCreateWithoutSellerInput = {
    id?: string
    article_details: JsonNullValueInput | InputJsonValue
    order_status?: string
    order_date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Buyer: UserCreateNestedOneWithoutOrdersBuyerInput
  }

  export type OrdersUncheckedCreateWithoutSellerInput = {
    id?: string
    article_details: JsonNullValueInput | InputJsonValue
    buyer_id: string
    order_status?: string
    order_date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateOrConnectWithoutSellerInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutSellerInput, OrdersUncheckedCreateWithoutSellerInput>
  }

  export type OrdersCreateManySellerInputEnvelope = {
    data: OrdersCreateManySellerInput | OrdersCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type CartsCreateWithoutUserInput = {
    id?: string
    cart: JsonNullValueInput | InputJsonValue
  }

  export type CartsUncheckedCreateWithoutUserInput = {
    id?: string
    cart: JsonNullValueInput | InputJsonValue
  }

  export type CartsCreateOrConnectWithoutUserInput = {
    where: CartsWhereUniqueInput
    create: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
  }

  export type CartsCreateManyUserInputEnvelope = {
    data: CartsCreateManyUserInput | CartsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NumbersCreateWithoutUserInput = {
    id: number
    number: number
  }

  export type NumbersUncheckedCreateWithoutUserInput = {
    id: number
    number: number
  }

  export type NumbersCreateOrConnectWithoutUserInput = {
    where: NumbersWhereUniqueInput
    create: XOR<NumbersCreateWithoutUserInput, NumbersUncheckedCreateWithoutUserInput>
  }

  export type NumbersCreateManyUserInputEnvelope = {
    data: NumbersCreateManyUserInput | NumbersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticleRatesCreateWithoutUserInput = {
    rate: number
    Articles: ArticlesCreateNestedOneWithoutAppreciationsInput
  }

  export type ArticleRatesUncheckedCreateWithoutUserInput = {
    rate: number
    article_id: string
  }

  export type ArticleRatesCreateOrConnectWithoutUserInput = {
    where: ArticleRatesWhereUniqueInput
    create: XOR<ArticleRatesCreateWithoutUserInput, ArticleRatesUncheckedCreateWithoutUserInput>
  }

  export type ArticleRatesCreateManyUserInputEnvelope = {
    data: ArticleRatesCreateManyUserInput | ArticleRatesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ArticlesUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticlesWhereUniqueInput
    update: XOR<ArticlesUpdateWithoutUserInput, ArticlesUncheckedUpdateWithoutUserInput>
    create: XOR<ArticlesCreateWithoutUserInput, ArticlesUncheckedCreateWithoutUserInput>
  }

  export type ArticlesUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticlesWhereUniqueInput
    data: XOR<ArticlesUpdateWithoutUserInput, ArticlesUncheckedUpdateWithoutUserInput>
  }

  export type ArticlesUpdateManyWithWhereWithoutUserInput = {
    where: ArticlesScalarWhereInput
    data: XOR<ArticlesUpdateManyMutationInput, ArticlesUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticlesScalarWhereInput = {
    AND?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
    OR?: ArticlesScalarWhereInput[]
    NOT?: ArticlesScalarWhereInput | ArticlesScalarWhereInput[]
    id?: StringFilter<"Articles"> | string
    userId?: StringFilter<"Articles"> | string
    title?: StringFilter<"Articles"> | string
    images?: StringNullableListFilter<"Articles">
    category?: StringNullableListFilter<"Articles">
    description?: StringFilter<"Articles"> | string
    price?: IntFilter<"Articles"> | number
    stock?: IntFilter<"Articles"> | number
    createdAt?: DateTimeFilter<"Articles"> | Date | string
    updatedAt?: DateTimeFilter<"Articles"> | Date | string
  }

  export type CommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
    create: XOR<CommentsCreateWithoutUserInput, CommentsUncheckedCreateWithoutUserInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUserInput, CommentsUncheckedUpdateWithoutUserInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUserInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: StringFilter<"Comments"> | string
    article_id?: StringFilter<"Comments"> | string
    buyer_id?: StringFilter<"Comments"> | string
    comment?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    updatedAt?: DateTimeFilter<"Comments"> | Date | string
  }

  export type MessagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
  }

  export type MessagesUpdateManyWithWhereWithoutSenderInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: StringFilter<"Messages"> | string
    message?: StringFilter<"Messages"> | string
    sender_id?: StringFilter<"Messages"> | string
    receiver_id?: StringFilter<"Messages"> | string
    article_id?: StringNullableFilter<"Messages"> | string | null
    createdAt?: DateTimeFilter<"Messages"> | Date | string
    updatedAt?: DateTimeFilter<"Messages"> | Date | string
  }

  export type MessagesUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutReceiverInput, MessagesUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutReceiverInput, MessagesUncheckedUpdateWithoutReceiverInput>
  }

  export type MessagesUpdateManyWithWhereWithoutReceiverInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutReceiverInput>
  }

  export type OrdersUpsertWithWhereUniqueWithoutBuyerInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutBuyerInput, OrdersUncheckedUpdateWithoutBuyerInput>
    create: XOR<OrdersCreateWithoutBuyerInput, OrdersUncheckedCreateWithoutBuyerInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutBuyerInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutBuyerInput, OrdersUncheckedUpdateWithoutBuyerInput>
  }

  export type OrdersUpdateManyWithWhereWithoutBuyerInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutBuyerInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: StringFilter<"Orders"> | string
    article_details?: JsonFilter<"Orders">
    buyer_id?: StringFilter<"Orders"> | string
    seller_id?: StringFilter<"Orders"> | string
    order_status?: StringFilter<"Orders"> | string
    order_date?: DateTimeFilter<"Orders"> | Date | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
  }

  export type OrdersUpsertWithWhereUniqueWithoutSellerInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutSellerInput, OrdersUncheckedUpdateWithoutSellerInput>
    create: XOR<OrdersCreateWithoutSellerInput, OrdersUncheckedCreateWithoutSellerInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutSellerInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutSellerInput, OrdersUncheckedUpdateWithoutSellerInput>
  }

  export type OrdersUpdateManyWithWhereWithoutSellerInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutSellerInput>
  }

  export type CartsUpsertWithWhereUniqueWithoutUserInput = {
    where: CartsWhereUniqueInput
    update: XOR<CartsUpdateWithoutUserInput, CartsUncheckedUpdateWithoutUserInput>
    create: XOR<CartsCreateWithoutUserInput, CartsUncheckedCreateWithoutUserInput>
  }

  export type CartsUpdateWithWhereUniqueWithoutUserInput = {
    where: CartsWhereUniqueInput
    data: XOR<CartsUpdateWithoutUserInput, CartsUncheckedUpdateWithoutUserInput>
  }

  export type CartsUpdateManyWithWhereWithoutUserInput = {
    where: CartsScalarWhereInput
    data: XOR<CartsUpdateManyMutationInput, CartsUncheckedUpdateManyWithoutUserInput>
  }

  export type CartsScalarWhereInput = {
    AND?: CartsScalarWhereInput | CartsScalarWhereInput[]
    OR?: CartsScalarWhereInput[]
    NOT?: CartsScalarWhereInput | CartsScalarWhereInput[]
    id?: StringFilter<"Carts"> | string
    cart?: JsonFilter<"Carts">
    user_id?: StringFilter<"Carts"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type NumbersUpsertWithWhereUniqueWithoutUserInput = {
    where: NumbersWhereUniqueInput
    update: XOR<NumbersUpdateWithoutUserInput, NumbersUncheckedUpdateWithoutUserInput>
    create: XOR<NumbersCreateWithoutUserInput, NumbersUncheckedCreateWithoutUserInput>
  }

  export type NumbersUpdateWithWhereUniqueWithoutUserInput = {
    where: NumbersWhereUniqueInput
    data: XOR<NumbersUpdateWithoutUserInput, NumbersUncheckedUpdateWithoutUserInput>
  }

  export type NumbersUpdateManyWithWhereWithoutUserInput = {
    where: NumbersScalarWhereInput
    data: XOR<NumbersUpdateManyMutationInput, NumbersUncheckedUpdateManyWithoutUserInput>
  }

  export type NumbersScalarWhereInput = {
    AND?: NumbersScalarWhereInput | NumbersScalarWhereInput[]
    OR?: NumbersScalarWhereInput[]
    NOT?: NumbersScalarWhereInput | NumbersScalarWhereInput[]
    id?: IntFilter<"Numbers"> | number
    number?: IntFilter<"Numbers"> | number
    seller_id?: StringFilter<"Numbers"> | string
  }

  export type ArticleRatesUpsertWithWhereUniqueWithoutUserInput = {
    where: ArticleRatesWhereUniqueInput
    update: XOR<ArticleRatesUpdateWithoutUserInput, ArticleRatesUncheckedUpdateWithoutUserInput>
    create: XOR<ArticleRatesCreateWithoutUserInput, ArticleRatesUncheckedCreateWithoutUserInput>
  }

  export type ArticleRatesUpdateWithWhereUniqueWithoutUserInput = {
    where: ArticleRatesWhereUniqueInput
    data: XOR<ArticleRatesUpdateWithoutUserInput, ArticleRatesUncheckedUpdateWithoutUserInput>
  }

  export type ArticleRatesUpdateManyWithWhereWithoutUserInput = {
    where: ArticleRatesScalarWhereInput
    data: XOR<ArticleRatesUpdateManyMutationInput, ArticleRatesUncheckedUpdateManyWithoutUserInput>
  }

  export type ArticleRatesScalarWhereInput = {
    AND?: ArticleRatesScalarWhereInput | ArticleRatesScalarWhereInput[]
    OR?: ArticleRatesScalarWhereInput[]
    NOT?: ArticleRatesScalarWhereInput | ArticleRatesScalarWhereInput[]
    rate?: FloatFilter<"ArticleRates"> | number
    seller_id?: StringFilter<"ArticleRates"> | string
    article_id?: StringFilter<"ArticleRates"> | string
  }

  export type UserCreateWithoutAppreciationsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppreciationsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppreciationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppreciationsInput, UserUncheckedCreateWithoutAppreciationsInput>
  }

  export type ArticlesCreateWithoutAppreciationsInput = {
    id?: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutArticlesInput
    Comments?: CommentsCreateNestedManyWithoutArticlesInput
    Messages?: MessagesCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesUncheckedCreateWithoutAppreciationsInput = {
    id?: string
    userId: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutArticlesInput
    Messages?: MessagesUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesCreateOrConnectWithoutAppreciationsInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutAppreciationsInput, ArticlesUncheckedCreateWithoutAppreciationsInput>
  }

  export type UserUpsertWithoutAppreciationsInput = {
    update: XOR<UserUpdateWithoutAppreciationsInput, UserUncheckedUpdateWithoutAppreciationsInput>
    create: XOR<UserCreateWithoutAppreciationsInput, UserUncheckedCreateWithoutAppreciationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAppreciationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAppreciationsInput, UserUncheckedUpdateWithoutAppreciationsInput>
  }

  export type UserUpdateWithoutAppreciationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppreciationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticlesUpsertWithoutAppreciationsInput = {
    update: XOR<ArticlesUpdateWithoutAppreciationsInput, ArticlesUncheckedUpdateWithoutAppreciationsInput>
    create: XOR<ArticlesCreateWithoutAppreciationsInput, ArticlesUncheckedCreateWithoutAppreciationsInput>
    where?: ArticlesWhereInput
  }

  export type ArticlesUpdateToOneWithWhereWithoutAppreciationsInput = {
    where?: ArticlesWhereInput
    data: XOR<ArticlesUpdateWithoutAppreciationsInput, ArticlesUncheckedUpdateWithoutAppreciationsInput>
  }

  export type ArticlesUpdateWithoutAppreciationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutArticlesNestedInput
    Comments?: CommentsUpdateManyWithoutArticlesNestedInput
    Messages?: MessagesUpdateManyWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutAppreciationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutArticlesNestedInput
    Messages?: MessagesUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type UserCreateWithoutArticlesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArticlesInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArticlesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
  }

  export type CommentsCreateWithoutArticlesInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateWithoutArticlesInput = {
    id?: string
    buyer_id: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutArticlesInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutArticlesInput, CommentsUncheckedCreateWithoutArticlesInput>
  }

  export type CommentsCreateManyArticlesInputEnvelope = {
    data: CommentsCreateManyArticlesInput | CommentsCreateManyArticlesInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutArticlesInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Sender: UserCreateNestedOneWithoutMessagesSentInput
    Receiver: UserCreateNestedOneWithoutMessagesReceivedInput
  }

  export type MessagesUncheckedCreateWithoutArticlesInput = {
    id?: string
    message: string
    sender_id: string
    receiver_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesCreateOrConnectWithoutArticlesInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutArticlesInput, MessagesUncheckedCreateWithoutArticlesInput>
  }

  export type MessagesCreateManyArticlesInputEnvelope = {
    data: MessagesCreateManyArticlesInput | MessagesCreateManyArticlesInput[]
    skipDuplicates?: boolean
  }

  export type ArticleRatesCreateWithoutArticlesInput = {
    rate: number
    User: UserCreateNestedOneWithoutAppreciationsInput
  }

  export type ArticleRatesUncheckedCreateWithoutArticlesInput = {
    rate: number
    seller_id: string
  }

  export type ArticleRatesCreateOrConnectWithoutArticlesInput = {
    where: ArticleRatesWhereUniqueInput
    create: XOR<ArticleRatesCreateWithoutArticlesInput, ArticleRatesUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleRatesCreateManyArticlesInputEnvelope = {
    data: ArticleRatesCreateManyArticlesInput | ArticleRatesCreateManyArticlesInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutArticlesInput = {
    update: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
    create: XOR<UserCreateWithoutArticlesInput, UserUncheckedCreateWithoutArticlesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArticlesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArticlesInput, UserUncheckedUpdateWithoutArticlesInput>
  }

  export type UserUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommentsUpsertWithWhereUniqueWithoutArticlesInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutArticlesInput, CommentsUncheckedUpdateWithoutArticlesInput>
    create: XOR<CommentsCreateWithoutArticlesInput, CommentsUncheckedCreateWithoutArticlesInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutArticlesInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutArticlesInput, CommentsUncheckedUpdateWithoutArticlesInput>
  }

  export type CommentsUpdateManyWithWhereWithoutArticlesInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutArticlesInput>
  }

  export type MessagesUpsertWithWhereUniqueWithoutArticlesInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutArticlesInput, MessagesUncheckedUpdateWithoutArticlesInput>
    create: XOR<MessagesCreateWithoutArticlesInput, MessagesUncheckedCreateWithoutArticlesInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutArticlesInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutArticlesInput, MessagesUncheckedUpdateWithoutArticlesInput>
  }

  export type MessagesUpdateManyWithWhereWithoutArticlesInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutArticlesInput>
  }

  export type ArticleRatesUpsertWithWhereUniqueWithoutArticlesInput = {
    where: ArticleRatesWhereUniqueInput
    update: XOR<ArticleRatesUpdateWithoutArticlesInput, ArticleRatesUncheckedUpdateWithoutArticlesInput>
    create: XOR<ArticleRatesCreateWithoutArticlesInput, ArticleRatesUncheckedCreateWithoutArticlesInput>
  }

  export type ArticleRatesUpdateWithWhereUniqueWithoutArticlesInput = {
    where: ArticleRatesWhereUniqueInput
    data: XOR<ArticleRatesUpdateWithoutArticlesInput, ArticleRatesUncheckedUpdateWithoutArticlesInput>
  }

  export type ArticleRatesUpdateManyWithWhereWithoutArticlesInput = {
    where: ArticleRatesScalarWhereInput
    data: XOR<ArticleRatesUpdateManyMutationInput, ArticleRatesUncheckedUpdateManyWithoutArticlesInput>
  }

  export type ArticlesCreateWithoutCommentsInput = {
    id?: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutArticlesInput
    Messages?: MessagesCreateNestedManyWithoutArticlesInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesUncheckedCreateWithoutCommentsInput = {
    id?: string
    userId: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Messages?: MessagesUncheckedCreateNestedManyWithoutArticlesInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesCreateOrConnectWithoutCommentsInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutCommentsInput, ArticlesUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type ArticlesUpsertWithoutCommentsInput = {
    update: XOR<ArticlesUpdateWithoutCommentsInput, ArticlesUncheckedUpdateWithoutCommentsInput>
    create: XOR<ArticlesCreateWithoutCommentsInput, ArticlesUncheckedCreateWithoutCommentsInput>
    where?: ArticlesWhereInput
  }

  export type ArticlesUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ArticlesWhereInput
    data: XOR<ArticlesUpdateWithoutCommentsInput, ArticlesUncheckedUpdateWithoutCommentsInput>
  }

  export type ArticlesUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutArticlesNestedInput
    Messages?: MessagesUpdateManyWithoutArticlesNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Messages?: MessagesUncheckedUpdateManyWithoutArticlesNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMessagesSentInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesSentInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
  }

  export type UserCreateWithoutMessagesReceivedInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessagesReceivedInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessagesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
  }

  export type ArticlesCreateWithoutMessagesInput = {
    id?: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutArticlesInput
    Comments?: CommentsCreateNestedManyWithoutArticlesInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Comments?: CommentsUncheckedCreateNestedManyWithoutArticlesInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutArticlesInput
  }

  export type ArticlesCreateOrConnectWithoutMessagesInput = {
    where: ArticlesWhereUniqueInput
    create: XOR<ArticlesCreateWithoutMessagesInput, ArticlesUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesSentInput = {
    update: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
    create: XOR<UserCreateWithoutMessagesSentInput, UserUncheckedCreateWithoutMessagesSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesSentInput, UserUncheckedUpdateWithoutMessagesSentInput>
  }

  export type UserUpdateWithoutMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutMessagesReceivedInput = {
    update: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
    create: XOR<UserCreateWithoutMessagesReceivedInput, UserUncheckedCreateWithoutMessagesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesReceivedInput, UserUncheckedUpdateWithoutMessagesReceivedInput>
  }

  export type UserUpdateWithoutMessagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticlesUpsertWithoutMessagesInput = {
    update: XOR<ArticlesUpdateWithoutMessagesInput, ArticlesUncheckedUpdateWithoutMessagesInput>
    create: XOR<ArticlesCreateWithoutMessagesInput, ArticlesUncheckedCreateWithoutMessagesInput>
    where?: ArticlesWhereInput
  }

  export type ArticlesUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ArticlesWhereInput
    data: XOR<ArticlesUpdateWithoutMessagesInput, ArticlesUncheckedUpdateWithoutMessagesInput>
  }

  export type ArticlesUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutArticlesNestedInput
    Comments?: CommentsUpdateManyWithoutArticlesNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutArticlesNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type UserCreateWithoutNumbersInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNumbersInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNumbersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNumbersInput, UserUncheckedCreateWithoutNumbersInput>
  }

  export type UserUpsertWithoutNumbersInput = {
    update: XOR<UserUpdateWithoutNumbersInput, UserUncheckedUpdateWithoutNumbersInput>
    create: XOR<UserCreateWithoutNumbersInput, UserUncheckedCreateWithoutNumbersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNumbersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNumbersInput, UserUncheckedUpdateWithoutNumbersInput>
  }

  export type UserUpdateWithoutNumbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNumbersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCartsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartsInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
  }

  export type UserUpsertWithoutCartsInput = {
    update: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
    create: XOR<UserCreateWithoutCartsInput, UserUncheckedCreateWithoutCartsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartsInput, UserUncheckedUpdateWithoutCartsInput>
  }

  export type UserUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOrdersBuyerInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersBuyerInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersBuyerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersBuyerInput, UserUncheckedCreateWithoutOrdersBuyerInput>
  }

  export type UserCreateWithoutOrdersSellerInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersSellerInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersSellerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersSellerInput, UserUncheckedCreateWithoutOrdersSellerInput>
  }

  export type UserUpsertWithoutOrdersBuyerInput = {
    update: XOR<UserUpdateWithoutOrdersBuyerInput, UserUncheckedUpdateWithoutOrdersBuyerInput>
    create: XOR<UserCreateWithoutOrdersBuyerInput, UserUncheckedCreateWithoutOrdersBuyerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersBuyerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersBuyerInput, UserUncheckedUpdateWithoutOrdersBuyerInput>
  }

  export type UserUpdateWithoutOrdersBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutOrdersSellerInput = {
    update: XOR<UserUpdateWithoutOrdersSellerInput, UserUncheckedUpdateWithoutOrdersSellerInput>
    create: XOR<UserCreateWithoutOrdersSellerInput, UserUncheckedCreateWithoutOrdersSellerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersSellerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersSellerInput, UserUncheckedUpdateWithoutOrdersSellerInput>
  }

  export type UserUpdateWithoutOrdersSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAccountInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesCreateNestedManyWithoutUserInput
    Comments?: CommentsCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersCreateNestedManyWithoutSellerInput
    Carts?: CartsCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Numbers?: NumbersCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    name: string
    email: string
    emailVerified?: boolean
    vendeur?: boolean
    code?: number | null
    address?: string | null
    image?: string | null
    certified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Articles?: ArticlesUncheckedCreateNestedManyWithoutUserInput
    Comments?: CommentsUncheckedCreateNestedManyWithoutUserInput
    MessagesSent?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    MessagesReceived?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    OrdersBuyer?: OrdersUncheckedCreateNestedManyWithoutBuyerInput
    OrdersSeller?: OrdersUncheckedCreateNestedManyWithoutSellerInput
    Carts?: CartsUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Numbers?: NumbersUncheckedCreateNestedManyWithoutUserInput
    Appreciations?: ArticleRatesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateManyWithoutUserNestedInput
    Comments?: CommentsUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUpdateManyWithoutSellerNestedInput
    Carts?: CartsUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    vendeur?: BoolFieldUpdateOperationsInput | boolean
    code?: NullableIntFieldUpdateOperationsInput | number | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    certified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUncheckedUpdateManyWithoutUserNestedInput
    Comments?: CommentsUncheckedUpdateManyWithoutUserNestedInput
    MessagesSent?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    MessagesReceived?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    OrdersBuyer?: OrdersUncheckedUpdateManyWithoutBuyerNestedInput
    OrdersSeller?: OrdersUncheckedUpdateManyWithoutSellerNestedInput
    Carts?: CartsUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Numbers?: NumbersUncheckedUpdateManyWithoutUserNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArticlesCreateManyUserInput = {
    id?: string
    title: string
    images?: ArticlesCreateimagesInput | string[]
    category?: ArticlesCreatecategoryInput | string[]
    description: string
    price: number
    stock: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateManyUserInput = {
    id?: string
    article_id: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesCreateManySenderInput = {
    id?: string
    message: string
    receiver_id: string
    article_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesCreateManyReceiverInput = {
    id?: string
    message: string
    sender_id: string
    article_id?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateManyBuyerInput = {
    id?: string
    article_details: JsonNullValueInput | InputJsonValue
    seller_id: string
    order_status?: string
    order_date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersCreateManySellerInput = {
    id?: string
    article_details: JsonNullValueInput | InputJsonValue
    buyer_id: string
    order_status?: string
    order_date?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartsCreateManyUserInput = {
    id?: string
    cart: JsonNullValueInput | InputJsonValue
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt: Date | string
    updatedAt: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type NumbersCreateManyUserInput = {
    id: number
    number: number
  }

  export type ArticleRatesCreateManyUserInput = {
    rate: number
    article_id: string
  }

  export type ArticlesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUpdateManyWithoutArticlesNestedInput
    Messages?: MessagesUpdateManyWithoutArticlesNestedInput
    Appreciations?: ArticleRatesUpdateManyWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Comments?: CommentsUncheckedUpdateManyWithoutArticlesNestedInput
    Messages?: MessagesUncheckedUpdateManyWithoutArticlesNestedInput
    Appreciations?: ArticleRatesUncheckedUpdateManyWithoutArticlesNestedInput
  }

  export type ArticlesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    images?: ArticlesUpdateimagesInput | string[]
    category?: ArticlesUpdatecategoryInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Articles?: ArticlesUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
    Articles?: ArticlesUpdateOneWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    article_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    article_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    Articles?: ArticlesUpdateOneWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    article_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    article_id?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_details?: JsonNullValueInput | InputJsonValue
    order_status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Seller?: UserUpdateOneRequiredWithoutOrdersSellerNestedInput
  }

  export type OrdersUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_details?: JsonNullValueInput | InputJsonValue
    seller_id?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_details?: JsonNullValueInput | InputJsonValue
    seller_id?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_details?: JsonNullValueInput | InputJsonValue
    order_status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Buyer?: UserUpdateOneRequiredWithoutOrdersBuyerNestedInput
  }

  export type OrdersUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_details?: JsonNullValueInput | InputJsonValue
    buyer_id?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    article_details?: JsonNullValueInput | InputJsonValue
    buyer_id?: StringFieldUpdateOperationsInput | string
    order_status?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart?: JsonNullValueInput | InputJsonValue
  }

  export type CartsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart?: JsonNullValueInput | InputJsonValue
  }

  export type CartsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart?: JsonNullValueInput | InputJsonValue
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NumbersUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
  }

  export type NumbersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
  }

  export type NumbersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
  }

  export type ArticleRatesUpdateWithoutUserInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    Articles?: ArticlesUpdateOneRequiredWithoutAppreciationsNestedInput
  }

  export type ArticleRatesUncheckedUpdateWithoutUserInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleRatesUncheckedUpdateManyWithoutUserInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    article_id?: StringFieldUpdateOperationsInput | string
  }

  export type CommentsCreateManyArticlesInput = {
    id?: string
    buyer_id: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessagesCreateManyArticlesInput = {
    id?: string
    message: string
    sender_id: string
    receiver_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ArticleRatesCreateManyArticlesInput = {
    rate: number
    seller_id: string
  }

  export type CommentsUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyer_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyer_id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Sender?: UserUpdateOneRequiredWithoutMessagesSentNestedInput
    Receiver?: UserUpdateOneRequiredWithoutMessagesReceivedNestedInput
  }

  export type MessagesUncheckedUpdateWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyWithoutArticlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArticleRatesUpdateWithoutArticlesInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    User?: UserUpdateOneRequiredWithoutAppreciationsNestedInput
  }

  export type ArticleRatesUncheckedUpdateWithoutArticlesInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    seller_id?: StringFieldUpdateOperationsInput | string
  }

  export type ArticleRatesUncheckedUpdateManyWithoutArticlesInput = {
    rate?: FloatFieldUpdateOperationsInput | number
    seller_id?: StringFieldUpdateOperationsInput | string
  }



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