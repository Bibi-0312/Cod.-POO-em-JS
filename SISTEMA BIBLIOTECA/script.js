class Livro {
 // Complete o construtor aqui
 constructor(titulo, autor, anoPublicacao,capa) {
 // Inicialize as propriedades aqui
 this.titulo = titulo;
 this.autor = autor;
 this.anoPublicacao = anoPublicacao;
 this.disponivel = true;
 this.capa = capa;
 }

 // Implemente os métodos abaixo
 obterInformacoes() {
 // Deve retornar uma string com título, autor e ano
 return `${this.titulo} por ${this.autor} (${this.anoPublicacao})`;
 }

 estaDisponivel() {
 // Deve retornar true se o livro estiver disponível
 return this.disponivel;
 }

 emprestar() {
 // Deve marcar o livro como indisponível
 this.disponivel = false;
 }

 devolver() {
 // Deve marcar o livro como disponível
 this.disponivel = true;
 }
}
// Teste sua implementação
const meuLivro = new Livro ("Dom Casmurro", "Machado de Assis", 1899);
console.log(meuLivro.obterInformacoes());
console.log("Disponível:", meuLivro.estaDisponivel());
meuLivro.emprestar();
console.log("Disponível após empréstimo:", meuLivro.estaDisponivel());
meuLivro.devolver();
console.log("Disponível após devolução:", meuLivro.estaDisponivel());

// Teste sua implementação // Livro 2
const meuLivro2 = new Livro ("Harry Potter e a Pedra Filosofal", "J.K Rowling", 1997);
console.log(meuLivro2.obterInformacoes());
console.log("Disponível:", meuLivro2.estaDisponivel());
meuLivro2.emprestar();
console.log("Disponível após empréstimo:", meuLivro2.estaDisponivel());
meuLivro2.devolver();
console.log("Disponível após devolução:", meuLivro2.estaDisponivel());

// Teste sua implementação // Livro 3
const meuLivro3 = new Livro ("A culpa é das Estrelas", "John Green", 2012);
console.log(meuLivro3.obterInformacoes());
console.log("Disponível:", meuLivro3.estaDisponivel());
meuLivro3.emprestar();
console.log("Disponível após empréstimo:", meuLivro3.estaDisponivel());
meuLivro3.devolver();
console.log("Disponível após devolução:", meuLivro3.estaDisponivel());

// Teste sua implementação // Livro 4
const meuLivro4 = new Livro ("jogos Vorazes em Chamas", "Suzanne Collins", 2011);
console.log(meuLivro4.obterInformacoes());
console.log("Disponível:", meuLivro4.estaDisponivel());
meuLivro4.emprestar();
console.log("Disponível após empréstimo:", meuLivro4.estaDisponivel());
meuLivro4.devolver();
console.log("Disponível após devolução:", meuLivro4.estaDisponivel());

// Teste sua implementação // Livro 5
const meuLivro5 = new Livro ("As crônicas de Nárnia: o Leão, a Feiticeira e o Guarda-Roupa", "C.S.Lewis", 1950);
console.log(meuLivro5.obterInformacoes());
console.log("Disponível:", meuLivro5.estaDisponivel());
meuLivro5.emprestar();
console.log("Disponível após empréstimo:", meuLivro5.estaDisponivel());
meuLivro5.devolver();
console.log("Disponível após devolução:", meuLivro5.estaDisponivel());



    function carregarLivrosTabela(){
     const livros = [ 
        new Livro("Dom Casmurro", "Machado de Assis", 1899),
        new Livro("Harry Potter e a Pedra Filosofal", "J.K Rowling", 1997),
        new Livro("A culpa é das Estrelas", "John Green", 2012),
        new Livro("jogos Vorazes em Chamas", "Suzanne Collins", 2011),
        new Livro("As crônicas de Nárnia: o Leão, a Feiticeira e o Guarda-Roupa", "C.S.Lewis", 1950),
     ];
    
   livros[5].emprestar();
    let tableLivros = document.getElementById("livros-tbody");
    for (let livro of livros) {
        let row = document.createElement("tr");
        let titulo = document.createElement("td");
        titulo.textContent = livro.titulo;
        let autor = document.createElement("td");
        autor.textContent = livro.autor;
        let ano = document.createElement("td");
        ano.textContent = livro.anoPublicacao;
        let disponivel = document.createElement("td");
        disponivel.textContent = livro.estaDisponivel() ? "Sim" : "Não";
        let tdEmprestar = document.createElement("td");
    
        let btnEmprestar = document.createElement("button");
        btnEmprestar.textContent = "Emprestar";
        btnEmprestar.disabled = !livro.estaDisponivel();
        btnEmprestar.addEventListener("click", ()=> {
            livro.emprestar();
            disponivel.textContent = "Não";
            btnEmprestar.disabled = true;
        });
        tdEmprestar.appendChild(btnEmprestar);
        row.appendChild(titulo);
        row.appendChild(autor);
        row.appendChild(ano);
        row.appendChild(disponivel);
        row.appendChild(tdEmprestar);
        tableLivros.appendChild(row);   
    }
}
document.addEventListener("DOMContentLoaded", carregarLivrosTabela)
     
    