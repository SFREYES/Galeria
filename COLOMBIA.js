window.onload=manejarclick;
var inicio="IMG1.jpg";
function manejarclick(){
	var IMG1=document.getElementById("IMG1");
	IMG1.addEventListener("click",function(){
							mostrar(IMG1.src);
								});
	IMG1.addEventListener("mouseover",function(){
							fijar(IMG1.src);
								});
	IMG1.addEventListener("mouseout",function(){
							salir(IMG1.src);
								});
	var IMG2=document.getElementById("IMG2");
	IMG2.addEventListener("click",function(){
							mostrar(IMG2.src);
								});
	IMG2.addEventListener("mouseover",function(){
							fijar(IMG2.src);
								});
	IMG2.addEventListener("mouseout",function(){
							salir(IMG2.src);
								});
	var IMG3=document.getElementById("IMG3");
	IMG3.addEventListener("click",function(){
							mostrar(IMG3.src);
								});
	IMG3.addEventListener("mouseover",function(){
							fijar(IMG3.src);
								});
	IMG3.addEventListener("mouseout",function(){
							salir(IMG3.src);
								});
	var IMG4=document.getElementById("IMG4");
	IMG4.addEventListener("click",function(){
							mostrar(IMG4.src);
								});
	IMG4.addEventListener("mouseover",function(){
							fijar(IMG4.src);
								});
	IMG4.addEventListener("mouseout",function(){
							salir(IMG4.src);
								});
	var IMG5=document.getElementById("IMG5");
	IMG5.addEventListener("click",function(){
							mostrar(IMG5.src);
								});
	IMG5.addEventListener("mouseover",function(){
							fijar(IMG5.src);
								});
	IMG5.addEventListener("mouseout",function(){
							salir(IMG5.src);
								});
	var IMG6=document.getElementById("IMG6");
	IMG6.addEventListener("click",function(){
							mostrar(IMG6.src);
								});
	IMG6.addEventListener("mouseover",function(){
							fijar(IMG6.src);
								});
	IMG6.addEventListener("mouseout",function(){
							salir(IMG6.src);
								});
}
function mostrar(imagen){
	inicio=imagen;
	var g =document.getElementById("img").src=inicio;
}
function fijar(IMG){
	var a =document.getElementById("img").src=IMG;
}
function salir(Img){
	var v =document.getElementById("img").src=inicio;
}