const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


document.getElementById("myCanvas").addEventListener("mouseup", function (e) {
    console.log("Coordenadas:", e.x, e.y);
});

//fondo del canvas
ctx.fillStyle = '#78b2ff';
ctx.fillRect(0, 0, canvas.width, canvas.height - 100);



//Suelo
ctx.beginPath();
ctx.fillStyle = "#08ff1c";
ctx.fillRect(0, 725, 1500, 25);

ctx.beginPath();
ctx.fillStyle = "#0aad18";
ctx.fillRect(0, 750, 1500, 25);

ctx.beginPath();
ctx.fillStyle = "#03540a";
ctx.fillRect(0, 775, 1500, 25);

//Casa
ctx.beginPath();
ctx.fillStyle = "#f7ff8a";
ctx.fill()
ctx.fillRect(500, 375, 550, 350);
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.strokeRect(500, 375, 550, 350);

//Puerta
ctx.beginPath();
ctx.fillStyle = "red";
ctx.fill()
ctx.fillRect(720, 525, 115, 200);
ctx.strokeStyle = "black";
ctx.lineWidth = 3.5;
ctx.strokeRect(720, 525, 115, 200);

//Techo
ctx.beginPath();
ctx.moveTo(400, 425);
ctx.lineTo(1150, 425);
ctx.lineTo(775, 100);  
ctx.closePath();
ctx.fillStyle = "red";  
ctx.fill();              
ctx.lineWidth = 2;         
ctx.stroke();  


ctx.stroke();

function dibujar_ventana(x, y) {
   
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 100, 100);

    // Primer stroke
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, 100, 100); 

    // Segundo stroke
    ctx.lineWidth = 2;
    ctx.strokeRect(x - 5, y - 5, 110, 110); 

    //Diseño de cruz para la ventana
    ctx.beginPath();
    ctx.moveTo(x + 50, y); 
    ctx.lineTo(x + 50, y + 100);
    ctx.moveTo(x, y + 50); 
    ctx.lineTo(x + 100, y + 50);
    ctx.lineWidth = 4;
    ctx.stroke();
}

dibujar_ventana(900, 450);
dibujar_ventana(550,450);

//Sol
ctx.beginPath();
ctx.arc(1300, 120, 90, 0, Math.PI * 2); 
ctx.fillStyle = "yellow";
ctx.fill();
ctx.strokeStyle = "orange";
ctx.lineWidth = 4;
ctx.stroke();

function dibujar_nube(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 30, Math.PI * 0.5, Math.PI * 1.5); 
    ctx.arc(x + 40, y - 30, 40, Math.PI * 1, Math.PI * 2);
    ctx.arc(x + 80, y, 30, Math.PI * 1.5, Math.PI * 0.5); 
    ctx.arc(x + 40, y + 30, 30, Math.PI * 0, Math.PI * 1);
    ctx.closePath();
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 2;
    ctx.stroke();
}

dibujar_nube(200, 150);
dibujar_nube(500, 100);
dibujar_nube(1000,100);











