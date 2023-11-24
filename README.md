# API Rest com Express e MongoDB
#### Portas 
Além da URL, requisições HTTP também precisam de portas específicas para que a comunicação ocorra com sucesso.

O que são portas? Também chamadas de portas lógicas, elas são gerenciadas pelo sistema operacional e agem como pontos onde conexões de rede acontecem. Por exemplo, a comunicação com a API que estamos desenvolvendo se dá através da porta 3000.

O número padrão de portas é 65.535. As portas são identificadas por números padronizados e muitas portas estão associadas a processos específicos, por exemplo:

- 5432 é usada para conexão com serviços do banco de dados PostgreSQL.
- 3306/3307 são usadas em conexões com o banco MySQL.
- 587 utilizada para conexões SMTP (Simple Mail Transfer Protocol, o protocolo de envio e recebimento de e-mails).
- 80 é a porta padrão de conexões HTTP, usada pelos navegadores.
Algumas portas são de “uso comum” e podem ser utilizadas por qualquer serviço, como a 3000 que usamos no curso.

Portas são assunto importante quando falamos de protocolos de comunicação. Não deixe de conferir nosso curso de HTTP para entender mais.

#### Entendendo melhor como funciona nossa Package.json
- name: é onde se define o nome pelo qual seu módulo será chamado.
version: versão atual do módulo. O NPM utiliza o chamado versionamento semântico (SemVer). Você pode saber mais sobre versionamento e como ele é utilizado neste artigo.
description: define o que será este módulo. É ideal que seja uma descrição curta e clara sobre o objetivo principal.
- main: define o ponto de entrada da aplicação.
scripts: essa sessão tem alguns scripts pré-definidos, mas você também pode definir os seus personalizados. Leia sobre scripts no npm Docs ter mais informações.
- keywords: é um array de palavras-chave sobre o projeto.
- author: são dados de autoria, podendo conter nome, e-mail, site etc.
- license: é a licença escolhida para o projeto. Existem diversas opções de licenças, caso tenha curiosidade você pode conferir a lista completa de licenças no site do SPDX.
dependencies: define a lista de pacotes necessários para executar seu projeto num ambiente de produção.
- devDependencies: define a lista de pacotes necessários para executar o projeto em um ambiente de desenvolvimento e testes. Existem outras configurações que podem existir nesse arquivo, como repositório do Git, homepage, peerDependencies, entre outras que podem ser visualizadas na documentação oficial do NPM.

### Nodemon

Para não precisar ficar rodando o nosso servidor, podemos usar uma extensão chamado nodemon, ela executa nosso servidor e deixa ele rodando e fica procurando as modificações.
Mas algumas vezes o nodemon não é instalado corretamente. Com isso utilizamos algumas formas.

````
npm install -g nodemon

npm install --save-dev nodemon

npm config get prefix

set PATH=%PATH%;C:\Users\"Aqui seu usuário"\AppData\Roaming\npm;
```` 

Mas mesmo com esses comandos pode acontecer de não instalar corretamente e faltar colocar no package.json, com isso vai ter que colocar na mão. 

````
"dependencies": {
    "nodemon": "^3.0.1" 
}

````

No caso estamos usando o nodemon 3.0.1, mas se quiser podemos utilizar qualquer outra basta colocar nodemon após colocar @ com o número da versão.
Para utilizar o nodemon, devemos adicionar o um script no package.js, no caso utilizamos o Dev, mas esse nome é para executar algum script então pode ser qualquer nome.


