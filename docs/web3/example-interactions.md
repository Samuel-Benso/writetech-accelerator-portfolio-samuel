---
id: example-interactions
title: Example Interactions
sidebar_position: 4
---

Use these examples to try the NFT Minter dApp quickly. Each example includes expected outcomes and tips for troubleshooting. Jargon is explained the first time it appears.

## Prerequisites

- Node.js (v14 or later)
- A Web3 provider (like [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/))
- A small amount of ETH for gas fees
- Basic knowledge of JavaScript/TypeScript

## Setting Up Your Environment

1. Create a new project and install dependencies:

```bash
mkdir uniswap-v3-examples
cd uniswap-v3-examples
npm init -y
npm install ethers @uniswap/v3-sdk @uniswap/sdk-core
```

2. Create a `.env` file with your configuration:

```env
ALCHEMY_API_KEY=your-alchemy-api-key
PRIVATE_KEY=your-wallet-private-key
```

## Example 1: Get a Price Quote

```javascript
const { ethers } = require('ethers');
require('dotenv').config();

// Initialize provider
const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
);

// Uniswap V3 Quoter contract address
const QUOTER_ADDRESS = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6';

// Quoter ABI (simplified)
const quoterABI = [
  'function quoteExactInputSingle(address tokenIn, address tokenOut, uint24 fee, uint256 amountIn, uint160 sqrtPriceLimitX96) external returns (uint256 amountOut)'
];

async function getPrice() {
  const quoter = new ethers.Contract(QUOTER_ADDRESS, quoterABI, provider);
  
  // Token addresses (WETH and USDC on Ethereum mainnet)
  const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
  const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
  
  // 1 WETH = 10^18 wei
  const amountIn = ethers.utils.parseEther('1');
  
  try {
    const amountOut = await quoter.callStatic.quoteExactInputSingle(
      WETH,
      USDC,
      3000, // 0.3% fee tier
      amountIn,
      0 // No price limit
    );
    
    console.log(`1 WETH = ${ethers.utils.formatUnits(amountOut, 6)} USDC`);
  } catch (error) {
    console.error('Error getting price:', error);
  }
}

getPrice();
```

## Example 2: Execute a Token Swap

```javascript
const { ethers } = require('ethers');
require('dotenv').config();

// Initialize provider and wallet
const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Uniswap V3 Router address
const SWAP_ROUTER_ADDRESS = '0xE592427A0AEce92De3Edee1F18E0157C05861564';

// Router ABI (simplified)
const routerABI = [
  'function exactInputSingle(tuple(address tokenIn, address tokenOut, uint24 fee, address recipient, uint256 amountIn, uint256 amountOutMinimum, uint160 sqrtPriceLimitX96) params) external payable returns (uint256 amountOut)'
];

async function swapTokens() {
  const router = new ethers.Contract(SWAP_ROUTER_ADDRESS, routerABI, wallet);
  
  // Token addresses (WETH and USDC on Ethereum mainnet)
  const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
  const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
  
  // 0.01 WETH = 10^16 wei
  const amountIn = ethers.utils.parseEther('0.01');
  
  // Set up swap parameters
  const params = {
    tokenIn: WETH,
    tokenOut: USDC,
    fee: 3000, // 0.3% fee tier
    recipient: wallet.address,
    amountIn: amountIn,
    amountOutMinimum: 0, // Set a minimum amount to receive (slippage protection)
    sqrtPriceLimitX96: 0 // No price limit
  };
  
  try {
    console.log('Sending swap transaction...');
    const tx = await router.exactInputSingle(params, {
      value: amountIn,
      gasLimit: 300000
    });
    
    console.log('Transaction hash:', tx.hash);
    const receipt = await tx.wait();
    console.log('Transaction confirmed in block:', receipt.blockNumber);
  } catch (error) {
    console.error('Error executing swap:', error);
  }
}

swapTokens();
```

## Example 3: Add Liquidity to a Pool

```javascript
const { ethers } = require('ethers');
require('dotenv').config();

// Initialize provider and wallet
const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Uniswap V3 NonfungiblePositionManager address
const POSITION_MANAGER_ADDRESS = '0xC36442b4a4522E871399CD717aBDD847Ab11FE88';

// ABI for ERC20 and PositionManager
const ERC20_ABI = [
  'function approve(address spender, uint256 amount) external returns (bool)',
  'function balanceOf(address owner) external view returns (uint256)'
];

const POSITION_MANAGER_ABI = [
  'function createAndInitializePoolIfNecessary(address token0, address token1, uint24 fee, uint160 sqrtPriceX96) external payable returns (address pool)',
  'function mint(tuple(address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint256 amount0Desired, uint256 amount1Desired, uint256 amount0Min, uint256 amount1Min, address recipient, uint256 deadline) external payable returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)'
];

async function addLiquidity() {
  const positionManager = new ethers.Contract(
    POSITION_MANAGER_ADDRESS,
    POSITION_MANAGER_ABI,
    wallet
  );

  // Token addresses (WETH and USDC on Ethereum mainnet)
  const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
  const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
  
  // Token contracts
  const token0 = new ethers.Contract(WETH, ERC20_ABI, wallet);
  const token1 = new ethers.Contract(USDC, ERC20_ABI, wallet);
  
  // Amounts to provide (0.1 ETH and equivalent USDC)
  const amount0 = ethers.utils.parseEther('0.1');
  const amount1 = ethers.utils.parseUnits('200', 6); // 200 USDC (6 decimals)
  
  // Approve token transfers
  console.log('Approving token transfers...');
  await token0.approve(POSITION_MANAGER_ADDRESS, amount0);
  await token1.approve(POSITION_MANAGER_ADDRESS, amount1);
  
  // Set up liquidity parameters
  const params = {
    token0: WETH,
    token1: USDC,
    fee: 3000, // 0.3% fee tier
    tickLower: -600, // Price range lower bound
    tickUpper: 600,  // Price range upper bound
    amount0Desired: amount0,
    amount1Desired: amount1,
    amount0Min: 0,
    amount1Min: 0,
    recipient: wallet.address,
    deadline: Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from now
  };
  
  try {
    console.log('Adding liquidity...');
    const tx = await positionManager.mint(params, {
      gasLimit: 1000000
    });
    
    console.log('Transaction hash:', tx.hash);
    const receipt = await tx.wait();
    console.log('Liquidity added! Transaction confirmed in block:', receipt.blockNumber);
  } catch (error) {
    console.error('Error adding liquidity:', error);
  }
}

addLiquidity();
