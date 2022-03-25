import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import { ethereumTestnet, ethereumMainnet } from '../lib/Networks';
import { openSea } from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: ethereumTestnet,
  mainnet: ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'CryptoLuckyCat',
  tokenName: 'CryptoLuckyCat',
  tokenSymbol: 'CLC',
  hiddenMetadataUri: 'ipfs://QmSNcfBrQ1rb8vuqvsNKiw6J7iywcauvRXhUFU3seqXDrh/hidden.json',
  maxSupply: 12000,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.08,
    maxMintAmountPerTx: 10,
  },
  publicSale: {
    price: 0.1,
    maxMintAmountPerTx: 10,
  },
  contractAddress: '0x83507B1A6c266475C5548fC559b8FA5f08243d63',
  marketplaceIdentifier: 'CyptoLuckyCat',
  marketplaceConfig: openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
