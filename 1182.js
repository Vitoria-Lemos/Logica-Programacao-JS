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

let coluna = lines.shift()
let operacao =  lines.shift()
const TamanhoMatriz =  12


let matriz = []
let cont = 0;
for(let i = 0; i < TamanhoMatriz; i++)
{
    let array = [];
    for(let j = 0; j < TamanhoMatriz; j++)
    {
        array[j] = Number(lines[cont]);
        cont++;
    }
    matriz[i] = array;
}

if(operacao == 'S')
{
    console.log(SomaColuna(coluna,matriz,TamanhoMatriz).toFixed(1))
}
else
{
    console.log(Media(coluna,matriz,TamanhoMatriz).toFixed(1))
}

function SomaColuna(coluna,matriz,TamanhoMatriz)
{
    
    let soma = 0;
    for(let i = 0; i < TamanhoMatriz; i++)
    {
        soma += matriz[i][coluna]
    }

    return soma;
}

function Media(coluna,matriz,TamanhoMatriz)
{
    let media = SomaColuna(coluna,matriz,TamanhoMatriz)/12;
    return media;
}
