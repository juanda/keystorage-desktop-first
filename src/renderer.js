const { ipcRenderer } = require('electron')
const { Crypter } = require('./modules/Crypter')
const { KeyStorage } = require('./modules/KeyStorage')

let crypter, keyStorage
let keyRegisters = []

ipcRenderer.on('load-keyregister', (e, args) => {
    let keyfile = args.keyfile
    let key = args.key

    crypter = new Crypter()
    crypter.setKey(key)
    keyStorage = new KeyStorage(crypter, keyfile)
    
})

ipcRenderer.on('edit-keyregister', (e, args) => {

})

ipcRenderer.on('delete-keyregister', (e, args) => {
    
})

ipcRenderer.on('reload-list', (e, args) => {

})