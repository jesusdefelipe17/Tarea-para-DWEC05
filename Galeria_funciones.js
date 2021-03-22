let aWindows = new Array();
let flag = 0;
function inicio() {

	
	//Creamos una galeria con un titulo
	let gallery = new Gallery("Galeria Jesus");

	//Añadimos categorias 

	let categoria1 = new Category("Categoria 1", "Esta es la prueba de categoria 1");
	let categoria2 = new Category("Categoria 2", "Esta es la prueba de categoria 2");
	let categoria3 = new Category("Categoria 3", "Esta es la prueba de categoria 3");
	let categoria4 = new Category("Categoria 4", "Esta es la prueba de categoria 4");

	//Creamos una categoria para poder añadirla 
	console.log("----------------------------------------------------")
	console.log("Añadir Categorias")
	console.log(gallery.addCategory(categoria1));
	console.log(gallery.addCategory(categoria2));
	console.log(gallery.addCategory(categoria3));
	console.log(gallery.addCategory(categoria4));

	console.log("----------------------------------------------------")
	console.log("Añadir Authores")
	let autor = new Author("Jesus","alumno@alumno.com","avatar1");
	console.log(gallery.addAuthor(autor));
	let autor2 = new Author("PEpe","alumno@alumno.com","avatar2");
	console.log(gallery.addAuthor(autor2));
	let autor4 = new Author("autor4","autor4@alumno.com","avatar4");
	console.log(gallery.addAuthor(autor4));
	let autor5= new Author("autor5","autor5@alumno.com","avatar5");
	console.log(gallery.addAuthor(autor5));
	
	
	console.log("----------------------------------------------------")
	console.log("Añadir Imagen");
	//Tenemos que crear un author y una categoria y una coordenadas
	let coord4 = new Coords("-000123","232342");
	let imagen1 = new Portrait("imagen1","esta es la imagen 1","img/landscape/3.jpg",coord4);
	console.log(gallery.addImage(imagen1,categoria1,autor));
	let coord5 = new Coords("-255555","0000033");
	let imagen2 = new Portrait("imagen2","esta es la imagen 2","img/landscape/4.jpg",coord5);
	console.log(gallery.addImage(imagen2,categoria2,autor2));
	let coord6 = new Coords("99999","-123456");
	let imagen3 = new Landscape("imagen3","esta es la imagen 3","img/landscape/1.jpg",coord6);
	console.log(gallery.addImage(imagen3,categoria3,autor4));
	let imagen4 = new Landscape("imagen4","esta es la imagen 4","img/landscape/2.jpg",coord6);
	console.log(gallery.addImage(imagen4,categoria4,autor5));

	var select = document.getElementById("categoriasFiltro");
	select.style.visibility = 'hidden';

	cargarCategorias(gallery);
	cargarAutores(gallery);

	var select = document.getElementById('categorias');
	select.addEventListener('change',
	function(){
		

		
		//Se obtiene el valor de la URL desde el navegador
		var actual = window.location+'';
		//Se realiza la división de la URL
		var split = actual.split("#");
		//Se obtiene el ultimo valor de la URL

		var final = split[1].replace(/%20/g, " ")

		var arrayCat = final.split("-");
		let categoriaSelecionada = new Category(arrayCat[0],arrayCat[1]);
		var categoriasImagenes = gallery.getCategoryImages(categoriaSelecionada);
		

		mostrarCategoriasImagenes(categoriasImagenes);
		crearNuevoMenuCategorias(gallery);
		crearFiltroCategorias(gallery);

  });
  
  var autores2 = document.getElementById('menu');
  autores2.addEventListener('click',
	function(){
	
		setTimeout(function () {

			//Se obtiene el valor de la URL desde el navegador
		var actual = window.location+'';
		//Se realiza la división de la URL
		var dividir = actual.split("#");
		//Se obtiene el ultimo valor de la URL

		var final = dividir[1];



		var arrayAuth = final.split("-");

		let autoresSelecionada = new Author(arrayAuth[0],arrayAuth[1],arrayAuth[2]);
		var autoresImagenes = gallery.getAuthorImages(autoresSelecionada);
		
		mostrarAutoresImagenes(autoresImagenes);
		crearNuevoMenuCategorias(gallery);
		crearFiltroCategorias(gallery);
			
		}, 500);

		
  }); 


  var categoriasFiltro = document.getElementById("categoriasFiltro");
  categoriasFiltro.addEventListener('change',
			function(){
				
				//Se obtiene el valor de la URL desde el navegador
				var actual = window.location+'';
				//Se realiza la división de la URL
				var split = actual.split("#");
				//Se obtiene el ultimo valor de la URL

				var final = split[1].replace(/%20/g, " ")

				var arrayCategoriasFiltro;

				if(final=="Portrait"){
					arrayCategoriasFiltro = gallery.getPortraits();
				}else if(final=="Landscape"){
					arrayCategoriasFiltro = gallery.getLandscapes();
				}

				mostrarCategoriasImagenes(arrayCategoriasFiltro);


  });
  
	
}

