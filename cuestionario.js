//Contadores de la pregunta 1 y 2
var contador = 1;
var contador2 = 1;

//Cuenta los intentos de la pregunta 1
function intentos() {

	var contador = document.getElementById("intentos");
	var toInt = parseInt(contador.innerHTML);
	toInt++;
	contador.innerHTML = toInt;
	contadorGlobal();
	console.log(toInt);
	if (toInt==3) {
		deshabilitar1();
	}
}


function deshabilitar1(){
	var bBorrar = document.getElementById("borrar");
	var bAceptar = document.getElementById("btnAceptar");
	 bBorrar.disabled=true;
	 bAceptar.disabled=true;

}


//Botón aceptar pregunta 1
function aceptar() {
	var selec = document.getElementsByClassName("resp1");
	var check = document.getElementsByClassName("resp1");

	var btnAceptar = document.getElementById("btnAceptar");
	var btnBorrar = document.getElementById("borrar");

	var inc = document.getElementById("inc");
	var corr = document.getElementById("corr");
	var inc2 = document.getElementById("inc2");

	var img_inc = document.getElementById("img_inc");
	var img_corr = document.getElementById("img_corr");
	var img_inc2 = document.getElementById("img_inc2");

	

	if (inc.checked == true ) {
		img_inc.style.visibility = "visible";
	}


	if (corr.checked == true ) {
		img_corr.style.visibility = "visible";

	}

	if (inc2.checked == true ) {
		img_inc2.style.visibility = "visible";

	}

	if (img_inc.style.visibility == "visible" || img_corr.style.visibility == "visible"|| img_inc2.style.visibility == "visible") {
		btnAceptar.disabled = true;
	}
	if (img_corr.style.visibility=="visible"){
		btnAceptar.disabled=true;
		btnBorrar.disabled=true;

	}


	intentos();
}

//Botón borrar pregunta 1
function borrar() {
	var check = document.getElementsByClassName("resp1");

	var inc = document.getElementById("inc");
	var corr = document.getElementById("corr");
	var inc2 = document.getElementById("inc2");

	var btnAceptar = document.getElementById("btnAceptar");


	var img_inc = document.getElementById("img_inc");
	var img_corr = document.getElementById("img_corr");
	var img_inc2 = document.getElementById("img_inc2");

	for (i=0; i < check.length; i++) {
		if (check[i].checked = true) {
			check[i].checked = false;
		}
		
	}

	if (img_inc.style.visibility == "visible") {
		img_inc.style.visibility  = "hidden"
	}

	if (img_corr.style.visibility == "visible") {
		img_corr.style.visibility  = "hidden"
	}

	if (img_inc2.style.visibility == "visible") {
		img_inc2.style.visibility  = "hidden"
	}

	if (img_inc.style.visibility == "hidden" || img_corr.style.visibility == "hidden"|| img_inc2.style.visibility == "hidden") {
		btnAceptar.disabled = false;
	}



}

//Cuenta intentos pregunta 2
function intentos2() {
	var contador = document.getElementById("intentos2");
	var toInt = parseInt(contador.innerHTML);
	toInt++;
	contador.innerHTML = toInt;
	contadorGlobal();
	console.log(toInt);
	if (toInt==3) {
		deshabilitar2();
	}
}

function deshabilitar2(){
	var bBorrar = document.getElementById("bor");
	var bAceptar = document.getElementById("comp");
	 bBorrar.disabled=true;
	 bAceptar.disabled=true;

}



//Boton aceptar de la pregunta2
function comprovar(){
	
	var btnAceptar2 = document.getElementById("comp");
	var btnBorrar2 = document.getElementById("bor");
	var div2 = document.getElementsByClassName("div2");
	var img_corr = document.getElementById("tick");
	
	if (f.checked == true ) {
		x.style.visibility = "visible";
	}

	if (v.checked == true ) {
		tick.style.visibility = "visible";
	}

	if (tick.style.visibility == "visible") {
		btnAceptar2.disabled = true;

	} else if (x.style.visibility == "visible") {
		btnAceptar2.disabled = false;
	}

	if(img_corr.style.visibility=="visible"){
		btnAceptar2.disabled=true;
		btnBorrar2.disabled=true;
	}

	


	intentos2();

}

