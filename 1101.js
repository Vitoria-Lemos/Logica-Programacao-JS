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
//let n = parseInt(lines.shift());


let n,m;
let menor = 0, maior = 0
let soma = 0;
let cont =0
let concatenar =""
while(1)
{
    [n, m] = lines.shift().split(" ");
    n = parseInt(n)
    m = parseInt(m)
    if(n <= 0 || m <= 0)
    {
        break;
    }
    if(n > m)
    {
        maior = n
        menor = m
    }
    else
    {
        maior = m
        menor = n
    }
    for(let i = menor; i <= maior ; i++)
    {
        concatenar += i + " "
        soma += i
       
    }
    console.log(concatenar+"Sum="+soma)
    soma = 0
    concatenar = ""
}