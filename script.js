const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [
    {
        enunciado: "Você gosta da ideia de Inteligência artificial?",
        alternativas:["Sim","Não"]
    },
    {
        enunciado: "é bolsonaro ou não é?",
        alternativas:["É","Não"]
    },
    {
        enunciado: "Elon musk uma vez disse...",
        alternativas:["Quero ir pra marte","Secretaria que trablha dia inteiro comigo.."]
    }
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual= perguntas[posicao]
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
} 
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativa){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
    }

}

