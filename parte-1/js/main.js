function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  
    this.oracion = `Título: ${titulo}. - Autor: ${autor.toUpperCase()}`;
  
    this.mostrarDatosEnConsola = function () {
      console.log(this.oracion);
    };
  
    this.mostrarDatosEnAlert = function () {
      alert(this.oracion);
    };

    this.getTitulo = function () {
      return this.titulo;
    };

    this.mostrarDatos = function (opcion) {

      if (opcion === "alert") {
        this.mostrarDatosEnAlert();
      } else if (opcion === "console" || !opcion) {
        this.mostrarDatosEnConsola();
      } else {
        console.warn("Por consola: Se ha enviado un parámetro incorrecto.");
      }
    };
  }

  let unLibro = new Libro("Ángeles y Demonios", "Dan Brown");

  unLibro.mostrarDatosEnConsola();
  unLibro.mostrarDatosEnAlert();

  let nuevoLibro = new Libro("Fuego y Sangre", "George R. R. Martin");

  let tituloDelNuevoLibro = nuevoLibro.getTitulo();

  alert(tituloDelNuevoLibro);

  nuevoLibro.mostrarDatos();
  nuevoLibro.mostrarDatos("alert");
  nuevoLibro.mostrarDatos("console");
  nuevoLibro.mostrarDatos("otro");