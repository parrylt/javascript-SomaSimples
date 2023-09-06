// cmt
/*


*/

var nome = "Marina Coral"; //String
var idade = 29; //int
var altura = 1.68; //float ou double
var filhos = false; //Boolean

/* //alert ("Nome: " + nome);
//document.write("Idade: " + idade); */


//prompt lê somente texto, é necessario converter para a variavel desejada
var n1 = parseFloat(prompt("Digite um valor: ")); 

//parse converte para outra tipo de variavel 
var n2 = parseFloat(prompt("Digite outro valor: "));

var total = n1+n2;

document.write("Total: " + total);

if (total >= 20 || total==30)
{
	document.write("<br>" + "Valor total é maior ou igual à 20!");
}

else
{
	document.write("<br>" + "Valor total é menor ou igual à 20!");
}