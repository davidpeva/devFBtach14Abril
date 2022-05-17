'use strict'


//EN LAS ENTREVISTAS ES MEJOR
//SABER PRIMERO FETCH
//LUEGO ASYNC AWAIT Q ES SIN LIBRERIAS
//LUEGO LO MAS MODERNO ES AXIOS,,,

//ESTA ES UNA DE LAS FORMAS MAS MODERNAS A PARTE DE AXIOS PARA HACER PETICIONES HTTP
const getData = async () => {
    //aca esta funcion try es 
    try {
        //FETCH es una peticion a un servidor es asincrono
        //ACA NO USO THEN COMO EN EL EJEMPLO 2 PERO MAS CORTO
        //aca los then estan como atrapados en el try
        //aca manejo las respuestas
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        //data es asincrono porque esta esperando q .json parsee la info
        const data = await response.json()
        console.log(data);
    //aca manejo los errores
    }catch(error) {
        console.error(error);
    }
}

getData()