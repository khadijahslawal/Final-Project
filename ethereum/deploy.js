const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/PropertyFactory.json");

const provider = new HDWalletProvider(
  "rug wage cricket oven engine cart still emerge distance rubber switch current",
  "https://rinkeby.infura.io/v3/29c6c6e93eec414398617bc7e59444f4"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Deploying contract from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "3000000", from: accounts[0] });
  console.log("Contract deployed to", result.options.address);
};

deploy();