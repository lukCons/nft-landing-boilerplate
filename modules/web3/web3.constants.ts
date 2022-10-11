export const network = {
  name: "Polygon MATIC",
  chainId: 137,
  shortName: "polygon",
  chain: "MATIC",
  network: "mainnet",
  networkId: 137,
  nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
  rpc: [
    "https://polygon-rpc.com",
    "wss://polygon-rpc.com",
  ],
  faucets: [],
  explorers: [
    { name: "Polyscan", url: "https://polygonscan.com", standard: "EIP3091" },
    {
      name: "Polyscan Explorer",
      url: "https://polygonscan.com",
      standard: "EIP3091",
    },
  ],
  infoURL: "https://www.polygon.technology",
  parent: {
    type: "L2",
    chain: "eip155-1",
    bridges: [{ url: "https://wallet.polygon.technology/login/" }],
  },
};


export const supportedChainIds = [network.chainId, 137]