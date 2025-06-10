const produtos = [
  { nome: "Camisa", quantidade: 10 },
  { nome: "Calça", quantidade: 5 },
  { nome: "Tênis", quantidade: 0 },
  { nome: "Boné", quantidade: 2 },
  { nome: "Cinto", quantidade: 8 },
  { nome: "Meia", quantidade: 1 },
]

produtos.forEach((i) => {
  if(i.quantidade <= 3){
    console.log("Produto "+ i.nome +" está com estoque crítico:"+ i.quantidade +" unidades.")
  }
});