const escola = "cod3r"

console.log(escola.charAt(4)) //retorna a string que está no índice
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) //retorna o valor da tabela ascii
console.log(escola.indexOf("e")) //retorna o índice da string selecionada

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
console.log('Ana,Maria,Pedro'.split(','))