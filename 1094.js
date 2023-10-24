const fileSystem = require('fs');
const { hostname } = require('os');
const endereco = require('path');
const { abort } = require('process');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////



//para ler linhas com mais de um valor na mesma linhause o comando a seguir
//let[p1, p2, p3] = lines.shift().split(" ");

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let n = parseInt(lines.shift());
let coelhos = 0, ratos = 0, sapos = 0;
for(let i = 0; i < n; i++)
{
    let[qt, tipo] = lines.shift().split(" ");
    qt = parseInt(qt)
    if(tipo == 'S')
    {
        sapos += qt
    }
    if(tipo =='R')
    {
        ratos += qt
    }
    if(tipo == 'C')
    {
        coelhos += qt
    }

}
let tot = (ratos + coelhos+sapos)
console.log("Total: "+tot+" cobaias")
console.log("Total de coelhos: "+coelhos)
console.log("Total de ratos: "+ratos)
console.log("Total de sapos: "+sapos)
console.log("Percentual de coelhos: "+((coelhos/tot)*100).toFixed(2)+" %")
console.log("Percentual de ratos: "+((ratos/tot)*100).toFixed(2)+" %")
console.log("Percentual de sapos: "+((sapos/tot)*100).toFixed(2)+" %")