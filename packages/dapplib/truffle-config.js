require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remain pumpkin heavy close blue seven'; 
let testAccounts = [
"0xa4df97017fc5dc5f3cfc19223cbae2122778d4c191ce27fd7e7e93bae7cbe7e6",
"0x96433e8fb8984e4c2b964a1ead0c4e949e57585395e87ebd49d8bf9a9456d48e",
"0xc01145d743f3180b5e233267541af854704db049ada9f72e9b15cffa8bd7fe16",
"0xe5300d17c73350a0f06629eae335d8c100c266f6565e7d24b15f277529208e08",
"0xc9eaef4f12fec246aa6094dc080a0de8562b0aac84c53f399e02f8efd9968739",
"0xee003f83ce7f352206d3ab8674bd94d1cc704e2eb26d3516d48c50ac47a06abc",
"0x796b1c8b6b882dd9ecd9e641ba369c5e90c8c276c5f5df6fbec81e4425c9698c",
"0x855da3137c3587c89d979d65d99e00e1ac918d6e14ee61fbb6ad7cdf5b8e416c",
"0x6c4be6daf68c3712d5e0db218586e7c5f94fd5462bb70fd91c6d296bc3db5c95",
"0x63379560477dfe3da356be4904877f32577eab84178064d0873ccab483dce1a4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


