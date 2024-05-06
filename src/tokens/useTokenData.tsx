import { useMemo } from "react";
import { tokens } from "./tokens";

const supportedTokens = tokens;

export const useTokenData = (chainId?: number) => {
  const tokens = supportedTokens;

  const getTokens = useMemo(() => {
    return tokens;
  }, [tokens]);

  const getTokensByChainId = useMemo(() => {
    if (chainId !== undefined && tokens[chainId]) {
      return tokens[chainId];
    }
    return null;
  }, [chainId, tokens]);

  return {
    getTokens,
    getTokensByChainId,
  };
};
