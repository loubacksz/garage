/* 
    require('debug') -> retorna uma função que por sua vez retorna um console.error() estilizado

    ('test:db') -> CONVENÇAO do modulo debug - passar o nome do modulo para a funçao armazenada na variavel
               -> pode ser QUALQUER COISA - pra facilitar a identificação, usar o nome do modulo
               -> nome do modulo + ":" + debbuger - usado como argumento pra função armazenada na variavel
               -> debbuger - variavel declarada no codigo que armazena a funcao

    :db -> o que é isso? -> identificador do debbuger - usado para exibir de forma visualmente facil o console.error()
                         -> ex.: DEBUG=test:* node test.js
                         -> ('test:db') == "no modulo test.js eu executei o debbuger 'db'"
                         -> tem relação com a variavel de ambiente na execução do modulo - qual?
                            -> o valor da env var é usado para executar ou nao o console.error() estilizado
                            -> o modulo verifica se o valor da env var é igual ao passado como argumento
                               pra função armazenada no debbuger, se for, executa o console.error(), se 
                               nao, nao faz nada
*/

const http = require('http');
const express = require('express');

const debug = require('debug')('test:db');

var a = require('debug')('test:a'),
    b = require('debug')('test:b');

const app = express();

console.log(debug)
console.log(a)
console.log(b)

debug('connected to db!'); // exibe no console o que é passado pra ela

const server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      console.error('test')
      debug(req.method + '' + req.url);

});

server.listen(8000);

function work() {
      a('test A');
      setTimeout(work, Math.random() * 1000);
}

work();

function workb() {
      b('test B');
      setTimeout(workb, Math.random() * 2000);
}

workb();

/*
	 DEBUG env var -> deve-se definir uma variavel de ambiente que deve ser chamada 
                          para executar o modulo que está usando debug
                       -> essa variável deve ser declarada como DEBUG
                       -> ex.: DEBUG=test node test.js
                       -> ex.: DEBUG=test:* node test.js
                       -> ex.: DEBUG=test.js node test.js
*/
