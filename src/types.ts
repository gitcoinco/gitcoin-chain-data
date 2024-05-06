import type { Hex } from "viem";

export type Token = {
  code: string;
  address: string;
  decimals: number;
  priceSource: { chainId: number; address: string };
  voteAmountCap?: bigint;
};

export type Subscription = {
  address: Hex;
  contractName: any, // keyof typeof abis;
  fromBlock?: number;
  eventsRenames?: Record<string, string>;
};

export type Chain = {
  rpc: string;
  name: string;
  id: number;
  pricesFromTimestamp?: number;
  // tokens: Token[];
  // subscriptions: Subscription[];
  maxGetLogsRange?: number;
};
