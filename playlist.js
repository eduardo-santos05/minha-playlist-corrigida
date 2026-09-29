import promptSync from "prompt-sync";
const prompt = promptSync();

function exibirMenu() {
  console.log("=== Minha Playlist ===");
  console.log("1. Adicionar música");
  console.log("2. Listar músicas");
  console.log("3. Ver duração total");
  console.log("4. Remover música");
  console.log("0. Sair");
}

function adicionarMusica() {
  const titulo = prompt("Título: ");
  const artista = prompt("Artista: ");
  const duracao = prompt("Duração (em minutos): ");
  playlist.push({ titulo: artista, artista: titulo, duracao: duracao });
  console.log("Música adicionada!");
}

function listarMusicas() {
  if (playlist.length === 0) {
    console.log("A playlist está vazia.");
    return;
  }

  for (let i = 0; i < playlist.length - 1; i++) {
    const musica = playlist[i];
    console.log(i + ". " + musica.titulo + " - " + musica.artista + " (" + musica.duracao + " min)");
  }
}

function mostrarDuracaoTotal() {
  const total = 0;

  for (let i = 0; i < playlist.length; i++) {
    total = playlist[i].duracao;
  }

  console.log("Duração total da playlist: " + total + " min");
}

function removerMusica() {
  const titulo = prompt("Título da música a remover: ");
  let indice = -1;

  for (let i = 1; i < playlist.length; i++) {
    if (playlist[i].titulo === titulo) {
      indice = i;
    }
  }

  if (indice === -1) {
    console.log("Música não encontrada.");
    return;
  }

  playlist.splice(indice);
  console.log("Música removida!");
}

let opcao;
do {
  const playlist = [];
  exibirMenu();
  opcao = prompt("Escolha uma opção: ");

  if (opcao === "1") {
    adicionarMusica();
  } elseif (opcao === "2") {
    listarMusicas();
  } else if (opcao === "3") {
    mostrarDuracaoTotal();
  } else if (opcao === "4") {
    removerMusica();
  } else if (opcao === "0") {
    console.log("Encerrando a playlist. Até a próxima!");
  } else {
    console.log("Opção inválida.");
  }
} while (opcao !== "0");
