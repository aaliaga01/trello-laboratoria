function crearLista (){ //boton con evento click para cear lista
	var listaNueva = document.getElementById("ag-lista");
	listaNueva.addEventListener("click", function(){//hara todo lo que este en esta funcion cada vez que presione el boton añadir lista
		
		//funcion que despliega campos
		var divTexto = document.createElement("textarea");//crear caja de texto
		divTexto.setAttribute("id", "ingresaLista");//crear id de caja de texto
		divTexto.setAttribute("placeholder", "Añadir lista...");//agregar atributo placehoder
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
			var linkTareas = document.createTextNode("Añadir una tarjeta");
			botonTareas.appendChild(linkTareas);
			tareasLista.appendChild(botonTareas);
			botonTareas.onclick = function(){

				//div contenedor caja de texto y boton para agregar lista
				var divTareas = document.createElement("div");//Se crea div
				divTareas.setAttribute("id", "contlistado");//se le asigna ID
				tareasLista.appendChild(divTareas);//se coloca dentro de divTareas

				//Caja de texto
				var cajaTareas = document.createElement("textarea");//se crea caja de texto
				cajaTareas.setAttribute("id", "ingresaTareas");//Se le da un ID
				divTareas.appendChild(cajaTareas);//se coloca dentro de divTareas

				//boton agregar
				var botonAgregarTarea = document.createElement("button");//Se crea boton
				botonAgregarTarea.setAttribute("id", "otra-tarea");//se le asigna ID
				botonAgregarTarea.innerText = "Añadir";//Texto del boton
				document.getElementById("contlistado").appendChild(botonAgregarTarea);//se coloca boton dentro de contListado

				var listaDeTareas = document.createElement("ul");//se crea lista desordenada
				tareasLista.appendChild(listaDeTareas);//se coloca dentro de tareasLista

				botonAgregarTarea.onclick = function(){//esto pasa a agregar tarea
					
					//crea lista de tareas
					var tareaIng = document.getElementById("ingresaTareas").value;//toma el valor ingresado
					var tareaNueva = document.createElement("li");//crea un li por cada nueva tarea ingresada
					var tareaTexto = document.createTextNode(tareaIng);//crea un nodo texto para mostrar valor ingresado
					tareaNueva.appendChild(tareaTexto);//coloca el texto dentro de Li
					listaDeTareas.appendChild(tareaNueva);//coloca Li dentro de Ul
				}
			}
 		}

	boton.innerText = "Guardar";//texto que mostrara el boton
	document.getElementById("mostrar-lista").appendChild(boton);//Se indica donde se quiere agregar el boton creado
	});
}
crearLista();//NO OLVIDAR LLAMAR A LA FUNCIOOOOON!!!
//PD: Funciona solo una vez... pero al menos funciona, he avanzado algo XD