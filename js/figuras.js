


// calculado el area y perimetro de las figuras geometricas con html integrando JS

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
<b>Perimetro: ${lado * 4}cm</b>`
const areaCuadrado = lado => resultCuadrado.innerHTML =`Los lados del cuadrado miden: ${lado}cm. y el  
<b>Area: ${lado * lado}cm^2</b>`



//Triangulo
 const inputTrianguloL1 = document.getElementById('lado1');
 const inputTrianguloL2 = document.getElementById('lado2');
 const inputTrianguloB = document.getElementById('base');
 const inputTrianguloA = document.getElementById('altura')
 const resultTriangulo = document.getElementById('resultTriangulo');
 const formTriangulo = document.getElementById('FormTriangulo');

function calcularPerimetroTriangulo(){ 
	const valueL1 = parseInt(inputTrianguloL1.value);
    const valueL2 = parseInt( inputTrianguloL2.value);
    const valueB = parseInt( inputTrianguloB.value);
	const validoDatosTriangulo = validarDatosTriangulo();
	
	if(validoDatosTriangulo){
		resultTriangulo.innerHTML = `Llena los campos vacios`
	}else{
		resultTriangulo.innerHTML = `Los lados del triangulo miden: LadoA: ${valueL1}cm, LadoB: ${valueL2}cm y Base: ${valueB}cm.
    <b>Perimetro:<b/> ${valueL1 + valueL2 + valueB}`;
		formTriangulo.reset();
	}
    
}

function calcularAreaTriangulo(){ 
    const valueB = parseInt(inputTrianguloB.value);
    const valueA = parseInt(inputTrianguloA.value);
	const validarDatos = validarDatosArea();
	
	if(validarDatos){
		resultTriangulo.innerHTML = `Llena los campos vacios`;
	}else{
		  resultTriangulo.innerHTML = `La base del triangulo: ${valueB}cm y su altura: ${valueA}cm.
    <b>Area:<b/> ${(valueB * valueA) / 2}`;
    formTriangulo.reset();
	}
}
function validarDatosTriangulo(){
return (inputTrianguloL1.value === ""|| inputTrianguloL2.value === ""|| inputTrianguloB.value === "");
 }
function validarDatosArea(){
return (inputTrianguloA.value === "" || inputTrianguloB.value === "");
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
    return resultCirculo.innerHTML = `El <b>radio</b> del circulo es: ${radio}cm.
    <b>Circunferencia:</b> ${Math.floor(diametro * PI)}cm`
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
<b>Area:</b> ${Math.floor((radio * radio)* PI)}cm^2`





//Triangulo Isosceles

const inputIsoscelesL1 = document.getElementById('ladoa');
const inputIsoscelesL2 = document.getElementById('ladob');
const inputIsoscelesB = document.getElementById('baseI');
const resultIsosceles = document.getElementById('resultIsoscele')
const formIsosceles = document.getElementById('FormIsosceles')


function calcularAlturaTrianguloIsosceles (){
	
    const valueIsoscelesL1 = parseInt(inputIsoscelesL1.value);
    const valueIsoscelesL2 = parseInt(inputIsoscelesL2.value);
    const valueIsoscelesB = parseInt(inputIsoscelesB.value);
	const validarrDatos = validarDatosIsoscele();
	
	if(validarrDatos){
		resultIsosceles.innerHTML = `Llena los campos vacios`
	}else{
		AlturaTrianguloIsosceles(valueIsoscelesL1, valueIsoscelesL2, valueIsoscelesB);
		formIsosceles.reset();
	}
  
}

function validarDatosIsoscele(){
	return ( inputIsoscelesL1.value ==="" ||inputIsoscelesL2.value ===""|| inputIsoscelesB.value === "")
}

const AlturaTrianguloIsosceles = (lado1, lado2, base) =>{
   
    if(lado1 === lado2 && lado1 != '' && lado2 != '' && base != ''){
        let h;
        base /= 2;
        h = (lado2**2) - (base**2);
        resultIsosceles.innerHTML = `La <b>altura</b> de tu Triangulo Isosceles mide:<b> ${Math.sqrt(h).toFixed(2)}cm</b>`
    } else{
        resultIsosceles.innerHTML= `Verifica tus valores del <b>Triangulo Isosceles<b/>`;
    }
}
