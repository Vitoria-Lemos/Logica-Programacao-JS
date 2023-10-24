const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////

//para ler linhas com um unico valor na mesma linha use o comando a seguir
//let n = parseFloat(lines.shift());


//para ler linhas com mais de um valor na mesma linha use o comando a seguir
let [n1, n2 ,n3, n4] = lines.shift().split(" ");
n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);
let media = (n1 * 2 + n2 * 3 + n3*4 + n4 * 1) / 10
console.log("Media: "+media.toFixed(1))

if (media >= 7)
{
    console.log("Aluno aprovado.")
}
else if ( media >= 5 && media < 7)
{
    let [n5] = lines.shift().split(" ");
    n5 = parseFloat(n5);
    console.log("Aluno em exame.")
    console.log("Nota do exame: "+n5.toFixed(1));
    
    let media2 = (media + n5) / 2
    if ( media2 >= 5)
    {
        console.log("Aluno aprovado.")
        
    }
    else if ( media < 5)
    {
        console.log("Aluno reprovado.")
    
    }
    console.log("Media final: "+media2.toFixed(1))
}
else if (media < 5)
{
    console.log("Aluno reprovado.")
}
