const { app, BrowserWindow, Menu, ipcMain } = require("electron")
const EventEmitter = require('events')

const menuEmitter = new EventEmitter()

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, formWindow

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/templates/index.html`);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  let mainMenu = require('./menu.js').mainMenu
  let templateMenu = mainMenu(menuEmitter)
  Menu.setApplicationMenu(Menu.buildFromTemplate(templateMenu))
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

function createFormModal(browserWindow, width, height, url) {
  let winForm = new BrowserWindow({
    width: width,
    height: height,
    frame: false,
    parent: browserWindow,
    modal: true
  })
  winForm.loadURL(url)
}

menuEmitter.on('create-keystorage', (e) => {
  let url = `file://${__dirname}/templates/form_create_filestorage.html` 
  createFormModal(mainWindow, 400, 350, url)
})

menuEmitter.on('load-keystorage', (e) => {
  let url = `file://${__dirname}/templates/form_load_filestorage.html`
  createFormModal(mainWindow, 400, 350, url) 
})

ipcMain.on('load-keystorage', (e, args) => {
  mainWindow.webContents.send('load-keystorage', args)
})

menuEmitter.on('add-keyregister', (e) => {
  let url = `file://${__dirname}/templates/form_add_keyregister.html`
  createFormModal(mainWindow, 500, 550, url)
})

ipcMain.on('add-keyregister', (e, register) => {
  mainWindow.webContents.send('add-keyregister', register)
})

menuEmitter.on('edit-keyregister', (e) => {
  mainWindow.webContents.send('edit-keyregister')
})

menuEmitter.on('delete-keyregister', (e) => {
  mainWindow.webContents.send('delete-keyregister')
})