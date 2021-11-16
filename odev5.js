const http= require('http');

const server =http.createServer((req,res)=>{
    
    const url=req.url;
    if (url==='/') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h2>index sayfasina hosgeldiniz</h2>");
    }
    else if (url==='/hakkimda') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("hakkimda sayfasina hosgeldiniz");
    }
    else if (url==='/iletisim') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('iletisim sayfasina hosgeldiniz');
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write("404 hata");
    }
 
    res.end();
});

const port=5000;

server.listen(port,()=>{
    console.log(`sunucu port ${port} de başlatıldı`);
});