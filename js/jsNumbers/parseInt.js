
/*
* parseInt(string, radix) -> transforma variáveis do tipo string em variáveis do tipo num,
* 				             se aplicável
* string -> número com tipo string | ex.: "10"
* radix -> sistema decimal usado na converção
*
*/

function parseIntTest(stringNumber) {

	// atribuir um valor com base em uma condição
	const valor = typeof stringNumber === 'string'
		? stringNumber
		: parseInt(stringNumber, 10);

	// exibe tipo da variável 'valor'
	if (isNaN(valor)) {
		console.log('valor é uma string!');
	} else {
		console.log('valor é um número!')
	}
}
