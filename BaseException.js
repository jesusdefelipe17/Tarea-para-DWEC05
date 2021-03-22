//Excepción base para ir creando el resto de excepciones
function BaseException() {
}
BaseException.prototype = new Error(); //Herencia del objeto Error.
BaseException.prototype.constructor = BaseException; //Definimos el constructor
//Sobrescribimos el método toString para personalizarlos
BaseException.prototype.toString = function(){
	// note that name and message are properties of Error
	return this.name + ": " + this.message;
};

//Excepciones de validación de parámetros. Reutilizables en todas las clases
function ParameterValidationException() {
	this.name = "ParameterValidationException";
	this.message = "Error: Parameter Validation Exception.";
}
ParameterValidationException.prototype = new BaseException(); //Heredamos de BaseException
ParameterValidationException.prototype.constructor = ParameterValidationException;

//Excepción personalizada para indicar valores vacios.
function EmptyValueException(param) {
	this.name = "EmptyValueException";
	this.message = "Error: El parametro " + param + " no puede estar vacio.";
}
EmptyValueException.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
EmptyValueException.prototype.constructor = EmptyValueException;

//Excepción de valor inválido
function InvalidValueException(param, value) {
	this.name = "InvalidValueException";
	this.message = "Error: el parametro " + param + " tiene un valor invalido (" + param + ": " + value + ")";
}
InvalidValueException.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
InvalidValueException.prototype.constructor = InvalidValueException;


function ItemExistsException() {
	this.name = "ItemExistsException";
	this.message = "Error: El objeto ya existe";
}
ItemExistsException.prototype = new BaseException(); 
ItemExistsException.prototype.constructor = ItemExistsException;

function ItemNotExistException(item) {
	this.name = "ItemNotExistException";
	this.message = "Error: El objeto no existe. " ;
}
ItemNotExistException.prototype = new BaseException(); //Heredamos de StackException
ItemNotExistException.prototype.constructor = ItemNotExistException;
