---
id: smart-contract-reference
title: Uniswap V3 Smart Contract Reference
description: Reference documentation for Uniswap V3 smart contracts
sidebar_position: 3
---

This page documents the core smart contracts powering Uniswap V3, a decentralized exchange (DEX) protocol. It enables users to swap tokens (trade one cryptocurrency for another) and provide liquidity (deposit token pairs to earn trading fees).
## Core Contract Addresses

### Mainnet (Ethereum)
- **SwapRouter**: [`0xE592427A0AEce92De3Edee1F18E0157C05861564`](https://etherscan.io/address/0xE592427A0AEce92De3Edee1F18E0157C05861564)
  - Handles token swaps and executes trades.
- **Factory**: [`0x1F98431c8aD98523631AE4a59f267346ea31F984`](https://etherscan.io/address/0x1F98431c8aD98523631AE4a59f267346ea31F984)
  - Creates and manages liquidity pools (trading pairs).
- **Quoter**: [`0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6`](https://etherscan.io/address/0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6)
  - Provides price quotes for token swaps.
- **WETH**: `0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2`
  - Wrapped Ether, used for ETH/token pairs.

### Testnet (Sepolia)
- **SwapRouter**: `0x3bFA4769FB09eefC5a80d6E87c3B9C650f7Ae48E`
- **Factory**: `0x0227628f3F023bb0B980b67D528571c95c6DaC1c`
- **Quoter**: `0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6`

## Key Contracts

### 1. SwapRouter
Handles token swaps with optimized gas usage and supports multi-hop trades (swaps that route through multiple tokens).

#### Key Functions
- `exactInputSingle(ExactInputSingleParams params)`
  - Swaps a fixed input amount of one token for as much as possible of another token.
  - Parameters:
    - `tokenIn`: Address of the token to swap from.
    - `tokenOut`: Address of the token to receive.
    - `fee`: The pool fee (e.g., 3000 for 0.3%).
    - `recipient`: Address to receive the output tokens.
    - `deadline`: Unix timestamp after which the transaction will revert.
    - `amountIn`: Exact amount of input tokens to swap.
    - `amountOutMinimum`: Minimum amount of output tokens to receive (slippage protection).
    - `sqrtPriceLimitX96`: Price limit (set to 0 for no limit).

- `exactInput(ExactInputParams params)`
  - Swaps a fixed input amount through multiple pools (multi-hop swaps).

### 2. Factory
Creates and manages liquidity pools for token pairs.

#### Key Functions
- `createPool(address tokenA, address tokenB, uint24 fee)`
  - Creates a new pool for a token pair with a specified fee tier.
  - Returns the address of the new pool.

- `getPool(address tokenA, address tokenB, uint24 fee)`
  - Returns the address of the pool for a given token pair and fee.

### 3. Quoter
Provides price quotes for token swaps without executing a transaction.

#### Key Functions
- `quoteExactInputSingle(QuoteExactInputSingleParams params)`
  - Returns the amount of output tokens for a given input amount.
  - Parameters:
    - `tokenIn`: Address of the input token.
    - `tokenOut`: Address of the output token.
    - `fee`: The pool fee.
    - `amountIn`: Amount of input tokens.
    - `sqrtPriceLimitX96`: Price limit (set to 0 for no limit).

## Example Usage

### Getting a Price Quote (JavaScript)
```javascript
const { ethers } = require('ethers');

// Initialize provider and contract
const provider = new ethers.providers.JsonRpcProvider('YOUR_RPC_URL');
const quoterAddress = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6';
const quoterABI = [
  'function quoteExactInputSingle(address tokenIn, address tokenOut, uint24 fee, uint256 amountIn, uint160 sqrtPriceLimitX96) external returns (uint256 amountOut)'
];
const quoter = new ethers.Contract(quoterAddress, quoterABI, provider);

// Example: Get a quote for swapping 1 ETH to USDC
async function getQuote() {
  const tokenIn = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'; // WETH
  const tokenOut = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'; // USDC
  const fee = 3000; // 0.3% fee tier
  const amountIn = ethers.utils.parseEther('1'); // 1 ETH
  
  const amountOut = await quoter.callStatic.quoteExactInputSingle(
    tokenIn,
    tokenOut,
    fee,
    amountIn,
    0 // No price limit
  );
  
  console.log(`1 ETH = ${ethers.utils.formatUnits(amountOut, 6)} USDC`);
}

getQuote().catch(console.error);
```

## Next Steps
- Learn how to [swap tokens](/docs/web3/getting-started) using the SwapRouter.
- Explore [liquidity provision](/docs/web3/how-it-works#liquidity) in Uniswap V3.
- Check out [example interactions](/docs/web3/example-interactions) for more code samples.

> Replace with real addresses and links.

## ABI and source

- ABI (Application Binary Interface — the contract's function and event signature list): `./abi/NFTMinter.json` (add to repo or link to explorer)
- Verified source is available on the explorers linked above.

## Functions

List public/external functions with parameters and return types. Grouped logically.

### Minting

- `function mint(address to) external payable returns (uint256 tokenId)`
  - **Description**: Mints (creates) a new NFT to `to`.
  - **Parameters**:
    - `to` — Recipient wallet address (the account that will own the NFT).
  - **Payable**: Yes, must send `msg.value == mintPrice` if mint price is set.
  - **Returns**: New `tokenId`.
  - **Errors**: `MintPriceNotPaid()`, `MaxSupplyReached()`, `Paused()`.

- `function setMintPrice(uint256 priceWei) external`
  - **Description**: Sets the mint price (amount of ETH required to mint).
  - **Access**: Owner only.

- `function setBaseURI(string calldata newBaseURI) external`
  - **Description**: Sets the base metadata URI (the URL prefix for token metadata files).
  - **Access**: Owner only.

### ERC-721 required functions

- `function balanceOf(address owner) external view returns (uint256)`
- `function ownerOf(uint256 tokenId) external view returns (address)`
- `function safeTransferFrom(address from, address to, uint256 tokenId) external`
- `function transferFrom(address from, address to, uint256 tokenId) external`
- `function approve(address to, uint256 tokenId) external`
- `function getApproved(uint256 tokenId) external view returns (address)`
- `function setApprovalForAll(address operator, bool approved) external`
- `function isApprovedForAll(address owner, address operator) external view returns (bool)`
- `function tokenURI(uint256 tokenId) external view returns (string memory)`

### Introspection

- `function supportsInterface(bytes4 interfaceId) external view returns (bool)`
  - Returns true for `IERC721` and `IERC165` interface IDs.

### Admin controls

- `function pause() external`
  - **Description**: Pauses state-changing methods (temporary stop for safety).
  - **Access**: Owner only.

- `function unpause() external`
  - **Access**: Owner only.

- `function withdraw(address payable to) external`
  - **Description**: Withdraws collected mint fees to `to`.
  - **Access**: Owner only.

## Events

Describe what is emitted and when.

- `event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)`
  - Standard ERC-721 event on mint/transfer/burn.
- `event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)`
- `event ApprovalForAll(address indexed owner, address indexed operator, bool approved)`
- `event Minted(address indexed to, uint256 indexed tokenId, uint256 value)`
  - Custom event on `mint` with amount of ETH paid.

## Errors

List revert reasons and when they occur.

- `MintPriceNotPaid()` – Sent ETH does not equal required mint price.
- `MaxSupplyReached()` – No more NFTs can be minted.
- `Paused()` – State-changing calls disabled.
- `NotAuthorized()` – Caller lacks required role (owner).

## Deployment information

- **Constructor parameters**
  - `string name`, `string symbol`, `string baseURI`, `uint256 maxSupply`, `uint256 mintPrice`
- **Initialization**
  - Optionally call `setBaseURI` after deployment.
  - Optionally grant roles if using `AccessControl`.
- **Upgradeability**
  - If using a proxy (an upgrade mechanism), list proxy and implementation addresses.

## Interface IDs

If using ERC-165 (an interface detection standard), list supported interface IDs.

- `0x...` – ICore
- `0x...` – IController

## Security notes

- Access control via `Ownable` or `AccessControl`.
- Pausable for emergency stops.
- Link to audits if available.
