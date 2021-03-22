function Portrait(titulo, descr, URL, Coords){
	//Llamada al superconstructor. 
	Image.call(this,titulo,descr,URL,Coords);
}
Portrait.prototype = Object.create(Image.prototype); //Definimos la herencia
Portrait.prototype.constructor = Portrait;