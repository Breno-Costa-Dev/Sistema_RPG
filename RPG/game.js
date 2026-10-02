
class person {
    constructor(nome,life,ataque){
        this.nome = nome;
        this.life = life;
        this.ataque = ataque;
        this.vivo = true;
    }

    atacar(alvo, dano = this.ataque){

        if(!this.vivo){
            console.log(`O ${this.nome} esta morto não pode atacar!`);
            return;
        }

         alvo.life -= dano;
         console.log(`${this.nome} atacou o ${alvo.nome} causando ${dano} de dano!`);

         console.log(`${alvo.nome} possui ${alvo.life} de vida!`)

         if(alvo.life <= 0){
            alvo.life = 0;
            alvo.vivo = false;
            console.log(`O ${alvo.nome} morreu`);
            console.log("Você venceu!")
         }
    }
}

const espada = {
    nome: "Espada",
    dano: 10,
}
const arco = {
    nome: "Arco",
    dano: 5,
}
const pocaoDeCura = {
    nome: "Poção de Cura",
    cura: 10,
}

const player = new person("Guerreiro",100,10);

const inimigo = new person("Goblin",50,10);

player.inventario = [espada.nome,arco.nome,pocaoDeCura.nome];

player.itens = function(itens){

    let ataqueComAarma = 0;

    if(itens == espada){
        ataqueComAarma = this.ataque + espada.dano;
        this.atacar(inimigo,ataqueComAarma);
    }else if(itens == arco){
        ataqueComAarma = this.ataque + arco.dano;
        this.atacar(inimigo,ataqueComAarma);
    }else if(itens == pocaoDeCura){
        this.life += pocaoDeCura.cura;
        console.log(`Você usou ${pocaoDeCura.nome} + 10 de vida!`);
        console.log(`Vida atual ${this.life}`)
    }
}

console.log(player);

console.log(inimigo);

console.log(player.inventario);

console.log("A Batalha Começou");

console.log(player.itens(pocaoDeCura));

console.log(player.atacar(inimigo));

console.log(player.itens(espada));

console.log(player.itens(espada));