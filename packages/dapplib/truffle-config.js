require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remember promote give process tail general'; 
let testAccounts = [
"0x8de4d7c90341dc3273a8cc602cdc889a601c3cb88035627a8489617f1920e9ab",
"0x196b9f2d323570e9d32c9413004610d9e17d873aa62873819595e347a7736a1d",
"0xddb1c212b48d2d8f8cfb0e0570c156b910a312107a867ca31bbcc5fd5d19c5ab",
"0x2ed80bded28ef5251e504cac5abdd2e9410f76cad95e6562101d82181d8f3a24",
"0xfa9bab59e8d5df04728310d7c9267921e3716f356ab57851be12b6755d95e7f6",
"0xcdaa61b4e1a1abaac47be825b4b251b8b9f7afff6579ca2a1fe84655ce73d914",
"0x9d335ff38edb650226f50e71901455137e5821f63409f233907e5afd48b96f43",
"0xacf27277315758b1d1311446b64f0246f009f2ff1df779096909a5b9c64466ca",
"0xbac36139db53fece403494398d764553995765a221ea20a060eb7bf8da2ce79b",
"0x122c8c605b716b43be7cafec0dee2ce3172fed1a0a20d83e444164cf8007b5c6"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
