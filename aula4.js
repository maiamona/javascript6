function rand(min = 1000, max = 3000) {// tempi de 1 a 3 segundos (1 => 1000, 3 => 3000)
    var num = Math.random() * (max - min) + min;
return Math.floor(num);
}

// console.log(rand());
function f1(callback) {
    setTimeout(function () {// função de callback 
        console.log('f1');
        if(callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {// função de callback
        console.log('f2');
        if(callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function () {// função de callback
        console.log('f3');
        if(callback) callback();
    }, rand());
}

/*
f1(function () {
    f2(function () {// 'f2();' - nunca vai ser executada antes de 'f1();'
       f3(function () {// f3(); - nunca vai ser executada antes de 'f2();'
        console.log('ola mundo'); //'console.log();' - nunca vai ser executada antes de 'f3();'
       }); 
    });
});
// f2();
// f3();
*/

f1(f1Callback);//mesmo codigo mas funções separadas

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('ola mundo');
}
