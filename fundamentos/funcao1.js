//função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //padrão
imprimirSoma(2) //erro
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //atribui os 2 primeiros
imprimirSoma()

//função com retorno 
function soma(a, b = 0){
    return a + b;
}
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())