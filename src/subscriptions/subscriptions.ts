import type { Subscription } from "../types";

export const subscriptions: Record<number, Subscription[]> = {
  1: [
    {
      contractName: "AlloV1/ProjectRegistry/V2",
      address: "0x03506eD3f57892C85DB20C36846e9c808aFe9ef4",
    },
    {
      contractName: "AlloV1/RoundFactory/V2",
      address: "0x9Cb7f434aD3250d1656854A9eC7A71EceC6eE1EF",
      fromBlock: 16994474,
    },
    {
      contractName: "AlloV1/QuadraticFundingVotingStrategyFactory/V2",
      address: "0x4a850F463D1C4842937c5Bc9540dBc803D744c9F",
      fromBlock: 16994526,
    },
    {
      contractName: "AlloV1/MerklePayoutStrategyFactory/V2",
      address: "0x8F8d78f119Aa722453d33d6881f4D400D67D054F",
      fromBlock: 16994526,
    },
    {
      contractName: "AlloV1/DirectPayoutStrategyFactory/V2",
      address: "0xd07D54b0231088Ca9BF7DA6291c911B885cBC140",
      fromBlock: 16994526,
    },
    {
      contractName: "AlloV1/ProgramFactory/V1",
      address: "0x56296242CA408bA36393f3981879fF9692F193cC",
      fromBlock: 16994451,
    },
    // Allo V2
    {
      contractName: "AlloV2/Registry/V1",
      address: "0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3",
      fromBlock: 18486688,
    },
    {
      contractName: "AlloV2/Allo/V1",
      address: "0x1133eA7Af70876e64665ecD07C0A0476d09465a1",
      fromBlock: 18486975,
    },
  ],
};
