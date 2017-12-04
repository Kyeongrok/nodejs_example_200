// Hash
const crypto = require('crypto');

const sha = crypto.createHash('sha256');
sha.update('nodejs');
const output = sha.digest('hex');

console.log('crypto_hash:', output);

// 암호화
const key = 'Key';
const input = 'PW';


const cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
const cipheredOutput = cipher.final('base64');


// 해제
const decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
const decipherOutput = decipher.final('utf8');

console.log(`orignal string: ${input}`);
console.log(`cipher: ${cipheredOutput}`);
console.log(`decipher: ${decipherOutput}`);
