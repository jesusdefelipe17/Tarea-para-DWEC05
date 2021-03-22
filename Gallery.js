function Gallery(titulo) {

	
	if (titulo === undefined|| titulo=="") {
		throw new EmptyValueException("titulo", titulo);
	}

	var _titulo = titulo;
	var imagenes = []; //Array de iamagenes que despues se llenaran de objetos
	var categorias = []
	var autores = []
	var categoriaDefecto = Gallery.CAT_DEFECTO;
	var autorDefecto = Gallery.AUT_DEFECTO;


	//Propiedades de acceso a los atributos privados getter y setter del titulo
	Object.defineProperty(this, '_titulo', {
		get: function () {
			return _titulo;
		},
		set: function (value) {
			value = typeof value !== 'undefined' ? value : 0;
			if (value === 0) throw new InvalidValueException("titulo", value);
			_titulo = value;
		}
	});



	//Getter de categoria donde nos devuelve lo que hay en el array de categorias
	this.getCategory = function () {


		return categorias;

	}
	//Getter de Authors donde nos devuelve lo que hay en el array de Authors
	this.getAuthors = function () {

		return autores;

	}

	this.addCategory = function (categoria) { //Creamos el metodo para añadir una categoria

		//Comprobamos si la categoria es nula o no y en el caso de que sea salta un error creado propio
	
		if(categoria===undefined){
			throw new EmptyValueException("categoria");
		}

		//Busca la categoria en nuestro array
		var pos = categorias.indexOf(categoria);

		//Si existe esa categoria lanzamos un error
		if (pos != -1) {
			throw new ItemExistsException();
		} else {
			//en el caso de que esa categoria no exista, añadimos la categoria
			categorias.push(categoria);

		}

		return categorias.length;//Devolvemos el numero de elementos del array categoria

	}

	this.addAuthor = function (author) { //Creamos el metodo para añadir un author

		if (author == undefined) { //Como el author no puede ser nulo lanzamos un error
			throw new EmptyValueException(author);
		} else {


			//añadimos el author a la lista de authores
			autores.push(author);
		}


		return autores.length;//Devolvemos el numero de elementos del array 

	}

	this.removeCategory = function (categoria) {

		//Busca la categoria en nuestro array
		var pos = categorias.indexOf(categoria);


		//Si no existe esa categoria lanzamos un error para que no pueda eliminarla del array
		if (pos == -1) {
			throw new ItemNotExistException();
		} else {
			//si existe esta categoria la borramos del array
			categorias.splice(pos, 1);

		}

		return categorias.length;//Devolvemos el numero de elementos del array categoria

	}

	this.addImage = function (imagen, categoria, author) {

		//Comprobamos si la imagen es nula o no y en el caso de que sea salta un error creado propio

		if (imagen === undefined || imagen==="" ) {
			throw new EmptyValueException(imagen);
		} else {

			if (categoria === undefined) {//Si vemos que es nula ponemos por defecto
				categoria = categoriaDefecto;
			}
			if (author === undefined) {//Si vemos que es nula ponemos por defecto
				author = autorDefecto;
			}

			//Modifico el autor y categoria de la imagen
			imagen._Author = author;
			imagen._Categoria = categoria;
			//Añado la imagen
			imagenes.push(imagen);


			return imagenes.length;//Devolvemos cuantas imagenes hay en el array



		}
	}
	this.getImages = function () {//Mostramos las imagenes
		console.log("Mostramos resultados para ver si se añadio bien\n")
		console.log(imagenes.toString())
	}

	this.removeImage = function (image) {

		//Busca la Imagen en nuestro array
		var pos = imagenes.indexOf(image);


		//Si no existe esa imagen lanzamos un error para que no pueda eliminarla del array
		if (pos == -1) {
			throw new ItemNotExistException();
		} else {
			//si existe esta imagen la borramos del array
			imagenes.splice(pos, 1);

		}

		return imagenes.length;//Devolvemos el numero de elementos del array imagen

	}

	this.getCategoryImages = function (categoria) {
		//Comprobamos si la categoria es nula o no y en el caso de que sea salta un error creado propio
		
		if (categoria === undefined){

			throw new EmptyValueException(categoria);
		} 
		
		

		//Para ver las imagenes que tenemos de una determinada categoria hay que buscar en el array de imagenes
		//Para que nuestra categoria que queremos buscar sea igual a la que haya en el objeto de imagenes ya que dentro estara su categoria

		//Busca la categoria en nuestro array
		var pos = categorias.findIndex(data => data._titulo === categoria._titulo);
	

		//Si no existe esa categoria lanzamos un error para que no pueda eliminarla del array
		if (pos == -1) {
			throw new ItemNotExistException();
		} else {

			//array auxiliar para poder guardar las imagenes que encontramos por categoria
			img_aux = [];

			//Recorrido de imagenes
			for (var i = 0; i < imagenes.length; i++) {


				if (imagenes[i]._Categoria._titulo === categoria._titulo) { //Busco las categorias iguales
					img_aux.push(imagenes[i]);//añadimos al array auxiliar las imagenes 
				}

			}

		}

		return img_aux; //Devolemos las imagenes que tienen la categoria que buscamos

	}

	this.removeAuthor = function (author) { //Creamos el metodo para borrar un author

		//Busca el author en nuestro array
		var pos = autores.indexOf(author);

		//Si no existe ese author lanzamos un error
		if (pos == -1) {
			throw new ItemNotExistException();
		} else {
			//en el caso de que ese author exista, lo borramos
			autores.splice(pos, 1);

		}

		return autores.length;//Devolvemos el numero de elementos del array authores

	}

	this.getAuthorImages = function (author) { //Creamos el metodo para añadir una categoria

		if (author == undefined) {//Si el author es nulo lanzamos error
			throw new EmptyValueException(author);
		}
		//Busca el author en nuestro array
		var pos = autores.findIndex(data => data._nickname === author._nickname && data._email === author._email);

		//Si no existe ese author lanzamos un error
		if (pos == -1) {
			throw new ItemNotExistException();
		} else {
			//array auxiliar para poder guardar las imagenes que encontramos por autores
			img_aux = [];

			//Recorrido de imagenes
			for (var i = 0; i < imagenes.length; i++) {


				if (imagenes[i]._Author._nickname === author._nickname && imagenes[i]._Author._email === author._email) { //Busco los autores iguales
					img_aux.push(imagenes[i]);//añadimos al array auxiliar las imagenes 
				}

			}

		}

		return img_aux;
	}
	//Obtengo las imagenes del tipo Portrait
	this.getPortraits = function () {

		img_port = [];

		//Recorro las imagenes
		for (var i = 0; i < imagenes.length; i++) {
			if (imagenes[i] instanceof Portrait) { //indica si es del tipo Portrait
				img_port.push(imagenes[i]);//añade la imagen
			}

		}

		return img_port;
	}

	//Obtengo las imagenes del tipo Landscape
	this.getLandscapes = function () {
		img_land = [];

		//Recorro las imagenes
		for (var i = 0; i < imagenes.length; i++) {
			if (imagenes[i] instanceof Landscape) {  //indica si es del tipo Landscape
				img_land.push(imagenes[i]);//añade la imagen
			}

		}

		return img_land;
	}



	//To String para que nos muestre los datos de las categorias
	this.toString = function () {
		return "titulo: " + _titulo + ", descripcion = " + _descripcion;
	}

}
Gallery.prototype = {};
Gallery.prototype.constructor = Gallery;

//Categoria por defecto
Object.defineProperty(Gallery, 'CAT_DEFECTO', {
	value: new Category("Categoria defecto", "Esta es la prueba de categoria defecto"),
	writable: false,
	enumerable: false,
	configurable: false
});

//Autor por defecto
Object.defineProperty(Gallery, 'AUT_DEFECTO', {
	value: new Author("autor defecto","autorDefecto@alumno.com","avatarDefecto"),
	writable: false,
	enumerable: false,
	configurable: false
});