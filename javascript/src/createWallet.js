// import dependencies
const bip32 = require("bip32");
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");

// define the network
const network = bitcoin.networks.testnet;

const path = "m/44'/1'/0'/0/0";

let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

//creating the root of the wallet
let root = bip32.fromSeed(seed, network);

let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddress = bitcoin.payments.p2pkh({
  pubkey: node.publicKey,
  network: network,
}).address;

console.log("Generated Wallet");
console.log("Address: ", btcAddress);
console.log("chave privada: ", node.toWIF());
console.log("Mnemonic: ", mnemonic);
