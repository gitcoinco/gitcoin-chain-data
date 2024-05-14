import { useEffect, useMemo, useState } from "react";
import { fetchChainData, fetchChainDataById } from "./chains";
import type { TChainRecord } from "../types";

// Custom hook to manage chain data
export const useChainData = (chainId?: number) => {
  const [chains, setChains] = useState<TChainRecord | null>(null);

  // Fetch chains data
  useEffect(() => {
    if (chainId) {
      const fetchChains = async () => {
        const data = await fetchChainDataById(chainId);
        setChains(data);
      };

      fetchChains();
    } else {
      const fetchChains = async () => {
        const data = await fetchChainData();
        setChains(data);
      };

      fetchChains();
    }
  }, []);

  const getChains = useMemo(() => {
    return chains;
  }, [chains]);

  const getChain = useMemo(() => {
    if (chainId !== undefined && chains) {
      return fetchChainDataById(chainId);
    }
    return null;
  }, [chainId, chains]);

  return {
    getChains,
    getChain,
  };
};
