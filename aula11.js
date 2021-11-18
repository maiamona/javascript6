// funções recursivas - executa o codigo dela e se chama devolta
// recursividade é uma função que se chama devolta
function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++; 
    
    recursiva(max);
}

recursiva(0);