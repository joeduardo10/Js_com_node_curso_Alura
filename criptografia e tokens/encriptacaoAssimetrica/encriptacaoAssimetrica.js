import { generateKeyPairSync } from 'crypto'

const {privateKey, publicKey } = generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)
//console.log(privateKey);
//console.log(publicKey);
//código omitido

import { publicEncrypt, privateDecrypt} from 'crypto'
import { buffer } from 'stream/consumers'

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem super secreta")
);
console.log(dadosCriptografados.toString('hex'));
//--------------- transmissão ------------------

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(`Dados decifrados:${dadosDecifrados.toString('utf-8')}`)