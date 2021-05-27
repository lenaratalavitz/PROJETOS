/**
 * Mapeamento dos inputs de interação com o usuário,
 * que estão em index.html.
 */


var globalInputA = document.querySelector("#inputA");
var globalInputB = document.querySelector("#inputB"); //aqui está sendo declarado a variavel globalInputB, usando o querySelector para buscar pelo elemento com o id "inputB" correspondente ao input do numero B

globalInputA.addEventListener("input", handleChangeInputA);
globalInputB.addEventListener("input", handleChangeInputB);    //o addEventListener fica "escutando" o que acontece no elemento input,
                                                               // se o input tiver alguma alteração, exemplo: inserção de texto, ou apagar algum caracter,
                                                               // ele aciona a função handleChangeInputB


function handleChangeInputA() {
  //quando os input de a ou b, sofrem alteração, esta função handleChangeInputA é chamada
  // neste exemplo a handleChangeInputA é chamada quando o input a sofre alteração
  // mas ambos handleChangeInputA ou handleChangeInputB são os gatilhoes para chamar a função calculate que fará as contas da calculadora

  calculate();
}

function handleChangeInputB() {
  // se é o input b que é alterado, é função a handleChangeInputB que é chamada
  calculate();
}


function calculate() {
//ao ser chamada a função calculate, ela começa definindo as variaveis do a e do b, e já transforma elas em tipo número

 // var a = globalInputA.value;          //sem o Number() pegava o valor do input como texto
var a = Number(globalInputA.value);     //com o Number(), tranforma o valor do input em número, e assim não precisa tratar com Number() lá embaixo nos calculos das operações

var b = Number(globalInputB.value);







//faz um teste para validar se a e b são números
//caso sejam diferente de número, exibe um alerta vermelho no span ao lado do input

var alertA = document.getElementById('alertA')   // mapeia o span com id alertA

//o isNaN serve para verifica se é diferente de número
//neste if, se for numero, vai exibir verde
// se for diferente de número, cai no else e exibe alerta vermelho
// neste caso o isNaN serve para verificar se é um "Não Número", como tem o ! antes dele, faz com que o teste seja o inverso, ou seja,
// nesse exemplo  !isNaN(a)  serve para identificar se é um número
 // if ( ( !isNaN(a) && a != '' ) || ( a == 0 ) ) {
 // if (  typeof a == 'number' ) {
 // if ( ( !isNaN(globalInputA) && globalInputA != '' ) || ( globalInputA == 0 ) ) {
 // if ( !isNaN(a) && a != '' ) {
 // if ( !isNaN(globalInputA) && globalInputA != '' ) {

// if( a.match(/^-?\d+$/) || a.match(/^\d+\.\d+$/) ){
if (a >= 0 || a <= 0 ){
  alertA.innerHTML = 'Número válido';
  alertA.setAttribute('class','sucesso');
}else{ //
  alertA.innerHTML = 'Insira um número válido';  //vai injetar o texto dentro da tag span que tem o id alertA que foi mapeado na var alertA anteriormente
  alertA.setAttribute('class','erro');    //aqui altera a class da tag span para erro, para aplicar o css dentro do style.css
}//


  var alertB = document.getElementById('alertB');

  // if ( ( !isNaN(Number(globalInputB)) && Number(globalInputB) != '' ) ||  Number(globalInputB) == 0  ) {
  // if (  !isNaN(b)   ) {
  // if (  typeof b == 'number' ) {
  // if( b.match(/^-?\d+$/) || b.match(/^\d+\.\d+$/) ){
    if (b >= 0 || b <= 0 ){
   // if( isNaN(b) || b == '' ){
   // if ( ( !isNaN(globalInputBa) && globalInputB != '' ) || ( globalInputB == 0 ) ) {
    alertB.innerHTML = 'Número válido';
    alertB.setAttribute('class','sucesso');
   }else{
  alertB.innerHTML = 'Insira um número válido';
  alertB.setAttribute('class','erro');
  }



// if ( ( !isNaN(a) && !isNaN(b) && a != '' && b != '' ) || ( a == 0 || b == 0 ) ) {
// if ( typeof b != "string" &&  typeof a != "string"){
if ( (a >= 0 || a <= 0 ) && (b >= 0 || b <= 0 ) ){

    var soma = document.getElementById("soma"); // aqui o js identifica o elemento do html que possui o id="soma", e como no html os ids devem ser únicos,
                                                // o único id com valor "soma" é um input, onde abaixo terá seu "value" alterado para soma do "a+b"

    // soma.setAttribute('value',Number(a) + Number(b));
    // soma.setAttribute('value',a);
// var c = 10;
    soma.setAttribute('value',a + b );        //como as variaveis de a e b já foram transformadas durante a declaração, aqui é só aplicar a soma
          // setAttribute serve para definir um atributo para um elemento do html
          // aqui ele tá definindo o valor do   "value" do input do id "soma" para o valor do "a+b"


    var subtracaoAB = document.getElementById("subtracaoAB");
    // subtracaoAB.setAttribute('value',Number(a) - Number(b)); //retirado o Number(), pois a variavel já foi tratada na declaração de "a" e "b"
    subtracaoAB.setAttribute('value',a - b);

    var subtracaoBA = document.getElementById("subtracaoBA");
    // subtracaoBA.setAttribute('value',Number(b) - Number(a));
    subtracaoBA.setAttribute('value',b - a);

    var multiplicacao = document.getElementById("multiplicacao");
    // multiplicacao.setAttribute('value',Number(a) * Number(b));
    multiplicacao.setAttribute('value',a * b);



    var divisaoAB = document.getElementById("divisaoAB");
    if ( b == 0 ){                                       //aqui faz o tratamento com if para saber se valor do divisor é 0
    operacao_divisaoAB = 'Não é possível divisão por 0';
    }
    else{                                               // se o divisor for diferente de 0, faz a operação normalmente
      operacao_divisaoAB = a / b;
    }
    divisaoAB.setAttribute('value',operacao_divisaoAB);


    var divisaoBA = document.getElementById("divisaoBA");
    if ( a == 0 ){
    operacao_divisaoBA = 'Não é possível divisão por 0';
    }
    else{
      // operacao_divisaoBA = Number(b) / Number(a);
      operacao_divisaoBA = b / a;
    }
    divisaoBA.setAttribute('value',operacao_divisaoBA);




    var quadradoA = document.getElementById("quadradoA");      // Math é a função do proprio js para calculos matematicos
    quadradoA.setAttribute('value',Math.pow(a, 2));            // para calcular a potencia usa o pow, o primeiro parametro é base do numero, e o segundo é potencia, neste exemplo a potencia é 2, pois é que o trabalho pediu
    // quadradoA.setAttribute('value',Math.sqrt(Number(a)));   // << o sqrt faz a raiz quadrada

    var quadradoB = document.getElementById("quadradoB");
    quadradoB.setAttribute('value',Math.pow(b, 2));


    var fatorialA = document.getElementById("fatorialA");
    fatorialA.setAttribute('value',fatorial(a));

    var fatorialB = document.getElementById("fatorialB");
    fatorialB.setAttribute('value',fatorial(b));


    var divisoresA = document.getElementById("divisoresA");
    // divisoresB.setAttribute('value',b % 2);
    divisoresA.setAttribute('value',divisores_inteiros(a));


    var divisoresB = document.getElementById("divisoresB");
    // divisoresB.setAttribute('value',b % 2);
    divisoresB.setAttribute('value',divisores_inteiros(b));





  }



}


