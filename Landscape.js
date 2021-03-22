function Landscape(titulo, descr, URL, Coords){

	//Llamada al superconstructor. 
	Image.call(this,titulo,descr,URL,Coords);
}
Landscape.prototype = Object.create(Image.prototype); //Definimos la herencia
Landscape.prototype.constructor = Landscape;