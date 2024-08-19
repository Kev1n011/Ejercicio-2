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
ctx.arc(580, 420, 40, 1.1, Math.PI);
ctx.fillStyle = "orange";             
ctx.fill(); 
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

//TRIANGULO
ctx.beginPath();
ctx.moveTo(750, 205); 
ctx.lineTo(950, 205); 
ctx.lineTo(850, 130);  
ctx.closePath();      

ctx.fillStyle = "rgba(31, 147, 241)";
ctx.fill();            

//CUADRADOS
var moverHorizontal = 200;
ctx.strokeStyle = "rgba(90, 90, 90)";
ctx.lineWidth = 3;
ctx.strokeRect(160 + moverHorizontal, 105, 100, 100);

ctx.fillStyle = "black";
ctx.fillRect(210 + moverHorizontal, 155, 100, 100);  

ctx.fillStyle = "rgba(31, 147, 241)";  
ctx.fillRect(265 + moverHorizontal, 205, 100, 100);

ctx.strokeStyle = "lightgreen";  
ctx.lineWidth = 1;
ctx.strokeRect(315 + moverHorizontal, 255, 100, 100);