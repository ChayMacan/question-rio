const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativa = document.querySelector(".caixa-alternativa");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "qual é a data da idenpendência do Brasil ?",
        alternativas: ["07 de setembro","15 de novembro","21 de abril"]
    },
    {
        enunciado: "Pergunta 2",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    }, 
    {
        enunciado: "Pergunta 4",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    }, 


];


let atual = 0;
let perguntaAtual;

function mostraPergunta(){
perguntaAtual = perguntas[atual];
caixaPergunta.textContent = perguntaAtual.enunciado;

}

mostraPergunta();





