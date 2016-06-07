module.exports =function(app){
	return{
		send: function(msg){
			app.io.emit('receive',msg);
		}
	}
}