import { capitalize, slugify, truncate } from '../src/helpers.js';

console.assert(capitalize('hello') === 'Hello');
console.assert(slugify('Hello World!') === 'hello-world');
console.assert(truncate('short') === 'short');
console.assert(truncate('a'.repeat(100), 10) === 'aaaaaaaaaa...');
console.log('All tests passed!');
