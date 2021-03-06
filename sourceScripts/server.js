import  express from 'express'
import path from 'path';
import webpack from 'webpack'
import config from '../webpack.config.dev'

const compiler = webpack(config)
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}))


app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../src/index.html"))
})


app.get("/users", function(req, res){
	res.json([
    {"id": 19139866 ,"firstName": "Angus",	"lastName": "Lakin", "email": "Ally_Zulauf55@yahoo.com"},
    {"id": 12389497 ,"firstName": "Paris","lastName": "Rutherford","email": "Scottie.Toy@gmail.com" },
    {"id": 2787778 ,"firstName": "Miles","lastName": "Bogan","email": "Jannie.Reynolds19@yahoo.com"},
    {"id": 65088154 ,"firstName": "Madie","lastName": "Williamson","email": "Alexa39@hotmail.com"},
    {"id": 53566879 ,"firstName": "Claudia","lastName": "Rice","email": "Bianka_Roob@gmail.com"}
  ])
})


app.listen(8081,'127.0.0.1', function(err){
	if(err){
		console.log(err)
	}
	console.log("server is running on port")
})

/*test*/