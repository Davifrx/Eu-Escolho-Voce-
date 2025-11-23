const botaoSortear = document.getElementById("botaoSortear");
const imagem = document.getElementById("imagem");
const fundo = document.getElementById("fundo");
const fundoDireito = document.getElementById("fundoDireito"); 

const cardInfo = document.getElementById("infoHobby");
const tituloHobby = document.getElementById("tituloHobby");
const descricaoHobby = document.getElementById("descricaoHobby");

const hobbies = [
  {
    nome: "Que tal pedalar por ai?",
    img: "imgs/bike.jpg",
    bg: "imgs/bg-bike.jpg",
    desc: "Pedalar pelas ruas é uma forma de apreciar os espaços urbanos em um ritmo mais leve. <br><br>A bike te coloca em movimento, mas sem pressa, é um jeito de enxergar o mundo ao seu redor com mais atenção. <br><br>Ao pedalar, cada trajeto vira uma oportunidade de observar detalhes, sentir o ambiente e se conectar com a cidade de um jeito mais calmo e artístico. Quem sabe você não acaba parando em um café?",
    titulo: "Bike",
    sub: "Um jeito de explorar a cidade sem pressa"
  },
  {
    nome: "Surfando no asfalto",
    img: "imgs/skate.jpg",
    bg: "imgs/bg-skate.jpg",
    desc: "O skate traz uma nova perspectiva sobre os espaços urbanos, um banco vira uma borda, uma lata de lixo um obstáculo, uma ladeira em uma mega rampa. <br><br>Andar de skate é uma forma de expressão artistica do seu eu, não existe jeito certo ou errado, a única regra é se divertir! <br><br>Entre vários estilos, o mais famoso é o street pois o modelo de skate dessa modalidade é mais versátil para andar como você quiser.",
    titulo: "Skate",
    sub: "O skate transforma movimento em expressão urbana"
  },
  {
    nome: "Arte marcial originária da Tailândia",
    img: "imgs/muay-thai.jpg",
    bg: "imgs/bg-muay.jpg",
    desc: "O Muay Thai surgiu há mais de 2 mil anos na Tailândia, criado como forma de defesa pelos soldados em tempos de guerra. <br><br>Conhecido como a “arte das oito armas”, combina punhos, cotovelos, joelhos e pés em um estilo de combate completo. <br><br>Com o tempo, deixou de ser apenas uma técnica militar e se tornou uma prática cultural importante, evoluindo até alcançar reconhecimento mundial como uma arte marcial tradicional, intensa e cheia de história.",
    titulo: "Muay Thai",
    sub: "Disciplina física e mental",
  },
  {
    nome: "Dançar é se mexer na batida do sentimento!",
    img: "imgs/dança.jpg",
    bg: "imgs/bg-danca.jpg",
    desc: "Deixar o corpo acompanhar a música e criar seu próprio ritmo é algo maravilhoso. Um bom som toca a alma e faz a gente chacoalhar o esqueleto. <br><br> É uma maneira solta e natural de se expressar, liberar energia e descobrir novas sensações através do movimento.<br><br> Independentemente do estilo, a dança transforma o ambiente em liberdade.",
    titulo: "Dança",
    sub: "Sinta o ritmo que você deseja"
  },
  {
    nome: "Se equilibrar em uma corda?!",
    img: "imgs/slackline.jpg",
    bg: "imgs/bg-slackline.jpg",
    desc: "Sim, você deve tentar um dia andar em uma corda, e essa corda é conhecida como corda bamba.<br><br> Slackline é uma prática de equilíbrio que utiliza uma fita flexível esticada entre dois pontos fixos, permitindo que o praticante caminhe e realize manobras.<br><br> Equilíbrio vira pura concentração, o esforço é muito mais mental. A recompensa? Equilíbrio físico e mental.",
    titulo: "Slackline",
    sub: "Um esporte um tanto quanto interessante"
  },
  {
    nome: "O 'Kung-Fu' lento",
    img: "imgs/tai-chi.jpg",
    bg: "imgs/bg-tai-chi.jpg",
    desc: "O Tai Chi Chuan é uma arte marcial chinesa com raízes antigas, surgida entre os séculos VIII e XIII como uma evolução de práticas do Kung Fu. Com o tempo, deixou de ser apenas uma técnica de combate e se transformou em uma prática reconhecida por promover saúde, equilíbrio e bem-estar. <br><br>Sua base filosófica está profundamente conectada ao Taoísmo, que valoriza a harmonia entre os opostos — o yin e o yang — e o fluxo contínuo da energia vital, o qi.<br><br> Por isso, o Tai Chi combina movimentos suaves, respiração consciente e atenção plena, criando uma espécie de “meditação em movimento”. Essa ligação com o Taoísmo faz da prática não só um exercício físico, mas também um caminho para cultivar calma, presença e equilíbrio interno.",
    titulo: "Tai Chi Chuan",
    sub: "A prática chinesa que harmoniza o corpo ao fluxo natural da energia"
  },
  {
    nome: "Adrenalina e natureza é uma boa dupla",
    img: "imgs/trilha.jpg",
    bg: "imgs/bg-trilha.jpg",
    desc: "Ja pensou em se enfiar no mato e sair andando por um caminho quase sempre difícil, desafiador, com lama, rochas e insetos? Pois começe a pensar!<br><br> Esses pontos que falei podem parecer desmotivadores, brincandeiras a parte claro, mas acredite: fazer trilha é se conectar com a natureza.<br><br> Quanto mais desafior é a experiência, mais recompensador é. Depois de um caminho árduo, não existe preço para as risadas que você teve no pico da trilha, e muito menos para a história que você vai ter para contar aos seus netos.",
    titulo: "Trilha",
    sub: "Para aqueles que buscam o melhor da vida"
  },
  {
    nome: "Ta afim de ficar mais elástico/a?",
    img: "imgs/yoga.jpg",
    bg: "imgs/bg-yoga.jpg",
    desc: "O Yoga é uma prática milenar que combina posturas físicas, respiração consciente e momentos de meditação. Ele trabalha o corpo de forma suave, porém profunda, ajudando a melhorar a flexibilidade, fortalecer os músculos e alinhar a postura.<br><br> Além dos benefícios físicos, o Yoga também reduz o estresse, melhora o foco e aumenta a sensação de bem-estar. <br><br>Ao unir movimento, respiração e presença, a prática ajuda a equilibrar corpo e mente, tornando o dia a dia mais leve e saudável.",
    titulo: "Yoga",
    sub: "Prepare-se para sentir ossos estralando que você nem sabia que tinha"
  },
  {
    nome: "Prepare o folego",
    img: "imgs/corrida.jpg",
    bg: "imgs/bg-corrida.jpg",
    desc: "Correr é uma das formas mais acessíveis e eficientes de cuidar da saúde.<br><br> Além de melhorar o condicionamento físico, fortalecer o coração e aumentar a resistência, a corrida também ajuda a reduzir o estresse, liberar endorfina e melhorar o humor. <br><br>É um exercício que se adapta ao seu ritmo: você pode começar devagar, aumentar a intensidade aos poucos e transformar cada percurso em uma forma de cuidar do corpo e da mente ao mesmo tempo. <br><br>Com o tempo, correr se torna uma rotina leve, que limpa os pensamentos e traz mais energia para o dia.",
    titulo: "Corrida",
    sub: "Correr sério, não só atrás do ônibus sabe?"
  },
  {
    nome: "Sim, você deveria praticar a escalada",
    img: "imgs/escalada.jpg",
    bg: "imgs/bg-escalada.jpg",
    desc: "Cada parede ou rocha vira um pequeno desafio que você resolve com calma, usando o corpo e a mente ao mesmo tempo. À medida que você sobe, aprende a controlar a respiração, planejar movimentos e confiar no próprio ritmo. <br><br>É uma atividade que melhora a resistência muscular, o equilíbrio e a coordenação — mas também cria uma sensação de presença, como se tudo ficasse mais silencioso enquanto você se concentra apenas no próximo apoio. <br><br>A escalada é intensa, mas ao mesmo tempo meditativa: um jeito de se conhecer melhor enquanto supera obstáculos um por um.",
    titulo: "Escalada",
    sub: "Esse é um dos esportes que proporciona uma expêriencia única"
  }
];

