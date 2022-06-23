require('@nomiclabs/hardhat-waffle');

const { PRIVATE_KEY, MAINNET_API_URL, MUMBAI_API_URL } = process.env;

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/2a9d72a3b96f4e37877973751b2e82f5',
      accounts: [`ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`],
    },
    mainnet: {
      url: 'https://polygon-mainnet.infura.io/v3/2a9d72a3b96f4e37877973751b2e82f5',
      accounts: [`ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80`],
    },
  },
  solidity: '0.8.4',
};
