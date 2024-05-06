import type { Token } from "../types";

export const tokens: Record<number, Token[]> = {
  1: [
    {
      code: "USDC",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      decimals: 6,
      priceSource: {
        chainId: 1,
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      },
    },
    {
      code: "DAI",
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      },
    },
    {
      code: "ETH",
      address: "0x0000000000000000000000000000000000000000",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000",
      },
    },
    {
      code: "ETH",
      address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
      decimals: 18,
      priceSource: {
        chainId: 1,
        address: "0x0000000000000000000000000000000000000000",
      },
    },
  ],
};
