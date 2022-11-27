// los arrays son tipos de datos los cuales almacenan mas datos dentro de ellos mismos
    //EJEMPLO
    let fruits =["apple", "strawberry","pineapple","passionfruit"]

    //Forma de ver el array
    console.log(fruits);

    //Como ver la longitud del array
    console.log (fruits.length);

    //Los arrays inician en 0 y la forma de ver cada uno de sus elementos es:
    console.log(fruits[3]);
    //siendo el numero que va entre los [], el numero del elemanto el cual queremos ver


        //¿CÓMO ADICIONAR DATOS A LA COLA DE UN ARRAY?
         let moreFruits = fruits.push("banana");

         //¿CÓMO QUITAR DATOS DE LA COLA DEL ARRAY?
         let lessFruits = fruits.pop("banana");



         //Adicionar archivos al inicio del array 
         let newLength = fruits.unshift("banana");

         //quitar datos del incio de array
         let unLength = fruits.shift("banana");


// Esta es la forma de como saber la posicion de un elemnato dentro del array cuando se su nombre

let position = fruits.indexOf("pineapple");

//Despues debemos llamar la funcion en la consola para ver la posicion de este
position;


         