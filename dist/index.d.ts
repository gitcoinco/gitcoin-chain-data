import { Address } from 'viem';

type CoingeckoSupportedChainId = 1 | 10 | 1088 | 250 | 42161 | 43114 | 713715 | 1329 | 42 | 42220;
type TToken = {
    code: string;
    icon?: string;
    address: Address;
    decimals: number;
    canVote: boolean;
    priceSource?: {
        chainId: CoingeckoSupportedChainId;
        address: Address;
    };
    redstoneTokenId: string;
    voteAmountCap?: bigint;
    permitVersion?: string;
    default?: boolean;
};
type TSubscription = {
    address: Address;
    contractName: string;
    fromBlock?: number;
    eventsRenames?: Record<string, string> | undefined;
};
type TChain = {
    rpc: string;
    blockExplorer: string;
    name: string;
    prettyName: string;
    icon: string;
    type: TNetworkType;
    id: number;
    contracts: TContracts;
    pricesFromTimestamp?: number;
    maxGetLogsRange?: number;
    tokens: TToken[];
    subscriptions: TSubscription[];
};
type TContracts = {
    multiRoundCheckout: Address;
    quadraticFunding: Address;
    directGrants: Address;
};
type TNetworkType = "mainnet" | "testnet";

/**
 * Fetch chains for all supported networks.
 *
 * @returns `TChain`
 */
declare const getChains: () => TChain[];
/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TChain`
 */
declare const getChainById: (chainId: number) => TChain;
/**
 *
 * @returns `TToken`
 */
/**
 * Fetches tokens from all chains.
 *
 * @returns `Record<ChainId, TToken[]>`
 */
declare const getTokens: () => Record<number, TToken[]>;
/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TToken`
 */
declare const getTokensByChainId: (chainId: number) => TToken[];
/**
 * Get all supported tokens for a specific chain by its ID and address
 *
 * @param chainId The ID of the network to fetch data for.
 * @param address The address of the token to fetch.
 * @returns `TToken`
 */
declare const getTokenByChainIdAndAddress: (chainId: number, address: Address) => TToken;

export { type TChain, type TContracts, type TNetworkType, type TSubscription, type TToken, getChainById, getChains, getTokenByChainIdAndAddress, getTokens, getTokensByChainId };
