const crypto = require("crypto")

class Crypter {

    constructor(key){
        this.hash = crypto.createHash('sha256')
        this.key = this.hash.update(key).digest('hex')
        this.cipher = crypto.createCipher('aes192', this.key)
        this.decipher = crypto.createDecipher('aes192', this.key)
    }

    encrypt(text){
        let encripted = this.cipher.update(text, 'utf8', 'hex')  
        encrypted += cipher.final('hex')  
        return encrypted
    }

    decrypt(text){
        let decrypted = this.decipher.update(text, 'hex', 'utf8')
        decrypted += decipher.final('utf8')

        return decrypted
    }
}

module.exports.Crypter