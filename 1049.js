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

let p1 =lines.shift();
let p2 = lines.shift();
let p3 = lines.shift();

p1 = p1.toLowerCase()
p2 = p2.toLowerCase()
p3 = p3.toLowerCase()

if(p1 == 'vertebrado')
{
    if(p2 =='ave')
    {
        if(p3 == 'carnivoro')
        {
            console.log(`aguia`)
        }
        else if(p3 =='onivoro')
        {
            console.log(`pomba`)
        }
    }
    else if(p2 = 'mamifero')
    {
        if(p3 =='onivoro')
        {
            console.log(`homem`)
        }
        else if( p3 =='herbivoro')
        {
            console.log(`vaca`)
        }
    }
}

if(p1 == 'invertebrado')
{
    if(p2 =='inseto')
    {
        if(p3 == 'hematofago')
        {
            console.log(`pulga`)
        }
        else 
        {
            console.log(`lagarta`)
        }
    }
    else if(p2 = 'anelideo')
    {
        if(p3 =='hematofago')
        {
            console.log(`sanguessuga`)
        }
        else 
        {
            console.log(`minhoca`)
        }
    }
}