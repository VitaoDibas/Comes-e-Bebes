
class livro{
    constructor(nome, autor, localizacao, genero, paginas){
        this.nome = nome;
        this.autor = autor;
        this.localizacao = localizacao;
        this.genero = genero;
        this.paginas = paginas;
    }
}
 
var livros = [];
livros[0] = new livro("O Principe Cruel", "Holly Black", "Estante 3", "Fantasia", "322");
livros[1] = new livro("O Iluminado", "Stephen King", "Estante 1", "Terror", "464");
livros[2] = new livro("É Assim que Acaba", "Colleen Hoover", "Estante 2", "Romance", "  368");
livros[3] = new livro("1984", "George Orwell", "Estante 1", "Não-Ficção", "308");
 
 
function listar(genero){
    var i;
    var divcasa = document.getElementById('listarlivros');
    var conteudo = "<table class='table'>";
    conteudo += "<tr><th>Nome</th><th>Autor</th><th>Localização</th><th>Gênero</th><th>Páginas</th></tr>";
    for (i = 0; i< livros.length; i++){
        console.log(livros[i].genero);
        if (livros[i].genero == genero){
            conteudo += "<tr><td>"+livros[i].nome+"</td>";
            conteudo += "<td>"+livros[i].autor+"</td>";
            conteudo += "<td>"+livros[i].localizacao+"</td>";
            conteudo += "<td>"+livros[i].genero+"</td>";
            conteudo += "<td>"+livros[i].paginas+"</td></tr>";
        }
    }
    conteudo += "</table>";
    divcasa.innerHTML = conteudo;
}
 
function cadastrar(){
    var e = new livro(nome.value, autor.value, localizacao.value, genero.value, paginas.value);
    livros.push(e);
    alert("Novo livro adicionado!");
    nome.value = "";
    autor.value = "";
    localizacao.value = "";
    genero.value = "";
    paginas.value = "";
}
