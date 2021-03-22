function Category(titulo, descr = ""){

	titulo = typeof titulo !== 'undefined' ? titulo : 0; //Como el titulo no puede ser vacio o 0 ponemos una excepcion 
	if (titulo === 0) throw new InvalidValueException("titulo",titulo);	

	var _titulo = titulo;
	var _descripcion = descr;

	//Propiedades de acceso a los atributos privados getter y setter del titulo
	Object.defineProperty(this, '_titulo', {
		get:function(){
			return _titulo;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : 0;
			if (value === 0) throw new InvalidValueException("titulo",value);		
			_titulo = value;
		}		
	});

	//Propiedades de acceso a los atributos privados getter y setter de la descripcion 
	Object.defineProperty(this, '_descripcion', {
		get:function(){
			return _descripcion;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : 0;
			if (value === 0) throw new InvalidValueException("descripcion",value);		
			_descripcion = value;
		}		
	});

	//To String para que nos muestre los datos de las categorias
	this.toString = function(){
		return "\ntitulo: "+_titulo+"\ndescripcion: "+_descripcion+"\n";
	}

}
Category.prototype = {}; 
Category.prototype.constructor = Category;