import type { Address, Chain } from "viem";

export type TToken = {
  code: string;
  address: Address;
  decimals: number;
  priceSource: { chainId: number; address: string };
  voteAmountCap?: bigint;
};

export type TSubscription = {
  address: Address;
  contractName: any; // keyof typeof abis;
  fromBlock?: number;
  eventsRenames?: Record<string, string>;
};

export type TChain = Chain & {
  rpc: string;
  name: string;
  id: number;
  pricesFromTimestamp?: number;
  tokens: TToken[];
  subscriptions?: TSubscription[];
  maxGetLogsRange?: number;
};

export type TSubscriptionRecord = Record<number, TSubscription[]>;
export type TTokenRecord = Record<number, TToken[]>;
export type TChainRecord = TChain[];
