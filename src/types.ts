import type { Address, Chain } from "viem";

export const RedstoneTokenIds = {
  FTM: "FTM",
  USDC: "USDC",
  DAI: "DAI",
  ETH: "ETH",
  ARB: "ARB",
  BUSD: "BUSD",
  GTC: "GTC",
  MATIC: "MATIC",
  AVAX: "AVAX",
  CVP: "CVP",
  USDT: "USDT",
  LUSD: "LUSD",
  MUTE: "MUTE",
  mkUSD: "mkUSD",
  DATA: "DATA",
  USDGLO: "USDGLO",
  SEI: "SEI",
  OP: "OP",
  LYX: "LYX",
  CELO: "CELO",
  CUSD: "CUSD",
} as const;

export type TIndexerToken = {
  code: string;
  icon: string;
  address: Address;
  decimals: number;
  priceSource: { chainId: number; address: string };
  voteAmountCap?: bigint;
};

export type TPayoutToken = {
  name: string;
  chainId: number;
  address: Address;
  logo?: string;
  default?: boolean;
  redstoneTokenId?: string;
  decimal: number;
};

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
  tokens: {
    payout: TPayoutToken[];
    indexer: TIndexerToken[];
    donation: TDonationToken[];
  };
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
