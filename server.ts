import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req: http.IncomingMessage, res: http.ServerResponse) {
  try {
    if(req.url === '/users') {
      if(req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ name: 'John Doe' }));
      }
      else if (req.method === 'POST') {
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'User created' }));
      }
      else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
      }
    }
  }
  catch (error) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Internal Server Error' }));
    console.error(error);
  }
  finally {
    res.end();
    console.log('Request processed');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
