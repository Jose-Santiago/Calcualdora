//capturamos el DOM 

const pantalla = document.getElementById("inOut");// input de pantalla

// capturamso a los botones

const n0 = document.getElementById("0");
const n1 = document.getElementById("1");
const n2 = document.getElementById("2");
const n3 = document.getElementById("3");
const n4 = document.getElementById("4");
const n5 = document.getElementById("5");
const n6 = document.getElementById("6");
const n7 = document.getElementById("7");
const n8 = document.getElementById("8");
const n9 = document.getElementById("9");

// capturamos botones de signos e igual

const btnIgual = document.getElementById("=");
const btnPunto = document.getElementById(".");
const btnLimpiar = document.getElementById("c");
const btnSuma = document.getElementById("+");
const btnResta = document.getElementById("-");
const btnMultipli = document.getElementById("x");
const btnDivi = document.getElementById("/");

let num1 = 0;
let num2 = 0;
let resultado = 0;
let operacion = "";
let contadorOperacio = 0;
let contadorPunto = 0;

function resetMemoria(){
    num1 = 0;
    num2 = 0;
    operacion = "";
    pantalla.value = "";    
    contadorOperacio = 0;
    contadorPunto = 0;
}

function escribirValor(boton){
    //obtenemo el id del boton
    const valueBtn = boton.id;
    if(boton.id === "."){
        contadorPunto = 1;
    }

    pantalla.value += valueBtn;
}
function suma(){
    operacion = "+";
    num1 = parseFloat(pantalla.value.trim());
    contadorOperacio = 1;
    pantalla.value = "";
    contadorPunto = 0;
}
function resta(){
    operacion = "-";
    num1 = parseFloat(pantalla.value.trim());
    contadorOperacio = 1;
    pantalla.value = "";
    contadorPunto = 0;
}
function multiplication(){
    operacion = "x";
    num1 = parseFloat(pantalla.value.trim());
    contadorOperacio = 1;
    pantalla.value = "";
    contadorPunto = 0;
}
function division(){
    operacion = "/";
    num1 = parseFloat(pantalla.value.trim());
    contadorOperacio = 1;
    pantalla.value = "";
    contadorPunto = 0;
}

function obtenerResultado(){
    if(pantalla.value === ""){
        num2 = 0;
    }else{
        num2 = parseFloat(pantalla.value.trim());
    }
    pantalla.value = "";
    switch (operacion) {
        case "+":
            pantalla.value = num1 + num2;
            operacion = 0;
            contadorPunto = 0;
            break;
        case "-":
            pantalla.value = num1 - num2;
            operacion = 0;
            contadorPunto = 0;
            break;
        case "x":
            pantalla.value = num1 * num2;
            operacion = 0;
            contadorPunto = 0;
            break;
        case "/":
            if(num2 !== 0){
                pantalla.value = num1 / num2;
                operacion = 0;
                contadorPunto = 0;
            }else{
                pantalla.value = "Sintax Error div 0";
            }
            break;
    
        default:
            pantalla.value = "error de escritura de datos";
            break;
    }
}


btnLimpiar.addEventListener("click", resetMemoria);

n0.addEventListener("click", function(){
    escribirValor(this);
});
n1.addEventListener("click", function(){
    escribirValor(this);
});
n2.addEventListener("click", function(){
    escribirValor(this);
});
n3.addEventListener("click", function(){
    escribirValor(this);
});
n4.addEventListener("click", function(){
    escribirValor(this);
});
n5.addEventListener("click", function(){
    escribirValor(this);
});
n6.addEventListener("click", function(){
    escribirValor(this);
});
n7.addEventListener("click", function(){
    escribirValor(this);
});
n8.addEventListener("click", function(){
    escribirValor(this);
});
n9.addEventListener("click", function(){
    escribirValor(this);
});

btnPunto.addEventListener("click", function(){
    if(contadorPunto === 0 && pantalla.value !== ""){
        escribirValor(this);
    }
});

btnSuma.addEventListener("click", function(){
    suma();
});

btnIgual.addEventListener("click",function(){
    obtenerResultado();
});


btnResta.addEventListener("click", function(){
    resta();
});

btnMultipli.addEventListener("click", function(){
    multiplication();
});

btnDivi.addEventListener("click", function(){
    division();
});






