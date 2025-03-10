//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


let listaDeNomes = [ ];


let namigos = 5;
//let amigoSecreto = gerarNomeAleatorio();



function adicionarAmigo(){
   let nome = document.querySelector(`input`).value;
  

 if (nome == '') {
    alert('Insira um nome!')
   
    console.log(listaDeNomes);
    return nome
 }
 if (listaDeNomes.includes(nome)) {
    alert('Insira outro nome!')
    console.log(listaDeNomes);
    limparCampo();
 }
 else {
    listaDeNomes.push(nome)
      
    console.log(listaDeNomes)
      limparCampo();
      
 }
   return listaAmigos();
}

function listaAmigos() {
    let campo = document.getElementById('listaAmigos')
    campo.innerHTML = "";
    for (let i = 0; i < listaDeNomes.length; i++) {
        const li = document.createElement('li');
      
      // Define o conteúdo do <li> com o nome do amigo
      li.textContent = listaDeNomes[i];
      
      // Adiciona o <li> à lista <ul>
      campo.appendChild(li);
    }
    
}


function sortearAmigo() {
    let nome = document.getElementById('resultado')
    const nomes = Math.floor(Math.random()*listaDeNomes.length);

const nomeAleatorio = listaDeNomes[nomes];

nome = alert(nomeAleatorio);

let lista = document.getElementById('listaAmigos')
lista.innerHTML = "";
return listaDeNomes = [];
}


function limparCampo(){
    let nome = document.querySelector('input');
    nome.value = '';
    
}


