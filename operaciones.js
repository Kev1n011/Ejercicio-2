const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//CIRCULOS
/*
ctx.beginPath();
ctx.arc(150, 400, 120, 0, 2 * Math.PI);
ctx.fillStyle = "orange";
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;
ctx.stroke();

ctx.beginPath();
ctx.arc(290, 400, 120, 0, 2 * Math.PI);
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;
ctx.stroke();

ctx.beginPath();
ctx.arc(290, 330, 120, .8, 2.4);
ctx.fillStyle = "black";
ctx.fill();
ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.stroke();

//TRIANGULOS
var moverLados = 100;
ctx.beginPath();
ctx.moveTo(320 + moverLados, 255);
ctx.lineTo(430 + moverLados, 150);
ctx.lineTo(320 + moverLados, 500);
ctx.closePath();
ctx.fillStyle = "rgba(0, 255, 255, 0.5)";
ctx.fill();
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.stroke();



//CUADRADOS
ctx.fillStyle = "red";
ctx.fillRect(120, 20, 100, 100);

ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
ctx.fillRect(210, 105, 100, 100);

ctx.fillStyle = "green";
ctx.fillRect(300, 190, 100, 100);

ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeRect(390, 275, 100, 100);

ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.strokeRect(470, 355, 100, 100);

//Texto
ctx.font = "50px Georgia";
ctx.strokeStyle = "red";
ctx.lineWidth = 2;
ctx.strokeText("Hola mundo!", 500, 50);

ctx.font = "50px Georgia";
ctx.fillStyle = "blue";
ctx.fillText("Hola mundo!", 500, 50);


//Imagen
var img = new Image();
img.src = 'images.jpeg';
img.onload = function () {
    ctx.drawImage(img, 750, 250, 800, 100);
};

//Gradients


const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "yellow");

ctx.fillStyle = grd;
ctx.fillRect(20, 520, 150, 100);

ctx.fillStyle = "blue";
ctx.fillRect(300, 20, 150, 100);

const grd2 = ctx.createRadialGradient(575, 370, 5, 575, 370, 100);
grd2.addColorStop(0, "red");
grd2.addColorStop(1, "blue");


ctx.fillStyle = grd2;
ctx.fillRect(570, 340, 150, 100);


//Eventos de mouse

var figura = 1;
document.getElementById("myCanvas").addEventListener("mouseout", function (e) {

    switch (figura) {
        case 1:
            figura++;
            break;
        case 2:
            figura--;
            break;

    }


})
var botonPresionado = false; 


document.getElementById("myCanvas").addEventListener("mousedown", function (e) {

    let numeroRandom = Math.floor(Math.random() * 256);
    let numeroRandom2 = Math.floor(Math.random() * 256);
    botonPresionado = true;


    console.log(e);
    if (figura == 1) {
        ctx.beginPath();
        ctx.arc(e.x - 10, e.y - 10, 90, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${numeroRandom}, ${numeroRandom2}, 255, 0.8)`;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 0.5;
        ctx.stroke();


    } else {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${numeroRandom}, ${numeroRandom2}, 255, 0.8)`;
        ctx.fillRect(e.x - 50, e.y - 50, 100, 100);
        ctx.fill();

    }

})

document.getElementById("myCanvas").addEventListener("mouseup", function (e) {
    botonPresionado = false; 
});

document.getElementById("myCanvas").addEventListener("mousemove", function (e) {
    if (botonPresionado == true) { 
        ctx.beginPath();
        ctx.arc(e.x - 10, e.y - 10, 5, 0, 2 * Math.PI);
        ctx.fillStyle = `black`;
        ctx.fill();
    }
});

var super_x = 100;
var super_y = 100;

paint();

document.addEventListener("keypress", function (e) {
    var tecla_presionada = e.keyCode;
    console.log("tecla: " + tecla_presionada)

    //a = 97 s = 115 d = 100 w = 119
    switch (tecla_presionada) {
        case 97:
            super_x -= 10;
            console.log(super_x);

            if(super_x == -110){
                super_x = 1500
                
            }
            break;
        case 115:
            super_y += 10;
            console.log(super_y);
            if(super_y == 800){
                super_y = -100;
                
            }
            break;
        case 100:
            super_x += 10;
            if(super_x == 1500){
                super_x = -100;
                
            }
            break;
        case 119:
            super_y -= 10;
            if(super_y == -110){
                super_y = 800;
                
            }
            break;

    }

    paint()
   

});

function paint(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = `black`;
    ctx.fillRect(super_x, super_y, 100, 100);
    ctx.fill();
    
}*/

document.getElementById("myCanvas").addEventListener("mouseup", function (e) {
    console.log("Coordenadas:", e.x, e.y);
});

//CARA
ctx.beginPath();
ctx.arc(600, 120, 120, 2.1, 2.48 * Math.PI);
ctx.fillStyle = "#ffe6b3";
ctx.fill();

//CABELLO
ctx.beginPath();
ctx.arc(600, 120, 120, 1.2 * Math.PI, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

//CUELLO
ctx.fillStyle = "#ffe6b3";
ctx.fillRect(545, 200, 100, 100);

//OJOS
ctx.beginPath();
ctx.arc(650, 100, 20, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(550, 100, 20, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

//BOCA
ctx.beginPath();
ctx.arc(600, 105, 100, .8, 2.4);
ctx.fillStyle = "black";
ctx.fill();

// TORSO
ctx.fillStyle = "#545327";
ctx.fillRect(475, 300, 250, 320);

// BRAZOS
ctx.strokeStyle = "#ffe6b3";
ctx.lineWidth = 50;

// Brazo derecho
ctx.beginPath();
ctx.moveTo(705, 300);
ctx.lineTo(820, 600);
ctx.stroke();

// Brazo izquierdo
ctx.beginPath();
ctx.moveTo(482, 300);
ctx.lineTo(380, 600);
ctx.stroke();

// PIERNAS
ctx.strokeStyle = "#34373b";
ctx.lineWidth = 60;

// Pierna derecha
ctx.beginPath();
ctx.moveTo(650, 620);
ctx.lineTo(650, 870);
ctx.stroke();

// Pierna izquierda
ctx.beginPath();
ctx.moveTo(540, 620);
ctx.lineTo(540, 870);
ctx.stroke();







