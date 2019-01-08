// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function f1() { }

// armazenar em uma variável
const func2 = function () { }

// armazenar em um array
const array = [function(a, b) { return a + b }, f1, func2]
console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// passar uma função como parâmetro
function run(fun) {
    fun()
}

run (function () {console.log('Executando...')})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(1, 2)(3)
const somando = soma(3, 4)
somando(5)