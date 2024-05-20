import type { Address } from "viem";

export type TToken = {
  code: string;
  chainId: number;
  icon?: string;
  address: Address;
  decimals: number;
  priceSource?: { chainId: number; address: Address };
  redstoneTokenId?: string;
  voteAmountCap?: bigint;
  permitVersion?: string;
  default?: boolean;
};

export type TChain = {
  rpc: string;
  name: string;
  icon: string;
  id: number;
  pricesFromTimestamp?: number;
  tokens: TToken[];
  maxGetLogsRange?: number;
};
