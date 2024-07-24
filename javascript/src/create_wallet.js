const bip32 = require("bip32");
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");

// Generate a mnemonic (seed phrase)
const mnemonic = bip39.generateMnemonic();
console.log("Mnemonic:", mnemonic);

// Convert mnemonic to seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Define the network (Bitcoin testnet)
const network = bitcoin.networks.testnet;

// Create a root node using the seed and network
const root = bip32.fromSeed(seed, network);

console.log("Root Base58:", root.toBase58()); // Outputs the root node in base58 format

// Derive a path from the root node
const path = "m/44'/1'/0'/0/0"; // Use 1' for testnet coin type
const child = root.derivePath(path);

console.log(
  "Address:",
  bitcoin.payments.p2pkh({ pubkey: child.publicKey, network }).address
);
