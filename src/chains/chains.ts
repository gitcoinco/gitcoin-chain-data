import {
  arbitrum,
  // arbitrumSepolia,
  avalanche,
  avalancheFuji,
  base,
  celo,
  celoAlfajores,
  fantom,
  lukso,
  luksoTestnet,
  mainnet,
  optimism,
  // optimismSepolia,
  pgn,
  // pgnTestnet,
  polygon,
  polygonMumbai,
  scroll,
  seiDevnet,
  // scrollSepolia,
  sepolia,
  zkSync,
  zkSyncSepoliaTestnet,
} from "viem/chains";
import type { TChain, TToken } from "../types";
import axios from "axios";
import { Address } from "viem";
import * as fs from "fs";
import * as path from "path";

const supportedChainIds = [
  mainnet.id,
  sepolia.id,
  lukso.id,
  luksoTestnet.id,
  polygon.id,
  polygonMumbai.id,
  fantom.id,
  zkSyncSepoliaTestnet.id,
  zkSync.id,
  base.id,
  optimism.id,
  // optimismSepolia.id,
  celo.id,
  celoAlfajores.id,
  arbitrum.id,
  // arbitrumSepolia.id,
  avalanche.id,
  avalancheFuji.id,
  scroll.id,
  // scrollSepolia.id,
  pgn.id,
  // pgnTestnet.id,
  seiDevnet.id,
];

/**
 * Fetch chains for all supported networks.
 *
 * @returns `TChain`
 */
const fetchChainData = (): TChain[] => {
  /** Initialize a default empty response or your preferred default structure */
  let chains: TChain[] = [];

  for (const chainId of supportedChainIds) {
    let response: TChain;
    try {
      const filePath = path.join(
        __dirname,
        `../dist/data/chains/${chainId}/chain.json`
      );
      const fileContent = fs.readFileSync(filePath, "utf-8");
      response = JSON.parse(fileContent) as TChain;
    } catch (error) {
      console.error("Error fetching chains", error);

      return [] as TChain[];
    }

    chains.push(response);

    console.log("Fetching chains response", {
      response: chains,
    });
  }

  return chains;
};

/**
 * Fetch a specific chains data by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TChain`
 */
const fetchChainDataById = (chainId: number): TChain => {
  /** Initialize a default empty response or preferred default structure */
  let chain: TChain;

  try {
    const filePath = path.join(
      __dirname,
      `../dist/data/chains/${chainId}/chain.json`
    );
    const fileContent = fs.readFileSync(filePath, "utf-8");
    chain = JSON.parse(fileContent) as TChain;

    console.log("Fetching chains response", {
      response: chain,
    });

    return chain;
  } catch (error) {
    console.error("Error fetching chains", error);

    return {} as TChain; /** This can be null or a default value if that's more appropriate */
  }
};

/**
 * Get all supported chains
 *
 * @returns `TChain`
 */
export const getChains = () => {
  return fetchChainData();
};

/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TChain`
 */
export const getChainById = (chainId: number): TChain => {
  return fetchChainDataById(chainId);
};

/**
 *
 * @returns `TToken`
 */
/**
 * Fetches tokens from all chains.
 *
 * @returns `TToken]>`
 */
export const getTokens = (): TToken[] => {
  try {
    const chains = fetchChainData();
    const tokens: TToken[] = [];

    for (const chain of chains) {
      if (chain.tokens && chain.tokens.length > 0) {
        tokens.push(...chain.tokens);
      } else {
        console.warn(`Chain ${chain.name} does not have a valid tokens array.`);
      }
    }

    return tokens;
  } catch (error) {
    console.error("Error fetching chain data:", error);
    throw error; // Rethrow the error after logging it
  }
};

/**
 * Get all supported tokens for a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `TToken`
 */
export const getTokensByChainId = (chainId: number): TToken[] => {
  const chainData: TChain = fetchChainDataById(chainId);
  const tokens: TToken[] = [];

  if (chainData) {
    tokens.push(...chainData.tokens);
  }

  return tokens;
};

/**
 * Get all supported tokens for a specific chain by its ID and address
 *
 * @param chainId The ID of the network to fetch data for.
 * @param address The address of the token to fetch.
 * @returns `TToken`
 */
export const getTokenByChainIdAndAddress = (
  chainId: number,
  address: Address
): TToken => {
  const chainData: TChain = fetchChainDataById(chainId);
  let token: TToken | undefined;

  if (chainData) {
    token = chainData.tokens.find((token) => token.address === address);
  }

  return token as TToken;
};
