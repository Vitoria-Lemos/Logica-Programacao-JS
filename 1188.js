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
let operation = lines.shift()
let array = []
let matrix = []
let cont = 0
for (let i = 0; i < 12; i++) {
    array = []
    for (let j = 0; j < 12; j++) {
        array[j] = Number(lines[cont])
        cont++
    }
    matrix[i] = array
}

if (operation == 'S') {
    console.log(SomaEstranha(matrix, 12).toFixed(1))
}
else {
    console.log(MediaEstranha(matrix, 12).toFixed(1))
}

function SomaEstranha(matrix, tam) {
    let soma = 0
    for (let i = 0; i < 12; i++) {
        for (j = 0; j < 12; j++) {
            if (i > j) {
                if ((i + j) >= 12) {
                    soma += matrix[i][j]
                }
            }

        }
    }
    return soma
}

function MediaEstranha(matrix, tam) {
    let soma = 0, cont = 0
    for (let i = 0; i < 12; i++) {
        for (j = 0; j < 12; j++) {
            if (i > j) {
                if ((i + j) >= 12) {
                    soma += matrix[i][j]
                    cont++
                }
            }

        }
    }
    media = soma / cont
    return media
}