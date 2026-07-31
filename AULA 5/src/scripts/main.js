console.log(window.location.href) //MOSTRA O ENDEREÇO DO SITE

const titulo = document.getElementById('titulo-site')

const saudacao = document.querySelector('#boas-vindas')

const fotoPrato1 = document.querySelector('#foto-destaque')

const cardLasanha = document.querySelector('#card-lasanha')

const agora = new Date()
const hora = agora.getHours()

saudacao.textContent = hora < 18 ? "Bem vindo, bom almoço" : "Bem vindo, boa janta"