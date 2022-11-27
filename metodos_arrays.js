// Existen otros metodos que sirven para crear nuevos arrays a partir de otro ya creado, medisnte recorritos o filtros
    //Mira el siguiente array
    let articulos = [
        { nombre: "Bici", costo: 3000 },
        { nombre: "TV", costo: 2500 },
        { nombre: "Libro", costo: 320 },
        { nombre: "Celular", costo: 10000 },
        { nombre: "Laptop", costo: 20000 },
        { nombre: "Teclado", costo: 500 },
        { nombre: "Audifonos", costo: 1700 },
      ]

      // si quisieramos filtrar mediante el precio de cada objeto del array y crear uno nuevo con dichos datos, hariamos
      const precio = articulos.filter(function(articulos){
        return articulos.costo <= 500
      })

      // si quisieramos tener un array con solo los valores de los nombres de los objetos , hariamos

      const nombres = articulos.map(function(articulos){
        return articulos.nombre
      })

      // si queremos crear un array con solo un dato del array inicial , hariamos
      const articuloFiltrado = articulos.find (function(articulos){
        return articulos.nombre === 'Laptop' 
      })

      //en caso de que no querramos generar un nuevo array, sino que querramos crear una interaccion de usuario o responder a una accion,hariamos

      articulos.forEach(function(articulos){
        console.log(articulos.nombre)
      })

      // some es un metodo parecido a filter, pero que en lugar de retornar un array con sus elementos, este es la forma de validar si existe un elemento con esas caracteristicas

      const expensive= articulos.some (function(articulos){
        return articulos.costo <= 700
      })