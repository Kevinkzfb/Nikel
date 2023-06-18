const nome = "Kevin Rodrigues de Assis";
let nome2 = "";
let pessoaDefault = {
    nome: "Kevin Rodrigues",
    Idade: "26",
    Trabalho: "Progamador"
}

let nomes = ["Kevin Rodrigues", "Maria Silva", "Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Kevin Rodrigues",
    Idade: "26",
    Trabalho: "Progamador"
    },
    {
        nome: "Maria Silva",
    Idade: "25",
    Trabalho: "UX/UI Designer"
    }
];


function alterarnome() {
    nome2 = "Maria Silva";
    console.log("valor alterado:");
console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor Alterado recebendo um nome:");
console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.Idade);
    
    console.log("Trabalho:");
    console.log(pessoa.Trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("------IMPRIMIR PESSOAS-------");
    pessoas.forEach((item) => {
       console.log("Nome:");
       console.log(item.nome); 
       
       console.log("Idade:");
       console.log(item.Idade);
       
       console.log("Trabalho:");
       console.log(item.Trabalho);
    console.log(item);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();



//imprimirPessoa(pessoaDefault);

// imprimirPessoa({
//     nome: "Maria Silva",
//     Idade: "26",
//     Trabalho: "UX/UI Desginer"
// });

//recebeEalteraNome("João Silva Pereira");
//recebeEalteraNome("Maria Silva");

//lterarnome();