require("@nomiclabs/hardhat-waffle");
const AVALANCHE_TEST_PRIVATE_KEY = "0xaf771bb037ed40765ee7115aef383145590ede8d";
module.exports = {
  solidity: "0.8.0",
  networks: {
    avalancheTest: {
    url: 'https://api.avax-test.network/ext/bc/C/rpc',
    gasPrice: 225000000000,
    chainId: 43113,
    accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`]
  }
 }
};