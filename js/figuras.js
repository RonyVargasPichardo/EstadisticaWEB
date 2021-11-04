

/*Calculando el area y el perimetro de las figuras Geometricas */






/* Triangulo */
console.group('Triangulo');
const perimetroTriangulo = (lado1, lado2, base) => {
    alert(`Los lados del triangulo miden: ${lado1}cm, ${lado2}cm y su base: ${base}cm.
    Perimetro: ${lado1 + lado2 + base}`);
}
const areaTriangulo = (base, altura) => {
    alert(`La base del triangulo es: ${base}cm y su altura es: ${altura}cm.
    Area: ${(base * altura) / 2}`);
} 
console.groupEnd();


/* Triangulo Isosceles*/


const AlturaTrianguloIsosceles = (lado1, lado2, base) =>{
    lado1 = parseInt(lado1);
    lado2 = parseInt(lado2);
    base = parseInt(base);
    if(lado1 === lado2 && lado1 != '' && lado2 != '' && base != ''){
        let h;
        base /= 2;
        h = (lado2**2) - (base**2);
        alert(`La altura de tu triangulo mide: ${Math.sqrt(h).toFixed(2)}cm`)
    } else{
        alert('Verifica tus valores')
    }
}








/// calculado el area y perimetro de las figuras geometricas con html integrando JS

//Cuadrado
const inputCuadrado = document.getElementById('ladoCuadrado');
const resultCuadrado = document.getElementById("resultCuadrado");

function calcularPerimetroCuadrado(){ 
    const valueCuadrado = parseInt(inputCuadrado.value);
    const validoCampos = validarCampos();

    if(validoCampos){
        resultCuadrado.innerHTML = `Llena los campos vacios.`
    }
    else{
         perimetroCuadrado(valueCuadrado);
         inputCuadrado.value = "" 
    }
}
function calcularAreaCuadrado(){ 
    const valueCuadrado = parseInt(inputCuadrado.value);
    const validoCampos = validarCampos();
    if(validoCampos){
        resultCuadrado.innerHTML = `Llena los campos vacios`
    }
    else{
         areaCuadrado(valueCuadrado);
         inputCuadrado.value = "" 
    }
}

function validarCampos(){
    return (inputCuadrado.value === '')
 }
const perimetroCuadrado = lado => resultCuadrado.innerHTML = `Los lados del cuadrado miden: ${lado}cm. y el
Perimetro: ${lado * 4}cm`
const areaCuadrado = lado => resultCuadrado.innerHTML =`Los lados del cuadrado miden: ${lado}cm. y el  
Area: ${lado * lado}cm^2`



//Triangulo
function calcularPerimetroTriangulo(){ 
    const inputTrianguloL1 = parseInt(document.getElementById('lado1').value);
    const inputTrianguloL2 = parseInt( document.getElementById('lado2').value);
    const inputTrianguloB = parseInt( document.getElementById('base').value);

    perimetroTriangulo(inputTrianguloL1, inputTrianguloL2, inputTrianguloB);
}
function calcularAreaTriangulo(){ 
    const inputTrianguloB = parseInt( document.getElementById('base').value);
    const inputTrianguloA = parseInt(document.getElementById('altura').value);

    areaTriangulo(inputTrianguloB, inputTrianguloA)
}



//Circulo
const inputRadio = document.getElementById('radio');
const resultCirculo = document.getElementById('resultCirculo');
const PI = Math.PI;

function calcularPerimetroCirculo(){ 
    const valueRadio = parseInt(inputRadio.value);
    const validoCamposCirculo = validarCamposCirculo();

    if(validoCamposCirculo){
        resultCirculo.innerHTML = `Llena los campos vacios`
    }else{
        circunferenciaCirculo(valueRadio);
        inputRadio.value = "";
    }
}
function validarCamposCirculo(){
    return ( inputRadio.value === "")
}
      
const diametroCirculo = radio => radio * 2;
const circunferenciaCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return resultCirculo.innerHTML = `El radio del circulo es: ${radio}cm.
    Circunferencia: ${Math.floor(diametro * PI)}cm`
};

function calcularAreaCirculo(){ 
    const valueRadio = parseInt(inputRadio.value);
    const validoCamposCirculo = validarCamposCirculo();

    if(validoCamposCirculo){
        resultCirculo.innerHTML = `Llena los campos vacios`
    }else{
        areaCirculo(valueRadio);
        inputRadio.value = "";
    }
}
const areaCirculo = (radio) => resultCirculo.innerHTML = `El radio del circulo es: ${radio}cm.
Area: ${Math.floor((radio * radio)* PI)}cm^2`



















//Triangulo Isosceles
function calcularAlturaTrianguloIsosceles (){
    const inputIsoscelesL1 = document.getElementById('ladoa').value;
    const inputIsoscelesL2 = document.getElementById('ladob').value;
    const inputIsoscelesB = document.getElementById('baseI').value;

    AlturaTrianguloIsosceles(inputIsoscelesL1, inputIsoscelesL2, inputIsoscelesB);
}


