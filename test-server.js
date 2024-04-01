const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/data') {
    const data = { message: {first: 'Hello!', second: 'im json', third: 'here'}, download: {mass: ['test1', 'test2', 'test3']} };
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(5560, '192.168.0.115',() => {
  console.log('Server is listening on port 5560');
});