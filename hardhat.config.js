require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 31337,
    },
    polygon_mumbai: {
      url: 'https://rpc.holesky.ethpandaops.io',
      accounts: [
        `0e732ee3048e0dddf4572c0f02a270bae041da444d0717afa993cc6fb8da630a`,
      ],
    },
  },
  solidity: '0.8.19',
};
