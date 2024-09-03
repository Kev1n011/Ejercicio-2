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
});*/

var super_x = 100;
var super_y = 100;
var direccion = "";
var velocidad = 5;

class Rectangulo {
    constructor(x, y, ancho, alto, color) {
        this.x = x;
        this.y = y;
        this.ancho = ancho;
        this.alto = alto;
        this.color = color;
    }

    dibujar() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.ancho, this.alto);
    }

    colisionaCon(otro) {
        if (this.x < otro.x + otro.ancho &&
            this.x + this.ancho > otro.x &&
            this.y < otro.y + otro.alto &&
            this.y + this.alto > otro.y) {
            return true;
        } else {
            return false;
        }
    }

    manejarColision(otro) {
        if (this.colisionaCon(otro)) {
            var colisionPorIzquierda = this.x + this.ancho - otro.x;
            var colisionPorDerecha = otro.x + otro.ancho - this.x;
            var colisionPorArriba = this.y + this.alto - otro.y;
            var colisionPorAbajo = otro.y + otro.alto - this.y;

            if (colisionPorIzquierda < colisionPorDerecha && colisionPorIzquierda < colisionPorArriba && colisionPorIzquierda < colisionPorAbajo) {
                this.x = otro.x - this.ancho;
            } else if (colisionPorDerecha < colisionPorIzquierda && colisionPorDerecha < colisionPorArriba && colisionPorDerecha < colisionPorAbajo) {
                this.x = otro.x + otro.ancho;
            } else if (colisionPorArriba < colisionPorIzquierda && colisionPorArriba < colisionPorDerecha && colisionPorArriba < colisionPorAbajo) {
                this.y = otro.y - this.alto;
            } else if (colisionPorAbajo < colisionPorIzquierda && colisionPorAbajo < colisionPorDerecha && colisionPorAbajo < colisionPorArriba) {
                this.y = otro.y + otro.alto;
            }
        }
    }

    
    

    teletransportar() {
        this.x = Math.random() * (canvas.width - this.ancho);
        this.y = Math.random() * (canvas.height - this.alto);
    }

    
    
}

// Crear instancias de Rectangulo
const player = new Rectangulo(super_x, super_y, 100, 100, "red");
const cuadrado = new Rectangulo(230, 130, 100, 100, "yellow");
const obstaculo = new Rectangulo(340, 240, 800, 100, "green")

paint();

document.addEventListener("keypress", function (e) {
    var tecla_presionada = e.keyCode;
    console.log("tecla: " + tecla_presionada)

    //a = 97 s = 115 d = 100 w = 119
    switch (tecla_presionada) {
        case 97:
            direccion = "izquierda";
            break;
        case 115:
            direccion = "abajo";
            break;
        case 100:
            direccion = "derecha";
            break;
        case 119:
            direccion = "arriba";

            break;
        case 32:
            velocidad += 10;

            break;

    }




});

function update() {
    switch (direccion) {
        case "arriba":


            player.y -= velocidad;
            if (player.y < -110) {
                player.y = 800;

            }
            break;
        case "abajo":
            player.y += velocidad;
            console.log(super_y);
            if (player.y > 800) {
                player.y = -100;

            }
            break;
        case "izquierda":
            player.x -= velocidad;
            console.log(player.x);

            if (player.x < -110) {
                player.x = 1500

            }
            break;
        case "derecha":
            player.x += velocidad;
            if (player.x > 1500) {
                player.x = -100;

            }


    }
    

    if (player.colisionaCon(cuadrado)) {
        cuadrado.teletransportar();
    }
    player.manejarColision(obstaculo);


   
    


}

function paint() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)



    player.dibujar();
    cuadrado.dibujar();
    obstaculo.dibujar();
    update();
    requestAnimationFrame(paint)


}

requestAnimationFrame(paint)

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}());



/*
update
req


req*/