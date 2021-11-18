falaOi();
// as 'function' - são First-class objects (objetos de primeira classe)

function falaOi() {//function hoisting, a function vai ser elevada para o topo
   console.log('mona'); 
}

const nome = function () {// function expression
    console.log('função mona');  
}

// nome();

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(nome);

const obj = {
    // fala: function () {
    //    console.log('dentro de um objeto'); 
    // }
    fala() {
       console.log('dentro de um objeto'); 
    }
}

obj.fala();

function funcao(a, b, c) {//function funcao(arguments){}, 'arguments' - sustenta os argumentos enviados, isto não funciona em arrow function('()=>{}')
    //console.log(arguments);//'arguments' - palavra reservada para os parametros da função
    // console.log(arguments[1]);
    let total = 0;
    for (const argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

funcao( 1, 2, 3, 4, 5, 6, 7, 8, 9);

function funcao2(a, b, c, d, e, f) {
    console.log(a, b, c, d, e, f);
}

funcao2(1, 2, 3, 4, 5, 6, 7);
funcao2(1, 2, 3);// argumento são os valores que enviamos para os parametros

 function funcao3(a=2, b=3) {
//function funcao3(a, b) {
   // b = b || 0;//se'b' não existir recebe o valor '0'
    console.log(a + b);
}

funcao3(3);

 function funcao4(a, b= 2, c= 4) {

    console.log(a + b + c);
}

funcao4(3, undefined, 20);

function funcao5([nome1, sobrenome1, idade1]) {//desestruturação de array
 //function funcao5({nome1, sobrenome1, idade1}) {//desestruturação

    console.log(nome1, sobrenome1, idade1);
}
//let obj2 = {nome1: 'mona', sobrenome1: 'garcia', idade1: 34};
//funcao5({nome1: 'mona', sobrenome1: 'garcia', idade1: 34});//enviando um objeto literal como parametro no argumento da minha função
// funcao5(obj2);
funcao5(['mona', 'garcia', 34]);


function conta(operador, acumulador, ...numeros) {//'...numeros' será o nosso resto - rest operator
    // console.log(operador, acumulador, numeros);
    for (const numero of numeros) {
        // console.log(numero);
      if(operador === '+')  acumulador += numero;
      if(operador === '-')  acumulador -= numero;
      if(operador === '/')  acumulador /= numero;
      if(operador === '*')  acumulador *= numero;
    }
     console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);