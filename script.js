//HENRIQUE E PEDRO

const quantI={
        celular: 150,
        fone: 55,
        penDrive: 37,
        caixaAudio: 28,
        tablet: 32,
        carregador: 29,
}
const quantV={
        celular: 38,
        fone: 10,
        penDrive: 17,
        caixaAudio: 8,
        tablet: 5,
        carregador: 15,
}

const restante ={}

function sobra (quantI, quantV){

    for (let p in quantI) {
     restante[p] =  quantI[p] - quantV[p]

    }
    return restante
}
console.log(sobra(quantI, quantV))
