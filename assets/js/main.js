function crearLista (){ //boton con evento click para cear lista
	var listaNueva = document.getElementById("ag-lista");
	listaNueva.addEventListener("click", function(){//hara todo lo que este en esta funcion cada vez que presione el boton añadir lista
		
		//funcion que despliega campos
		var divTexto = document.createElement("textarea");//crear caja de texto
		divTexto.setAttribute("id", "ingresaLista");//crear id de caja de texto
		divTexto.setAttribute("placeholder", "Agregar lista");//agregar atributo placehoder
		document.getElementById("mostrar-lista").appendChild(divTexto);//poner textarea dentro de mostrar

		var boton = document.createElement("button");//Se crea boton
		boton.setAttribute("id","caja-boton");

		boton.onclick = function(){//hara todo esto cada vez que se presione el boton agregar

			//Titulo de la lista
 			var valorLista = document.getElementById("ingresaLista").value;//guardar texto ingresado por usuario
		
 			var tareasLista = document.createElement("div");//en este div iran el titulo de la lista y su textarea y boton para agregar las tareas
 			tareasLista.setAttribute("id", "tareas");//agrega identificador ID a mi div
			document.getElementById("mostrar-lista").appendChild(tareasLista);//se asigna como hijo de mostrar-lista

			var tituloLista = document.createElement("h3");//crea elemento que contendra nombre de la lista
			var nombreLista = document.createTextNode(valorLista);//crea nodo de texto para mostrar titulo
			tituloLista.appendChild(nombreLista);//hace que el texto ingresado se escriba en el h3
			tareasLista.appendChild(tituloLista);//hace que h3 se imprima dentro del div tareas

			//boton agregar
			var botonTareas = document.createElement("a");
			botonTareas.setAttribute("href", "#");
			var linkTareas = document.createTextNode("Agregar Tareas");
			botonTareas.appendChild(linkTareas);
			tareasLista.appendChild(botonTareas);
			botonTareas.onclick = function(){

				//div contenedor caja de texto y boton para agregar lista
				var divTareas = document.createElement("div");
				divTareas.setAttribute("id", "contlistado");
				tareasLista.appendChild(divTareas);

				//Caja de texto
				var cajaTareas = document.createElement("textarea");
				cajaTareas.setAttribute("id", "ingresaTareas");
				divTareas.appendChild(cajaTareas);

				//boton agregar
				var botonAgregarTarea = document.createElement("button");
				botonAgregarTarea.setAttribute("id", "otra-tarea");
				botonAgregarTarea.innerText = "Agregar"
				document.getElementById("contlistado").appendChild(botonAgregarTarea);
				botonAgregarTarea.onclick = function(){
					alert("tarea!");
				}
				}
 		}

	boton.innerText = "Agregar";//texto que mostrara el boton
	document.getElementById("mostrar-lista").appendChild(boton);//Se indica donde se quiere agregar el boton creado
	});
}
crearLista();//NO OLVIDAR LLAMAR A LA FUNCIOOOOON!!!