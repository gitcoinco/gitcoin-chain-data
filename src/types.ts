import type { Address } from "viem";

type CoingeckoSupportedChainId =
  | 1
  | 10
  | 250
  | 42161
  | 43114
  | 713715
  | 42
  | 42220;

export type TToken = {
  code: string;
  chainId: number;
  icon?: string;
  address: Address;
  decimals: number;
  priceSource?: { chainId: CoingeckoSupportedChainId; address: Address };
  redstoneTokenId?: string;
  voteAmountCap?: bigint;
  permitVersion?: string;
  default?: boolean;
};

export type TSubscription = {
  address: Address;
  contractName: any; // keyof typeof abis;
  fromBlock?: number;
  eventsRenames?: Record<string, string>;
};

export type TChain = {
  rpc: string;
  name: string;
  icon: string;
  id: number;
  pricesFromTimestamp?: number;
  maxGetLogsRange?: number;
  tokens: TToken[];
  subscriptions: TSubscription[];
};
