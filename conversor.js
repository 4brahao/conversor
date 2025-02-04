async function converterMoeda() {
    const moedaOrigem = document.getElementById("moedaOrigem").value;
    const moedaDestino = document.getElementById("moedaDestino").value;
    const valorEntrada = document.getElementById("valorEntrada").value;
    const resultado = document.getElementById("resultado");

    if (valorEntrada === "" || valorEntrada <= 0) {
        resultado.innerText = "Digite um valor válido!";
        return;
    }

    try {
        
        const apiKey = "814f08e10f4753b7f55ad224";
        const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${moedaOrigem}`;

    
        const response = await fetch(url);
        const data = await response.json();


        const taxaCambio = data.conversion_rates[moedaDestino];

        if (!taxaCambio) {
            resultado.innerText = "Conversão não disponível.";
            return;
        }

        
        const valorConvertido = (valorEntrada * taxaCambio).toFixed(2);
        resultado.innerText = `Valor convertido: ${moedaDestino} ${valorConvertido}`;
    } catch (error) {
        resultado.innerText = "Erro ao obter a cotação. Tente novamente mais tarde.";
        console.error("Erro na conversão:", error);
    }
}
