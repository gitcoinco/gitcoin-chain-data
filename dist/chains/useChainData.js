import { fetchChainData, fetchChainDataById } from "./chains";
/**
 * Custom hook to manage chain data
 *
 * @returns
 */
export const useChainData = () => {
    /**
     * Get all networks and their data.
     *
     * @returns `Promise<TChainRecord>`
     */
    const getChains = async () => {
        return await fetchChainData();
    };
    /**
     * Get a specific chain by its ID
     *
     * @param chainId The ID of the network to fetch data for.
     * @returns `Promise<TChainRecord>`
     */
    const getChain = async (chainId) => {
        return await fetchChainDataById(chainId);
    };
    /**
     * Get all supported tokens for a specific chain by its ID
     *
     * @param chainId The ID of the network to fetch data for.
     * @returns `Promise<TTokenRecord>`
     */
    const getTokensByChainId = async (chainId) => {
        const chainData = await fetchChainDataById(chainId);
        const tokens = {
            payout: [],
            indexer: [],
            donation: [],
        };
        chainData?.forEach((chain) => {
            tokens.payout.push(...chain.tokens.payout);
            tokens.indexer.push(...chain.tokens.indexer);
            tokens.donation.push(...chain.tokens.donation);
        });
        return tokens;
    };
    /**
     * Get all subscriptions
     *
     * @returns `Promise<(TSubscription | undefined)[]>`
     */
    const getSubscriptions = async () => {
        const chainData = await fetchChainData();
        const subs = chainData.map((chain) => chain.subscriptions);
        return subs.flat();
    };
    /**
     * Get all subscriptions for a specific chain by its ID
     *
     * @param chainId The ID of the network to fetch data for.
     * @returns `Promise<(TSubscription | undefined)[]>`
     */
    const getSubscriptionsByChainId = async (chainId) => {
        const chain = await fetchChainDataById(chainId);
        return chain.map((c) => c.subscriptions).flat();
    };
    return {
        getChains,
        getChain,
        getTokensByChainId,
        getSubscriptions,
        getSubscriptionsByChainId,
    };
};
