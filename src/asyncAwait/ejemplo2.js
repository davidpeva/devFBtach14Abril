'use strict'


//asi lo escribo formalmente cuando solo retorna una sola cosa cada then puedo obviar los corchetes y el return
//esto es una promcesa asincrona la funcion out data es sincrona 
//debo de hacer ASYNC AWAIT para poder trabajar respuestas de promesas(asincronas) con funciones sincronas
const getData = () => {
    return fetch ('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            return data
        })
}

//sienore q trabajo asinc await tratar de usar try y catch
//al poner async ya la preparo para trabajar la promsesa asinc con funcion sinc
const showData = async () => {
    try{
        //aca le digo a la funcion show data que espere q get data se ejecute para guardarla en data y q salga fullfill
        const data = await getData()
        console.log(data);
    }catch{
        console.error(error);
    }
}

showData()