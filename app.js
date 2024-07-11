const cookieMessages = [
  "Siga em frente, pois a sorte sorri para os corações corajosos.",
  "Acredite no poder que reside em você. Grandes conquistas te esperam.",
  "Oportunidades surgem nos momentos mais inesperados. Esteja pronto!",
  "Seja persistente e nunca desista dos seus sonhos. A recompensa é certa.",
  "Cultive a gratidão pelas pequenas coisas e a felicidade se multiplicará.",
  "Confie na sua intuição e siga o seu caminho com sabedoria.",
  "Os desafios são apenas oportunidades para você se fortalecer.",
  "Abrace a mudança e veja o mundo com novos olhos. A magia está por perto.",
  "Espalhe gentileza e inspire aqueles que te rodeiam. O bem retorna.",
  "Acredite em si mesmo e na sua capacidade de transformar o mundo.",
];

function openCookie() {
  document.querySelector("h1").innerText = "Aqui está a sua sorte de hoje:";

  const messages = document.querySelector("p");
  messages.classList.add("message");

  const newCookie = document.querySelector("p.new-cookie");

  const imagem = document.querySelector(".btn-img img");
  imagem.setAttribute("src", "./assets/opened-cookie.png");
  imagem.setAttribute("title", "");

  const btnImg = document.querySelector(".btn-img");
  btnImg.classList.remove("broken-cookie");

  const btnCookie = document.querySelector(".btn-reset");
  btnCookie.classList.remove("hide");

  const indexRandom = Math.floor(Math.random() * cookieMessages.length);
  const msgSelected = cookieMessages[indexRandom];
  newCookie.textContent = msgSelected;
  document.querySelector("p").classList.remove("new-cookie");
}

function resetCookie() {
  document.querySelector("h1").innerText = "Qual é a sua sorte hoje?";
  document.querySelector("p").innerText = "Abra o biscoito e descubra!";
  document.querySelector("p").classList.remove("message");
  document.querySelector("p").classList.add("new-cookie");

  const imagem = document.querySelector(".btn-img img");
  imagem.setAttribute("src", "./assets/fortune-cookie.png");
  imagem.setAttribute("title", "Clique para abrir");

  const btnImg = document.querySelector(".btn-img");
  btnImg.classList.add("broken-cookie");

  const btnCookie = document.querySelector(".btn-reset");
  btnCookie.classList.add("hide");
}
