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

const tam = 6;

let operacao = lines.shift()
let matriz = []
let cont = 0;
for (let i = 0; i < tam; i++) {
    let array = []
    for (let j = 0; j < tam; j++) {
        array[j] = Number(lines[cont])
        cont++
    }
    matriz[i] = array;
}

if (operacao == 'S') {
    console.log(SomaEstranha(matriz.length,matriz).toFixed(1))
}
else {
    console.log(MediaEstranha(matriz.length,matriz).toFixed(1))
}


function SomaEstranha(tamanho, matriz) {
    let soma = 0;
    for (let i = 0; i < tam  ; i++) {
        for (let j = 0; j < tam; j++) {
            if (i < j) {
                soma += matriz[i][j]
                console.log(matriz[i][j])
            }
        }
    }

        return soma;
}

function MediaEstranha(tamanho, matriz)
{
    let media = SomaEstranha(matriz.length,matriz) / 66

    return media;
}