import { useMemo } from "react";
import { chains } from "./chains";

const supportedChains = chains;

// Custom hook to manage chain data
export const useChainData = (chainId?: number) => {
  const chains = supportedChains;

  const getChains = useMemo(() => {
    return chains;
  }, [chains]);

  const getChain = useMemo(() => {
    if (chainId !== undefined && chains[chainId]) {
      return chains[chainId];
    }
    return null;
  }, [chainId, chains]);

  const getChainRpc = useMemo(() => {
    const chain = getChain;
    return chain?.rpc || null;
  }, [getChain]);

  const getChainPricesFromTimestamp = useMemo(() => {
    const chain = getChain;
    return chain?.pricesFromTimestamp || null;
  }, [getChain]);

  const getChainName = useMemo(() => {
    const chain = getChain;
    return chain?.name || null;
  }, [getChain]);

  return {
    getChains,
    getChain,
    getChainRpc,
    getChainPricesFromTimestamp,
    getChainName,
  };
};
