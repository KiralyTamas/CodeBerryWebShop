import { createServer } from 'http';

function onRequest(request,response){
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('Hello World');
  response.end();
}

createServer(onRequest).listen(3000);
console.log('The server is running...');