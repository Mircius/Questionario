
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

