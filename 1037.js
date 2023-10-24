const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [a, b, c] = lines.shift().split(" "); 

//para ler linhas com um unico valor na mesma linha use o comando a seguir
let n = parseFloat(lines.shift());

console.clear()
if ( n >= 0 && n <=25)
{
    console.log("Intervalo [0,25]")
}
else if (n > 25 && n <= 50)
{
    console.log("Intervalo (25,50]");
}
else if ( n > 50 && n<=100)
{
   console.log("Intervalo (75,100]")
}
else
{
    console.log("Fora de intervalo")
}
