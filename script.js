const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre uma lista qualquer
    {//abre o objetivo da lista (cada item)
        enunciado:"Pergunta 1",
        alternativas:[
            "Alternativa 1",
            "Alternativa 2"
        ]

    }//fechar a o objeto da lista (fim do item)
]//fechando a lista toda (completa)