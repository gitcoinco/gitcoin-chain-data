import type { TChain, TToken } from "../types";
import axios from "axios";

/**
 * Fetch chains for all supported networks.
 *
 * @returns `Promise<TChain>`
 */
const fetchChainData = async (): Promise<TChain[]> => {
  /** Initialize a default empty response or your preferred default structure */
  let chains: TChain[] = [] as TChain[];

  try {
    const response = await axios.get(
      "https://gitcoinco.github.io/chain-data/chains/chains.json"
    );

    chains = response.data as TChain[];

    return chains;
  } catch (error) {
    console.error("Error fetching chains", error);

    return [] as TChain[];
  }
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
export const getChain = async (chainId: number) => {
  return await fetchChainDataById(chainId);
};

/**
 *
 * @returns `Promise<TToken>`
 */
export const getTokens = async () => {
  const chains = await fetchChainData();
  const tokens: TToken[] = [];

  chains.forEach((chain) => {
    tokens.push(...chain.tokens);
  });

  return tokens;
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
