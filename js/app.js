function calcularDesconto() {
    // 1. Declaração de variáveis e Atribuição de valores (ENTRADA)
    const valorProduto = Number(document.getElementById('valor').value);
    const percentualDesconto = Number(document.getElementById('desconto').value);

    // 2. Cálculos e Validações (PROCESSAMENTO)
    const valorDesconto = valorProduto / 100 * percentualDesconto;
    const novoValor = valorProduto - valorDesconto;

    let resultado = `Preço do produto: R$ ${valorProduto.toFixed(2).replace('.', ',')}`;

    // resultado = resultado + `<br>Desconto de ??%: R$ 50,00`;
    resultado +=
        `<br>Desconto de ${percentualDesconto.toFixed(1).replace('.', ',')}%: R$ ${valorDesconto.toFixed(2).replace('.', ',')}`;

    resultado +=`<br>Preço do produto com desconto: R$ ${novoValor.toFixed(2).replace('.', ',')}`;

    // Injeta os dados do resultado no HTML
    document.getElementById('resultado').innerHTML = resultado;
}