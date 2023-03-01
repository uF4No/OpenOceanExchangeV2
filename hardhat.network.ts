import { NetworksUserConfig } from "hardhat/types";
import { env } from "process";

const networks: NetworksUserConfig = {
    "bsc-local": {
        url: "http://127.0.0.1:18545",
        chainId: 1337,
        gasPrice: 5000000000,
        accounts: ["0x94e6de53e500b9fec28037c583f5214c854c7229329ce9baf6f5577bd95f9c9a"],
    },
    zkSyncTestnet: {
        url: "https://zksync2-testnet.zksync.dev",
        ethNetwork: "goerli", // or a Goerli RPC endpoint from Infura/Alchemy/Chainstack etc.
        zksync: true,
    },
};

export default networks;
