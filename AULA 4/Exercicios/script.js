// Exercício 1: Personalizador de Acesso (Strings e Interação)

// let nome = prompt("Digite seu primeiro nome:")

// let sobrenome = prompt("Digite seu sobrenome: ")

// let nomeCompleto = nome.trim() + " " + sobrenome.trim()

// alert(nomeCompleto.toLowerCase())

// alert("Seu nome tem: " + nomeCompleto.length + " caracteres.");


// Exercício 2: Calculadora de Divisão de Conta (Aritméticos)

// let valorTotal = prompt ("Digite o valor da conta: ")

// let qntPessoas = prompt ("Digite a quantidade de pessoas na mesa: ")

// let divisao = valorTotal / qntPessoas

// alert("Cada pessoa deve pagar R$ " + divisao.toFixed(2))


// Exercício 3: Validador de Promoção (Lógicos e Relacionais)

// let valorCompra = prompt ("Digite o valor da compra: ")

// let cupom = prompt ("Deseja colocar o cupom? ")

// if (cupom.toLowerCase() == "sim" || valorCompra > 150)  {
//     alert("Frete Grátis Liberado")
    
// }

//     else{
//         alert("Frete Pago")
//     }


// Exercício 4: Sorteador de Brindes (Math)

// let userNumero = prompt("Escolha de 1 a 10: ")
// let sortudo = Math.floor(Math.random() * 10) + 1
// if (userNumero == sortudo) {
//     alert("Parabéns, você ganhou um brinde!")
// } else {
//     alert("Que pena, o número sorteado foi " + sortudo);
// }


// Exercício 5: Gestão de Frota (Orientação a Objetos)

// class Veiculo {
//     constructor(modelo, marca, ano) {
//         this.modelo = modelo;
//         this.marca = marca;
//         this.ano = ano;
//     }

//     idadeVeiculo(anoAtual) {
//         return anoAtual - this.ano;
//     }
// }
// let meuCarro = new Veiculo("Corolla", "Toyota", 2020);
// let anoAtual = new Date().getFullYear();
// let idade = meuCarro.idadeVeiculo(anoAtual);