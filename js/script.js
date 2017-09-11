//Declaramos las constantes nombre y password 
var nom_constante="Angie";
var psw_constante="123a";

//Creamos la función
var inicio=function(){
	////Extramos los elementos del DOM
	var nombre=document.getElementById("nombre").value;
	var password=document.getElementById("pwd").value;

	var error_nombre=document.getElementById("errorn");
	var error_psw=document.getElementById("errorp");

	//Condiciones
	if(nombre=="" && password!=""){
		error_psw.innerHTML="";
		error_nombre.innerHTML="El nombre es requerido";
	}else if(nombre!="" && password==""){
		error_psw.innerHTML="El password es requerido";
	}else if(nombre!="" && password!=""){
		if(nombre==nom_constante && password==psw_constante){
			error_nombre.innerHTML="";
			error_psw.innerHTML="";
			document.write("<center><h1>Bienvenido al sistema</h1></center>")
		}else if(nombre!=nom_constante && password==psw_constante){
			error_nombre.innerHTML="Error en el nombre";
			error_psw.innerHTML="";
		}else if(nombre==nom_constante && password!=psw_constante){
			error_psw.innerHTML="Error en el password";
			error_nombre.innerHTML="";
		}else if(nombre!=nom_constante && password!=psw_constante){
			error_nombre.innerHTML="Error en el nombre";
			error_psw.innerHTML="Error en el password";
		}	
	}
	
}


//Método que carga el DOM 
window.onload=function(){
	document.getElementById("btnEntrar").onclick=inicio;
}
