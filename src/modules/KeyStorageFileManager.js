const { dialog, BrowserWindow } = require("electron");
const { KeyStorage } = require("./KeyStorage");
const { Crypter } = require("./Crypter")

class KeyStorageFileManager {
  constructor() {
    this.file = null;
    this.key = null;
  }

  static createKeyStorageFile(browserWindow, defaultPath) {
    let formWindow = new BrowserWindow({
      width: 400,
      height: 350,
      frame: false,
      parent: browserWindow,
      modal: true
    });
    
    formWindow.loadURL(`file://${__dirname}/../templates/form_create_filestorage.html`);    
  }

  static loadKeyStorageFile(browserWindow, defaultPath) {
    let formWindow = new BrowserWindow({
      width: 400,
      height: 350,
      frame: false,
      parent: browserWindow,
      modal: true
    });
    
    formWindow.loadURL(`file://${__dirname}/../templates/form_load_filestorage.html`);    
  }

  static addKeyRegister(browserWindow) {
    let formWindow = new BrowserWindow({
      width: 500,
      height: 400,
      frame: false,
      parent: browserWindow,
      modal: true
    });

    formWindow.loadURL(`file://${__dirname}/../templates/form_add_keyregister.html`);    
  }
}



module.exports.KeyStorageFileManager = KeyStorageFileManager