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
ctx.arc(290, 330, 120, .8, 2.4); // Arco para la sonrisa
ctx.fillStyle = "black"; // Color de relleno
ctx.fill(); // Rellenar la forma
ctx.strokeStyle = "blue"; // Color de borde
ctx.lineWidth = 3; // Ancho de la línea de borde
ctx.stroke(); // Dibujar el borde

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
ctx.fillStyle  ="blue";
ctx.fillText("Hola mundo!", 500, 50);


//Imagen
var img = new Image();
img.src = 'images.jpeg';
img.onload = function() {
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

