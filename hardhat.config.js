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
      url: 'https://polygon-mumbai.infura.io/v3/ccb043108c1f408aba7d179446c65c7b',
      accounts: [`a37d9b8daa93f3c557317232de6bec876af952eb72c2a07e58c26fc110c9292d`],
    },
    mainnet: {
      url: 'https://mainnet.infura.io/v3/ccb043108c1f408aba7d179446c65c7b',
      accounts: [`a37d9b8daa93f3c557317232de6bec876af952eb72c2a07e58c26fc110c9292d`],
    },
  },
  solidity: '0.8.4',
};
