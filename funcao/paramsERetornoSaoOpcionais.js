function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log("Valor acima do permitido: " + area + "m²")
    } else {
        return area
    }
}

console.log(area(2,3))
console.log(area(2))
console.log(area())
console.log(area(2, 4, 7, 17, 20, 44))
console.log(area(5, 5))
