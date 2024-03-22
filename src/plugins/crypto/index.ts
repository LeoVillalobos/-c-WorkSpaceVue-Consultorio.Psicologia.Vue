// import crypto from 'crypto';

// export function encryptToken(token: string, secretKey: string): string {
//   const cipher = crypto.createCipher('aes-256-cbc', secretKey);
//   let encryptedToken = cipher.update(token, 'utf8', 'hex');
//   encryptedToken += cipher.final('hex');
//   return encryptedToken;
// }

// export function decryptToken(encryptedToken: string, secretKey: string): string {
//   const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
//   let decryptedToken = decipher.update(encryptedToken, 'hex', 'utf8');
//   decryptedToken += decipher.final('utf8');
//   return decryptedToken;
// }

// import CryptoJS from 'crypto-js';

// const token = 'mi_token_secreto';
// const secretKey = 'mi_clave_secreta';

// // Encriptar el token
// const encryptedToken = CryptoJS.AES.encrypt(token, secretKey).toString();

// // Desencriptar el token
// const decryptedToken = CryptoJS.AES.decrypt(encryptedToken, secretKey).toString(CryptoJS.enc.Utf8);

// console.log('Token encriptado:', encryptedToken);
// console.log('Token desencriptado:', decryptedToken);

// install crypto-js
