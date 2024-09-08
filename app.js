//módulo de busca implementado
function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada 
    if(!campoPesquisa) {
        section.innerHTML = "<p>Signo não encontrado. Digite o signo ou o elemento do signo (ex. Fogo, Terra, Ar ou Água)</p>"
       return
    }
campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo ="";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado na lista de dados
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrição-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
        }
if(!resultados) {
resultados = "<p>Signo não encontrado</p>"
}
    // Atribui os resultados HTML à seção
    section.innerHTML = resultados;
}







