const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [x1, y1] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let valor = parseInt(lines.shift());
console.log(valor)
// o PRIMEIRO PRINTF É O VALOR INTEIRO E A ATRIBUIÇÃO VAI DIMIMUIR MINHA VARIAVEL VALOR À MEDIDA QUE AS NOTAS SÃO CONVERTIDAS
console.log(Math.floor(valor/100)+" nota(s) de R$ 100,00")
valor = valor - Math.floor(valor/100)*100

console.log(Math.floor(valor/50)+" nota(s) de R$ 50,00");
valor = valor - Math.floor(valor/50)*50

console.log(Math.floor(valor/20)+" nota(s) de R$ 20,00")
valor = valor - Math.floor(valor/20)*20

console.log(Math.floor(valor/10)+" nota(s) de R$ 10,00")
valor = valor - Math.floor(valor/10)*10

console.log(Math.floor(valor/5)+" nota(s) de R$ 5,00")
valor = valor - Math.floor(valor/5) * 5

console.log(Math.floor(valor/2)+" nota(s) de R$ 2,00")
valor = valor - Math.floor(valor/2)*2

console.log(Math.floor(valor / 1)+" nota(s) de R$ 1,00")
valor = valor - Math.floor(valor / 1)


