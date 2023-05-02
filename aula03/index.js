/* console.log("Ola MUNDO");

//Declarar variaveis com let ou const
let nome = "Felipe";
const PI = 3.14;
let isRunning = false;
const PESSOA = {
    nome : "Felipe",
    idade: 32,
    profissao: "professor"
}
let cores= ["amarelo", "azul"]
console.log(typeof nome)    
console.log(typeof PI)
console.log(typeof isRunning)
console.log(typeof PESSOA)
console.log(typeof cores)
console.log(PESSOA.idade)
console.log("Nome : ", PESSOA.nome)

let frase = "Meu nome é " + PESSOA.nome + ". Eu tenho " + PESSOA.idade 
console.log(frase)*/


//Estrutura de decisao

/*const PESSOA = {
    nome:"joao",    
    idade:20
}
if(PESSOA.idade <= 0){
    console.log("n nasceu")
}
else if(PESSOA.idade >= 18){
    console.log("A pessoa de nome " + PESSOA.nome + " é maior de idade ")
} else{
    console.log("Menor de idade")
}

switch(PESSOA.idade){
    case 20:
        console.log("20 anos")
        break;
    case 30:
        console.log("30 anos")
        break;
    default:
        console.log("idade desconhecida")
        break;
}

//PESSOA.idade => 18 ? console.log("maior de idade ") : console.log("menor de idade")

//Estruturas de repetição - FOR - WHILE - DO WHILE

for(let index = 0; index < 10; index++){
    console.log(index)
}

let count = 0;
while (count < 5){
    console.log(count)
    count++
}

do {
    console.log(count)
    count++
}   while(count < 3)*/  


// Funçoes 

function imprimeOi(){
    console.log("oiiii")
}

function imprime(frase){
    console.log(frase)
}

imprimeOi()

imprime("ola funçoes")

function soma(num1, num2){
    let resultado = num1 + num2
    return resultado
   
}
let result = soma(5, 8)
console.log("Resultado = " + soma(1, 5))
console.log(result)

//arrow function
const multiplica = (num1, num2) => {
    console.log(num1 * num2)
}

multiplica(2, 5)

const OBJETO = {
    chave: "valor",
    numero: 53,
    booleano: false,
    obj:{
        chaves: "valores"
    }
}

const impares = [ 1, 3, 5, 7]
const coisas = [1, false, {chave : "valor"}, [0, 1, true]]