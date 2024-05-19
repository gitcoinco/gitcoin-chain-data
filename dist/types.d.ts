import type { Address, Chain } from "viem";
export declare const RedstoneTokenIds: {
    readonly FTM: "FTM";
    readonly USDC: "USDC";
    readonly DAI: "DAI";
    readonly ETH: "ETH";
    readonly ARB: "ARB";
    readonly BUSD: "BUSD";
    readonly GTC: "GTC";
    readonly MATIC: "MATIC";
    readonly AVAX: "AVAX";
    readonly CVP: "CVP";
    readonly USDT: "USDT";
    readonly LUSD: "LUSD";
    readonly MUTE: "MUTE";
    readonly mkUSD: "mkUSD";
    readonly DATA: "DATA";
    readonly USDGLO: "USDGLO";
    readonly SEI: "SEI";
    readonly OP: "OP";
    readonly LYX: "LYX";
    readonly CELO: "CELO";
    readonly CUSD: "CUSD";
};
export type TIndexerToken = {
    code: string;
    icon: string;
    address: Address;
    decimals: number;
    priceSource: {
        chainId: number;
        address: string;
    };
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
export type TDonationToken = {
    name: string;
    chainId: number;
    address: Address;
    decimal: number;
    logo?: string;
    default?: boolean;
    redstoneTokenId: string;
    permitVersion?: string;
};
export type TSubscription = {
    address: Address;
    contractName: any;
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
export type TTokenRecord = {
    payout: TPayoutToken[];
    indexer: TIndexerToken[];
    donation: TDonationToken[];
};
export type TChainRecord = TChain[];
export declare enum ETokenType {
    PAYOUT = "payout",
    DONATION = "donation",
    INDEXER = "indexer"
}