function cargarCategorias(gallery){
	var array = gallery.getCategory();

			select = document.getElementById("categorias");
			
			for(var i in array){
				option = document.createElement("option");
		
				option.value = "index.html#"+array[i]._titulo+"-"+array[i]._descripcion;
				option.text = array[i]._titulo+"-"+array[i]._descripcion;
				select.appendChild(option);
			}

}
function cargarAutores(gallery){
	var array =gallery.getAuthors();

			menu = document.getElementById("menu");
			for(var i in array){

				var createA = document.createElement('a');

				var createAText = document.createTextNode(array[i]._nickname+"-"+array[i]._email+"-"+array[i]._avatar);

				createA.setAttribute('href', "#"+array[i]._nickname+"-"+array[i]._email+"-"+array[i]._avatar);
				createA.appendChild(createAText);
				menu.appendChild(createA);
				
			}

}

function mostrarCategoriasImagenes(categoriasImagenes){

	var todo = document.getElementById("todo").childNodes;
	
	if(todo.length>0){
		todo = document.getElementById("todo").innerHTML="";
	}

	
	
	for(var i in categoriasImagenes){

		var todo = document.getElementById("todo");


		var gallery = document.createElement("div");
		gallery.className="gallery";
		gallery.style="margin-top: 0px;"	

		todo.appendChild(gallery)



		var categoriaImagen = document.createElement("P");
		categoriaImagen.innerText = categoriasImagenes[i]._Categoria._titulo;
		gallery.appendChild(categoriaImagen);

		  
		  

		var tituloImagen = document.createElement("P");
		tituloImagen.innerText = categoriasImagenes[i]._title;
		gallery.appendChild(tituloImagen);

		  

		var tipoImagen = document.createElement("P");
		if(categoriasImagenes[i] instanceof Portrait){
			tipoImagen.innerText = 'Portrait';
		}else if (categoriasImagenes[i] instanceof Landscape){
			tipoImagen.innerText = 'Landscape';
		}
		
		gallery.appendChild(tipoImagen);

		var autorImagen = document.createElement("P");
		autorImagen.innerText = categoriasImagenes[i]._Author;
		gallery.appendChild(autorImagen);


		var divImagen = document.createElement("div");
		divImagen.className="img__wrap";

		var elem = document.createElement("img");
		elem.src = categoriasImagenes[i]._url;
		elem.className="imagen";

		if(tipoImagen.innerHTML=='Portrait'){
			elem.width ="183"
			elem.height="275"
		}




		var descripcionImagen = document.createElement("P");
		descripcionImagen.className="img__description";
		descripcionImagen.id="img__description";
		descripcionImagen.innerText = categoriasImagenes[i]._description;
		elem.addEventListener("mouseenter", function(event){

		});
		
		divImagen.appendChild(elem);
		divImagen.appendChild(descripcionImagen);
		gallery.appendChild(divImagen);
		

		var boton = document.createElement("button");
		boton.innerHTML ='Ver Propiedades'
		

			var url = "datos.html?"+categoriasImagenes[i]._title+"+"
			+categoriasImagenes[i]._description+"+"
			+categoriasImagenes[i]._url+"+"
			+categoriasImagenes[i]._coords+"+"
			+categoriasImagenes[i]._Author+"+"
			+categoriasImagenes[i]._Categoria;


			boton.value = url;

			boton.onclick = function(){


				wh = window.open(this.value);
				aWindows.push(wh);
				
				
			  };

			  var br1 = document.createElement("br");
			  var br2 = document.createElement("br");
			  var br3 = document.createElement("br");
			  var br4 = document.createElement("br");
			  var br5 = document.createElement("br");
			  gallery.appendChild(br1);
			  gallery.appendChild(br2);
			  gallery.appendChild(br3);
			  gallery.appendChild(br4);
			  gallery.appendChild(br5);
			  gallery.appendChild(boton);
		
		

	  
	}

	var categorias = document.getElementById('categorias');
	var autores = document.getElementById('menu');

	
	if(categorias==undefined){
		
	}else{
		categorias.remove();
		autores.remove();
	
	}	

}
	

