const tituloNhoque = document.querySelector('#card-nhoque h3')

const botoesCompra = document.querySelectorAll('.btn-pedido')


const terceiroCard = document.querySelector ('.card:nth-child(4)')

console.log("1. Mostrando o Título NHOQUE (pelo ID)" , tituloNhoque)

console.log("2. Quantidade de Botões de Pedido", botoesCompra.length )

console.log("3. Exibindo a Terceira posicão da class .card",terceiroCard )

const imgLasanha = document.querySelector ('img[alt="Lasanha Tech"')

if (tituloNhoque){    //SERVE PARA VER SE REALMENTE EXISTE O NHOQUE, SE EXISTIR ELE MOSTRA O NOME, SE NÃO EXISTIR ELE MOSTRA A MENSAGEM DE ERRO
    console.log("Titulo CAPTURADO: ", tituloNhoque.innerText
    )
}

const saudacao = document.querySelector('#boas-vindas')

const agora = new Date()
const hora = agora.getHours()

saudacao.textContent = hora < 18 ? "Bem vindo, bom almoço" : "Bem vindo, boa janta"

nomeCompleto.innerHTML = "Olá, <strong>Elisa</strong> Dias <em>Sérgio</em>" 

const foto = document.querySelector('#foto-destaque')

const caminhoAtual = foto.getAttribute('src')

foto.setAttribute('src', 'src/images/esgotado.jpg')
foto.setAttribute('alt', 'Prato Esgotado!')


