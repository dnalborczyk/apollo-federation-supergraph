import type { GraphQLResolveInfo } from 'graphql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X]
} & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  _FieldSet: any
}

export type DeliveryEstimates = {
  readonly __typename?: 'DeliveryEstimates'
  readonly estimatedDelivery?: Maybe<Scalars['String']>
  readonly fastestDelivery?: Maybe<Scalars['String']>
}

export type Product = {
  readonly __typename?: 'Product'
  readonly delivery?: Maybe<DeliveryEstimates>
  readonly dimensions?: Maybe<ProductDimension>
  readonly id: Scalars['ID']
}

export type ProductDeliveryArgs = {
  zip?: Maybe<Scalars['String']>
}

export type ProductDimension = {
  readonly __typename?: 'ProductDimension'
  readonly size?: Maybe<Scalars['String']>
  readonly weight?: Maybe<Scalars['Float']>
}

export type WithIndex<TObject> = TObject & Record<string, any>
export type ResolversObject<TObject> = WithIndex<TObject>

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ReferenceResolver<TResult, TReference, TContext> = (
  reference: TReference,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>
type NullableCheck<T, S> = Maybe<T> extends T
  ? Maybe<ListCheck<NonNullable<T>, S>>
  : ListCheck<T, S>
type ListCheck<T, S> = T extends (infer U)[]
  ? NullableCheck<U, S>[]
  : GraphQLRecursivePick<T, S>
export type GraphQLRecursivePick<T, S> = {
  [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]>
}

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  DeliveryEstimates: ResolverTypeWrapper<DeliveryEstimates>
  String: ResolverTypeWrapper<Scalars['String']>
  Product: ResolverTypeWrapper<Product>
  ID: ResolverTypeWrapper<Scalars['ID']>
  ProductDimension: ResolverTypeWrapper<ProductDimension>
  Float: ResolverTypeWrapper<Scalars['Float']>
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
}>

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  DeliveryEstimates: DeliveryEstimates
  String: Scalars['String']
  Product: Product
  ID: Scalars['ID']
  ProductDimension: ProductDimension
  Float: Scalars['Float']
  Boolean: Scalars['Boolean']
}>

export type TagDirectiveArgs = {
  name: Scalars['String']
}

export type TagDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = TagDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>

export type DeliveryEstimatesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['DeliveryEstimates'] = ResolversParentTypes['DeliveryEstimates'],
> = ResolversObject<{
  estimatedDelivery?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  fastestDelivery?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product'],
> = ResolversObject<{
  __resolveReference?: ReferenceResolver<
    Maybe<ResolversTypes['Product']>,
    { __typename: 'Product' } & GraphQLRecursivePick<ParentType, { id: true }>,
    ContextType
  >
  delivery?: Resolver<
    Maybe<ResolversTypes['DeliveryEstimates']>,
    { __typename: 'Product' } & GraphQLRecursivePick<ParentType, { id: true }> &
      GraphQLRecursivePick<
        ParentType,
        { dimensions: { size: true; weight: true } }
      >,
    ContextType,
    RequireFields<ProductDeliveryArgs, never>
  >

  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type ProductDimensionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['ProductDimension'] = ResolversParentTypes['ProductDimension'],
> = ResolversObject<{
  size?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  weight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}>

export type Resolvers<ContextType = any> = ResolversObject<{
  DeliveryEstimates?: DeliveryEstimatesResolvers<ContextType>
  Product?: ProductResolvers<ContextType>
  ProductDimension?: ProductDimensionResolvers<ContextType>
}>

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  tag?: TagDirectiveResolver<any, any, ContextType>
}>
