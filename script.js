// Carrega os livros salvos no localStorage
function carregarLivros() {
    let livros = JSON.parse(localStorage.getItem("livros")) || [];
    return livros;
}

// Salva os livros no localStorage
function salvarLivros(livros) {
    localStorage.setItem("livros", JSON.stringify(livros));
}

// Adiciona um livro novo
function adicionarLivro(titulo, autor, ano) {
    let livros = carregarLivros();

    livros.push({
        titulo: titulo,
        autor: autor,
        ano: ano
    });

    salvarLivros(livros);
}

// Atualiza a tabela na página galeria.html
function carregarTabela() {
    let tabela = document.getElementById("tabelaLivros");
    if (!tabela) return;

    let livros = carregarLivros();

    livros.forEach(livro => {
        let tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${livro.titulo}</td>
            <td>${livro.autor}</td>
            <td>${livro.ano}</td>
        `;

        tabela.appendChild(tr);
    });
}

// Captura o envio do formulário em cadastro.html
function configurarFormulario() {
    let form = document.getElementById("formCadastro");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let titulo = document.getElementById("titulo").value;
        let autor = document.getElementById("autor").value;
        let ano = document.getElementById("ano").value;

        adicionarLivro(titulo, autor, ano);

        alert("Livro cadastrado com sucesso!");

        form.reset();
    });
}

// Executa automaticamente quando a página carregar
window.onload = () => {
    carregarTabela();
    configurarFormulario();
};
