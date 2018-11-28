const peso1 = 1.0
const peso2 = Number('2') //definindo um tipo Number

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //verifica se a variavel 'peso1' é inteira
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.781

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //toFixed limita o numero de casas decimais de um número decimal para a quantidade selecionada
console.log(media.toString()) //toString converte o valor da variavel para um inteiro
console.log(media.toString(2)) //toString(2) converte o valor da variavel para um número binário
console.log(typeof media)