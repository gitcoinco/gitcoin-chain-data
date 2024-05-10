import { fetchChains, chains as supportedChains } from "./chains/chains";
import { fetchTokens, tokens as supportedTokens } from "./tokens/tokens";
import { fetchSubscriptions, subscriptions as supportedSubscriptions } from "./subscriptions/subscriptions";

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

// Get the RPC URL for a specific chain by its ID
export const getChainRpc = (chainId: number) => {
  const chain = getChain(chainId);
  return chain?.rpc;
};

// Get the timestamp from which prices are available for a specific chain by its ID
export const getChainPricesFromTimestamp = (chainId: number) => {
  const chain = getChain(chainId);
  return chain?.pricesFromTimestamp;
};

// Get the name of a specific chain by its ID
export const getChainName = (chainId: number) => {
  const chain = getChain(chainId);
  return chain?.name;
};

// All supported tokens
export const tokens = supportedTokens;

export const getTokens = () => {
  return tokens;
};

// Get all supported tokens for a specific chain by its ID
export const getTokensByChainId = (chainId: number) => {
  return tokens[chainId];
};

// All subscriptions
export const subscriptions = supportedSubscriptions;

// Get all subscriptions
export const getSubscriptions = () => {
  return subscriptions;
};

// Get all subscriptions for a specific chain by its ID
export const getSubscriptionsByChainId = (chainId: number) => {
  return subscriptions[chainId];
};

// fetchSubscriptions();
// fetchTokens();
fetchChains();