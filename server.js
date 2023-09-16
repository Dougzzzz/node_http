import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('Bem vindo a pagina incial');
        createLog('home');
    }
    if(req.url === '/sobre'){
        res.writeHead(200, {'Content-Type':'text/plain ; charset=utf-8'});
        res.end('Esta pagina é sobre nós');
        createLog('sobre');
    }
})

async function createLog(page){
    try {
        const date = new Date().toISOString();
        const logEntry = `Acesso em ${page} na data: ${date}\n`;
        await fs.promises.writeFile('log.txt', logEntry, { flag: 'a' });
        console.log('Log registrado')
        
    } catch (error) {
        console.error('Erro ao registrar log', error)
    }
    
}

server.listen(3000, () => {console.log(`Servidor rodadndo na porta 3000`)})