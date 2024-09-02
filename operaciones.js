const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


document.getElementById("myCanvas").addEventListener("mouseup", function (e) {
    console.log("Coordenadas:", e.x, e.y);
});

//fondo del canvas
ctx.fillStyle = '#2804a4';
ctx.fillRect(0, 0, canvas.width, canvas.height - 100);



ctx.beginPath();
ctx.lineWidth = 3;
ctx.strokeStyle = "#000000";
ctx.strokeRect(0, 600, 1500, 200);

let x_cubos = 0;
let y_cubos = 600;

//Crear cubos debajo del suelo
let bandera = 0;
while (bandera < 3){
    for (let i = 0; i <= 22; i++){
        ctx.beginPath();
        if (i % 2 === 0) {
            ctx.fillStyle = "#622204"; 
        } else {
            ctx.fillStyle = "#c36204"; 
        }
        ctx.fill()
        ctx.fillRect(x_cubos, y_cubos, 68, 68);
    
        ctx.strokeStyle = "black"; 
        ctx.lineWidth = 2; 
        ctx.strokeRect(x_cubos, y_cubos, 68, 68);
    
        x_cubos += 68;
    }
    bandera++;
    y_cubos += 68;
    x_cubos = 0;

}

//Lineas del suelo
ctx.beginPath();
ctx.fillStyle = "#08ff1c";
ctx.fillRect(0, 525, 1500, 25);

ctx.beginPath();
ctx.fillStyle = "#0aad18";
ctx.fillRect(0, 550, 1500, 25);

ctx.beginPath();
ctx.fillStyle = "#03540a";
ctx.fillRect(0, 575, 1500, 25);


ctx.beginPath();
ctx.fillStyle = "#622204";
ctx.fillRect(1000, 200, 25, 325);

// Tallo
ctx.beginPath();
ctx.strokeStyle = "#4CAF50"; // Color verde
ctx.lineWidth = 10;
ctx.moveTo(1200, 525); // Comienza desde el suelo
ctx.lineTo(1200, 400); // Altura del tallo
ctx.stroke();

// Círculo del girasol
ctx.beginPath();
ctx.arc(1200, 400, 30, 0, Math.PI * 2, true); // Círculo central en la parte superior del tallo
ctx.fillStyle = "#FFD700"; // Color amarillo para el centro de la flor
ctx.fill();
ctx.strokeStyle = "#DAA520"; // Color dorado para el borde del centro de la flor
ctx.lineWidth = 6;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(1200, 450); 
ctx.quadraticCurveTo(1150, 420, 1170, 470);
ctx.quadraticCurveTo(1185, 480, 1200, 450); 
ctx.fillStyle = "#4CAF50"; 
ctx.fill();
ctx.strokeStyle = "#388E3C"; 
ctx.lineWidth = 2;
ctx.stroke();

// Hoja derecha
ctx.beginPath();
ctx.moveTo(1200, 450); 
ctx.quadraticCurveTo(1250, 420, 1230, 470); 
ctx.quadraticCurveTo(1215, 480, 1200, 450); 
ctx.fillStyle = "#4CAF50"; 
ctx.fill();
ctx.strokeStyle = "#388E3C"; 
ctx.lineWidth = 2;
ctx.stroke();



// Anillos
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(300, 475, 30, 0, Math.PI * 2);
ctx.strokeStyle = "#fff833"; 
ctx.stroke(); 
ctx.closePath();

ctx.beginPath();
ctx.arc(400, 475, 30, 0, Math.PI * 2);
ctx.strokeStyle = "#fff833"; 
ctx.stroke(); 
ctx.closePath();

ctx.beginPath();
ctx.arc(500, 475, 30, 0, Math.PI * 2);
ctx.strokeStyle = "#fff833";
ctx.stroke(); 
ctx.closePath();















