function crearLista (){ //boton con evento click para cear lista
	var listaNueva = document.getElementById("ag-lista");
	listaNueva.addEventListener("click", function(){
		//funcion que despliega campos

		var divTexto = document.createElement("textarea");//crear caja de texto
			divTexto.setAttribute("id", "ingresaLista");
			divTexto.setAttribute("placeholder", "Agregar lista");
			document.getElementById("mostrar-lista").appendChild(divTexto);

		var boton = document.createElement("button");//Se crea boton
			boton.setAttribute("id","caja-boton");
			boton.onclick = function(){
 				alert("esta vivo!");
 				}
			boton.innerText = "Agregar";//texto que mostrara el boton
			document.getElementById("mostrar-lista").appendChild(boton);//Se indica donde se quiere agregar el boton creado

	});
}
crearLista();

