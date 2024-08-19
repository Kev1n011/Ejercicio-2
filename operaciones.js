const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

//Cuadrados
ctx.fillStyle = "red";
ctx.fillRect(20, 20, 100, 100);

ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
ctx.fillRect(110, 105, 100, 100);

ctx.fillStyle = "green";
ctx.fillRect(200, 190, 100, 100);

ctx.strokeStyle = "black";  
ctx.lineWidth = 2;
ctx.strokeRect(290, 275, 100, 100);

ctx.strokeStyle = "red";  
ctx.lineWidth = 3;
ctx.strokeRect(370, 355, 100, 100);


//Triangulo
ctx.beginPath();
ctx.moveTo(320, 255);    
ctx.lineTo(430, 150);   
ctx.lineTo(320, 500);   
ctx.closePath();      
ctx.fillStyle = "rgba(0, 255, 255, 0.5)"; 
ctx.fill();              
ctx.strokeStyle = "red";
ctx.lineWidth = 3;
ctx.stroke();            
