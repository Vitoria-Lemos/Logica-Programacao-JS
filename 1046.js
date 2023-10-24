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


//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [horaInicial,horaFinal] = lines.shift().split(" ");
horaInicial = parseInt(horaInicial);
horaFinal = parseInt(horaFinal);
let duracao ;
duracao = (horaInicial - horaFinal)
if ( duracao > 0)
{
   duracao = ((24-horaInicial) + horaFinal)
}
if(duracao < 0 )
{
    duracao = horaFinal - horaInicial
}
else if( duracao == 0)
{
    duracao = 24;
}
    




console.log("O JOGO DUROU "+duracao+" HORA(S)")