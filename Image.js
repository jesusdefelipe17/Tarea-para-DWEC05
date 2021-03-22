function Image(title, description,url,coords){

	var _title = title;
	var _description = description;
	var _url = url;
	var _coords = coords;
	var _Author;
	var _Categoria;
	//Propiedades de acceso a los atributos privados getter y setter del titulo
	Object.defineProperty(this, '_title', {
		get:function(){
			return _title;
		},
		set:function(value){
			
			_title = value;
		}		
	});

	//Propiedades de acceso a los atributos privados getter y setter de la descripcion 
	Object.defineProperty(this, '_description', {
		get:function(){
			return _description;
		},
		set:function(value){
			_description = value;
		}		
	});

	//Propiedades de acceso a los atributos privados getter y setter de la descripcion 
	Object.defineProperty(this, '_url', {
		get:function(){
			return _url;
		},
		set:function(value){
			_url = value;
		}		
	});

	//Propiedades de acceso a los atributos privados getter y setter de la descripcion 
	Object.defineProperty(this, '_coords', {
		get:function(){
			return _coords;
		},
		set:function(value){
			_coords = value;
		}		
	});


	//ESTAS DOS ULTIMAS PROPIEDADES SE AÑADEN YA QUE PARA AÑADIR IMAGENES NECESITAMOS UN AUTHOR Y UNA CATEGORIA A DONDE AÑADIRLAS Y
	//DE ESTA MANERA LUEGO SERA MUCHO MAS FACIL PARA HACER LA LLAMADA 

	//imagen._Autor = autor; 
	//imagen._Categoria = categoria;

	//DE ESTA MANERA EN EL GALLERY.JS AL AÑADIR LA IMAGEN SE LLAMAN Y SE AÑADEN


	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, '_Author', {
		get:function(){
			return _Author;
		},
		set:function(value){
			_Author = value;
		}		
	});

	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, '_Categoria', {
		get:function(){
			return _Categoria;
		},
		set:function(value){	
			_Categoria = value;
		}		
	});

	//To String para que nos muestre los datos
	this.toString = function(){
		return "Title: "+_title+"\nDescription: "+_description+"\nUrl: "+_url+"\nCoords: "+_coords+
		"\n\nCategoria: "+_Categoria+"\nAuthor: "+_Author;
	}

}
Image.prototype = {}; 
Image.prototype.constructor = Image;