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
let matrix = []
let array = []
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
    console.log(SomaEstranha(matrix, matrix.length).toFixed(1))
}
if (operation == 'M') {
    console.log(MediaEstranha(matrix, matrix.length).toFixed(1))
}


function SomaEstranha(matrix, tam) {
    let soma = 0
    for (let i = 0; i < tam; i++) {
        for (let j = 0; j < tam; j++) {
            if (i > j) {
                soma += matrix[i][j]
            }
        }
    }

    return soma;
}

function MediaEstranha(matrix, tam) {
    let media = SomaEstranha(matrix, tam) / 66
    return media
}