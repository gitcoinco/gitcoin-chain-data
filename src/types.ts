import type { Address, Chain } from "viem";

export type TIndexerToken = {
  code: string;
  address: Address;
  decimals: number;
  priceSource: { chainId: number; address: string };
  voteAmountCap?: bigint;
};

export type TPayoutToken = {};

export type TDonationToken = {};

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
  tokens: TIndexerToken[] | TPayoutToken[] | TDonationToken[];
  subscriptions?: TSubscription[];
  maxGetLogsRange?: number;
};

export type TSubscriptionRecord = Record<number, TSubscription[]>;
export type TTokenRecord = Record<
  number,
  TIndexerToken[] | TPayoutToken[] | TDonationToken[]
>;
export type TChainRecord = TChain[];

export enum ETokenType {
  PAYOUT = "payout",
  DONATION = "donation",
  INDEXER = "indexer",
}
