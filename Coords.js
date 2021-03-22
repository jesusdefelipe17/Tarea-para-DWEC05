function Coords(latitud, longitug){
	//Atributos
	var _latitud = latitud;
	var _longitug = longitug;
	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, '_latitud', {
		get:function(){
			return _latitud;
		},
		set:function(value){
			
			_latitud = value;
		}		
	});

	//Propiedades de acceso a los atributos privados
	Object.defineProperty(this, '_longitug', {
		get:function(){
			return _longitug;
		},
		set:function(value){
		
			_longitug = value;
		}		
	});

	//Muestra la onformacion del objeto
	this.toString = function(){
		return "Latitud="+_latitud+", longitud = "+_longitug;
	}

}
Coords.prototype = {}; 
Coords.prototype.constructor = Coords;