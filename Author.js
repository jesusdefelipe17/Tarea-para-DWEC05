function Author(nickname, email, avatar){

	var _nickname = nickname;
	var _email = email;
	var _avatar = avatar;

	//Propiedades de acceso a los atributos privados getter y setter de nickname
	Object.defineProperty(this, '_nickname', {
		get:function(){
			return _nickname;
		},
		set:function(value){
			
			_nickname = value;
		}		
	});

	//Propiedades de acceso a los atributos privados getter y setter del email 
	Object.defineProperty(this, '_email', {
		get:function(){
			return _email;
		},
		set:function(value){
			_email = value;
		}		
	});

	//Propiedades de acceso a los atributos privados getter y setter de avatar 
	Object.defineProperty(this, '_avatar', {
		get:function(){
			return _avatar;
		},
		set:function(value){
			_avatar = value;
		}		
	});

	//To String para que nos muestre los datos de las categorias
	this.toString = function(){
		return "\nNickName: "+_nickname+"\nEmail: "+_email+"\nAvatar: "+_avatar+"\n";
	}

}
Author.prototype = {}; 
Author.prototype.constructor = Author;