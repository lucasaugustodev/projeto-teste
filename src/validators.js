/**
 * Validates an email address format
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

/**
 * Validates a URL format
 * @param {string} url
 * @returns {boolean}
 */
export function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates a Solana wallet address (base58, 32-44 chars)
 * @param {string} address
 * @returns {boolean}
 */
export function isValidSolanaAddress(address) {
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(address);
}

/**
 * Validates an Ethereum address (0x + 40 hex chars)
 * @param {string} address
 * @returns {boolean}
 */
export function isValidEthAddress(address) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Validates a payment amount (positive number, max 2 decimals)
 * @param {number} amount
 * @returns {boolean}
 */
export function isValidAmount(amount) {
  if (typeof amount !== 'number' || isNaN(amount)) return false;
  if (amount <= 0) return false;
  const decimals = amount.toString().split('.')[1];
  return !decimals || decimals.length <= 2;
}
// trigger
// ai v2
