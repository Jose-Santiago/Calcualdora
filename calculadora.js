//intarla prompt sync --- npm i prompt-sync --
//Jose Santiago
const prompt = require("prompt-sync")({sigint:true});

function menuOpciones(){
    let opc = 0;
    let opcValida = true;
        while(opcValida){
            console.log("---------------Selecciona una Opcion del Menu---------------");
            console.log("1: Suma");
            console.log("2: Resta");
            console.log("3: Multiplicacion");
            console.log("4: Division");
            console.log("5: Salir");
            opc = parseFloat(prompt());
            if(!isNaN(opc)){
                if(opc === 5 || opc <= 0 || opc > 5){
                    console.log("CIERRE DEL SISTEMA");
                    opcValida == false;
                    return opc;
                }else if(opc === 1){
                    console.log("el resultado de la operacion es: ", suma());
                }else if(opc === 2){
                    console.log("el resultado de la operacion es: ", resta());
                }else if(opc === 3){
                    console.log("el resultado de la operacion es: ", multiplication());
                }else{
                    console.log("el resultado de la operacion es: ", division());
                }
            }else{
                console.log("!!!!!!!!!!OPCION INVALIDA, ESCRIBA UNA OPCION VALIDA¡¡¡¡¡¡¡¡");
            }
        }
    return opc;
}

function suma(){
    console.log("FUNCION DE SUMA DE DOS NUMEROS");
    const num1 = parseFloat(prompt("Escribe el primer numero: "));
    const num2 = parseFloat(prompt("Escribe el segundo numero: "));
    return num1 + num2;
}

function resta(){
    console.log("FUNCION DE RESTA DE DOS NUMEROS");
    const num1 = parseFloat(prompt("Escribe el primer numero: "));
    const num2 = parseFloat(prompt("Escribe el segundo numero: "));
    return num1 - num2;
}

function multiplication(){
    console.log("FUNCION DE MULTIPLICACION DE DOS NUMEROS");
    const num1 = parseFloat(prompt("Escribe el primer numero: "));
    const num2 = parseFloat(prompt("Escribe el segundo numero: "));
    return num1 * num2;
}

function division(){
    console.log("FUNCION DE DiVISION DE DOS NUMEROS");
    const num1 = parseFloat(prompt("Escribe el primer numero: "));
    const num2 = parseFloat(prompt("Escribe el segundo numero: "));
    if(num2 === 0){
        console.log("No se puede dividir por 0");
        return null;
    }
    return num1 / num2;
}

function main(){
    let menu = menuOpciones();
    console.log("Opcion seleccionada: ", menu);
}

main();