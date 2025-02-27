const server  = http.createServer(async(req, res) => {
    if (req.method === 'GET') {
      const content = await  fs.readFile(path.join(basePath, 'index.html')); 
      res.end(content);
    } 
    else if (req.method === 'POST') {
      
      const body = [];
      res.writeHead(200, {'Content-Type':'text/plaine; charset=utf-8'})
    
  
    req.on('data', data => {
      body.push(Buffer.from(data));
    } );
  
    req.on('end', () => {
      console.log('End', body.toString());
      const title = body.toString().split('=')[1].replaceAll('+', ' ');
      addNote(title);
  
      res.end(`Title = ${title}`);
    } );
  
  }});