calcute = (valorInicial, valorAtual, tempo) => {
  const juros = (valorAtual - valorInicial) / (valorInicial * tempo)

  console.log((juros * 100).toFixed(2) + '%')
}

calcute(100, 1200, 10)
