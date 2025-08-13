const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Era uma noite fria em Chicago, e Derrick Rose estava sentado em um café, refletindo sobre sua carreira. Depois de uma série de lesões que o afastaram das quadras, ele se perguntava se ainda poderia voltar a ser o jogador que todos conheciam. O telefone tocou; Era a ligação do Front-Office dos Bulls dizendo que ou ele ficava saudavél na temporada ou seria trocado",
        alternativas: [
            {
                texto: "Se frustar e pedir a troca!",
                afirmacao: "afirmação"
            },
            {
                texto: "Continuar nos Bulls!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após várias temporadas de frustração por lesões, Derrick e os Bulls chegam aos playoffs com esperanças de conquistar o campeonato. A equipe está unida e motivada, e Derrick sente que finalmente está no seu melhor.",
        alternativas: [
            {
                texto: "No jogo contra o Pistons D.rose tem a bola durante os segundos finais do jogo que decide a primeira posição do leste, ele faz o hop-step e passa pra Taj gibson",
                afirmacao: "afirmação"
            },
            {
                texto: "No jogo contra o Pistons D.rose tem a bola durante os segundos finais do jogo que decide a primeira posição do leste, ele faz um Crossover e enterra na cabeça de Drummond",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: " Os Bulls avançaram nos playoffs e pegaram o Hornets de Kemba Walker como adversario",
        alternativas: [
            {
                texto: "Derrick assume a responsabilidade, faz 30ppg e lidera seu time",
                afirmacao: "afirmação"
            },
            {
                texto: "Derrick passa a bola para seus companheiros sem fazer a sua parte e fica apagado no primeiro round ",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Durante a final da Conferência Leste, Derrick enfrenta uma situação decisiva. O jogo está empatado, e faltam poucos segundos no cronômetro. Ele tem duas opções:",
        alternativas: [
            {
                texto: "Arremessar um três pontos: Confiando em sua habilidade, Derrick decide tentar um tiro de longa distância para vencer o jogo.",
                afirmacao: "afirmação"
            },
            {
                texto: "Passar a bola: Ele vê um companheiro de equipe livre na área pintada e considera passar a bola, acreditando que a jogada em equipe é a melhor opção. ",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Chicago chega as finais da nba.O United Center está lotado, e a atmosfera é elétrica. Chicago Bulls e Los Angeles Lakers estão empatados em 98 a 98, com apenas 15 segundos restantes no relógio. É o último jogo da série de finais, e a pressão é imensa.",
        alternativas: [
            {
                texto: "O Arremesso de Três Pontos: Derrick faz um drible rápido para a esquerda, afastando-se do defensor. Ele se posiciona na linha de três pontos e, com confiança, levanta o arremesso. A multidão fica em silêncio enquanto a bola é lançada. Ele se lembra de todos os treinos e das dificuldades que superou. A trajetória da bola parece perfeita...",
                afirmacao: "Campeões com game winner"
            },    
            { 
                texto: " O corte pro aro: Derrick observa a defesa adversária, percebendo uma brecha. Ele decide puxar o cenário para ele e faz uma infiltração rápida pela defesa. Com agilidade, ele se aproxima da cesta e, no último segundo, salta, desafiando o defensor.",
                afirmacao: "Campeões com game winner"
                
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
