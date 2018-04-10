let mainMenu = (menuEmitter) => {
  let templateMenu = [
    {
      label: "Almacenes",
      submenu: [
        {
          label: "crear",
          click() {
            menuEmitter.emit('create-keystorage')
          }
        },
        {
          label: "cargar",
          click() {
            menuEmitter.emit('load-keystorage')
          }
        },
        {
          label: "salir",
          role: "quit"
        }
      ]
    },
    {
      label: "Acciones",
      submenu: [
        {
          label: "Añadir clave",
          accelerator: "CommandOrControl+A",
          click() {
            menuEmitter.emit('add-keyregister')
          }
        },
        {
          label: "Editar clave",
          click() {
            menuEmitter.emit('edit-keyregister')
          }
        },
        {
          label: "Eliminar clave",
          click() {
            menuEmitter.emit('delete-keyregister')
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    }
  ];

  return templateMenu
}

module.exports.mainMenu = mainMenu
