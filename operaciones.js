const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//CIRCULOS
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

document.getElementById("myCanvas").addEventListener("mousedown", function (e) {

    let numeroRandom = Math.floor(Math.random() * 256);
    let numeroRandom2 = Math.floor(Math.random() * 256);


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

document.getElementById("myCanvas").addEventListener("mousemove", function (e) {
    console.log("aaaa");
    
    ctx.beginPath();
    ctx.arc(e.x - 10, e.y - 10, 5, 0, 2 * Math.PI);
    ctx.fillStyle = `black`
    ctx.fill();

});



