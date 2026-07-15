// funções que retornam outras funções podem ser chamadas
// com os parametros de ambas ao mesmo tempo. ex: funcao(parametro func1)(parametro func2)

function func1(x){
	return function func2(y) {
		return x * y
	}
} 

let resultado = func1(2)(3); // 2 é o parametro da func1 e 3 é o parametro da func2
console.log(resultado);
