//HTTP module to set up a server

const http = require('http');

const server = http.createServer((req,res) => {       //callback function, parameters are objects

if(req.url ==="/"){
    res.end("Welcome");
}
else if(req.url ==="/about"){
    res.end("about");
}
else{res.end(`
<p> Oops </p>
<a href = "/">Back home</a>  
`);}

})

server.listen(3000);
