# Gitcoin Common Data Package

The Gitcoin Common Data Package sources all the chains and supported tokens used by Gitcoin for:
- Grants-stack DApps
- Grants-stack-indexer
- Any other side-car aiming to leverage the supported chains/tokens

## Installation

To install the package, use the following command:

```bash
npm i "@grants-labs/gitcoin-chain-data"
```

## Functions

The package exposes the following functions, found in [index.ts](./src/index.ts):

- `getChains()`: Returns `TChain[]`
- `getChainById(chainId)`: Returns `TChain`
- `getTokens()`: Returns `TToken[]`
- `getTokensByChainId(chainId)`: Returns `TToken[]`
- `getTokenByChainIdAndAddress(chainId, address)`: Returns `TToken`

The types can be found in [types.ts](./src/types.ts).

## Adding a New Chain

To add a new chain, follow these steps:

1. Run the following command:
   ```bash
   npm run new-chain <CHAIN_ID>
   ```
2. A new file will be created at `src/data/chains/<CHAIN_ID>/chain.ts`.
3. Update `chain.ts` with the specific data for the new chain.

## Adding a New Token to a Chain

To add a new token to an existing chain:

1. Open the file at `src/data/chains/<CHAIN_ID>/chain.ts`.
2. Update the `tokens` array to include the new token information.

## Contributing

To contribute to the project, follow these steps:

### Install Dependencies

Install the necessary dependencies with:

```bash
npm i
```

### Build

Build the project with:

```bash
npm run build
```

### Publish

To publish the package, use:

```bash
npm publish
```

---

This version improves readability, structure, and clarity. It provides clear instructions for installation, usage, adding new chains and tokens, and contributing to the project.