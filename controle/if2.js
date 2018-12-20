function teste1 (num) {
    if(num > 7)
        console.log(num)
        console.log('Final') //não entra na estrutura if, porque não tem '{'
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //não usar ';' nas estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)