//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require('path');

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

const totMatriz = 12
let linha = lines.shift()
let operacao = lines.shift()

let matriz = [];

let cont = 0;

for(let i = 0; i < totMatriz; i++)
{
    let subMatriz = []
    for(let j = 0; j < totMatriz; j++)
    {
       subMatriz[j] = Number(lines[cont]);
       cont++
    }
    matriz[i] = subMatriz;
}


if(operacao == 'S')
{
    console.log(somaLinha(matriz,linha).toFixed(1))
}
else
{
    console.log(Media(matriz,linha).toFixed(1))
}


function somaLinha(matriz,linha)
{
    let soma = 0;
    for(let i = 0; i < matriz.length; i++)
    {
       soma += matriz[linha][i];
    }

    return soma;
}

function Media(matriz,linha)
{
    let media = somaLinha(matriz,linha)/12
    return media;
}

    















