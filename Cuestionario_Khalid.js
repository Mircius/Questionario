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