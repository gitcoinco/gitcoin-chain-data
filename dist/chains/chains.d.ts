import type { TChain, TToken } from "../types";
import { Address } from "viem";
/**
 * Get all supported chains
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
 * @returns `TToken]>`
 */
export declare const getTokens: () => TToken[];
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
