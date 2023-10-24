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

let resposta = 0
let nota = 0
let media = 0
let valida = 0

while(1)
{
    
    let nota = parseFloat(lines.shift());
    if(nota >= 0 && nota <= 10)
    {
        valida++
        media+=nota
    }
    else
    {
        console.log(`nota invalida`)
    }
   
    
    if(valida == 2)
    {
        console.log(`media = ${(media/2).toFixed(2)}`)
        valida = 0
        media = 0
        console.log(`novo calculo (1-sim 2-nao)`)
        let resposta = parseFloat(lines.shift());
        while(resposta > 1 && resposta > 2)
        {
            console.log(`novo calculo (1-sim 2-nao)`)
            resposta = parseFloat(lines.shift());
        }
        if(resposta == 2)
        {
            break;
        }
       
    }
   
   
}
   
      
       
        
 
