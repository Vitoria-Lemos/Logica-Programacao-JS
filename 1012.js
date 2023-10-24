let [a, b, c] = lines.shift().split(" "); 
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

triangulo(a,c)
circulo(c)
trapezio(a,b,c)
quadrado(b)
retangulo(a,b)
function triangulo(a,c)
{
    let area =  (a * c)/2;
    console.log("TRIANGULO: "+area.toFixed(3))
}

function circulo (c)
{
    let area = c*c*3.14159;
    console.log("CIRCULO: "+area.toFixed(3))
}

function trapezio (a,b,c)
{
    let area = (a + b)*c / 2
    console.log("TRAPEZIO: "+area.toFixed(3))
}

function quadrado(b)
{
    let area = b * b;
    console.log("QUADRADO: "+area.toFixed(3))
}
function retangulo(a,b)
{
    let area =  a*b;
    console.log("RETANGULO: "+area.toFixed(3))
}
