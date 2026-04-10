// ---------------------------------
// ELEMENTOS DO DOM
// ---------------------------------
const display = document.getElementById("display");
const historicoLista = document.getElementById("historico-lista");

// ---------------------------------
// VARIÁVEL GLOBAL PARÊNTESES
// true = próximo clique será "("
// false = próximo clique será ")"
// ---------------------------------
let parenteses = true;

// ---------------------------------
// FUNÇÃO ESCREVER NO DISPLAY
// ---------------------------------
function escrever(elemento) {
  let valorElemento = elemento.innerText;

  if (elemento.id === "parenteses") {
    // Alterna entre abrir "(" e fechar ")"
    if (parenteses) {
      display.value += "(";
      parenteses = false;
    } else {
      display.value += ")";
      parenteses = true;
    }
  } else {
    display.value += valorElemento;
  }
}

// ---------------------------------
// FUNÇÃO LIMPAR
// valor = true → apaga último caractere
// valor = false → limpa tudo
// ---------------------------------
function limpar(valor) {
  let textoAtual = display.value;

  if (valor) {
    display.value = textoAtual.slice(0, -1);
  } else {
    display.value = "";
  }
}

// ---------------------------------
// FUNÇÃO CALCULAR
// ---------------------------------
function calcular() {
  let expressao = display.value;
  if (!expressao) return;

  try {
    let expr = expressao
      .replace(/,/g, ".") // converte vírgula para ponto
      .replace(/÷/g, "/") // substitui ÷ por /
      .replace(/x/g, "*"); // substitui x por *

    // Função para processar porcentagem relativa
    expr = expr.replace(
      /(\d+(\.\d+)?)\s*([+\-*/])\s*(\d+(\.\d+)?)%/g,
      (match, a, _, operador, b) => {
        switch (operador) {
          case "+":
            return `(${a}+(${a}*${b}/100))`;
          case "-":
            return `(${a}-(${a}*${b}/100))`;
          case "*":
            return `(${a}*(${b}/100))`;
          case "/":
            return `(${a}/(${b}/100))`;
        }
      }
    );

    // Avalia a expressão
    let resultado = eval(expr);

    if (!isFinite(resultado)) {
      display.value = "Erro";
      return;
    }

    // Converte ponto para vírgula
    resultado = String(resultado).replace(/\./g, ",");

    // Mostra no display
    display.value = resultado;

    // Salva no histórico
    salvarHistorico(expressao, resultado);
  } catch (e) {
    entrada.value = "Erro";
  }
}

// ---------------------------------
// HISTÓRICO
// ---------------------------------

// Salva no Local Storage e atualiza a tela
function salvarHistorico(expressao, resultado) {
  let historico = JSON.parse(localStorage.getItem("historico")) || [];

  // Adiciona no início
  historico.unshift({ expressao, resultado });

  // Limita máximo de 20 itens
  if (historico.length > 20) historico.pop();

  // Salva no Local Storage
  localStorage.setItem("historico", JSON.stringify(historico));

  // Atualiza exibição
  carregarHistorico();
}

// Carrega histórico do Local Storage e mostra na tela
function carregarHistorico() {
  historicoLista.innerHTML = "";
  let historico = JSON.parse(localStorage.getItem("historico")) || [];

  historico.forEach((item) => {
    let div = document.createElement("div");
    div.textContent = `${item.expressao} = ${item.resultado}`;

    // Ao clicar, traz o resultado para a display
    div.addEventListener("click", () => {
      display.value = item.resultado;
    });

    historicoLista.appendChild(div);
  });
}

// Limpa histórico (da tela e Local Storage)
function limparHistorico() {
  localStorage.removeItem("historico");
  historicoLista.innerHTML = "";
}

// ---------------------------------
// SUPORTE AO TECLADO
// ---------------------------------
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calcular();
  } else if (event.key === "Backspace") {
    event.preventDefault();
    limpar(true);
  } else if (event.key === "Delete") {
    event.preventDefault();
    limpar(false);
  }
});

// ---------------------------------
// INICIALIZAÇÃO AO CARREGAR PÁGINA
// ---------------------------------
window.onload = function () {
  carregarHistorico(); // Carrega histórico salvo
};
