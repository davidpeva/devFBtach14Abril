'use strict'
//clase del 13 y el 16 de mayo 2022
//en el CRUD Create es PRINT, Read es GET, Update es Actualizar, Delete es Borrar

//MIRAR LA CLASE DESPUES DEL BRAKE DONDE ENRIQUE SUGIERE EL EJERCICIO
//DE LOCOS PARA APLICAR A UN TRABAJO

const d = document

const h1 = d.querySelector('h1')
console.log(h1.dataset);

const input_todo = d.getElementById('input-todo')
const btn_add = d.getElementById('btn-add')
const content_w = d.getElementById('content-wrapper')

//en propgramacion las const normalmente van en mayuscula
//
const URL = 'http://localhost:3000/data/'

//CREA LOS LI EN EL DOM
const printTasks = (task, id) => {
    let li = d.createElement('li')

    li.dataset.id = id
    li.textContent = task

    //con creat element creo el elemento
    const btn_1 = d.createElement('button')
    const btn_2 = d.createElement('button')
    btn_1.textContent = 'Editar'
    btn_2.textContent = 'Eliminar'
    

    btn_1.addEventListener('click', () => {
        updateData(input_todo.value, id)
})

    btn_2.addEventListener('click', () => {
        deleteData(id)
})

    //appendchild es me crea un elemento a el hijo de ese li
    //appendchild es para un solo hijo si hay mas hijos deno de poner mas parametros separados por coma pero uso append(hijo1, hijo2, hijo3...)
    li.appendChild(btn_1)
    li.appendChild(btn_2)
    content_w.appendChild(li)
}
//HACE LA PETICION GET LEE LOS DATOS DEL URL Y CON EL PRINT TASK IMPRIME LA INFO DINAMICA
const getData = () => {
    //COMO ACA TENGO UNA PROMESA LO PUEDO TRABAJAR EN ASYNC CON TRY Y CATCH
    //TAMBIEN LO PUEDO TRABAJAR CON THEN
    //CUANDO fecth solo tiene un parametro 'url' es un metodo get
    fetch(URL)
    //el fetch siempre empieza con este fecth porq debo de convertir
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                printTasks(element.task, element.id)
            });
        })
        .catch(error => console.error(error))
        
}
//ESTA CADA VEZ Q LA PAGINA CARGUE ME MUESTRA LA INFO
getData()

//HACE UN POST, SE EJECUTA CUANDO CREO UN ELEMENTO NUEVO CON EL BOTON ADD DEL FINAL
const sendData = (data) => {
    fetch(URL, {
        method : "POST",
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            "task" : `${data}`
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

//ACA LE CAMBIO UN DATO EJECUTA UN PUT Y ESTA GUARDADA I SE EJECUTA EL BOTON EDITAR Q SE CREA CON LA FUNCION PRINT TASK
const updateData = (task, id) => {
    //teng que capturar el json a la url base le hago una peticion con fectch
    fetch(URL + id, {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            "task" : `${task}`
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))

}

//ELMINIMA EL ID Q ENCUENTRE HACE UN DELETE Y SE EJECUTA CUANDO EL BOTON ELIMINAR EJECUTA LA FUNCION PRINT TASK
const deleteData = (id) => {
    fetch(URL + id, {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json'
        }
        //en este caso no pongo body porque lo que quiero es que elimine
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

//ACA EJECUTO EL POST CUANDO UNDO EL BOTON
//aca accedo al boton add
//la e es un parametro que le di al callback
btn_add.addEventListener('click', (e) => {

    sendData(input_todo.value)
})

//HACER LA VALIDACION DE QUE SI EL CAMPO ESTA EN BLANCO NO ME DEJE ENVIAR




// const sendData = () => {
//     fetch(URL, {
//         method : "POST",
//         headers : {
//             'Content-Type' : 'application/json'
//         },
//         body : JSON.stringify({
//             "task" : "otra tarea mas desde el cliente(browser)..."
//         })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))
// }

// //aca accedo al boton add
// //la e es un parametro que le di al callback
// btn_add.addEventListener('click', (e) => {

//     sendData()
// })


//reto poner bonito este archivo
//CONSEGUIR Q AL ENVIAR LOS DATOS LA TAREA SEA DINAMICA OSEA Q LA OBTENGA DESDE EL INPUT DE TEXTO
//CON EL POST