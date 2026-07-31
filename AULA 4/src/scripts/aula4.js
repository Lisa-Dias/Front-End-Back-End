// const tempoAgora = new Date()

// const hora = tempoAgora.hetHours()

// const dataFormatada = tempoAgora.toLocaleDateString('pt-BR')
// const horaFormatada = tempoAgora.toLocaleTimeString('pt-BR')

// console.log("Hoje é dia:" + dataFormatada)
// console.log("Horário:" + horaFormatada)

// console.log("Só a hora:" + hora)

// if(hora >= 12 && hora < 18){
//     alert("Boa tarde!")
// }    

// if(hora < 6 && hora > 18){
//     alert("Boa noite!")
// }

// class Prato{
//     constructor(nome,preco){
//         this.nome = nome
//         this.preco = preco
//     }
//     exibirComMoeda(){
//         return "R$" + total.toFixed(2)
//     }
// }

// const lasanha = new Prato("Lasanha Bolonhesa", 45.00)

// let quantidade = prompt("Simulação: Quantas unidades de:"+ lasanha.nome + " você deseja?")

// let total = lasanha.preco * quantidade

// alert("Resumo da Simulação: \n Prato: " + lasanha.nome + "\nTotal: " + lasanha.exibirComMoeda())


alert("Bem vindo ao restaurante SaBOr e Saber")

const cliente = prompt("Para um atendimento personalizado, digite seu nome:");

let clienteFormatado = cliente.trim().toUpperCase()

alert("Bem Vindo " + clienteFormatado + " ao restaurante Sabor e Saber!!")

