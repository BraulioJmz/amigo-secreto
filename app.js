// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value; 

    if (amigo == ''){
        alert("Por favor, inserte un nombre"); 
    } else {
        amigos.push(amigo); 
        console.log(amigos); 
        emptyBox(); 
        printList(); 
    }
}

function emptyBox() {
    document.querySelector('#amigo').value = ''; 
}

function printList(){
    let listaHTML = document.getElementById('listaAmigos'); 

    listaHTML.innerHTML = '';

    for(let i = 0; i < amigos.length; i++){
        let list = document.createElement('li'); 
        list.textContent = amigos[i]; 
        listaHTML.appendChild(list); 
    }
}

function sortearAmigo() {
    if(amigos.length == 0){
        alert("No existen amigos para sortear"); 
        return; 
    }

    let maxNum = amigos.length;
    let numeroGenerado = Math.floor(Math.random() * maxNum); 
    console.log(numeroGenerado);  

    let result = document.getElementById('resultado'); 
    result.innerHTML = `El amigo secreto es ${amigos[numeroGenerado]}`;
    //Dato: Interpolacion solamente funciona con backicks no con comillas simples
}

