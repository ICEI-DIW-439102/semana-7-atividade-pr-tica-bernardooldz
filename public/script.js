// 1. Dados iniciais (tipos básicos)

// Pergunte o nome do usuário (string)
// Pergunte a renda mensal (number)
// Pergunte a quantidade de despesas que será informada (number)
// Regra: limite entre 1 e 5 (se for menor que 1, usar 1; se for maior que 5, usar 5)

// 2. Validação com while

// Sempre que o usuário digitar um valor que não seja número (ex.: “abc”), você deve repetir o prompt até vir um número válido.
// (Use Number(...) e isNaN(...))

// 3. Lançamento de despesas com for

// Use um for para perguntar o valor de cada despesa e somar no total.
// Exemplo: “Despesa 1”, “Despesa 2”, etc.

// 4. Análise com if / else

// Com base no total de despesas, classifique o orçamento:

// Se despesas > renda → “⚠️ Atenção: você gastou mais do que ganhou.”
// Senão, calcule a sobra (renda − despesas) e:
// se sobra >= 30% da renda → “✅ Ótimo: boa margem de sobra.”
// senão → “🙂 Ok: dá para melhorar a sobra.”

// 5. Saída final

// Mostre:

// Nome do usuário
// Renda (com duas casas decimais)
// Total de despesas (com duas casas decimais)
// Sobra (com duas casas decimais)
// Mensagem de classificação (das regras acima)
// Você deve exibir o resultado:

// em um alert() e
// no console.log() (com um texto bem organizado)

var nome = "";
var rendaMensal = 0;
var quantidadeDespesas = 0;

nome = prompt("Digite seu nome: ");
rendaMensal = Number(prompt("Digite sua renda mensal: "));
quantidadeDespesas = Number(
  prompt("Digite a quantidade de despesas que será informada (1-5): "),
);

while (isNaN(rendaMensal) || rendaMensal < 0) {
  rendaMensal = Number(prompt("Valor inválido. Digite sua renda mensal: "));
}

while (
  isNaN(quantidadeDespesas) ||
  quantidadeDespesas < 1 ||
  quantidadeDespesas > 5
) {
  quantidadeDespesas = Number(
    prompt("Valor inválido. Digite a quantidade de despesas (1-5): "),
  );
}

var totalDespesas = 0;

for (var i = 1; i <= quantidadeDespesas; i++) {
  var despesa = Number(prompt(`Digite o valor da despesa ${i}: `));

  while (isNaN(despesa) || despesa < 0) {
    despesa = Number(
      prompt(`Valor inválido. Digite o valor da despesa ${i}: `),
    );
  }

  totalDespesas += despesa;
}

var mensagemFinal = "";

if (totalDespesas > rendaMensal) {
  mensagemFinal = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  var sobra = rendaMensal - totalDespesas;
  if (sobra >= 0.3 * rendaMensal) {
    mensagemFinal = "Ótimo: boa margem de sobra.";
  } else {
    mensagemFinal = "Ok: dá para melhorar a sobra.";
  }
}

console.log(`Nome: ${nome}`);
console.log(`Renda Mensal: R$ ${rendaMensal.toFixed(2)}`);
console.log(`Total de Despesas: R$ ${totalDespesas.toFixed(2)}`);
console.log(`Sobra: R$ ${(rendaMensal - totalDespesas).toFixed(2)}`);
console.log(`Classificação: ${mensagemFinal}`);

alert(
  `Nome: ${nome}\nRenda Mensal: R$ ${rendaMensal.toFixed(2)}\nTotal de Despesas: R$ ${totalDespesas.toFixed(2)}\nSobra: R$ ${(rendaMensal - totalDespesas).toFixed(2)}\nClassificação: ${mensagemFinal}`,
);
