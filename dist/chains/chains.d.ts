import type { TChain, TToken } from "../types";
/**
 * Get all supported chains
 *
 * @returns `Promise<TChain>`
 */
export declare const getChains: () => Promise<TChain[]>;
/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TChain>`
 */
export declare const getChain: (chainId: number) => Promise<TChain>;
/**
 *
 * @returns `Promise<TToken>`
 */
export declare const getTokens: () => Promise<TToken[]>;
/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TToken>`
 */
export declare const getTokensByChainId: (chainId: number) => Promise<TToken[]>;
