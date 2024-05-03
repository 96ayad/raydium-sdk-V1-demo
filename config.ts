import {
  ENDPOINT as _ENDPOINT,
  Currency,
  LOOKUP_TABLE_CACHE,

  /////////////////ayad/////////////
  // MAINNET_PROGRAM_ID,
  DEVNET_PROGRAM_ID,

  RAYDIUM_MAINNET,
  Token,
  TOKEN_PROGRAM_ID,
  TxVersion,
} from '@raydium-io/raydium-sdk';
import {
  Connection,
  Keypair,
  PublicKey,
} from '@solana/web3.js';

export const rpcUrl: string = 'https://xxx.xxx.xxx/'
export const rpcToken: string | undefined = undefined

///////////////////////ayad///////////////////////
// export const wallet = Keypair.fromSecretKey(Buffer.from('<YOUR_WALLET_SECRET_KEY>'))
// export const connection = new Connection('<YOUR_RPC_URL>');
// export const PROGRAMIDS = MAINNET_PROGRAM_ID;

// export const wallet = Keypair.fromSecretKey(Buffer.from('43EeRipwq7QZurfASn7CnYuJ14pVaCEv7KWav9vknt1bFR6qspYXC2DbaC2gGydrVx4TFtWfyCFkEaLLLMB2bZoT'))

export const wallet = Keypair.fromSecretKey(Buffer.from(
  '[151,250,133,160,178,197,133,103,69,122,236,210,204,163,134,138,41,3,125,57,8,168,214,17,218,120,180,227,245,234,75,72,10,76,127,170,65,248,245,58,114,27,168,242,66,37,79,216,141,207,121,134,27,72,177,85,105,137,186,168,39,146,175,38]'
))

export const connection = new Connection('https://api.devnet.solana.com/');

export const PROGRAMIDS = DEVNET_PROGRAM_ID;

export const ENDPOINT = _ENDPOINT;

export const RAYDIUM_MAINNET_API = RAYDIUM_MAINNET;

export const makeTxVersion = TxVersion.V0; // LEGACY

export const addLookupTableInfo = LOOKUP_TABLE_CACHE // only mainnet. other = undefined

export const DEFAULT_TOKEN = {
  'SOL': new Currency(9, 'USDC', 'USDC'),
  'WSOL': new Token(TOKEN_PROGRAM_ID, new PublicKey('So11111111111111111111111111111111111111112'), 9, 'WSOL', 'WSOL'),
  'USDC': new Token(TOKEN_PROGRAM_ID, new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'), 6, 'USDC', 'USDC'),
  'RAY': new Token(TOKEN_PROGRAM_ID, new PublicKey('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'), 6, 'RAY', 'RAY'),
  'RAY_USDC-LP': new Token(TOKEN_PROGRAM_ID, new PublicKey('FGYXP4vBkMEtKhxrmEBcWN8VNmXX8qNgEJpENKDETZ4Y'), 6, 'RAY-USDC', 'RAY-USDC'),

  //////////ayad////////
  'sold': new Token(TOKEN_PROGRAM_ID, new PublicKey('FgNkSaQdfYshYJQ7PuuNNzgkRihq4M7Y9haQ2rp9nABf'), 6, 'sold', 'sold'),
  
}
