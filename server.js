// importando a extensão Http para poder se comunicar com nosso servidor
import http from "http";

// Porta geral para ser usada em nosso servidor
const PORT = 3000;

// para movimentar entre nossas pagina utilizamos rotas.
const rotas = {
    "/": "Curso de Node.js", 
    "/livros" : "Entrei na rota livros",
    "/autores" : "Entrei na rota autores"
}

// criando nossa função para conversar com nosso servidor
// quando criamos devemos por padrão criar as variaveis req ( requisição ) e res ( resposta ).
// toda vez que vem uma informação na variavel req é retornada um objeto.
const server = http.createServer((req, res) => {
    // toda comunicação HTTP, tem um cabeçario e essa comunicação é utilizada para saber o status do nosso servidor.
    // Por isso teremos que criar nosso cabeçario.
    res.writeHead(200, { "content-type": "text/plan" })
    res.end(rotas[req.url]);
})

server.listen(PORT, () => {
    console.log("Servidor escutando!");
})