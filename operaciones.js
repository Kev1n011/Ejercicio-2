const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


document.getElementById("myCanvas").addEventListener("mouseup", function (e) {
    console.log("Coordenadas:", e.x, e.y);
});

//fondo del canvas
ctx.fillStyle = '#4adeff';
ctx.fillRect(0, 0, canvas.width, canvas.height - 100);

ctx.beginPath();
ctx.fillStyle = "#ffccbc";
ctx.fillRect(0, 750, 1500, 20);
ctx.lineWidth = 3;
ctx.strokeStyle = "#000000";
ctx.strokeRect(0, 750, 1500, 20);

ctx.beginPath();
ctx.fillStyle = "#ff9464";
ctx.fillRect(0, 770, 1500, 70);
ctx.lineWidth = 10;
ctx.strokeStyle = "#fca068";
ctx.strokeRect(0, 770, 1500, 70);


function crear_rectangulo(x_rectangulo, y_rectangulo, ancho_rectangulo, altura_rectangulo, color_relleno) {

    //Sombra del rectangulo original
    let x_adicional = x_rectangulo + 100;
    let ancho_adicional = ancho_rectangulo - 50; 
    let altura_adicional = altura_rectangulo - 50;

    let y_adicional = y_rectangulo + 50; 

    ctx.beginPath();
    ctx.moveTo(x_adicional + 20, y_adicional);
    ctx.lineTo(x_adicional + ancho_adicional - 20, y_adicional); 
    ctx.quadraticCurveTo(x_adicional + ancho_adicional, y_adicional, x_adicional + ancho_adicional, y_adicional + 20); 
    ctx.lineTo(x_adicional + ancho_adicional, y_adicional + altura_adicional - 20); 
    ctx.quadraticCurveTo(x_adicional + ancho_adicional, y_adicional + altura_adicional, x_adicional + ancho_adicional - 20, y_adicional + altura_adicional); 
    ctx.lineTo(x_adicional + 20, y_adicional + altura_adicional); 
    ctx.lineTo(x_adicional + 20, y_adicional + 20); 
    ctx.quadraticCurveTo(x_adicional, y_adicional + 20, x_adicional, y_adicional); 
    ctx.closePath();

    ctx.fillStyle = "black"; 
    ctx.fill();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x_rectangulo + 20, y_rectangulo + 0);
    ctx.lineTo(x_rectangulo + ancho_rectangulo - 20, y_rectangulo + 0);
    ctx.quadraticCurveTo(x_rectangulo + ancho_rectangulo, y_rectangulo + 0, x_rectangulo + ancho_rectangulo, y_rectangulo + 20);
    ctx.lineTo(x_rectangulo + ancho_rectangulo, y_rectangulo + altura_rectangulo - 20);
    ctx.quadraticCurveTo(x_rectangulo + ancho_rectangulo, y_rectangulo + altura_rectangulo, x_rectangulo + ancho_rectangulo - 20, y_rectangulo + altura_rectangulo);
    ctx.lineTo(x_rectangulo + 20, y_rectangulo + altura_rectangulo);
    ctx.quadraticCurveTo(x_rectangulo, y_rectangulo + altura_rectangulo, x_rectangulo, y_rectangulo + altura_rectangulo - 20);
    ctx.lineTo(x_rectangulo, y_rectangulo + 20);
    ctx.quadraticCurveTo(x_rectangulo, y_rectangulo + 0, x_rectangulo + 20, y_rectangulo + 0);
    ctx.closePath();

    ctx.fillStyle = color_relleno; 
    ctx.fill();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.stroke();

    let x_circulo = x_rectangulo + 20;
    let y_circulo = y_rectangulo + 20;

    //For que crea los circulos en cada esquina
    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(x_circulo, y_circulo, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "#aab3b5";
        ctx.fill();
        ctx.strokeStyle = "000000";
        ctx.stroke();

       
        if (i === 0) {
            x_circulo = x_rectangulo + ancho_rectangulo - 20; 
        } else if (i === 1) {
            y_circulo = y_rectangulo + altura_rectangulo - 20; 
        } else if (i === 2) {
            x_circulo = x_rectangulo + 20; 
        }
    }   
}

let x_rectangulo1 = 650;
let y_rectangulo1 = 250;
let ancho_rectangulo1 = 250;
let altura_rectangulo1 = 500;
let color_relleno1 = "#ff9464";

let x_rectangulo2 = 430;
let y_rectangulo2 = 450;
let ancho_rectangulo2 = 250;
let altura_rectangulo2 = 300;
let color_relleno2 = "#a0e3a0";

crear_rectangulo(x_rectangulo1, y_rectangulo1, ancho_rectangulo1, altura_rectangulo1, color_relleno1);
crear_rectangulo(x_rectangulo2, y_rectangulo2, ancho_rectangulo2, altura_rectangulo2, color_relleno2);
crear_rectangulo(1300, 450, ancho_rectangulo2, altura_rectangulo2, "#ffc847");

//Función que cree los cubitos en el aire
function crear_cubo(x_cubo, y_cubo, ancho_cubo, altura_cubo) {
    ctx.beginPath();
    ctx.fillStyle = "#ff8454";
    ctx.fillRect(x_cubo, y_cubo, ancho_cubo, altura_cubo);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(x_cubo, y_cubo, ancho_cubo, altura_cubo);

    ctx.beginPath();
    ctx.arc(x_cubo + 10, y_cubo + 10, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    let x_circulo = 10
    let y_circulo = 10

    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(x_cubo + x_circulo, y_cubo + y_circulo, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    
        if (i === 0) {
            x_circulo = 60;
        } else if (i === 1) {
            y_circulo = 60; 
        } else if (i === 2) {
            x_circulo = 10; 
        }
    }

   

}
let x_cubo1 = 100;
let y_cubo1 = 450;
let ancho_cubo = 70;
let altura_cubo = 70;

let x_cubo2 = 500;
let y_cubo2 = 0;


crear_cubo(x_cubo1, y_cubo1, ancho_cubo, altura_cubo);
crear_cubo(x_cubo2, y_cubo2, ancho_cubo, altura_cubo);
crear_cubo(1200, 200, ancho_cubo, altura_cubo);








