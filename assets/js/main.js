function crearLista (){ //boton con evento click para cear lista
	var listaNueva = document.getElementById("ag-lista");
	listaNueva.addEventListener("click", function(){
		//funcion que despliega campos

		var divTexto = document.createElement("textarea");//crear caja de texto
			divTexto.setAttribute("id", "ingresaLista");
			divTexto.setAttribute("placeholder", "Agregar lista");

			document.getElementById("mostrar-lista").appendChild(divTexto);

	});
}
crearLista();