//Botón borrar de la pregunta 2
function borrar_khalid(){
	var check = document.getElementsByClassName("resp2");


	img_corr = document.getElementById("tick");
	img_inc = document.getElementById("tick");

	for (i=0; i < check.length; i++) {
		if (check[i].checked = true) {
			check[i].checked = false;
		}
		
	}

	if (x.style.visibility == "visible") {
		x.style.visibility  = "hidden"
	}

	if (tick.style.visibility == "visible") {
		tick.style.visibility  = "hidden"
	}
}

//Desmarca la opción falsa
function verdadero(){
	var fals=document.getElementById("f");
	fals.checked=false;
}

//Desmarca la opción verdadera
function falso(){
	var verd=document.getElementById("v");
	verd.checked=false;
}

//Limpia el texto de la pregunta 3.
function resetearTexto(){
	var textoArea = document.getElementById("textoArea");
	textoArea.value = "";
	document.getElementById("myP").style.visibility = "hidden";

}
//Muestra el texto correcto debajo del textArea.
function comprovarTexto(){
	document.getElementById("myP").style.visibility = "";
	var textoArea = document.getElementById("textoArea");
	contarIntentosPrg3();
	textoArea.disabled=true;


}
//Limpia el texto y elimina el borderColor rojo de los inputs.
function limpiarTexto(){
	var inputs = document.getElementsByClassName("palabras");
	for (var i = 0; i < inputs.length; i++) { //For para recorrer todos los inputs con la class palabras.
		inputs[i].value = "";
		inputs[i].style.borderColor = "";
	}

}
//Comprueba los inputs de la cuarta pregunta y si son incorrectos añade un borderColor rojo.
function comprovarTexto2(){
	contarIntentosPrg4();
	var arrayPalabras = ["común","sentidos","pesimista","optimista","realista"]; //Array con las palabras correctas
	var inputs = document.getElementsByClassName("palabras");
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].value != arrayPalabras[i]) { //Se supone que el numero de inputs tiene la misma longitud que las palabras correctas
			inputs[i].style.borderColor = "red";
		} 
		
	}
}
//Contador de la pregunta 3. 
function contarIntentosPrg3(){
	var contador = document.getElementById("prg3");
	var toInt = parseInt(contador.innerHTML);
	toInt++;
	contador.innerHTML = toInt;
	contadorGlobal();
	if (toInt==3) {
		deshabilitar3();
	}
}

function deshabilitar3(){
	var bBorrar = document.getElementById("borrar3");
	var bAceptar = document.getElementById("comprovar3");
	 bBorrar.disabled=true;
	 bAceptar.disabled=true;

}

	
//Contador de la pregunta 4
function contarIntentosPrg4(){
	var contador = document.getElementById("prg4");
	var toInt = parseInt(contador.innerHTML);
	toInt++;
	contador.innerHTML = toInt;
	contadorGlobal();
	if (toInt==3) {
		deshabilitar4();
	}
}

function deshabilitar4(){
	var bBorrar = document.getElementById("borrar4");
	var bAceptar = document.getElementById("comprovar4");
	 bBorrar.disabled=true;
	 bAceptar.disabled=true;

}

	

//Contador total
function contadorGlobal(){
	var contadorGlobal = document.getElementById("intTotales");
	var contador1 = parseInt(document.getElementById("intentos").innerHTML);
	var contador2 = parseInt(document.getElementById("intentos2").innerHTML);
	var contador3 = parseInt(document.getElementById("prg3").innerHTML);
	var contador4 = parseInt(document.getElementById("prg4").innerHTML);
	var contadorTotal = contador1 + contador2 + contador3 + contador4;

	contadorGlobal.innerHTML = contadorTotal;

}
