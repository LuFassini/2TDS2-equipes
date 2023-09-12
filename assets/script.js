//alert("testando!");

class equipe{
    constructor(nome,titulares){
    this.id = this.gerarId();
    this.nome = nome;
    this.titulares = titulares;
    this.reservas = this.calcularReservas();
    this.totalJogadores = this.calcularTotaldeJogadores();
}
gerarId(){
    return Math.floor(Math.random() * 1000);
}

calcularReservas(){
    return Math.floor (this.titulares / 2);
}

calcularTotaldeJogadores(){
    return this.titulares + this.reservas
}
}

class EquipeService {
    constructor(){
        this.equipes = [];
    }
    //CRUD = create, read, update ,delete
    //C = create
    
    adicionarEquipe(parametro){
        this.equipes.push(parametro);
    }
    listarEquipes(){
        return this.equipes;
    }
    //R=read
    listarEquipesporId(parametro){
        return this.equipes.filter((equipe) => equipe.id == parametro);
    }
}

const equipeService = new EquipeService();

function criarEquipe() {
    const nome = document.getElementById("nomedaequipe").value;
    const titulares = Number (document.getElementById("quantidade").value);

    const novaEquipe = new equipe (nome,titulares);

    equipeService.adicionarEquipe(novaEquipe);
    
    listarEquipes();
   
    //console.log(equipeService.equipes);
    //console.log(novaEquipe);
    //alert("Nome da equipe:" + nome + "nQuantidade de titulares:" + quantidade!);
}

function listarEquipes (){
    const equipes = equipeService.listarEquipes();


    const elementoLista = document.getElementById("listarEquipes");
    elementoLista.innerHTML = "";


    let content = "";
    
    equipes.forEach((equipe) => {
        content += `
        <div>
        <p>Nome: ${equipe.nome} </p>
        </div>
       `;
    });
    
    elementoLista.innerHTML = content;
    //console.log(equipes);
}
