1) // Escreva um programa em JavaScript que apresente uma caixa de alerta para o usuário com uma informação qualquer.
 
    // Define a mensagem a ser exibida na caixa de alerta

    var mensagem = "Eai professor!";

    // Exibe a caixa de alerta com a mensagem

    alert(mensagem);

 
2) // Crie um  script em que o usuário clicará com o botão e em seguida uma mensagem de alerta será apresentada com uma mensagem qualquer.
 
<button id="botao">Clique Aqui</button>

    // Função que será chamada quando o botão for clicado

    function exibirAlerta() {

    // Mensagem a ser exibida na caixa de alerta

    var mensagem = "Eai professor!";
 
    // Exibe a caixa de alerta com a mensagem

    alert(mensagem);

}
 
    // Obtém o botão pelo seu ID

    var botao = document.getElementById("botao");
 
    // Adiciona um evento de clique ao botão, que chamará a função exibirAlerta

    botao.addEventListener("click", exibirAlerta);
 
 
3) // De exemplo dos seguintes formas de trabalhar com DOM(Document Object Model), e explique:

  1 - document.getElementById():
 
 Este método retorna uma referência para o primeiro elemento com o ID especificado.

  <!DOCTYPE html>

  <html lang="pt-br">
  
  <head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exemplo document.getElementById()</title>

</head>

<body>

    <!-- Elemento com o ID "titulo" -->

    <h1 id="titulo">DDM</h1>
 
    <script>

        // Obtém uma referência para o elemento com o ID "titulo"

        var titulo = document.getElementById("titulo");

        console.log(titulo.textContent); // Saída: "Olá, mundo!"

    </script>

</body>

</html>
 
2 - document.getElementsByTagName():

Este método retorna uma coleção de todos os elementos com o nome da tag especificada.

  <!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exemplo document.getElementsByTagName()</title>

</head>

<body>

    <!-- Elementos de parágrafo -->

    <p>Parágrafo 1</p>

    <p>Parágrafo 2</p>

    <p>Parágrafo 3</p>
 
    <script>

        // Obtém uma coleção de todos os elementos de parágrafo

        var paragrafos = document.getElementsByTagName("p");

        console.log(paragrafos.length); // Saída: 3

    </script>

</body>

</html>
 
3 - document.getElementsByClassName():

Este método retorna uma coleção de todos os elementos que possuem a classe CSS especificada.

  <!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exemplo document.getElementsByClassName()</title>

    <style>

        .destaque {

            color: red;

        }

    </style>

</head>

<body>

    <!-- Elementos com a classe "destaque" -->

    <p class="destaque">Texto 1</p>

    <p class="destaque">Texto 2</p>

    <p>Texto 3</p>
 
    <script>

        // Obtém uma coleção de todos os elementos com a classe "destaque"

        var elementosDestaque = document.getElementsByClassName("destaque");

        console.log(elementosDestaque.length); // Saída: 2

    </script>

</body>

</html>
 
4 - document.querySelector():

Este método retorna a primeira ocorrência de um elemento que corresponde ao seletor CSS especificado.

  <!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exemplo document.querySelector()</title>

</head>

<body>

    <!-- Elemento com o ID "titulo" -->

    <h1 id="titulo">Olá, mundo!</h1>
 
    <script>

        // Obtém a primeira ocorrência do elemento com o ID "titulo"

        var titulo = document.querySelector("#titulo");

        console.log(titulo.textContent); // Saída: "Olá, mundo!"

    </script>

</body>

</html>
 
5 - document.querySelectorAll():

Este método retorna todos os elementos que correspondem ao seletor CSS especificado em uma NodeList.

  <!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exemplo document.querySelectorAll()</title>

</head>

<body>

    <!-- Elementos de parágrafo -->

    <p>Parágrafo 1</p>

    <p>Parágrafo 2</p>

    <p>Parágrafo 3</p>
 
    <script>

        // Obtém todos os elementos de parágrafo

        var paragrafos = document.querySelectorAll("p");

        console.log(paragrafos.length); // Saída: 3

    </script>

</body>

</html>
 
 
4) // Descreva e crie exemplos com suas formas diferente eventos no javascript,segue alguns exemplo:

1 - onmouseover:

Este evento é acionado quando o cursor do mouse é movido sobre um elemento.

  <!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exemplo onmouseover</title>

</head>

<body>

    <!-- Elemento que dispara o evento -->

    <button onmouseover="alert('Mouse sobre o botão!')">Passe o mouse aqui</button>

</body>

</html>
 
2 - onfocus: 

Este evento é acionado quando um elemento recebe foco, geralmente através de tabula ou clique.

  <!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exemplo onfocus</title>

</head>

<body>

    <!-- Elemento que dispara o evento -->

    <input type="text" onfocus="alert('Campo de texto em foco!')">

</body>

</html>
 
3 - onchange:

Este evento é acionado quando o valor de um elemento é alterado.

  <!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exemplo onchange</title>

</head>

<body>

    <!-- Elemento que dispara o evento -->

    <input type="text" onchange="alert('Valor alterado!')">

</body>

</html>
 
4 - onclick:

Este evento é acionado quando um elemento é clicado.

  <!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exemplo onclick</title>

</head>

<body>

    <!-- Elemento que dispara o evento -->

    <button onclick="alert('Botão clicado!')">Clique Aqui</button>

</body>

</html>
 
5 - onsubmit:

Este evento é acionado quando um formulário é submetido.
 