let intervalo;

botaoSortear.addEventListener("click", () => {
  botaoSortear.disabled = true;
  cardInfo.classList.add("oculto");
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  intervalo = setInterval(() => {
    const aleatoria = Math.floor(Math.random() * hobbies.length);
    imagem.src = hobbies[aleatoria].img;
  }, 100);

  setTimeout(() => {
    clearInterval(intervalo);
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    const index = Math.floor(Math.random() * hobbies.length);
    const hobbyFinal = hobbies[index];

    const tituloAtual = document.getElementById("tituloAtual");
    const subDesc = document.getElementById("subDesc");

    tituloAtual.classList.remove("fadeIn");
    subDesc.classList.remove("fadeIn");

    void tituloAtual.offsetWidth;

    tituloAtual.innerHTML  = hobbyFinal.nome;
    subDesc.innerHTML  = hobbyFinal.frase;

    tituloAtual.classList.add("fadeIn");
    subDesc.classList.add("fadeIn");

    document.getElementById("subDesc").innerHTML  = hobbyFinal.sub;
    document.getElementById("tituloAtual").innerHTML  = hobbyFinal.titulo;

    imagem.src = hobbyFinal.img;

    fundoDireito.style.backgroundImage = `url(${hobbyFinal.bg})`;

    fundoDireito.classList.remove("bg-animacao");
    void fundoDireito.offsetWidth;
    fundoDireito.classList.add("bg-animacao");

    tituloHobby.innerHTML  = hobbyFinal.nome;
    descricaoHobby.innerHTML  = hobbyFinal.desc;
    cardInfo.classList.remove("oculto");

    botaoSortear.disabled = false;
  }, 2000);
});

const cardInicial = document.getElementById("cardInicial");

document.getElementById("botaoSortear").addEventListener("click", () => {
document.getElementById("cardInicial").style.display = "none";
});