import { mainnet } from "viem/chains";
import type { TChainRecord } from "../types";
import axios from "axios";

export const chains: TChainRecord = [];

/**
 * Fetch chains for all supported networks.
 *
 * @returns
 */
export const fetchChainData = async (): Promise<TChainRecord | null> => {
  // Initialize a default empty response or your preferred default structure
  let chains: TChainRecord | null = null;

  try {
    const response = await axios.get(
      "https://gitcoinco.github.io/static-data/chains/chains.json"
    );

    chains = response.data; // Assuming the API returns data that matches TChainRecord
    console.log("Fetching chains response", {
      response: chains,
    });

    return chains;
  } catch (error) {
    console.error("Error fetching chains", error);

    return []; // This can be null or a default value if that's more appropriate
  }
};

/**
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns
 */
export const fetchChainDataById = async (
  chainId: number
): Promise<TChainRecord | null> => {
  // Initialize a default empty response or your preferred default structure
  let chains: TChainRecord | null = null;

  try {
    const response = await axios.get(
      `https://gitcoinco.github.io/static-data/chains/${chainId}/chains.json`
    );

    chains = response.data; // Assuming the API returns data that matches TChainRecord
    console.log("Fetching chains response", {
      response: chains,
    });

    return chains;
  } catch (error) {
    console.error("Error fetching chains", error);

    return []; // This can be null or a default value if that's more appropriate
  }
};
