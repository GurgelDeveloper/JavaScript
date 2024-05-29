//Declaração de função

//HOISTING é um comportamento em JavaScript,
//onde variáveis e declarações de funções 
//são movidas para o topo de seu contexto (escopo) durante a fase de compilação, 
//antes da execução do código. 
//Isso significa que você pode usar funções e variáveis antes de suas declarações no código.

falaOi();

function falaOi(){
    console.log('Oi');
}

//First-class objects (Objetos de primera classe).
const souUmDado =  function(){
    console.log('Sou um dado')
}

//Na função abaixo eu passo uma variavel "funcao" como parâmetro.
//Ela fará que o parâmetro passe a ser uma váriavel que guarde uma função.
function executaFunçao(funcao){
    funcao()
}
executaFunçao(souUmDado);



//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function.')
}
funcaoArrow();