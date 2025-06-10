class livro{
  constructor(titulo, autor, ano){
  this.titulo = titulo
  this.autor = autor
  this.ano = ano 
}

detalhes() {
  return `O livro ${this.titulo} foi escrito por ${this.autor} em ${this.ano}`
}
}

const livroT = new livro("turma da monica","Mauricio de Souza", 1959)
const livroH = new livro("HP","JK", 1)
console.log(livroT.detalhes())
console.log(livroH.detalhes())