var config = require('config');


var app ={
	root:__dirname,
	config : config
};

app.server = require ('./drivers/server')(app);
app.routes = require('./drivers/routes')(app);
app.socket = require('./drivers/socket')(app);
app.messenger = require('./services/messenger')(app);
app.server.create();

console.log(app.config);

/*
var io = require('socket.io')(http);


	app.get('/',function(req,res){
		res.sendFile(__dirname+'/chat.html');
	});

	io.on('connection',function(socket){
		console.log('a user connected');

		socket.on('send',function(msg){
			console.log(msg);
			io.emit('receive',msg);
		});

		socket.on('disconnect',function(){
			console.log('user is disconnected');
		});
	});

	http.listen(1337,function(){
		console.log('listening on *:1337 / 3000');
	});*/