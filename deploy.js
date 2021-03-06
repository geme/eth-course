const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

// this mnemonic is just a test acc so feel free to wipe it
const provider = new HDWalletProvider(
  "bus topple pole become struggle lobster pretty poem whisper duty exclude soap",
  "https://rinkeby.infura.io/kTrGQwEYVzE5p4fnO0OC"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi'] })
    .send({ gas: 1000000, from: accounts[0] });

    console.log("Contract deployed to:", result.options.address);

};
deploy();
