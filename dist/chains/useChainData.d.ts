import type { TChainRecord, TTokenRecord } from "../types";
/**
 * Custom hook to manage chain data
 *
 * @returns
 */
export declare const useChainData: () => {
    getChains: () => Promise<TChainRecord>;
    getChain: (chainId: number) => Promise<TChainRecord>;
    getTokensByChainId: (chainId: number) => Promise<TTokenRecord>;
    getSubscriptions: () => Promise<(import("../types").TSubscription | undefined)[]>;
    getSubscriptionsByChainId: (chainId: number) => Promise<(import("../types").TSubscription | undefined)[]>;
};
