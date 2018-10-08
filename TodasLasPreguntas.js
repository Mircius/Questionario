

//Marc
////////////////////////////////////////////////////
var contador = 1;
var contador2 = 1;
var contador3 = 1;

function intentos() {

	document.getElementById("intentos").innerHTML = contador;

	contador++;



}

function intentos_global() {
	var contador_global = contador+contador2+contador3;

}

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


	if (contador >= 3) {
		btnAceptar.disabled == true;
		btnBorrar.disabled == true;

	}

	intentos();


}


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

	intentos_global();


}

function fondo() {
		var check = document.getElementsByClassName("resp1");
		var resp = document.getElementsByClassName("respuesta");

		for (i=0; i < check.length; i++) {
			if (check[i].checked = true) {
				document.body.style.backgroundColor = "red"; 
			}
		}
}

function verdadero(){
	var fals=document.getElementById("f");
	fals.checked=false;
	}

function falso(){
	var verd=document.getElementById("v");
	verd.checked=false;
}

	
function comprovar(){
	var fals=document.getElementById("f");
	var verd=document.getElementById("v");
	var img=document.getElementById("x");
	var jpg=document.getElementById("tick");
	var compr=document.getElementById("comp");
	if (fals.checked==true) {
		img.style.visibility="visible";
		fals.disabled=true;
		verd.disabled=true;
		compr.disabled=true;
	}else{
		compr.disabled=false;
	}
	if (verd.checked==true) {
		jpg.style.visibility="visible";
		verd.disabled=true;
		fals.disabled=true;
		compr.disabled=true;

	}
		

}

function borrar(){
	var cl=document.getElementById("vt");
	var cl2=document.getElementById("ft");
	var fals=document.getElementById("f");
	var verd=document.getElementById("v");
	var img=document.getElementById("x");
	var jpg=document.getElementById("tick");
	fals.checked=false;
	verd.checked=false;
	if (img.style.visibility="visible"){
		img.style.visibility="hidden";
	}if (jpg.style.visibility="visible"){
		jpg.style.visibility="hidden";
	}if (verd.disabled=true) {
		verd.disabled=false;
		cl.style.backgroundColor="cyan";

	}if (fals.disabled=true){
		fals.disabled=false;
		cl2.style.backgroundColor="cyan";
	}
}

function color(){
	var cl=document.getElementById("vt");
	var cl2=document.getElementById("ft");
	var fals=document.getElementById("f");
	var verd=document.getElementById("v");
	if (verd.checked==true) {
		cl.style.backgroundColor="blue";
	}
	
	if (fals.checked==true) {
		cl2.style.backgroundColor="blue";
	}
	

}

//Sergi
///////////////////////////////////////////////////
//Limpia el texto de la pregunta 3.
function resetearTexto(){
	var textoArea = document.getElementById("textoArea");
	textoArea.value = "";
	document.getElementById("myP").style.visibility = "hidden";

}
//Muestra el texto correcto debajo del textArea.
function comprovarTexto(){
	document.getElementById("myP").style.visibility = "";
	contarIntentosPrg3();

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

	
}
//Contador de la pregunta 4
function contarIntentosPrg4(){
	var contador = document.getElementById("prg4");
	var toInt = parseInt(contador.innerHTML);
	toInt++;
	contador.innerHTML = toInt;
	contadorGlobal();

	
}
//Contador total
function contadorGlobal(){
	var contadorGlobal = document.getElementById("intTotales");
	//1
	//2
	var contador3 = parseInt(document.getElementById("prg3").innerHTML);
	var contador4 = parseInt(document.getElementById("prg4").innerHTML);
	var contadorTotal = contador3 + contador4;

	contadorGlobal.innerHTML = contadorTotal;

}

//Khalid
//////////////////////////////////////////////
function verdadero(){
	var fals=document.getElementById("f");
	fals.checked=false;
	}

function falso(){
	var verd=document.getElementById("v");
	verd.checked=false;
}

	
function comprovar(){
	var fals=document.getElementById("f");
	var verd=document.getElementById("v");
	var img=document.getElementById("x");
	var jpg=document.getElementById("tick");
	var compr=document.getElementById("comp");
	if (fals.checked==true) {
		img.style.visibility="visible";
		fals.disabled=true;
		verd.disabled=true;
		compr.disabled=true;
	}else{
		compr.disabled=false;
	}
	if (verd.checked==true) {
		jpg.style.visibility="visible";
		verd.disabled=true;
		fals.disabled=true;
		compr.disabled=true;

	}
		

}

function borrar(){
	var cl=document.getElementById("vt");
	var cl2=document.getElementById("ft");
	var fals=document.getElementById("f");
	var verd=document.getElementById("v");
	var img=document.getElementById("x");
	var jpg=document.getElementById("tick");
	fals.checked=false;
	verd.checked=false;
	if (img.style.visibility="visible"){
		img.style.visibility="hidden";
	}if (jpg.style.visibility="visible"){
		jpg.style.visibility="hidden";
	}if (verd.disabled=true) {
		verd.disabled=false;
		cl.style.backgroundColor="cyan";

	}if (fals.disabled=true){
		fals.disabled=false;
		cl2.style.backgroundColor="cyan";
	}
}

function color1(){
	var cl=document.getElementById("vt");
	var cl2=document.getElementById("ft");
	var fals=document.getElementById("f");
	var verd=document.getElementById("v");
	if (verd.checked==true) {
		cl.style.backgroundColor="blue";
	}
	
	if (fals.checked==true) {
		cl2.style.backgroundColor="blue";
	}
	

}

