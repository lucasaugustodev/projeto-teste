import { isValidEmail, isValidUrl, isValidSolanaAddress, isValidEthAddress, isValidAmount } from '../src/validators.js';

// Email
console.assert(isValidEmail('test@example.com') === true);
console.assert(isValidEmail('invalid') === false);
console.assert(isValidEmail('@no.com') === false);

// URL
console.assert(isValidUrl('https://example.com') === true);
console.assert(isValidUrl('not-a-url') === false);

// Solana
console.assert(isValidSolanaAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU') === true);
console.assert(isValidSolanaAddress('invalid') === false);

// Ethereum
console.assert(isValidEthAddress('0x742d35Cc6634C0532925a3b844Bc9e7595f0bF9E') === true);
console.assert(isValidEthAddress('not-eth') === false);

// Amount
console.assert(isValidAmount(10.50) === true);
console.assert(isValidAmount(-5) === false);
console.assert(isValidAmount(0) === false);

console.log('All validator tests passed!');
// ai test
