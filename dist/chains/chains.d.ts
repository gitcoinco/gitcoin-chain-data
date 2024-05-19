import type { TChainRecord, TTokenRecord } from "../types";
/**
 * Fetch chains for all supported networks.
 *
 * @returns `Promise<TChainRecord>`
 */
export declare const fetchChainData: () => Promise<TChainRecord>;
/**
 * Fetch a specific chains data by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TChainRecord>`
 */
export declare const fetchChainDataById: (chainId: number) => Promise<TChainRecord>;
export declare const getChains: () => Promise<TChainRecord>;
/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TChainRecord>`
 */
export declare const getChain: (chainId: number) => Promise<TChainRecord>;
/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TTokenRecord>`
 */
export declare const getTokensByChainId: (chainId: number) => Promise<TTokenRecord>;
/**
 * Get all subscriptions
 *
 * @returns `Promise<(TSubscription | undefined)[]>`
 */
export declare const getSubscriptions: () => Promise<(import("../types").TSubscription | undefined)[]>;
/**
 * Get all subscriptions for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<(TSubscription | undefined)[]>`
 */
export declare const getSubscriptionsByChainId: (chainId: number) => Promise<(import("../types").TSubscription | undefined)[]>;
