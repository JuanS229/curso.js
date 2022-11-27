// LOS OBJETOS, 
// Un objeto es un  tipo de dato al cual se le pueden asignar distitos valores o atributos dentro de este
//EJEMPLO 

let myCar = {
    brand : "toyota",
    model :  "corolla",
    year : 2020,
    // dentro de los objretos tambien podemos tener METODOS, los cuales son la representacion de una funcion dentro de este
    details : function(){
        // this es la forma de indicar la ubicacion del atributo a llamar
        console.log("Car "+ this.model +" "+ this.year)
    }
}
//Si quiero llamar una parte especifica del objeto 
myCar.brand;
    //en este caso se llamaria "toyota"

//Llamar metodos 
myCar.details();

//FUNCION CONSTRUCTORA
//En caso de que queremos crear varios tipos de objetos, los cuales van a recibir los mismos atributos podemos crear una funcion, la cual recibira como parametros a dichos atributos y con solo generar una variable con un la funcion new y que le de los paramentos de la funcion podemos creoqr objetos de una manera mas rapida
function auto(brand, model, year){
    this.brand= brand
    this.model= model
    this.year= year
}

let autoNuevo = new auto("suzuki","z3", 2017)
