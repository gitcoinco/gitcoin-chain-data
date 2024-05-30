import type { TChain, TToken } from "../types";
import { Address } from "viem";
/**
 * Fetch chains for all supported networks.
 *
 * @returns `TChain`
 */
export declare const getChains: () => TChain[];
/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TChain`
 */
export declare const getChainById: (chainId: number) => TChain;
/**
 *
 * @returns `TToken`
 */
/**
 * Fetches tokens from all chains.
 *
 * @returns `Record<ChainId, TToken[]>`
 */
export declare const getTokens: () => Record<number, TToken[]>;
/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TToken`
 */
export declare const getTokensByChainId: (chainId: number) => TToken[];
/**
 * Get all supported tokens for a specific chain by its ID and address
 *
 * @param chainId The ID of the network to fetch data for.
 * @param address The address of the token to fetch.
 * @returns `TToken`
 */
export declare const getTokenByChainIdAndAddress: (chainId: number, address: Address) => TToken;
