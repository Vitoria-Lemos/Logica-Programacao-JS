const fileSystem = require('fs');
const { hostname } = require('os');
const endereco = require('path');
const { abort } = require('process');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let n = parseFloat(lines.shift());


//para ler linhas com mais de um valor na mesma linhause o comando a seguir
//let[p1, p2, p3] = lines.shift().split(" ");

let totgrenais = 0
let victoryInter = 0
let victoryGremio = 0
let empates = 0
let resposta = 0
let grenais = 0
let entrada
while(true) 
{   
    console.log(`Novo grenal (1-sim 2-nao)`)
    entrada = lines.shift().split(" ");
    inter = Number(entrada[0])
    gremio = Number(entrada[1])
    inter+= inter
    gremio +=gremio
    resposta = Number(lines.shift());
    grenais++
    if(inter > gremio)
    {
        victoryInter++
    }
    else
    {
        victoryGremio++
    }
    if( inter == gremio)
    {
        empates++
    }
    
    if(resposta == 2)
    {
      
        break
    }


}

console.log(`${grenais} grenais`)
console.log(`Inter:${victoryInter}`)
console.log(`Gremio:${victoryGremio}`)
console.log(`Empates:${empates}`)
if(victoryInter> victoryGremio)
{
    console.log(`Inter venceu mais`)
}
else
{
    console.log(`Gremio venceu mais`)
}