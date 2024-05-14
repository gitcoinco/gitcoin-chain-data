import { fetchChainData, chains as supportedChains } from "./chains/chains";

// All supported chains
export const chains = supportedChains;

// Get all supported chains
export const getChains = () => {
  return chains;
};

// Get a specific chain by its ID
export const getChain = (chainId: number) => {
  return chains[chainId];
};

// Get all supported tokens for a specific chain by its ID
export const getTokensByChainId = (chainId: number) => {
  return chains[chainId].tokens;
};

// Get all subscriptions
export const getSubscriptions = () => {
  const subs = chains.map((chain) => chain.subscriptions);

  return subs.flat();
};

// Get all subscriptions for a specific chain by its ID
export const getSubscriptionsByChainId = (chainId: number) => {
  return chains[chainId].subscriptions;
};

fetchChainData();

