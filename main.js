const {
    Blockchain,
    Transaction
} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('5f794b2de712a273df41642fac4d1a36ce81b76bb7021b3c0fe5e27e5f3656a4');

const myWalletAddress = myKey.getPublic('hex');

const crazyCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
crazyCoin.addTransaction(tx1);

crazyCoin.minePendingTransactions(myWalletAddress);

const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
crazyCoin.addTransaction(tx2);

crazyCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of xavier is ${crazyCoin.getBalanceOfAddress(myWalletAddress)}`);

// crazyCoin.chain[1].transactions[0].amount = 10;

console.log();
console.log('Blockchain valid?', crazyCoin.isChainValid() ? 'Yes' : 'No');