# Calculadora Web

Uma calculadora interativa desenvolvida com tecnologias web fundamentais (HTML5, CSS3 e JavaScript). O projeto foca em uma interface de usuário moderna e uma experiência de uso fluida, utilizando o conceito de **Glassmorphism** para o design.

## ✨ Demonstração e Design

A interface foi projetada para ser responsiva e visualmente atraente:

- **Efeito Glassmorphism**: Utiliza fundos semitransparentes com desfoque (`backdrop-filter: blur`) e bordas suaves para um visual contemporâneo.
- **Layout Flexível**: O design utiliza **CSS Flexbox** para garantir que a calculadora e seus botões estejam perfeitamente alinhados e centralizados na tela.
- **Feedback Visual**: Botões com efeitos de _hover_ e transições suaves, proporcionando uma melhor experiência de clique.

## 🚀 Funcionalidades

A calculadora suporta operações matemáticas essenciais e utilitários de edição:

- **Operações Básicas**: Adição, subtração, multiplicação e divisão.
- **Cálculo de Porcentagem**: Funcionalidade integrada para cálculos rápidos de proporção.
- **Inversão de Sinal**: Botão `+/-` para alternar entre valores positivos e negativos.
- **Limpeza Inteligente**:
  - `AC`: Limpa todo o histórico e o visor.
  - `DEL`: Apaga o último caractere digitado, permitindo correções rápidas.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica dos elementos da calculadora.
- **CSS3**: Estilização avançada, incluindo o uso de gradientes lineares e propriedades modernas de layout.
- **JavaScript (ES6+)**: Manipulação do DOM e lógica de processamento matemático.

## 🧠 Lógica de Implementação

O projeto utiliza uma abordagem baseada em eventos para capturar as entradas do usuário:

1.  **Captura de Input**: O sistema identifica se o usuário clicou em um número, operador ou função especial.
2.  **Processamento**: Utiliza a função `eval()` de forma controlada para avaliar a expressão matemática gerada na string de exibição.
3.  **Tratamento de Erros**: Inclui lógica para lidar com divisões por zero ou expressões inválidas, exibindo "Error" no visor quando necessário.

## 📂 Estrutura de Arquivos

- `index.html`: A estrutura principal e os botões da calculadora.
- `style.css`: Toda a identidade visual e animações.
- `script.js`: O "cérebro" da aplicação que processa os cálculos.

---

## _Este projeto foi criado com o intuito de demonstrar habilidades em Front-end, focando na integração entre design moderno e funcionalidade lógica._

## Desenvolvimento

Esse projeto foi desenvolvido durante a disciplina de 'Programação Web', cursada no 2° Período do curso de Bacharelado em Ciência da Computação na Pontifícia Universidade Católica do Paraná (PUCPR).