<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Exemplo onsubmit</title>

</head>

<body>

    <!-- Formulário que dispara o evento -->

    <form onsubmit="alert('Formulário enviado!')">

        <input type="submit" value="Enviar">

    </form>

</body>

</html>
 
5) // De exemplo de os tipos de funções:

1 - Função Nomeada:

Uma função nomeada é definida com um nome específico e pode ser chamada pelo seu nome.

  // Função nomeada

function saudacao() {

    console.log("Olá! Esta é uma função nomeada.");

}
 
// Chamando a função

saudacao(); // Saída: Olá! Esta é uma função nomeada.
 
2 - Função Nomeada com argumento e retorno:

Uma função nomeada com argumentos e retorno recebe valores como entrada, executa uma operação e retorna um resultado.

  // Função nomeada com argumento e retorno

function soma(a, b) {

    return a + b;

}
 
// Chamando a função e atribuindo o resultado a uma variável

var resultado = soma(3, 5);

console.log(resultado); // Saída: 8
 
3 - Função com Construtor:

Funções construtoras são usadas para criar objetos com propriedades e métodos.

  // Função construtora

function Pessoa(nome, idade) {

    this.nome = nome;

    this.idade = idade;

}
 
// Criando um objeto usando a função construtora

var pessoa1 = new Pessoa("João", 30);

console.log(pessoa1.nome); // Saída: João

console.log(pessoa1.idade); // Saída: 30
 
4 - Função Literal (variável):

Funções literais são atribuídas a variáveis e podem ser passadas como argumentos para outras funções.

  // Função literal atribuída a uma variável

var quadrado = function(x) {

    return x * x;

};
 
// Chamando a função atribuída à variável

console.log(quadrado(4)); // Saída: 16
 
5 - Função de Flecha (Arrow functions):

As funções de flecha são uma forma mais concisa de escrever funções em JavaScript.

  // Função de flecha para calcular o quadrado de um número

var quadrado = (x) => {

    return x * x;

};
 
// Chamando a função de flecha

console.log(quadrado(4)); // Saída: 16
 
6) //  Desenvolva um script qua ao clicar no botão conta o numero de vezes clicado,
em que seja separado o HTML e o JavaScript.

<!DOCTYPE html>
    
<html lang="pt-br">
    
<head>
    
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Contador de Cliques</title>
    
</head>
    
<body>
     
    <!-- Botão que será clicado -->
    
    <button id="botao">Clique Aqui</button>
     
    <!-- Elemento para exibir o número de cliques -->
    
    <p id="contador">Número de cliques: 0</p>
     
    <!-- Incluindo o script JavaScript -->
    
    <script src="script.js"></script>
     
</body>
    
</html>
 
JAVASCRIPT:
 
    // Função para contar o número de cliques

    function contarCliques() {

    // Obtém o elemento do contador pelo ID

    var contadorElemento = document.getElementById("contador");
 
    // Obtém o número atual de cliques convertendo o texto do contador para número

    var numeroCliques = parseInt(contadorElemento.textContent);
 
    // Incrementa o número de cliques

    numeroCliques++;
 
    // Atualiza o texto do contador com o novo número de cliques

    contadorElemento.textContent = "Número de cliques: " + numeroCliques;

    }
 
    // Obtém o botão pelo ID

    var botao = document.getElementById("botao");

    // Adiciona um evento de clique ao botão, que chamará a função contarCliques

    botao.addEventListener("click", contarCliques);


7) // Crie uma função que receba uma string como parâmetro
     e retorne a mesma string com todas as letras em caixa alta.
    Utilize essa função para converter diferentes strings.

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Converter para Caixa Alta</title>
</head>
<body>

<!-- Elemento onde exibiremos o resultado -->
<div id="resultado"></div>

  <script>
    // Definição da função para converter para caixa alta
    function converterParaCaixaAlta(str) {
        return str.toUpperCase();
    }
    
    // Exemplos de utilização da função
    var exemplo1 = converterParaCaixaAlta("Olá, mundo!");
    var exemplo2 = converterParaCaixaAlta("JavaScript é incrível.");
    var exemplo3 = converterParaCaixaAlta("OpenAI");
    
    // Exibindo os resultados na página
    document.getElementById("resultado").innerHTML = "<p>" + exemplo1 + "</p>" +
                                                     "<p>" + exemplo2 + "</p>" +
                                                     "<p>" + exemplo3 + "</p>";
  </script>
</body>
</html>

8) // Crie uma função que receba dois números como parâmetros e retorne a soma deles.
     Utilize essa função para realizar somas diferentes.
       
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Soma de Números</title>
</head>
<body>

<!-- Elemento onde exibiremos o resultado -->
<div id="resultado"></div>

<script>
      // Definição da função para somar números
      function somarNumeros(num1, num2) {
          // Retorna a soma dos dois números
          return num1 + num2;
      }
      
      // Exemplos de utilização da função para realizar somas diferentes
      var resultado1 = somarNumeros(5, 3);
      var resultado2 = somarNumeros(-10, 20);
      var resultado3 = somarNumeros(7.5, 2.5);
      
      // Exibindo os resultados na página
      document.getElementById("resultado").innerHTML = "<p>Resultado 1: " + resultado1 + "</p>" +
                                                       "<p>Resultado 2: " + resultado2 + "</p>" +
                                                       "<p>Resultado 3: " + resultado3 + "</p>";
  </script>
  
  </body>
  </html>
  
