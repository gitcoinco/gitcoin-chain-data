import type { TChainRecord } from "../types";
import axios from "axios";

/**
 * Fetch chains for all supported networks.
 *
 * @returns `Promise<TChainRecord>`
 */
export const fetchChainData = async (): Promise<TChainRecord> => {
  /** Initialize a default empty response or your preferred default structure */
  let chains: TChainRecord;

  try {
    const response = await axios.get(
      "https://gitcoinco.github.io/chain-data/chains/chains.json"
    );

    chains =
      response.data; /** Assuming the API returns data that matches TChainRecord */
    console.log("Fetching chains response", {
      response: chains,
    });

    return chains;
  } catch (error) {
    console.error("Error fetching chains", error);

    return []; /** This can be null or a default value if that's more appropriate */
  }
};

/**
 * Fetch a specific chains data by its ID
 *
 * @param chainId The ID of the network to fetch data for.
 * @returns `Promise<TChainRecord>`
 */
export const fetchChainDataById = async (
  chainId: number
): Promise<TChainRecord> => {
  /** Initialize a default empty response or preferred default structure */
  let chains: TChainRecord;

  try {
    const response = await axios.get(
      `https://gitcoinco.github.io/chain-data/chains/${chainId}/chain.json`
    );

    chains =
      response.data; /** Assuming the API returns data that matches TChainRecord */
    console.log("Fetching chains response", {
      response: chains,
    });

    return chains;
  } catch (error) {
    console.error("Error fetching chains", error);

    return []; /** This can be null or a default value if that's more appropriate */
  }
};
