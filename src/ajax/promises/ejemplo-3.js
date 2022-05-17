'use strict'

const getData = () => {

    //fecth es como decirle traer un recurso, nos retorna una promesa
    fetch('https://jsonplaceholder.typicode.com/users')
        //recibo el texto y lo convierto a json para poder darle formato para trabajarlo
        
        .then(response => {
            let res = response.json()
            console.log(res)
            return res
            //then es un callback y un callback es una funcion y debe retornar algo y asi lo puedo usar fuera del scope en lo q sigue
            //el return de un then simplemente se pasa al otro then siguiente por eso el 4 se pasa al siguiente
        })
        .then(data => { 
            console.error(data)
            return 4 
            //cuando no quiero pasarle mas data al siguiente then no le doy return
            })
        .then (cuatro => console.log(cuatro))
        .catch(error => console.error(error))
}

getData()