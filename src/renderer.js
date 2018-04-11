const { ipcRenderer } = require('electron')
const { Crypter } = require('./modules/Crypter')
const { KeyStorage } = require('./modules/KeyStorage')
const { GUI } = require('./modules/GUI')
const path = require('path')

let crypter, keyStorage
let gui = new GUI(document)
gui.init()


ipcRenderer.on('load-keystorage', (e, args) => {
    let file = args.file
    let key = args.key

    crypter = new Crypter()    
    keyStorage = new KeyStorage(crypter, file)
    keyStorage.openDataFile(key)

    gui.updateRegisterList(keyStorage.getAll())
    gui.setAppTitle(`Almacén de claves ACME (${path.parse(file).base})`)
    
})

ipcRenderer.on('add-keyregister', (e, register) => {
    console.log(register)
    keyStorage.add(register)
    keyStorage.save()
    gui.updateRegisterList(keyStorage.getAll())
})

ipcRenderer.on('delete-keyregister', (e, args) => {
    
})

ipcRenderer.on('reload-list', (e, args) => {

})