
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Edukasi
 * 
 */
export type Edukasi = $Result.DefaultSelection<Prisma.$EdukasiPayload>
/**
 * Model JadwalImunisasi
 * 
 */
export type JadwalImunisasi = $Result.DefaultSelection<Prisma.$JadwalImunisasiPayload>
/**
 * Model Kunjungan
 * 
 */
export type Kunjungan = $Result.DefaultSelection<Prisma.$KunjunganPayload>
/**
 * Model Layanan
 * 
 */
export type Layanan = $Result.DefaultSelection<Prisma.$LayananPayload>
/**
 * Model LayananEdukasi
 * 
 */
export type LayananEdukasi = $Result.DefaultSelection<Prisma.$LayananEdukasiPayload>
/**
 * Model Obat
 * 
 */
export type Obat = $Result.DefaultSelection<Prisma.$ObatPayload>
/**
 * Model Pasien
 * 
 */
export type Pasien = $Result.DefaultSelection<Prisma.$PasienPayload>
/**
 * Model Pembayaran
 * 
 */
export type Pembayaran = $Result.DefaultSelection<Prisma.$PembayaranPayload>
/**
 * Model RekamMedis
 * 
 */
export type RekamMedis = $Result.DefaultSelection<Prisma.$RekamMedisPayload>
/**
 * Model Resep
 * 
 */
export type Resep = $Result.DefaultSelection<Prisma.$ResepPayload>
/**
 * Model StokObat
 * 
 */
export type StokObat = $Result.DefaultSelection<Prisma.$StokObatPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  superadmin: 'superadmin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusKunjungan: {
  selesai: 'selesai',
  pending: 'pending',
  batal: 'batal'
};

export type StatusKunjungan = (typeof StatusKunjungan)[keyof typeof StatusKunjungan]


export const JenisKelamin: {
  P: 'P',
  L: 'L'
};

export type JenisKelamin = (typeof JenisKelamin)[keyof typeof JenisKelamin]


export const StatusPasien: {
  aktif: 'aktif',
  nonaktif: 'nonaktif'
};

export type StatusPasien = (typeof StatusPasien)[keyof typeof StatusPasien]


export const StatusPembayaran: {
  lunas: 'lunas',
  pending: 'pending',
  batal: 'batal'
};

export type StatusPembayaran = (typeof StatusPembayaran)[keyof typeof StatusPembayaran]


export const StatusRekam: {
  selesai: 'selesai',
  kontrol: 'kontrol',
  rujuk: 'rujuk'
};

export type StatusRekam = (typeof StatusRekam)[keyof typeof StatusRekam]


export const TransaksiObat: {
  masuk: 'masuk',
  keluar: 'keluar'
};

export type TransaksiObat = (typeof TransaksiObat)[keyof typeof TransaksiObat]


export const SumberTransaksi: {
  resep: 'resep',
  supplier: 'supplier',
  expired: 'expired'
};

export type SumberTransaksi = (typeof SumberTransaksi)[keyof typeof SumberTransaksi]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusKunjungan = $Enums.StatusKunjungan

export const StatusKunjungan: typeof $Enums.StatusKunjungan

export type JenisKelamin = $Enums.JenisKelamin

export const JenisKelamin: typeof $Enums.JenisKelamin

export type StatusPasien = $Enums.StatusPasien

export const StatusPasien: typeof $Enums.StatusPasien

export type StatusPembayaran = $Enums.StatusPembayaran

export const StatusPembayaran: typeof $Enums.StatusPembayaran

export type StatusRekam = $Enums.StatusRekam

export const StatusRekam: typeof $Enums.StatusRekam

export type TransaksiObat = $Enums.TransaksiObat

export const TransaksiObat: typeof $Enums.TransaksiObat

export type SumberTransaksi = $Enums.SumberTransaksi

export const SumberTransaksi: typeof $Enums.SumberTransaksi

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.edukasi`: Exposes CRUD operations for the **Edukasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Edukasis
    * const edukasis = await prisma.edukasi.findMany()
    * ```
    */
  get edukasi(): Prisma.EdukasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwalImunisasi`: Exposes CRUD operations for the **JadwalImunisasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JadwalImunisasis
    * const jadwalImunisasis = await prisma.jadwalImunisasi.findMany()
    * ```
    */
  get jadwalImunisasi(): Prisma.JadwalImunisasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kunjungan`: Exposes CRUD operations for the **Kunjungan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kunjungans
    * const kunjungans = await prisma.kunjungan.findMany()
    * ```
    */
  get kunjungan(): Prisma.KunjunganDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layanan`: Exposes CRUD operations for the **Layanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Layanans
    * const layanans = await prisma.layanan.findMany()
    * ```
    */
  get layanan(): Prisma.LayananDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.layananEdukasi`: Exposes CRUD operations for the **LayananEdukasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LayananEdukasis
    * const layananEdukasis = await prisma.layananEdukasi.findMany()
    * ```
    */
  get layananEdukasi(): Prisma.LayananEdukasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.obat`: Exposes CRUD operations for the **Obat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Obats
    * const obats = await prisma.obat.findMany()
    * ```
    */
  get obat(): Prisma.ObatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pasien`: Exposes CRUD operations for the **Pasien** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pasiens
    * const pasiens = await prisma.pasien.findMany()
    * ```
    */
  get pasien(): Prisma.PasienDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembayaran`: Exposes CRUD operations for the **Pembayaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembayarans
    * const pembayarans = await prisma.pembayaran.findMany()
    * ```
    */
  get pembayaran(): Prisma.PembayaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rekamMedis`: Exposes CRUD operations for the **RekamMedis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RekamMedis
    * const rekamMedis = await prisma.rekamMedis.findMany()
    * ```
    */
  get rekamMedis(): Prisma.RekamMedisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resep`: Exposes CRUD operations for the **Resep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reseps
    * const reseps = await prisma.resep.findMany()
    * ```
    */
  get resep(): Prisma.ResepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stokObat`: Exposes CRUD operations for the **StokObat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StokObats
    * const stokObats = await prisma.stokObat.findMany()
    * ```
    */
  get stokObat(): Prisma.StokObatDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Admin: 'Admin',
    Edukasi: 'Edukasi',
    JadwalImunisasi: 'JadwalImunisasi',
    Kunjungan: 'Kunjungan',
    Layanan: 'Layanan',
    LayananEdukasi: 'LayananEdukasi',
    Obat: 'Obat',
    Pasien: 'Pasien',
    Pembayaran: 'Pembayaran',
    RekamMedis: 'RekamMedis',
    Resep: 'Resep',
    StokObat: 'StokObat'
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
      modelProps: "admin" | "edukasi" | "jadwalImunisasi" | "kunjungan" | "layanan" | "layananEdukasi" | "obat" | "pasien" | "pembayaran" | "rekamMedis" | "resep" | "stokObat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Edukasi: {
        payload: Prisma.$EdukasiPayload<ExtArgs>
        fields: Prisma.EdukasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EdukasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EdukasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload>
          }
          findFirst: {
            args: Prisma.EdukasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EdukasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload>
          }
          findMany: {
            args: Prisma.EdukasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload>[]
          }
          create: {
            args: Prisma.EdukasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload>
          }
          createMany: {
            args: Prisma.EdukasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EdukasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload>[]
          }
          delete: {
            args: Prisma.EdukasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload>
          }
          update: {
            args: Prisma.EdukasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload>
          }
          deleteMany: {
            args: Prisma.EdukasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EdukasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EdukasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload>[]
          }
          upsert: {
            args: Prisma.EdukasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdukasiPayload>
          }
          aggregate: {
            args: Prisma.EdukasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEdukasi>
          }
          groupBy: {
            args: Prisma.EdukasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<EdukasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.EdukasiCountArgs<ExtArgs>
            result: $Utils.Optional<EdukasiCountAggregateOutputType> | number
          }
        }
      }
      JadwalImunisasi: {
        payload: Prisma.$JadwalImunisasiPayload<ExtArgs>
        fields: Prisma.JadwalImunisasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalImunisasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalImunisasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload>
          }
          findFirst: {
            args: Prisma.JadwalImunisasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalImunisasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload>
          }
          findMany: {
            args: Prisma.JadwalImunisasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload>[]
          }
          create: {
            args: Prisma.JadwalImunisasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload>
          }
          createMany: {
            args: Prisma.JadwalImunisasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JadwalImunisasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload>[]
          }
          delete: {
            args: Prisma.JadwalImunisasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload>
          }
          update: {
            args: Prisma.JadwalImunisasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload>
          }
          deleteMany: {
            args: Prisma.JadwalImunisasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalImunisasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JadwalImunisasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload>[]
          }
          upsert: {
            args: Prisma.JadwalImunisasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalImunisasiPayload>
          }
          aggregate: {
            args: Prisma.JadwalImunisasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwalImunisasi>
          }
          groupBy: {
            args: Prisma.JadwalImunisasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalImunisasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalImunisasiCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalImunisasiCountAggregateOutputType> | number
          }
        }
      }
      Kunjungan: {
        payload: Prisma.$KunjunganPayload<ExtArgs>
        fields: Prisma.KunjunganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KunjunganFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KunjunganFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload>
          }
          findFirst: {
            args: Prisma.KunjunganFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KunjunganFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload>
          }
          findMany: {
            args: Prisma.KunjunganFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload>[]
          }
          create: {
            args: Prisma.KunjunganCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload>
          }
          createMany: {
            args: Prisma.KunjunganCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KunjunganCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload>[]
          }
          delete: {
            args: Prisma.KunjunganDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload>
          }
          update: {
            args: Prisma.KunjunganUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload>
          }
          deleteMany: {
            args: Prisma.KunjunganDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KunjunganUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KunjunganUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload>[]
          }
          upsert: {
            args: Prisma.KunjunganUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KunjunganPayload>
          }
          aggregate: {
            args: Prisma.KunjunganAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKunjungan>
          }
          groupBy: {
            args: Prisma.KunjunganGroupByArgs<ExtArgs>
            result: $Utils.Optional<KunjunganGroupByOutputType>[]
          }
          count: {
            args: Prisma.KunjunganCountArgs<ExtArgs>
            result: $Utils.Optional<KunjunganCountAggregateOutputType> | number
          }
        }
      }
      Layanan: {
        payload: Prisma.$LayananPayload<ExtArgs>
        fields: Prisma.LayananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          findFirst: {
            args: Prisma.LayananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          findMany: {
            args: Prisma.LayananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>[]
          }
          create: {
            args: Prisma.LayananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          createMany: {
            args: Prisma.LayananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>[]
          }
          delete: {
            args: Prisma.LayananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          update: {
            args: Prisma.LayananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          deleteMany: {
            args: Prisma.LayananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LayananUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>[]
          }
          upsert: {
            args: Prisma.LayananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananPayload>
          }
          aggregate: {
            args: Prisma.LayananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayanan>
          }
          groupBy: {
            args: Prisma.LayananGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayananGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayananCountArgs<ExtArgs>
            result: $Utils.Optional<LayananCountAggregateOutputType> | number
          }
        }
      }
      LayananEdukasi: {
        payload: Prisma.$LayananEdukasiPayload<ExtArgs>
        fields: Prisma.LayananEdukasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LayananEdukasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LayananEdukasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload>
          }
          findFirst: {
            args: Prisma.LayananEdukasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LayananEdukasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload>
          }
          findMany: {
            args: Prisma.LayananEdukasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload>[]
          }
          create: {
            args: Prisma.LayananEdukasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload>
          }
          createMany: {
            args: Prisma.LayananEdukasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LayananEdukasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload>[]
          }
          delete: {
            args: Prisma.LayananEdukasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload>
          }
          update: {
            args: Prisma.LayananEdukasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload>
          }
          deleteMany: {
            args: Prisma.LayananEdukasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LayananEdukasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LayananEdukasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload>[]
          }
          upsert: {
            args: Prisma.LayananEdukasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LayananEdukasiPayload>
          }
          aggregate: {
            args: Prisma.LayananEdukasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLayananEdukasi>
          }
          groupBy: {
            args: Prisma.LayananEdukasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<LayananEdukasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.LayananEdukasiCountArgs<ExtArgs>
            result: $Utils.Optional<LayananEdukasiCountAggregateOutputType> | number
          }
        }
      }
      Obat: {
        payload: Prisma.$ObatPayload<ExtArgs>
        fields: Prisma.ObatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          findFirst: {
            args: Prisma.ObatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          findMany: {
            args: Prisma.ObatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>[]
          }
          create: {
            args: Prisma.ObatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          createMany: {
            args: Prisma.ObatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>[]
          }
          delete: {
            args: Prisma.ObatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          update: {
            args: Prisma.ObatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          deleteMany: {
            args: Prisma.ObatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>[]
          }
          upsert: {
            args: Prisma.ObatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObatPayload>
          }
          aggregate: {
            args: Prisma.ObatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObat>
          }
          groupBy: {
            args: Prisma.ObatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObatCountArgs<ExtArgs>
            result: $Utils.Optional<ObatCountAggregateOutputType> | number
          }
        }
      }
      Pasien: {
        payload: Prisma.$PasienPayload<ExtArgs>
        fields: Prisma.PasienFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasienFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasienFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          findFirst: {
            args: Prisma.PasienFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasienFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          findMany: {
            args: Prisma.PasienFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>[]
          }
          create: {
            args: Prisma.PasienCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          createMany: {
            args: Prisma.PasienCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasienCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>[]
          }
          delete: {
            args: Prisma.PasienDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          update: {
            args: Prisma.PasienUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          deleteMany: {
            args: Prisma.PasienDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasienUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasienUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>[]
          }
          upsert: {
            args: Prisma.PasienUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasienPayload>
          }
          aggregate: {
            args: Prisma.PasienAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasien>
          }
          groupBy: {
            args: Prisma.PasienGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasienGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasienCountArgs<ExtArgs>
            result: $Utils.Optional<PasienCountAggregateOutputType> | number
          }
        }
      }
      Pembayaran: {
        payload: Prisma.$PembayaranPayload<ExtArgs>
        fields: Prisma.PembayaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembayaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembayaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          findFirst: {
            args: Prisma.PembayaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembayaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          findMany: {
            args: Prisma.PembayaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          create: {
            args: Prisma.PembayaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          createMany: {
            args: Prisma.PembayaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PembayaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          delete: {
            args: Prisma.PembayaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          update: {
            args: Prisma.PembayaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          deleteMany: {
            args: Prisma.PembayaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PembayaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PembayaranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          upsert: {
            args: Prisma.PembayaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          aggregate: {
            args: Prisma.PembayaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembayaran>
          }
          groupBy: {
            args: Prisma.PembayaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembayaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembayaranCountArgs<ExtArgs>
            result: $Utils.Optional<PembayaranCountAggregateOutputType> | number
          }
        }
      }
      RekamMedis: {
        payload: Prisma.$RekamMedisPayload<ExtArgs>
        fields: Prisma.RekamMedisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RekamMedisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RekamMedisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload>
          }
          findFirst: {
            args: Prisma.RekamMedisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RekamMedisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload>
          }
          findMany: {
            args: Prisma.RekamMedisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload>[]
          }
          create: {
            args: Prisma.RekamMedisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload>
          }
          createMany: {
            args: Prisma.RekamMedisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RekamMedisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload>[]
          }
          delete: {
            args: Prisma.RekamMedisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload>
          }
          update: {
            args: Prisma.RekamMedisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload>
          }
          deleteMany: {
            args: Prisma.RekamMedisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RekamMedisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RekamMedisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload>[]
          }
          upsert: {
            args: Prisma.RekamMedisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RekamMedisPayload>
          }
          aggregate: {
            args: Prisma.RekamMedisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRekamMedis>
          }
          groupBy: {
            args: Prisma.RekamMedisGroupByArgs<ExtArgs>
            result: $Utils.Optional<RekamMedisGroupByOutputType>[]
          }
          count: {
            args: Prisma.RekamMedisCountArgs<ExtArgs>
            result: $Utils.Optional<RekamMedisCountAggregateOutputType> | number
          }
        }
      }
      Resep: {
        payload: Prisma.$ResepPayload<ExtArgs>
        fields: Prisma.ResepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          findFirst: {
            args: Prisma.ResepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          findMany: {
            args: Prisma.ResepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>[]
          }
          create: {
            args: Prisma.ResepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          createMany: {
            args: Prisma.ResepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>[]
          }
          delete: {
            args: Prisma.ResepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          update: {
            args: Prisma.ResepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          deleteMany: {
            args: Prisma.ResepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>[]
          }
          upsert: {
            args: Prisma.ResepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResepPayload>
          }
          aggregate: {
            args: Prisma.ResepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResep>
          }
          groupBy: {
            args: Prisma.ResepGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResepGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResepCountArgs<ExtArgs>
            result: $Utils.Optional<ResepCountAggregateOutputType> | number
          }
        }
      }
      StokObat: {
        payload: Prisma.$StokObatPayload<ExtArgs>
        fields: Prisma.StokObatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StokObatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StokObatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload>
          }
          findFirst: {
            args: Prisma.StokObatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StokObatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload>
          }
          findMany: {
            args: Prisma.StokObatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload>[]
          }
          create: {
            args: Prisma.StokObatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload>
          }
          createMany: {
            args: Prisma.StokObatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StokObatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload>[]
          }
          delete: {
            args: Prisma.StokObatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload>
          }
          update: {
            args: Prisma.StokObatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload>
          }
          deleteMany: {
            args: Prisma.StokObatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StokObatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StokObatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload>[]
          }
          upsert: {
            args: Prisma.StokObatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokObatPayload>
          }
          aggregate: {
            args: Prisma.StokObatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStokObat>
          }
          groupBy: {
            args: Prisma.StokObatGroupByArgs<ExtArgs>
            result: $Utils.Optional<StokObatGroupByOutputType>[]
          }
          count: {
            args: Prisma.StokObatCountArgs<ExtArgs>
            result: $Utils.Optional<StokObatCountAggregateOutputType> | number
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
    admin?: AdminOmit
    edukasi?: EdukasiOmit
    jadwalImunisasi?: JadwalImunisasiOmit
    kunjungan?: KunjunganOmit
    layanan?: LayananOmit
    layananEdukasi?: LayananEdukasiOmit
    obat?: ObatOmit
    pasien?: PasienOmit
    pembayaran?: PembayaranOmit
    rekamMedis?: RekamMedisOmit
    resep?: ResepOmit
    stokObat?: StokObatOmit
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
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    edukasi: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edukasi?: boolean | AdminCountOutputTypeCountEdukasiArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountEdukasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EdukasiWhereInput
  }


  /**
   * Count Type EdukasiCountOutputType
   */

  export type EdukasiCountOutputType = {
    layananEdukasi: number
  }

  export type EdukasiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layananEdukasi?: boolean | EdukasiCountOutputTypeCountLayananEdukasiArgs
  }

  // Custom InputTypes
  /**
   * EdukasiCountOutputType without action
   */
  export type EdukasiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EdukasiCountOutputType
     */
    select?: EdukasiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EdukasiCountOutputType without action
   */
  export type EdukasiCountOutputTypeCountLayananEdukasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayananEdukasiWhereInput
  }


  /**
   * Count Type KunjunganCountOutputType
   */

  export type KunjunganCountOutputType = {
    rekamMedis: number
  }

  export type KunjunganCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekamMedis?: boolean | KunjunganCountOutputTypeCountRekamMedisArgs
  }

  // Custom InputTypes
  /**
   * KunjunganCountOutputType without action
   */
  export type KunjunganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KunjunganCountOutputType
     */
    select?: KunjunganCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KunjunganCountOutputType without action
   */
  export type KunjunganCountOutputTypeCountRekamMedisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RekamMedisWhereInput
  }


  /**
   * Count Type LayananCountOutputType
   */

  export type LayananCountOutputType = {
    edukasi: number
    layananEdukasi: number
    jadwalImunisasi: number
    kunjungan: number
  }

  export type LayananCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edukasi?: boolean | LayananCountOutputTypeCountEdukasiArgs
    layananEdukasi?: boolean | LayananCountOutputTypeCountLayananEdukasiArgs
    jadwalImunisasi?: boolean | LayananCountOutputTypeCountJadwalImunisasiArgs
    kunjungan?: boolean | LayananCountOutputTypeCountKunjunganArgs
  }

  // Custom InputTypes
  /**
   * LayananCountOutputType without action
   */
  export type LayananCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananCountOutputType
     */
    select?: LayananCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LayananCountOutputType without action
   */
  export type LayananCountOutputTypeCountEdukasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EdukasiWhereInput
  }

  /**
   * LayananCountOutputType without action
   */
  export type LayananCountOutputTypeCountLayananEdukasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayananEdukasiWhereInput
  }

  /**
   * LayananCountOutputType without action
   */
  export type LayananCountOutputTypeCountJadwalImunisasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalImunisasiWhereInput
  }

  /**
   * LayananCountOutputType without action
   */
  export type LayananCountOutputTypeCountKunjunganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KunjunganWhereInput
  }


  /**
   * Count Type ObatCountOutputType
   */

  export type ObatCountOutputType = {
    resep: number
    stokObat: number
  }

  export type ObatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resep?: boolean | ObatCountOutputTypeCountResepArgs
    stokObat?: boolean | ObatCountOutputTypeCountStokObatArgs
  }

  // Custom InputTypes
  /**
   * ObatCountOutputType without action
   */
  export type ObatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObatCountOutputType
     */
    select?: ObatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObatCountOutputType without action
   */
  export type ObatCountOutputTypeCountResepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResepWhereInput
  }

  /**
   * ObatCountOutputType without action
   */
  export type ObatCountOutputTypeCountStokObatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StokObatWhereInput
  }


  /**
   * Count Type PasienCountOutputType
   */

  export type PasienCountOutputType = {
    kunjungan: number
  }

  export type PasienCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kunjungan?: boolean | PasienCountOutputTypeCountKunjunganArgs
  }

  // Custom InputTypes
  /**
   * PasienCountOutputType without action
   */
  export type PasienCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasienCountOutputType
     */
    select?: PasienCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PasienCountOutputType without action
   */
  export type PasienCountOutputTypeCountKunjunganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KunjunganWhereInput
  }


  /**
   * Count Type RekamMedisCountOutputType
   */

  export type RekamMedisCountOutputType = {
    resep: number
    pembayaran: number
  }

  export type RekamMedisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resep?: boolean | RekamMedisCountOutputTypeCountResepArgs
    pembayaran?: boolean | RekamMedisCountOutputTypeCountPembayaranArgs
  }

  // Custom InputTypes
  /**
   * RekamMedisCountOutputType without action
   */
  export type RekamMedisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedisCountOutputType
     */
    select?: RekamMedisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RekamMedisCountOutputType without action
   */
  export type RekamMedisCountOutputTypeCountResepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResepWhereInput
  }

  /**
   * RekamMedisCountOutputType without action
   */
  export type RekamMedisCountOutputTypeCountPembayaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembayaranWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: bigint | null
  }

  export type AdminMinAggregateOutputType = {
    id: bigint | null
    nama: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: bigint | null
    nama: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    nama: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    nama?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: bigint
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date | null
    updatedAt: Date | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    edukasi?: boolean | Admin$edukasiArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    nama?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edukasi?: boolean | Admin$edukasiArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      edukasi: Prisma.$EdukasiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nama: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    edukasi<T extends Admin$edukasiArgs<ExtArgs> = {}>(args?: Subset<T, Admin$edukasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'BigInt'>
    readonly nama: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.edukasi
   */
  export type Admin$edukasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    where?: EdukasiWhereInput
    orderBy?: EdukasiOrderByWithRelationInput | EdukasiOrderByWithRelationInput[]
    cursor?: EdukasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EdukasiScalarFieldEnum | EdukasiScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Edukasi
   */

  export type AggregateEdukasi = {
    _count: EdukasiCountAggregateOutputType | null
    _avg: EdukasiAvgAggregateOutputType | null
    _sum: EdukasiSumAggregateOutputType | null
    _min: EdukasiMinAggregateOutputType | null
    _max: EdukasiMaxAggregateOutputType | null
  }

  export type EdukasiAvgAggregateOutputType = {
    id: number | null
    idAdmin: number | null
    layananId: number | null
  }

  export type EdukasiSumAggregateOutputType = {
    id: bigint | null
    idAdmin: bigint | null
    layananId: bigint | null
  }

  export type EdukasiMinAggregateOutputType = {
    id: bigint | null
    idAdmin: bigint | null
    judul: string | null
    isi: string | null
    layananId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EdukasiMaxAggregateOutputType = {
    id: bigint | null
    idAdmin: bigint | null
    judul: string | null
    isi: string | null
    layananId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EdukasiCountAggregateOutputType = {
    id: number
    idAdmin: number
    judul: number
    isi: number
    layananId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EdukasiAvgAggregateInputType = {
    id?: true
    idAdmin?: true
    layananId?: true
  }

  export type EdukasiSumAggregateInputType = {
    id?: true
    idAdmin?: true
    layananId?: true
  }

  export type EdukasiMinAggregateInputType = {
    id?: true
    idAdmin?: true
    judul?: true
    isi?: true
    layananId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EdukasiMaxAggregateInputType = {
    id?: true
    idAdmin?: true
    judul?: true
    isi?: true
    layananId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EdukasiCountAggregateInputType = {
    id?: true
    idAdmin?: true
    judul?: true
    isi?: true
    layananId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EdukasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edukasi to aggregate.
     */
    where?: EdukasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edukasis to fetch.
     */
    orderBy?: EdukasiOrderByWithRelationInput | EdukasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EdukasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edukasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edukasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Edukasis
    **/
    _count?: true | EdukasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EdukasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EdukasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EdukasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EdukasiMaxAggregateInputType
  }

  export type GetEdukasiAggregateType<T extends EdukasiAggregateArgs> = {
        [P in keyof T & keyof AggregateEdukasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEdukasi[P]>
      : GetScalarType<T[P], AggregateEdukasi[P]>
  }




  export type EdukasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EdukasiWhereInput
    orderBy?: EdukasiOrderByWithAggregationInput | EdukasiOrderByWithAggregationInput[]
    by: EdukasiScalarFieldEnum[] | EdukasiScalarFieldEnum
    having?: EdukasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EdukasiCountAggregateInputType | true
    _avg?: EdukasiAvgAggregateInputType
    _sum?: EdukasiSumAggregateInputType
    _min?: EdukasiMinAggregateInputType
    _max?: EdukasiMaxAggregateInputType
  }

  export type EdukasiGroupByOutputType = {
    id: bigint
    idAdmin: bigint
    judul: string
    isi: string
    layananId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    _count: EdukasiCountAggregateOutputType | null
    _avg: EdukasiAvgAggregateOutputType | null
    _sum: EdukasiSumAggregateOutputType | null
    _min: EdukasiMinAggregateOutputType | null
    _max: EdukasiMaxAggregateOutputType | null
  }

  type GetEdukasiGroupByPayload<T extends EdukasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EdukasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EdukasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EdukasiGroupByOutputType[P]>
            : GetScalarType<T[P], EdukasiGroupByOutputType[P]>
        }
      >
    >


  export type EdukasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAdmin?: boolean
    judul?: boolean
    isi?: boolean
    layananId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    layananEdukasi?: boolean | Edukasi$layananEdukasiArgs<ExtArgs>
    layanan?: boolean | Edukasi$layananArgs<ExtArgs>
    _count?: boolean | EdukasiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edukasi"]>

  export type EdukasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAdmin?: boolean
    judul?: boolean
    isi?: boolean
    layananId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    layanan?: boolean | Edukasi$layananArgs<ExtArgs>
  }, ExtArgs["result"]["edukasi"]>

  export type EdukasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idAdmin?: boolean
    judul?: boolean
    isi?: boolean
    layananId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    layanan?: boolean | Edukasi$layananArgs<ExtArgs>
  }, ExtArgs["result"]["edukasi"]>

  export type EdukasiSelectScalar = {
    id?: boolean
    idAdmin?: boolean
    judul?: boolean
    isi?: boolean
    layananId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EdukasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idAdmin" | "judul" | "isi" | "layananId" | "createdAt" | "updatedAt", ExtArgs["result"]["edukasi"]>
  export type EdukasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    layananEdukasi?: boolean | Edukasi$layananEdukasiArgs<ExtArgs>
    layanan?: boolean | Edukasi$layananArgs<ExtArgs>
    _count?: boolean | EdukasiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EdukasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    layanan?: boolean | Edukasi$layananArgs<ExtArgs>
  }
  export type EdukasiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    layanan?: boolean | Edukasi$layananArgs<ExtArgs>
  }

  export type $EdukasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Edukasi"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      layananEdukasi: Prisma.$LayananEdukasiPayload<ExtArgs>[]
      layanan: Prisma.$LayananPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      idAdmin: bigint
      judul: string
      isi: string
      layananId: bigint | null
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["edukasi"]>
    composites: {}
  }

  type EdukasiGetPayload<S extends boolean | null | undefined | EdukasiDefaultArgs> = $Result.GetResult<Prisma.$EdukasiPayload, S>

  type EdukasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EdukasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EdukasiCountAggregateInputType | true
    }

  export interface EdukasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Edukasi'], meta: { name: 'Edukasi' } }
    /**
     * Find zero or one Edukasi that matches the filter.
     * @param {EdukasiFindUniqueArgs} args - Arguments to find a Edukasi
     * @example
     * // Get one Edukasi
     * const edukasi = await prisma.edukasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EdukasiFindUniqueArgs>(args: SelectSubset<T, EdukasiFindUniqueArgs<ExtArgs>>): Prisma__EdukasiClient<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Edukasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EdukasiFindUniqueOrThrowArgs} args - Arguments to find a Edukasi
     * @example
     * // Get one Edukasi
     * const edukasi = await prisma.edukasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EdukasiFindUniqueOrThrowArgs>(args: SelectSubset<T, EdukasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EdukasiClient<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edukasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdukasiFindFirstArgs} args - Arguments to find a Edukasi
     * @example
     * // Get one Edukasi
     * const edukasi = await prisma.edukasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EdukasiFindFirstArgs>(args?: SelectSubset<T, EdukasiFindFirstArgs<ExtArgs>>): Prisma__EdukasiClient<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edukasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdukasiFindFirstOrThrowArgs} args - Arguments to find a Edukasi
     * @example
     * // Get one Edukasi
     * const edukasi = await prisma.edukasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EdukasiFindFirstOrThrowArgs>(args?: SelectSubset<T, EdukasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__EdukasiClient<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Edukasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdukasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Edukasis
     * const edukasis = await prisma.edukasi.findMany()
     * 
     * // Get first 10 Edukasis
     * const edukasis = await prisma.edukasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const edukasiWithIdOnly = await prisma.edukasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EdukasiFindManyArgs>(args?: SelectSubset<T, EdukasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Edukasi.
     * @param {EdukasiCreateArgs} args - Arguments to create a Edukasi.
     * @example
     * // Create one Edukasi
     * const Edukasi = await prisma.edukasi.create({
     *   data: {
     *     // ... data to create a Edukasi
     *   }
     * })
     * 
     */
    create<T extends EdukasiCreateArgs>(args: SelectSubset<T, EdukasiCreateArgs<ExtArgs>>): Prisma__EdukasiClient<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Edukasis.
     * @param {EdukasiCreateManyArgs} args - Arguments to create many Edukasis.
     * @example
     * // Create many Edukasis
     * const edukasi = await prisma.edukasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EdukasiCreateManyArgs>(args?: SelectSubset<T, EdukasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Edukasis and returns the data saved in the database.
     * @param {EdukasiCreateManyAndReturnArgs} args - Arguments to create many Edukasis.
     * @example
     * // Create many Edukasis
     * const edukasi = await prisma.edukasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Edukasis and only return the `id`
     * const edukasiWithIdOnly = await prisma.edukasi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EdukasiCreateManyAndReturnArgs>(args?: SelectSubset<T, EdukasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Edukasi.
     * @param {EdukasiDeleteArgs} args - Arguments to delete one Edukasi.
     * @example
     * // Delete one Edukasi
     * const Edukasi = await prisma.edukasi.delete({
     *   where: {
     *     // ... filter to delete one Edukasi
     *   }
     * })
     * 
     */
    delete<T extends EdukasiDeleteArgs>(args: SelectSubset<T, EdukasiDeleteArgs<ExtArgs>>): Prisma__EdukasiClient<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Edukasi.
     * @param {EdukasiUpdateArgs} args - Arguments to update one Edukasi.
     * @example
     * // Update one Edukasi
     * const edukasi = await prisma.edukasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EdukasiUpdateArgs>(args: SelectSubset<T, EdukasiUpdateArgs<ExtArgs>>): Prisma__EdukasiClient<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Edukasis.
     * @param {EdukasiDeleteManyArgs} args - Arguments to filter Edukasis to delete.
     * @example
     * // Delete a few Edukasis
     * const { count } = await prisma.edukasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EdukasiDeleteManyArgs>(args?: SelectSubset<T, EdukasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edukasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdukasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Edukasis
     * const edukasi = await prisma.edukasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EdukasiUpdateManyArgs>(args: SelectSubset<T, EdukasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edukasis and returns the data updated in the database.
     * @param {EdukasiUpdateManyAndReturnArgs} args - Arguments to update many Edukasis.
     * @example
     * // Update many Edukasis
     * const edukasi = await prisma.edukasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Edukasis and only return the `id`
     * const edukasiWithIdOnly = await prisma.edukasi.updateManyAndReturn({
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
    updateManyAndReturn<T extends EdukasiUpdateManyAndReturnArgs>(args: SelectSubset<T, EdukasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Edukasi.
     * @param {EdukasiUpsertArgs} args - Arguments to update or create a Edukasi.
     * @example
     * // Update or create a Edukasi
     * const edukasi = await prisma.edukasi.upsert({
     *   create: {
     *     // ... data to create a Edukasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Edukasi we want to update
     *   }
     * })
     */
    upsert<T extends EdukasiUpsertArgs>(args: SelectSubset<T, EdukasiUpsertArgs<ExtArgs>>): Prisma__EdukasiClient<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Edukasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdukasiCountArgs} args - Arguments to filter Edukasis to count.
     * @example
     * // Count the number of Edukasis
     * const count = await prisma.edukasi.count({
     *   where: {
     *     // ... the filter for the Edukasis we want to count
     *   }
     * })
    **/
    count<T extends EdukasiCountArgs>(
      args?: Subset<T, EdukasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EdukasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Edukasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdukasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EdukasiAggregateArgs>(args: Subset<T, EdukasiAggregateArgs>): Prisma.PrismaPromise<GetEdukasiAggregateType<T>>

    /**
     * Group by Edukasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdukasiGroupByArgs} args - Group by arguments.
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
      T extends EdukasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EdukasiGroupByArgs['orderBy'] }
        : { orderBy?: EdukasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EdukasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEdukasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Edukasi model
   */
  readonly fields: EdukasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Edukasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EdukasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    layananEdukasi<T extends Edukasi$layananEdukasiArgs<ExtArgs> = {}>(args?: Subset<T, Edukasi$layananEdukasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    layanan<T extends Edukasi$layananArgs<ExtArgs> = {}>(args?: Subset<T, Edukasi$layananArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Edukasi model
   */
  interface EdukasiFieldRefs {
    readonly id: FieldRef<"Edukasi", 'BigInt'>
    readonly idAdmin: FieldRef<"Edukasi", 'BigInt'>
    readonly judul: FieldRef<"Edukasi", 'String'>
    readonly isi: FieldRef<"Edukasi", 'String'>
    readonly layananId: FieldRef<"Edukasi", 'BigInt'>
    readonly createdAt: FieldRef<"Edukasi", 'DateTime'>
    readonly updatedAt: FieldRef<"Edukasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Edukasi findUnique
   */
  export type EdukasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    /**
     * Filter, which Edukasi to fetch.
     */
    where: EdukasiWhereUniqueInput
  }

  /**
   * Edukasi findUniqueOrThrow
   */
  export type EdukasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    /**
     * Filter, which Edukasi to fetch.
     */
    where: EdukasiWhereUniqueInput
  }

  /**
   * Edukasi findFirst
   */
  export type EdukasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    /**
     * Filter, which Edukasi to fetch.
     */
    where?: EdukasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edukasis to fetch.
     */
    orderBy?: EdukasiOrderByWithRelationInput | EdukasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edukasis.
     */
    cursor?: EdukasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edukasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edukasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edukasis.
     */
    distinct?: EdukasiScalarFieldEnum | EdukasiScalarFieldEnum[]
  }

  /**
   * Edukasi findFirstOrThrow
   */
  export type EdukasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    /**
     * Filter, which Edukasi to fetch.
     */
    where?: EdukasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edukasis to fetch.
     */
    orderBy?: EdukasiOrderByWithRelationInput | EdukasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edukasis.
     */
    cursor?: EdukasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edukasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edukasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edukasis.
     */
    distinct?: EdukasiScalarFieldEnum | EdukasiScalarFieldEnum[]
  }

  /**
   * Edukasi findMany
   */
  export type EdukasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    /**
     * Filter, which Edukasis to fetch.
     */
    where?: EdukasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edukasis to fetch.
     */
    orderBy?: EdukasiOrderByWithRelationInput | EdukasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Edukasis.
     */
    cursor?: EdukasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edukasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edukasis.
     */
    skip?: number
    distinct?: EdukasiScalarFieldEnum | EdukasiScalarFieldEnum[]
  }

  /**
   * Edukasi create
   */
  export type EdukasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    /**
     * The data needed to create a Edukasi.
     */
    data: XOR<EdukasiCreateInput, EdukasiUncheckedCreateInput>
  }

  /**
   * Edukasi createMany
   */
  export type EdukasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Edukasis.
     */
    data: EdukasiCreateManyInput | EdukasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Edukasi createManyAndReturn
   */
  export type EdukasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * The data used to create many Edukasis.
     */
    data: EdukasiCreateManyInput | EdukasiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Edukasi update
   */
  export type EdukasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    /**
     * The data needed to update a Edukasi.
     */
    data: XOR<EdukasiUpdateInput, EdukasiUncheckedUpdateInput>
    /**
     * Choose, which Edukasi to update.
     */
    where: EdukasiWhereUniqueInput
  }

  /**
   * Edukasi updateMany
   */
  export type EdukasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Edukasis.
     */
    data: XOR<EdukasiUpdateManyMutationInput, EdukasiUncheckedUpdateManyInput>
    /**
     * Filter which Edukasis to update
     */
    where?: EdukasiWhereInput
    /**
     * Limit how many Edukasis to update.
     */
    limit?: number
  }

  /**
   * Edukasi updateManyAndReturn
   */
  export type EdukasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * The data used to update Edukasis.
     */
    data: XOR<EdukasiUpdateManyMutationInput, EdukasiUncheckedUpdateManyInput>
    /**
     * Filter which Edukasis to update
     */
    where?: EdukasiWhereInput
    /**
     * Limit how many Edukasis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Edukasi upsert
   */
  export type EdukasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    /**
     * The filter to search for the Edukasi to update in case it exists.
     */
    where: EdukasiWhereUniqueInput
    /**
     * In case the Edukasi found by the `where` argument doesn't exist, create a new Edukasi with this data.
     */
    create: XOR<EdukasiCreateInput, EdukasiUncheckedCreateInput>
    /**
     * In case the Edukasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EdukasiUpdateInput, EdukasiUncheckedUpdateInput>
  }

  /**
   * Edukasi delete
   */
  export type EdukasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    /**
     * Filter which Edukasi to delete.
     */
    where: EdukasiWhereUniqueInput
  }

  /**
   * Edukasi deleteMany
   */
  export type EdukasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edukasis to delete
     */
    where?: EdukasiWhereInput
    /**
     * Limit how many Edukasis to delete.
     */
    limit?: number
  }

  /**
   * Edukasi.layananEdukasi
   */
  export type Edukasi$layananEdukasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    where?: LayananEdukasiWhereInput
    orderBy?: LayananEdukasiOrderByWithRelationInput | LayananEdukasiOrderByWithRelationInput[]
    cursor?: LayananEdukasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayananEdukasiScalarFieldEnum | LayananEdukasiScalarFieldEnum[]
  }

  /**
   * Edukasi.layanan
   */
  export type Edukasi$layananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    where?: LayananWhereInput
  }

  /**
   * Edukasi without action
   */
  export type EdukasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
  }


  /**
   * Model JadwalImunisasi
   */

  export type AggregateJadwalImunisasi = {
    _count: JadwalImunisasiCountAggregateOutputType | null
    _avg: JadwalImunisasiAvgAggregateOutputType | null
    _sum: JadwalImunisasiSumAggregateOutputType | null
    _min: JadwalImunisasiMinAggregateOutputType | null
    _max: JadwalImunisasiMaxAggregateOutputType | null
  }

  export type JadwalImunisasiAvgAggregateOutputType = {
    id: number | null
    idLayanan: number | null
  }

  export type JadwalImunisasiSumAggregateOutputType = {
    id: bigint | null
    idLayanan: bigint | null
  }

  export type JadwalImunisasiMinAggregateOutputType = {
    id: bigint | null
    idLayanan: bigint | null
    tanggal: Date | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JadwalImunisasiMaxAggregateOutputType = {
    id: bigint | null
    idLayanan: bigint | null
    tanggal: Date | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JadwalImunisasiCountAggregateOutputType = {
    id: number
    idLayanan: number
    tanggal: number
    catatan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JadwalImunisasiAvgAggregateInputType = {
    id?: true
    idLayanan?: true
  }

  export type JadwalImunisasiSumAggregateInputType = {
    id?: true
    idLayanan?: true
  }

  export type JadwalImunisasiMinAggregateInputType = {
    id?: true
    idLayanan?: true
    tanggal?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JadwalImunisasiMaxAggregateInputType = {
    id?: true
    idLayanan?: true
    tanggal?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JadwalImunisasiCountAggregateInputType = {
    id?: true
    idLayanan?: true
    tanggal?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JadwalImunisasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalImunisasi to aggregate.
     */
    where?: JadwalImunisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalImunisasis to fetch.
     */
    orderBy?: JadwalImunisasiOrderByWithRelationInput | JadwalImunisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalImunisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalImunisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalImunisasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JadwalImunisasis
    **/
    _count?: true | JadwalImunisasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JadwalImunisasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JadwalImunisasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalImunisasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalImunisasiMaxAggregateInputType
  }

  export type GetJadwalImunisasiAggregateType<T extends JadwalImunisasiAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwalImunisasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwalImunisasi[P]>
      : GetScalarType<T[P], AggregateJadwalImunisasi[P]>
  }




  export type JadwalImunisasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalImunisasiWhereInput
    orderBy?: JadwalImunisasiOrderByWithAggregationInput | JadwalImunisasiOrderByWithAggregationInput[]
    by: JadwalImunisasiScalarFieldEnum[] | JadwalImunisasiScalarFieldEnum
    having?: JadwalImunisasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalImunisasiCountAggregateInputType | true
    _avg?: JadwalImunisasiAvgAggregateInputType
    _sum?: JadwalImunisasiSumAggregateInputType
    _min?: JadwalImunisasiMinAggregateInputType
    _max?: JadwalImunisasiMaxAggregateInputType
  }

  export type JadwalImunisasiGroupByOutputType = {
    id: bigint
    idLayanan: bigint
    tanggal: Date
    catatan: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: JadwalImunisasiCountAggregateOutputType | null
    _avg: JadwalImunisasiAvgAggregateOutputType | null
    _sum: JadwalImunisasiSumAggregateOutputType | null
    _min: JadwalImunisasiMinAggregateOutputType | null
    _max: JadwalImunisasiMaxAggregateOutputType | null
  }

  type GetJadwalImunisasiGroupByPayload<T extends JadwalImunisasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalImunisasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalImunisasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalImunisasiGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalImunisasiGroupByOutputType[P]>
        }
      >
    >


  export type JadwalImunisasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idLayanan?: boolean
    tanggal?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalImunisasi"]>

  export type JadwalImunisasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idLayanan?: boolean
    tanggal?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalImunisasi"]>

  export type JadwalImunisasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idLayanan?: boolean
    tanggal?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwalImunisasi"]>

  export type JadwalImunisasiSelectScalar = {
    id?: boolean
    idLayanan?: boolean
    tanggal?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JadwalImunisasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idLayanan" | "tanggal" | "catatan" | "createdAt" | "updatedAt", ExtArgs["result"]["jadwalImunisasi"]>
  export type JadwalImunisasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }
  export type JadwalImunisasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }
  export type JadwalImunisasiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }

  export type $JadwalImunisasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JadwalImunisasi"
    objects: {
      layanan: Prisma.$LayananPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      idLayanan: bigint
      tanggal: Date
      catatan: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["jadwalImunisasi"]>
    composites: {}
  }

  type JadwalImunisasiGetPayload<S extends boolean | null | undefined | JadwalImunisasiDefaultArgs> = $Result.GetResult<Prisma.$JadwalImunisasiPayload, S>

  type JadwalImunisasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalImunisasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalImunisasiCountAggregateInputType | true
    }

  export interface JadwalImunisasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JadwalImunisasi'], meta: { name: 'JadwalImunisasi' } }
    /**
     * Find zero or one JadwalImunisasi that matches the filter.
     * @param {JadwalImunisasiFindUniqueArgs} args - Arguments to find a JadwalImunisasi
     * @example
     * // Get one JadwalImunisasi
     * const jadwalImunisasi = await prisma.jadwalImunisasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalImunisasiFindUniqueArgs>(args: SelectSubset<T, JadwalImunisasiFindUniqueArgs<ExtArgs>>): Prisma__JadwalImunisasiClient<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JadwalImunisasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalImunisasiFindUniqueOrThrowArgs} args - Arguments to find a JadwalImunisasi
     * @example
     * // Get one JadwalImunisasi
     * const jadwalImunisasi = await prisma.jadwalImunisasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalImunisasiFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalImunisasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalImunisasiClient<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalImunisasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalImunisasiFindFirstArgs} args - Arguments to find a JadwalImunisasi
     * @example
     * // Get one JadwalImunisasi
     * const jadwalImunisasi = await prisma.jadwalImunisasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalImunisasiFindFirstArgs>(args?: SelectSubset<T, JadwalImunisasiFindFirstArgs<ExtArgs>>): Prisma__JadwalImunisasiClient<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JadwalImunisasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalImunisasiFindFirstOrThrowArgs} args - Arguments to find a JadwalImunisasi
     * @example
     * // Get one JadwalImunisasi
     * const jadwalImunisasi = await prisma.jadwalImunisasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalImunisasiFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalImunisasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalImunisasiClient<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JadwalImunisasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalImunisasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JadwalImunisasis
     * const jadwalImunisasis = await prisma.jadwalImunisasi.findMany()
     * 
     * // Get first 10 JadwalImunisasis
     * const jadwalImunisasis = await prisma.jadwalImunisasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalImunisasiWithIdOnly = await prisma.jadwalImunisasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalImunisasiFindManyArgs>(args?: SelectSubset<T, JadwalImunisasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JadwalImunisasi.
     * @param {JadwalImunisasiCreateArgs} args - Arguments to create a JadwalImunisasi.
     * @example
     * // Create one JadwalImunisasi
     * const JadwalImunisasi = await prisma.jadwalImunisasi.create({
     *   data: {
     *     // ... data to create a JadwalImunisasi
     *   }
     * })
     * 
     */
    create<T extends JadwalImunisasiCreateArgs>(args: SelectSubset<T, JadwalImunisasiCreateArgs<ExtArgs>>): Prisma__JadwalImunisasiClient<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JadwalImunisasis.
     * @param {JadwalImunisasiCreateManyArgs} args - Arguments to create many JadwalImunisasis.
     * @example
     * // Create many JadwalImunisasis
     * const jadwalImunisasi = await prisma.jadwalImunisasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalImunisasiCreateManyArgs>(args?: SelectSubset<T, JadwalImunisasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JadwalImunisasis and returns the data saved in the database.
     * @param {JadwalImunisasiCreateManyAndReturnArgs} args - Arguments to create many JadwalImunisasis.
     * @example
     * // Create many JadwalImunisasis
     * const jadwalImunisasi = await prisma.jadwalImunisasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JadwalImunisasis and only return the `id`
     * const jadwalImunisasiWithIdOnly = await prisma.jadwalImunisasi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JadwalImunisasiCreateManyAndReturnArgs>(args?: SelectSubset<T, JadwalImunisasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JadwalImunisasi.
     * @param {JadwalImunisasiDeleteArgs} args - Arguments to delete one JadwalImunisasi.
     * @example
     * // Delete one JadwalImunisasi
     * const JadwalImunisasi = await prisma.jadwalImunisasi.delete({
     *   where: {
     *     // ... filter to delete one JadwalImunisasi
     *   }
     * })
     * 
     */
    delete<T extends JadwalImunisasiDeleteArgs>(args: SelectSubset<T, JadwalImunisasiDeleteArgs<ExtArgs>>): Prisma__JadwalImunisasiClient<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JadwalImunisasi.
     * @param {JadwalImunisasiUpdateArgs} args - Arguments to update one JadwalImunisasi.
     * @example
     * // Update one JadwalImunisasi
     * const jadwalImunisasi = await prisma.jadwalImunisasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalImunisasiUpdateArgs>(args: SelectSubset<T, JadwalImunisasiUpdateArgs<ExtArgs>>): Prisma__JadwalImunisasiClient<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JadwalImunisasis.
     * @param {JadwalImunisasiDeleteManyArgs} args - Arguments to filter JadwalImunisasis to delete.
     * @example
     * // Delete a few JadwalImunisasis
     * const { count } = await prisma.jadwalImunisasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalImunisasiDeleteManyArgs>(args?: SelectSubset<T, JadwalImunisasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalImunisasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalImunisasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JadwalImunisasis
     * const jadwalImunisasi = await prisma.jadwalImunisasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalImunisasiUpdateManyArgs>(args: SelectSubset<T, JadwalImunisasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalImunisasis and returns the data updated in the database.
     * @param {JadwalImunisasiUpdateManyAndReturnArgs} args - Arguments to update many JadwalImunisasis.
     * @example
     * // Update many JadwalImunisasis
     * const jadwalImunisasi = await prisma.jadwalImunisasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JadwalImunisasis and only return the `id`
     * const jadwalImunisasiWithIdOnly = await prisma.jadwalImunisasi.updateManyAndReturn({
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
    updateManyAndReturn<T extends JadwalImunisasiUpdateManyAndReturnArgs>(args: SelectSubset<T, JadwalImunisasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JadwalImunisasi.
     * @param {JadwalImunisasiUpsertArgs} args - Arguments to update or create a JadwalImunisasi.
     * @example
     * // Update or create a JadwalImunisasi
     * const jadwalImunisasi = await prisma.jadwalImunisasi.upsert({
     *   create: {
     *     // ... data to create a JadwalImunisasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JadwalImunisasi we want to update
     *   }
     * })
     */
    upsert<T extends JadwalImunisasiUpsertArgs>(args: SelectSubset<T, JadwalImunisasiUpsertArgs<ExtArgs>>): Prisma__JadwalImunisasiClient<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JadwalImunisasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalImunisasiCountArgs} args - Arguments to filter JadwalImunisasis to count.
     * @example
     * // Count the number of JadwalImunisasis
     * const count = await prisma.jadwalImunisasi.count({
     *   where: {
     *     // ... the filter for the JadwalImunisasis we want to count
     *   }
     * })
    **/
    count<T extends JadwalImunisasiCountArgs>(
      args?: Subset<T, JadwalImunisasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalImunisasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JadwalImunisasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalImunisasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JadwalImunisasiAggregateArgs>(args: Subset<T, JadwalImunisasiAggregateArgs>): Prisma.PrismaPromise<GetJadwalImunisasiAggregateType<T>>

    /**
     * Group by JadwalImunisasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalImunisasiGroupByArgs} args - Group by arguments.
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
      T extends JadwalImunisasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalImunisasiGroupByArgs['orderBy'] }
        : { orderBy?: JadwalImunisasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JadwalImunisasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalImunisasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JadwalImunisasi model
   */
  readonly fields: JadwalImunisasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JadwalImunisasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalImunisasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    layanan<T extends LayananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LayananDefaultArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the JadwalImunisasi model
   */
  interface JadwalImunisasiFieldRefs {
    readonly id: FieldRef<"JadwalImunisasi", 'BigInt'>
    readonly idLayanan: FieldRef<"JadwalImunisasi", 'BigInt'>
    readonly tanggal: FieldRef<"JadwalImunisasi", 'DateTime'>
    readonly catatan: FieldRef<"JadwalImunisasi", 'String'>
    readonly createdAt: FieldRef<"JadwalImunisasi", 'DateTime'>
    readonly updatedAt: FieldRef<"JadwalImunisasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JadwalImunisasi findUnique
   */
  export type JadwalImunisasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
    /**
     * Filter, which JadwalImunisasi to fetch.
     */
    where: JadwalImunisasiWhereUniqueInput
  }

  /**
   * JadwalImunisasi findUniqueOrThrow
   */
  export type JadwalImunisasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
    /**
     * Filter, which JadwalImunisasi to fetch.
     */
    where: JadwalImunisasiWhereUniqueInput
  }

  /**
   * JadwalImunisasi findFirst
   */
  export type JadwalImunisasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
    /**
     * Filter, which JadwalImunisasi to fetch.
     */
    where?: JadwalImunisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalImunisasis to fetch.
     */
    orderBy?: JadwalImunisasiOrderByWithRelationInput | JadwalImunisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalImunisasis.
     */
    cursor?: JadwalImunisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalImunisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalImunisasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalImunisasis.
     */
    distinct?: JadwalImunisasiScalarFieldEnum | JadwalImunisasiScalarFieldEnum[]
  }

  /**
   * JadwalImunisasi findFirstOrThrow
   */
  export type JadwalImunisasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
    /**
     * Filter, which JadwalImunisasi to fetch.
     */
    where?: JadwalImunisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalImunisasis to fetch.
     */
    orderBy?: JadwalImunisasiOrderByWithRelationInput | JadwalImunisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalImunisasis.
     */
    cursor?: JadwalImunisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalImunisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalImunisasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalImunisasis.
     */
    distinct?: JadwalImunisasiScalarFieldEnum | JadwalImunisasiScalarFieldEnum[]
  }

  /**
   * JadwalImunisasi findMany
   */
  export type JadwalImunisasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
    /**
     * Filter, which JadwalImunisasis to fetch.
     */
    where?: JadwalImunisasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalImunisasis to fetch.
     */
    orderBy?: JadwalImunisasiOrderByWithRelationInput | JadwalImunisasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JadwalImunisasis.
     */
    cursor?: JadwalImunisasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalImunisasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalImunisasis.
     */
    skip?: number
    distinct?: JadwalImunisasiScalarFieldEnum | JadwalImunisasiScalarFieldEnum[]
  }

  /**
   * JadwalImunisasi create
   */
  export type JadwalImunisasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
    /**
     * The data needed to create a JadwalImunisasi.
     */
    data: XOR<JadwalImunisasiCreateInput, JadwalImunisasiUncheckedCreateInput>
  }

  /**
   * JadwalImunisasi createMany
   */
  export type JadwalImunisasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JadwalImunisasis.
     */
    data: JadwalImunisasiCreateManyInput | JadwalImunisasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JadwalImunisasi createManyAndReturn
   */
  export type JadwalImunisasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * The data used to create many JadwalImunisasis.
     */
    data: JadwalImunisasiCreateManyInput | JadwalImunisasiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalImunisasi update
   */
  export type JadwalImunisasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
    /**
     * The data needed to update a JadwalImunisasi.
     */
    data: XOR<JadwalImunisasiUpdateInput, JadwalImunisasiUncheckedUpdateInput>
    /**
     * Choose, which JadwalImunisasi to update.
     */
    where: JadwalImunisasiWhereUniqueInput
  }

  /**
   * JadwalImunisasi updateMany
   */
  export type JadwalImunisasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JadwalImunisasis.
     */
    data: XOR<JadwalImunisasiUpdateManyMutationInput, JadwalImunisasiUncheckedUpdateManyInput>
    /**
     * Filter which JadwalImunisasis to update
     */
    where?: JadwalImunisasiWhereInput
    /**
     * Limit how many JadwalImunisasis to update.
     */
    limit?: number
  }

  /**
   * JadwalImunisasi updateManyAndReturn
   */
  export type JadwalImunisasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * The data used to update JadwalImunisasis.
     */
    data: XOR<JadwalImunisasiUpdateManyMutationInput, JadwalImunisasiUncheckedUpdateManyInput>
    /**
     * Filter which JadwalImunisasis to update
     */
    where?: JadwalImunisasiWhereInput
    /**
     * Limit how many JadwalImunisasis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JadwalImunisasi upsert
   */
  export type JadwalImunisasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
    /**
     * The filter to search for the JadwalImunisasi to update in case it exists.
     */
    where: JadwalImunisasiWhereUniqueInput
    /**
     * In case the JadwalImunisasi found by the `where` argument doesn't exist, create a new JadwalImunisasi with this data.
     */
    create: XOR<JadwalImunisasiCreateInput, JadwalImunisasiUncheckedCreateInput>
    /**
     * In case the JadwalImunisasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalImunisasiUpdateInput, JadwalImunisasiUncheckedUpdateInput>
  }

  /**
   * JadwalImunisasi delete
   */
  export type JadwalImunisasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
    /**
     * Filter which JadwalImunisasi to delete.
     */
    where: JadwalImunisasiWhereUniqueInput
  }

  /**
   * JadwalImunisasi deleteMany
   */
  export type JadwalImunisasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JadwalImunisasis to delete
     */
    where?: JadwalImunisasiWhereInput
    /**
     * Limit how many JadwalImunisasis to delete.
     */
    limit?: number
  }

  /**
   * JadwalImunisasi without action
   */
  export type JadwalImunisasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
  }


  /**
   * Model Kunjungan
   */

  export type AggregateKunjungan = {
    _count: KunjunganCountAggregateOutputType | null
    _avg: KunjunganAvgAggregateOutputType | null
    _sum: KunjunganSumAggregateOutputType | null
    _min: KunjunganMinAggregateOutputType | null
    _max: KunjunganMaxAggregateOutputType | null
  }

  export type KunjunganAvgAggregateOutputType = {
    id: number | null
    idPasien: number | null
    idLayanan: number | null
  }

  export type KunjunganSumAggregateOutputType = {
    id: bigint | null
    idPasien: bigint | null
    idLayanan: bigint | null
  }

  export type KunjunganMinAggregateOutputType = {
    id: bigint | null
    idPasien: bigint | null
    idLayanan: bigint | null
    tglKunjungan: Date | null
    waktuKunjungan: Date | null
    status: $Enums.StatusKunjungan | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KunjunganMaxAggregateOutputType = {
    id: bigint | null
    idPasien: bigint | null
    idLayanan: bigint | null
    tglKunjungan: Date | null
    waktuKunjungan: Date | null
    status: $Enums.StatusKunjungan | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KunjunganCountAggregateOutputType = {
    id: number
    idPasien: number
    idLayanan: number
    tglKunjungan: number
    waktuKunjungan: number
    status: number
    catatan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KunjunganAvgAggregateInputType = {
    id?: true
    idPasien?: true
    idLayanan?: true
  }

  export type KunjunganSumAggregateInputType = {
    id?: true
    idPasien?: true
    idLayanan?: true
  }

  export type KunjunganMinAggregateInputType = {
    id?: true
    idPasien?: true
    idLayanan?: true
    tglKunjungan?: true
    waktuKunjungan?: true
    status?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KunjunganMaxAggregateInputType = {
    id?: true
    idPasien?: true
    idLayanan?: true
    tglKunjungan?: true
    waktuKunjungan?: true
    status?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KunjunganCountAggregateInputType = {
    id?: true
    idPasien?: true
    idLayanan?: true
    tglKunjungan?: true
    waktuKunjungan?: true
    status?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KunjunganAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kunjungan to aggregate.
     */
    where?: KunjunganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kunjungans to fetch.
     */
    orderBy?: KunjunganOrderByWithRelationInput | KunjunganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KunjunganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kunjungans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kunjungans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kunjungans
    **/
    _count?: true | KunjunganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KunjunganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KunjunganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KunjunganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KunjunganMaxAggregateInputType
  }

  export type GetKunjunganAggregateType<T extends KunjunganAggregateArgs> = {
        [P in keyof T & keyof AggregateKunjungan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKunjungan[P]>
      : GetScalarType<T[P], AggregateKunjungan[P]>
  }




  export type KunjunganGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KunjunganWhereInput
    orderBy?: KunjunganOrderByWithAggregationInput | KunjunganOrderByWithAggregationInput[]
    by: KunjunganScalarFieldEnum[] | KunjunganScalarFieldEnum
    having?: KunjunganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KunjunganCountAggregateInputType | true
    _avg?: KunjunganAvgAggregateInputType
    _sum?: KunjunganSumAggregateInputType
    _min?: KunjunganMinAggregateInputType
    _max?: KunjunganMaxAggregateInputType
  }

  export type KunjunganGroupByOutputType = {
    id: bigint
    idPasien: bigint
    idLayanan: bigint
    tglKunjungan: Date
    waktuKunjungan: Date
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: KunjunganCountAggregateOutputType | null
    _avg: KunjunganAvgAggregateOutputType | null
    _sum: KunjunganSumAggregateOutputType | null
    _min: KunjunganMinAggregateOutputType | null
    _max: KunjunganMaxAggregateOutputType | null
  }

  type GetKunjunganGroupByPayload<T extends KunjunganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KunjunganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KunjunganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KunjunganGroupByOutputType[P]>
            : GetScalarType<T[P], KunjunganGroupByOutputType[P]>
        }
      >
    >


  export type KunjunganSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPasien?: boolean
    idLayanan?: boolean
    tglKunjungan?: boolean
    waktuKunjungan?: boolean
    status?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
    rekamMedis?: boolean | Kunjungan$rekamMedisArgs<ExtArgs>
    _count?: boolean | KunjunganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kunjungan"]>

  export type KunjunganSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPasien?: boolean
    idLayanan?: boolean
    tglKunjungan?: boolean
    waktuKunjungan?: boolean
    status?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kunjungan"]>

  export type KunjunganSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPasien?: boolean
    idLayanan?: boolean
    tglKunjungan?: boolean
    waktuKunjungan?: boolean
    status?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kunjungan"]>

  export type KunjunganSelectScalar = {
    id?: boolean
    idPasien?: boolean
    idLayanan?: boolean
    tglKunjungan?: boolean
    waktuKunjungan?: boolean
    status?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KunjunganOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idPasien" | "idLayanan" | "tglKunjungan" | "waktuKunjungan" | "status" | "catatan" | "createdAt" | "updatedAt", ExtArgs["result"]["kunjungan"]>
  export type KunjunganInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
    rekamMedis?: boolean | Kunjungan$rekamMedisArgs<ExtArgs>
    _count?: boolean | KunjunganCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KunjunganIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }
  export type KunjunganIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pasien?: boolean | PasienDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }

  export type $KunjunganPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kunjungan"
    objects: {
      pasien: Prisma.$PasienPayload<ExtArgs>
      layanan: Prisma.$LayananPayload<ExtArgs>
      rekamMedis: Prisma.$RekamMedisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      idPasien: bigint
      idLayanan: bigint
      tglKunjungan: Date
      waktuKunjungan: Date
      status: $Enums.StatusKunjungan
      catatan: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["kunjungan"]>
    composites: {}
  }

  type KunjunganGetPayload<S extends boolean | null | undefined | KunjunganDefaultArgs> = $Result.GetResult<Prisma.$KunjunganPayload, S>

  type KunjunganCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KunjunganFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KunjunganCountAggregateInputType | true
    }

  export interface KunjunganDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kunjungan'], meta: { name: 'Kunjungan' } }
    /**
     * Find zero or one Kunjungan that matches the filter.
     * @param {KunjunganFindUniqueArgs} args - Arguments to find a Kunjungan
     * @example
     * // Get one Kunjungan
     * const kunjungan = await prisma.kunjungan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KunjunganFindUniqueArgs>(args: SelectSubset<T, KunjunganFindUniqueArgs<ExtArgs>>): Prisma__KunjunganClient<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kunjungan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KunjunganFindUniqueOrThrowArgs} args - Arguments to find a Kunjungan
     * @example
     * // Get one Kunjungan
     * const kunjungan = await prisma.kunjungan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KunjunganFindUniqueOrThrowArgs>(args: SelectSubset<T, KunjunganFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KunjunganClient<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kunjungan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KunjunganFindFirstArgs} args - Arguments to find a Kunjungan
     * @example
     * // Get one Kunjungan
     * const kunjungan = await prisma.kunjungan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KunjunganFindFirstArgs>(args?: SelectSubset<T, KunjunganFindFirstArgs<ExtArgs>>): Prisma__KunjunganClient<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kunjungan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KunjunganFindFirstOrThrowArgs} args - Arguments to find a Kunjungan
     * @example
     * // Get one Kunjungan
     * const kunjungan = await prisma.kunjungan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KunjunganFindFirstOrThrowArgs>(args?: SelectSubset<T, KunjunganFindFirstOrThrowArgs<ExtArgs>>): Prisma__KunjunganClient<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kunjungans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KunjunganFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kunjungans
     * const kunjungans = await prisma.kunjungan.findMany()
     * 
     * // Get first 10 Kunjungans
     * const kunjungans = await prisma.kunjungan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kunjunganWithIdOnly = await prisma.kunjungan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KunjunganFindManyArgs>(args?: SelectSubset<T, KunjunganFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kunjungan.
     * @param {KunjunganCreateArgs} args - Arguments to create a Kunjungan.
     * @example
     * // Create one Kunjungan
     * const Kunjungan = await prisma.kunjungan.create({
     *   data: {
     *     // ... data to create a Kunjungan
     *   }
     * })
     * 
     */
    create<T extends KunjunganCreateArgs>(args: SelectSubset<T, KunjunganCreateArgs<ExtArgs>>): Prisma__KunjunganClient<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kunjungans.
     * @param {KunjunganCreateManyArgs} args - Arguments to create many Kunjungans.
     * @example
     * // Create many Kunjungans
     * const kunjungan = await prisma.kunjungan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KunjunganCreateManyArgs>(args?: SelectSubset<T, KunjunganCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kunjungans and returns the data saved in the database.
     * @param {KunjunganCreateManyAndReturnArgs} args - Arguments to create many Kunjungans.
     * @example
     * // Create many Kunjungans
     * const kunjungan = await prisma.kunjungan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kunjungans and only return the `id`
     * const kunjunganWithIdOnly = await prisma.kunjungan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KunjunganCreateManyAndReturnArgs>(args?: SelectSubset<T, KunjunganCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kunjungan.
     * @param {KunjunganDeleteArgs} args - Arguments to delete one Kunjungan.
     * @example
     * // Delete one Kunjungan
     * const Kunjungan = await prisma.kunjungan.delete({
     *   where: {
     *     // ... filter to delete one Kunjungan
     *   }
     * })
     * 
     */
    delete<T extends KunjunganDeleteArgs>(args: SelectSubset<T, KunjunganDeleteArgs<ExtArgs>>): Prisma__KunjunganClient<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kunjungan.
     * @param {KunjunganUpdateArgs} args - Arguments to update one Kunjungan.
     * @example
     * // Update one Kunjungan
     * const kunjungan = await prisma.kunjungan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KunjunganUpdateArgs>(args: SelectSubset<T, KunjunganUpdateArgs<ExtArgs>>): Prisma__KunjunganClient<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kunjungans.
     * @param {KunjunganDeleteManyArgs} args - Arguments to filter Kunjungans to delete.
     * @example
     * // Delete a few Kunjungans
     * const { count } = await prisma.kunjungan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KunjunganDeleteManyArgs>(args?: SelectSubset<T, KunjunganDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kunjungans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KunjunganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kunjungans
     * const kunjungan = await prisma.kunjungan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KunjunganUpdateManyArgs>(args: SelectSubset<T, KunjunganUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kunjungans and returns the data updated in the database.
     * @param {KunjunganUpdateManyAndReturnArgs} args - Arguments to update many Kunjungans.
     * @example
     * // Update many Kunjungans
     * const kunjungan = await prisma.kunjungan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kunjungans and only return the `id`
     * const kunjunganWithIdOnly = await prisma.kunjungan.updateManyAndReturn({
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
    updateManyAndReturn<T extends KunjunganUpdateManyAndReturnArgs>(args: SelectSubset<T, KunjunganUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kunjungan.
     * @param {KunjunganUpsertArgs} args - Arguments to update or create a Kunjungan.
     * @example
     * // Update or create a Kunjungan
     * const kunjungan = await prisma.kunjungan.upsert({
     *   create: {
     *     // ... data to create a Kunjungan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kunjungan we want to update
     *   }
     * })
     */
    upsert<T extends KunjunganUpsertArgs>(args: SelectSubset<T, KunjunganUpsertArgs<ExtArgs>>): Prisma__KunjunganClient<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kunjungans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KunjunganCountArgs} args - Arguments to filter Kunjungans to count.
     * @example
     * // Count the number of Kunjungans
     * const count = await prisma.kunjungan.count({
     *   where: {
     *     // ... the filter for the Kunjungans we want to count
     *   }
     * })
    **/
    count<T extends KunjunganCountArgs>(
      args?: Subset<T, KunjunganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KunjunganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kunjungan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KunjunganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KunjunganAggregateArgs>(args: Subset<T, KunjunganAggregateArgs>): Prisma.PrismaPromise<GetKunjunganAggregateType<T>>

    /**
     * Group by Kunjungan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KunjunganGroupByArgs} args - Group by arguments.
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
      T extends KunjunganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KunjunganGroupByArgs['orderBy'] }
        : { orderBy?: KunjunganGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KunjunganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKunjunganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kunjungan model
   */
  readonly fields: KunjunganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kunjungan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KunjunganClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pasien<T extends PasienDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PasienDefaultArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    layanan<T extends LayananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LayananDefaultArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rekamMedis<T extends Kunjungan$rekamMedisArgs<ExtArgs> = {}>(args?: Subset<T, Kunjungan$rekamMedisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kunjungan model
   */
  interface KunjunganFieldRefs {
    readonly id: FieldRef<"Kunjungan", 'BigInt'>
    readonly idPasien: FieldRef<"Kunjungan", 'BigInt'>
    readonly idLayanan: FieldRef<"Kunjungan", 'BigInt'>
    readonly tglKunjungan: FieldRef<"Kunjungan", 'DateTime'>
    readonly waktuKunjungan: FieldRef<"Kunjungan", 'DateTime'>
    readonly status: FieldRef<"Kunjungan", 'StatusKunjungan'>
    readonly catatan: FieldRef<"Kunjungan", 'String'>
    readonly createdAt: FieldRef<"Kunjungan", 'DateTime'>
    readonly updatedAt: FieldRef<"Kunjungan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Kunjungan findUnique
   */
  export type KunjunganFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    /**
     * Filter, which Kunjungan to fetch.
     */
    where: KunjunganWhereUniqueInput
  }

  /**
   * Kunjungan findUniqueOrThrow
   */
  export type KunjunganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    /**
     * Filter, which Kunjungan to fetch.
     */
    where: KunjunganWhereUniqueInput
  }

  /**
   * Kunjungan findFirst
   */
  export type KunjunganFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    /**
     * Filter, which Kunjungan to fetch.
     */
    where?: KunjunganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kunjungans to fetch.
     */
    orderBy?: KunjunganOrderByWithRelationInput | KunjunganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kunjungans.
     */
    cursor?: KunjunganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kunjungans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kunjungans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kunjungans.
     */
    distinct?: KunjunganScalarFieldEnum | KunjunganScalarFieldEnum[]
  }

  /**
   * Kunjungan findFirstOrThrow
   */
  export type KunjunganFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    /**
     * Filter, which Kunjungan to fetch.
     */
    where?: KunjunganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kunjungans to fetch.
     */
    orderBy?: KunjunganOrderByWithRelationInput | KunjunganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kunjungans.
     */
    cursor?: KunjunganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kunjungans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kunjungans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kunjungans.
     */
    distinct?: KunjunganScalarFieldEnum | KunjunganScalarFieldEnum[]
  }

  /**
   * Kunjungan findMany
   */
  export type KunjunganFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    /**
     * Filter, which Kunjungans to fetch.
     */
    where?: KunjunganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kunjungans to fetch.
     */
    orderBy?: KunjunganOrderByWithRelationInput | KunjunganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kunjungans.
     */
    cursor?: KunjunganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kunjungans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kunjungans.
     */
    skip?: number
    distinct?: KunjunganScalarFieldEnum | KunjunganScalarFieldEnum[]
  }

  /**
   * Kunjungan create
   */
  export type KunjunganCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    /**
     * The data needed to create a Kunjungan.
     */
    data: XOR<KunjunganCreateInput, KunjunganUncheckedCreateInput>
  }

  /**
   * Kunjungan createMany
   */
  export type KunjunganCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kunjungans.
     */
    data: KunjunganCreateManyInput | KunjunganCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kunjungan createManyAndReturn
   */
  export type KunjunganCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * The data used to create many Kunjungans.
     */
    data: KunjunganCreateManyInput | KunjunganCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kunjungan update
   */
  export type KunjunganUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    /**
     * The data needed to update a Kunjungan.
     */
    data: XOR<KunjunganUpdateInput, KunjunganUncheckedUpdateInput>
    /**
     * Choose, which Kunjungan to update.
     */
    where: KunjunganWhereUniqueInput
  }

  /**
   * Kunjungan updateMany
   */
  export type KunjunganUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kunjungans.
     */
    data: XOR<KunjunganUpdateManyMutationInput, KunjunganUncheckedUpdateManyInput>
    /**
     * Filter which Kunjungans to update
     */
    where?: KunjunganWhereInput
    /**
     * Limit how many Kunjungans to update.
     */
    limit?: number
  }

  /**
   * Kunjungan updateManyAndReturn
   */
  export type KunjunganUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * The data used to update Kunjungans.
     */
    data: XOR<KunjunganUpdateManyMutationInput, KunjunganUncheckedUpdateManyInput>
    /**
     * Filter which Kunjungans to update
     */
    where?: KunjunganWhereInput
    /**
     * Limit how many Kunjungans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kunjungan upsert
   */
  export type KunjunganUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    /**
     * The filter to search for the Kunjungan to update in case it exists.
     */
    where: KunjunganWhereUniqueInput
    /**
     * In case the Kunjungan found by the `where` argument doesn't exist, create a new Kunjungan with this data.
     */
    create: XOR<KunjunganCreateInput, KunjunganUncheckedCreateInput>
    /**
     * In case the Kunjungan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KunjunganUpdateInput, KunjunganUncheckedUpdateInput>
  }

  /**
   * Kunjungan delete
   */
  export type KunjunganDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    /**
     * Filter which Kunjungan to delete.
     */
    where: KunjunganWhereUniqueInput
  }

  /**
   * Kunjungan deleteMany
   */
  export type KunjunganDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kunjungans to delete
     */
    where?: KunjunganWhereInput
    /**
     * Limit how many Kunjungans to delete.
     */
    limit?: number
  }

  /**
   * Kunjungan.rekamMedis
   */
  export type Kunjungan$rekamMedisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
    where?: RekamMedisWhereInput
    orderBy?: RekamMedisOrderByWithRelationInput | RekamMedisOrderByWithRelationInput[]
    cursor?: RekamMedisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RekamMedisScalarFieldEnum | RekamMedisScalarFieldEnum[]
  }

  /**
   * Kunjungan without action
   */
  export type KunjunganDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
  }


  /**
   * Model Layanan
   */

  export type AggregateLayanan = {
    _count: LayananCountAggregateOutputType | null
    _avg: LayananAvgAggregateOutputType | null
    _sum: LayananSumAggregateOutputType | null
    _min: LayananMinAggregateOutputType | null
    _max: LayananMaxAggregateOutputType | null
  }

  export type LayananAvgAggregateOutputType = {
    id: number | null
  }

  export type LayananSumAggregateOutputType = {
    id: bigint | null
  }

  export type LayananMinAggregateOutputType = {
    id: bigint | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayananMaxAggregateOutputType = {
    id: bigint | null
    nama: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayananCountAggregateOutputType = {
    id: number
    nama: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LayananAvgAggregateInputType = {
    id?: true
  }

  export type LayananSumAggregateInputType = {
    id?: true
  }

  export type LayananMinAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayananMaxAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayananCountAggregateInputType = {
    id?: true
    nama?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LayananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layanan to aggregate.
     */
    where?: LayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layanans to fetch.
     */
    orderBy?: LayananOrderByWithRelationInput | LayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Layanans
    **/
    _count?: true | LayananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayananMaxAggregateInputType
  }

  export type GetLayananAggregateType<T extends LayananAggregateArgs> = {
        [P in keyof T & keyof AggregateLayanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayanan[P]>
      : GetScalarType<T[P], AggregateLayanan[P]>
  }




  export type LayananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayananWhereInput
    orderBy?: LayananOrderByWithAggregationInput | LayananOrderByWithAggregationInput[]
    by: LayananScalarFieldEnum[] | LayananScalarFieldEnum
    having?: LayananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayananCountAggregateInputType | true
    _avg?: LayananAvgAggregateInputType
    _sum?: LayananSumAggregateInputType
    _min?: LayananMinAggregateInputType
    _max?: LayananMaxAggregateInputType
  }

  export type LayananGroupByOutputType = {
    id: bigint
    nama: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: LayananCountAggregateOutputType | null
    _avg: LayananAvgAggregateOutputType | null
    _sum: LayananSumAggregateOutputType | null
    _min: LayananMinAggregateOutputType | null
    _max: LayananMaxAggregateOutputType | null
  }

  type GetLayananGroupByPayload<T extends LayananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayananGroupByOutputType[P]>
            : GetScalarType<T[P], LayananGroupByOutputType[P]>
        }
      >
    >


  export type LayananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    edukasi?: boolean | Layanan$edukasiArgs<ExtArgs>
    layananEdukasi?: boolean | Layanan$layananEdukasiArgs<ExtArgs>
    jadwalImunisasi?: boolean | Layanan$jadwalImunisasiArgs<ExtArgs>
    kunjungan?: boolean | Layanan$kunjunganArgs<ExtArgs>
    _count?: boolean | LayananCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layanan"]>

  export type LayananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["layanan"]>

  export type LayananSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["layanan"]>

  export type LayananSelectScalar = {
    id?: boolean
    nama?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LayananOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "createdAt" | "updatedAt", ExtArgs["result"]["layanan"]>
  export type LayananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edukasi?: boolean | Layanan$edukasiArgs<ExtArgs>
    layananEdukasi?: boolean | Layanan$layananEdukasiArgs<ExtArgs>
    jadwalImunisasi?: boolean | Layanan$jadwalImunisasiArgs<ExtArgs>
    kunjungan?: boolean | Layanan$kunjunganArgs<ExtArgs>
    _count?: boolean | LayananCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LayananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LayananIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LayananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Layanan"
    objects: {
      edukasi: Prisma.$EdukasiPayload<ExtArgs>[]
      layananEdukasi: Prisma.$LayananEdukasiPayload<ExtArgs>[]
      jadwalImunisasi: Prisma.$JadwalImunisasiPayload<ExtArgs>[]
      kunjungan: Prisma.$KunjunganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nama: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["layanan"]>
    composites: {}
  }

  type LayananGetPayload<S extends boolean | null | undefined | LayananDefaultArgs> = $Result.GetResult<Prisma.$LayananPayload, S>

  type LayananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayananFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayananCountAggregateInputType | true
    }

  export interface LayananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Layanan'], meta: { name: 'Layanan' } }
    /**
     * Find zero or one Layanan that matches the filter.
     * @param {LayananFindUniqueArgs} args - Arguments to find a Layanan
     * @example
     * // Get one Layanan
     * const layanan = await prisma.layanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayananFindUniqueArgs>(args: SelectSubset<T, LayananFindUniqueArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Layanan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayananFindUniqueOrThrowArgs} args - Arguments to find a Layanan
     * @example
     * // Get one Layanan
     * const layanan = await prisma.layanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayananFindUniqueOrThrowArgs>(args: SelectSubset<T, LayananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananFindFirstArgs} args - Arguments to find a Layanan
     * @example
     * // Get one Layanan
     * const layanan = await prisma.layanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayananFindFirstArgs>(args?: SelectSubset<T, LayananFindFirstArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Layanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananFindFirstOrThrowArgs} args - Arguments to find a Layanan
     * @example
     * // Get one Layanan
     * const layanan = await prisma.layanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayananFindFirstOrThrowArgs>(args?: SelectSubset<T, LayananFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Layanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Layanans
     * const layanans = await prisma.layanan.findMany()
     * 
     * // Get first 10 Layanans
     * const layanans = await prisma.layanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const layananWithIdOnly = await prisma.layanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LayananFindManyArgs>(args?: SelectSubset<T, LayananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Layanan.
     * @param {LayananCreateArgs} args - Arguments to create a Layanan.
     * @example
     * // Create one Layanan
     * const Layanan = await prisma.layanan.create({
     *   data: {
     *     // ... data to create a Layanan
     *   }
     * })
     * 
     */
    create<T extends LayananCreateArgs>(args: SelectSubset<T, LayananCreateArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Layanans.
     * @param {LayananCreateManyArgs} args - Arguments to create many Layanans.
     * @example
     * // Create many Layanans
     * const layanan = await prisma.layanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayananCreateManyArgs>(args?: SelectSubset<T, LayananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Layanans and returns the data saved in the database.
     * @param {LayananCreateManyAndReturnArgs} args - Arguments to create many Layanans.
     * @example
     * // Create many Layanans
     * const layanan = await prisma.layanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Layanans and only return the `id`
     * const layananWithIdOnly = await prisma.layanan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayananCreateManyAndReturnArgs>(args?: SelectSubset<T, LayananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Layanan.
     * @param {LayananDeleteArgs} args - Arguments to delete one Layanan.
     * @example
     * // Delete one Layanan
     * const Layanan = await prisma.layanan.delete({
     *   where: {
     *     // ... filter to delete one Layanan
     *   }
     * })
     * 
     */
    delete<T extends LayananDeleteArgs>(args: SelectSubset<T, LayananDeleteArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Layanan.
     * @param {LayananUpdateArgs} args - Arguments to update one Layanan.
     * @example
     * // Update one Layanan
     * const layanan = await prisma.layanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayananUpdateArgs>(args: SelectSubset<T, LayananUpdateArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Layanans.
     * @param {LayananDeleteManyArgs} args - Arguments to filter Layanans to delete.
     * @example
     * // Delete a few Layanans
     * const { count } = await prisma.layanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayananDeleteManyArgs>(args?: SelectSubset<T, LayananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Layanans
     * const layanan = await prisma.layanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayananUpdateManyArgs>(args: SelectSubset<T, LayananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Layanans and returns the data updated in the database.
     * @param {LayananUpdateManyAndReturnArgs} args - Arguments to update many Layanans.
     * @example
     * // Update many Layanans
     * const layanan = await prisma.layanan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Layanans and only return the `id`
     * const layananWithIdOnly = await prisma.layanan.updateManyAndReturn({
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
    updateManyAndReturn<T extends LayananUpdateManyAndReturnArgs>(args: SelectSubset<T, LayananUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Layanan.
     * @param {LayananUpsertArgs} args - Arguments to update or create a Layanan.
     * @example
     * // Update or create a Layanan
     * const layanan = await prisma.layanan.upsert({
     *   create: {
     *     // ... data to create a Layanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Layanan we want to update
     *   }
     * })
     */
    upsert<T extends LayananUpsertArgs>(args: SelectSubset<T, LayananUpsertArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Layanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananCountArgs} args - Arguments to filter Layanans to count.
     * @example
     * // Count the number of Layanans
     * const count = await prisma.layanan.count({
     *   where: {
     *     // ... the filter for the Layanans we want to count
     *   }
     * })
    **/
    count<T extends LayananCountArgs>(
      args?: Subset<T, LayananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Layanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayananAggregateArgs>(args: Subset<T, LayananAggregateArgs>): Prisma.PrismaPromise<GetLayananAggregateType<T>>

    /**
     * Group by Layanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananGroupByArgs} args - Group by arguments.
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
      T extends LayananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayananGroupByArgs['orderBy'] }
        : { orderBy?: LayananGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LayananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Layanan model
   */
  readonly fields: LayananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Layanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    edukasi<T extends Layanan$edukasiArgs<ExtArgs> = {}>(args?: Subset<T, Layanan$edukasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    layananEdukasi<T extends Layanan$layananEdukasiArgs<ExtArgs> = {}>(args?: Subset<T, Layanan$layananEdukasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jadwalImunisasi<T extends Layanan$jadwalImunisasiArgs<ExtArgs> = {}>(args?: Subset<T, Layanan$jadwalImunisasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalImunisasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    kunjungan<T extends Layanan$kunjunganArgs<ExtArgs> = {}>(args?: Subset<T, Layanan$kunjunganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Layanan model
   */
  interface LayananFieldRefs {
    readonly id: FieldRef<"Layanan", 'BigInt'>
    readonly nama: FieldRef<"Layanan", 'String'>
    readonly createdAt: FieldRef<"Layanan", 'DateTime'>
    readonly updatedAt: FieldRef<"Layanan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Layanan findUnique
   */
  export type LayananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter, which Layanan to fetch.
     */
    where: LayananWhereUniqueInput
  }

  /**
   * Layanan findUniqueOrThrow
   */
  export type LayananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter, which Layanan to fetch.
     */
    where: LayananWhereUniqueInput
  }

  /**
   * Layanan findFirst
   */
  export type LayananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter, which Layanan to fetch.
     */
    where?: LayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layanans to fetch.
     */
    orderBy?: LayananOrderByWithRelationInput | LayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layanans.
     */
    cursor?: LayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layanans.
     */
    distinct?: LayananScalarFieldEnum | LayananScalarFieldEnum[]
  }

  /**
   * Layanan findFirstOrThrow
   */
  export type LayananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter, which Layanan to fetch.
     */
    where?: LayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layanans to fetch.
     */
    orderBy?: LayananOrderByWithRelationInput | LayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Layanans.
     */
    cursor?: LayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Layanans.
     */
    distinct?: LayananScalarFieldEnum | LayananScalarFieldEnum[]
  }

  /**
   * Layanan findMany
   */
  export type LayananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter, which Layanans to fetch.
     */
    where?: LayananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Layanans to fetch.
     */
    orderBy?: LayananOrderByWithRelationInput | LayananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Layanans.
     */
    cursor?: LayananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Layanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Layanans.
     */
    skip?: number
    distinct?: LayananScalarFieldEnum | LayananScalarFieldEnum[]
  }

  /**
   * Layanan create
   */
  export type LayananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * The data needed to create a Layanan.
     */
    data: XOR<LayananCreateInput, LayananUncheckedCreateInput>
  }

  /**
   * Layanan createMany
   */
  export type LayananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Layanans.
     */
    data: LayananCreateManyInput | LayananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Layanan createManyAndReturn
   */
  export type LayananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * The data used to create many Layanans.
     */
    data: LayananCreateManyInput | LayananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Layanan update
   */
  export type LayananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * The data needed to update a Layanan.
     */
    data: XOR<LayananUpdateInput, LayananUncheckedUpdateInput>
    /**
     * Choose, which Layanan to update.
     */
    where: LayananWhereUniqueInput
  }

  /**
   * Layanan updateMany
   */
  export type LayananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Layanans.
     */
    data: XOR<LayananUpdateManyMutationInput, LayananUncheckedUpdateManyInput>
    /**
     * Filter which Layanans to update
     */
    where?: LayananWhereInput
    /**
     * Limit how many Layanans to update.
     */
    limit?: number
  }

  /**
   * Layanan updateManyAndReturn
   */
  export type LayananUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * The data used to update Layanans.
     */
    data: XOR<LayananUpdateManyMutationInput, LayananUncheckedUpdateManyInput>
    /**
     * Filter which Layanans to update
     */
    where?: LayananWhereInput
    /**
     * Limit how many Layanans to update.
     */
    limit?: number
  }

  /**
   * Layanan upsert
   */
  export type LayananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * The filter to search for the Layanan to update in case it exists.
     */
    where: LayananWhereUniqueInput
    /**
     * In case the Layanan found by the `where` argument doesn't exist, create a new Layanan with this data.
     */
    create: XOR<LayananCreateInput, LayananUncheckedCreateInput>
    /**
     * In case the Layanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayananUpdateInput, LayananUncheckedUpdateInput>
  }

  /**
   * Layanan delete
   */
  export type LayananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
    /**
     * Filter which Layanan to delete.
     */
    where: LayananWhereUniqueInput
  }

  /**
   * Layanan deleteMany
   */
  export type LayananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Layanans to delete
     */
    where?: LayananWhereInput
    /**
     * Limit how many Layanans to delete.
     */
    limit?: number
  }

  /**
   * Layanan.edukasi
   */
  export type Layanan$edukasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edukasi
     */
    select?: EdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edukasi
     */
    omit?: EdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdukasiInclude<ExtArgs> | null
    where?: EdukasiWhereInput
    orderBy?: EdukasiOrderByWithRelationInput | EdukasiOrderByWithRelationInput[]
    cursor?: EdukasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EdukasiScalarFieldEnum | EdukasiScalarFieldEnum[]
  }

  /**
   * Layanan.layananEdukasi
   */
  export type Layanan$layananEdukasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    where?: LayananEdukasiWhereInput
    orderBy?: LayananEdukasiOrderByWithRelationInput | LayananEdukasiOrderByWithRelationInput[]
    cursor?: LayananEdukasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LayananEdukasiScalarFieldEnum | LayananEdukasiScalarFieldEnum[]
  }

  /**
   * Layanan.jadwalImunisasi
   */
  export type Layanan$jadwalImunisasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JadwalImunisasi
     */
    select?: JadwalImunisasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JadwalImunisasi
     */
    omit?: JadwalImunisasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalImunisasiInclude<ExtArgs> | null
    where?: JadwalImunisasiWhereInput
    orderBy?: JadwalImunisasiOrderByWithRelationInput | JadwalImunisasiOrderByWithRelationInput[]
    cursor?: JadwalImunisasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalImunisasiScalarFieldEnum | JadwalImunisasiScalarFieldEnum[]
  }

  /**
   * Layanan.kunjungan
   */
  export type Layanan$kunjunganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    where?: KunjunganWhereInput
    orderBy?: KunjunganOrderByWithRelationInput | KunjunganOrderByWithRelationInput[]
    cursor?: KunjunganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KunjunganScalarFieldEnum | KunjunganScalarFieldEnum[]
  }

  /**
   * Layanan without action
   */
  export type LayananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Layanan
     */
    select?: LayananSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Layanan
     */
    omit?: LayananOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananInclude<ExtArgs> | null
  }


  /**
   * Model LayananEdukasi
   */

  export type AggregateLayananEdukasi = {
    _count: LayananEdukasiCountAggregateOutputType | null
    _avg: LayananEdukasiAvgAggregateOutputType | null
    _sum: LayananEdukasiSumAggregateOutputType | null
    _min: LayananEdukasiMinAggregateOutputType | null
    _max: LayananEdukasiMaxAggregateOutputType | null
  }

  export type LayananEdukasiAvgAggregateOutputType = {
    idEdukasi: number | null
    idLayanan: number | null
  }

  export type LayananEdukasiSumAggregateOutputType = {
    idEdukasi: bigint | null
    idLayanan: bigint | null
  }

  export type LayananEdukasiMinAggregateOutputType = {
    idEdukasi: bigint | null
    idLayanan: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayananEdukasiMaxAggregateOutputType = {
    idEdukasi: bigint | null
    idLayanan: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LayananEdukasiCountAggregateOutputType = {
    idEdukasi: number
    idLayanan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LayananEdukasiAvgAggregateInputType = {
    idEdukasi?: true
    idLayanan?: true
  }

  export type LayananEdukasiSumAggregateInputType = {
    idEdukasi?: true
    idLayanan?: true
  }

  export type LayananEdukasiMinAggregateInputType = {
    idEdukasi?: true
    idLayanan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayananEdukasiMaxAggregateInputType = {
    idEdukasi?: true
    idLayanan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LayananEdukasiCountAggregateInputType = {
    idEdukasi?: true
    idLayanan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LayananEdukasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayananEdukasi to aggregate.
     */
    where?: LayananEdukasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayananEdukasis to fetch.
     */
    orderBy?: LayananEdukasiOrderByWithRelationInput | LayananEdukasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LayananEdukasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayananEdukasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayananEdukasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LayananEdukasis
    **/
    _count?: true | LayananEdukasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LayananEdukasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LayananEdukasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LayananEdukasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LayananEdukasiMaxAggregateInputType
  }

  export type GetLayananEdukasiAggregateType<T extends LayananEdukasiAggregateArgs> = {
        [P in keyof T & keyof AggregateLayananEdukasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLayananEdukasi[P]>
      : GetScalarType<T[P], AggregateLayananEdukasi[P]>
  }




  export type LayananEdukasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LayananEdukasiWhereInput
    orderBy?: LayananEdukasiOrderByWithAggregationInput | LayananEdukasiOrderByWithAggregationInput[]
    by: LayananEdukasiScalarFieldEnum[] | LayananEdukasiScalarFieldEnum
    having?: LayananEdukasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LayananEdukasiCountAggregateInputType | true
    _avg?: LayananEdukasiAvgAggregateInputType
    _sum?: LayananEdukasiSumAggregateInputType
    _min?: LayananEdukasiMinAggregateInputType
    _max?: LayananEdukasiMaxAggregateInputType
  }

  export type LayananEdukasiGroupByOutputType = {
    idEdukasi: bigint
    idLayanan: bigint
    createdAt: Date | null
    updatedAt: Date | null
    _count: LayananEdukasiCountAggregateOutputType | null
    _avg: LayananEdukasiAvgAggregateOutputType | null
    _sum: LayananEdukasiSumAggregateOutputType | null
    _min: LayananEdukasiMinAggregateOutputType | null
    _max: LayananEdukasiMaxAggregateOutputType | null
  }

  type GetLayananEdukasiGroupByPayload<T extends LayananEdukasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LayananEdukasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LayananEdukasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LayananEdukasiGroupByOutputType[P]>
            : GetScalarType<T[P], LayananEdukasiGroupByOutputType[P]>
        }
      >
    >


  export type LayananEdukasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEdukasi?: boolean
    idLayanan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    edukasi?: boolean | EdukasiDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layananEdukasi"]>

  export type LayananEdukasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEdukasi?: boolean
    idLayanan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    edukasi?: boolean | EdukasiDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layananEdukasi"]>

  export type LayananEdukasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEdukasi?: boolean
    idLayanan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    edukasi?: boolean | EdukasiDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["layananEdukasi"]>

  export type LayananEdukasiSelectScalar = {
    idEdukasi?: boolean
    idLayanan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LayananEdukasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idEdukasi" | "idLayanan" | "createdAt" | "updatedAt", ExtArgs["result"]["layananEdukasi"]>
  export type LayananEdukasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edukasi?: boolean | EdukasiDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }
  export type LayananEdukasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edukasi?: boolean | EdukasiDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }
  export type LayananEdukasiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    edukasi?: boolean | EdukasiDefaultArgs<ExtArgs>
    layanan?: boolean | LayananDefaultArgs<ExtArgs>
  }

  export type $LayananEdukasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LayananEdukasi"
    objects: {
      edukasi: Prisma.$EdukasiPayload<ExtArgs>
      layanan: Prisma.$LayananPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idEdukasi: bigint
      idLayanan: bigint
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["layananEdukasi"]>
    composites: {}
  }

  type LayananEdukasiGetPayload<S extends boolean | null | undefined | LayananEdukasiDefaultArgs> = $Result.GetResult<Prisma.$LayananEdukasiPayload, S>

  type LayananEdukasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LayananEdukasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LayananEdukasiCountAggregateInputType | true
    }

  export interface LayananEdukasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LayananEdukasi'], meta: { name: 'LayananEdukasi' } }
    /**
     * Find zero or one LayananEdukasi that matches the filter.
     * @param {LayananEdukasiFindUniqueArgs} args - Arguments to find a LayananEdukasi
     * @example
     * // Get one LayananEdukasi
     * const layananEdukasi = await prisma.layananEdukasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LayananEdukasiFindUniqueArgs>(args: SelectSubset<T, LayananEdukasiFindUniqueArgs<ExtArgs>>): Prisma__LayananEdukasiClient<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LayananEdukasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LayananEdukasiFindUniqueOrThrowArgs} args - Arguments to find a LayananEdukasi
     * @example
     * // Get one LayananEdukasi
     * const layananEdukasi = await prisma.layananEdukasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LayananEdukasiFindUniqueOrThrowArgs>(args: SelectSubset<T, LayananEdukasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LayananEdukasiClient<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayananEdukasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananEdukasiFindFirstArgs} args - Arguments to find a LayananEdukasi
     * @example
     * // Get one LayananEdukasi
     * const layananEdukasi = await prisma.layananEdukasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LayananEdukasiFindFirstArgs>(args?: SelectSubset<T, LayananEdukasiFindFirstArgs<ExtArgs>>): Prisma__LayananEdukasiClient<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LayananEdukasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananEdukasiFindFirstOrThrowArgs} args - Arguments to find a LayananEdukasi
     * @example
     * // Get one LayananEdukasi
     * const layananEdukasi = await prisma.layananEdukasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LayananEdukasiFindFirstOrThrowArgs>(args?: SelectSubset<T, LayananEdukasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__LayananEdukasiClient<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LayananEdukasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananEdukasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LayananEdukasis
     * const layananEdukasis = await prisma.layananEdukasi.findMany()
     * 
     * // Get first 10 LayananEdukasis
     * const layananEdukasis = await prisma.layananEdukasi.findMany({ take: 10 })
     * 
     * // Only select the `idEdukasi`
     * const layananEdukasiWithIdEdukasiOnly = await prisma.layananEdukasi.findMany({ select: { idEdukasi: true } })
     * 
     */
    findMany<T extends LayananEdukasiFindManyArgs>(args?: SelectSubset<T, LayananEdukasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LayananEdukasi.
     * @param {LayananEdukasiCreateArgs} args - Arguments to create a LayananEdukasi.
     * @example
     * // Create one LayananEdukasi
     * const LayananEdukasi = await prisma.layananEdukasi.create({
     *   data: {
     *     // ... data to create a LayananEdukasi
     *   }
     * })
     * 
     */
    create<T extends LayananEdukasiCreateArgs>(args: SelectSubset<T, LayananEdukasiCreateArgs<ExtArgs>>): Prisma__LayananEdukasiClient<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LayananEdukasis.
     * @param {LayananEdukasiCreateManyArgs} args - Arguments to create many LayananEdukasis.
     * @example
     * // Create many LayananEdukasis
     * const layananEdukasi = await prisma.layananEdukasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LayananEdukasiCreateManyArgs>(args?: SelectSubset<T, LayananEdukasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LayananEdukasis and returns the data saved in the database.
     * @param {LayananEdukasiCreateManyAndReturnArgs} args - Arguments to create many LayananEdukasis.
     * @example
     * // Create many LayananEdukasis
     * const layananEdukasi = await prisma.layananEdukasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LayananEdukasis and only return the `idEdukasi`
     * const layananEdukasiWithIdEdukasiOnly = await prisma.layananEdukasi.createManyAndReturn({
     *   select: { idEdukasi: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LayananEdukasiCreateManyAndReturnArgs>(args?: SelectSubset<T, LayananEdukasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LayananEdukasi.
     * @param {LayananEdukasiDeleteArgs} args - Arguments to delete one LayananEdukasi.
     * @example
     * // Delete one LayananEdukasi
     * const LayananEdukasi = await prisma.layananEdukasi.delete({
     *   where: {
     *     // ... filter to delete one LayananEdukasi
     *   }
     * })
     * 
     */
    delete<T extends LayananEdukasiDeleteArgs>(args: SelectSubset<T, LayananEdukasiDeleteArgs<ExtArgs>>): Prisma__LayananEdukasiClient<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LayananEdukasi.
     * @param {LayananEdukasiUpdateArgs} args - Arguments to update one LayananEdukasi.
     * @example
     * // Update one LayananEdukasi
     * const layananEdukasi = await prisma.layananEdukasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LayananEdukasiUpdateArgs>(args: SelectSubset<T, LayananEdukasiUpdateArgs<ExtArgs>>): Prisma__LayananEdukasiClient<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LayananEdukasis.
     * @param {LayananEdukasiDeleteManyArgs} args - Arguments to filter LayananEdukasis to delete.
     * @example
     * // Delete a few LayananEdukasis
     * const { count } = await prisma.layananEdukasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LayananEdukasiDeleteManyArgs>(args?: SelectSubset<T, LayananEdukasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayananEdukasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananEdukasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LayananEdukasis
     * const layananEdukasi = await prisma.layananEdukasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LayananEdukasiUpdateManyArgs>(args: SelectSubset<T, LayananEdukasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LayananEdukasis and returns the data updated in the database.
     * @param {LayananEdukasiUpdateManyAndReturnArgs} args - Arguments to update many LayananEdukasis.
     * @example
     * // Update many LayananEdukasis
     * const layananEdukasi = await prisma.layananEdukasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LayananEdukasis and only return the `idEdukasi`
     * const layananEdukasiWithIdEdukasiOnly = await prisma.layananEdukasi.updateManyAndReturn({
     *   select: { idEdukasi: true },
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
    updateManyAndReturn<T extends LayananEdukasiUpdateManyAndReturnArgs>(args: SelectSubset<T, LayananEdukasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LayananEdukasi.
     * @param {LayananEdukasiUpsertArgs} args - Arguments to update or create a LayananEdukasi.
     * @example
     * // Update or create a LayananEdukasi
     * const layananEdukasi = await prisma.layananEdukasi.upsert({
     *   create: {
     *     // ... data to create a LayananEdukasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LayananEdukasi we want to update
     *   }
     * })
     */
    upsert<T extends LayananEdukasiUpsertArgs>(args: SelectSubset<T, LayananEdukasiUpsertArgs<ExtArgs>>): Prisma__LayananEdukasiClient<$Result.GetResult<Prisma.$LayananEdukasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LayananEdukasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananEdukasiCountArgs} args - Arguments to filter LayananEdukasis to count.
     * @example
     * // Count the number of LayananEdukasis
     * const count = await prisma.layananEdukasi.count({
     *   where: {
     *     // ... the filter for the LayananEdukasis we want to count
     *   }
     * })
    **/
    count<T extends LayananEdukasiCountArgs>(
      args?: Subset<T, LayananEdukasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LayananEdukasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LayananEdukasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananEdukasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LayananEdukasiAggregateArgs>(args: Subset<T, LayananEdukasiAggregateArgs>): Prisma.PrismaPromise<GetLayananEdukasiAggregateType<T>>

    /**
     * Group by LayananEdukasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LayananEdukasiGroupByArgs} args - Group by arguments.
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
      T extends LayananEdukasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LayananEdukasiGroupByArgs['orderBy'] }
        : { orderBy?: LayananEdukasiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LayananEdukasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLayananEdukasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LayananEdukasi model
   */
  readonly fields: LayananEdukasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LayananEdukasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LayananEdukasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    edukasi<T extends EdukasiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EdukasiDefaultArgs<ExtArgs>>): Prisma__EdukasiClient<$Result.GetResult<Prisma.$EdukasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    layanan<T extends LayananDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LayananDefaultArgs<ExtArgs>>): Prisma__LayananClient<$Result.GetResult<Prisma.$LayananPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LayananEdukasi model
   */
  interface LayananEdukasiFieldRefs {
    readonly idEdukasi: FieldRef<"LayananEdukasi", 'BigInt'>
    readonly idLayanan: FieldRef<"LayananEdukasi", 'BigInt'>
    readonly createdAt: FieldRef<"LayananEdukasi", 'DateTime'>
    readonly updatedAt: FieldRef<"LayananEdukasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LayananEdukasi findUnique
   */
  export type LayananEdukasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    /**
     * Filter, which LayananEdukasi to fetch.
     */
    where: LayananEdukasiWhereUniqueInput
  }

  /**
   * LayananEdukasi findUniqueOrThrow
   */
  export type LayananEdukasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    /**
     * Filter, which LayananEdukasi to fetch.
     */
    where: LayananEdukasiWhereUniqueInput
  }

  /**
   * LayananEdukasi findFirst
   */
  export type LayananEdukasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    /**
     * Filter, which LayananEdukasi to fetch.
     */
    where?: LayananEdukasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayananEdukasis to fetch.
     */
    orderBy?: LayananEdukasiOrderByWithRelationInput | LayananEdukasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayananEdukasis.
     */
    cursor?: LayananEdukasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayananEdukasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayananEdukasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayananEdukasis.
     */
    distinct?: LayananEdukasiScalarFieldEnum | LayananEdukasiScalarFieldEnum[]
  }

  /**
   * LayananEdukasi findFirstOrThrow
   */
  export type LayananEdukasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    /**
     * Filter, which LayananEdukasi to fetch.
     */
    where?: LayananEdukasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayananEdukasis to fetch.
     */
    orderBy?: LayananEdukasiOrderByWithRelationInput | LayananEdukasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LayananEdukasis.
     */
    cursor?: LayananEdukasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayananEdukasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayananEdukasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LayananEdukasis.
     */
    distinct?: LayananEdukasiScalarFieldEnum | LayananEdukasiScalarFieldEnum[]
  }

  /**
   * LayananEdukasi findMany
   */
  export type LayananEdukasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    /**
     * Filter, which LayananEdukasis to fetch.
     */
    where?: LayananEdukasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LayananEdukasis to fetch.
     */
    orderBy?: LayananEdukasiOrderByWithRelationInput | LayananEdukasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LayananEdukasis.
     */
    cursor?: LayananEdukasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LayananEdukasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LayananEdukasis.
     */
    skip?: number
    distinct?: LayananEdukasiScalarFieldEnum | LayananEdukasiScalarFieldEnum[]
  }

  /**
   * LayananEdukasi create
   */
  export type LayananEdukasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    /**
     * The data needed to create a LayananEdukasi.
     */
    data: XOR<LayananEdukasiCreateInput, LayananEdukasiUncheckedCreateInput>
  }

  /**
   * LayananEdukasi createMany
   */
  export type LayananEdukasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LayananEdukasis.
     */
    data: LayananEdukasiCreateManyInput | LayananEdukasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LayananEdukasi createManyAndReturn
   */
  export type LayananEdukasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * The data used to create many LayananEdukasis.
     */
    data: LayananEdukasiCreateManyInput | LayananEdukasiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LayananEdukasi update
   */
  export type LayananEdukasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    /**
     * The data needed to update a LayananEdukasi.
     */
    data: XOR<LayananEdukasiUpdateInput, LayananEdukasiUncheckedUpdateInput>
    /**
     * Choose, which LayananEdukasi to update.
     */
    where: LayananEdukasiWhereUniqueInput
  }

  /**
   * LayananEdukasi updateMany
   */
  export type LayananEdukasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LayananEdukasis.
     */
    data: XOR<LayananEdukasiUpdateManyMutationInput, LayananEdukasiUncheckedUpdateManyInput>
    /**
     * Filter which LayananEdukasis to update
     */
    where?: LayananEdukasiWhereInput
    /**
     * Limit how many LayananEdukasis to update.
     */
    limit?: number
  }

  /**
   * LayananEdukasi updateManyAndReturn
   */
  export type LayananEdukasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * The data used to update LayananEdukasis.
     */
    data: XOR<LayananEdukasiUpdateManyMutationInput, LayananEdukasiUncheckedUpdateManyInput>
    /**
     * Filter which LayananEdukasis to update
     */
    where?: LayananEdukasiWhereInput
    /**
     * Limit how many LayananEdukasis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LayananEdukasi upsert
   */
  export type LayananEdukasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    /**
     * The filter to search for the LayananEdukasi to update in case it exists.
     */
    where: LayananEdukasiWhereUniqueInput
    /**
     * In case the LayananEdukasi found by the `where` argument doesn't exist, create a new LayananEdukasi with this data.
     */
    create: XOR<LayananEdukasiCreateInput, LayananEdukasiUncheckedCreateInput>
    /**
     * In case the LayananEdukasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LayananEdukasiUpdateInput, LayananEdukasiUncheckedUpdateInput>
  }

  /**
   * LayananEdukasi delete
   */
  export type LayananEdukasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
    /**
     * Filter which LayananEdukasi to delete.
     */
    where: LayananEdukasiWhereUniqueInput
  }

  /**
   * LayananEdukasi deleteMany
   */
  export type LayananEdukasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LayananEdukasis to delete
     */
    where?: LayananEdukasiWhereInput
    /**
     * Limit how many LayananEdukasis to delete.
     */
    limit?: number
  }

  /**
   * LayananEdukasi without action
   */
  export type LayananEdukasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LayananEdukasi
     */
    select?: LayananEdukasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LayananEdukasi
     */
    omit?: LayananEdukasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LayananEdukasiInclude<ExtArgs> | null
  }


  /**
   * Model Obat
   */

  export type AggregateObat = {
    _count: ObatCountAggregateOutputType | null
    _avg: ObatAvgAggregateOutputType | null
    _sum: ObatSumAggregateOutputType | null
    _min: ObatMinAggregateOutputType | null
    _max: ObatMaxAggregateOutputType | null
  }

  export type ObatAvgAggregateOutputType = {
    id: number | null
    stok: number | null
    harga: number | null
  }

  export type ObatSumAggregateOutputType = {
    id: bigint | null
    stok: number | null
    harga: number | null
  }

  export type ObatMinAggregateOutputType = {
    id: bigint | null
    nama: string | null
    stok: number | null
    harga: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObatMaxAggregateOutputType = {
    id: bigint | null
    nama: string | null
    stok: number | null
    harga: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ObatCountAggregateOutputType = {
    id: number
    nama: number
    stok: number
    harga: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ObatAvgAggregateInputType = {
    id?: true
    stok?: true
    harga?: true
  }

  export type ObatSumAggregateInputType = {
    id?: true
    stok?: true
    harga?: true
  }

  export type ObatMinAggregateInputType = {
    id?: true
    nama?: true
    stok?: true
    harga?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObatMaxAggregateInputType = {
    id?: true
    nama?: true
    stok?: true
    harga?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ObatCountAggregateInputType = {
    id?: true
    nama?: true
    stok?: true
    harga?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ObatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obat to aggregate.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Obats
    **/
    _count?: true | ObatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObatMaxAggregateInputType
  }

  export type GetObatAggregateType<T extends ObatAggregateArgs> = {
        [P in keyof T & keyof AggregateObat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObat[P]>
      : GetScalarType<T[P], AggregateObat[P]>
  }




  export type ObatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObatWhereInput
    orderBy?: ObatOrderByWithAggregationInput | ObatOrderByWithAggregationInput[]
    by: ObatScalarFieldEnum[] | ObatScalarFieldEnum
    having?: ObatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObatCountAggregateInputType | true
    _avg?: ObatAvgAggregateInputType
    _sum?: ObatSumAggregateInputType
    _min?: ObatMinAggregateInputType
    _max?: ObatMaxAggregateInputType
  }

  export type ObatGroupByOutputType = {
    id: bigint
    nama: string
    stok: number
    harga: number
    createdAt: Date | null
    updatedAt: Date | null
    _count: ObatCountAggregateOutputType | null
    _avg: ObatAvgAggregateOutputType | null
    _sum: ObatSumAggregateOutputType | null
    _min: ObatMinAggregateOutputType | null
    _max: ObatMaxAggregateOutputType | null
  }

  type GetObatGroupByPayload<T extends ObatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObatGroupByOutputType[P]>
            : GetScalarType<T[P], ObatGroupByOutputType[P]>
        }
      >
    >


  export type ObatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    stok?: boolean
    harga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resep?: boolean | Obat$resepArgs<ExtArgs>
    stokObat?: boolean | Obat$stokObatArgs<ExtArgs>
    _count?: boolean | ObatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["obat"]>

  export type ObatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    stok?: boolean
    harga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["obat"]>

  export type ObatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    stok?: boolean
    harga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["obat"]>

  export type ObatSelectScalar = {
    id?: boolean
    nama?: boolean
    stok?: boolean
    harga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ObatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "stok" | "harga" | "createdAt" | "updatedAt", ExtArgs["result"]["obat"]>
  export type ObatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resep?: boolean | Obat$resepArgs<ExtArgs>
    stokObat?: boolean | Obat$stokObatArgs<ExtArgs>
    _count?: boolean | ObatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ObatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Obat"
    objects: {
      resep: Prisma.$ResepPayload<ExtArgs>[]
      stokObat: Prisma.$StokObatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nama: string
      stok: number
      harga: number
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["obat"]>
    composites: {}
  }

  type ObatGetPayload<S extends boolean | null | undefined | ObatDefaultArgs> = $Result.GetResult<Prisma.$ObatPayload, S>

  type ObatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObatCountAggregateInputType | true
    }

  export interface ObatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Obat'], meta: { name: 'Obat' } }
    /**
     * Find zero or one Obat that matches the filter.
     * @param {ObatFindUniqueArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObatFindUniqueArgs>(args: SelectSubset<T, ObatFindUniqueArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Obat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObatFindUniqueOrThrowArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObatFindUniqueOrThrowArgs>(args: SelectSubset<T, ObatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatFindFirstArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObatFindFirstArgs>(args?: SelectSubset<T, ObatFindFirstArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Obat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatFindFirstOrThrowArgs} args - Arguments to find a Obat
     * @example
     * // Get one Obat
     * const obat = await prisma.obat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObatFindFirstOrThrowArgs>(args?: SelectSubset<T, ObatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Obats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obats
     * const obats = await prisma.obat.findMany()
     * 
     * // Get first 10 Obats
     * const obats = await prisma.obat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const obatWithIdOnly = await prisma.obat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObatFindManyArgs>(args?: SelectSubset<T, ObatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Obat.
     * @param {ObatCreateArgs} args - Arguments to create a Obat.
     * @example
     * // Create one Obat
     * const Obat = await prisma.obat.create({
     *   data: {
     *     // ... data to create a Obat
     *   }
     * })
     * 
     */
    create<T extends ObatCreateArgs>(args: SelectSubset<T, ObatCreateArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Obats.
     * @param {ObatCreateManyArgs} args - Arguments to create many Obats.
     * @example
     * // Create many Obats
     * const obat = await prisma.obat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObatCreateManyArgs>(args?: SelectSubset<T, ObatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Obats and returns the data saved in the database.
     * @param {ObatCreateManyAndReturnArgs} args - Arguments to create many Obats.
     * @example
     * // Create many Obats
     * const obat = await prisma.obat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Obats and only return the `id`
     * const obatWithIdOnly = await prisma.obat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObatCreateManyAndReturnArgs>(args?: SelectSubset<T, ObatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Obat.
     * @param {ObatDeleteArgs} args - Arguments to delete one Obat.
     * @example
     * // Delete one Obat
     * const Obat = await prisma.obat.delete({
     *   where: {
     *     // ... filter to delete one Obat
     *   }
     * })
     * 
     */
    delete<T extends ObatDeleteArgs>(args: SelectSubset<T, ObatDeleteArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Obat.
     * @param {ObatUpdateArgs} args - Arguments to update one Obat.
     * @example
     * // Update one Obat
     * const obat = await prisma.obat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObatUpdateArgs>(args: SelectSubset<T, ObatUpdateArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Obats.
     * @param {ObatDeleteManyArgs} args - Arguments to filter Obats to delete.
     * @example
     * // Delete a few Obats
     * const { count } = await prisma.obat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObatDeleteManyArgs>(args?: SelectSubset<T, ObatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obats
     * const obat = await prisma.obat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObatUpdateManyArgs>(args: SelectSubset<T, ObatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Obats and returns the data updated in the database.
     * @param {ObatUpdateManyAndReturnArgs} args - Arguments to update many Obats.
     * @example
     * // Update many Obats
     * const obat = await prisma.obat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Obats and only return the `id`
     * const obatWithIdOnly = await prisma.obat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ObatUpdateManyAndReturnArgs>(args: SelectSubset<T, ObatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Obat.
     * @param {ObatUpsertArgs} args - Arguments to update or create a Obat.
     * @example
     * // Update or create a Obat
     * const obat = await prisma.obat.upsert({
     *   create: {
     *     // ... data to create a Obat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obat we want to update
     *   }
     * })
     */
    upsert<T extends ObatUpsertArgs>(args: SelectSubset<T, ObatUpsertArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Obats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatCountArgs} args - Arguments to filter Obats to count.
     * @example
     * // Count the number of Obats
     * const count = await prisma.obat.count({
     *   where: {
     *     // ... the filter for the Obats we want to count
     *   }
     * })
    **/
    count<T extends ObatCountArgs>(
      args?: Subset<T, ObatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Obat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObatAggregateArgs>(args: Subset<T, ObatAggregateArgs>): Prisma.PrismaPromise<GetObatAggregateType<T>>

    /**
     * Group by Obat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObatGroupByArgs} args - Group by arguments.
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
      T extends ObatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObatGroupByArgs['orderBy'] }
        : { orderBy?: ObatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ObatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Obat model
   */
  readonly fields: ObatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Obat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resep<T extends Obat$resepArgs<ExtArgs> = {}>(args?: Subset<T, Obat$resepArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stokObat<T extends Obat$stokObatArgs<ExtArgs> = {}>(args?: Subset<T, Obat$stokObatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Obat model
   */
  interface ObatFieldRefs {
    readonly id: FieldRef<"Obat", 'BigInt'>
    readonly nama: FieldRef<"Obat", 'String'>
    readonly stok: FieldRef<"Obat", 'Int'>
    readonly harga: FieldRef<"Obat", 'Int'>
    readonly createdAt: FieldRef<"Obat", 'DateTime'>
    readonly updatedAt: FieldRef<"Obat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Obat findUnique
   */
  export type ObatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat findUniqueOrThrow
   */
  export type ObatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat findFirst
   */
  export type ObatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obats.
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obats.
     */
    distinct?: ObatScalarFieldEnum | ObatScalarFieldEnum[]
  }

  /**
   * Obat findFirstOrThrow
   */
  export type ObatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obat to fetch.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Obats.
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Obats.
     */
    distinct?: ObatScalarFieldEnum | ObatScalarFieldEnum[]
  }

  /**
   * Obat findMany
   */
  export type ObatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter, which Obats to fetch.
     */
    where?: ObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Obats to fetch.
     */
    orderBy?: ObatOrderByWithRelationInput | ObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Obats.
     */
    cursor?: ObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Obats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Obats.
     */
    skip?: number
    distinct?: ObatScalarFieldEnum | ObatScalarFieldEnum[]
  }

  /**
   * Obat create
   */
  export type ObatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * The data needed to create a Obat.
     */
    data: XOR<ObatCreateInput, ObatUncheckedCreateInput>
  }

  /**
   * Obat createMany
   */
  export type ObatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Obats.
     */
    data: ObatCreateManyInput | ObatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obat createManyAndReturn
   */
  export type ObatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * The data used to create many Obats.
     */
    data: ObatCreateManyInput | ObatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Obat update
   */
  export type ObatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * The data needed to update a Obat.
     */
    data: XOR<ObatUpdateInput, ObatUncheckedUpdateInput>
    /**
     * Choose, which Obat to update.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat updateMany
   */
  export type ObatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Obats.
     */
    data: XOR<ObatUpdateManyMutationInput, ObatUncheckedUpdateManyInput>
    /**
     * Filter which Obats to update
     */
    where?: ObatWhereInput
    /**
     * Limit how many Obats to update.
     */
    limit?: number
  }

  /**
   * Obat updateManyAndReturn
   */
  export type ObatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * The data used to update Obats.
     */
    data: XOR<ObatUpdateManyMutationInput, ObatUncheckedUpdateManyInput>
    /**
     * Filter which Obats to update
     */
    where?: ObatWhereInput
    /**
     * Limit how many Obats to update.
     */
    limit?: number
  }

  /**
   * Obat upsert
   */
  export type ObatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * The filter to search for the Obat to update in case it exists.
     */
    where: ObatWhereUniqueInput
    /**
     * In case the Obat found by the `where` argument doesn't exist, create a new Obat with this data.
     */
    create: XOR<ObatCreateInput, ObatUncheckedCreateInput>
    /**
     * In case the Obat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObatUpdateInput, ObatUncheckedUpdateInput>
  }

  /**
   * Obat delete
   */
  export type ObatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
    /**
     * Filter which Obat to delete.
     */
    where: ObatWhereUniqueInput
  }

  /**
   * Obat deleteMany
   */
  export type ObatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Obats to delete
     */
    where?: ObatWhereInput
    /**
     * Limit how many Obats to delete.
     */
    limit?: number
  }

  /**
   * Obat.resep
   */
  export type Obat$resepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    where?: ResepWhereInput
    orderBy?: ResepOrderByWithRelationInput | ResepOrderByWithRelationInput[]
    cursor?: ResepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResepScalarFieldEnum | ResepScalarFieldEnum[]
  }

  /**
   * Obat.stokObat
   */
  export type Obat$stokObatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
    where?: StokObatWhereInput
    orderBy?: StokObatOrderByWithRelationInput | StokObatOrderByWithRelationInput[]
    cursor?: StokObatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StokObatScalarFieldEnum | StokObatScalarFieldEnum[]
  }

  /**
   * Obat without action
   */
  export type ObatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Obat
     */
    select?: ObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Obat
     */
    omit?: ObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObatInclude<ExtArgs> | null
  }


  /**
   * Model Pasien
   */

  export type AggregatePasien = {
    _count: PasienCountAggregateOutputType | null
    _avg: PasienAvgAggregateOutputType | null
    _sum: PasienSumAggregateOutputType | null
    _min: PasienMinAggregateOutputType | null
    _max: PasienMaxAggregateOutputType | null
  }

  export type PasienAvgAggregateOutputType = {
    id: number | null
  }

  export type PasienSumAggregateOutputType = {
    id: bigint | null
  }

  export type PasienMinAggregateOutputType = {
    id: bigint | null
    nama: string | null
    noReg: string | null
    tglLahir: Date | null
    alamat: string | null
    hp: string | null
    jenisKelamin: $Enums.JenisKelamin | null
    status: $Enums.StatusPasien | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasienMaxAggregateOutputType = {
    id: bigint | null
    nama: string | null
    noReg: string | null
    tglLahir: Date | null
    alamat: string | null
    hp: string | null
    jenisKelamin: $Enums.JenisKelamin | null
    status: $Enums.StatusPasien | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PasienCountAggregateOutputType = {
    id: number
    nama: number
    noReg: number
    tglLahir: number
    alamat: number
    hp: number
    jenisKelamin: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PasienAvgAggregateInputType = {
    id?: true
  }

  export type PasienSumAggregateInputType = {
    id?: true
  }

  export type PasienMinAggregateInputType = {
    id?: true
    nama?: true
    noReg?: true
    tglLahir?: true
    alamat?: true
    hp?: true
    jenisKelamin?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasienMaxAggregateInputType = {
    id?: true
    nama?: true
    noReg?: true
    tglLahir?: true
    alamat?: true
    hp?: true
    jenisKelamin?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PasienCountAggregateInputType = {
    id?: true
    nama?: true
    noReg?: true
    tglLahir?: true
    alamat?: true
    hp?: true
    jenisKelamin?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PasienAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pasien to aggregate.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pasiens
    **/
    _count?: true | PasienCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasienAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasienSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasienMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasienMaxAggregateInputType
  }

  export type GetPasienAggregateType<T extends PasienAggregateArgs> = {
        [P in keyof T & keyof AggregatePasien]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasien[P]>
      : GetScalarType<T[P], AggregatePasien[P]>
  }




  export type PasienGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasienWhereInput
    orderBy?: PasienOrderByWithAggregationInput | PasienOrderByWithAggregationInput[]
    by: PasienScalarFieldEnum[] | PasienScalarFieldEnum
    having?: PasienScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasienCountAggregateInputType | true
    _avg?: PasienAvgAggregateInputType
    _sum?: PasienSumAggregateInputType
    _min?: PasienMinAggregateInputType
    _max?: PasienMaxAggregateInputType
  }

  export type PasienGroupByOutputType = {
    id: bigint
    nama: string
    noReg: string
    tglLahir: Date
    alamat: string
    hp: string
    jenisKelamin: $Enums.JenisKelamin
    status: $Enums.StatusPasien
    createdAt: Date | null
    updatedAt: Date | null
    _count: PasienCountAggregateOutputType | null
    _avg: PasienAvgAggregateOutputType | null
    _sum: PasienSumAggregateOutputType | null
    _min: PasienMinAggregateOutputType | null
    _max: PasienMaxAggregateOutputType | null
  }

  type GetPasienGroupByPayload<T extends PasienGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasienGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasienGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasienGroupByOutputType[P]>
            : GetScalarType<T[P], PasienGroupByOutputType[P]>
        }
      >
    >


  export type PasienSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    noReg?: boolean
    tglLahir?: boolean
    alamat?: boolean
    hp?: boolean
    jenisKelamin?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kunjungan?: boolean | Pasien$kunjunganArgs<ExtArgs>
    _count?: boolean | PasienCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pasien"]>

  export type PasienSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    noReg?: boolean
    tglLahir?: boolean
    alamat?: boolean
    hp?: boolean
    jenisKelamin?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pasien"]>

  export type PasienSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    noReg?: boolean
    tglLahir?: boolean
    alamat?: boolean
    hp?: boolean
    jenisKelamin?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pasien"]>

  export type PasienSelectScalar = {
    id?: boolean
    nama?: boolean
    noReg?: boolean
    tglLahir?: boolean
    alamat?: boolean
    hp?: boolean
    jenisKelamin?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PasienOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "noReg" | "tglLahir" | "alamat" | "hp" | "jenisKelamin" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["pasien"]>
  export type PasienInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kunjungan?: boolean | Pasien$kunjunganArgs<ExtArgs>
    _count?: boolean | PasienCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PasienIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PasienIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PasienPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pasien"
    objects: {
      kunjungan: Prisma.$KunjunganPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      nama: string
      noReg: string
      tglLahir: Date
      alamat: string
      hp: string
      jenisKelamin: $Enums.JenisKelamin
      status: $Enums.StatusPasien
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["pasien"]>
    composites: {}
  }

  type PasienGetPayload<S extends boolean | null | undefined | PasienDefaultArgs> = $Result.GetResult<Prisma.$PasienPayload, S>

  type PasienCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasienFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasienCountAggregateInputType | true
    }

  export interface PasienDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pasien'], meta: { name: 'Pasien' } }
    /**
     * Find zero or one Pasien that matches the filter.
     * @param {PasienFindUniqueArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasienFindUniqueArgs>(args: SelectSubset<T, PasienFindUniqueArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pasien that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasienFindUniqueOrThrowArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasienFindUniqueOrThrowArgs>(args: SelectSubset<T, PasienFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pasien that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienFindFirstArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasienFindFirstArgs>(args?: SelectSubset<T, PasienFindFirstArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pasien that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienFindFirstOrThrowArgs} args - Arguments to find a Pasien
     * @example
     * // Get one Pasien
     * const pasien = await prisma.pasien.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasienFindFirstOrThrowArgs>(args?: SelectSubset<T, PasienFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pasiens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pasiens
     * const pasiens = await prisma.pasien.findMany()
     * 
     * // Get first 10 Pasiens
     * const pasiens = await prisma.pasien.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pasienWithIdOnly = await prisma.pasien.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasienFindManyArgs>(args?: SelectSubset<T, PasienFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pasien.
     * @param {PasienCreateArgs} args - Arguments to create a Pasien.
     * @example
     * // Create one Pasien
     * const Pasien = await prisma.pasien.create({
     *   data: {
     *     // ... data to create a Pasien
     *   }
     * })
     * 
     */
    create<T extends PasienCreateArgs>(args: SelectSubset<T, PasienCreateArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pasiens.
     * @param {PasienCreateManyArgs} args - Arguments to create many Pasiens.
     * @example
     * // Create many Pasiens
     * const pasien = await prisma.pasien.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasienCreateManyArgs>(args?: SelectSubset<T, PasienCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pasiens and returns the data saved in the database.
     * @param {PasienCreateManyAndReturnArgs} args - Arguments to create many Pasiens.
     * @example
     * // Create many Pasiens
     * const pasien = await prisma.pasien.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pasiens and only return the `id`
     * const pasienWithIdOnly = await prisma.pasien.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasienCreateManyAndReturnArgs>(args?: SelectSubset<T, PasienCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pasien.
     * @param {PasienDeleteArgs} args - Arguments to delete one Pasien.
     * @example
     * // Delete one Pasien
     * const Pasien = await prisma.pasien.delete({
     *   where: {
     *     // ... filter to delete one Pasien
     *   }
     * })
     * 
     */
    delete<T extends PasienDeleteArgs>(args: SelectSubset<T, PasienDeleteArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pasien.
     * @param {PasienUpdateArgs} args - Arguments to update one Pasien.
     * @example
     * // Update one Pasien
     * const pasien = await prisma.pasien.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasienUpdateArgs>(args: SelectSubset<T, PasienUpdateArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pasiens.
     * @param {PasienDeleteManyArgs} args - Arguments to filter Pasiens to delete.
     * @example
     * // Delete a few Pasiens
     * const { count } = await prisma.pasien.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasienDeleteManyArgs>(args?: SelectSubset<T, PasienDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pasiens
     * const pasien = await prisma.pasien.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasienUpdateManyArgs>(args: SelectSubset<T, PasienUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pasiens and returns the data updated in the database.
     * @param {PasienUpdateManyAndReturnArgs} args - Arguments to update many Pasiens.
     * @example
     * // Update many Pasiens
     * const pasien = await prisma.pasien.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pasiens and only return the `id`
     * const pasienWithIdOnly = await prisma.pasien.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasienUpdateManyAndReturnArgs>(args: SelectSubset<T, PasienUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pasien.
     * @param {PasienUpsertArgs} args - Arguments to update or create a Pasien.
     * @example
     * // Update or create a Pasien
     * const pasien = await prisma.pasien.upsert({
     *   create: {
     *     // ... data to create a Pasien
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pasien we want to update
     *   }
     * })
     */
    upsert<T extends PasienUpsertArgs>(args: SelectSubset<T, PasienUpsertArgs<ExtArgs>>): Prisma__PasienClient<$Result.GetResult<Prisma.$PasienPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pasiens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienCountArgs} args - Arguments to filter Pasiens to count.
     * @example
     * // Count the number of Pasiens
     * const count = await prisma.pasien.count({
     *   where: {
     *     // ... the filter for the Pasiens we want to count
     *   }
     * })
    **/
    count<T extends PasienCountArgs>(
      args?: Subset<T, PasienCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasienCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasienAggregateArgs>(args: Subset<T, PasienAggregateArgs>): Prisma.PrismaPromise<GetPasienAggregateType<T>>

    /**
     * Group by Pasien.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasienGroupByArgs} args - Group by arguments.
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
      T extends PasienGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasienGroupByArgs['orderBy'] }
        : { orderBy?: PasienGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasienGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasienGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pasien model
   */
  readonly fields: PasienFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pasien.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasienClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kunjungan<T extends Pasien$kunjunganArgs<ExtArgs> = {}>(args?: Subset<T, Pasien$kunjunganArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pasien model
   */
  interface PasienFieldRefs {
    readonly id: FieldRef<"Pasien", 'BigInt'>
    readonly nama: FieldRef<"Pasien", 'String'>
    readonly noReg: FieldRef<"Pasien", 'String'>
    readonly tglLahir: FieldRef<"Pasien", 'DateTime'>
    readonly alamat: FieldRef<"Pasien", 'String'>
    readonly hp: FieldRef<"Pasien", 'String'>
    readonly jenisKelamin: FieldRef<"Pasien", 'JenisKelamin'>
    readonly status: FieldRef<"Pasien", 'StatusPasien'>
    readonly createdAt: FieldRef<"Pasien", 'DateTime'>
    readonly updatedAt: FieldRef<"Pasien", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pasien findUnique
   */
  export type PasienFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien findUniqueOrThrow
   */
  export type PasienFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien findFirst
   */
  export type PasienFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pasiens.
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pasiens.
     */
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Pasien findFirstOrThrow
   */
  export type PasienFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasien to fetch.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pasiens.
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pasiens.
     */
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Pasien findMany
   */
  export type PasienFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter, which Pasiens to fetch.
     */
    where?: PasienWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pasiens to fetch.
     */
    orderBy?: PasienOrderByWithRelationInput | PasienOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pasiens.
     */
    cursor?: PasienWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pasiens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pasiens.
     */
    skip?: number
    distinct?: PasienScalarFieldEnum | PasienScalarFieldEnum[]
  }

  /**
   * Pasien create
   */
  export type PasienCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * The data needed to create a Pasien.
     */
    data: XOR<PasienCreateInput, PasienUncheckedCreateInput>
  }

  /**
   * Pasien createMany
   */
  export type PasienCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pasiens.
     */
    data: PasienCreateManyInput | PasienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pasien createManyAndReturn
   */
  export type PasienCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * The data used to create many Pasiens.
     */
    data: PasienCreateManyInput | PasienCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pasien update
   */
  export type PasienUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * The data needed to update a Pasien.
     */
    data: XOR<PasienUpdateInput, PasienUncheckedUpdateInput>
    /**
     * Choose, which Pasien to update.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien updateMany
   */
  export type PasienUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pasiens.
     */
    data: XOR<PasienUpdateManyMutationInput, PasienUncheckedUpdateManyInput>
    /**
     * Filter which Pasiens to update
     */
    where?: PasienWhereInput
    /**
     * Limit how many Pasiens to update.
     */
    limit?: number
  }

  /**
   * Pasien updateManyAndReturn
   */
  export type PasienUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * The data used to update Pasiens.
     */
    data: XOR<PasienUpdateManyMutationInput, PasienUncheckedUpdateManyInput>
    /**
     * Filter which Pasiens to update
     */
    where?: PasienWhereInput
    /**
     * Limit how many Pasiens to update.
     */
    limit?: number
  }

  /**
   * Pasien upsert
   */
  export type PasienUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * The filter to search for the Pasien to update in case it exists.
     */
    where: PasienWhereUniqueInput
    /**
     * In case the Pasien found by the `where` argument doesn't exist, create a new Pasien with this data.
     */
    create: XOR<PasienCreateInput, PasienUncheckedCreateInput>
    /**
     * In case the Pasien was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasienUpdateInput, PasienUncheckedUpdateInput>
  }

  /**
   * Pasien delete
   */
  export type PasienDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
    /**
     * Filter which Pasien to delete.
     */
    where: PasienWhereUniqueInput
  }

  /**
   * Pasien deleteMany
   */
  export type PasienDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pasiens to delete
     */
    where?: PasienWhereInput
    /**
     * Limit how many Pasiens to delete.
     */
    limit?: number
  }

  /**
   * Pasien.kunjungan
   */
  export type Pasien$kunjunganArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kunjungan
     */
    select?: KunjunganSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kunjungan
     */
    omit?: KunjunganOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KunjunganInclude<ExtArgs> | null
    where?: KunjunganWhereInput
    orderBy?: KunjunganOrderByWithRelationInput | KunjunganOrderByWithRelationInput[]
    cursor?: KunjunganWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KunjunganScalarFieldEnum | KunjunganScalarFieldEnum[]
  }

  /**
   * Pasien without action
   */
  export type PasienDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pasien
     */
    select?: PasienSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pasien
     */
    omit?: PasienOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasienInclude<ExtArgs> | null
  }


  /**
   * Model Pembayaran
   */

  export type AggregatePembayaran = {
    _count: PembayaranCountAggregateOutputType | null
    _avg: PembayaranAvgAggregateOutputType | null
    _sum: PembayaranSumAggregateOutputType | null
    _min: PembayaranMinAggregateOutputType | null
    _max: PembayaranMaxAggregateOutputType | null
  }

  export type PembayaranAvgAggregateOutputType = {
    id: number | null
    idRm: number | null
    totalBayar: number | null
  }

  export type PembayaranSumAggregateOutputType = {
    id: bigint | null
    idRm: bigint | null
    totalBayar: number | null
  }

  export type PembayaranMinAggregateOutputType = {
    id: bigint | null
    idRm: bigint | null
    tglBayar: Date | null
    totalBayar: number | null
    metode: string | null
    status: $Enums.StatusPembayaran | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PembayaranMaxAggregateOutputType = {
    id: bigint | null
    idRm: bigint | null
    tglBayar: Date | null
    totalBayar: number | null
    metode: string | null
    status: $Enums.StatusPembayaran | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PembayaranCountAggregateOutputType = {
    id: number
    idRm: number
    tglBayar: number
    totalBayar: number
    metode: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PembayaranAvgAggregateInputType = {
    id?: true
    idRm?: true
    totalBayar?: true
  }

  export type PembayaranSumAggregateInputType = {
    id?: true
    idRm?: true
    totalBayar?: true
  }

  export type PembayaranMinAggregateInputType = {
    id?: true
    idRm?: true
    tglBayar?: true
    totalBayar?: true
    metode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PembayaranMaxAggregateInputType = {
    id?: true
    idRm?: true
    tglBayar?: true
    totalBayar?: true
    metode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PembayaranCountAggregateInputType = {
    id?: true
    idRm?: true
    tglBayar?: true
    totalBayar?: true
    metode?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PembayaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembayaran to aggregate.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pembayarans
    **/
    _count?: true | PembayaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembayaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembayaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembayaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembayaranMaxAggregateInputType
  }

  export type GetPembayaranAggregateType<T extends PembayaranAggregateArgs> = {
        [P in keyof T & keyof AggregatePembayaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembayaran[P]>
      : GetScalarType<T[P], AggregatePembayaran[P]>
  }




  export type PembayaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembayaranWhereInput
    orderBy?: PembayaranOrderByWithAggregationInput | PembayaranOrderByWithAggregationInput[]
    by: PembayaranScalarFieldEnum[] | PembayaranScalarFieldEnum
    having?: PembayaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembayaranCountAggregateInputType | true
    _avg?: PembayaranAvgAggregateInputType
    _sum?: PembayaranSumAggregateInputType
    _min?: PembayaranMinAggregateInputType
    _max?: PembayaranMaxAggregateInputType
  }

  export type PembayaranGroupByOutputType = {
    id: bigint
    idRm: bigint
    tglBayar: Date
    totalBayar: number
    metode: string
    status: $Enums.StatusPembayaran
    createdAt: Date | null
    updatedAt: Date | null
    _count: PembayaranCountAggregateOutputType | null
    _avg: PembayaranAvgAggregateOutputType | null
    _sum: PembayaranSumAggregateOutputType | null
    _min: PembayaranMinAggregateOutputType | null
    _max: PembayaranMaxAggregateOutputType | null
  }

  type GetPembayaranGroupByPayload<T extends PembayaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembayaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembayaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembayaranGroupByOutputType[P]>
            : GetScalarType<T[P], PembayaranGroupByOutputType[P]>
        }
      >
    >


  export type PembayaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRm?: boolean
    tglBayar?: boolean
    totalBayar?: boolean
    metode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRm?: boolean
    tglBayar?: boolean
    totalBayar?: boolean
    metode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRm?: boolean
    tglBayar?: boolean
    totalBayar?: boolean
    metode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectScalar = {
    id?: boolean
    idRm?: boolean
    tglBayar?: boolean
    totalBayar?: boolean
    metode?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PembayaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idRm" | "tglBayar" | "totalBayar" | "metode" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["pembayaran"]>
  export type PembayaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
  }
  export type PembayaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
  }
  export type PembayaranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
  }

  export type $PembayaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pembayaran"
    objects: {
      rekamMedis: Prisma.$RekamMedisPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      idRm: bigint
      tglBayar: Date
      totalBayar: number
      metode: string
      status: $Enums.StatusPembayaran
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["pembayaran"]>
    composites: {}
  }

  type PembayaranGetPayload<S extends boolean | null | undefined | PembayaranDefaultArgs> = $Result.GetResult<Prisma.$PembayaranPayload, S>

  type PembayaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PembayaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PembayaranCountAggregateInputType | true
    }

  export interface PembayaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pembayaran'], meta: { name: 'Pembayaran' } }
    /**
     * Find zero or one Pembayaran that matches the filter.
     * @param {PembayaranFindUniqueArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PembayaranFindUniqueArgs>(args: SelectSubset<T, PembayaranFindUniqueArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pembayaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PembayaranFindUniqueOrThrowArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PembayaranFindUniqueOrThrowArgs>(args: SelectSubset<T, PembayaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembayaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindFirstArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PembayaranFindFirstArgs>(args?: SelectSubset<T, PembayaranFindFirstArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembayaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindFirstOrThrowArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PembayaranFindFirstOrThrowArgs>(args?: SelectSubset<T, PembayaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pembayarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembayarans
     * const pembayarans = await prisma.pembayaran.findMany()
     * 
     * // Get first 10 Pembayarans
     * const pembayarans = await prisma.pembayaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PembayaranFindManyArgs>(args?: SelectSubset<T, PembayaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pembayaran.
     * @param {PembayaranCreateArgs} args - Arguments to create a Pembayaran.
     * @example
     * // Create one Pembayaran
     * const Pembayaran = await prisma.pembayaran.create({
     *   data: {
     *     // ... data to create a Pembayaran
     *   }
     * })
     * 
     */
    create<T extends PembayaranCreateArgs>(args: SelectSubset<T, PembayaranCreateArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pembayarans.
     * @param {PembayaranCreateManyArgs} args - Arguments to create many Pembayarans.
     * @example
     * // Create many Pembayarans
     * const pembayaran = await prisma.pembayaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PembayaranCreateManyArgs>(args?: SelectSubset<T, PembayaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pembayarans and returns the data saved in the database.
     * @param {PembayaranCreateManyAndReturnArgs} args - Arguments to create many Pembayarans.
     * @example
     * // Create many Pembayarans
     * const pembayaran = await prisma.pembayaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pembayarans and only return the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PembayaranCreateManyAndReturnArgs>(args?: SelectSubset<T, PembayaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pembayaran.
     * @param {PembayaranDeleteArgs} args - Arguments to delete one Pembayaran.
     * @example
     * // Delete one Pembayaran
     * const Pembayaran = await prisma.pembayaran.delete({
     *   where: {
     *     // ... filter to delete one Pembayaran
     *   }
     * })
     * 
     */
    delete<T extends PembayaranDeleteArgs>(args: SelectSubset<T, PembayaranDeleteArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pembayaran.
     * @param {PembayaranUpdateArgs} args - Arguments to update one Pembayaran.
     * @example
     * // Update one Pembayaran
     * const pembayaran = await prisma.pembayaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PembayaranUpdateArgs>(args: SelectSubset<T, PembayaranUpdateArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pembayarans.
     * @param {PembayaranDeleteManyArgs} args - Arguments to filter Pembayarans to delete.
     * @example
     * // Delete a few Pembayarans
     * const { count } = await prisma.pembayaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PembayaranDeleteManyArgs>(args?: SelectSubset<T, PembayaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembayarans
     * const pembayaran = await prisma.pembayaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PembayaranUpdateManyArgs>(args: SelectSubset<T, PembayaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembayarans and returns the data updated in the database.
     * @param {PembayaranUpdateManyAndReturnArgs} args - Arguments to update many Pembayarans.
     * @example
     * // Update many Pembayarans
     * const pembayaran = await prisma.pembayaran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pembayarans and only return the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.updateManyAndReturn({
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
    updateManyAndReturn<T extends PembayaranUpdateManyAndReturnArgs>(args: SelectSubset<T, PembayaranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pembayaran.
     * @param {PembayaranUpsertArgs} args - Arguments to update or create a Pembayaran.
     * @example
     * // Update or create a Pembayaran
     * const pembayaran = await prisma.pembayaran.upsert({
     *   create: {
     *     // ... data to create a Pembayaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembayaran we want to update
     *   }
     * })
     */
    upsert<T extends PembayaranUpsertArgs>(args: SelectSubset<T, PembayaranUpsertArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranCountArgs} args - Arguments to filter Pembayarans to count.
     * @example
     * // Count the number of Pembayarans
     * const count = await prisma.pembayaran.count({
     *   where: {
     *     // ... the filter for the Pembayarans we want to count
     *   }
     * })
    **/
    count<T extends PembayaranCountArgs>(
      args?: Subset<T, PembayaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembayaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PembayaranAggregateArgs>(args: Subset<T, PembayaranAggregateArgs>): Prisma.PrismaPromise<GetPembayaranAggregateType<T>>

    /**
     * Group by Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranGroupByArgs} args - Group by arguments.
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
      T extends PembayaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembayaranGroupByArgs['orderBy'] }
        : { orderBy?: PembayaranGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PembayaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembayaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pembayaran model
   */
  readonly fields: PembayaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pembayaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembayaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rekamMedis<T extends RekamMedisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RekamMedisDefaultArgs<ExtArgs>>): Prisma__RekamMedisClient<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pembayaran model
   */
  interface PembayaranFieldRefs {
    readonly id: FieldRef<"Pembayaran", 'BigInt'>
    readonly idRm: FieldRef<"Pembayaran", 'BigInt'>
    readonly tglBayar: FieldRef<"Pembayaran", 'DateTime'>
    readonly totalBayar: FieldRef<"Pembayaran", 'Int'>
    readonly metode: FieldRef<"Pembayaran", 'String'>
    readonly status: FieldRef<"Pembayaran", 'StatusPembayaran'>
    readonly createdAt: FieldRef<"Pembayaran", 'DateTime'>
    readonly updatedAt: FieldRef<"Pembayaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pembayaran findUnique
   */
  export type PembayaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran findUniqueOrThrow
   */
  export type PembayaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran findFirst
   */
  export type PembayaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembayarans.
     */
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran findFirstOrThrow
   */
  export type PembayaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembayarans.
     */
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran findMany
   */
  export type PembayaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayarans to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran create
   */
  export type PembayaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The data needed to create a Pembayaran.
     */
    data: XOR<PembayaranCreateInput, PembayaranUncheckedCreateInput>
  }

  /**
   * Pembayaran createMany
   */
  export type PembayaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pembayarans.
     */
    data: PembayaranCreateManyInput | PembayaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pembayaran createManyAndReturn
   */
  export type PembayaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * The data used to create many Pembayarans.
     */
    data: PembayaranCreateManyInput | PembayaranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembayaran update
   */
  export type PembayaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The data needed to update a Pembayaran.
     */
    data: XOR<PembayaranUpdateInput, PembayaranUncheckedUpdateInput>
    /**
     * Choose, which Pembayaran to update.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran updateMany
   */
  export type PembayaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pembayarans.
     */
    data: XOR<PembayaranUpdateManyMutationInput, PembayaranUncheckedUpdateManyInput>
    /**
     * Filter which Pembayarans to update
     */
    where?: PembayaranWhereInput
    /**
     * Limit how many Pembayarans to update.
     */
    limit?: number
  }

  /**
   * Pembayaran updateManyAndReturn
   */
  export type PembayaranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * The data used to update Pembayarans.
     */
    data: XOR<PembayaranUpdateManyMutationInput, PembayaranUncheckedUpdateManyInput>
    /**
     * Filter which Pembayarans to update
     */
    where?: PembayaranWhereInput
    /**
     * Limit how many Pembayarans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembayaran upsert
   */
  export type PembayaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The filter to search for the Pembayaran to update in case it exists.
     */
    where: PembayaranWhereUniqueInput
    /**
     * In case the Pembayaran found by the `where` argument doesn't exist, create a new Pembayaran with this data.
     */
    create: XOR<PembayaranCreateInput, PembayaranUncheckedCreateInput>
    /**
     * In case the Pembayaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembayaranUpdateInput, PembayaranUncheckedUpdateInput>
  }

  /**
   * Pembayaran delete
   */
  export type PembayaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter which Pembayaran to delete.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran deleteMany
   */
  export type PembayaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembayarans to delete
     */
    where?: PembayaranWhereInput
    /**
     * Limit how many Pembayarans to delete.
     */
    limit?: number
  }

  /**
   * Pembayaran without action
   */
  export type PembayaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
  }


  /**
   * Model RekamMedis
   */

  export type AggregateRekamMedis = {
    _count: RekamMedisCountAggregateOutputType | null
    _avg: RekamMedisAvgAggregateOutputType | null
    _sum: RekamMedisSumAggregateOutputType | null
    _min: RekamMedisMinAggregateOutputType | null
    _max: RekamMedisMaxAggregateOutputType | null
  }

  export type RekamMedisAvgAggregateOutputType = {
    id: number | null
    idKunjungan: number | null
  }

  export type RekamMedisSumAggregateOutputType = {
    id: bigint | null
    idKunjungan: bigint | null
  }

  export type RekamMedisMinAggregateOutputType = {
    id: bigint | null
    idKunjungan: bigint | null
    keluhan: string | null
    diagnosa: string | null
    tindakan: string | null
    catatan: string | null
    status: $Enums.StatusRekam | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RekamMedisMaxAggregateOutputType = {
    id: bigint | null
    idKunjungan: bigint | null
    keluhan: string | null
    diagnosa: string | null
    tindakan: string | null
    catatan: string | null
    status: $Enums.StatusRekam | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RekamMedisCountAggregateOutputType = {
    id: number
    idKunjungan: number
    keluhan: number
    diagnosa: number
    tindakan: number
    catatan: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RekamMedisAvgAggregateInputType = {
    id?: true
    idKunjungan?: true
  }

  export type RekamMedisSumAggregateInputType = {
    id?: true
    idKunjungan?: true
  }

  export type RekamMedisMinAggregateInputType = {
    id?: true
    idKunjungan?: true
    keluhan?: true
    diagnosa?: true
    tindakan?: true
    catatan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RekamMedisMaxAggregateInputType = {
    id?: true
    idKunjungan?: true
    keluhan?: true
    diagnosa?: true
    tindakan?: true
    catatan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RekamMedisCountAggregateInputType = {
    id?: true
    idKunjungan?: true
    keluhan?: true
    diagnosa?: true
    tindakan?: true
    catatan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RekamMedisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RekamMedis to aggregate.
     */
    where?: RekamMedisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RekamMedis to fetch.
     */
    orderBy?: RekamMedisOrderByWithRelationInput | RekamMedisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RekamMedisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RekamMedis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RekamMedis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RekamMedis
    **/
    _count?: true | RekamMedisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RekamMedisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RekamMedisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RekamMedisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RekamMedisMaxAggregateInputType
  }

  export type GetRekamMedisAggregateType<T extends RekamMedisAggregateArgs> = {
        [P in keyof T & keyof AggregateRekamMedis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRekamMedis[P]>
      : GetScalarType<T[P], AggregateRekamMedis[P]>
  }




  export type RekamMedisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RekamMedisWhereInput
    orderBy?: RekamMedisOrderByWithAggregationInput | RekamMedisOrderByWithAggregationInput[]
    by: RekamMedisScalarFieldEnum[] | RekamMedisScalarFieldEnum
    having?: RekamMedisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RekamMedisCountAggregateInputType | true
    _avg?: RekamMedisAvgAggregateInputType
    _sum?: RekamMedisSumAggregateInputType
    _min?: RekamMedisMinAggregateInputType
    _max?: RekamMedisMaxAggregateInputType
  }

  export type RekamMedisGroupByOutputType = {
    id: bigint
    idKunjungan: bigint
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt: Date | null
    updatedAt: Date | null
    _count: RekamMedisCountAggregateOutputType | null
    _avg: RekamMedisAvgAggregateOutputType | null
    _sum: RekamMedisSumAggregateOutputType | null
    _min: RekamMedisMinAggregateOutputType | null
    _max: RekamMedisMaxAggregateOutputType | null
  }

  type GetRekamMedisGroupByPayload<T extends RekamMedisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RekamMedisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RekamMedisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RekamMedisGroupByOutputType[P]>
            : GetScalarType<T[P], RekamMedisGroupByOutputType[P]>
        }
      >
    >


  export type RekamMedisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idKunjungan?: boolean
    keluhan?: boolean
    diagnosa?: boolean
    tindakan?: boolean
    catatan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kunjungan?: boolean | KunjunganDefaultArgs<ExtArgs>
    resep?: boolean | RekamMedis$resepArgs<ExtArgs>
    pembayaran?: boolean | RekamMedis$pembayaranArgs<ExtArgs>
    _count?: boolean | RekamMedisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rekamMedis"]>

  export type RekamMedisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idKunjungan?: boolean
    keluhan?: boolean
    diagnosa?: boolean
    tindakan?: boolean
    catatan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kunjungan?: boolean | KunjunganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rekamMedis"]>

  export type RekamMedisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idKunjungan?: boolean
    keluhan?: boolean
    diagnosa?: boolean
    tindakan?: boolean
    catatan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kunjungan?: boolean | KunjunganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rekamMedis"]>

  export type RekamMedisSelectScalar = {
    id?: boolean
    idKunjungan?: boolean
    keluhan?: boolean
    diagnosa?: boolean
    tindakan?: boolean
    catatan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RekamMedisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idKunjungan" | "keluhan" | "diagnosa" | "tindakan" | "catatan" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["rekamMedis"]>
  export type RekamMedisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kunjungan?: boolean | KunjunganDefaultArgs<ExtArgs>
    resep?: boolean | RekamMedis$resepArgs<ExtArgs>
    pembayaran?: boolean | RekamMedis$pembayaranArgs<ExtArgs>
    _count?: boolean | RekamMedisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RekamMedisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kunjungan?: boolean | KunjunganDefaultArgs<ExtArgs>
  }
  export type RekamMedisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kunjungan?: boolean | KunjunganDefaultArgs<ExtArgs>
  }

  export type $RekamMedisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RekamMedis"
    objects: {
      kunjungan: Prisma.$KunjunganPayload<ExtArgs>
      resep: Prisma.$ResepPayload<ExtArgs>[]
      pembayaran: Prisma.$PembayaranPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      idKunjungan: bigint
      keluhan: string
      diagnosa: string
      tindakan: string
      catatan: string
      status: $Enums.StatusRekam
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["rekamMedis"]>
    composites: {}
  }

  type RekamMedisGetPayload<S extends boolean | null | undefined | RekamMedisDefaultArgs> = $Result.GetResult<Prisma.$RekamMedisPayload, S>

  type RekamMedisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RekamMedisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RekamMedisCountAggregateInputType | true
    }

  export interface RekamMedisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RekamMedis'], meta: { name: 'RekamMedis' } }
    /**
     * Find zero or one RekamMedis that matches the filter.
     * @param {RekamMedisFindUniqueArgs} args - Arguments to find a RekamMedis
     * @example
     * // Get one RekamMedis
     * const rekamMedis = await prisma.rekamMedis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RekamMedisFindUniqueArgs>(args: SelectSubset<T, RekamMedisFindUniqueArgs<ExtArgs>>): Prisma__RekamMedisClient<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RekamMedis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RekamMedisFindUniqueOrThrowArgs} args - Arguments to find a RekamMedis
     * @example
     * // Get one RekamMedis
     * const rekamMedis = await prisma.rekamMedis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RekamMedisFindUniqueOrThrowArgs>(args: SelectSubset<T, RekamMedisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RekamMedisClient<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RekamMedis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekamMedisFindFirstArgs} args - Arguments to find a RekamMedis
     * @example
     * // Get one RekamMedis
     * const rekamMedis = await prisma.rekamMedis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RekamMedisFindFirstArgs>(args?: SelectSubset<T, RekamMedisFindFirstArgs<ExtArgs>>): Prisma__RekamMedisClient<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RekamMedis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekamMedisFindFirstOrThrowArgs} args - Arguments to find a RekamMedis
     * @example
     * // Get one RekamMedis
     * const rekamMedis = await prisma.rekamMedis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RekamMedisFindFirstOrThrowArgs>(args?: SelectSubset<T, RekamMedisFindFirstOrThrowArgs<ExtArgs>>): Prisma__RekamMedisClient<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RekamMedis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekamMedisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RekamMedis
     * const rekamMedis = await prisma.rekamMedis.findMany()
     * 
     * // Get first 10 RekamMedis
     * const rekamMedis = await prisma.rekamMedis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rekamMedisWithIdOnly = await prisma.rekamMedis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RekamMedisFindManyArgs>(args?: SelectSubset<T, RekamMedisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RekamMedis.
     * @param {RekamMedisCreateArgs} args - Arguments to create a RekamMedis.
     * @example
     * // Create one RekamMedis
     * const RekamMedis = await prisma.rekamMedis.create({
     *   data: {
     *     // ... data to create a RekamMedis
     *   }
     * })
     * 
     */
    create<T extends RekamMedisCreateArgs>(args: SelectSubset<T, RekamMedisCreateArgs<ExtArgs>>): Prisma__RekamMedisClient<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RekamMedis.
     * @param {RekamMedisCreateManyArgs} args - Arguments to create many RekamMedis.
     * @example
     * // Create many RekamMedis
     * const rekamMedis = await prisma.rekamMedis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RekamMedisCreateManyArgs>(args?: SelectSubset<T, RekamMedisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RekamMedis and returns the data saved in the database.
     * @param {RekamMedisCreateManyAndReturnArgs} args - Arguments to create many RekamMedis.
     * @example
     * // Create many RekamMedis
     * const rekamMedis = await prisma.rekamMedis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RekamMedis and only return the `id`
     * const rekamMedisWithIdOnly = await prisma.rekamMedis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RekamMedisCreateManyAndReturnArgs>(args?: SelectSubset<T, RekamMedisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RekamMedis.
     * @param {RekamMedisDeleteArgs} args - Arguments to delete one RekamMedis.
     * @example
     * // Delete one RekamMedis
     * const RekamMedis = await prisma.rekamMedis.delete({
     *   where: {
     *     // ... filter to delete one RekamMedis
     *   }
     * })
     * 
     */
    delete<T extends RekamMedisDeleteArgs>(args: SelectSubset<T, RekamMedisDeleteArgs<ExtArgs>>): Prisma__RekamMedisClient<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RekamMedis.
     * @param {RekamMedisUpdateArgs} args - Arguments to update one RekamMedis.
     * @example
     * // Update one RekamMedis
     * const rekamMedis = await prisma.rekamMedis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RekamMedisUpdateArgs>(args: SelectSubset<T, RekamMedisUpdateArgs<ExtArgs>>): Prisma__RekamMedisClient<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RekamMedis.
     * @param {RekamMedisDeleteManyArgs} args - Arguments to filter RekamMedis to delete.
     * @example
     * // Delete a few RekamMedis
     * const { count } = await prisma.rekamMedis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RekamMedisDeleteManyArgs>(args?: SelectSubset<T, RekamMedisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RekamMedis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekamMedisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RekamMedis
     * const rekamMedis = await prisma.rekamMedis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RekamMedisUpdateManyArgs>(args: SelectSubset<T, RekamMedisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RekamMedis and returns the data updated in the database.
     * @param {RekamMedisUpdateManyAndReturnArgs} args - Arguments to update many RekamMedis.
     * @example
     * // Update many RekamMedis
     * const rekamMedis = await prisma.rekamMedis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RekamMedis and only return the `id`
     * const rekamMedisWithIdOnly = await prisma.rekamMedis.updateManyAndReturn({
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
    updateManyAndReturn<T extends RekamMedisUpdateManyAndReturnArgs>(args: SelectSubset<T, RekamMedisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RekamMedis.
     * @param {RekamMedisUpsertArgs} args - Arguments to update or create a RekamMedis.
     * @example
     * // Update or create a RekamMedis
     * const rekamMedis = await prisma.rekamMedis.upsert({
     *   create: {
     *     // ... data to create a RekamMedis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RekamMedis we want to update
     *   }
     * })
     */
    upsert<T extends RekamMedisUpsertArgs>(args: SelectSubset<T, RekamMedisUpsertArgs<ExtArgs>>): Prisma__RekamMedisClient<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RekamMedis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekamMedisCountArgs} args - Arguments to filter RekamMedis to count.
     * @example
     * // Count the number of RekamMedis
     * const count = await prisma.rekamMedis.count({
     *   where: {
     *     // ... the filter for the RekamMedis we want to count
     *   }
     * })
    **/
    count<T extends RekamMedisCountArgs>(
      args?: Subset<T, RekamMedisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RekamMedisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RekamMedis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekamMedisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RekamMedisAggregateArgs>(args: Subset<T, RekamMedisAggregateArgs>): Prisma.PrismaPromise<GetRekamMedisAggregateType<T>>

    /**
     * Group by RekamMedis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RekamMedisGroupByArgs} args - Group by arguments.
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
      T extends RekamMedisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RekamMedisGroupByArgs['orderBy'] }
        : { orderBy?: RekamMedisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RekamMedisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRekamMedisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RekamMedis model
   */
  readonly fields: RekamMedisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RekamMedis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RekamMedisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kunjungan<T extends KunjunganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KunjunganDefaultArgs<ExtArgs>>): Prisma__KunjunganClient<$Result.GetResult<Prisma.$KunjunganPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resep<T extends RekamMedis$resepArgs<ExtArgs> = {}>(args?: Subset<T, RekamMedis$resepArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pembayaran<T extends RekamMedis$pembayaranArgs<ExtArgs> = {}>(args?: Subset<T, RekamMedis$pembayaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the RekamMedis model
   */
  interface RekamMedisFieldRefs {
    readonly id: FieldRef<"RekamMedis", 'BigInt'>
    readonly idKunjungan: FieldRef<"RekamMedis", 'BigInt'>
    readonly keluhan: FieldRef<"RekamMedis", 'String'>
    readonly diagnosa: FieldRef<"RekamMedis", 'String'>
    readonly tindakan: FieldRef<"RekamMedis", 'String'>
    readonly catatan: FieldRef<"RekamMedis", 'String'>
    readonly status: FieldRef<"RekamMedis", 'StatusRekam'>
    readonly createdAt: FieldRef<"RekamMedis", 'DateTime'>
    readonly updatedAt: FieldRef<"RekamMedis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RekamMedis findUnique
   */
  export type RekamMedisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
    /**
     * Filter, which RekamMedis to fetch.
     */
    where: RekamMedisWhereUniqueInput
  }

  /**
   * RekamMedis findUniqueOrThrow
   */
  export type RekamMedisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
    /**
     * Filter, which RekamMedis to fetch.
     */
    where: RekamMedisWhereUniqueInput
  }

  /**
   * RekamMedis findFirst
   */
  export type RekamMedisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
    /**
     * Filter, which RekamMedis to fetch.
     */
    where?: RekamMedisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RekamMedis to fetch.
     */
    orderBy?: RekamMedisOrderByWithRelationInput | RekamMedisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RekamMedis.
     */
    cursor?: RekamMedisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RekamMedis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RekamMedis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RekamMedis.
     */
    distinct?: RekamMedisScalarFieldEnum | RekamMedisScalarFieldEnum[]
  }

  /**
   * RekamMedis findFirstOrThrow
   */
  export type RekamMedisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
    /**
     * Filter, which RekamMedis to fetch.
     */
    where?: RekamMedisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RekamMedis to fetch.
     */
    orderBy?: RekamMedisOrderByWithRelationInput | RekamMedisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RekamMedis.
     */
    cursor?: RekamMedisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RekamMedis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RekamMedis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RekamMedis.
     */
    distinct?: RekamMedisScalarFieldEnum | RekamMedisScalarFieldEnum[]
  }

  /**
   * RekamMedis findMany
   */
  export type RekamMedisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
    /**
     * Filter, which RekamMedis to fetch.
     */
    where?: RekamMedisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RekamMedis to fetch.
     */
    orderBy?: RekamMedisOrderByWithRelationInput | RekamMedisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RekamMedis.
     */
    cursor?: RekamMedisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RekamMedis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RekamMedis.
     */
    skip?: number
    distinct?: RekamMedisScalarFieldEnum | RekamMedisScalarFieldEnum[]
  }

  /**
   * RekamMedis create
   */
  export type RekamMedisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
    /**
     * The data needed to create a RekamMedis.
     */
    data: XOR<RekamMedisCreateInput, RekamMedisUncheckedCreateInput>
  }

  /**
   * RekamMedis createMany
   */
  export type RekamMedisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RekamMedis.
     */
    data: RekamMedisCreateManyInput | RekamMedisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RekamMedis createManyAndReturn
   */
  export type RekamMedisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * The data used to create many RekamMedis.
     */
    data: RekamMedisCreateManyInput | RekamMedisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RekamMedis update
   */
  export type RekamMedisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
    /**
     * The data needed to update a RekamMedis.
     */
    data: XOR<RekamMedisUpdateInput, RekamMedisUncheckedUpdateInput>
    /**
     * Choose, which RekamMedis to update.
     */
    where: RekamMedisWhereUniqueInput
  }

  /**
   * RekamMedis updateMany
   */
  export type RekamMedisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RekamMedis.
     */
    data: XOR<RekamMedisUpdateManyMutationInput, RekamMedisUncheckedUpdateManyInput>
    /**
     * Filter which RekamMedis to update
     */
    where?: RekamMedisWhereInput
    /**
     * Limit how many RekamMedis to update.
     */
    limit?: number
  }

  /**
   * RekamMedis updateManyAndReturn
   */
  export type RekamMedisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * The data used to update RekamMedis.
     */
    data: XOR<RekamMedisUpdateManyMutationInput, RekamMedisUncheckedUpdateManyInput>
    /**
     * Filter which RekamMedis to update
     */
    where?: RekamMedisWhereInput
    /**
     * Limit how many RekamMedis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RekamMedis upsert
   */
  export type RekamMedisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
    /**
     * The filter to search for the RekamMedis to update in case it exists.
     */
    where: RekamMedisWhereUniqueInput
    /**
     * In case the RekamMedis found by the `where` argument doesn't exist, create a new RekamMedis with this data.
     */
    create: XOR<RekamMedisCreateInput, RekamMedisUncheckedCreateInput>
    /**
     * In case the RekamMedis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RekamMedisUpdateInput, RekamMedisUncheckedUpdateInput>
  }

  /**
   * RekamMedis delete
   */
  export type RekamMedisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
    /**
     * Filter which RekamMedis to delete.
     */
    where: RekamMedisWhereUniqueInput
  }

  /**
   * RekamMedis deleteMany
   */
  export type RekamMedisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RekamMedis to delete
     */
    where?: RekamMedisWhereInput
    /**
     * Limit how many RekamMedis to delete.
     */
    limit?: number
  }

  /**
   * RekamMedis.resep
   */
  export type RekamMedis$resepArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    where?: ResepWhereInput
    orderBy?: ResepOrderByWithRelationInput | ResepOrderByWithRelationInput[]
    cursor?: ResepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResepScalarFieldEnum | ResepScalarFieldEnum[]
  }

  /**
   * RekamMedis.pembayaran
   */
  export type RekamMedis$pembayaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    where?: PembayaranWhereInput
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    cursor?: PembayaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * RekamMedis without action
   */
  export type RekamMedisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RekamMedis
     */
    select?: RekamMedisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RekamMedis
     */
    omit?: RekamMedisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RekamMedisInclude<ExtArgs> | null
  }


  /**
   * Model Resep
   */

  export type AggregateResep = {
    _count: ResepCountAggregateOutputType | null
    _avg: ResepAvgAggregateOutputType | null
    _sum: ResepSumAggregateOutputType | null
    _min: ResepMinAggregateOutputType | null
    _max: ResepMaxAggregateOutputType | null
  }

  export type ResepAvgAggregateOutputType = {
    id: number | null
    idRm: number | null
    idObat: number | null
    jumlah: number | null
  }

  export type ResepSumAggregateOutputType = {
    id: bigint | null
    idRm: bigint | null
    idObat: bigint | null
    jumlah: number | null
  }

  export type ResepMinAggregateOutputType = {
    id: bigint | null
    idRm: bigint | null
    idObat: bigint | null
    jumlah: number | null
    aturanPakai: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResepMaxAggregateOutputType = {
    id: bigint | null
    idRm: bigint | null
    idObat: bigint | null
    jumlah: number | null
    aturanPakai: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ResepCountAggregateOutputType = {
    id: number
    idRm: number
    idObat: number
    jumlah: number
    aturanPakai: number
    catatan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ResepAvgAggregateInputType = {
    id?: true
    idRm?: true
    idObat?: true
    jumlah?: true
  }

  export type ResepSumAggregateInputType = {
    id?: true
    idRm?: true
    idObat?: true
    jumlah?: true
  }

  export type ResepMinAggregateInputType = {
    id?: true
    idRm?: true
    idObat?: true
    jumlah?: true
    aturanPakai?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResepMaxAggregateInputType = {
    id?: true
    idRm?: true
    idObat?: true
    jumlah?: true
    aturanPakai?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ResepCountAggregateInputType = {
    id?: true
    idRm?: true
    idObat?: true
    jumlah?: true
    aturanPakai?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ResepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resep to aggregate.
     */
    where?: ResepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseps to fetch.
     */
    orderBy?: ResepOrderByWithRelationInput | ResepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reseps
    **/
    _count?: true | ResepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResepMaxAggregateInputType
  }

  export type GetResepAggregateType<T extends ResepAggregateArgs> = {
        [P in keyof T & keyof AggregateResep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResep[P]>
      : GetScalarType<T[P], AggregateResep[P]>
  }




  export type ResepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResepWhereInput
    orderBy?: ResepOrderByWithAggregationInput | ResepOrderByWithAggregationInput[]
    by: ResepScalarFieldEnum[] | ResepScalarFieldEnum
    having?: ResepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResepCountAggregateInputType | true
    _avg?: ResepAvgAggregateInputType
    _sum?: ResepSumAggregateInputType
    _min?: ResepMinAggregateInputType
    _max?: ResepMaxAggregateInputType
  }

  export type ResepGroupByOutputType = {
    id: bigint
    idRm: bigint
    idObat: bigint
    jumlah: number
    aturanPakai: string
    catatan: string
    createdAt: Date | null
    updatedAt: Date | null
    _count: ResepCountAggregateOutputType | null
    _avg: ResepAvgAggregateOutputType | null
    _sum: ResepSumAggregateOutputType | null
    _min: ResepMinAggregateOutputType | null
    _max: ResepMaxAggregateOutputType | null
  }

  type GetResepGroupByPayload<T extends ResepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResepGroupByOutputType[P]>
            : GetScalarType<T[P], ResepGroupByOutputType[P]>
        }
      >
    >


  export type ResepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRm?: boolean
    idObat?: boolean
    jumlah?: boolean
    aturanPakai?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resep"]>

  export type ResepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRm?: boolean
    idObat?: boolean
    jumlah?: boolean
    aturanPakai?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resep"]>

  export type ResepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idRm?: boolean
    idObat?: boolean
    jumlah?: boolean
    aturanPakai?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resep"]>

  export type ResepSelectScalar = {
    id?: boolean
    idRm?: boolean
    idObat?: boolean
    jumlah?: boolean
    aturanPakai?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ResepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idRm" | "idObat" | "jumlah" | "aturanPakai" | "catatan" | "createdAt" | "updatedAt", ExtArgs["result"]["resep"]>
  export type ResepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }
  export type ResepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }
  export type ResepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rekamMedis?: boolean | RekamMedisDefaultArgs<ExtArgs>
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }

  export type $ResepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resep"
    objects: {
      rekamMedis: Prisma.$RekamMedisPayload<ExtArgs>
      obat: Prisma.$ObatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      idRm: bigint
      idObat: bigint
      jumlah: number
      aturanPakai: string
      catatan: string
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["resep"]>
    composites: {}
  }

  type ResepGetPayload<S extends boolean | null | undefined | ResepDefaultArgs> = $Result.GetResult<Prisma.$ResepPayload, S>

  type ResepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResepCountAggregateInputType | true
    }

  export interface ResepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resep'], meta: { name: 'Resep' } }
    /**
     * Find zero or one Resep that matches the filter.
     * @param {ResepFindUniqueArgs} args - Arguments to find a Resep
     * @example
     * // Get one Resep
     * const resep = await prisma.resep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResepFindUniqueArgs>(args: SelectSubset<T, ResepFindUniqueArgs<ExtArgs>>): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResepFindUniqueOrThrowArgs} args - Arguments to find a Resep
     * @example
     * // Get one Resep
     * const resep = await prisma.resep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResepFindUniqueOrThrowArgs>(args: SelectSubset<T, ResepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepFindFirstArgs} args - Arguments to find a Resep
     * @example
     * // Get one Resep
     * const resep = await prisma.resep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResepFindFirstArgs>(args?: SelectSubset<T, ResepFindFirstArgs<ExtArgs>>): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepFindFirstOrThrowArgs} args - Arguments to find a Resep
     * @example
     * // Get one Resep
     * const resep = await prisma.resep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResepFindFirstOrThrowArgs>(args?: SelectSubset<T, ResepFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reseps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reseps
     * const reseps = await prisma.resep.findMany()
     * 
     * // Get first 10 Reseps
     * const reseps = await prisma.resep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resepWithIdOnly = await prisma.resep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResepFindManyArgs>(args?: SelectSubset<T, ResepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resep.
     * @param {ResepCreateArgs} args - Arguments to create a Resep.
     * @example
     * // Create one Resep
     * const Resep = await prisma.resep.create({
     *   data: {
     *     // ... data to create a Resep
     *   }
     * })
     * 
     */
    create<T extends ResepCreateArgs>(args: SelectSubset<T, ResepCreateArgs<ExtArgs>>): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reseps.
     * @param {ResepCreateManyArgs} args - Arguments to create many Reseps.
     * @example
     * // Create many Reseps
     * const resep = await prisma.resep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResepCreateManyArgs>(args?: SelectSubset<T, ResepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reseps and returns the data saved in the database.
     * @param {ResepCreateManyAndReturnArgs} args - Arguments to create many Reseps.
     * @example
     * // Create many Reseps
     * const resep = await prisma.resep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reseps and only return the `id`
     * const resepWithIdOnly = await prisma.resep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResepCreateManyAndReturnArgs>(args?: SelectSubset<T, ResepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resep.
     * @param {ResepDeleteArgs} args - Arguments to delete one Resep.
     * @example
     * // Delete one Resep
     * const Resep = await prisma.resep.delete({
     *   where: {
     *     // ... filter to delete one Resep
     *   }
     * })
     * 
     */
    delete<T extends ResepDeleteArgs>(args: SelectSubset<T, ResepDeleteArgs<ExtArgs>>): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resep.
     * @param {ResepUpdateArgs} args - Arguments to update one Resep.
     * @example
     * // Update one Resep
     * const resep = await prisma.resep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResepUpdateArgs>(args: SelectSubset<T, ResepUpdateArgs<ExtArgs>>): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reseps.
     * @param {ResepDeleteManyArgs} args - Arguments to filter Reseps to delete.
     * @example
     * // Delete a few Reseps
     * const { count } = await prisma.resep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResepDeleteManyArgs>(args?: SelectSubset<T, ResepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reseps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reseps
     * const resep = await prisma.resep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResepUpdateManyArgs>(args: SelectSubset<T, ResepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reseps and returns the data updated in the database.
     * @param {ResepUpdateManyAndReturnArgs} args - Arguments to update many Reseps.
     * @example
     * // Update many Reseps
     * const resep = await prisma.resep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reseps and only return the `id`
     * const resepWithIdOnly = await prisma.resep.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResepUpdateManyAndReturnArgs>(args: SelectSubset<T, ResepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resep.
     * @param {ResepUpsertArgs} args - Arguments to update or create a Resep.
     * @example
     * // Update or create a Resep
     * const resep = await prisma.resep.upsert({
     *   create: {
     *     // ... data to create a Resep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resep we want to update
     *   }
     * })
     */
    upsert<T extends ResepUpsertArgs>(args: SelectSubset<T, ResepUpsertArgs<ExtArgs>>): Prisma__ResepClient<$Result.GetResult<Prisma.$ResepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reseps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepCountArgs} args - Arguments to filter Reseps to count.
     * @example
     * // Count the number of Reseps
     * const count = await prisma.resep.count({
     *   where: {
     *     // ... the filter for the Reseps we want to count
     *   }
     * })
    **/
    count<T extends ResepCountArgs>(
      args?: Subset<T, ResepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResepAggregateArgs>(args: Subset<T, ResepAggregateArgs>): Prisma.PrismaPromise<GetResepAggregateType<T>>

    /**
     * Group by Resep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResepGroupByArgs} args - Group by arguments.
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
      T extends ResepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResepGroupByArgs['orderBy'] }
        : { orderBy?: ResepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resep model
   */
  readonly fields: ResepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rekamMedis<T extends RekamMedisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RekamMedisDefaultArgs<ExtArgs>>): Prisma__RekamMedisClient<$Result.GetResult<Prisma.$RekamMedisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    obat<T extends ObatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObatDefaultArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resep model
   */
  interface ResepFieldRefs {
    readonly id: FieldRef<"Resep", 'BigInt'>
    readonly idRm: FieldRef<"Resep", 'BigInt'>
    readonly idObat: FieldRef<"Resep", 'BigInt'>
    readonly jumlah: FieldRef<"Resep", 'Int'>
    readonly aturanPakai: FieldRef<"Resep", 'String'>
    readonly catatan: FieldRef<"Resep", 'String'>
    readonly createdAt: FieldRef<"Resep", 'DateTime'>
    readonly updatedAt: FieldRef<"Resep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resep findUnique
   */
  export type ResepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter, which Resep to fetch.
     */
    where: ResepWhereUniqueInput
  }

  /**
   * Resep findUniqueOrThrow
   */
  export type ResepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter, which Resep to fetch.
     */
    where: ResepWhereUniqueInput
  }

  /**
   * Resep findFirst
   */
  export type ResepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter, which Resep to fetch.
     */
    where?: ResepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseps to fetch.
     */
    orderBy?: ResepOrderByWithRelationInput | ResepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reseps.
     */
    cursor?: ResepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reseps.
     */
    distinct?: ResepScalarFieldEnum | ResepScalarFieldEnum[]
  }

  /**
   * Resep findFirstOrThrow
   */
  export type ResepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter, which Resep to fetch.
     */
    where?: ResepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseps to fetch.
     */
    orderBy?: ResepOrderByWithRelationInput | ResepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reseps.
     */
    cursor?: ResepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reseps.
     */
    distinct?: ResepScalarFieldEnum | ResepScalarFieldEnum[]
  }

  /**
   * Resep findMany
   */
  export type ResepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter, which Reseps to fetch.
     */
    where?: ResepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reseps to fetch.
     */
    orderBy?: ResepOrderByWithRelationInput | ResepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reseps.
     */
    cursor?: ResepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reseps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reseps.
     */
    skip?: number
    distinct?: ResepScalarFieldEnum | ResepScalarFieldEnum[]
  }

  /**
   * Resep create
   */
  export type ResepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * The data needed to create a Resep.
     */
    data: XOR<ResepCreateInput, ResepUncheckedCreateInput>
  }

  /**
   * Resep createMany
   */
  export type ResepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reseps.
     */
    data: ResepCreateManyInput | ResepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resep createManyAndReturn
   */
  export type ResepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * The data used to create many Reseps.
     */
    data: ResepCreateManyInput | ResepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resep update
   */
  export type ResepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * The data needed to update a Resep.
     */
    data: XOR<ResepUpdateInput, ResepUncheckedUpdateInput>
    /**
     * Choose, which Resep to update.
     */
    where: ResepWhereUniqueInput
  }

  /**
   * Resep updateMany
   */
  export type ResepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reseps.
     */
    data: XOR<ResepUpdateManyMutationInput, ResepUncheckedUpdateManyInput>
    /**
     * Filter which Reseps to update
     */
    where?: ResepWhereInput
    /**
     * Limit how many Reseps to update.
     */
    limit?: number
  }

  /**
   * Resep updateManyAndReturn
   */
  export type ResepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * The data used to update Reseps.
     */
    data: XOR<ResepUpdateManyMutationInput, ResepUncheckedUpdateManyInput>
    /**
     * Filter which Reseps to update
     */
    where?: ResepWhereInput
    /**
     * Limit how many Reseps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resep upsert
   */
  export type ResepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * The filter to search for the Resep to update in case it exists.
     */
    where: ResepWhereUniqueInput
    /**
     * In case the Resep found by the `where` argument doesn't exist, create a new Resep with this data.
     */
    create: XOR<ResepCreateInput, ResepUncheckedCreateInput>
    /**
     * In case the Resep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResepUpdateInput, ResepUncheckedUpdateInput>
  }

  /**
   * Resep delete
   */
  export type ResepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
    /**
     * Filter which Resep to delete.
     */
    where: ResepWhereUniqueInput
  }

  /**
   * Resep deleteMany
   */
  export type ResepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reseps to delete
     */
    where?: ResepWhereInput
    /**
     * Limit how many Reseps to delete.
     */
    limit?: number
  }

  /**
   * Resep without action
   */
  export type ResepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resep
     */
    select?: ResepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resep
     */
    omit?: ResepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResepInclude<ExtArgs> | null
  }


  /**
   * Model StokObat
   */

  export type AggregateStokObat = {
    _count: StokObatCountAggregateOutputType | null
    _avg: StokObatAvgAggregateOutputType | null
    _sum: StokObatSumAggregateOutputType | null
    _min: StokObatMinAggregateOutputType | null
    _max: StokObatMaxAggregateOutputType | null
  }

  export type StokObatAvgAggregateOutputType = {
    id: number | null
    idObat: number | null
    jumlah: number | null
  }

  export type StokObatSumAggregateOutputType = {
    id: bigint | null
    idObat: bigint | null
    jumlah: number | null
  }

  export type StokObatMinAggregateOutputType = {
    id: bigint | null
    idObat: bigint | null
    tanggal: Date | null
    jumlah: number | null
    transaksi: $Enums.TransaksiObat | null
    sumberTransaksi: $Enums.SumberTransaksi | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StokObatMaxAggregateOutputType = {
    id: bigint | null
    idObat: bigint | null
    tanggal: Date | null
    jumlah: number | null
    transaksi: $Enums.TransaksiObat | null
    sumberTransaksi: $Enums.SumberTransaksi | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StokObatCountAggregateOutputType = {
    id: number
    idObat: number
    tanggal: number
    jumlah: number
    transaksi: number
    sumberTransaksi: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StokObatAvgAggregateInputType = {
    id?: true
    idObat?: true
    jumlah?: true
  }

  export type StokObatSumAggregateInputType = {
    id?: true
    idObat?: true
    jumlah?: true
  }

  export type StokObatMinAggregateInputType = {
    id?: true
    idObat?: true
    tanggal?: true
    jumlah?: true
    transaksi?: true
    sumberTransaksi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StokObatMaxAggregateInputType = {
    id?: true
    idObat?: true
    tanggal?: true
    jumlah?: true
    transaksi?: true
    sumberTransaksi?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StokObatCountAggregateInputType = {
    id?: true
    idObat?: true
    tanggal?: true
    jumlah?: true
    transaksi?: true
    sumberTransaksi?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StokObatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StokObat to aggregate.
     */
    where?: StokObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokObats to fetch.
     */
    orderBy?: StokObatOrderByWithRelationInput | StokObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StokObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokObats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokObats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StokObats
    **/
    _count?: true | StokObatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StokObatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StokObatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StokObatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StokObatMaxAggregateInputType
  }

  export type GetStokObatAggregateType<T extends StokObatAggregateArgs> = {
        [P in keyof T & keyof AggregateStokObat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStokObat[P]>
      : GetScalarType<T[P], AggregateStokObat[P]>
  }




  export type StokObatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StokObatWhereInput
    orderBy?: StokObatOrderByWithAggregationInput | StokObatOrderByWithAggregationInput[]
    by: StokObatScalarFieldEnum[] | StokObatScalarFieldEnum
    having?: StokObatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StokObatCountAggregateInputType | true
    _avg?: StokObatAvgAggregateInputType
    _sum?: StokObatSumAggregateInputType
    _min?: StokObatMinAggregateInputType
    _max?: StokObatMaxAggregateInputType
  }

  export type StokObatGroupByOutputType = {
    id: bigint
    idObat: bigint
    tanggal: Date
    jumlah: number
    transaksi: $Enums.TransaksiObat
    sumberTransaksi: $Enums.SumberTransaksi
    createdAt: Date | null
    updatedAt: Date | null
    _count: StokObatCountAggregateOutputType | null
    _avg: StokObatAvgAggregateOutputType | null
    _sum: StokObatSumAggregateOutputType | null
    _min: StokObatMinAggregateOutputType | null
    _max: StokObatMaxAggregateOutputType | null
  }

  type GetStokObatGroupByPayload<T extends StokObatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StokObatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StokObatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StokObatGroupByOutputType[P]>
            : GetScalarType<T[P], StokObatGroupByOutputType[P]>
        }
      >
    >


  export type StokObatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idObat?: boolean
    tanggal?: boolean
    jumlah?: boolean
    transaksi?: boolean
    sumberTransaksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stokObat"]>

  export type StokObatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idObat?: boolean
    tanggal?: boolean
    jumlah?: boolean
    transaksi?: boolean
    sumberTransaksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stokObat"]>

  export type StokObatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idObat?: boolean
    tanggal?: boolean
    jumlah?: boolean
    transaksi?: boolean
    sumberTransaksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stokObat"]>

  export type StokObatSelectScalar = {
    id?: boolean
    idObat?: boolean
    tanggal?: boolean
    jumlah?: boolean
    transaksi?: boolean
    sumberTransaksi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StokObatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idObat" | "tanggal" | "jumlah" | "transaksi" | "sumberTransaksi" | "createdAt" | "updatedAt", ExtArgs["result"]["stokObat"]>
  export type StokObatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }
  export type StokObatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }
  export type StokObatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    obat?: boolean | ObatDefaultArgs<ExtArgs>
  }

  export type $StokObatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StokObat"
    objects: {
      obat: Prisma.$ObatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      idObat: bigint
      tanggal: Date
      jumlah: number
      transaksi: $Enums.TransaksiObat
      sumberTransaksi: $Enums.SumberTransaksi
      createdAt: Date | null
      updatedAt: Date | null
    }, ExtArgs["result"]["stokObat"]>
    composites: {}
  }

  type StokObatGetPayload<S extends boolean | null | undefined | StokObatDefaultArgs> = $Result.GetResult<Prisma.$StokObatPayload, S>

  type StokObatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StokObatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StokObatCountAggregateInputType | true
    }

  export interface StokObatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StokObat'], meta: { name: 'StokObat' } }
    /**
     * Find zero or one StokObat that matches the filter.
     * @param {StokObatFindUniqueArgs} args - Arguments to find a StokObat
     * @example
     * // Get one StokObat
     * const stokObat = await prisma.stokObat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StokObatFindUniqueArgs>(args: SelectSubset<T, StokObatFindUniqueArgs<ExtArgs>>): Prisma__StokObatClient<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StokObat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StokObatFindUniqueOrThrowArgs} args - Arguments to find a StokObat
     * @example
     * // Get one StokObat
     * const stokObat = await prisma.stokObat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StokObatFindUniqueOrThrowArgs>(args: SelectSubset<T, StokObatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StokObatClient<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StokObat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokObatFindFirstArgs} args - Arguments to find a StokObat
     * @example
     * // Get one StokObat
     * const stokObat = await prisma.stokObat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StokObatFindFirstArgs>(args?: SelectSubset<T, StokObatFindFirstArgs<ExtArgs>>): Prisma__StokObatClient<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StokObat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokObatFindFirstOrThrowArgs} args - Arguments to find a StokObat
     * @example
     * // Get one StokObat
     * const stokObat = await prisma.stokObat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StokObatFindFirstOrThrowArgs>(args?: SelectSubset<T, StokObatFindFirstOrThrowArgs<ExtArgs>>): Prisma__StokObatClient<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StokObats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokObatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StokObats
     * const stokObats = await prisma.stokObat.findMany()
     * 
     * // Get first 10 StokObats
     * const stokObats = await prisma.stokObat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stokObatWithIdOnly = await prisma.stokObat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StokObatFindManyArgs>(args?: SelectSubset<T, StokObatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StokObat.
     * @param {StokObatCreateArgs} args - Arguments to create a StokObat.
     * @example
     * // Create one StokObat
     * const StokObat = await prisma.stokObat.create({
     *   data: {
     *     // ... data to create a StokObat
     *   }
     * })
     * 
     */
    create<T extends StokObatCreateArgs>(args: SelectSubset<T, StokObatCreateArgs<ExtArgs>>): Prisma__StokObatClient<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StokObats.
     * @param {StokObatCreateManyArgs} args - Arguments to create many StokObats.
     * @example
     * // Create many StokObats
     * const stokObat = await prisma.stokObat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StokObatCreateManyArgs>(args?: SelectSubset<T, StokObatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StokObats and returns the data saved in the database.
     * @param {StokObatCreateManyAndReturnArgs} args - Arguments to create many StokObats.
     * @example
     * // Create many StokObats
     * const stokObat = await prisma.stokObat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StokObats and only return the `id`
     * const stokObatWithIdOnly = await prisma.stokObat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StokObatCreateManyAndReturnArgs>(args?: SelectSubset<T, StokObatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StokObat.
     * @param {StokObatDeleteArgs} args - Arguments to delete one StokObat.
     * @example
     * // Delete one StokObat
     * const StokObat = await prisma.stokObat.delete({
     *   where: {
     *     // ... filter to delete one StokObat
     *   }
     * })
     * 
     */
    delete<T extends StokObatDeleteArgs>(args: SelectSubset<T, StokObatDeleteArgs<ExtArgs>>): Prisma__StokObatClient<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StokObat.
     * @param {StokObatUpdateArgs} args - Arguments to update one StokObat.
     * @example
     * // Update one StokObat
     * const stokObat = await prisma.stokObat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StokObatUpdateArgs>(args: SelectSubset<T, StokObatUpdateArgs<ExtArgs>>): Prisma__StokObatClient<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StokObats.
     * @param {StokObatDeleteManyArgs} args - Arguments to filter StokObats to delete.
     * @example
     * // Delete a few StokObats
     * const { count } = await prisma.stokObat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StokObatDeleteManyArgs>(args?: SelectSubset<T, StokObatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StokObats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokObatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StokObats
     * const stokObat = await prisma.stokObat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StokObatUpdateManyArgs>(args: SelectSubset<T, StokObatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StokObats and returns the data updated in the database.
     * @param {StokObatUpdateManyAndReturnArgs} args - Arguments to update many StokObats.
     * @example
     * // Update many StokObats
     * const stokObat = await prisma.stokObat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StokObats and only return the `id`
     * const stokObatWithIdOnly = await prisma.stokObat.updateManyAndReturn({
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
    updateManyAndReturn<T extends StokObatUpdateManyAndReturnArgs>(args: SelectSubset<T, StokObatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StokObat.
     * @param {StokObatUpsertArgs} args - Arguments to update or create a StokObat.
     * @example
     * // Update or create a StokObat
     * const stokObat = await prisma.stokObat.upsert({
     *   create: {
     *     // ... data to create a StokObat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StokObat we want to update
     *   }
     * })
     */
    upsert<T extends StokObatUpsertArgs>(args: SelectSubset<T, StokObatUpsertArgs<ExtArgs>>): Prisma__StokObatClient<$Result.GetResult<Prisma.$StokObatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StokObats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokObatCountArgs} args - Arguments to filter StokObats to count.
     * @example
     * // Count the number of StokObats
     * const count = await prisma.stokObat.count({
     *   where: {
     *     // ... the filter for the StokObats we want to count
     *   }
     * })
    **/
    count<T extends StokObatCountArgs>(
      args?: Subset<T, StokObatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StokObatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StokObat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokObatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StokObatAggregateArgs>(args: Subset<T, StokObatAggregateArgs>): Prisma.PrismaPromise<GetStokObatAggregateType<T>>

    /**
     * Group by StokObat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokObatGroupByArgs} args - Group by arguments.
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
      T extends StokObatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StokObatGroupByArgs['orderBy'] }
        : { orderBy?: StokObatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StokObatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStokObatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StokObat model
   */
  readonly fields: StokObatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StokObat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StokObatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    obat<T extends ObatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObatDefaultArgs<ExtArgs>>): Prisma__ObatClient<$Result.GetResult<Prisma.$ObatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StokObat model
   */
  interface StokObatFieldRefs {
    readonly id: FieldRef<"StokObat", 'BigInt'>
    readonly idObat: FieldRef<"StokObat", 'BigInt'>
    readonly tanggal: FieldRef<"StokObat", 'DateTime'>
    readonly jumlah: FieldRef<"StokObat", 'Int'>
    readonly transaksi: FieldRef<"StokObat", 'TransaksiObat'>
    readonly sumberTransaksi: FieldRef<"StokObat", 'SumberTransaksi'>
    readonly createdAt: FieldRef<"StokObat", 'DateTime'>
    readonly updatedAt: FieldRef<"StokObat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StokObat findUnique
   */
  export type StokObatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
    /**
     * Filter, which StokObat to fetch.
     */
    where: StokObatWhereUniqueInput
  }

  /**
   * StokObat findUniqueOrThrow
   */
  export type StokObatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
    /**
     * Filter, which StokObat to fetch.
     */
    where: StokObatWhereUniqueInput
  }

  /**
   * StokObat findFirst
   */
  export type StokObatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
    /**
     * Filter, which StokObat to fetch.
     */
    where?: StokObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokObats to fetch.
     */
    orderBy?: StokObatOrderByWithRelationInput | StokObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StokObats.
     */
    cursor?: StokObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokObats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokObats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StokObats.
     */
    distinct?: StokObatScalarFieldEnum | StokObatScalarFieldEnum[]
  }

  /**
   * StokObat findFirstOrThrow
   */
  export type StokObatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
    /**
     * Filter, which StokObat to fetch.
     */
    where?: StokObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokObats to fetch.
     */
    orderBy?: StokObatOrderByWithRelationInput | StokObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StokObats.
     */
    cursor?: StokObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokObats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokObats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StokObats.
     */
    distinct?: StokObatScalarFieldEnum | StokObatScalarFieldEnum[]
  }

  /**
   * StokObat findMany
   */
  export type StokObatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
    /**
     * Filter, which StokObats to fetch.
     */
    where?: StokObatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokObats to fetch.
     */
    orderBy?: StokObatOrderByWithRelationInput | StokObatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StokObats.
     */
    cursor?: StokObatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokObats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokObats.
     */
    skip?: number
    distinct?: StokObatScalarFieldEnum | StokObatScalarFieldEnum[]
  }

  /**
   * StokObat create
   */
  export type StokObatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
    /**
     * The data needed to create a StokObat.
     */
    data: XOR<StokObatCreateInput, StokObatUncheckedCreateInput>
  }

  /**
   * StokObat createMany
   */
  export type StokObatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StokObats.
     */
    data: StokObatCreateManyInput | StokObatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StokObat createManyAndReturn
   */
  export type StokObatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * The data used to create many StokObats.
     */
    data: StokObatCreateManyInput | StokObatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StokObat update
   */
  export type StokObatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
    /**
     * The data needed to update a StokObat.
     */
    data: XOR<StokObatUpdateInput, StokObatUncheckedUpdateInput>
    /**
     * Choose, which StokObat to update.
     */
    where: StokObatWhereUniqueInput
  }

  /**
   * StokObat updateMany
   */
  export type StokObatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StokObats.
     */
    data: XOR<StokObatUpdateManyMutationInput, StokObatUncheckedUpdateManyInput>
    /**
     * Filter which StokObats to update
     */
    where?: StokObatWhereInput
    /**
     * Limit how many StokObats to update.
     */
    limit?: number
  }

  /**
   * StokObat updateManyAndReturn
   */
  export type StokObatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * The data used to update StokObats.
     */
    data: XOR<StokObatUpdateManyMutationInput, StokObatUncheckedUpdateManyInput>
    /**
     * Filter which StokObats to update
     */
    where?: StokObatWhereInput
    /**
     * Limit how many StokObats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StokObat upsert
   */
  export type StokObatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
    /**
     * The filter to search for the StokObat to update in case it exists.
     */
    where: StokObatWhereUniqueInput
    /**
     * In case the StokObat found by the `where` argument doesn't exist, create a new StokObat with this data.
     */
    create: XOR<StokObatCreateInput, StokObatUncheckedCreateInput>
    /**
     * In case the StokObat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StokObatUpdateInput, StokObatUncheckedUpdateInput>
  }

  /**
   * StokObat delete
   */
  export type StokObatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
    /**
     * Filter which StokObat to delete.
     */
    where: StokObatWhereUniqueInput
  }

  /**
   * StokObat deleteMany
   */
  export type StokObatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StokObats to delete
     */
    where?: StokObatWhereInput
    /**
     * Limit how many StokObats to delete.
     */
    limit?: number
  }

  /**
   * StokObat without action
   */
  export type StokObatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StokObat
     */
    select?: StokObatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StokObat
     */
    omit?: StokObatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokObatInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const EdukasiScalarFieldEnum: {
    id: 'id',
    idAdmin: 'idAdmin',
    judul: 'judul',
    isi: 'isi',
    layananId: 'layananId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EdukasiScalarFieldEnum = (typeof EdukasiScalarFieldEnum)[keyof typeof EdukasiScalarFieldEnum]


  export const JadwalImunisasiScalarFieldEnum: {
    id: 'id',
    idLayanan: 'idLayanan',
    tanggal: 'tanggal',
    catatan: 'catatan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JadwalImunisasiScalarFieldEnum = (typeof JadwalImunisasiScalarFieldEnum)[keyof typeof JadwalImunisasiScalarFieldEnum]


  export const KunjunganScalarFieldEnum: {
    id: 'id',
    idPasien: 'idPasien',
    idLayanan: 'idLayanan',
    tglKunjungan: 'tglKunjungan',
    waktuKunjungan: 'waktuKunjungan',
    status: 'status',
    catatan: 'catatan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KunjunganScalarFieldEnum = (typeof KunjunganScalarFieldEnum)[keyof typeof KunjunganScalarFieldEnum]


  export const LayananScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LayananScalarFieldEnum = (typeof LayananScalarFieldEnum)[keyof typeof LayananScalarFieldEnum]


  export const LayananEdukasiScalarFieldEnum: {
    idEdukasi: 'idEdukasi',
    idLayanan: 'idLayanan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LayananEdukasiScalarFieldEnum = (typeof LayananEdukasiScalarFieldEnum)[keyof typeof LayananEdukasiScalarFieldEnum]


  export const ObatScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    stok: 'stok',
    harga: 'harga',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ObatScalarFieldEnum = (typeof ObatScalarFieldEnum)[keyof typeof ObatScalarFieldEnum]


  export const PasienScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    noReg: 'noReg',
    tglLahir: 'tglLahir',
    alamat: 'alamat',
    hp: 'hp',
    jenisKelamin: 'jenisKelamin',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PasienScalarFieldEnum = (typeof PasienScalarFieldEnum)[keyof typeof PasienScalarFieldEnum]


  export const PembayaranScalarFieldEnum: {
    id: 'id',
    idRm: 'idRm',
    tglBayar: 'tglBayar',
    totalBayar: 'totalBayar',
    metode: 'metode',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PembayaranScalarFieldEnum = (typeof PembayaranScalarFieldEnum)[keyof typeof PembayaranScalarFieldEnum]


  export const RekamMedisScalarFieldEnum: {
    id: 'id',
    idKunjungan: 'idKunjungan',
    keluhan: 'keluhan',
    diagnosa: 'diagnosa',
    tindakan: 'tindakan',
    catatan: 'catatan',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RekamMedisScalarFieldEnum = (typeof RekamMedisScalarFieldEnum)[keyof typeof RekamMedisScalarFieldEnum]


  export const ResepScalarFieldEnum: {
    id: 'id',
    idRm: 'idRm',
    idObat: 'idObat',
    jumlah: 'jumlah',
    aturanPakai: 'aturanPakai',
    catatan: 'catatan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ResepScalarFieldEnum = (typeof ResepScalarFieldEnum)[keyof typeof ResepScalarFieldEnum]


  export const StokObatScalarFieldEnum: {
    id: 'id',
    idObat: 'idObat',
    tanggal: 'tanggal',
    jumlah: 'jumlah',
    transaksi: 'transaksi',
    sumberTransaksi: 'sumberTransaksi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StokObatScalarFieldEnum = (typeof StokObatScalarFieldEnum)[keyof typeof StokObatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusKunjungan'
   */
  export type EnumStatusKunjunganFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKunjungan'>
    


  /**
   * Reference to a field of type 'StatusKunjungan[]'
   */
  export type ListEnumStatusKunjunganFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusKunjungan[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'JenisKelamin'
   */
  export type EnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin'>
    


  /**
   * Reference to a field of type 'JenisKelamin[]'
   */
  export type ListEnumJenisKelaminFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'JenisKelamin[]'>
    


  /**
   * Reference to a field of type 'StatusPasien'
   */
  export type EnumStatusPasienFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPasien'>
    


  /**
   * Reference to a field of type 'StatusPasien[]'
   */
  export type ListEnumStatusPasienFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPasien[]'>
    


  /**
   * Reference to a field of type 'StatusPembayaran'
   */
  export type EnumStatusPembayaranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPembayaran'>
    


  /**
   * Reference to a field of type 'StatusPembayaran[]'
   */
  export type ListEnumStatusPembayaranFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPembayaran[]'>
    


  /**
   * Reference to a field of type 'StatusRekam'
   */
  export type EnumStatusRekamFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRekam'>
    


  /**
   * Reference to a field of type 'StatusRekam[]'
   */
  export type ListEnumStatusRekamFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRekam[]'>
    


  /**
   * Reference to a field of type 'TransaksiObat'
   */
  export type EnumTransaksiObatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransaksiObat'>
    


  /**
   * Reference to a field of type 'TransaksiObat[]'
   */
  export type ListEnumTransaksiObatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransaksiObat[]'>
    


  /**
   * Reference to a field of type 'SumberTransaksi'
   */
  export type EnumSumberTransaksiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SumberTransaksi'>
    


  /**
   * Reference to a field of type 'SumberTransaksi[]'
   */
  export type ListEnumSumberTransaksiFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SumberTransaksi[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: BigIntFilter<"Admin"> | bigint | number
    nama?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    createdAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    edukasi?: EdukasiListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    edukasi?: EdukasiOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    nama?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    createdAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    edukasi?: EdukasiListRelationFilter
  }, "id">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Admin"> | bigint | number
    nama?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    createdAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
  }

  export type EdukasiWhereInput = {
    AND?: EdukasiWhereInput | EdukasiWhereInput[]
    OR?: EdukasiWhereInput[]
    NOT?: EdukasiWhereInput | EdukasiWhereInput[]
    id?: BigIntFilter<"Edukasi"> | bigint | number
    idAdmin?: BigIntFilter<"Edukasi"> | bigint | number
    judul?: StringFilter<"Edukasi"> | string
    isi?: StringFilter<"Edukasi"> | string
    layananId?: BigIntNullableFilter<"Edukasi"> | bigint | number | null
    createdAt?: DateTimeNullableFilter<"Edukasi"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Edukasi"> | Date | string | null
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    layananEdukasi?: LayananEdukasiListRelationFilter
    layanan?: XOR<LayananNullableScalarRelationFilter, LayananWhereInput> | null
  }

  export type EdukasiOrderByWithRelationInput = {
    id?: SortOrder
    idAdmin?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    layananId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    layananEdukasi?: LayananEdukasiOrderByRelationAggregateInput
    layanan?: LayananOrderByWithRelationInput
  }

  export type EdukasiWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: EdukasiWhereInput | EdukasiWhereInput[]
    OR?: EdukasiWhereInput[]
    NOT?: EdukasiWhereInput | EdukasiWhereInput[]
    idAdmin?: BigIntFilter<"Edukasi"> | bigint | number
    judul?: StringFilter<"Edukasi"> | string
    isi?: StringFilter<"Edukasi"> | string
    layananId?: BigIntNullableFilter<"Edukasi"> | bigint | number | null
    createdAt?: DateTimeNullableFilter<"Edukasi"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Edukasi"> | Date | string | null
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    layananEdukasi?: LayananEdukasiListRelationFilter
    layanan?: XOR<LayananNullableScalarRelationFilter, LayananWhereInput> | null
  }, "id">

  export type EdukasiOrderByWithAggregationInput = {
    id?: SortOrder
    idAdmin?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    layananId?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: EdukasiCountOrderByAggregateInput
    _avg?: EdukasiAvgOrderByAggregateInput
    _max?: EdukasiMaxOrderByAggregateInput
    _min?: EdukasiMinOrderByAggregateInput
    _sum?: EdukasiSumOrderByAggregateInput
  }

  export type EdukasiScalarWhereWithAggregatesInput = {
    AND?: EdukasiScalarWhereWithAggregatesInput | EdukasiScalarWhereWithAggregatesInput[]
    OR?: EdukasiScalarWhereWithAggregatesInput[]
    NOT?: EdukasiScalarWhereWithAggregatesInput | EdukasiScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Edukasi"> | bigint | number
    idAdmin?: BigIntWithAggregatesFilter<"Edukasi"> | bigint | number
    judul?: StringWithAggregatesFilter<"Edukasi"> | string
    isi?: StringWithAggregatesFilter<"Edukasi"> | string
    layananId?: BigIntNullableWithAggregatesFilter<"Edukasi"> | bigint | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Edukasi"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Edukasi"> | Date | string | null
  }

  export type JadwalImunisasiWhereInput = {
    AND?: JadwalImunisasiWhereInput | JadwalImunisasiWhereInput[]
    OR?: JadwalImunisasiWhereInput[]
    NOT?: JadwalImunisasiWhereInput | JadwalImunisasiWhereInput[]
    id?: BigIntFilter<"JadwalImunisasi"> | bigint | number
    idLayanan?: BigIntFilter<"JadwalImunisasi"> | bigint | number
    tanggal?: DateTimeFilter<"JadwalImunisasi"> | Date | string
    catatan?: StringFilter<"JadwalImunisasi"> | string
    createdAt?: DateTimeNullableFilter<"JadwalImunisasi"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"JadwalImunisasi"> | Date | string | null
    layanan?: XOR<LayananScalarRelationFilter, LayananWhereInput>
  }

  export type JadwalImunisasiOrderByWithRelationInput = {
    id?: SortOrder
    idLayanan?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    layanan?: LayananOrderByWithRelationInput
  }

  export type JadwalImunisasiWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: JadwalImunisasiWhereInput | JadwalImunisasiWhereInput[]
    OR?: JadwalImunisasiWhereInput[]
    NOT?: JadwalImunisasiWhereInput | JadwalImunisasiWhereInput[]
    idLayanan?: BigIntFilter<"JadwalImunisasi"> | bigint | number
    tanggal?: DateTimeFilter<"JadwalImunisasi"> | Date | string
    catatan?: StringFilter<"JadwalImunisasi"> | string
    createdAt?: DateTimeNullableFilter<"JadwalImunisasi"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"JadwalImunisasi"> | Date | string | null
    layanan?: XOR<LayananScalarRelationFilter, LayananWhereInput>
  }, "id">

  export type JadwalImunisasiOrderByWithAggregationInput = {
    id?: SortOrder
    idLayanan?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: JadwalImunisasiCountOrderByAggregateInput
    _avg?: JadwalImunisasiAvgOrderByAggregateInput
    _max?: JadwalImunisasiMaxOrderByAggregateInput
    _min?: JadwalImunisasiMinOrderByAggregateInput
    _sum?: JadwalImunisasiSumOrderByAggregateInput
  }

  export type JadwalImunisasiScalarWhereWithAggregatesInput = {
    AND?: JadwalImunisasiScalarWhereWithAggregatesInput | JadwalImunisasiScalarWhereWithAggregatesInput[]
    OR?: JadwalImunisasiScalarWhereWithAggregatesInput[]
    NOT?: JadwalImunisasiScalarWhereWithAggregatesInput | JadwalImunisasiScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"JadwalImunisasi"> | bigint | number
    idLayanan?: BigIntWithAggregatesFilter<"JadwalImunisasi"> | bigint | number
    tanggal?: DateTimeWithAggregatesFilter<"JadwalImunisasi"> | Date | string
    catatan?: StringWithAggregatesFilter<"JadwalImunisasi"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"JadwalImunisasi"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"JadwalImunisasi"> | Date | string | null
  }

  export type KunjunganWhereInput = {
    AND?: KunjunganWhereInput | KunjunganWhereInput[]
    OR?: KunjunganWhereInput[]
    NOT?: KunjunganWhereInput | KunjunganWhereInput[]
    id?: BigIntFilter<"Kunjungan"> | bigint | number
    idPasien?: BigIntFilter<"Kunjungan"> | bigint | number
    idLayanan?: BigIntFilter<"Kunjungan"> | bigint | number
    tglKunjungan?: DateTimeFilter<"Kunjungan"> | Date | string
    waktuKunjungan?: DateTimeFilter<"Kunjungan"> | Date | string
    status?: EnumStatusKunjunganFilter<"Kunjungan"> | $Enums.StatusKunjungan
    catatan?: StringFilter<"Kunjungan"> | string
    createdAt?: DateTimeNullableFilter<"Kunjungan"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Kunjungan"> | Date | string | null
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
    layanan?: XOR<LayananScalarRelationFilter, LayananWhereInput>
    rekamMedis?: RekamMedisListRelationFilter
  }

  export type KunjunganOrderByWithRelationInput = {
    id?: SortOrder
    idPasien?: SortOrder
    idLayanan?: SortOrder
    tglKunjungan?: SortOrder
    waktuKunjungan?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    pasien?: PasienOrderByWithRelationInput
    layanan?: LayananOrderByWithRelationInput
    rekamMedis?: RekamMedisOrderByRelationAggregateInput
  }

  export type KunjunganWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: KunjunganWhereInput | KunjunganWhereInput[]
    OR?: KunjunganWhereInput[]
    NOT?: KunjunganWhereInput | KunjunganWhereInput[]
    idPasien?: BigIntFilter<"Kunjungan"> | bigint | number
    idLayanan?: BigIntFilter<"Kunjungan"> | bigint | number
    tglKunjungan?: DateTimeFilter<"Kunjungan"> | Date | string
    waktuKunjungan?: DateTimeFilter<"Kunjungan"> | Date | string
    status?: EnumStatusKunjunganFilter<"Kunjungan"> | $Enums.StatusKunjungan
    catatan?: StringFilter<"Kunjungan"> | string
    createdAt?: DateTimeNullableFilter<"Kunjungan"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Kunjungan"> | Date | string | null
    pasien?: XOR<PasienScalarRelationFilter, PasienWhereInput>
    layanan?: XOR<LayananScalarRelationFilter, LayananWhereInput>
    rekamMedis?: RekamMedisListRelationFilter
  }, "id">

  export type KunjunganOrderByWithAggregationInput = {
    id?: SortOrder
    idPasien?: SortOrder
    idLayanan?: SortOrder
    tglKunjungan?: SortOrder
    waktuKunjungan?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: KunjunganCountOrderByAggregateInput
    _avg?: KunjunganAvgOrderByAggregateInput
    _max?: KunjunganMaxOrderByAggregateInput
    _min?: KunjunganMinOrderByAggregateInput
    _sum?: KunjunganSumOrderByAggregateInput
  }

  export type KunjunganScalarWhereWithAggregatesInput = {
    AND?: KunjunganScalarWhereWithAggregatesInput | KunjunganScalarWhereWithAggregatesInput[]
    OR?: KunjunganScalarWhereWithAggregatesInput[]
    NOT?: KunjunganScalarWhereWithAggregatesInput | KunjunganScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Kunjungan"> | bigint | number
    idPasien?: BigIntWithAggregatesFilter<"Kunjungan"> | bigint | number
    idLayanan?: BigIntWithAggregatesFilter<"Kunjungan"> | bigint | number
    tglKunjungan?: DateTimeWithAggregatesFilter<"Kunjungan"> | Date | string
    waktuKunjungan?: DateTimeWithAggregatesFilter<"Kunjungan"> | Date | string
    status?: EnumStatusKunjunganWithAggregatesFilter<"Kunjungan"> | $Enums.StatusKunjungan
    catatan?: StringWithAggregatesFilter<"Kunjungan"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Kunjungan"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Kunjungan"> | Date | string | null
  }

  export type LayananWhereInput = {
    AND?: LayananWhereInput | LayananWhereInput[]
    OR?: LayananWhereInput[]
    NOT?: LayananWhereInput | LayananWhereInput[]
    id?: BigIntFilter<"Layanan"> | bigint | number
    nama?: StringFilter<"Layanan"> | string
    createdAt?: DateTimeNullableFilter<"Layanan"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Layanan"> | Date | string | null
    edukasi?: EdukasiListRelationFilter
    layananEdukasi?: LayananEdukasiListRelationFilter
    jadwalImunisasi?: JadwalImunisasiListRelationFilter
    kunjungan?: KunjunganListRelationFilter
  }

  export type LayananOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    edukasi?: EdukasiOrderByRelationAggregateInput
    layananEdukasi?: LayananEdukasiOrderByRelationAggregateInput
    jadwalImunisasi?: JadwalImunisasiOrderByRelationAggregateInput
    kunjungan?: KunjunganOrderByRelationAggregateInput
  }

  export type LayananWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: LayananWhereInput | LayananWhereInput[]
    OR?: LayananWhereInput[]
    NOT?: LayananWhereInput | LayananWhereInput[]
    nama?: StringFilter<"Layanan"> | string
    createdAt?: DateTimeNullableFilter<"Layanan"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Layanan"> | Date | string | null
    edukasi?: EdukasiListRelationFilter
    layananEdukasi?: LayananEdukasiListRelationFilter
    jadwalImunisasi?: JadwalImunisasiListRelationFilter
    kunjungan?: KunjunganListRelationFilter
  }, "id">

  export type LayananOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: LayananCountOrderByAggregateInput
    _avg?: LayananAvgOrderByAggregateInput
    _max?: LayananMaxOrderByAggregateInput
    _min?: LayananMinOrderByAggregateInput
    _sum?: LayananSumOrderByAggregateInput
  }

  export type LayananScalarWhereWithAggregatesInput = {
    AND?: LayananScalarWhereWithAggregatesInput | LayananScalarWhereWithAggregatesInput[]
    OR?: LayananScalarWhereWithAggregatesInput[]
    NOT?: LayananScalarWhereWithAggregatesInput | LayananScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Layanan"> | bigint | number
    nama?: StringWithAggregatesFilter<"Layanan"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Layanan"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Layanan"> | Date | string | null
  }

  export type LayananEdukasiWhereInput = {
    AND?: LayananEdukasiWhereInput | LayananEdukasiWhereInput[]
    OR?: LayananEdukasiWhereInput[]
    NOT?: LayananEdukasiWhereInput | LayananEdukasiWhereInput[]
    idEdukasi?: BigIntFilter<"LayananEdukasi"> | bigint | number
    idLayanan?: BigIntFilter<"LayananEdukasi"> | bigint | number
    createdAt?: DateTimeNullableFilter<"LayananEdukasi"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"LayananEdukasi"> | Date | string | null
    edukasi?: XOR<EdukasiScalarRelationFilter, EdukasiWhereInput>
    layanan?: XOR<LayananScalarRelationFilter, LayananWhereInput>
  }

  export type LayananEdukasiOrderByWithRelationInput = {
    idEdukasi?: SortOrder
    idLayanan?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    edukasi?: EdukasiOrderByWithRelationInput
    layanan?: LayananOrderByWithRelationInput
  }

  export type LayananEdukasiWhereUniqueInput = Prisma.AtLeast<{
    idEdukasi_idLayanan?: LayananEdukasiIdEdukasiIdLayananCompoundUniqueInput
    AND?: LayananEdukasiWhereInput | LayananEdukasiWhereInput[]
    OR?: LayananEdukasiWhereInput[]
    NOT?: LayananEdukasiWhereInput | LayananEdukasiWhereInput[]
    idEdukasi?: BigIntFilter<"LayananEdukasi"> | bigint | number
    idLayanan?: BigIntFilter<"LayananEdukasi"> | bigint | number
    createdAt?: DateTimeNullableFilter<"LayananEdukasi"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"LayananEdukasi"> | Date | string | null
    edukasi?: XOR<EdukasiScalarRelationFilter, EdukasiWhereInput>
    layanan?: XOR<LayananScalarRelationFilter, LayananWhereInput>
  }, "idEdukasi_idLayanan">

  export type LayananEdukasiOrderByWithAggregationInput = {
    idEdukasi?: SortOrder
    idLayanan?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: LayananEdukasiCountOrderByAggregateInput
    _avg?: LayananEdukasiAvgOrderByAggregateInput
    _max?: LayananEdukasiMaxOrderByAggregateInput
    _min?: LayananEdukasiMinOrderByAggregateInput
    _sum?: LayananEdukasiSumOrderByAggregateInput
  }

  export type LayananEdukasiScalarWhereWithAggregatesInput = {
    AND?: LayananEdukasiScalarWhereWithAggregatesInput | LayananEdukasiScalarWhereWithAggregatesInput[]
    OR?: LayananEdukasiScalarWhereWithAggregatesInput[]
    NOT?: LayananEdukasiScalarWhereWithAggregatesInput | LayananEdukasiScalarWhereWithAggregatesInput[]
    idEdukasi?: BigIntWithAggregatesFilter<"LayananEdukasi"> | bigint | number
    idLayanan?: BigIntWithAggregatesFilter<"LayananEdukasi"> | bigint | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"LayananEdukasi"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"LayananEdukasi"> | Date | string | null
  }

  export type ObatWhereInput = {
    AND?: ObatWhereInput | ObatWhereInput[]
    OR?: ObatWhereInput[]
    NOT?: ObatWhereInput | ObatWhereInput[]
    id?: BigIntFilter<"Obat"> | bigint | number
    nama?: StringFilter<"Obat"> | string
    stok?: IntFilter<"Obat"> | number
    harga?: IntFilter<"Obat"> | number
    createdAt?: DateTimeNullableFilter<"Obat"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Obat"> | Date | string | null
    resep?: ResepListRelationFilter
    stokObat?: StokObatListRelationFilter
  }

  export type ObatOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    stok?: SortOrder
    harga?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    resep?: ResepOrderByRelationAggregateInput
    stokObat?: StokObatOrderByRelationAggregateInput
  }

  export type ObatWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ObatWhereInput | ObatWhereInput[]
    OR?: ObatWhereInput[]
    NOT?: ObatWhereInput | ObatWhereInput[]
    nama?: StringFilter<"Obat"> | string
    stok?: IntFilter<"Obat"> | number
    harga?: IntFilter<"Obat"> | number
    createdAt?: DateTimeNullableFilter<"Obat"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Obat"> | Date | string | null
    resep?: ResepListRelationFilter
    stokObat?: StokObatListRelationFilter
  }, "id">

  export type ObatOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    stok?: SortOrder
    harga?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ObatCountOrderByAggregateInput
    _avg?: ObatAvgOrderByAggregateInput
    _max?: ObatMaxOrderByAggregateInput
    _min?: ObatMinOrderByAggregateInput
    _sum?: ObatSumOrderByAggregateInput
  }

  export type ObatScalarWhereWithAggregatesInput = {
    AND?: ObatScalarWhereWithAggregatesInput | ObatScalarWhereWithAggregatesInput[]
    OR?: ObatScalarWhereWithAggregatesInput[]
    NOT?: ObatScalarWhereWithAggregatesInput | ObatScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Obat"> | bigint | number
    nama?: StringWithAggregatesFilter<"Obat"> | string
    stok?: IntWithAggregatesFilter<"Obat"> | number
    harga?: IntWithAggregatesFilter<"Obat"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Obat"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Obat"> | Date | string | null
  }

  export type PasienWhereInput = {
    AND?: PasienWhereInput | PasienWhereInput[]
    OR?: PasienWhereInput[]
    NOT?: PasienWhereInput | PasienWhereInput[]
    id?: BigIntFilter<"Pasien"> | bigint | number
    nama?: StringFilter<"Pasien"> | string
    noReg?: StringFilter<"Pasien"> | string
    tglLahir?: DateTimeFilter<"Pasien"> | Date | string
    alamat?: StringFilter<"Pasien"> | string
    hp?: StringFilter<"Pasien"> | string
    jenisKelamin?: EnumJenisKelaminFilter<"Pasien"> | $Enums.JenisKelamin
    status?: EnumStatusPasienFilter<"Pasien"> | $Enums.StatusPasien
    createdAt?: DateTimeNullableFilter<"Pasien"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Pasien"> | Date | string | null
    kunjungan?: KunjunganListRelationFilter
  }

  export type PasienOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    noReg?: SortOrder
    tglLahir?: SortOrder
    alamat?: SortOrder
    hp?: SortOrder
    jenisKelamin?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    kunjungan?: KunjunganOrderByRelationAggregateInput
  }

  export type PasienWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    noReg?: string
    AND?: PasienWhereInput | PasienWhereInput[]
    OR?: PasienWhereInput[]
    NOT?: PasienWhereInput | PasienWhereInput[]
    nama?: StringFilter<"Pasien"> | string
    tglLahir?: DateTimeFilter<"Pasien"> | Date | string
    alamat?: StringFilter<"Pasien"> | string
    hp?: StringFilter<"Pasien"> | string
    jenisKelamin?: EnumJenisKelaminFilter<"Pasien"> | $Enums.JenisKelamin
    status?: EnumStatusPasienFilter<"Pasien"> | $Enums.StatusPasien
    createdAt?: DateTimeNullableFilter<"Pasien"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Pasien"> | Date | string | null
    kunjungan?: KunjunganListRelationFilter
  }, "id" | "noReg">

  export type PasienOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    noReg?: SortOrder
    tglLahir?: SortOrder
    alamat?: SortOrder
    hp?: SortOrder
    jenisKelamin?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PasienCountOrderByAggregateInput
    _avg?: PasienAvgOrderByAggregateInput
    _max?: PasienMaxOrderByAggregateInput
    _min?: PasienMinOrderByAggregateInput
    _sum?: PasienSumOrderByAggregateInput
  }

  export type PasienScalarWhereWithAggregatesInput = {
    AND?: PasienScalarWhereWithAggregatesInput | PasienScalarWhereWithAggregatesInput[]
    OR?: PasienScalarWhereWithAggregatesInput[]
    NOT?: PasienScalarWhereWithAggregatesInput | PasienScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Pasien"> | bigint | number
    nama?: StringWithAggregatesFilter<"Pasien"> | string
    noReg?: StringWithAggregatesFilter<"Pasien"> | string
    tglLahir?: DateTimeWithAggregatesFilter<"Pasien"> | Date | string
    alamat?: StringWithAggregatesFilter<"Pasien"> | string
    hp?: StringWithAggregatesFilter<"Pasien"> | string
    jenisKelamin?: EnumJenisKelaminWithAggregatesFilter<"Pasien"> | $Enums.JenisKelamin
    status?: EnumStatusPasienWithAggregatesFilter<"Pasien"> | $Enums.StatusPasien
    createdAt?: DateTimeNullableWithAggregatesFilter<"Pasien"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Pasien"> | Date | string | null
  }

  export type PembayaranWhereInput = {
    AND?: PembayaranWhereInput | PembayaranWhereInput[]
    OR?: PembayaranWhereInput[]
    NOT?: PembayaranWhereInput | PembayaranWhereInput[]
    id?: BigIntFilter<"Pembayaran"> | bigint | number
    idRm?: BigIntFilter<"Pembayaran"> | bigint | number
    tglBayar?: DateTimeFilter<"Pembayaran"> | Date | string
    totalBayar?: IntFilter<"Pembayaran"> | number
    metode?: StringFilter<"Pembayaran"> | string
    status?: EnumStatusPembayaranFilter<"Pembayaran"> | $Enums.StatusPembayaran
    createdAt?: DateTimeNullableFilter<"Pembayaran"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Pembayaran"> | Date | string | null
    rekamMedis?: XOR<RekamMedisScalarRelationFilter, RekamMedisWhereInput>
  }

  export type PembayaranOrderByWithRelationInput = {
    id?: SortOrder
    idRm?: SortOrder
    tglBayar?: SortOrder
    totalBayar?: SortOrder
    metode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    rekamMedis?: RekamMedisOrderByWithRelationInput
  }

  export type PembayaranWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PembayaranWhereInput | PembayaranWhereInput[]
    OR?: PembayaranWhereInput[]
    NOT?: PembayaranWhereInput | PembayaranWhereInput[]
    idRm?: BigIntFilter<"Pembayaran"> | bigint | number
    tglBayar?: DateTimeFilter<"Pembayaran"> | Date | string
    totalBayar?: IntFilter<"Pembayaran"> | number
    metode?: StringFilter<"Pembayaran"> | string
    status?: EnumStatusPembayaranFilter<"Pembayaran"> | $Enums.StatusPembayaran
    createdAt?: DateTimeNullableFilter<"Pembayaran"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Pembayaran"> | Date | string | null
    rekamMedis?: XOR<RekamMedisScalarRelationFilter, RekamMedisWhereInput>
  }, "id">

  export type PembayaranOrderByWithAggregationInput = {
    id?: SortOrder
    idRm?: SortOrder
    tglBayar?: SortOrder
    totalBayar?: SortOrder
    metode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PembayaranCountOrderByAggregateInput
    _avg?: PembayaranAvgOrderByAggregateInput
    _max?: PembayaranMaxOrderByAggregateInput
    _min?: PembayaranMinOrderByAggregateInput
    _sum?: PembayaranSumOrderByAggregateInput
  }

  export type PembayaranScalarWhereWithAggregatesInput = {
    AND?: PembayaranScalarWhereWithAggregatesInput | PembayaranScalarWhereWithAggregatesInput[]
    OR?: PembayaranScalarWhereWithAggregatesInput[]
    NOT?: PembayaranScalarWhereWithAggregatesInput | PembayaranScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Pembayaran"> | bigint | number
    idRm?: BigIntWithAggregatesFilter<"Pembayaran"> | bigint | number
    tglBayar?: DateTimeWithAggregatesFilter<"Pembayaran"> | Date | string
    totalBayar?: IntWithAggregatesFilter<"Pembayaran"> | number
    metode?: StringWithAggregatesFilter<"Pembayaran"> | string
    status?: EnumStatusPembayaranWithAggregatesFilter<"Pembayaran"> | $Enums.StatusPembayaran
    createdAt?: DateTimeNullableWithAggregatesFilter<"Pembayaran"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Pembayaran"> | Date | string | null
  }

  export type RekamMedisWhereInput = {
    AND?: RekamMedisWhereInput | RekamMedisWhereInput[]
    OR?: RekamMedisWhereInput[]
    NOT?: RekamMedisWhereInput | RekamMedisWhereInput[]
    id?: BigIntFilter<"RekamMedis"> | bigint | number
    idKunjungan?: BigIntFilter<"RekamMedis"> | bigint | number
    keluhan?: StringFilter<"RekamMedis"> | string
    diagnosa?: StringFilter<"RekamMedis"> | string
    tindakan?: StringFilter<"RekamMedis"> | string
    catatan?: StringFilter<"RekamMedis"> | string
    status?: EnumStatusRekamFilter<"RekamMedis"> | $Enums.StatusRekam
    createdAt?: DateTimeNullableFilter<"RekamMedis"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"RekamMedis"> | Date | string | null
    kunjungan?: XOR<KunjunganScalarRelationFilter, KunjunganWhereInput>
    resep?: ResepListRelationFilter
    pembayaran?: PembayaranListRelationFilter
  }

  export type RekamMedisOrderByWithRelationInput = {
    id?: SortOrder
    idKunjungan?: SortOrder
    keluhan?: SortOrder
    diagnosa?: SortOrder
    tindakan?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    kunjungan?: KunjunganOrderByWithRelationInput
    resep?: ResepOrderByRelationAggregateInput
    pembayaran?: PembayaranOrderByRelationAggregateInput
  }

  export type RekamMedisWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: RekamMedisWhereInput | RekamMedisWhereInput[]
    OR?: RekamMedisWhereInput[]
    NOT?: RekamMedisWhereInput | RekamMedisWhereInput[]
    idKunjungan?: BigIntFilter<"RekamMedis"> | bigint | number
    keluhan?: StringFilter<"RekamMedis"> | string
    diagnosa?: StringFilter<"RekamMedis"> | string
    tindakan?: StringFilter<"RekamMedis"> | string
    catatan?: StringFilter<"RekamMedis"> | string
    status?: EnumStatusRekamFilter<"RekamMedis"> | $Enums.StatusRekam
    createdAt?: DateTimeNullableFilter<"RekamMedis"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"RekamMedis"> | Date | string | null
    kunjungan?: XOR<KunjunganScalarRelationFilter, KunjunganWhereInput>
    resep?: ResepListRelationFilter
    pembayaran?: PembayaranListRelationFilter
  }, "id">

  export type RekamMedisOrderByWithAggregationInput = {
    id?: SortOrder
    idKunjungan?: SortOrder
    keluhan?: SortOrder
    diagnosa?: SortOrder
    tindakan?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: RekamMedisCountOrderByAggregateInput
    _avg?: RekamMedisAvgOrderByAggregateInput
    _max?: RekamMedisMaxOrderByAggregateInput
    _min?: RekamMedisMinOrderByAggregateInput
    _sum?: RekamMedisSumOrderByAggregateInput
  }

  export type RekamMedisScalarWhereWithAggregatesInput = {
    AND?: RekamMedisScalarWhereWithAggregatesInput | RekamMedisScalarWhereWithAggregatesInput[]
    OR?: RekamMedisScalarWhereWithAggregatesInput[]
    NOT?: RekamMedisScalarWhereWithAggregatesInput | RekamMedisScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"RekamMedis"> | bigint | number
    idKunjungan?: BigIntWithAggregatesFilter<"RekamMedis"> | bigint | number
    keluhan?: StringWithAggregatesFilter<"RekamMedis"> | string
    diagnosa?: StringWithAggregatesFilter<"RekamMedis"> | string
    tindakan?: StringWithAggregatesFilter<"RekamMedis"> | string
    catatan?: StringWithAggregatesFilter<"RekamMedis"> | string
    status?: EnumStatusRekamWithAggregatesFilter<"RekamMedis"> | $Enums.StatusRekam
    createdAt?: DateTimeNullableWithAggregatesFilter<"RekamMedis"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"RekamMedis"> | Date | string | null
  }

  export type ResepWhereInput = {
    AND?: ResepWhereInput | ResepWhereInput[]
    OR?: ResepWhereInput[]
    NOT?: ResepWhereInput | ResepWhereInput[]
    id?: BigIntFilter<"Resep"> | bigint | number
    idRm?: BigIntFilter<"Resep"> | bigint | number
    idObat?: BigIntFilter<"Resep"> | bigint | number
    jumlah?: IntFilter<"Resep"> | number
    aturanPakai?: StringFilter<"Resep"> | string
    catatan?: StringFilter<"Resep"> | string
    createdAt?: DateTimeNullableFilter<"Resep"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Resep"> | Date | string | null
    rekamMedis?: XOR<RekamMedisScalarRelationFilter, RekamMedisWhereInput>
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
  }

  export type ResepOrderByWithRelationInput = {
    id?: SortOrder
    idRm?: SortOrder
    idObat?: SortOrder
    jumlah?: SortOrder
    aturanPakai?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    rekamMedis?: RekamMedisOrderByWithRelationInput
    obat?: ObatOrderByWithRelationInput
  }

  export type ResepWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ResepWhereInput | ResepWhereInput[]
    OR?: ResepWhereInput[]
    NOT?: ResepWhereInput | ResepWhereInput[]
    idRm?: BigIntFilter<"Resep"> | bigint | number
    idObat?: BigIntFilter<"Resep"> | bigint | number
    jumlah?: IntFilter<"Resep"> | number
    aturanPakai?: StringFilter<"Resep"> | string
    catatan?: StringFilter<"Resep"> | string
    createdAt?: DateTimeNullableFilter<"Resep"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Resep"> | Date | string | null
    rekamMedis?: XOR<RekamMedisScalarRelationFilter, RekamMedisWhereInput>
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
  }, "id">

  export type ResepOrderByWithAggregationInput = {
    id?: SortOrder
    idRm?: SortOrder
    idObat?: SortOrder
    jumlah?: SortOrder
    aturanPakai?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ResepCountOrderByAggregateInput
    _avg?: ResepAvgOrderByAggregateInput
    _max?: ResepMaxOrderByAggregateInput
    _min?: ResepMinOrderByAggregateInput
    _sum?: ResepSumOrderByAggregateInput
  }

  export type ResepScalarWhereWithAggregatesInput = {
    AND?: ResepScalarWhereWithAggregatesInput | ResepScalarWhereWithAggregatesInput[]
    OR?: ResepScalarWhereWithAggregatesInput[]
    NOT?: ResepScalarWhereWithAggregatesInput | ResepScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Resep"> | bigint | number
    idRm?: BigIntWithAggregatesFilter<"Resep"> | bigint | number
    idObat?: BigIntWithAggregatesFilter<"Resep"> | bigint | number
    jumlah?: IntWithAggregatesFilter<"Resep"> | number
    aturanPakai?: StringWithAggregatesFilter<"Resep"> | string
    catatan?: StringWithAggregatesFilter<"Resep"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Resep"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Resep"> | Date | string | null
  }

  export type StokObatWhereInput = {
    AND?: StokObatWhereInput | StokObatWhereInput[]
    OR?: StokObatWhereInput[]
    NOT?: StokObatWhereInput | StokObatWhereInput[]
    id?: BigIntFilter<"StokObat"> | bigint | number
    idObat?: BigIntFilter<"StokObat"> | bigint | number
    tanggal?: DateTimeFilter<"StokObat"> | Date | string
    jumlah?: IntFilter<"StokObat"> | number
    transaksi?: EnumTransaksiObatFilter<"StokObat"> | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiFilter<"StokObat"> | $Enums.SumberTransaksi
    createdAt?: DateTimeNullableFilter<"StokObat"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"StokObat"> | Date | string | null
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
  }

  export type StokObatOrderByWithRelationInput = {
    id?: SortOrder
    idObat?: SortOrder
    tanggal?: SortOrder
    jumlah?: SortOrder
    transaksi?: SortOrder
    sumberTransaksi?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    obat?: ObatOrderByWithRelationInput
  }

  export type StokObatWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: StokObatWhereInput | StokObatWhereInput[]
    OR?: StokObatWhereInput[]
    NOT?: StokObatWhereInput | StokObatWhereInput[]
    idObat?: BigIntFilter<"StokObat"> | bigint | number
    tanggal?: DateTimeFilter<"StokObat"> | Date | string
    jumlah?: IntFilter<"StokObat"> | number
    transaksi?: EnumTransaksiObatFilter<"StokObat"> | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiFilter<"StokObat"> | $Enums.SumberTransaksi
    createdAt?: DateTimeNullableFilter<"StokObat"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"StokObat"> | Date | string | null
    obat?: XOR<ObatScalarRelationFilter, ObatWhereInput>
  }, "id">

  export type StokObatOrderByWithAggregationInput = {
    id?: SortOrder
    idObat?: SortOrder
    tanggal?: SortOrder
    jumlah?: SortOrder
    transaksi?: SortOrder
    sumberTransaksi?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: StokObatCountOrderByAggregateInput
    _avg?: StokObatAvgOrderByAggregateInput
    _max?: StokObatMaxOrderByAggregateInput
    _min?: StokObatMinOrderByAggregateInput
    _sum?: StokObatSumOrderByAggregateInput
  }

  export type StokObatScalarWhereWithAggregatesInput = {
    AND?: StokObatScalarWhereWithAggregatesInput | StokObatScalarWhereWithAggregatesInput[]
    OR?: StokObatScalarWhereWithAggregatesInput[]
    NOT?: StokObatScalarWhereWithAggregatesInput | StokObatScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"StokObat"> | bigint | number
    idObat?: BigIntWithAggregatesFilter<"StokObat"> | bigint | number
    tanggal?: DateTimeWithAggregatesFilter<"StokObat"> | Date | string
    jumlah?: IntWithAggregatesFilter<"StokObat"> | number
    transaksi?: EnumTransaksiObatWithAggregatesFilter<"StokObat"> | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiWithAggregatesFilter<"StokObat"> | $Enums.SumberTransaksi
    createdAt?: DateTimeNullableWithAggregatesFilter<"StokObat"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"StokObat"> | Date | string | null
  }

  export type AdminCreateInput = {
    id: bigint | number
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi?: EdukasiCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id: bigint | number
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi?: EdukasiUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id: bigint | number
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AdminUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EdukasiCreateInput = {
    id: bigint | number
    judul: string
    isi: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    admin: AdminCreateNestedOneWithoutEdukasiInput
    layananEdukasi?: LayananEdukasiCreateNestedManyWithoutEdukasiInput
    layanan?: LayananCreateNestedOneWithoutEdukasiInput
  }

  export type EdukasiUncheckedCreateInput = {
    id: bigint | number
    idAdmin: bigint | number
    judul: string
    isi: string
    layananId?: bigint | number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    layananEdukasi?: LayananEdukasiUncheckedCreateNestedManyWithoutEdukasiInput
  }

  export type EdukasiUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneRequiredWithoutEdukasiNestedInput
    layananEdukasi?: LayananEdukasiUpdateManyWithoutEdukasiNestedInput
    layanan?: LayananUpdateOneWithoutEdukasiNestedInput
  }

  export type EdukasiUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idAdmin?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    layananId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    layananEdukasi?: LayananEdukasiUncheckedUpdateManyWithoutEdukasiNestedInput
  }

  export type EdukasiCreateManyInput = {
    id: bigint | number
    idAdmin: bigint | number
    judul: string
    isi: string
    layananId?: bigint | number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type EdukasiUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EdukasiUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idAdmin?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    layananId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JadwalImunisasiCreateInput = {
    id: bigint | number
    tanggal: Date | string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    layanan: LayananCreateNestedOneWithoutJadwalImunisasiInput
  }

  export type JadwalImunisasiUncheckedCreateInput = {
    id: bigint | number
    idLayanan: bigint | number
    tanggal: Date | string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type JadwalImunisasiUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    layanan?: LayananUpdateOneRequiredWithoutJadwalImunisasiNestedInput
  }

  export type JadwalImunisasiUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JadwalImunisasiCreateManyInput = {
    id: bigint | number
    idLayanan: bigint | number
    tanggal: Date | string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type JadwalImunisasiUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JadwalImunisasiUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KunjunganCreateInput = {
    id: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    pasien: PasienCreateNestedOneWithoutKunjunganInput
    layanan: LayananCreateNestedOneWithoutKunjunganInput
    rekamMedis?: RekamMedisCreateNestedManyWithoutKunjunganInput
  }

  export type KunjunganUncheckedCreateInput = {
    id: bigint | number
    idPasien: bigint | number
    idLayanan: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    rekamMedis?: RekamMedisUncheckedCreateNestedManyWithoutKunjunganInput
  }

  export type KunjunganUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pasien?: PasienUpdateOneRequiredWithoutKunjunganNestedInput
    layanan?: LayananUpdateOneRequiredWithoutKunjunganNestedInput
    rekamMedis?: RekamMedisUpdateManyWithoutKunjunganNestedInput
  }

  export type KunjunganUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idPasien?: BigIntFieldUpdateOperationsInput | bigint | number
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rekamMedis?: RekamMedisUncheckedUpdateManyWithoutKunjunganNestedInput
  }

  export type KunjunganCreateManyInput = {
    id: bigint | number
    idPasien: bigint | number
    idLayanan: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type KunjunganUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KunjunganUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idPasien?: BigIntFieldUpdateOperationsInput | bigint | number
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananCreateInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi?: EdukasiCreateNestedManyWithoutLayananInput
    layananEdukasi?: LayananEdukasiCreateNestedManyWithoutLayananInput
    jadwalImunisasi?: JadwalImunisasiCreateNestedManyWithoutLayananInput
    kunjungan?: KunjunganCreateNestedManyWithoutLayananInput
  }

  export type LayananUncheckedCreateInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi?: EdukasiUncheckedCreateNestedManyWithoutLayananInput
    layananEdukasi?: LayananEdukasiUncheckedCreateNestedManyWithoutLayananInput
    jadwalImunisasi?: JadwalImunisasiUncheckedCreateNestedManyWithoutLayananInput
    kunjungan?: KunjunganUncheckedCreateNestedManyWithoutLayananInput
  }

  export type LayananUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUpdateManyWithoutLayananNestedInput
    layananEdukasi?: LayananEdukasiUpdateManyWithoutLayananNestedInput
    jadwalImunisasi?: JadwalImunisasiUpdateManyWithoutLayananNestedInput
    kunjungan?: KunjunganUpdateManyWithoutLayananNestedInput
  }

  export type LayananUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUncheckedUpdateManyWithoutLayananNestedInput
    layananEdukasi?: LayananEdukasiUncheckedUpdateManyWithoutLayananNestedInput
    jadwalImunisasi?: JadwalImunisasiUncheckedUpdateManyWithoutLayananNestedInput
    kunjungan?: KunjunganUncheckedUpdateManyWithoutLayananNestedInput
  }

  export type LayananCreateManyInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LayananUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananEdukasiCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi: EdukasiCreateNestedOneWithoutLayananEdukasiInput
    layanan: LayananCreateNestedOneWithoutLayananEdukasiInput
  }

  export type LayananEdukasiUncheckedCreateInput = {
    idEdukasi: bigint | number
    idLayanan: bigint | number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LayananEdukasiUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUpdateOneRequiredWithoutLayananEdukasiNestedInput
    layanan?: LayananUpdateOneRequiredWithoutLayananEdukasiNestedInput
  }

  export type LayananEdukasiUncheckedUpdateInput = {
    idEdukasi?: BigIntFieldUpdateOperationsInput | bigint | number
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananEdukasiCreateManyInput = {
    idEdukasi: bigint | number
    idLayanan: bigint | number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LayananEdukasiUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananEdukasiUncheckedUpdateManyInput = {
    idEdukasi?: BigIntFieldUpdateOperationsInput | bigint | number
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObatCreateInput = {
    id: bigint | number
    nama: string
    stok: number
    harga: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    resep?: ResepCreateNestedManyWithoutObatInput
    stokObat?: StokObatCreateNestedManyWithoutObatInput
  }

  export type ObatUncheckedCreateInput = {
    id: bigint | number
    nama: string
    stok: number
    harga: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    resep?: ResepUncheckedCreateNestedManyWithoutObatInput
    stokObat?: StokObatUncheckedCreateNestedManyWithoutObatInput
  }

  export type ObatUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resep?: ResepUpdateManyWithoutObatNestedInput
    stokObat?: StokObatUpdateManyWithoutObatNestedInput
  }

  export type ObatUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resep?: ResepUncheckedUpdateManyWithoutObatNestedInput
    stokObat?: StokObatUncheckedUpdateManyWithoutObatNestedInput
  }

  export type ObatCreateManyInput = {
    id: bigint | number
    nama: string
    stok: number
    harga: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ObatUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ObatUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasienCreateInput = {
    id: bigint | number
    nama: string
    noReg: string
    tglLahir: Date | string
    alamat: string
    hp: string
    jenisKelamin: $Enums.JenisKelamin
    status: $Enums.StatusPasien
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    kunjungan?: KunjunganCreateNestedManyWithoutPasienInput
  }

  export type PasienUncheckedCreateInput = {
    id: bigint | number
    nama: string
    noReg: string
    tglLahir: Date | string
    alamat: string
    hp: string
    jenisKelamin: $Enums.JenisKelamin
    status: $Enums.StatusPasien
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    kunjungan?: KunjunganUncheckedCreateNestedManyWithoutPasienInput
  }

  export type PasienUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    noReg?: StringFieldUpdateOperationsInput | string
    tglLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status?: EnumStatusPasienFieldUpdateOperationsInput | $Enums.StatusPasien
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kunjungan?: KunjunganUpdateManyWithoutPasienNestedInput
  }

  export type PasienUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    noReg?: StringFieldUpdateOperationsInput | string
    tglLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status?: EnumStatusPasienFieldUpdateOperationsInput | $Enums.StatusPasien
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kunjungan?: KunjunganUncheckedUpdateManyWithoutPasienNestedInput
  }

  export type PasienCreateManyInput = {
    id: bigint | number
    nama: string
    noReg: string
    tglLahir: Date | string
    alamat: string
    hp: string
    jenisKelamin: $Enums.JenisKelamin
    status: $Enums.StatusPasien
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type PasienUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    noReg?: StringFieldUpdateOperationsInput | string
    tglLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status?: EnumStatusPasienFieldUpdateOperationsInput | $Enums.StatusPasien
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasienUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    noReg?: StringFieldUpdateOperationsInput | string
    tglLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status?: EnumStatusPasienFieldUpdateOperationsInput | $Enums.StatusPasien
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PembayaranCreateInput = {
    id: bigint | number
    tglBayar: Date | string
    totalBayar: number
    metode: string
    status: $Enums.StatusPembayaran
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    rekamMedis: RekamMedisCreateNestedOneWithoutPembayaranInput
  }

  export type PembayaranUncheckedCreateInput = {
    id: bigint | number
    idRm: bigint | number
    tglBayar: Date | string
    totalBayar: number
    metode: string
    status: $Enums.StatusPembayaran
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type PembayaranUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tglBayar?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBayar?: IntFieldUpdateOperationsInput | number
    metode?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rekamMedis?: RekamMedisUpdateOneRequiredWithoutPembayaranNestedInput
  }

  export type PembayaranUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idRm?: BigIntFieldUpdateOperationsInput | bigint | number
    tglBayar?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBayar?: IntFieldUpdateOperationsInput | number
    metode?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PembayaranCreateManyInput = {
    id: bigint | number
    idRm: bigint | number
    tglBayar: Date | string
    totalBayar: number
    metode: string
    status: $Enums.StatusPembayaran
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type PembayaranUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tglBayar?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBayar?: IntFieldUpdateOperationsInput | number
    metode?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PembayaranUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idRm?: BigIntFieldUpdateOperationsInput | bigint | number
    tglBayar?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBayar?: IntFieldUpdateOperationsInput | number
    metode?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RekamMedisCreateInput = {
    id: bigint | number
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    kunjungan: KunjunganCreateNestedOneWithoutRekamMedisInput
    resep?: ResepCreateNestedManyWithoutRekamMedisInput
    pembayaran?: PembayaranCreateNestedManyWithoutRekamMedisInput
  }

  export type RekamMedisUncheckedCreateInput = {
    id: bigint | number
    idKunjungan: bigint | number
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    resep?: ResepUncheckedCreateNestedManyWithoutRekamMedisInput
    pembayaran?: PembayaranUncheckedCreateNestedManyWithoutRekamMedisInput
  }

  export type RekamMedisUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kunjungan?: KunjunganUpdateOneRequiredWithoutRekamMedisNestedInput
    resep?: ResepUpdateManyWithoutRekamMedisNestedInput
    pembayaran?: PembayaranUpdateManyWithoutRekamMedisNestedInput
  }

  export type RekamMedisUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idKunjungan?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resep?: ResepUncheckedUpdateManyWithoutRekamMedisNestedInput
    pembayaran?: PembayaranUncheckedUpdateManyWithoutRekamMedisNestedInput
  }

  export type RekamMedisCreateManyInput = {
    id: bigint | number
    idKunjungan: bigint | number
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type RekamMedisUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RekamMedisUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idKunjungan?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResepCreateInput = {
    id: bigint | number
    jumlah: number
    aturanPakai: string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    rekamMedis: RekamMedisCreateNestedOneWithoutResepInput
    obat: ObatCreateNestedOneWithoutResepInput
  }

  export type ResepUncheckedCreateInput = {
    id: bigint | number
    idRm: bigint | number
    idObat: bigint | number
    jumlah: number
    aturanPakai: string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ResepUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    jumlah?: IntFieldUpdateOperationsInput | number
    aturanPakai?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rekamMedis?: RekamMedisUpdateOneRequiredWithoutResepNestedInput
    obat?: ObatUpdateOneRequiredWithoutResepNestedInput
  }

  export type ResepUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idRm?: BigIntFieldUpdateOperationsInput | bigint | number
    idObat?: BigIntFieldUpdateOperationsInput | bigint | number
    jumlah?: IntFieldUpdateOperationsInput | number
    aturanPakai?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResepCreateManyInput = {
    id: bigint | number
    idRm: bigint | number
    idObat: bigint | number
    jumlah: number
    aturanPakai: string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ResepUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    jumlah?: IntFieldUpdateOperationsInput | number
    aturanPakai?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResepUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idRm?: BigIntFieldUpdateOperationsInput | bigint | number
    idObat?: BigIntFieldUpdateOperationsInput | bigint | number
    jumlah?: IntFieldUpdateOperationsInput | number
    aturanPakai?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StokObatCreateInput = {
    id: bigint | number
    tanggal: Date | string
    jumlah: number
    transaksi: $Enums.TransaksiObat
    sumberTransaksi: $Enums.SumberTransaksi
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    obat: ObatCreateNestedOneWithoutStokObatInput
  }

  export type StokObatUncheckedCreateInput = {
    id: bigint | number
    idObat: bigint | number
    tanggal: Date | string
    jumlah: number
    transaksi: $Enums.TransaksiObat
    sumberTransaksi: $Enums.SumberTransaksi
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StokObatUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    transaksi?: EnumTransaksiObatFieldUpdateOperationsInput | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiFieldUpdateOperationsInput | $Enums.SumberTransaksi
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obat?: ObatUpdateOneRequiredWithoutStokObatNestedInput
  }

  export type StokObatUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idObat?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    transaksi?: EnumTransaksiObatFieldUpdateOperationsInput | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiFieldUpdateOperationsInput | $Enums.SumberTransaksi
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StokObatCreateManyInput = {
    id: bigint | number
    idObat: bigint | number
    tanggal: Date | string
    jumlah: number
    transaksi: $Enums.TransaksiObat
    sumberTransaksi: $Enums.SumberTransaksi
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StokObatUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    transaksi?: EnumTransaksiObatFieldUpdateOperationsInput | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiFieldUpdateOperationsInput | $Enums.SumberTransaksi
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StokObatUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idObat?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    transaksi?: EnumTransaksiObatFieldUpdateOperationsInput | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiFieldUpdateOperationsInput | $Enums.SumberTransaksi
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type EdukasiListRelationFilter = {
    every?: EdukasiWhereInput
    some?: EdukasiWhereInput
    none?: EdukasiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EdukasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type LayananEdukasiListRelationFilter = {
    every?: LayananEdukasiWhereInput
    some?: LayananEdukasiWhereInput
    none?: LayananEdukasiWhereInput
  }

  export type LayananNullableScalarRelationFilter = {
    is?: LayananWhereInput | null
    isNot?: LayananWhereInput | null
  }

  export type LayananEdukasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EdukasiCountOrderByAggregateInput = {
    id?: SortOrder
    idAdmin?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    layananId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EdukasiAvgOrderByAggregateInput = {
    id?: SortOrder
    idAdmin?: SortOrder
    layananId?: SortOrder
  }

  export type EdukasiMaxOrderByAggregateInput = {
    id?: SortOrder
    idAdmin?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    layananId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EdukasiMinOrderByAggregateInput = {
    id?: SortOrder
    idAdmin?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    layananId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EdukasiSumOrderByAggregateInput = {
    id?: SortOrder
    idAdmin?: SortOrder
    layananId?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type LayananScalarRelationFilter = {
    is?: LayananWhereInput
    isNot?: LayananWhereInput
  }

  export type JadwalImunisasiCountOrderByAggregateInput = {
    id?: SortOrder
    idLayanan?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JadwalImunisasiAvgOrderByAggregateInput = {
    id?: SortOrder
    idLayanan?: SortOrder
  }

  export type JadwalImunisasiMaxOrderByAggregateInput = {
    id?: SortOrder
    idLayanan?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JadwalImunisasiMinOrderByAggregateInput = {
    id?: SortOrder
    idLayanan?: SortOrder
    tanggal?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JadwalImunisasiSumOrderByAggregateInput = {
    id?: SortOrder
    idLayanan?: SortOrder
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

  export type EnumStatusKunjunganFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKunjungan | EnumStatusKunjunganFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKunjungan[] | ListEnumStatusKunjunganFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKunjungan[] | ListEnumStatusKunjunganFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKunjunganFilter<$PrismaModel> | $Enums.StatusKunjungan
  }

  export type PasienScalarRelationFilter = {
    is?: PasienWhereInput
    isNot?: PasienWhereInput
  }

  export type RekamMedisListRelationFilter = {
    every?: RekamMedisWhereInput
    some?: RekamMedisWhereInput
    none?: RekamMedisWhereInput
  }

  export type RekamMedisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KunjunganCountOrderByAggregateInput = {
    id?: SortOrder
    idPasien?: SortOrder
    idLayanan?: SortOrder
    tglKunjungan?: SortOrder
    waktuKunjungan?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KunjunganAvgOrderByAggregateInput = {
    id?: SortOrder
    idPasien?: SortOrder
    idLayanan?: SortOrder
  }

  export type KunjunganMaxOrderByAggregateInput = {
    id?: SortOrder
    idPasien?: SortOrder
    idLayanan?: SortOrder
    tglKunjungan?: SortOrder
    waktuKunjungan?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KunjunganMinOrderByAggregateInput = {
    id?: SortOrder
    idPasien?: SortOrder
    idLayanan?: SortOrder
    tglKunjungan?: SortOrder
    waktuKunjungan?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KunjunganSumOrderByAggregateInput = {
    id?: SortOrder
    idPasien?: SortOrder
    idLayanan?: SortOrder
  }

  export type EnumStatusKunjunganWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKunjungan | EnumStatusKunjunganFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKunjungan[] | ListEnumStatusKunjunganFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKunjungan[] | ListEnumStatusKunjunganFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKunjunganWithAggregatesFilter<$PrismaModel> | $Enums.StatusKunjungan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKunjunganFilter<$PrismaModel>
    _max?: NestedEnumStatusKunjunganFilter<$PrismaModel>
  }

  export type JadwalImunisasiListRelationFilter = {
    every?: JadwalImunisasiWhereInput
    some?: JadwalImunisasiWhereInput
    none?: JadwalImunisasiWhereInput
  }

  export type KunjunganListRelationFilter = {
    every?: KunjunganWhereInput
    some?: KunjunganWhereInput
    none?: KunjunganWhereInput
  }

  export type JadwalImunisasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KunjunganOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LayananCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayananAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LayananMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayananMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayananSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EdukasiScalarRelationFilter = {
    is?: EdukasiWhereInput
    isNot?: EdukasiWhereInput
  }

  export type LayananEdukasiIdEdukasiIdLayananCompoundUniqueInput = {
    idEdukasi: bigint | number
    idLayanan: bigint | number
  }

  export type LayananEdukasiCountOrderByAggregateInput = {
    idEdukasi?: SortOrder
    idLayanan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayananEdukasiAvgOrderByAggregateInput = {
    idEdukasi?: SortOrder
    idLayanan?: SortOrder
  }

  export type LayananEdukasiMaxOrderByAggregateInput = {
    idEdukasi?: SortOrder
    idLayanan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayananEdukasiMinOrderByAggregateInput = {
    idEdukasi?: SortOrder
    idLayanan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LayananEdukasiSumOrderByAggregateInput = {
    idEdukasi?: SortOrder
    idLayanan?: SortOrder
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

  export type ResepListRelationFilter = {
    every?: ResepWhereInput
    some?: ResepWhereInput
    none?: ResepWhereInput
  }

  export type StokObatListRelationFilter = {
    every?: StokObatWhereInput
    some?: StokObatWhereInput
    none?: StokObatWhereInput
  }

  export type ResepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StokObatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ObatCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    stok?: SortOrder
    harga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObatAvgOrderByAggregateInput = {
    id?: SortOrder
    stok?: SortOrder
    harga?: SortOrder
  }

  export type ObatMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    stok?: SortOrder
    harga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObatMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    stok?: SortOrder
    harga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ObatSumOrderByAggregateInput = {
    id?: SortOrder
    stok?: SortOrder
    harga?: SortOrder
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

  export type EnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type EnumStatusPasienFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPasien | EnumStatusPasienFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPasien[] | ListEnumStatusPasienFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPasien[] | ListEnumStatusPasienFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPasienFilter<$PrismaModel> | $Enums.StatusPasien
  }

  export type PasienCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    noReg?: SortOrder
    tglLahir?: SortOrder
    alamat?: SortOrder
    hp?: SortOrder
    jenisKelamin?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasienAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PasienMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    noReg?: SortOrder
    tglLahir?: SortOrder
    alamat?: SortOrder
    hp?: SortOrder
    jenisKelamin?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasienMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    noReg?: SortOrder
    tglLahir?: SortOrder
    alamat?: SortOrder
    hp?: SortOrder
    jenisKelamin?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PasienSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type EnumStatusPasienWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPasien | EnumStatusPasienFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPasien[] | ListEnumStatusPasienFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPasien[] | ListEnumStatusPasienFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPasienWithAggregatesFilter<$PrismaModel> | $Enums.StatusPasien
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPasienFilter<$PrismaModel>
    _max?: NestedEnumStatusPasienFilter<$PrismaModel>
  }

  export type EnumStatusPembayaranFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembayaran | EnumStatusPembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembayaranFilter<$PrismaModel> | $Enums.StatusPembayaran
  }

  export type RekamMedisScalarRelationFilter = {
    is?: RekamMedisWhereInput
    isNot?: RekamMedisWhereInput
  }

  export type PembayaranCountOrderByAggregateInput = {
    id?: SortOrder
    idRm?: SortOrder
    tglBayar?: SortOrder
    totalBayar?: SortOrder
    metode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PembayaranAvgOrderByAggregateInput = {
    id?: SortOrder
    idRm?: SortOrder
    totalBayar?: SortOrder
  }

  export type PembayaranMaxOrderByAggregateInput = {
    id?: SortOrder
    idRm?: SortOrder
    tglBayar?: SortOrder
    totalBayar?: SortOrder
    metode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PembayaranMinOrderByAggregateInput = {
    id?: SortOrder
    idRm?: SortOrder
    tglBayar?: SortOrder
    totalBayar?: SortOrder
    metode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PembayaranSumOrderByAggregateInput = {
    id?: SortOrder
    idRm?: SortOrder
    totalBayar?: SortOrder
  }

  export type EnumStatusPembayaranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembayaran | EnumStatusPembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembayaranWithAggregatesFilter<$PrismaModel> | $Enums.StatusPembayaran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPembayaranFilter<$PrismaModel>
    _max?: NestedEnumStatusPembayaranFilter<$PrismaModel>
  }

  export type EnumStatusRekamFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRekam | EnumStatusRekamFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRekam[] | ListEnumStatusRekamFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRekam[] | ListEnumStatusRekamFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRekamFilter<$PrismaModel> | $Enums.StatusRekam
  }

  export type KunjunganScalarRelationFilter = {
    is?: KunjunganWhereInput
    isNot?: KunjunganWhereInput
  }

  export type PembayaranListRelationFilter = {
    every?: PembayaranWhereInput
    some?: PembayaranWhereInput
    none?: PembayaranWhereInput
  }

  export type PembayaranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RekamMedisCountOrderByAggregateInput = {
    id?: SortOrder
    idKunjungan?: SortOrder
    keluhan?: SortOrder
    diagnosa?: SortOrder
    tindakan?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RekamMedisAvgOrderByAggregateInput = {
    id?: SortOrder
    idKunjungan?: SortOrder
  }

  export type RekamMedisMaxOrderByAggregateInput = {
    id?: SortOrder
    idKunjungan?: SortOrder
    keluhan?: SortOrder
    diagnosa?: SortOrder
    tindakan?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RekamMedisMinOrderByAggregateInput = {
    id?: SortOrder
    idKunjungan?: SortOrder
    keluhan?: SortOrder
    diagnosa?: SortOrder
    tindakan?: SortOrder
    catatan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RekamMedisSumOrderByAggregateInput = {
    id?: SortOrder
    idKunjungan?: SortOrder
  }

  export type EnumStatusRekamWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRekam | EnumStatusRekamFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRekam[] | ListEnumStatusRekamFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRekam[] | ListEnumStatusRekamFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRekamWithAggregatesFilter<$PrismaModel> | $Enums.StatusRekam
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRekamFilter<$PrismaModel>
    _max?: NestedEnumStatusRekamFilter<$PrismaModel>
  }

  export type ObatScalarRelationFilter = {
    is?: ObatWhereInput
    isNot?: ObatWhereInput
  }

  export type ResepCountOrderByAggregateInput = {
    id?: SortOrder
    idRm?: SortOrder
    idObat?: SortOrder
    jumlah?: SortOrder
    aturanPakai?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResepAvgOrderByAggregateInput = {
    id?: SortOrder
    idRm?: SortOrder
    idObat?: SortOrder
    jumlah?: SortOrder
  }

  export type ResepMaxOrderByAggregateInput = {
    id?: SortOrder
    idRm?: SortOrder
    idObat?: SortOrder
    jumlah?: SortOrder
    aturanPakai?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResepMinOrderByAggregateInput = {
    id?: SortOrder
    idRm?: SortOrder
    idObat?: SortOrder
    jumlah?: SortOrder
    aturanPakai?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ResepSumOrderByAggregateInput = {
    id?: SortOrder
    idRm?: SortOrder
    idObat?: SortOrder
    jumlah?: SortOrder
  }

  export type EnumTransaksiObatFilter<$PrismaModel = never> = {
    equals?: $Enums.TransaksiObat | EnumTransaksiObatFieldRefInput<$PrismaModel>
    in?: $Enums.TransaksiObat[] | ListEnumTransaksiObatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransaksiObat[] | ListEnumTransaksiObatFieldRefInput<$PrismaModel>
    not?: NestedEnumTransaksiObatFilter<$PrismaModel> | $Enums.TransaksiObat
  }

  export type EnumSumberTransaksiFilter<$PrismaModel = never> = {
    equals?: $Enums.SumberTransaksi | EnumSumberTransaksiFieldRefInput<$PrismaModel>
    in?: $Enums.SumberTransaksi[] | ListEnumSumberTransaksiFieldRefInput<$PrismaModel>
    notIn?: $Enums.SumberTransaksi[] | ListEnumSumberTransaksiFieldRefInput<$PrismaModel>
    not?: NestedEnumSumberTransaksiFilter<$PrismaModel> | $Enums.SumberTransaksi
  }

  export type StokObatCountOrderByAggregateInput = {
    id?: SortOrder
    idObat?: SortOrder
    tanggal?: SortOrder
    jumlah?: SortOrder
    transaksi?: SortOrder
    sumberTransaksi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StokObatAvgOrderByAggregateInput = {
    id?: SortOrder
    idObat?: SortOrder
    jumlah?: SortOrder
  }

  export type StokObatMaxOrderByAggregateInput = {
    id?: SortOrder
    idObat?: SortOrder
    tanggal?: SortOrder
    jumlah?: SortOrder
    transaksi?: SortOrder
    sumberTransaksi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StokObatMinOrderByAggregateInput = {
    id?: SortOrder
    idObat?: SortOrder
    tanggal?: SortOrder
    jumlah?: SortOrder
    transaksi?: SortOrder
    sumberTransaksi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StokObatSumOrderByAggregateInput = {
    id?: SortOrder
    idObat?: SortOrder
    jumlah?: SortOrder
  }

  export type EnumTransaksiObatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransaksiObat | EnumTransaksiObatFieldRefInput<$PrismaModel>
    in?: $Enums.TransaksiObat[] | ListEnumTransaksiObatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransaksiObat[] | ListEnumTransaksiObatFieldRefInput<$PrismaModel>
    not?: NestedEnumTransaksiObatWithAggregatesFilter<$PrismaModel> | $Enums.TransaksiObat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransaksiObatFilter<$PrismaModel>
    _max?: NestedEnumTransaksiObatFilter<$PrismaModel>
  }

  export type EnumSumberTransaksiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SumberTransaksi | EnumSumberTransaksiFieldRefInput<$PrismaModel>
    in?: $Enums.SumberTransaksi[] | ListEnumSumberTransaksiFieldRefInput<$PrismaModel>
    notIn?: $Enums.SumberTransaksi[] | ListEnumSumberTransaksiFieldRefInput<$PrismaModel>
    not?: NestedEnumSumberTransaksiWithAggregatesFilter<$PrismaModel> | $Enums.SumberTransaksi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSumberTransaksiFilter<$PrismaModel>
    _max?: NestedEnumSumberTransaksiFilter<$PrismaModel>
  }

  export type EdukasiCreateNestedManyWithoutAdminInput = {
    create?: XOR<EdukasiCreateWithoutAdminInput, EdukasiUncheckedCreateWithoutAdminInput> | EdukasiCreateWithoutAdminInput[] | EdukasiUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EdukasiCreateOrConnectWithoutAdminInput | EdukasiCreateOrConnectWithoutAdminInput[]
    createMany?: EdukasiCreateManyAdminInputEnvelope
    connect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
  }

  export type EdukasiUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<EdukasiCreateWithoutAdminInput, EdukasiUncheckedCreateWithoutAdminInput> | EdukasiCreateWithoutAdminInput[] | EdukasiUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EdukasiCreateOrConnectWithoutAdminInput | EdukasiCreateOrConnectWithoutAdminInput[]
    createMany?: EdukasiCreateManyAdminInputEnvelope
    connect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EdukasiUpdateManyWithoutAdminNestedInput = {
    create?: XOR<EdukasiCreateWithoutAdminInput, EdukasiUncheckedCreateWithoutAdminInput> | EdukasiCreateWithoutAdminInput[] | EdukasiUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EdukasiCreateOrConnectWithoutAdminInput | EdukasiCreateOrConnectWithoutAdminInput[]
    upsert?: EdukasiUpsertWithWhereUniqueWithoutAdminInput | EdukasiUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: EdukasiCreateManyAdminInputEnvelope
    set?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    disconnect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    delete?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    connect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    update?: EdukasiUpdateWithWhereUniqueWithoutAdminInput | EdukasiUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: EdukasiUpdateManyWithWhereWithoutAdminInput | EdukasiUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: EdukasiScalarWhereInput | EdukasiScalarWhereInput[]
  }

  export type EdukasiUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<EdukasiCreateWithoutAdminInput, EdukasiUncheckedCreateWithoutAdminInput> | EdukasiCreateWithoutAdminInput[] | EdukasiUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EdukasiCreateOrConnectWithoutAdminInput | EdukasiCreateOrConnectWithoutAdminInput[]
    upsert?: EdukasiUpsertWithWhereUniqueWithoutAdminInput | EdukasiUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: EdukasiCreateManyAdminInputEnvelope
    set?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    disconnect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    delete?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    connect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    update?: EdukasiUpdateWithWhereUniqueWithoutAdminInput | EdukasiUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: EdukasiUpdateManyWithWhereWithoutAdminInput | EdukasiUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: EdukasiScalarWhereInput | EdukasiScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutEdukasiInput = {
    create?: XOR<AdminCreateWithoutEdukasiInput, AdminUncheckedCreateWithoutEdukasiInput>
    connectOrCreate?: AdminCreateOrConnectWithoutEdukasiInput
    connect?: AdminWhereUniqueInput
  }

  export type LayananEdukasiCreateNestedManyWithoutEdukasiInput = {
    create?: XOR<LayananEdukasiCreateWithoutEdukasiInput, LayananEdukasiUncheckedCreateWithoutEdukasiInput> | LayananEdukasiCreateWithoutEdukasiInput[] | LayananEdukasiUncheckedCreateWithoutEdukasiInput[]
    connectOrCreate?: LayananEdukasiCreateOrConnectWithoutEdukasiInput | LayananEdukasiCreateOrConnectWithoutEdukasiInput[]
    createMany?: LayananEdukasiCreateManyEdukasiInputEnvelope
    connect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
  }

  export type LayananCreateNestedOneWithoutEdukasiInput = {
    create?: XOR<LayananCreateWithoutEdukasiInput, LayananUncheckedCreateWithoutEdukasiInput>
    connectOrCreate?: LayananCreateOrConnectWithoutEdukasiInput
    connect?: LayananWhereUniqueInput
  }

  export type LayananEdukasiUncheckedCreateNestedManyWithoutEdukasiInput = {
    create?: XOR<LayananEdukasiCreateWithoutEdukasiInput, LayananEdukasiUncheckedCreateWithoutEdukasiInput> | LayananEdukasiCreateWithoutEdukasiInput[] | LayananEdukasiUncheckedCreateWithoutEdukasiInput[]
    connectOrCreate?: LayananEdukasiCreateOrConnectWithoutEdukasiInput | LayananEdukasiCreateOrConnectWithoutEdukasiInput[]
    createMany?: LayananEdukasiCreateManyEdukasiInputEnvelope
    connect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutEdukasiNestedInput = {
    create?: XOR<AdminCreateWithoutEdukasiInput, AdminUncheckedCreateWithoutEdukasiInput>
    connectOrCreate?: AdminCreateOrConnectWithoutEdukasiInput
    upsert?: AdminUpsertWithoutEdukasiInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutEdukasiInput, AdminUpdateWithoutEdukasiInput>, AdminUncheckedUpdateWithoutEdukasiInput>
  }

  export type LayananEdukasiUpdateManyWithoutEdukasiNestedInput = {
    create?: XOR<LayananEdukasiCreateWithoutEdukasiInput, LayananEdukasiUncheckedCreateWithoutEdukasiInput> | LayananEdukasiCreateWithoutEdukasiInput[] | LayananEdukasiUncheckedCreateWithoutEdukasiInput[]
    connectOrCreate?: LayananEdukasiCreateOrConnectWithoutEdukasiInput | LayananEdukasiCreateOrConnectWithoutEdukasiInput[]
    upsert?: LayananEdukasiUpsertWithWhereUniqueWithoutEdukasiInput | LayananEdukasiUpsertWithWhereUniqueWithoutEdukasiInput[]
    createMany?: LayananEdukasiCreateManyEdukasiInputEnvelope
    set?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    disconnect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    delete?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    connect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    update?: LayananEdukasiUpdateWithWhereUniqueWithoutEdukasiInput | LayananEdukasiUpdateWithWhereUniqueWithoutEdukasiInput[]
    updateMany?: LayananEdukasiUpdateManyWithWhereWithoutEdukasiInput | LayananEdukasiUpdateManyWithWhereWithoutEdukasiInput[]
    deleteMany?: LayananEdukasiScalarWhereInput | LayananEdukasiScalarWhereInput[]
  }

  export type LayananUpdateOneWithoutEdukasiNestedInput = {
    create?: XOR<LayananCreateWithoutEdukasiInput, LayananUncheckedCreateWithoutEdukasiInput>
    connectOrCreate?: LayananCreateOrConnectWithoutEdukasiInput
    upsert?: LayananUpsertWithoutEdukasiInput
    disconnect?: LayananWhereInput | boolean
    delete?: LayananWhereInput | boolean
    connect?: LayananWhereUniqueInput
    update?: XOR<XOR<LayananUpdateToOneWithWhereWithoutEdukasiInput, LayananUpdateWithoutEdukasiInput>, LayananUncheckedUpdateWithoutEdukasiInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type LayananEdukasiUncheckedUpdateManyWithoutEdukasiNestedInput = {
    create?: XOR<LayananEdukasiCreateWithoutEdukasiInput, LayananEdukasiUncheckedCreateWithoutEdukasiInput> | LayananEdukasiCreateWithoutEdukasiInput[] | LayananEdukasiUncheckedCreateWithoutEdukasiInput[]
    connectOrCreate?: LayananEdukasiCreateOrConnectWithoutEdukasiInput | LayananEdukasiCreateOrConnectWithoutEdukasiInput[]
    upsert?: LayananEdukasiUpsertWithWhereUniqueWithoutEdukasiInput | LayananEdukasiUpsertWithWhereUniqueWithoutEdukasiInput[]
    createMany?: LayananEdukasiCreateManyEdukasiInputEnvelope
    set?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    disconnect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    delete?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    connect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    update?: LayananEdukasiUpdateWithWhereUniqueWithoutEdukasiInput | LayananEdukasiUpdateWithWhereUniqueWithoutEdukasiInput[]
    updateMany?: LayananEdukasiUpdateManyWithWhereWithoutEdukasiInput | LayananEdukasiUpdateManyWithWhereWithoutEdukasiInput[]
    deleteMany?: LayananEdukasiScalarWhereInput | LayananEdukasiScalarWhereInput[]
  }

  export type LayananCreateNestedOneWithoutJadwalImunisasiInput = {
    create?: XOR<LayananCreateWithoutJadwalImunisasiInput, LayananUncheckedCreateWithoutJadwalImunisasiInput>
    connectOrCreate?: LayananCreateOrConnectWithoutJadwalImunisasiInput
    connect?: LayananWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LayananUpdateOneRequiredWithoutJadwalImunisasiNestedInput = {
    create?: XOR<LayananCreateWithoutJadwalImunisasiInput, LayananUncheckedCreateWithoutJadwalImunisasiInput>
    connectOrCreate?: LayananCreateOrConnectWithoutJadwalImunisasiInput
    upsert?: LayananUpsertWithoutJadwalImunisasiInput
    connect?: LayananWhereUniqueInput
    update?: XOR<XOR<LayananUpdateToOneWithWhereWithoutJadwalImunisasiInput, LayananUpdateWithoutJadwalImunisasiInput>, LayananUncheckedUpdateWithoutJadwalImunisasiInput>
  }

  export type PasienCreateNestedOneWithoutKunjunganInput = {
    create?: XOR<PasienCreateWithoutKunjunganInput, PasienUncheckedCreateWithoutKunjunganInput>
    connectOrCreate?: PasienCreateOrConnectWithoutKunjunganInput
    connect?: PasienWhereUniqueInput
  }

  export type LayananCreateNestedOneWithoutKunjunganInput = {
    create?: XOR<LayananCreateWithoutKunjunganInput, LayananUncheckedCreateWithoutKunjunganInput>
    connectOrCreate?: LayananCreateOrConnectWithoutKunjunganInput
    connect?: LayananWhereUniqueInput
  }

  export type RekamMedisCreateNestedManyWithoutKunjunganInput = {
    create?: XOR<RekamMedisCreateWithoutKunjunganInput, RekamMedisUncheckedCreateWithoutKunjunganInput> | RekamMedisCreateWithoutKunjunganInput[] | RekamMedisUncheckedCreateWithoutKunjunganInput[]
    connectOrCreate?: RekamMedisCreateOrConnectWithoutKunjunganInput | RekamMedisCreateOrConnectWithoutKunjunganInput[]
    createMany?: RekamMedisCreateManyKunjunganInputEnvelope
    connect?: RekamMedisWhereUniqueInput | RekamMedisWhereUniqueInput[]
  }

  export type RekamMedisUncheckedCreateNestedManyWithoutKunjunganInput = {
    create?: XOR<RekamMedisCreateWithoutKunjunganInput, RekamMedisUncheckedCreateWithoutKunjunganInput> | RekamMedisCreateWithoutKunjunganInput[] | RekamMedisUncheckedCreateWithoutKunjunganInput[]
    connectOrCreate?: RekamMedisCreateOrConnectWithoutKunjunganInput | RekamMedisCreateOrConnectWithoutKunjunganInput[]
    createMany?: RekamMedisCreateManyKunjunganInputEnvelope
    connect?: RekamMedisWhereUniqueInput | RekamMedisWhereUniqueInput[]
  }

  export type EnumStatusKunjunganFieldUpdateOperationsInput = {
    set?: $Enums.StatusKunjungan
  }

  export type PasienUpdateOneRequiredWithoutKunjunganNestedInput = {
    create?: XOR<PasienCreateWithoutKunjunganInput, PasienUncheckedCreateWithoutKunjunganInput>
    connectOrCreate?: PasienCreateOrConnectWithoutKunjunganInput
    upsert?: PasienUpsertWithoutKunjunganInput
    connect?: PasienWhereUniqueInput
    update?: XOR<XOR<PasienUpdateToOneWithWhereWithoutKunjunganInput, PasienUpdateWithoutKunjunganInput>, PasienUncheckedUpdateWithoutKunjunganInput>
  }

  export type LayananUpdateOneRequiredWithoutKunjunganNestedInput = {
    create?: XOR<LayananCreateWithoutKunjunganInput, LayananUncheckedCreateWithoutKunjunganInput>
    connectOrCreate?: LayananCreateOrConnectWithoutKunjunganInput
    upsert?: LayananUpsertWithoutKunjunganInput
    connect?: LayananWhereUniqueInput
    update?: XOR<XOR<LayananUpdateToOneWithWhereWithoutKunjunganInput, LayananUpdateWithoutKunjunganInput>, LayananUncheckedUpdateWithoutKunjunganInput>
  }

  export type RekamMedisUpdateManyWithoutKunjunganNestedInput = {
    create?: XOR<RekamMedisCreateWithoutKunjunganInput, RekamMedisUncheckedCreateWithoutKunjunganInput> | RekamMedisCreateWithoutKunjunganInput[] | RekamMedisUncheckedCreateWithoutKunjunganInput[]
    connectOrCreate?: RekamMedisCreateOrConnectWithoutKunjunganInput | RekamMedisCreateOrConnectWithoutKunjunganInput[]
    upsert?: RekamMedisUpsertWithWhereUniqueWithoutKunjunganInput | RekamMedisUpsertWithWhereUniqueWithoutKunjunganInput[]
    createMany?: RekamMedisCreateManyKunjunganInputEnvelope
    set?: RekamMedisWhereUniqueInput | RekamMedisWhereUniqueInput[]
    disconnect?: RekamMedisWhereUniqueInput | RekamMedisWhereUniqueInput[]
    delete?: RekamMedisWhereUniqueInput | RekamMedisWhereUniqueInput[]
    connect?: RekamMedisWhereUniqueInput | RekamMedisWhereUniqueInput[]
    update?: RekamMedisUpdateWithWhereUniqueWithoutKunjunganInput | RekamMedisUpdateWithWhereUniqueWithoutKunjunganInput[]
    updateMany?: RekamMedisUpdateManyWithWhereWithoutKunjunganInput | RekamMedisUpdateManyWithWhereWithoutKunjunganInput[]
    deleteMany?: RekamMedisScalarWhereInput | RekamMedisScalarWhereInput[]
  }

  export type RekamMedisUncheckedUpdateManyWithoutKunjunganNestedInput = {
    create?: XOR<RekamMedisCreateWithoutKunjunganInput, RekamMedisUncheckedCreateWithoutKunjunganInput> | RekamMedisCreateWithoutKunjunganInput[] | RekamMedisUncheckedCreateWithoutKunjunganInput[]
    connectOrCreate?: RekamMedisCreateOrConnectWithoutKunjunganInput | RekamMedisCreateOrConnectWithoutKunjunganInput[]
    upsert?: RekamMedisUpsertWithWhereUniqueWithoutKunjunganInput | RekamMedisUpsertWithWhereUniqueWithoutKunjunganInput[]
    createMany?: RekamMedisCreateManyKunjunganInputEnvelope
    set?: RekamMedisWhereUniqueInput | RekamMedisWhereUniqueInput[]
    disconnect?: RekamMedisWhereUniqueInput | RekamMedisWhereUniqueInput[]
    delete?: RekamMedisWhereUniqueInput | RekamMedisWhereUniqueInput[]
    connect?: RekamMedisWhereUniqueInput | RekamMedisWhereUniqueInput[]
    update?: RekamMedisUpdateWithWhereUniqueWithoutKunjunganInput | RekamMedisUpdateWithWhereUniqueWithoutKunjunganInput[]
    updateMany?: RekamMedisUpdateManyWithWhereWithoutKunjunganInput | RekamMedisUpdateManyWithWhereWithoutKunjunganInput[]
    deleteMany?: RekamMedisScalarWhereInput | RekamMedisScalarWhereInput[]
  }

  export type EdukasiCreateNestedManyWithoutLayananInput = {
    create?: XOR<EdukasiCreateWithoutLayananInput, EdukasiUncheckedCreateWithoutLayananInput> | EdukasiCreateWithoutLayananInput[] | EdukasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: EdukasiCreateOrConnectWithoutLayananInput | EdukasiCreateOrConnectWithoutLayananInput[]
    createMany?: EdukasiCreateManyLayananInputEnvelope
    connect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
  }

  export type LayananEdukasiCreateNestedManyWithoutLayananInput = {
    create?: XOR<LayananEdukasiCreateWithoutLayananInput, LayananEdukasiUncheckedCreateWithoutLayananInput> | LayananEdukasiCreateWithoutLayananInput[] | LayananEdukasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: LayananEdukasiCreateOrConnectWithoutLayananInput | LayananEdukasiCreateOrConnectWithoutLayananInput[]
    createMany?: LayananEdukasiCreateManyLayananInputEnvelope
    connect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
  }

  export type JadwalImunisasiCreateNestedManyWithoutLayananInput = {
    create?: XOR<JadwalImunisasiCreateWithoutLayananInput, JadwalImunisasiUncheckedCreateWithoutLayananInput> | JadwalImunisasiCreateWithoutLayananInput[] | JadwalImunisasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: JadwalImunisasiCreateOrConnectWithoutLayananInput | JadwalImunisasiCreateOrConnectWithoutLayananInput[]
    createMany?: JadwalImunisasiCreateManyLayananInputEnvelope
    connect?: JadwalImunisasiWhereUniqueInput | JadwalImunisasiWhereUniqueInput[]
  }

  export type KunjunganCreateNestedManyWithoutLayananInput = {
    create?: XOR<KunjunganCreateWithoutLayananInput, KunjunganUncheckedCreateWithoutLayananInput> | KunjunganCreateWithoutLayananInput[] | KunjunganUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: KunjunganCreateOrConnectWithoutLayananInput | KunjunganCreateOrConnectWithoutLayananInput[]
    createMany?: KunjunganCreateManyLayananInputEnvelope
    connect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
  }

  export type EdukasiUncheckedCreateNestedManyWithoutLayananInput = {
    create?: XOR<EdukasiCreateWithoutLayananInput, EdukasiUncheckedCreateWithoutLayananInput> | EdukasiCreateWithoutLayananInput[] | EdukasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: EdukasiCreateOrConnectWithoutLayananInput | EdukasiCreateOrConnectWithoutLayananInput[]
    createMany?: EdukasiCreateManyLayananInputEnvelope
    connect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
  }

  export type LayananEdukasiUncheckedCreateNestedManyWithoutLayananInput = {
    create?: XOR<LayananEdukasiCreateWithoutLayananInput, LayananEdukasiUncheckedCreateWithoutLayananInput> | LayananEdukasiCreateWithoutLayananInput[] | LayananEdukasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: LayananEdukasiCreateOrConnectWithoutLayananInput | LayananEdukasiCreateOrConnectWithoutLayananInput[]
    createMany?: LayananEdukasiCreateManyLayananInputEnvelope
    connect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
  }

  export type JadwalImunisasiUncheckedCreateNestedManyWithoutLayananInput = {
    create?: XOR<JadwalImunisasiCreateWithoutLayananInput, JadwalImunisasiUncheckedCreateWithoutLayananInput> | JadwalImunisasiCreateWithoutLayananInput[] | JadwalImunisasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: JadwalImunisasiCreateOrConnectWithoutLayananInput | JadwalImunisasiCreateOrConnectWithoutLayananInput[]
    createMany?: JadwalImunisasiCreateManyLayananInputEnvelope
    connect?: JadwalImunisasiWhereUniqueInput | JadwalImunisasiWhereUniqueInput[]
  }

  export type KunjunganUncheckedCreateNestedManyWithoutLayananInput = {
    create?: XOR<KunjunganCreateWithoutLayananInput, KunjunganUncheckedCreateWithoutLayananInput> | KunjunganCreateWithoutLayananInput[] | KunjunganUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: KunjunganCreateOrConnectWithoutLayananInput | KunjunganCreateOrConnectWithoutLayananInput[]
    createMany?: KunjunganCreateManyLayananInputEnvelope
    connect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
  }

  export type EdukasiUpdateManyWithoutLayananNestedInput = {
    create?: XOR<EdukasiCreateWithoutLayananInput, EdukasiUncheckedCreateWithoutLayananInput> | EdukasiCreateWithoutLayananInput[] | EdukasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: EdukasiCreateOrConnectWithoutLayananInput | EdukasiCreateOrConnectWithoutLayananInput[]
    upsert?: EdukasiUpsertWithWhereUniqueWithoutLayananInput | EdukasiUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: EdukasiCreateManyLayananInputEnvelope
    set?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    disconnect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    delete?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    connect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    update?: EdukasiUpdateWithWhereUniqueWithoutLayananInput | EdukasiUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: EdukasiUpdateManyWithWhereWithoutLayananInput | EdukasiUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: EdukasiScalarWhereInput | EdukasiScalarWhereInput[]
  }

  export type LayananEdukasiUpdateManyWithoutLayananNestedInput = {
    create?: XOR<LayananEdukasiCreateWithoutLayananInput, LayananEdukasiUncheckedCreateWithoutLayananInput> | LayananEdukasiCreateWithoutLayananInput[] | LayananEdukasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: LayananEdukasiCreateOrConnectWithoutLayananInput | LayananEdukasiCreateOrConnectWithoutLayananInput[]
    upsert?: LayananEdukasiUpsertWithWhereUniqueWithoutLayananInput | LayananEdukasiUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: LayananEdukasiCreateManyLayananInputEnvelope
    set?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    disconnect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    delete?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    connect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    update?: LayananEdukasiUpdateWithWhereUniqueWithoutLayananInput | LayananEdukasiUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: LayananEdukasiUpdateManyWithWhereWithoutLayananInput | LayananEdukasiUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: LayananEdukasiScalarWhereInput | LayananEdukasiScalarWhereInput[]
  }

  export type JadwalImunisasiUpdateManyWithoutLayananNestedInput = {
    create?: XOR<JadwalImunisasiCreateWithoutLayananInput, JadwalImunisasiUncheckedCreateWithoutLayananInput> | JadwalImunisasiCreateWithoutLayananInput[] | JadwalImunisasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: JadwalImunisasiCreateOrConnectWithoutLayananInput | JadwalImunisasiCreateOrConnectWithoutLayananInput[]
    upsert?: JadwalImunisasiUpsertWithWhereUniqueWithoutLayananInput | JadwalImunisasiUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: JadwalImunisasiCreateManyLayananInputEnvelope
    set?: JadwalImunisasiWhereUniqueInput | JadwalImunisasiWhereUniqueInput[]
    disconnect?: JadwalImunisasiWhereUniqueInput | JadwalImunisasiWhereUniqueInput[]
    delete?: JadwalImunisasiWhereUniqueInput | JadwalImunisasiWhereUniqueInput[]
    connect?: JadwalImunisasiWhereUniqueInput | JadwalImunisasiWhereUniqueInput[]
    update?: JadwalImunisasiUpdateWithWhereUniqueWithoutLayananInput | JadwalImunisasiUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: JadwalImunisasiUpdateManyWithWhereWithoutLayananInput | JadwalImunisasiUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: JadwalImunisasiScalarWhereInput | JadwalImunisasiScalarWhereInput[]
  }

  export type KunjunganUpdateManyWithoutLayananNestedInput = {
    create?: XOR<KunjunganCreateWithoutLayananInput, KunjunganUncheckedCreateWithoutLayananInput> | KunjunganCreateWithoutLayananInput[] | KunjunganUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: KunjunganCreateOrConnectWithoutLayananInput | KunjunganCreateOrConnectWithoutLayananInput[]
    upsert?: KunjunganUpsertWithWhereUniqueWithoutLayananInput | KunjunganUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: KunjunganCreateManyLayananInputEnvelope
    set?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    disconnect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    delete?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    connect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    update?: KunjunganUpdateWithWhereUniqueWithoutLayananInput | KunjunganUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: KunjunganUpdateManyWithWhereWithoutLayananInput | KunjunganUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: KunjunganScalarWhereInput | KunjunganScalarWhereInput[]
  }

  export type EdukasiUncheckedUpdateManyWithoutLayananNestedInput = {
    create?: XOR<EdukasiCreateWithoutLayananInput, EdukasiUncheckedCreateWithoutLayananInput> | EdukasiCreateWithoutLayananInput[] | EdukasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: EdukasiCreateOrConnectWithoutLayananInput | EdukasiCreateOrConnectWithoutLayananInput[]
    upsert?: EdukasiUpsertWithWhereUniqueWithoutLayananInput | EdukasiUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: EdukasiCreateManyLayananInputEnvelope
    set?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    disconnect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    delete?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    connect?: EdukasiWhereUniqueInput | EdukasiWhereUniqueInput[]
    update?: EdukasiUpdateWithWhereUniqueWithoutLayananInput | EdukasiUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: EdukasiUpdateManyWithWhereWithoutLayananInput | EdukasiUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: EdukasiScalarWhereInput | EdukasiScalarWhereInput[]
  }

  export type LayananEdukasiUncheckedUpdateManyWithoutLayananNestedInput = {
    create?: XOR<LayananEdukasiCreateWithoutLayananInput, LayananEdukasiUncheckedCreateWithoutLayananInput> | LayananEdukasiCreateWithoutLayananInput[] | LayananEdukasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: LayananEdukasiCreateOrConnectWithoutLayananInput | LayananEdukasiCreateOrConnectWithoutLayananInput[]
    upsert?: LayananEdukasiUpsertWithWhereUniqueWithoutLayananInput | LayananEdukasiUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: LayananEdukasiCreateManyLayananInputEnvelope
    set?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    disconnect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    delete?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    connect?: LayananEdukasiWhereUniqueInput | LayananEdukasiWhereUniqueInput[]
    update?: LayananEdukasiUpdateWithWhereUniqueWithoutLayananInput | LayananEdukasiUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: LayananEdukasiUpdateManyWithWhereWithoutLayananInput | LayananEdukasiUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: LayananEdukasiScalarWhereInput | LayananEdukasiScalarWhereInput[]
  }

  export type JadwalImunisasiUncheckedUpdateManyWithoutLayananNestedInput = {
    create?: XOR<JadwalImunisasiCreateWithoutLayananInput, JadwalImunisasiUncheckedCreateWithoutLayananInput> | JadwalImunisasiCreateWithoutLayananInput[] | JadwalImunisasiUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: JadwalImunisasiCreateOrConnectWithoutLayananInput | JadwalImunisasiCreateOrConnectWithoutLayananInput[]
    upsert?: JadwalImunisasiUpsertWithWhereUniqueWithoutLayananInput | JadwalImunisasiUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: JadwalImunisasiCreateManyLayananInputEnvelope
    set?: JadwalImunisasiWhereUniqueInput | JadwalImunisasiWhereUniqueInput[]
    disconnect?: JadwalImunisasiWhereUniqueInput | JadwalImunisasiWhereUniqueInput[]
    delete?: JadwalImunisasiWhereUniqueInput | JadwalImunisasiWhereUniqueInput[]
    connect?: JadwalImunisasiWhereUniqueInput | JadwalImunisasiWhereUniqueInput[]
    update?: JadwalImunisasiUpdateWithWhereUniqueWithoutLayananInput | JadwalImunisasiUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: JadwalImunisasiUpdateManyWithWhereWithoutLayananInput | JadwalImunisasiUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: JadwalImunisasiScalarWhereInput | JadwalImunisasiScalarWhereInput[]
  }

  export type KunjunganUncheckedUpdateManyWithoutLayananNestedInput = {
    create?: XOR<KunjunganCreateWithoutLayananInput, KunjunganUncheckedCreateWithoutLayananInput> | KunjunganCreateWithoutLayananInput[] | KunjunganUncheckedCreateWithoutLayananInput[]
    connectOrCreate?: KunjunganCreateOrConnectWithoutLayananInput | KunjunganCreateOrConnectWithoutLayananInput[]
    upsert?: KunjunganUpsertWithWhereUniqueWithoutLayananInput | KunjunganUpsertWithWhereUniqueWithoutLayananInput[]
    createMany?: KunjunganCreateManyLayananInputEnvelope
    set?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    disconnect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    delete?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    connect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    update?: KunjunganUpdateWithWhereUniqueWithoutLayananInput | KunjunganUpdateWithWhereUniqueWithoutLayananInput[]
    updateMany?: KunjunganUpdateManyWithWhereWithoutLayananInput | KunjunganUpdateManyWithWhereWithoutLayananInput[]
    deleteMany?: KunjunganScalarWhereInput | KunjunganScalarWhereInput[]
  }

  export type EdukasiCreateNestedOneWithoutLayananEdukasiInput = {
    create?: XOR<EdukasiCreateWithoutLayananEdukasiInput, EdukasiUncheckedCreateWithoutLayananEdukasiInput>
    connectOrCreate?: EdukasiCreateOrConnectWithoutLayananEdukasiInput
    connect?: EdukasiWhereUniqueInput
  }

  export type LayananCreateNestedOneWithoutLayananEdukasiInput = {
    create?: XOR<LayananCreateWithoutLayananEdukasiInput, LayananUncheckedCreateWithoutLayananEdukasiInput>
    connectOrCreate?: LayananCreateOrConnectWithoutLayananEdukasiInput
    connect?: LayananWhereUniqueInput
  }

  export type EdukasiUpdateOneRequiredWithoutLayananEdukasiNestedInput = {
    create?: XOR<EdukasiCreateWithoutLayananEdukasiInput, EdukasiUncheckedCreateWithoutLayananEdukasiInput>
    connectOrCreate?: EdukasiCreateOrConnectWithoutLayananEdukasiInput
    upsert?: EdukasiUpsertWithoutLayananEdukasiInput
    connect?: EdukasiWhereUniqueInput
    update?: XOR<XOR<EdukasiUpdateToOneWithWhereWithoutLayananEdukasiInput, EdukasiUpdateWithoutLayananEdukasiInput>, EdukasiUncheckedUpdateWithoutLayananEdukasiInput>
  }

  export type LayananUpdateOneRequiredWithoutLayananEdukasiNestedInput = {
    create?: XOR<LayananCreateWithoutLayananEdukasiInput, LayananUncheckedCreateWithoutLayananEdukasiInput>
    connectOrCreate?: LayananCreateOrConnectWithoutLayananEdukasiInput
    upsert?: LayananUpsertWithoutLayananEdukasiInput
    connect?: LayananWhereUniqueInput
    update?: XOR<XOR<LayananUpdateToOneWithWhereWithoutLayananEdukasiInput, LayananUpdateWithoutLayananEdukasiInput>, LayananUncheckedUpdateWithoutLayananEdukasiInput>
  }

  export type ResepCreateNestedManyWithoutObatInput = {
    create?: XOR<ResepCreateWithoutObatInput, ResepUncheckedCreateWithoutObatInput> | ResepCreateWithoutObatInput[] | ResepUncheckedCreateWithoutObatInput[]
    connectOrCreate?: ResepCreateOrConnectWithoutObatInput | ResepCreateOrConnectWithoutObatInput[]
    createMany?: ResepCreateManyObatInputEnvelope
    connect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
  }

  export type StokObatCreateNestedManyWithoutObatInput = {
    create?: XOR<StokObatCreateWithoutObatInput, StokObatUncheckedCreateWithoutObatInput> | StokObatCreateWithoutObatInput[] | StokObatUncheckedCreateWithoutObatInput[]
    connectOrCreate?: StokObatCreateOrConnectWithoutObatInput | StokObatCreateOrConnectWithoutObatInput[]
    createMany?: StokObatCreateManyObatInputEnvelope
    connect?: StokObatWhereUniqueInput | StokObatWhereUniqueInput[]
  }

  export type ResepUncheckedCreateNestedManyWithoutObatInput = {
    create?: XOR<ResepCreateWithoutObatInput, ResepUncheckedCreateWithoutObatInput> | ResepCreateWithoutObatInput[] | ResepUncheckedCreateWithoutObatInput[]
    connectOrCreate?: ResepCreateOrConnectWithoutObatInput | ResepCreateOrConnectWithoutObatInput[]
    createMany?: ResepCreateManyObatInputEnvelope
    connect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
  }

  export type StokObatUncheckedCreateNestedManyWithoutObatInput = {
    create?: XOR<StokObatCreateWithoutObatInput, StokObatUncheckedCreateWithoutObatInput> | StokObatCreateWithoutObatInput[] | StokObatUncheckedCreateWithoutObatInput[]
    connectOrCreate?: StokObatCreateOrConnectWithoutObatInput | StokObatCreateOrConnectWithoutObatInput[]
    createMany?: StokObatCreateManyObatInputEnvelope
    connect?: StokObatWhereUniqueInput | StokObatWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResepUpdateManyWithoutObatNestedInput = {
    create?: XOR<ResepCreateWithoutObatInput, ResepUncheckedCreateWithoutObatInput> | ResepCreateWithoutObatInput[] | ResepUncheckedCreateWithoutObatInput[]
    connectOrCreate?: ResepCreateOrConnectWithoutObatInput | ResepCreateOrConnectWithoutObatInput[]
    upsert?: ResepUpsertWithWhereUniqueWithoutObatInput | ResepUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: ResepCreateManyObatInputEnvelope
    set?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    disconnect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    delete?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    connect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    update?: ResepUpdateWithWhereUniqueWithoutObatInput | ResepUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: ResepUpdateManyWithWhereWithoutObatInput | ResepUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: ResepScalarWhereInput | ResepScalarWhereInput[]
  }

  export type StokObatUpdateManyWithoutObatNestedInput = {
    create?: XOR<StokObatCreateWithoutObatInput, StokObatUncheckedCreateWithoutObatInput> | StokObatCreateWithoutObatInput[] | StokObatUncheckedCreateWithoutObatInput[]
    connectOrCreate?: StokObatCreateOrConnectWithoutObatInput | StokObatCreateOrConnectWithoutObatInput[]
    upsert?: StokObatUpsertWithWhereUniqueWithoutObatInput | StokObatUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: StokObatCreateManyObatInputEnvelope
    set?: StokObatWhereUniqueInput | StokObatWhereUniqueInput[]
    disconnect?: StokObatWhereUniqueInput | StokObatWhereUniqueInput[]
    delete?: StokObatWhereUniqueInput | StokObatWhereUniqueInput[]
    connect?: StokObatWhereUniqueInput | StokObatWhereUniqueInput[]
    update?: StokObatUpdateWithWhereUniqueWithoutObatInput | StokObatUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: StokObatUpdateManyWithWhereWithoutObatInput | StokObatUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: StokObatScalarWhereInput | StokObatScalarWhereInput[]
  }

  export type ResepUncheckedUpdateManyWithoutObatNestedInput = {
    create?: XOR<ResepCreateWithoutObatInput, ResepUncheckedCreateWithoutObatInput> | ResepCreateWithoutObatInput[] | ResepUncheckedCreateWithoutObatInput[]
    connectOrCreate?: ResepCreateOrConnectWithoutObatInput | ResepCreateOrConnectWithoutObatInput[]
    upsert?: ResepUpsertWithWhereUniqueWithoutObatInput | ResepUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: ResepCreateManyObatInputEnvelope
    set?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    disconnect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    delete?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    connect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    update?: ResepUpdateWithWhereUniqueWithoutObatInput | ResepUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: ResepUpdateManyWithWhereWithoutObatInput | ResepUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: ResepScalarWhereInput | ResepScalarWhereInput[]
  }

  export type StokObatUncheckedUpdateManyWithoutObatNestedInput = {
    create?: XOR<StokObatCreateWithoutObatInput, StokObatUncheckedCreateWithoutObatInput> | StokObatCreateWithoutObatInput[] | StokObatUncheckedCreateWithoutObatInput[]
    connectOrCreate?: StokObatCreateOrConnectWithoutObatInput | StokObatCreateOrConnectWithoutObatInput[]
    upsert?: StokObatUpsertWithWhereUniqueWithoutObatInput | StokObatUpsertWithWhereUniqueWithoutObatInput[]
    createMany?: StokObatCreateManyObatInputEnvelope
    set?: StokObatWhereUniqueInput | StokObatWhereUniqueInput[]
    disconnect?: StokObatWhereUniqueInput | StokObatWhereUniqueInput[]
    delete?: StokObatWhereUniqueInput | StokObatWhereUniqueInput[]
    connect?: StokObatWhereUniqueInput | StokObatWhereUniqueInput[]
    update?: StokObatUpdateWithWhereUniqueWithoutObatInput | StokObatUpdateWithWhereUniqueWithoutObatInput[]
    updateMany?: StokObatUpdateManyWithWhereWithoutObatInput | StokObatUpdateManyWithWhereWithoutObatInput[]
    deleteMany?: StokObatScalarWhereInput | StokObatScalarWhereInput[]
  }

  export type KunjunganCreateNestedManyWithoutPasienInput = {
    create?: XOR<KunjunganCreateWithoutPasienInput, KunjunganUncheckedCreateWithoutPasienInput> | KunjunganCreateWithoutPasienInput[] | KunjunganUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: KunjunganCreateOrConnectWithoutPasienInput | KunjunganCreateOrConnectWithoutPasienInput[]
    createMany?: KunjunganCreateManyPasienInputEnvelope
    connect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
  }

  export type KunjunganUncheckedCreateNestedManyWithoutPasienInput = {
    create?: XOR<KunjunganCreateWithoutPasienInput, KunjunganUncheckedCreateWithoutPasienInput> | KunjunganCreateWithoutPasienInput[] | KunjunganUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: KunjunganCreateOrConnectWithoutPasienInput | KunjunganCreateOrConnectWithoutPasienInput[]
    createMany?: KunjunganCreateManyPasienInputEnvelope
    connect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
  }

  export type EnumJenisKelaminFieldUpdateOperationsInput = {
    set?: $Enums.JenisKelamin
  }

  export type EnumStatusPasienFieldUpdateOperationsInput = {
    set?: $Enums.StatusPasien
  }

  export type KunjunganUpdateManyWithoutPasienNestedInput = {
    create?: XOR<KunjunganCreateWithoutPasienInput, KunjunganUncheckedCreateWithoutPasienInput> | KunjunganCreateWithoutPasienInput[] | KunjunganUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: KunjunganCreateOrConnectWithoutPasienInput | KunjunganCreateOrConnectWithoutPasienInput[]
    upsert?: KunjunganUpsertWithWhereUniqueWithoutPasienInput | KunjunganUpsertWithWhereUniqueWithoutPasienInput[]
    createMany?: KunjunganCreateManyPasienInputEnvelope
    set?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    disconnect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    delete?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    connect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    update?: KunjunganUpdateWithWhereUniqueWithoutPasienInput | KunjunganUpdateWithWhereUniqueWithoutPasienInput[]
    updateMany?: KunjunganUpdateManyWithWhereWithoutPasienInput | KunjunganUpdateManyWithWhereWithoutPasienInput[]
    deleteMany?: KunjunganScalarWhereInput | KunjunganScalarWhereInput[]
  }

  export type KunjunganUncheckedUpdateManyWithoutPasienNestedInput = {
    create?: XOR<KunjunganCreateWithoutPasienInput, KunjunganUncheckedCreateWithoutPasienInput> | KunjunganCreateWithoutPasienInput[] | KunjunganUncheckedCreateWithoutPasienInput[]
    connectOrCreate?: KunjunganCreateOrConnectWithoutPasienInput | KunjunganCreateOrConnectWithoutPasienInput[]
    upsert?: KunjunganUpsertWithWhereUniqueWithoutPasienInput | KunjunganUpsertWithWhereUniqueWithoutPasienInput[]
    createMany?: KunjunganCreateManyPasienInputEnvelope
    set?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    disconnect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    delete?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    connect?: KunjunganWhereUniqueInput | KunjunganWhereUniqueInput[]
    update?: KunjunganUpdateWithWhereUniqueWithoutPasienInput | KunjunganUpdateWithWhereUniqueWithoutPasienInput[]
    updateMany?: KunjunganUpdateManyWithWhereWithoutPasienInput | KunjunganUpdateManyWithWhereWithoutPasienInput[]
    deleteMany?: KunjunganScalarWhereInput | KunjunganScalarWhereInput[]
  }

  export type RekamMedisCreateNestedOneWithoutPembayaranInput = {
    create?: XOR<RekamMedisCreateWithoutPembayaranInput, RekamMedisUncheckedCreateWithoutPembayaranInput>
    connectOrCreate?: RekamMedisCreateOrConnectWithoutPembayaranInput
    connect?: RekamMedisWhereUniqueInput
  }

  export type EnumStatusPembayaranFieldUpdateOperationsInput = {
    set?: $Enums.StatusPembayaran
  }

  export type RekamMedisUpdateOneRequiredWithoutPembayaranNestedInput = {
    create?: XOR<RekamMedisCreateWithoutPembayaranInput, RekamMedisUncheckedCreateWithoutPembayaranInput>
    connectOrCreate?: RekamMedisCreateOrConnectWithoutPembayaranInput
    upsert?: RekamMedisUpsertWithoutPembayaranInput
    connect?: RekamMedisWhereUniqueInput
    update?: XOR<XOR<RekamMedisUpdateToOneWithWhereWithoutPembayaranInput, RekamMedisUpdateWithoutPembayaranInput>, RekamMedisUncheckedUpdateWithoutPembayaranInput>
  }

  export type KunjunganCreateNestedOneWithoutRekamMedisInput = {
    create?: XOR<KunjunganCreateWithoutRekamMedisInput, KunjunganUncheckedCreateWithoutRekamMedisInput>
    connectOrCreate?: KunjunganCreateOrConnectWithoutRekamMedisInput
    connect?: KunjunganWhereUniqueInput
  }

  export type ResepCreateNestedManyWithoutRekamMedisInput = {
    create?: XOR<ResepCreateWithoutRekamMedisInput, ResepUncheckedCreateWithoutRekamMedisInput> | ResepCreateWithoutRekamMedisInput[] | ResepUncheckedCreateWithoutRekamMedisInput[]
    connectOrCreate?: ResepCreateOrConnectWithoutRekamMedisInput | ResepCreateOrConnectWithoutRekamMedisInput[]
    createMany?: ResepCreateManyRekamMedisInputEnvelope
    connect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
  }

  export type PembayaranCreateNestedManyWithoutRekamMedisInput = {
    create?: XOR<PembayaranCreateWithoutRekamMedisInput, PembayaranUncheckedCreateWithoutRekamMedisInput> | PembayaranCreateWithoutRekamMedisInput[] | PembayaranUncheckedCreateWithoutRekamMedisInput[]
    connectOrCreate?: PembayaranCreateOrConnectWithoutRekamMedisInput | PembayaranCreateOrConnectWithoutRekamMedisInput[]
    createMany?: PembayaranCreateManyRekamMedisInputEnvelope
    connect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
  }

  export type ResepUncheckedCreateNestedManyWithoutRekamMedisInput = {
    create?: XOR<ResepCreateWithoutRekamMedisInput, ResepUncheckedCreateWithoutRekamMedisInput> | ResepCreateWithoutRekamMedisInput[] | ResepUncheckedCreateWithoutRekamMedisInput[]
    connectOrCreate?: ResepCreateOrConnectWithoutRekamMedisInput | ResepCreateOrConnectWithoutRekamMedisInput[]
    createMany?: ResepCreateManyRekamMedisInputEnvelope
    connect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
  }

  export type PembayaranUncheckedCreateNestedManyWithoutRekamMedisInput = {
    create?: XOR<PembayaranCreateWithoutRekamMedisInput, PembayaranUncheckedCreateWithoutRekamMedisInput> | PembayaranCreateWithoutRekamMedisInput[] | PembayaranUncheckedCreateWithoutRekamMedisInput[]
    connectOrCreate?: PembayaranCreateOrConnectWithoutRekamMedisInput | PembayaranCreateOrConnectWithoutRekamMedisInput[]
    createMany?: PembayaranCreateManyRekamMedisInputEnvelope
    connect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
  }

  export type EnumStatusRekamFieldUpdateOperationsInput = {
    set?: $Enums.StatusRekam
  }

  export type KunjunganUpdateOneRequiredWithoutRekamMedisNestedInput = {
    create?: XOR<KunjunganCreateWithoutRekamMedisInput, KunjunganUncheckedCreateWithoutRekamMedisInput>
    connectOrCreate?: KunjunganCreateOrConnectWithoutRekamMedisInput
    upsert?: KunjunganUpsertWithoutRekamMedisInput
    connect?: KunjunganWhereUniqueInput
    update?: XOR<XOR<KunjunganUpdateToOneWithWhereWithoutRekamMedisInput, KunjunganUpdateWithoutRekamMedisInput>, KunjunganUncheckedUpdateWithoutRekamMedisInput>
  }

  export type ResepUpdateManyWithoutRekamMedisNestedInput = {
    create?: XOR<ResepCreateWithoutRekamMedisInput, ResepUncheckedCreateWithoutRekamMedisInput> | ResepCreateWithoutRekamMedisInput[] | ResepUncheckedCreateWithoutRekamMedisInput[]
    connectOrCreate?: ResepCreateOrConnectWithoutRekamMedisInput | ResepCreateOrConnectWithoutRekamMedisInput[]
    upsert?: ResepUpsertWithWhereUniqueWithoutRekamMedisInput | ResepUpsertWithWhereUniqueWithoutRekamMedisInput[]
    createMany?: ResepCreateManyRekamMedisInputEnvelope
    set?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    disconnect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    delete?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    connect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    update?: ResepUpdateWithWhereUniqueWithoutRekamMedisInput | ResepUpdateWithWhereUniqueWithoutRekamMedisInput[]
    updateMany?: ResepUpdateManyWithWhereWithoutRekamMedisInput | ResepUpdateManyWithWhereWithoutRekamMedisInput[]
    deleteMany?: ResepScalarWhereInput | ResepScalarWhereInput[]
  }

  export type PembayaranUpdateManyWithoutRekamMedisNestedInput = {
    create?: XOR<PembayaranCreateWithoutRekamMedisInput, PembayaranUncheckedCreateWithoutRekamMedisInput> | PembayaranCreateWithoutRekamMedisInput[] | PembayaranUncheckedCreateWithoutRekamMedisInput[]
    connectOrCreate?: PembayaranCreateOrConnectWithoutRekamMedisInput | PembayaranCreateOrConnectWithoutRekamMedisInput[]
    upsert?: PembayaranUpsertWithWhereUniqueWithoutRekamMedisInput | PembayaranUpsertWithWhereUniqueWithoutRekamMedisInput[]
    createMany?: PembayaranCreateManyRekamMedisInputEnvelope
    set?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    disconnect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    delete?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    connect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    update?: PembayaranUpdateWithWhereUniqueWithoutRekamMedisInput | PembayaranUpdateWithWhereUniqueWithoutRekamMedisInput[]
    updateMany?: PembayaranUpdateManyWithWhereWithoutRekamMedisInput | PembayaranUpdateManyWithWhereWithoutRekamMedisInput[]
    deleteMany?: PembayaranScalarWhereInput | PembayaranScalarWhereInput[]
  }

  export type ResepUncheckedUpdateManyWithoutRekamMedisNestedInput = {
    create?: XOR<ResepCreateWithoutRekamMedisInput, ResepUncheckedCreateWithoutRekamMedisInput> | ResepCreateWithoutRekamMedisInput[] | ResepUncheckedCreateWithoutRekamMedisInput[]
    connectOrCreate?: ResepCreateOrConnectWithoutRekamMedisInput | ResepCreateOrConnectWithoutRekamMedisInput[]
    upsert?: ResepUpsertWithWhereUniqueWithoutRekamMedisInput | ResepUpsertWithWhereUniqueWithoutRekamMedisInput[]
    createMany?: ResepCreateManyRekamMedisInputEnvelope
    set?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    disconnect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    delete?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    connect?: ResepWhereUniqueInput | ResepWhereUniqueInput[]
    update?: ResepUpdateWithWhereUniqueWithoutRekamMedisInput | ResepUpdateWithWhereUniqueWithoutRekamMedisInput[]
    updateMany?: ResepUpdateManyWithWhereWithoutRekamMedisInput | ResepUpdateManyWithWhereWithoutRekamMedisInput[]
    deleteMany?: ResepScalarWhereInput | ResepScalarWhereInput[]
  }

  export type PembayaranUncheckedUpdateManyWithoutRekamMedisNestedInput = {
    create?: XOR<PembayaranCreateWithoutRekamMedisInput, PembayaranUncheckedCreateWithoutRekamMedisInput> | PembayaranCreateWithoutRekamMedisInput[] | PembayaranUncheckedCreateWithoutRekamMedisInput[]
    connectOrCreate?: PembayaranCreateOrConnectWithoutRekamMedisInput | PembayaranCreateOrConnectWithoutRekamMedisInput[]
    upsert?: PembayaranUpsertWithWhereUniqueWithoutRekamMedisInput | PembayaranUpsertWithWhereUniqueWithoutRekamMedisInput[]
    createMany?: PembayaranCreateManyRekamMedisInputEnvelope
    set?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    disconnect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    delete?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    connect?: PembayaranWhereUniqueInput | PembayaranWhereUniqueInput[]
    update?: PembayaranUpdateWithWhereUniqueWithoutRekamMedisInput | PembayaranUpdateWithWhereUniqueWithoutRekamMedisInput[]
    updateMany?: PembayaranUpdateManyWithWhereWithoutRekamMedisInput | PembayaranUpdateManyWithWhereWithoutRekamMedisInput[]
    deleteMany?: PembayaranScalarWhereInput | PembayaranScalarWhereInput[]
  }

  export type RekamMedisCreateNestedOneWithoutResepInput = {
    create?: XOR<RekamMedisCreateWithoutResepInput, RekamMedisUncheckedCreateWithoutResepInput>
    connectOrCreate?: RekamMedisCreateOrConnectWithoutResepInput
    connect?: RekamMedisWhereUniqueInput
  }

  export type ObatCreateNestedOneWithoutResepInput = {
    create?: XOR<ObatCreateWithoutResepInput, ObatUncheckedCreateWithoutResepInput>
    connectOrCreate?: ObatCreateOrConnectWithoutResepInput
    connect?: ObatWhereUniqueInput
  }

  export type RekamMedisUpdateOneRequiredWithoutResepNestedInput = {
    create?: XOR<RekamMedisCreateWithoutResepInput, RekamMedisUncheckedCreateWithoutResepInput>
    connectOrCreate?: RekamMedisCreateOrConnectWithoutResepInput
    upsert?: RekamMedisUpsertWithoutResepInput
    connect?: RekamMedisWhereUniqueInput
    update?: XOR<XOR<RekamMedisUpdateToOneWithWhereWithoutResepInput, RekamMedisUpdateWithoutResepInput>, RekamMedisUncheckedUpdateWithoutResepInput>
  }

  export type ObatUpdateOneRequiredWithoutResepNestedInput = {
    create?: XOR<ObatCreateWithoutResepInput, ObatUncheckedCreateWithoutResepInput>
    connectOrCreate?: ObatCreateOrConnectWithoutResepInput
    upsert?: ObatUpsertWithoutResepInput
    connect?: ObatWhereUniqueInput
    update?: XOR<XOR<ObatUpdateToOneWithWhereWithoutResepInput, ObatUpdateWithoutResepInput>, ObatUncheckedUpdateWithoutResepInput>
  }

  export type ObatCreateNestedOneWithoutStokObatInput = {
    create?: XOR<ObatCreateWithoutStokObatInput, ObatUncheckedCreateWithoutStokObatInput>
    connectOrCreate?: ObatCreateOrConnectWithoutStokObatInput
    connect?: ObatWhereUniqueInput
  }

  export type EnumTransaksiObatFieldUpdateOperationsInput = {
    set?: $Enums.TransaksiObat
  }

  export type EnumSumberTransaksiFieldUpdateOperationsInput = {
    set?: $Enums.SumberTransaksi
  }

  export type ObatUpdateOneRequiredWithoutStokObatNestedInput = {
    create?: XOR<ObatCreateWithoutStokObatInput, ObatUncheckedCreateWithoutStokObatInput>
    connectOrCreate?: ObatCreateOrConnectWithoutStokObatInput
    upsert?: ObatUpsertWithoutStokObatInput
    connect?: ObatWhereUniqueInput
    update?: XOR<XOR<ObatUpdateToOneWithWhereWithoutStokObatInput, ObatUpdateWithoutStokObatInput>, ObatUncheckedUpdateWithoutStokObatInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NestedEnumStatusKunjunganFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKunjungan | EnumStatusKunjunganFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKunjungan[] | ListEnumStatusKunjunganFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKunjungan[] | ListEnumStatusKunjunganFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKunjunganFilter<$PrismaModel> | $Enums.StatusKunjungan
  }

  export type NestedEnumStatusKunjunganWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusKunjungan | EnumStatusKunjunganFieldRefInput<$PrismaModel>
    in?: $Enums.StatusKunjungan[] | ListEnumStatusKunjunganFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusKunjungan[] | ListEnumStatusKunjunganFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusKunjunganWithAggregatesFilter<$PrismaModel> | $Enums.StatusKunjungan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusKunjunganFilter<$PrismaModel>
    _max?: NestedEnumStatusKunjunganFilter<$PrismaModel>
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

  export type NestedEnumJenisKelaminFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminFilter<$PrismaModel> | $Enums.JenisKelamin
  }

  export type NestedEnumStatusPasienFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPasien | EnumStatusPasienFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPasien[] | ListEnumStatusPasienFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPasien[] | ListEnumStatusPasienFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPasienFilter<$PrismaModel> | $Enums.StatusPasien
  }

  export type NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.JenisKelamin | EnumJenisKelaminFieldRefInput<$PrismaModel>
    in?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    notIn?: $Enums.JenisKelamin[] | ListEnumJenisKelaminFieldRefInput<$PrismaModel>
    not?: NestedEnumJenisKelaminWithAggregatesFilter<$PrismaModel> | $Enums.JenisKelamin
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumJenisKelaminFilter<$PrismaModel>
    _max?: NestedEnumJenisKelaminFilter<$PrismaModel>
  }

  export type NestedEnumStatusPasienWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPasien | EnumStatusPasienFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPasien[] | ListEnumStatusPasienFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPasien[] | ListEnumStatusPasienFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPasienWithAggregatesFilter<$PrismaModel> | $Enums.StatusPasien
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPasienFilter<$PrismaModel>
    _max?: NestedEnumStatusPasienFilter<$PrismaModel>
  }

  export type NestedEnumStatusPembayaranFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembayaran | EnumStatusPembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembayaranFilter<$PrismaModel> | $Enums.StatusPembayaran
  }

  export type NestedEnumStatusPembayaranWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPembayaran | EnumStatusPembayaranFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPembayaran[] | ListEnumStatusPembayaranFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPembayaranWithAggregatesFilter<$PrismaModel> | $Enums.StatusPembayaran
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPembayaranFilter<$PrismaModel>
    _max?: NestedEnumStatusPembayaranFilter<$PrismaModel>
  }

  export type NestedEnumStatusRekamFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRekam | EnumStatusRekamFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRekam[] | ListEnumStatusRekamFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRekam[] | ListEnumStatusRekamFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRekamFilter<$PrismaModel> | $Enums.StatusRekam
  }

  export type NestedEnumStatusRekamWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRekam | EnumStatusRekamFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRekam[] | ListEnumStatusRekamFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRekam[] | ListEnumStatusRekamFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRekamWithAggregatesFilter<$PrismaModel> | $Enums.StatusRekam
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRekamFilter<$PrismaModel>
    _max?: NestedEnumStatusRekamFilter<$PrismaModel>
  }

  export type NestedEnumTransaksiObatFilter<$PrismaModel = never> = {
    equals?: $Enums.TransaksiObat | EnumTransaksiObatFieldRefInput<$PrismaModel>
    in?: $Enums.TransaksiObat[] | ListEnumTransaksiObatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransaksiObat[] | ListEnumTransaksiObatFieldRefInput<$PrismaModel>
    not?: NestedEnumTransaksiObatFilter<$PrismaModel> | $Enums.TransaksiObat
  }

  export type NestedEnumSumberTransaksiFilter<$PrismaModel = never> = {
    equals?: $Enums.SumberTransaksi | EnumSumberTransaksiFieldRefInput<$PrismaModel>
    in?: $Enums.SumberTransaksi[] | ListEnumSumberTransaksiFieldRefInput<$PrismaModel>
    notIn?: $Enums.SumberTransaksi[] | ListEnumSumberTransaksiFieldRefInput<$PrismaModel>
    not?: NestedEnumSumberTransaksiFilter<$PrismaModel> | $Enums.SumberTransaksi
  }

  export type NestedEnumTransaksiObatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransaksiObat | EnumTransaksiObatFieldRefInput<$PrismaModel>
    in?: $Enums.TransaksiObat[] | ListEnumTransaksiObatFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransaksiObat[] | ListEnumTransaksiObatFieldRefInput<$PrismaModel>
    not?: NestedEnumTransaksiObatWithAggregatesFilter<$PrismaModel> | $Enums.TransaksiObat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransaksiObatFilter<$PrismaModel>
    _max?: NestedEnumTransaksiObatFilter<$PrismaModel>
  }

  export type NestedEnumSumberTransaksiWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SumberTransaksi | EnumSumberTransaksiFieldRefInput<$PrismaModel>
    in?: $Enums.SumberTransaksi[] | ListEnumSumberTransaksiFieldRefInput<$PrismaModel>
    notIn?: $Enums.SumberTransaksi[] | ListEnumSumberTransaksiFieldRefInput<$PrismaModel>
    not?: NestedEnumSumberTransaksiWithAggregatesFilter<$PrismaModel> | $Enums.SumberTransaksi
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSumberTransaksiFilter<$PrismaModel>
    _max?: NestedEnumSumberTransaksiFilter<$PrismaModel>
  }

  export type EdukasiCreateWithoutAdminInput = {
    id: bigint | number
    judul: string
    isi: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    layananEdukasi?: LayananEdukasiCreateNestedManyWithoutEdukasiInput
    layanan?: LayananCreateNestedOneWithoutEdukasiInput
  }

  export type EdukasiUncheckedCreateWithoutAdminInput = {
    id: bigint | number
    judul: string
    isi: string
    layananId?: bigint | number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    layananEdukasi?: LayananEdukasiUncheckedCreateNestedManyWithoutEdukasiInput
  }

  export type EdukasiCreateOrConnectWithoutAdminInput = {
    where: EdukasiWhereUniqueInput
    create: XOR<EdukasiCreateWithoutAdminInput, EdukasiUncheckedCreateWithoutAdminInput>
  }

  export type EdukasiCreateManyAdminInputEnvelope = {
    data: EdukasiCreateManyAdminInput | EdukasiCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type EdukasiUpsertWithWhereUniqueWithoutAdminInput = {
    where: EdukasiWhereUniqueInput
    update: XOR<EdukasiUpdateWithoutAdminInput, EdukasiUncheckedUpdateWithoutAdminInput>
    create: XOR<EdukasiCreateWithoutAdminInput, EdukasiUncheckedCreateWithoutAdminInput>
  }

  export type EdukasiUpdateWithWhereUniqueWithoutAdminInput = {
    where: EdukasiWhereUniqueInput
    data: XOR<EdukasiUpdateWithoutAdminInput, EdukasiUncheckedUpdateWithoutAdminInput>
  }

  export type EdukasiUpdateManyWithWhereWithoutAdminInput = {
    where: EdukasiScalarWhereInput
    data: XOR<EdukasiUpdateManyMutationInput, EdukasiUncheckedUpdateManyWithoutAdminInput>
  }

  export type EdukasiScalarWhereInput = {
    AND?: EdukasiScalarWhereInput | EdukasiScalarWhereInput[]
    OR?: EdukasiScalarWhereInput[]
    NOT?: EdukasiScalarWhereInput | EdukasiScalarWhereInput[]
    id?: BigIntFilter<"Edukasi"> | bigint | number
    idAdmin?: BigIntFilter<"Edukasi"> | bigint | number
    judul?: StringFilter<"Edukasi"> | string
    isi?: StringFilter<"Edukasi"> | string
    layananId?: BigIntNullableFilter<"Edukasi"> | bigint | number | null
    createdAt?: DateTimeNullableFilter<"Edukasi"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Edukasi"> | Date | string | null
  }

  export type AdminCreateWithoutEdukasiInput = {
    id: bigint | number
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AdminUncheckedCreateWithoutEdukasiInput = {
    id: bigint | number
    nama: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type AdminCreateOrConnectWithoutEdukasiInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutEdukasiInput, AdminUncheckedCreateWithoutEdukasiInput>
  }

  export type LayananEdukasiCreateWithoutEdukasiInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    layanan: LayananCreateNestedOneWithoutLayananEdukasiInput
  }

  export type LayananEdukasiUncheckedCreateWithoutEdukasiInput = {
    idLayanan: bigint | number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LayananEdukasiCreateOrConnectWithoutEdukasiInput = {
    where: LayananEdukasiWhereUniqueInput
    create: XOR<LayananEdukasiCreateWithoutEdukasiInput, LayananEdukasiUncheckedCreateWithoutEdukasiInput>
  }

  export type LayananEdukasiCreateManyEdukasiInputEnvelope = {
    data: LayananEdukasiCreateManyEdukasiInput | LayananEdukasiCreateManyEdukasiInput[]
    skipDuplicates?: boolean
  }

  export type LayananCreateWithoutEdukasiInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    layananEdukasi?: LayananEdukasiCreateNestedManyWithoutLayananInput
    jadwalImunisasi?: JadwalImunisasiCreateNestedManyWithoutLayananInput
    kunjungan?: KunjunganCreateNestedManyWithoutLayananInput
  }

  export type LayananUncheckedCreateWithoutEdukasiInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    layananEdukasi?: LayananEdukasiUncheckedCreateNestedManyWithoutLayananInput
    jadwalImunisasi?: JadwalImunisasiUncheckedCreateNestedManyWithoutLayananInput
    kunjungan?: KunjunganUncheckedCreateNestedManyWithoutLayananInput
  }

  export type LayananCreateOrConnectWithoutEdukasiInput = {
    where: LayananWhereUniqueInput
    create: XOR<LayananCreateWithoutEdukasiInput, LayananUncheckedCreateWithoutEdukasiInput>
  }

  export type AdminUpsertWithoutEdukasiInput = {
    update: XOR<AdminUpdateWithoutEdukasiInput, AdminUncheckedUpdateWithoutEdukasiInput>
    create: XOR<AdminCreateWithoutEdukasiInput, AdminUncheckedCreateWithoutEdukasiInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutEdukasiInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutEdukasiInput, AdminUncheckedUpdateWithoutEdukasiInput>
  }

  export type AdminUpdateWithoutEdukasiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateWithoutEdukasiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananEdukasiUpsertWithWhereUniqueWithoutEdukasiInput = {
    where: LayananEdukasiWhereUniqueInput
    update: XOR<LayananEdukasiUpdateWithoutEdukasiInput, LayananEdukasiUncheckedUpdateWithoutEdukasiInput>
    create: XOR<LayananEdukasiCreateWithoutEdukasiInput, LayananEdukasiUncheckedCreateWithoutEdukasiInput>
  }

  export type LayananEdukasiUpdateWithWhereUniqueWithoutEdukasiInput = {
    where: LayananEdukasiWhereUniqueInput
    data: XOR<LayananEdukasiUpdateWithoutEdukasiInput, LayananEdukasiUncheckedUpdateWithoutEdukasiInput>
  }

  export type LayananEdukasiUpdateManyWithWhereWithoutEdukasiInput = {
    where: LayananEdukasiScalarWhereInput
    data: XOR<LayananEdukasiUpdateManyMutationInput, LayananEdukasiUncheckedUpdateManyWithoutEdukasiInput>
  }

  export type LayananEdukasiScalarWhereInput = {
    AND?: LayananEdukasiScalarWhereInput | LayananEdukasiScalarWhereInput[]
    OR?: LayananEdukasiScalarWhereInput[]
    NOT?: LayananEdukasiScalarWhereInput | LayananEdukasiScalarWhereInput[]
    idEdukasi?: BigIntFilter<"LayananEdukasi"> | bigint | number
    idLayanan?: BigIntFilter<"LayananEdukasi"> | bigint | number
    createdAt?: DateTimeNullableFilter<"LayananEdukasi"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"LayananEdukasi"> | Date | string | null
  }

  export type LayananUpsertWithoutEdukasiInput = {
    update: XOR<LayananUpdateWithoutEdukasiInput, LayananUncheckedUpdateWithoutEdukasiInput>
    create: XOR<LayananCreateWithoutEdukasiInput, LayananUncheckedCreateWithoutEdukasiInput>
    where?: LayananWhereInput
  }

  export type LayananUpdateToOneWithWhereWithoutEdukasiInput = {
    where?: LayananWhereInput
    data: XOR<LayananUpdateWithoutEdukasiInput, LayananUncheckedUpdateWithoutEdukasiInput>
  }

  export type LayananUpdateWithoutEdukasiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    layananEdukasi?: LayananEdukasiUpdateManyWithoutLayananNestedInput
    jadwalImunisasi?: JadwalImunisasiUpdateManyWithoutLayananNestedInput
    kunjungan?: KunjunganUpdateManyWithoutLayananNestedInput
  }

  export type LayananUncheckedUpdateWithoutEdukasiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    layananEdukasi?: LayananEdukasiUncheckedUpdateManyWithoutLayananNestedInput
    jadwalImunisasi?: JadwalImunisasiUncheckedUpdateManyWithoutLayananNestedInput
    kunjungan?: KunjunganUncheckedUpdateManyWithoutLayananNestedInput
  }

  export type LayananCreateWithoutJadwalImunisasiInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi?: EdukasiCreateNestedManyWithoutLayananInput
    layananEdukasi?: LayananEdukasiCreateNestedManyWithoutLayananInput
    kunjungan?: KunjunganCreateNestedManyWithoutLayananInput
  }

  export type LayananUncheckedCreateWithoutJadwalImunisasiInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi?: EdukasiUncheckedCreateNestedManyWithoutLayananInput
    layananEdukasi?: LayananEdukasiUncheckedCreateNestedManyWithoutLayananInput
    kunjungan?: KunjunganUncheckedCreateNestedManyWithoutLayananInput
  }

  export type LayananCreateOrConnectWithoutJadwalImunisasiInput = {
    where: LayananWhereUniqueInput
    create: XOR<LayananCreateWithoutJadwalImunisasiInput, LayananUncheckedCreateWithoutJadwalImunisasiInput>
  }

  export type LayananUpsertWithoutJadwalImunisasiInput = {
    update: XOR<LayananUpdateWithoutJadwalImunisasiInput, LayananUncheckedUpdateWithoutJadwalImunisasiInput>
    create: XOR<LayananCreateWithoutJadwalImunisasiInput, LayananUncheckedCreateWithoutJadwalImunisasiInput>
    where?: LayananWhereInput
  }

  export type LayananUpdateToOneWithWhereWithoutJadwalImunisasiInput = {
    where?: LayananWhereInput
    data: XOR<LayananUpdateWithoutJadwalImunisasiInput, LayananUncheckedUpdateWithoutJadwalImunisasiInput>
  }

  export type LayananUpdateWithoutJadwalImunisasiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUpdateManyWithoutLayananNestedInput
    layananEdukasi?: LayananEdukasiUpdateManyWithoutLayananNestedInput
    kunjungan?: KunjunganUpdateManyWithoutLayananNestedInput
  }

  export type LayananUncheckedUpdateWithoutJadwalImunisasiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUncheckedUpdateManyWithoutLayananNestedInput
    layananEdukasi?: LayananEdukasiUncheckedUpdateManyWithoutLayananNestedInput
    kunjungan?: KunjunganUncheckedUpdateManyWithoutLayananNestedInput
  }

  export type PasienCreateWithoutKunjunganInput = {
    id: bigint | number
    nama: string
    noReg: string
    tglLahir: Date | string
    alamat: string
    hp: string
    jenisKelamin: $Enums.JenisKelamin
    status: $Enums.StatusPasien
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type PasienUncheckedCreateWithoutKunjunganInput = {
    id: bigint | number
    nama: string
    noReg: string
    tglLahir: Date | string
    alamat: string
    hp: string
    jenisKelamin: $Enums.JenisKelamin
    status: $Enums.StatusPasien
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type PasienCreateOrConnectWithoutKunjunganInput = {
    where: PasienWhereUniqueInput
    create: XOR<PasienCreateWithoutKunjunganInput, PasienUncheckedCreateWithoutKunjunganInput>
  }

  export type LayananCreateWithoutKunjunganInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi?: EdukasiCreateNestedManyWithoutLayananInput
    layananEdukasi?: LayananEdukasiCreateNestedManyWithoutLayananInput
    jadwalImunisasi?: JadwalImunisasiCreateNestedManyWithoutLayananInput
  }

  export type LayananUncheckedCreateWithoutKunjunganInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi?: EdukasiUncheckedCreateNestedManyWithoutLayananInput
    layananEdukasi?: LayananEdukasiUncheckedCreateNestedManyWithoutLayananInput
    jadwalImunisasi?: JadwalImunisasiUncheckedCreateNestedManyWithoutLayananInput
  }

  export type LayananCreateOrConnectWithoutKunjunganInput = {
    where: LayananWhereUniqueInput
    create: XOR<LayananCreateWithoutKunjunganInput, LayananUncheckedCreateWithoutKunjunganInput>
  }

  export type RekamMedisCreateWithoutKunjunganInput = {
    id: bigint | number
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    resep?: ResepCreateNestedManyWithoutRekamMedisInput
    pembayaran?: PembayaranCreateNestedManyWithoutRekamMedisInput
  }

  export type RekamMedisUncheckedCreateWithoutKunjunganInput = {
    id: bigint | number
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    resep?: ResepUncheckedCreateNestedManyWithoutRekamMedisInput
    pembayaran?: PembayaranUncheckedCreateNestedManyWithoutRekamMedisInput
  }

  export type RekamMedisCreateOrConnectWithoutKunjunganInput = {
    where: RekamMedisWhereUniqueInput
    create: XOR<RekamMedisCreateWithoutKunjunganInput, RekamMedisUncheckedCreateWithoutKunjunganInput>
  }

  export type RekamMedisCreateManyKunjunganInputEnvelope = {
    data: RekamMedisCreateManyKunjunganInput | RekamMedisCreateManyKunjunganInput[]
    skipDuplicates?: boolean
  }

  export type PasienUpsertWithoutKunjunganInput = {
    update: XOR<PasienUpdateWithoutKunjunganInput, PasienUncheckedUpdateWithoutKunjunganInput>
    create: XOR<PasienCreateWithoutKunjunganInput, PasienUncheckedCreateWithoutKunjunganInput>
    where?: PasienWhereInput
  }

  export type PasienUpdateToOneWithWhereWithoutKunjunganInput = {
    where?: PasienWhereInput
    data: XOR<PasienUpdateWithoutKunjunganInput, PasienUncheckedUpdateWithoutKunjunganInput>
  }

  export type PasienUpdateWithoutKunjunganInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    noReg?: StringFieldUpdateOperationsInput | string
    tglLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status?: EnumStatusPasienFieldUpdateOperationsInput | $Enums.StatusPasien
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PasienUncheckedUpdateWithoutKunjunganInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    noReg?: StringFieldUpdateOperationsInput | string
    tglLahir?: DateTimeFieldUpdateOperationsInput | Date | string
    alamat?: StringFieldUpdateOperationsInput | string
    hp?: StringFieldUpdateOperationsInput | string
    jenisKelamin?: EnumJenisKelaminFieldUpdateOperationsInput | $Enums.JenisKelamin
    status?: EnumStatusPasienFieldUpdateOperationsInput | $Enums.StatusPasien
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananUpsertWithoutKunjunganInput = {
    update: XOR<LayananUpdateWithoutKunjunganInput, LayananUncheckedUpdateWithoutKunjunganInput>
    create: XOR<LayananCreateWithoutKunjunganInput, LayananUncheckedCreateWithoutKunjunganInput>
    where?: LayananWhereInput
  }

  export type LayananUpdateToOneWithWhereWithoutKunjunganInput = {
    where?: LayananWhereInput
    data: XOR<LayananUpdateWithoutKunjunganInput, LayananUncheckedUpdateWithoutKunjunganInput>
  }

  export type LayananUpdateWithoutKunjunganInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUpdateManyWithoutLayananNestedInput
    layananEdukasi?: LayananEdukasiUpdateManyWithoutLayananNestedInput
    jadwalImunisasi?: JadwalImunisasiUpdateManyWithoutLayananNestedInput
  }

  export type LayananUncheckedUpdateWithoutKunjunganInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUncheckedUpdateManyWithoutLayananNestedInput
    layananEdukasi?: LayananEdukasiUncheckedUpdateManyWithoutLayananNestedInput
    jadwalImunisasi?: JadwalImunisasiUncheckedUpdateManyWithoutLayananNestedInput
  }

  export type RekamMedisUpsertWithWhereUniqueWithoutKunjunganInput = {
    where: RekamMedisWhereUniqueInput
    update: XOR<RekamMedisUpdateWithoutKunjunganInput, RekamMedisUncheckedUpdateWithoutKunjunganInput>
    create: XOR<RekamMedisCreateWithoutKunjunganInput, RekamMedisUncheckedCreateWithoutKunjunganInput>
  }

  export type RekamMedisUpdateWithWhereUniqueWithoutKunjunganInput = {
    where: RekamMedisWhereUniqueInput
    data: XOR<RekamMedisUpdateWithoutKunjunganInput, RekamMedisUncheckedUpdateWithoutKunjunganInput>
  }

  export type RekamMedisUpdateManyWithWhereWithoutKunjunganInput = {
    where: RekamMedisScalarWhereInput
    data: XOR<RekamMedisUpdateManyMutationInput, RekamMedisUncheckedUpdateManyWithoutKunjunganInput>
  }

  export type RekamMedisScalarWhereInput = {
    AND?: RekamMedisScalarWhereInput | RekamMedisScalarWhereInput[]
    OR?: RekamMedisScalarWhereInput[]
    NOT?: RekamMedisScalarWhereInput | RekamMedisScalarWhereInput[]
    id?: BigIntFilter<"RekamMedis"> | bigint | number
    idKunjungan?: BigIntFilter<"RekamMedis"> | bigint | number
    keluhan?: StringFilter<"RekamMedis"> | string
    diagnosa?: StringFilter<"RekamMedis"> | string
    tindakan?: StringFilter<"RekamMedis"> | string
    catatan?: StringFilter<"RekamMedis"> | string
    status?: EnumStatusRekamFilter<"RekamMedis"> | $Enums.StatusRekam
    createdAt?: DateTimeNullableFilter<"RekamMedis"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"RekamMedis"> | Date | string | null
  }

  export type EdukasiCreateWithoutLayananInput = {
    id: bigint | number
    judul: string
    isi: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    admin: AdminCreateNestedOneWithoutEdukasiInput
    layananEdukasi?: LayananEdukasiCreateNestedManyWithoutEdukasiInput
  }

  export type EdukasiUncheckedCreateWithoutLayananInput = {
    id: bigint | number
    idAdmin: bigint | number
    judul: string
    isi: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    layananEdukasi?: LayananEdukasiUncheckedCreateNestedManyWithoutEdukasiInput
  }

  export type EdukasiCreateOrConnectWithoutLayananInput = {
    where: EdukasiWhereUniqueInput
    create: XOR<EdukasiCreateWithoutLayananInput, EdukasiUncheckedCreateWithoutLayananInput>
  }

  export type EdukasiCreateManyLayananInputEnvelope = {
    data: EdukasiCreateManyLayananInput | EdukasiCreateManyLayananInput[]
    skipDuplicates?: boolean
  }

  export type LayananEdukasiCreateWithoutLayananInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi: EdukasiCreateNestedOneWithoutLayananEdukasiInput
  }

  export type LayananEdukasiUncheckedCreateWithoutLayananInput = {
    idEdukasi: bigint | number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LayananEdukasiCreateOrConnectWithoutLayananInput = {
    where: LayananEdukasiWhereUniqueInput
    create: XOR<LayananEdukasiCreateWithoutLayananInput, LayananEdukasiUncheckedCreateWithoutLayananInput>
  }

  export type LayananEdukasiCreateManyLayananInputEnvelope = {
    data: LayananEdukasiCreateManyLayananInput | LayananEdukasiCreateManyLayananInput[]
    skipDuplicates?: boolean
  }

  export type JadwalImunisasiCreateWithoutLayananInput = {
    id: bigint | number
    tanggal: Date | string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type JadwalImunisasiUncheckedCreateWithoutLayananInput = {
    id: bigint | number
    tanggal: Date | string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type JadwalImunisasiCreateOrConnectWithoutLayananInput = {
    where: JadwalImunisasiWhereUniqueInput
    create: XOR<JadwalImunisasiCreateWithoutLayananInput, JadwalImunisasiUncheckedCreateWithoutLayananInput>
  }

  export type JadwalImunisasiCreateManyLayananInputEnvelope = {
    data: JadwalImunisasiCreateManyLayananInput | JadwalImunisasiCreateManyLayananInput[]
    skipDuplicates?: boolean
  }

  export type KunjunganCreateWithoutLayananInput = {
    id: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    pasien: PasienCreateNestedOneWithoutKunjunganInput
    rekamMedis?: RekamMedisCreateNestedManyWithoutKunjunganInput
  }

  export type KunjunganUncheckedCreateWithoutLayananInput = {
    id: bigint | number
    idPasien: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    rekamMedis?: RekamMedisUncheckedCreateNestedManyWithoutKunjunganInput
  }

  export type KunjunganCreateOrConnectWithoutLayananInput = {
    where: KunjunganWhereUniqueInput
    create: XOR<KunjunganCreateWithoutLayananInput, KunjunganUncheckedCreateWithoutLayananInput>
  }

  export type KunjunganCreateManyLayananInputEnvelope = {
    data: KunjunganCreateManyLayananInput | KunjunganCreateManyLayananInput[]
    skipDuplicates?: boolean
  }

  export type EdukasiUpsertWithWhereUniqueWithoutLayananInput = {
    where: EdukasiWhereUniqueInput
    update: XOR<EdukasiUpdateWithoutLayananInput, EdukasiUncheckedUpdateWithoutLayananInput>
    create: XOR<EdukasiCreateWithoutLayananInput, EdukasiUncheckedCreateWithoutLayananInput>
  }

  export type EdukasiUpdateWithWhereUniqueWithoutLayananInput = {
    where: EdukasiWhereUniqueInput
    data: XOR<EdukasiUpdateWithoutLayananInput, EdukasiUncheckedUpdateWithoutLayananInput>
  }

  export type EdukasiUpdateManyWithWhereWithoutLayananInput = {
    where: EdukasiScalarWhereInput
    data: XOR<EdukasiUpdateManyMutationInput, EdukasiUncheckedUpdateManyWithoutLayananInput>
  }

  export type LayananEdukasiUpsertWithWhereUniqueWithoutLayananInput = {
    where: LayananEdukasiWhereUniqueInput
    update: XOR<LayananEdukasiUpdateWithoutLayananInput, LayananEdukasiUncheckedUpdateWithoutLayananInput>
    create: XOR<LayananEdukasiCreateWithoutLayananInput, LayananEdukasiUncheckedCreateWithoutLayananInput>
  }

  export type LayananEdukasiUpdateWithWhereUniqueWithoutLayananInput = {
    where: LayananEdukasiWhereUniqueInput
    data: XOR<LayananEdukasiUpdateWithoutLayananInput, LayananEdukasiUncheckedUpdateWithoutLayananInput>
  }

  export type LayananEdukasiUpdateManyWithWhereWithoutLayananInput = {
    where: LayananEdukasiScalarWhereInput
    data: XOR<LayananEdukasiUpdateManyMutationInput, LayananEdukasiUncheckedUpdateManyWithoutLayananInput>
  }

  export type JadwalImunisasiUpsertWithWhereUniqueWithoutLayananInput = {
    where: JadwalImunisasiWhereUniqueInput
    update: XOR<JadwalImunisasiUpdateWithoutLayananInput, JadwalImunisasiUncheckedUpdateWithoutLayananInput>
    create: XOR<JadwalImunisasiCreateWithoutLayananInput, JadwalImunisasiUncheckedCreateWithoutLayananInput>
  }

  export type JadwalImunisasiUpdateWithWhereUniqueWithoutLayananInput = {
    where: JadwalImunisasiWhereUniqueInput
    data: XOR<JadwalImunisasiUpdateWithoutLayananInput, JadwalImunisasiUncheckedUpdateWithoutLayananInput>
  }

  export type JadwalImunisasiUpdateManyWithWhereWithoutLayananInput = {
    where: JadwalImunisasiScalarWhereInput
    data: XOR<JadwalImunisasiUpdateManyMutationInput, JadwalImunisasiUncheckedUpdateManyWithoutLayananInput>
  }

  export type JadwalImunisasiScalarWhereInput = {
    AND?: JadwalImunisasiScalarWhereInput | JadwalImunisasiScalarWhereInput[]
    OR?: JadwalImunisasiScalarWhereInput[]
    NOT?: JadwalImunisasiScalarWhereInput | JadwalImunisasiScalarWhereInput[]
    id?: BigIntFilter<"JadwalImunisasi"> | bigint | number
    idLayanan?: BigIntFilter<"JadwalImunisasi"> | bigint | number
    tanggal?: DateTimeFilter<"JadwalImunisasi"> | Date | string
    catatan?: StringFilter<"JadwalImunisasi"> | string
    createdAt?: DateTimeNullableFilter<"JadwalImunisasi"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"JadwalImunisasi"> | Date | string | null
  }

  export type KunjunganUpsertWithWhereUniqueWithoutLayananInput = {
    where: KunjunganWhereUniqueInput
    update: XOR<KunjunganUpdateWithoutLayananInput, KunjunganUncheckedUpdateWithoutLayananInput>
    create: XOR<KunjunganCreateWithoutLayananInput, KunjunganUncheckedCreateWithoutLayananInput>
  }

  export type KunjunganUpdateWithWhereUniqueWithoutLayananInput = {
    where: KunjunganWhereUniqueInput
    data: XOR<KunjunganUpdateWithoutLayananInput, KunjunganUncheckedUpdateWithoutLayananInput>
  }

  export type KunjunganUpdateManyWithWhereWithoutLayananInput = {
    where: KunjunganScalarWhereInput
    data: XOR<KunjunganUpdateManyMutationInput, KunjunganUncheckedUpdateManyWithoutLayananInput>
  }

  export type KunjunganScalarWhereInput = {
    AND?: KunjunganScalarWhereInput | KunjunganScalarWhereInput[]
    OR?: KunjunganScalarWhereInput[]
    NOT?: KunjunganScalarWhereInput | KunjunganScalarWhereInput[]
    id?: BigIntFilter<"Kunjungan"> | bigint | number
    idPasien?: BigIntFilter<"Kunjungan"> | bigint | number
    idLayanan?: BigIntFilter<"Kunjungan"> | bigint | number
    tglKunjungan?: DateTimeFilter<"Kunjungan"> | Date | string
    waktuKunjungan?: DateTimeFilter<"Kunjungan"> | Date | string
    status?: EnumStatusKunjunganFilter<"Kunjungan"> | $Enums.StatusKunjungan
    catatan?: StringFilter<"Kunjungan"> | string
    createdAt?: DateTimeNullableFilter<"Kunjungan"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Kunjungan"> | Date | string | null
  }

  export type EdukasiCreateWithoutLayananEdukasiInput = {
    id: bigint | number
    judul: string
    isi: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    admin: AdminCreateNestedOneWithoutEdukasiInput
    layanan?: LayananCreateNestedOneWithoutEdukasiInput
  }

  export type EdukasiUncheckedCreateWithoutLayananEdukasiInput = {
    id: bigint | number
    idAdmin: bigint | number
    judul: string
    isi: string
    layananId?: bigint | number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type EdukasiCreateOrConnectWithoutLayananEdukasiInput = {
    where: EdukasiWhereUniqueInput
    create: XOR<EdukasiCreateWithoutLayananEdukasiInput, EdukasiUncheckedCreateWithoutLayananEdukasiInput>
  }

  export type LayananCreateWithoutLayananEdukasiInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi?: EdukasiCreateNestedManyWithoutLayananInput
    jadwalImunisasi?: JadwalImunisasiCreateNestedManyWithoutLayananInput
    kunjungan?: KunjunganCreateNestedManyWithoutLayananInput
  }

  export type LayananUncheckedCreateWithoutLayananEdukasiInput = {
    id: bigint | number
    nama: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    edukasi?: EdukasiUncheckedCreateNestedManyWithoutLayananInput
    jadwalImunisasi?: JadwalImunisasiUncheckedCreateNestedManyWithoutLayananInput
    kunjungan?: KunjunganUncheckedCreateNestedManyWithoutLayananInput
  }

  export type LayananCreateOrConnectWithoutLayananEdukasiInput = {
    where: LayananWhereUniqueInput
    create: XOR<LayananCreateWithoutLayananEdukasiInput, LayananUncheckedCreateWithoutLayananEdukasiInput>
  }

  export type EdukasiUpsertWithoutLayananEdukasiInput = {
    update: XOR<EdukasiUpdateWithoutLayananEdukasiInput, EdukasiUncheckedUpdateWithoutLayananEdukasiInput>
    create: XOR<EdukasiCreateWithoutLayananEdukasiInput, EdukasiUncheckedCreateWithoutLayananEdukasiInput>
    where?: EdukasiWhereInput
  }

  export type EdukasiUpdateToOneWithWhereWithoutLayananEdukasiInput = {
    where?: EdukasiWhereInput
    data: XOR<EdukasiUpdateWithoutLayananEdukasiInput, EdukasiUncheckedUpdateWithoutLayananEdukasiInput>
  }

  export type EdukasiUpdateWithoutLayananEdukasiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneRequiredWithoutEdukasiNestedInput
    layanan?: LayananUpdateOneWithoutEdukasiNestedInput
  }

  export type EdukasiUncheckedUpdateWithoutLayananEdukasiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idAdmin?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    layananId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananUpsertWithoutLayananEdukasiInput = {
    update: XOR<LayananUpdateWithoutLayananEdukasiInput, LayananUncheckedUpdateWithoutLayananEdukasiInput>
    create: XOR<LayananCreateWithoutLayananEdukasiInput, LayananUncheckedCreateWithoutLayananEdukasiInput>
    where?: LayananWhereInput
  }

  export type LayananUpdateToOneWithWhereWithoutLayananEdukasiInput = {
    where?: LayananWhereInput
    data: XOR<LayananUpdateWithoutLayananEdukasiInput, LayananUncheckedUpdateWithoutLayananEdukasiInput>
  }

  export type LayananUpdateWithoutLayananEdukasiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUpdateManyWithoutLayananNestedInput
    jadwalImunisasi?: JadwalImunisasiUpdateManyWithoutLayananNestedInput
    kunjungan?: KunjunganUpdateManyWithoutLayananNestedInput
  }

  export type LayananUncheckedUpdateWithoutLayananEdukasiInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUncheckedUpdateManyWithoutLayananNestedInput
    jadwalImunisasi?: JadwalImunisasiUncheckedUpdateManyWithoutLayananNestedInput
    kunjungan?: KunjunganUncheckedUpdateManyWithoutLayananNestedInput
  }

  export type ResepCreateWithoutObatInput = {
    id: bigint | number
    jumlah: number
    aturanPakai: string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    rekamMedis: RekamMedisCreateNestedOneWithoutResepInput
  }

  export type ResepUncheckedCreateWithoutObatInput = {
    id: bigint | number
    idRm: bigint | number
    jumlah: number
    aturanPakai: string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ResepCreateOrConnectWithoutObatInput = {
    where: ResepWhereUniqueInput
    create: XOR<ResepCreateWithoutObatInput, ResepUncheckedCreateWithoutObatInput>
  }

  export type ResepCreateManyObatInputEnvelope = {
    data: ResepCreateManyObatInput | ResepCreateManyObatInput[]
    skipDuplicates?: boolean
  }

  export type StokObatCreateWithoutObatInput = {
    id: bigint | number
    tanggal: Date | string
    jumlah: number
    transaksi: $Enums.TransaksiObat
    sumberTransaksi: $Enums.SumberTransaksi
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StokObatUncheckedCreateWithoutObatInput = {
    id: bigint | number
    tanggal: Date | string
    jumlah: number
    transaksi: $Enums.TransaksiObat
    sumberTransaksi: $Enums.SumberTransaksi
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StokObatCreateOrConnectWithoutObatInput = {
    where: StokObatWhereUniqueInput
    create: XOR<StokObatCreateWithoutObatInput, StokObatUncheckedCreateWithoutObatInput>
  }

  export type StokObatCreateManyObatInputEnvelope = {
    data: StokObatCreateManyObatInput | StokObatCreateManyObatInput[]
    skipDuplicates?: boolean
  }

  export type ResepUpsertWithWhereUniqueWithoutObatInput = {
    where: ResepWhereUniqueInput
    update: XOR<ResepUpdateWithoutObatInput, ResepUncheckedUpdateWithoutObatInput>
    create: XOR<ResepCreateWithoutObatInput, ResepUncheckedCreateWithoutObatInput>
  }

  export type ResepUpdateWithWhereUniqueWithoutObatInput = {
    where: ResepWhereUniqueInput
    data: XOR<ResepUpdateWithoutObatInput, ResepUncheckedUpdateWithoutObatInput>
  }

  export type ResepUpdateManyWithWhereWithoutObatInput = {
    where: ResepScalarWhereInput
    data: XOR<ResepUpdateManyMutationInput, ResepUncheckedUpdateManyWithoutObatInput>
  }

  export type ResepScalarWhereInput = {
    AND?: ResepScalarWhereInput | ResepScalarWhereInput[]
    OR?: ResepScalarWhereInput[]
    NOT?: ResepScalarWhereInput | ResepScalarWhereInput[]
    id?: BigIntFilter<"Resep"> | bigint | number
    idRm?: BigIntFilter<"Resep"> | bigint | number
    idObat?: BigIntFilter<"Resep"> | bigint | number
    jumlah?: IntFilter<"Resep"> | number
    aturanPakai?: StringFilter<"Resep"> | string
    catatan?: StringFilter<"Resep"> | string
    createdAt?: DateTimeNullableFilter<"Resep"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Resep"> | Date | string | null
  }

  export type StokObatUpsertWithWhereUniqueWithoutObatInput = {
    where: StokObatWhereUniqueInput
    update: XOR<StokObatUpdateWithoutObatInput, StokObatUncheckedUpdateWithoutObatInput>
    create: XOR<StokObatCreateWithoutObatInput, StokObatUncheckedCreateWithoutObatInput>
  }

  export type StokObatUpdateWithWhereUniqueWithoutObatInput = {
    where: StokObatWhereUniqueInput
    data: XOR<StokObatUpdateWithoutObatInput, StokObatUncheckedUpdateWithoutObatInput>
  }

  export type StokObatUpdateManyWithWhereWithoutObatInput = {
    where: StokObatScalarWhereInput
    data: XOR<StokObatUpdateManyMutationInput, StokObatUncheckedUpdateManyWithoutObatInput>
  }

  export type StokObatScalarWhereInput = {
    AND?: StokObatScalarWhereInput | StokObatScalarWhereInput[]
    OR?: StokObatScalarWhereInput[]
    NOT?: StokObatScalarWhereInput | StokObatScalarWhereInput[]
    id?: BigIntFilter<"StokObat"> | bigint | number
    idObat?: BigIntFilter<"StokObat"> | bigint | number
    tanggal?: DateTimeFilter<"StokObat"> | Date | string
    jumlah?: IntFilter<"StokObat"> | number
    transaksi?: EnumTransaksiObatFilter<"StokObat"> | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiFilter<"StokObat"> | $Enums.SumberTransaksi
    createdAt?: DateTimeNullableFilter<"StokObat"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"StokObat"> | Date | string | null
  }

  export type KunjunganCreateWithoutPasienInput = {
    id: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    layanan: LayananCreateNestedOneWithoutKunjunganInput
    rekamMedis?: RekamMedisCreateNestedManyWithoutKunjunganInput
  }

  export type KunjunganUncheckedCreateWithoutPasienInput = {
    id: bigint | number
    idLayanan: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    rekamMedis?: RekamMedisUncheckedCreateNestedManyWithoutKunjunganInput
  }

  export type KunjunganCreateOrConnectWithoutPasienInput = {
    where: KunjunganWhereUniqueInput
    create: XOR<KunjunganCreateWithoutPasienInput, KunjunganUncheckedCreateWithoutPasienInput>
  }

  export type KunjunganCreateManyPasienInputEnvelope = {
    data: KunjunganCreateManyPasienInput | KunjunganCreateManyPasienInput[]
    skipDuplicates?: boolean
  }

  export type KunjunganUpsertWithWhereUniqueWithoutPasienInput = {
    where: KunjunganWhereUniqueInput
    update: XOR<KunjunganUpdateWithoutPasienInput, KunjunganUncheckedUpdateWithoutPasienInput>
    create: XOR<KunjunganCreateWithoutPasienInput, KunjunganUncheckedCreateWithoutPasienInput>
  }

  export type KunjunganUpdateWithWhereUniqueWithoutPasienInput = {
    where: KunjunganWhereUniqueInput
    data: XOR<KunjunganUpdateWithoutPasienInput, KunjunganUncheckedUpdateWithoutPasienInput>
  }

  export type KunjunganUpdateManyWithWhereWithoutPasienInput = {
    where: KunjunganScalarWhereInput
    data: XOR<KunjunganUpdateManyMutationInput, KunjunganUncheckedUpdateManyWithoutPasienInput>
  }

  export type RekamMedisCreateWithoutPembayaranInput = {
    id: bigint | number
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    kunjungan: KunjunganCreateNestedOneWithoutRekamMedisInput
    resep?: ResepCreateNestedManyWithoutRekamMedisInput
  }

  export type RekamMedisUncheckedCreateWithoutPembayaranInput = {
    id: bigint | number
    idKunjungan: bigint | number
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    resep?: ResepUncheckedCreateNestedManyWithoutRekamMedisInput
  }

  export type RekamMedisCreateOrConnectWithoutPembayaranInput = {
    where: RekamMedisWhereUniqueInput
    create: XOR<RekamMedisCreateWithoutPembayaranInput, RekamMedisUncheckedCreateWithoutPembayaranInput>
  }

  export type RekamMedisUpsertWithoutPembayaranInput = {
    update: XOR<RekamMedisUpdateWithoutPembayaranInput, RekamMedisUncheckedUpdateWithoutPembayaranInput>
    create: XOR<RekamMedisCreateWithoutPembayaranInput, RekamMedisUncheckedCreateWithoutPembayaranInput>
    where?: RekamMedisWhereInput
  }

  export type RekamMedisUpdateToOneWithWhereWithoutPembayaranInput = {
    where?: RekamMedisWhereInput
    data: XOR<RekamMedisUpdateWithoutPembayaranInput, RekamMedisUncheckedUpdateWithoutPembayaranInput>
  }

  export type RekamMedisUpdateWithoutPembayaranInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kunjungan?: KunjunganUpdateOneRequiredWithoutRekamMedisNestedInput
    resep?: ResepUpdateManyWithoutRekamMedisNestedInput
  }

  export type RekamMedisUncheckedUpdateWithoutPembayaranInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idKunjungan?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resep?: ResepUncheckedUpdateManyWithoutRekamMedisNestedInput
  }

  export type KunjunganCreateWithoutRekamMedisInput = {
    id: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    pasien: PasienCreateNestedOneWithoutKunjunganInput
    layanan: LayananCreateNestedOneWithoutKunjunganInput
  }

  export type KunjunganUncheckedCreateWithoutRekamMedisInput = {
    id: bigint | number
    idPasien: bigint | number
    idLayanan: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type KunjunganCreateOrConnectWithoutRekamMedisInput = {
    where: KunjunganWhereUniqueInput
    create: XOR<KunjunganCreateWithoutRekamMedisInput, KunjunganUncheckedCreateWithoutRekamMedisInput>
  }

  export type ResepCreateWithoutRekamMedisInput = {
    id: bigint | number
    jumlah: number
    aturanPakai: string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    obat: ObatCreateNestedOneWithoutResepInput
  }

  export type ResepUncheckedCreateWithoutRekamMedisInput = {
    id: bigint | number
    idObat: bigint | number
    jumlah: number
    aturanPakai: string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ResepCreateOrConnectWithoutRekamMedisInput = {
    where: ResepWhereUniqueInput
    create: XOR<ResepCreateWithoutRekamMedisInput, ResepUncheckedCreateWithoutRekamMedisInput>
  }

  export type ResepCreateManyRekamMedisInputEnvelope = {
    data: ResepCreateManyRekamMedisInput | ResepCreateManyRekamMedisInput[]
    skipDuplicates?: boolean
  }

  export type PembayaranCreateWithoutRekamMedisInput = {
    id: bigint | number
    tglBayar: Date | string
    totalBayar: number
    metode: string
    status: $Enums.StatusPembayaran
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type PembayaranUncheckedCreateWithoutRekamMedisInput = {
    id: bigint | number
    tglBayar: Date | string
    totalBayar: number
    metode: string
    status: $Enums.StatusPembayaran
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type PembayaranCreateOrConnectWithoutRekamMedisInput = {
    where: PembayaranWhereUniqueInput
    create: XOR<PembayaranCreateWithoutRekamMedisInput, PembayaranUncheckedCreateWithoutRekamMedisInput>
  }

  export type PembayaranCreateManyRekamMedisInputEnvelope = {
    data: PembayaranCreateManyRekamMedisInput | PembayaranCreateManyRekamMedisInput[]
    skipDuplicates?: boolean
  }

  export type KunjunganUpsertWithoutRekamMedisInput = {
    update: XOR<KunjunganUpdateWithoutRekamMedisInput, KunjunganUncheckedUpdateWithoutRekamMedisInput>
    create: XOR<KunjunganCreateWithoutRekamMedisInput, KunjunganUncheckedCreateWithoutRekamMedisInput>
    where?: KunjunganWhereInput
  }

  export type KunjunganUpdateToOneWithWhereWithoutRekamMedisInput = {
    where?: KunjunganWhereInput
    data: XOR<KunjunganUpdateWithoutRekamMedisInput, KunjunganUncheckedUpdateWithoutRekamMedisInput>
  }

  export type KunjunganUpdateWithoutRekamMedisInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pasien?: PasienUpdateOneRequiredWithoutKunjunganNestedInput
    layanan?: LayananUpdateOneRequiredWithoutKunjunganNestedInput
  }

  export type KunjunganUncheckedUpdateWithoutRekamMedisInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idPasien?: BigIntFieldUpdateOperationsInput | bigint | number
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResepUpsertWithWhereUniqueWithoutRekamMedisInput = {
    where: ResepWhereUniqueInput
    update: XOR<ResepUpdateWithoutRekamMedisInput, ResepUncheckedUpdateWithoutRekamMedisInput>
    create: XOR<ResepCreateWithoutRekamMedisInput, ResepUncheckedCreateWithoutRekamMedisInput>
  }

  export type ResepUpdateWithWhereUniqueWithoutRekamMedisInput = {
    where: ResepWhereUniqueInput
    data: XOR<ResepUpdateWithoutRekamMedisInput, ResepUncheckedUpdateWithoutRekamMedisInput>
  }

  export type ResepUpdateManyWithWhereWithoutRekamMedisInput = {
    where: ResepScalarWhereInput
    data: XOR<ResepUpdateManyMutationInput, ResepUncheckedUpdateManyWithoutRekamMedisInput>
  }

  export type PembayaranUpsertWithWhereUniqueWithoutRekamMedisInput = {
    where: PembayaranWhereUniqueInput
    update: XOR<PembayaranUpdateWithoutRekamMedisInput, PembayaranUncheckedUpdateWithoutRekamMedisInput>
    create: XOR<PembayaranCreateWithoutRekamMedisInput, PembayaranUncheckedCreateWithoutRekamMedisInput>
  }

  export type PembayaranUpdateWithWhereUniqueWithoutRekamMedisInput = {
    where: PembayaranWhereUniqueInput
    data: XOR<PembayaranUpdateWithoutRekamMedisInput, PembayaranUncheckedUpdateWithoutRekamMedisInput>
  }

  export type PembayaranUpdateManyWithWhereWithoutRekamMedisInput = {
    where: PembayaranScalarWhereInput
    data: XOR<PembayaranUpdateManyMutationInput, PembayaranUncheckedUpdateManyWithoutRekamMedisInput>
  }

  export type PembayaranScalarWhereInput = {
    AND?: PembayaranScalarWhereInput | PembayaranScalarWhereInput[]
    OR?: PembayaranScalarWhereInput[]
    NOT?: PembayaranScalarWhereInput | PembayaranScalarWhereInput[]
    id?: BigIntFilter<"Pembayaran"> | bigint | number
    idRm?: BigIntFilter<"Pembayaran"> | bigint | number
    tglBayar?: DateTimeFilter<"Pembayaran"> | Date | string
    totalBayar?: IntFilter<"Pembayaran"> | number
    metode?: StringFilter<"Pembayaran"> | string
    status?: EnumStatusPembayaranFilter<"Pembayaran"> | $Enums.StatusPembayaran
    createdAt?: DateTimeNullableFilter<"Pembayaran"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Pembayaran"> | Date | string | null
  }

  export type RekamMedisCreateWithoutResepInput = {
    id: bigint | number
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    kunjungan: KunjunganCreateNestedOneWithoutRekamMedisInput
    pembayaran?: PembayaranCreateNestedManyWithoutRekamMedisInput
  }

  export type RekamMedisUncheckedCreateWithoutResepInput = {
    id: bigint | number
    idKunjungan: bigint | number
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    pembayaran?: PembayaranUncheckedCreateNestedManyWithoutRekamMedisInput
  }

  export type RekamMedisCreateOrConnectWithoutResepInput = {
    where: RekamMedisWhereUniqueInput
    create: XOR<RekamMedisCreateWithoutResepInput, RekamMedisUncheckedCreateWithoutResepInput>
  }

  export type ObatCreateWithoutResepInput = {
    id: bigint | number
    nama: string
    stok: number
    harga: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    stokObat?: StokObatCreateNestedManyWithoutObatInput
  }

  export type ObatUncheckedCreateWithoutResepInput = {
    id: bigint | number
    nama: string
    stok: number
    harga: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    stokObat?: StokObatUncheckedCreateNestedManyWithoutObatInput
  }

  export type ObatCreateOrConnectWithoutResepInput = {
    where: ObatWhereUniqueInput
    create: XOR<ObatCreateWithoutResepInput, ObatUncheckedCreateWithoutResepInput>
  }

  export type RekamMedisUpsertWithoutResepInput = {
    update: XOR<RekamMedisUpdateWithoutResepInput, RekamMedisUncheckedUpdateWithoutResepInput>
    create: XOR<RekamMedisCreateWithoutResepInput, RekamMedisUncheckedCreateWithoutResepInput>
    where?: RekamMedisWhereInput
  }

  export type RekamMedisUpdateToOneWithWhereWithoutResepInput = {
    where?: RekamMedisWhereInput
    data: XOR<RekamMedisUpdateWithoutResepInput, RekamMedisUncheckedUpdateWithoutResepInput>
  }

  export type RekamMedisUpdateWithoutResepInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kunjungan?: KunjunganUpdateOneRequiredWithoutRekamMedisNestedInput
    pembayaran?: PembayaranUpdateManyWithoutRekamMedisNestedInput
  }

  export type RekamMedisUncheckedUpdateWithoutResepInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idKunjungan?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pembayaran?: PembayaranUncheckedUpdateManyWithoutRekamMedisNestedInput
  }

  export type ObatUpsertWithoutResepInput = {
    update: XOR<ObatUpdateWithoutResepInput, ObatUncheckedUpdateWithoutResepInput>
    create: XOR<ObatCreateWithoutResepInput, ObatUncheckedCreateWithoutResepInput>
    where?: ObatWhereInput
  }

  export type ObatUpdateToOneWithWhereWithoutResepInput = {
    where?: ObatWhereInput
    data: XOR<ObatUpdateWithoutResepInput, ObatUncheckedUpdateWithoutResepInput>
  }

  export type ObatUpdateWithoutResepInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stokObat?: StokObatUpdateManyWithoutObatNestedInput
  }

  export type ObatUncheckedUpdateWithoutResepInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stokObat?: StokObatUncheckedUpdateManyWithoutObatNestedInput
  }

  export type ObatCreateWithoutStokObatInput = {
    id: bigint | number
    nama: string
    stok: number
    harga: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    resep?: ResepCreateNestedManyWithoutObatInput
  }

  export type ObatUncheckedCreateWithoutStokObatInput = {
    id: bigint | number
    nama: string
    stok: number
    harga: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    resep?: ResepUncheckedCreateNestedManyWithoutObatInput
  }

  export type ObatCreateOrConnectWithoutStokObatInput = {
    where: ObatWhereUniqueInput
    create: XOR<ObatCreateWithoutStokObatInput, ObatUncheckedCreateWithoutStokObatInput>
  }

  export type ObatUpsertWithoutStokObatInput = {
    update: XOR<ObatUpdateWithoutStokObatInput, ObatUncheckedUpdateWithoutStokObatInput>
    create: XOR<ObatCreateWithoutStokObatInput, ObatUncheckedCreateWithoutStokObatInput>
    where?: ObatWhereInput
  }

  export type ObatUpdateToOneWithWhereWithoutStokObatInput = {
    where?: ObatWhereInput
    data: XOR<ObatUpdateWithoutStokObatInput, ObatUncheckedUpdateWithoutStokObatInput>
  }

  export type ObatUpdateWithoutStokObatInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resep?: ResepUpdateManyWithoutObatNestedInput
  }

  export type ObatUncheckedUpdateWithoutStokObatInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    nama?: StringFieldUpdateOperationsInput | string
    stok?: IntFieldUpdateOperationsInput | number
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resep?: ResepUncheckedUpdateManyWithoutObatNestedInput
  }

  export type EdukasiCreateManyAdminInput = {
    id: bigint | number
    judul: string
    isi: string
    layananId?: bigint | number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type EdukasiUpdateWithoutAdminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    layananEdukasi?: LayananEdukasiUpdateManyWithoutEdukasiNestedInput
    layanan?: LayananUpdateOneWithoutEdukasiNestedInput
  }

  export type EdukasiUncheckedUpdateWithoutAdminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    layananId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    layananEdukasi?: LayananEdukasiUncheckedUpdateManyWithoutEdukasiNestedInput
  }

  export type EdukasiUncheckedUpdateManyWithoutAdminInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    layananId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananEdukasiCreateManyEdukasiInput = {
    idLayanan: bigint | number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LayananEdukasiUpdateWithoutEdukasiInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    layanan?: LayananUpdateOneRequiredWithoutLayananEdukasiNestedInput
  }

  export type LayananEdukasiUncheckedUpdateWithoutEdukasiInput = {
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananEdukasiUncheckedUpdateManyWithoutEdukasiInput = {
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RekamMedisCreateManyKunjunganInput = {
    id: bigint | number
    keluhan: string
    diagnosa: string
    tindakan: string
    catatan: string
    status: $Enums.StatusRekam
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type RekamMedisUpdateWithoutKunjunganInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resep?: ResepUpdateManyWithoutRekamMedisNestedInput
    pembayaran?: PembayaranUpdateManyWithoutRekamMedisNestedInput
  }

  export type RekamMedisUncheckedUpdateWithoutKunjunganInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resep?: ResepUncheckedUpdateManyWithoutRekamMedisNestedInput
    pembayaran?: PembayaranUncheckedUpdateManyWithoutRekamMedisNestedInput
  }

  export type RekamMedisUncheckedUpdateManyWithoutKunjunganInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    keluhan?: StringFieldUpdateOperationsInput | string
    diagnosa?: StringFieldUpdateOperationsInput | string
    tindakan?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusRekamFieldUpdateOperationsInput | $Enums.StatusRekam
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EdukasiCreateManyLayananInput = {
    id: bigint | number
    idAdmin: bigint | number
    judul: string
    isi: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type LayananEdukasiCreateManyLayananInput = {
    idEdukasi: bigint | number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type JadwalImunisasiCreateManyLayananInput = {
    id: bigint | number
    tanggal: Date | string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type KunjunganCreateManyLayananInput = {
    id: bigint | number
    idPasien: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type EdukasiUpdateWithoutLayananInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: AdminUpdateOneRequiredWithoutEdukasiNestedInput
    layananEdukasi?: LayananEdukasiUpdateManyWithoutEdukasiNestedInput
  }

  export type EdukasiUncheckedUpdateWithoutLayananInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idAdmin?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    layananEdukasi?: LayananEdukasiUncheckedUpdateManyWithoutEdukasiNestedInput
  }

  export type EdukasiUncheckedUpdateManyWithoutLayananInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idAdmin?: BigIntFieldUpdateOperationsInput | bigint | number
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananEdukasiUpdateWithoutLayananInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    edukasi?: EdukasiUpdateOneRequiredWithoutLayananEdukasiNestedInput
  }

  export type LayananEdukasiUncheckedUpdateWithoutLayananInput = {
    idEdukasi?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LayananEdukasiUncheckedUpdateManyWithoutLayananInput = {
    idEdukasi?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JadwalImunisasiUpdateWithoutLayananInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JadwalImunisasiUncheckedUpdateWithoutLayananInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type JadwalImunisasiUncheckedUpdateManyWithoutLayananInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KunjunganUpdateWithoutLayananInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pasien?: PasienUpdateOneRequiredWithoutKunjunganNestedInput
    rekamMedis?: RekamMedisUpdateManyWithoutKunjunganNestedInput
  }

  export type KunjunganUncheckedUpdateWithoutLayananInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idPasien?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rekamMedis?: RekamMedisUncheckedUpdateManyWithoutKunjunganNestedInput
  }

  export type KunjunganUncheckedUpdateManyWithoutLayananInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idPasien?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResepCreateManyObatInput = {
    id: bigint | number
    idRm: bigint | number
    jumlah: number
    aturanPakai: string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type StokObatCreateManyObatInput = {
    id: bigint | number
    tanggal: Date | string
    jumlah: number
    transaksi: $Enums.TransaksiObat
    sumberTransaksi: $Enums.SumberTransaksi
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ResepUpdateWithoutObatInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    jumlah?: IntFieldUpdateOperationsInput | number
    aturanPakai?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rekamMedis?: RekamMedisUpdateOneRequiredWithoutResepNestedInput
  }

  export type ResepUncheckedUpdateWithoutObatInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idRm?: BigIntFieldUpdateOperationsInput | bigint | number
    jumlah?: IntFieldUpdateOperationsInput | number
    aturanPakai?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResepUncheckedUpdateManyWithoutObatInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idRm?: BigIntFieldUpdateOperationsInput | bigint | number
    jumlah?: IntFieldUpdateOperationsInput | number
    aturanPakai?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StokObatUpdateWithoutObatInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    transaksi?: EnumTransaksiObatFieldUpdateOperationsInput | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiFieldUpdateOperationsInput | $Enums.SumberTransaksi
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StokObatUncheckedUpdateWithoutObatInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    transaksi?: EnumTransaksiObatFieldUpdateOperationsInput | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiFieldUpdateOperationsInput | $Enums.SumberTransaksi
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StokObatUncheckedUpdateManyWithoutObatInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jumlah?: IntFieldUpdateOperationsInput | number
    transaksi?: EnumTransaksiObatFieldUpdateOperationsInput | $Enums.TransaksiObat
    sumberTransaksi?: EnumSumberTransaksiFieldUpdateOperationsInput | $Enums.SumberTransaksi
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KunjunganCreateManyPasienInput = {
    id: bigint | number
    idLayanan: bigint | number
    tglKunjungan: Date | string
    waktuKunjungan: Date | string
    status: $Enums.StatusKunjungan
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type KunjunganUpdateWithoutPasienInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    layanan?: LayananUpdateOneRequiredWithoutKunjunganNestedInput
    rekamMedis?: RekamMedisUpdateManyWithoutKunjunganNestedInput
  }

  export type KunjunganUncheckedUpdateWithoutPasienInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rekamMedis?: RekamMedisUncheckedUpdateManyWithoutKunjunganNestedInput
  }

  export type KunjunganUncheckedUpdateManyWithoutPasienInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idLayanan?: BigIntFieldUpdateOperationsInput | bigint | number
    tglKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuKunjungan?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStatusKunjunganFieldUpdateOperationsInput | $Enums.StatusKunjungan
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResepCreateManyRekamMedisInput = {
    id: bigint | number
    idObat: bigint | number
    jumlah: number
    aturanPakai: string
    catatan: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type PembayaranCreateManyRekamMedisInput = {
    id: bigint | number
    tglBayar: Date | string
    totalBayar: number
    metode: string
    status: $Enums.StatusPembayaran
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type ResepUpdateWithoutRekamMedisInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    jumlah?: IntFieldUpdateOperationsInput | number
    aturanPakai?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    obat?: ObatUpdateOneRequiredWithoutResepNestedInput
  }

  export type ResepUncheckedUpdateWithoutRekamMedisInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idObat?: BigIntFieldUpdateOperationsInput | bigint | number
    jumlah?: IntFieldUpdateOperationsInput | number
    aturanPakai?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResepUncheckedUpdateManyWithoutRekamMedisInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    idObat?: BigIntFieldUpdateOperationsInput | bigint | number
    jumlah?: IntFieldUpdateOperationsInput | number
    aturanPakai?: StringFieldUpdateOperationsInput | string
    catatan?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PembayaranUpdateWithoutRekamMedisInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tglBayar?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBayar?: IntFieldUpdateOperationsInput | number
    metode?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PembayaranUncheckedUpdateWithoutRekamMedisInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tglBayar?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBayar?: IntFieldUpdateOperationsInput | number
    metode?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PembayaranUncheckedUpdateManyWithoutRekamMedisInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tglBayar?: DateTimeFieldUpdateOperationsInput | Date | string
    totalBayar?: IntFieldUpdateOperationsInput | number
    metode?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusPembayaranFieldUpdateOperationsInput | $Enums.StatusPembayaran
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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