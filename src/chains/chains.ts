import { mainnet } from "viem/chains";
import type { Chain } from "../types";

export const chains: Record<number, Chain> = {
  1: {
    id: mainnet.id,
    name: "mainnet",
    rpc: "https://mainnet.infura.io/v3/",
    pricesFromTimestamp: Date.UTC(2022, 11, 1, 0, 0, 0),
  },
};
