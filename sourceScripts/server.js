import  express from 'express'
import path from 'path';
import webpack from 'webpack'
import config from '../webpack.config.dev'

const compiler = webpack(config)
const app = express();
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.path
}))

/*Until here the files is being served under statically to clientt. As you can see numeral isnt available for browser to import*/

/*we can budle that with webpack middleware instead os static middleware*/

app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../src/index.html"))
})



app.listen(process.env.PORT, process.env.IP, function(err){
	if(err){
		console.log(err)
	}
	console.log("server is running on port 8080")
})
