function tratarErroELancar(erro) {
    //throw new Error('Ocorreu um problema na compilação do código')
    //throw 10
    //throw true
    //throw 'mansagem'
    throw {
        nome: erro.nome, 
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome (obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log("Final")
    }
}

const obj = { nome: 'Roberto' }
imprimirNome(obj)