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

let dia1 = lines.shift().split(" ");
dia1 = Number(dia1[1])
let h1 = lines.shift().split(" ");
let hi = Number(h1[0])
let mi = Number(h1[2])
let si = Number(h1[4])

let dia2 = lines.shift().split(" ");
dia2 = Number(dia2[1])
let h2 = lines.shift().split(" ");

let hf = Number(h2[0])
let mf = Number(h2[2])
let sf = Number(h2[4])

let duracaoInicial = (si + mi * 60) + ( hi * 3600) + (dia1 * 86400)

let duracaoFinal = (sf + mf * 60) + (hf * 3600) + (dia2*86400)
let tempo = duracaoFinal - duracaoInicial


console.log(`${parseInt(tempo/86400)} dia(s)`)
tempo = tempo % 86400
console.log(`${parseInt(tempo/3600)} hora(s)`)
tempo = tempo%3600

console.log(`${parseInt(tempo/60)} minuto(s)`)
tempo = tempo % 60
console.log(`${parseInt(tempo)} segundo(s)`)

