const { app, BrowserWindow, Menu } = require("electron")
const EventEmitter = require('events')

const menuEmitter = new EventEmitter()


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, formWindow

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

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

  formWindow = new BrowserWindow({
    width: 500,
    height: 350,
    parent: mainWindow,
    frame: false,
    show: false
  })

  formWindow.loadURL(`file://${__dirname}/form.html`)
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

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

menuEmitter.on('create-keystorage', (e) => {
  console.log('crear keystorage')
})

menuEmitter.on('load-keystorage', (e) => {
  console.log('cargar keystorage')
})

menuEmitter.on('add-keyregister', (e) => {
  console.log('añadir keyregister')
})

menuEmitter.on('edit-keyregister', (e) => {
  console.log('editar keyregister')
})

menuEmitter.on('delete-keyregister', (e) => {
  console.log('borrar keyregister')
})