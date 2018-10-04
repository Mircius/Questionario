var contador = 1;

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