function divisores_inteiros(numero_para_calular){
  var divisores = [];
  var counter = 1;

  if ( numero_para_calular < 0 ){
    numero_para_calular = numero_para_calular * (-1);
  }

  while ( counter <= numero_para_calular){

    if ( parseInt(numero_para_calular % counter) == 0 ){
      divisores.push(counter)
    }

    counter++;

  }
var comp_list_divisores = divisores.length;

resultado_final = '('+comp_list_divisores+')  '+divisores;

return resultado_final;

}



function fatorial(numero_para_calular){

  //obs.: https://pt.wikipedia.org/wiki/Fatorial;
  //fatorial de um número natural n, representado por n!, é o produto de todos os inteiros positivos menores ou iguais a n;
  // o numero tem que ser inteiro e positivo;
  // não pode ser fração
  // não existe fatorial de numero negativo;
  // o fatorial de zero é igual a 1;

  //exemplo usado para criar a função do fatorial: https://www.javascriptprogressivo.net/2018/12/Calculo-Fatorial-WHILE-FOR-Lacos-JS.html

  if ( numero_para_calular >= 0  && Number.isInteger(numero_para_calular) ) {
  //aqui trata para saber se é positivo          e o isInteger testa para saber se é um inteiro
  //                           o && é o equivalente a condição AND

    if ( numero_para_calular <= 21 ){ //aqui faz o tratamento em caso de número maior que 21, vai pro else para aviso "muito grande"

          var resultado = 1;     //se a entratada for ZERO, o resultado vai ser 1,
                                // pois o zero não vai passar no teste do if abaixo do ">0"
          if ( numero_para_calular > 0) {
                                // se for maior que zero, vai fazer o loop do while incrementando a multiplicação do resultado em cima do valor do count
              var count = 1;    // define um contador inicial=1
              while ( count <=  numero_para_calular ) {
                resultado *= count;      // a cada loop, multiplica o resultado anterior pelo count atual. Lembra que no primeiro o loop o resultado tem valor 1, que foi definido no antes do if(>0)
                count++;                 //a cada loop incrementa em +1, até igualar ao numero_para_calular
                //quando o count superar o valor do numero_para_calular, sai do while e envia o resultado
              }
          }
      }
      else{
        var resultado = 'Número muito grande';
      }

  }
  else {
    var resultado = 'deve ser um inteiro positivo';
  }


  return resultado;  //depois de calcular tudo a função retorna o valor do resultado
}
