#!/usr/bin/env node
// shebang - #! (characters) first line at script file
// used to define wich interpreter the OS should use run this code


/**
 *   RESUMO 
 *      -> esse arquivo é responsável por criar e iniciar o servidor HTTP
 *      -> usa o express (função armazenada em app) para gerenciar as requisições
 *      -> não costuma ter extensão '.js' pois o shebang faz o papel de identificar
 *         o interpretador que deve executar o código
 */ 

const app = require('../app');

const debug = require('debug')('briefing-page:server');
/**
 *    require('debug') 
 *      -> retorna uma função que por sua vez retorna um console.error() estilizado
 *  
 *    ('test:db') 
 *      -> CONVENÇAO do modulo debug - passar o nome do modulo para a funçao armazenada na variavel
 *      -> pode ser QUALQUER COISA - pra facilitar a identificação, usar o nome do modulo
 *      -> nome do modulo + ":" + debbuger - usado como argumento pra função armazenada na variavel
 *      -> debbuger - variavel declarada no codigo que armazena a funcao
 *  
 *    :db 
 *      -> o que é isso? 
 *          -> identificador do debbuger - usado para exibir de forma visualmente facil o console.error()
 *             ex.: DEBUG=test:* node test.js
 *  
 *      -> ('test:db') == "no modulo test.js eu executei o debbuger 'db'"
 *  
 *      -> tem relação com a variavel de ambiente na execução do modulo - qual?
 *          -> o valor da env var é usado para executar ou nao o console.error() estilizado
 *          -> o modulo verifica se o valor da env var é igual ao passado como argumento
 *             pra função armazenada no debbuger, se for, executa o console.error(), se nao, nao faz nada
 *  
 *    DEBUG env var 
 *      -> deve-se definir uma variavel de ambiente que deve ser chamada 
 *         para executar o modulo que está usando debug
 *      -> essa variável deve ser declarada como DEBUG
 *      -> ex.: DEBUG=test node test.js
 *      -> ex.: DEBUG=test:* node test.js
 */ 

const http = require('http');
/**
 *    require('http') 
 *      -> retorna objeto http com metodo 'createServer()'
 *  
 *    createServer() 
 *      -> cria objeto da classe 'Server'
 */ 


const port = normalizePort(process.env.PORT || '3000'); // porta da variavel de ambiente ou 3000
/**
 *  Get port from environment and store in Express.
 */ 

app.set('port', port); // retorna aplicação express -> app
                       // cria propriedade 'port' dentro da propriedade locals.settings e armazena valor passado

const server = http.createServer(app);
/*
    http.createServer(app) -> retorna objeto da classe 'Server'
    
    app -> é uma funcao adicionada ao evento 'request'
        -> por hora, vou assumir que isso quer dizer que
           a funcao é executada sempre que um evento 'request'
           é disparado
*/

server.listen(port); // servidor começa a 'ouvir' por conexões na porta passada

function normalizePort(val) {
    const port = parseInt(val, 10); // parseInt() -> converte string de numeros em valores numericos
                                    // ex.: parseInt("10") retorna 10 em valor numerico
                                    // segundo parametro - sistema numerico utilizado
    
    if (isNaN(port)){
        // named pipe - oq isso quer dizer?
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false; // o que acontece se chegar aqui?
}

server.on('error', onError); 
/* 
    on() -> metodo 'aguarda' pelo evento 'error' 
            e chama callback 'onError' - chama mesmo? to em duvida
         -> nenhum parametro é passado para funcao onError 
            -> como isso funciona? - passado pelo sistema interno de eventos do node

*/

server.on('listening', onListening); // metodo 'aguarda' pelo evento 'listening' 
                                     // e chama callback 'onListening'

function onError(error) { 
    /* de onde vem o error? -> objeto criado pelo sistema interno de eventos do node
                            -> objeto tem 3 propriedades: syscall, code e message
    */

    if (error.syscall !== 'listen') {
        // error.syscall - OS system call that failed
        throw error;
    }

    const bind = typeof port === 'string' 
        ? 'Pipe ' + port
        : 'Port ' + port
    /*
        ? question mark operator (ternary) -> usado para atribuir valores a uma variavel 
                                              com base em uma condicao

        typeof port === 'string' -> verifica se tipo do valor armazenado na variavel port
                                    é igual a 'string' e retorna true or false
        
        ? 'Pipe ' + port -> se for true valor de bind é 'Pipe (valor armazenado em port)' ex.: 'Pipe 3000'

        ? 'Pipe ' + port -> se for false valor de bind é 'Port (valor armazenado em port)' ex.: 'Pipe 3000'
    
    */

    // handle specific listen errors with friendly messages
    switch (error.code) {
        // error -> objeto criado pelo sistema interno de eventos do node
        //       -> objeto tem 3 propriedades: syscall, code e message

        case 'EACCES':
            console.error(bind + ' requires elavated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}


/**
 *    Event listener for HTTP server "listening" event.
 */ 
function onListening () {
    const addr = server.address();
    const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
    debug('Listening on ' + bind); // chamada da função debug
}
