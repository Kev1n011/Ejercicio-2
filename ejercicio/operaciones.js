const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");



var super_x = 100;
var super_y = 100;
var direccion = "";
var velocidad = 1.2;
var obstaculos = [];

var pausa = false;
var score = 0;



//SPRITES DEL JUGADOR
const monito_derecha = new Image();
monito_derecha.src = "./imagenes/monito_derecha.png"

monito_derecha.onload = function () {
    ctx.drawImage(monito_derecha, this.x, this.y, 800, 100);
};

const monito_izquierda = new Image();
monito_izquierda.src = "./imagenes/monito_izquierda.png"

monito_izquierda.onload = function () {
    ctx.drawImage(monito_izquierda, this.x, this.y, 800, 100);
};

const monito_abajo = new Image();
monito_abajo.src = "./imagenes/monito_abajo.png"

monito_abajo.onload = function () {
    ctx.drawImage(monito_abajo, this.x, this.y, 800, 100);
};

const monito_arriba = new Image();
monito_arriba.src = "./imagenes/monito_arriba.png"

monito_arriba.onload = function () {
    ctx.drawImage(monito_arriba, this.x, this.y, 800, 100);
};

var monito = new Image(); //Se establece la iamgen como variable para que pueda cambiar de sprite dependienmdo del lado al que se mueve
monito = monito_derecha; //Por default, el sprite inicial es el de el monito mirando hacia la derecha


function sonido() {
    var audio = new Audio('./sonidos/aumentar_puntuacion.wav');
    audio.play();

}


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
    dibujar_monito() {
        ctx.drawImage(monito, this.x, this.y, 100, 100);
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
            if (direccion == "izquierda") {
                this.x = otro.x + otro.ancho;  
            } else if (direccion == "derecha") {
                this.x = otro.x - this.ancho;  
            } else if (direccion == "arriba") {
                this.y = otro.y + otro.alto;   
            } else if (direccion == "abajo") {
                this.y = otro.y - this.alto;  
            }
        }
    }

    manejarColisionCuadrado(otro) {
        while (this.colisionaCon(otro)) {
            this.teletransportar(); 
        }
    }



    teletransportar() {
        this.x = Math.random() * (canvas.width - this.ancho);
        this.y = Math.random() * (canvas.height - this.alto);
    }



}


obstaculos.push(new Rectangulo(100, 100, 20, 100, "gray"));
obstaculos.push(new Rectangulo(400, 100, 500, 20, "gray"));
obstaculos.push(new Rectangulo(400, 700, 500, 20, "gray"));
obstaculos.push(new Rectangulo(400, 400, 500, 20, "gray"));
obstaculos.push(new Rectangulo(1000, 400, 20, 500, "gray"));
obstaculos.push(new Rectangulo(1000, 400, 20, 500, "gray"));





// Crear instancias de Rectangulo
const player = new Rectangulo(100, 500, 100, 100);
const cuadrado = new Rectangulo(430, 130, 20, 20, "red");

obstaculos.forEach(function (obstaculo, indice, array) {
    console.log(obstaculo, indice);
});
paint();

document.addEventListener("keypress", function (e) {
    var tecla_presionada = e.keyCode;
    console.log("tecla: " + tecla_presionada)

    if (!pausa) {
        switch (tecla_presionada) {
            case 97:
                direccion = "izquierda";
                monito = monito_izquierda;
                break;
            case 115:
                direccion = "abajo";
                monito = monito_abajo;
                break;
            case 100:
                direccion = "derecha";
                monito = monito_derecha;


                break;
            case 119:
                direccion = "arriba";
                monito = monito_arriba;

                break;
        }
    }

    if (tecla_presionada == 32) {
        pausa = !pausa;
    }
    //a = 97 s = 115 d = 100 w = 119
});

function update() {
    if (!pausa) {
        switch (direccion) {
            case "arriba":
                player.y -= velocidad;
                if (player.y < -110) {
                    player.y = 800;

                }
                break;
            case "abajo":
                player.y += velocidad;
                if (player.y > 800) {
                    player.y = -100;

                }
                break;
            case "izquierda":
                player.x -= velocidad;
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
            score += 1;
            sonido();
        }
        player.manejarColision(obstaculos);

        obstaculos.forEach(function (obstaculo) { //Evita que el puntito quede atrapado dentro de un obstaculo
            cuadrado.manejarColisionCuadrado(obstaculo);
        });

        obstaculos.forEach(function (obstaculo, indice, array) {
            player.manejarColision(obstaculo)

        });






    }



}

function paint() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //fondo del canvas
    ctx.fillStyle = 'rgba(255,138,57,.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);



    player.dibujar_monito();
    cuadrado.dibujar();
    ctx.font = "30px Georgia";
    ctx.fillStyle = "gray";
    ctx.fillText("Score: " + score, 100, 30);

    obstaculos.forEach(function (obstaculo, indice, array) {
        ctx.fillStyle = obstaculo.color;
        ctx.fillRect(obstaculo.x, obstaculo.y, obstaculo.ancho, obstaculo.alto)

    });
    if (pausa) {
        ctx.fillStyle = "rgba(100,100,100,.5)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "black";
        ctx.font = "100px Georgia";
        ctx.fillText("Pausa", (canvas.width / 2) - 100, canvas.height / 2);
    }
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



