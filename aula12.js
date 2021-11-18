// funcões geradoras
function* geradora1(){
    // codigo ...
    yield 'valor 1'; //'yield' é como se fosse o 'return'
// codigo ...
yield 'valor 2';
// codigo ...
yield 'valor 3';
}

function* geradora2(){
let i = 0;
while (true) {
    yield i;
    i++;
}
}

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5(){
    yield function () {
        console.log('vim do y1');
    };
    // codigo ...
    yield function () {
        console.log('vim do y2'); 
    }
    // codigo ...
    yield function () {
        console.log('vim do y3'); 
    }
}

const g1 = geradora1();//retorna um objeto
// console.log(g1.next());  { value: 'valor 1', done: false }
// console.log(g1.next());  { value: 'valor 2', done: false }
// console.log(g1.next());  { value: 'valor 3', done: false }
// console.log(g1.next());  { value: undefined, done: true }

// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);

/*
for (const valor of g1) {// sempre que tivermos um objeto podemos utilizar o 'forof'
    console.log(valor);// 'valor' sera a nossa value quando utilizamos o 'forof'
}
*/

const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

const g4 = geradora4();
// console.log(g4.next().value);

// for (const valor of g4) {
//     console.log(valor);
// }

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;
func1();//chamamos o 'func1();' porque ela ja tem um 'console.log()' dentro dela
func2();// 'yield function ()' é uma função
func3();

// for (const valor of g5) {
//     console.log(valor);
// }