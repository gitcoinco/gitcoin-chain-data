import { useMemo } from "react";
import { subscriptions } from "./subscriptions";

// Mockup data for subscriptions, replace with actual indexerSubscriptions import
const indexerSubscriptions = subscriptions;

export const useSubscriptionData = (chainId?: number) => {
  const subscriptions = indexerSubscriptions;

  const getSubscriptions = useMemo(() => {
    return subscriptions;
  }, [subscriptions]);

  const getSubscriptionsByChainId = useMemo(() => {
    if (chainId !== undefined && subscriptions[chainId]) {
      return subscriptions[chainId];
    }
    return null;
  }, [chainId, subscriptions]);

  return {
    getSubscriptions,
    getSubscriptionsByChainId,
  };
};
