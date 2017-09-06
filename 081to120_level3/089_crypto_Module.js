// 201709_JJH / crypto 모듈 P.79
// Hash
let crypto = require('crypto');

let sha = crypto.createHash('sha256');
sha.update('crypto_hash');
let output = sha.digest('hex');

console.log('crypto_hash:', output);

// 암호화

let key = 'Key';
let input = 'PW';


let cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
let cipheredOutput = cipher.final('base64');


// 해제
let decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
let decipherOutput = decipher.final('utf8');

console.log('orignal string: ' + input);
console.log('cipher: ' + cipheredOutput);
console.log('decipher: ' + decipherOutput);
