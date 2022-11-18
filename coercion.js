// El termino de coerción coresponde a poder modificar el tipo de dato de una variable de manera implicita o explicita

    // Coerción implicita: Esta es cunado el mismo programa o lenguaje, realiza este cambio por concatenacion.
        //EJEMPLO
        const a = 1 + "2";
        // en este casi si llegasemos a colocar en la consola del navegador la funcionalidad "typeof"
        // nos imprimiria que el resultado es 12 y que es un tipo de dato string

    //Coerción explicita: Esta es cuando nosotros manipulamos directamente la variable para cambiar su tipo de dato
        //EJEMPLO
        const b = 20;
        //Esta por defecto ya es una variable de tipo number, pero....
        const c = String(b);
        //Si declaramos otra variable en la cual esbribimos el tipo de dato al que queremos convertir otra variable y le pasamos por parametro esta, la variable cambia de tipo de dato
        //EJEMPLO #2
        const d= "Casa";
        const e= Number(d);
         
