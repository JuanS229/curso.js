// Existen dos tipos de funciones en javascript
    //FUNCIONES DECLARATIVAS
        //Estas funciones se llamn mediante la palabra reservada function y son usadas mediante una llamada de un return o llamndolas manuelamente
        // EJEMPLO
        function saludar(nombre){
            const hola = "HOLA " + nombre
            return hola
        }

        // si ecribimos en una consola de un navegador la plabra saludar ("Juan"), esta retornarria un HOLA Juan

        //Otra forma de verlo seria llamdola manualmente
        //EJEMPLO
        function saludo (nombre){
            console.log(`hola ${nombre}`)
        }

    //FUNCIONES EXPRESIVAS O ANONIMAS
        //Estas consisten es guardar las funciones dentro de variables
        //EJEMPLO
        const suma = function (a, b){
            return a/b;
        }

    //CON LAS FUNCIONES DECLARATIVAS PODEMOS HACER ALGO LLAMDO HOSTING, LO QUE QUIERE DECIR, ES QUE ESTAS LAS PODEMOS LLAMAR ANTES Y LUEGO ////////DECLARARLAS PARA SER USADAS, COSA QUE NO SE PUEDE HACER CON LAS FUNCIONES DE EXPRESION //
//EJEMPLO
mi_funcion()

function mi_funcion(edad){
    return "sue edad es "+ edad
}