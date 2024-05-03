import {
  MarketV2,
  Token,
} from '@raydium-io/raydium-sdk';
import { Keypair } from '@solana/web3.js';

import {
  connection,
  DEFAULT_TOKEN,
  makeTxVersion,
  PROGRAMIDS,
  wallet,
} from '../config';
import { buildAndSendTx } from './util';

///////////////ayad////////////////
//const express = require('express')
import express from 'express';
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


type TestTxInputInfo = {
  baseToken: Token
  quoteToken: Token
  wallet: Keypair
}

export async function createMarket(input: TestTxInputInfo) {
  // -------- step 1: make instructions --------
  const createMarketInstruments = await MarketV2.makeCreateMarketInstructionSimple({
    connection,
    wallet: input.wallet.publicKey,
    baseInfo: input.baseToken,
    quoteInfo: input.quoteToken,
    lotSize: 1, // default 1
    tickSize: 0.01, // default 0.01
    dexProgramId: PROGRAMIDS.OPENBOOK_MARKET,
    makeTxVersion,
  })

  return { txids: await buildAndSendTx(createMarketInstruments.innerTransactions) }
}

async function howToUse() {
  // const baseToken = DEFAULT_TOKEN.RAY // RAY
  // const quoteToken = DEFAULT_TOKEN.USDC // USDC

  const baseToken = DEFAULT_TOKEN.sold // sold
  const quoteToken = DEFAULT_TOKEN.WSOL // WSOL

  createMarket({
    baseToken,
    quoteToken,
    wallet: wallet,
  }).then(({ txids }) => {
    /** continue with txids */
    console.log('txids', txids)
  })
}
