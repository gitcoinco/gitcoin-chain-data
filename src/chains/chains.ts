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
 * @returns `Promise<TChain>`
 */
export const fetchChainData = async (): Promise<TChain[]> => {
  /** Initialize a default empty response or your preferred default structure */
  let chains: TChain[] = [] as TChain[];

  for (const chainId of supportedChainIds) {
    let response: { data: TChain };
    try {
      response = await axios.get(
        `https://gitcoinco.github.io/chain-data/chains/${chainId}/chain.json`
      );
    } catch (error) {
      console.error("Error fetching chains", error);

      return [] as TChain[];
    }

    chains.push(response.data as TChain);

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
 * @returns `Promise<TChain>`
 */
const fetchChainDataById = async (chainId: number): Promise<TChain> => {
  /** Initialize a default empty response or preferred default structure */
  let chains: TChain;

  try {
    const response = await axios.get(
      `https://gitcoinco.github.io/chain-data/chains/${chainId}/chain.json`
    );

    chains =
      response.data; /** Assuming the API returns data that matches TChain */
    console.log("Fetching chains response", {
      response: chains,
    });

    return chains;
  } catch (error) {
    console.error("Error fetching chains", error);

    return {} as TChain; /** This can be null or a default value if that's more appropriate */
  }
};

/**
 * Get all supported chains
 *
 * @returns `Promise<TChain>`
 */
export const getChains = async () => {
  return await fetchChainData();
};

/**
 * Get a specific chain by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TChain>`
 */
export const getChainById = async (chainId: number) => {
  return await fetchChainDataById(chainId);
};

/**
 *
 * @returns `Promise<TToken>`
 */
/**
 * Fetches tokens from all chains.
 *
 * @returns `Promise<TToken[]>`
 */
export const getTokens = async (): Promise<TToken[]> => {
  try {
    const chains = await fetchChainData();
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
 * @returns `Promise<TToken>`
 */
export const getTokensByChainId = async (chainId: number) => {
  const chainData: TChain = await fetchChainDataById(chainId);
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
 * @returns `Promise<TToken>`
 */
export const getTokenByChainIdAndAddress = async (
  chainId: number,
  address: Address
) => {
  const chainData: TChain = await fetchChainDataById(chainId);
  let token: TToken | undefined;

  if (chainData) {
    token = chainData.tokens.find((token) => token.address === address);
  }

  return token as TToken;
};