function mostrarAutoresImagenes(autoresImagenes){
	var todo = document.getElementById("todo").childNodes;
	
	if(todo.length>0){
		todo = document.getElementById("todo").innerHTML="";
	}

	

	for(var i in autoresImagenes){

		
		var todo = document.getElementById("todo");

		var gallery = document.createElement("div");
		gallery.className="gallery";
		gallery.style="margin-top: 0px;"

		todo.appendChild(gallery)


		var categoriaImagen = document.createElement("P");
		categoriaImagen.innerText = autoresImagenes[i]._Author._nickname;
		gallery.appendChild(categoriaImagen);

		  
		  

		var tituloImagen = document.createElement("P");
		tituloImagen.innerText = autoresImagenes[i]._title;
		gallery.appendChild(tituloImagen);

		  

		var tipoImagen = document.createElement("P");
		if(autoresImagenes[i] instanceof Portrait){
			tipoImagen.innerText = 'Portrait';
		}else if (autoresImagenes[i] instanceof Landscape){
			tipoImagen.innerText = 'Landscape';
		}
		
		gallery.appendChild(tipoImagen);

		var autorImagen = document.createElement("P");
		autorImagen.innerText = autoresImagenes[i]._Author;
		gallery.appendChild(autorImagen);


		var divImagen = document.createElement("div");
		divImagen.className="img__wrap";

		var elem = document.createElement("img");
		elem.src = autoresImagenes[i]._url;
		elem.className="imagen";
		var descripcionImagen = document.createElement("P");
		descripcionImagen.className="img__description";
		descripcionImagen.id="img__description";
		descripcionImagen.innerText = autoresImagenes[i]._description;
		elem.addEventListener("mouseenter", function(event){	

		});
		
		divImagen.appendChild(elem);
		divImagen.appendChild(descripcionImagen);
		gallery.appendChild(divImagen);
		

		var boton = document.createElement("button");
		boton.innerHTML ='Ver Propiedades'
		

			var url = "datos.html?"+autoresImagenes[i]._title+"+"
			+autoresImagenes[i]._description+"+"
			+autoresImagenes[i]._url+"+"
			+autoresImagenes[i]._coords+"+"
			+autoresImagenes[i]._Author+"+"
			+autoresImagenes[i]._Categoria;


			boton.value = url;

			boton.onclick = function(){


				wh = window.open(this.value);
				aWindows.push(wh);
				
				
			  };
			  var br1 = document.createElement("br");
			  var br2 = document.createElement("br");
			  var br3 = document.createElement("br");
			  var br4 = document.createElement("br");
			  var br5 = document.createElement("br");
			  gallery.appendChild(br1);
			  gallery.appendChild(br2);
			  gallery.appendChild(br3);
			  gallery.appendChild(br4);
			  gallery.appendChild(br5);
			  gallery.appendChild(boton);

	}
	var categorias = document.getElementById('categorias');
	var autores = document.getElementById('menu');

	categorias.remove();
	autores.remove();
	
	
}

function cierraVentana() {
	for (i=0; i<aWindows.length; i++) {
		aWindows[i].close();
	}
}

function crearNuevoMenuCategorias(gallery){

	var array = gallery.getCategory();

	menu = document.getElementById("menuNuevoCategorias");
	for(var i in array){

		var createA = document.createElement('a');

		var createAText = document.createTextNode(array[i]._titulo+"-"+array[i]._descripcion);

		createA.setAttribute('href', "#"+array[i]._titulo+"-"+array[i]._descripcion);
		createA.appendChild(createAText);
		menu.appendChild(createA);
		
	}
	
	divMenuNuevoCategorias = document.getElementById("menuNuevoCategorias");

	  if(divMenuNuevoCategorias!=undefined){

					
				divMenuNuevoCategorias.addEventListener('click',
				function(){
				
					setTimeout(function () {

				//Se obtiene el valor de la URL desde el navegador
				var actual = window.location+'';
				//Se realiza la división de la URL
				var split = actual.split("#");
				//Se obtiene el ultimo valor de la URL

				var final = split[1].replace(/%20/g, " ")

				var arrayCat = final.split("-");
				let categoriaSelecionada = new Category(arrayCat[0],arrayCat[1]);
				var categoriasImagenes = gallery.getCategoryImages(categoriaSelecionada);

				mostrarCategoriasImagenes(categoriasImagenes);

						
					}, 500);

					
			});

	  }


}


function crearFiltroCategorias(gallery){

			var select = document.getElementById("categoriasFiltro");
			select.style.visibility = 'visible';
		
			for (let index = 0; index < 2; index++) {
				option = document.createElement("option");
			
				if(index==0){

				option.value = "index.html#Portrait";
				option.text = "Portrait";
				select.appendChild(option);
					
				}else if(index==1){
					option.value = "index.html#Landscape";
					option.text =  "Landscape";
					select.appendChild(option);
				}
				
			}	
			
		

}




