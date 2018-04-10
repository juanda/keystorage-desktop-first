module.exports.templateMenu = [
  {
    label: "Almacenes",
    submenu: [
      {
        label: "crear",
        click() {
          console.log("crear");
        }
      },
      {
        label: "cargar",
        click() {
          console.log("cargar");
        }
      }
    ]
  },
  {
      label: "Acciones",
      submenu: [
          {
              label: "Añadir clave"
          },
          {
              label: "Editar clave"
          },
          {
              label: "Eliminar clave"
          }
      ]
  }
];
