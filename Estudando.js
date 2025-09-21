//Operadores aritiméticos
//Todos os comandos são executados sequencialmente, linha a linha
// o símbolo + serve tanto para somar quanto para concatenar informações

let idade = 30;
console.log("O valor da idade é: " + idade)

idade = 30 + 6
console.log("Operação de adição " +idade)

idade = 30 -10
console.log("Operação de subtração " +idade)

//Fazendo operações diretamente com as variáveis

let codigoDoProduto  = 1023
let codigoExato = codigoDoProduto - 1000
console.log(codigoExato)

//Outro exemplo. subtraindo uma variável pela outra

let primeiroNumero = 1023
let segundoNumero = 23
console.log(primeiroNumero - segundoNumero)

//subtraindo diretamente os números.

console.log(1023 - 23)

//Operação de multiplicação

let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log(valorComTaxa)

let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
let produto2 = 4 * 12
console.log("Resultado da multiplicação é " + produto)
console.log("Resultado da multiplacação subtraindo diretamente os números e não as variáves é " +produto2)

//Abaixo estou usando a variável multiplicador sem o let. isso é possível porque somente é necessário usar o let na primeira vez que declarar uma variável

multiplicador = 8
produto = multiplicador * multiplicando
console.log("Resultado da multiplicação é " + produto)

//DIVISÃO

let notaMercado = 50
console.log("Operação de divisão :" + notaMercado / 2)

//Guardando o 2 numa variável

let notaMercado2 = 100
let pessoaParaDividir = 2
console.log("O resultado da divisão é: " + notaMercado2 / pessoaParaDividir)

// % Módulo (resto da divisão). O resto é o que sobra
// Quando se quer pegar apenas o resto da divisão utiliza-se o %

let calculo = 10 % 3
console.log(calculo)

let calculo2 = 10 % 3
console.log("Operação de módulo ou resto é: " + calculo2)

// Incremento e decremento
// '++' incremento


let contador = 1
contador = 1 + 1
console.log(contador)

//Maneira mais fácil de fazer o incremento

let contador2=1
contador2++ //incrementei 1
contador2++ //incrementei +1
console.log(contador2)

// '-'  decremento

contador2=2
contador2--
console.log(contador2)

//Operadores de atribuição - Calcular e atribuir
//Quando coloca o sinal matemático antes da atribuição. eu falo que o preço soma com o valor atribuído.

let preco = 10
preco += 5
console.log(preco)

let preco2 = 20
preco2 -=11
console.log(preco2)

//Pode-se fazer a mesma coisa com multiplicação *= , divisdão e atribuição /= , e módulo e atribuição %=

//Expressões matemáticas
//Delimitar entre parenteres, o que se quer priorizar. no exemplo abaixo a prioridade foi a multiplicação e dpois a soma. 

let resultado = 2 * 5 +5
console.log(resultado)

//Priorizando a soma primeiro

let resultado2 = 2 * (5 + 5)
console.log(resultado2)

let resultado3 = 2 * ((5 + 5) - 10)
console.log(resultado3)

//OPERADORES DE COMPARAÇÃO
// == igual
// === se eu usar 3 iguais ele compara o valor e o formato do conteúdo. Exemplo

let numero = "1"
console.log(numero == "1")
console.log(numero == 1)
// se eu uso com "" ou sem aspas e 2 iguas == não compara o formato. 
console.log(numero === 1) //nesse caso o resultado é false, porque a variável numero está como texto 1 e o console.log está número. portanto é false

//A MANEIRA MAIS SEGURA NO JAVASCRIPT PARA COMPARAR IGUAL É ===
// = é atribuição
// == é para comparar o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente

//DIFERENTE

let marca = "Apple"
console.log(marca !== "Apple")

let marca1 = "Apple"
let resultado4 = marca1 !== "Samsung"
console.log(resultado4)

//guardar o valor em uma variável de resultado TRUE?FALSE

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuário pode embarcar ? " + ehCPFBloqueado)

//

//guardar o valor em uma variável de resultado TRUE?FALSE

let CPFPermitido = "222.555.333-01"
let CPFDoUsuario = "222.555.333-02"

let ehBloqueado = CPFDoUsuario !== CPFPermitido

console.log(" É um usuário invalido ? " + ehBloqueado)

//Sinais de comparação

let idadeMinima = 18
let idadeUsuário = 17
console.log(idadeUsuário > idadeMinima)

// OU Posso armazer o resultado em uma variável
let idadePermitidaValida = idadeUsuário > idadeMinima
console.log(idadePermitidaValida)

// maior ou = >=

let idadeMinima = 18
let idadeUsuário = 18

let idadePermitidaValida = idadeUsuário >= idadeMinima
console.log(idadePermitidaValida)

//Sinais de comparação: Menor <

let idadeCorte = 50
let idadeUsuario = 55
let resultadoEhTerceiraIdade = idadeCorte < idadeUsuario 
console.log(resultadoEhTerceiraIdade)

//OPERADORES LÓGICOS
// AND lógigo if (condition1 && condition2)
//OR lógico if (condition1 || condition2)
// NOT lógico (if (!condition)

// AND -> Uma coisa só vai retornar true quando as duas forem verdadeiras. Em javascript AND É &&

//AND (&&)

let idade =18
let vistoVerificado = true
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log(resultado)

//Tem que ter 100 moedas e 1 item estrela

let moedasColetas = 100
let item = "estrela"
let resultado = (moedasColetas === 100) && (item === "estrela")
console.log(resultado)

//OPERADORES LÓGICOS
//OR lógico if (condition1 || condition2)
//Nosso boneco só pode sair se tiver sem chuva OU || com guarda chuva

let tempo = "sol"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")
console.log("Nosso personagem pode sair ? " + podeSair ) 

//OPERADORES LÓGICOS
//NOT (!) - NEGA UMA AFIRMAÇÃO

let tempo = "chuva"
let resultado = tempo === "chuva"
//console.log(resultado)

//O resultado acima vai dar true. Se colocar uma exclamação do lado de resultado ele vai inverter um true para um falso

//console.log(!resultado)

//Se eu colocar duas exclamações ele volta para true

console.log(!!resultado)

//not utilzado para negar uma afirmação. 

//OPERADORES LÓGICOS
//NOT (!) - NEGA UMA AFIRMAÇÃO

let tempo = "chuva"
let horario = 8
//let resultado = (tempo !== "chuva") && (horario > 6)
let resultado = !((tempo !== "chuva") && (horario > 6)) //Colocando ! eu nego uma afirmação. 
console.log(resultado)

//ESTRUTURAS DE CONTROLE
//TRABALHANDO COM IF

let possuiOvos = true
let itensComprados = ""

if(possuiOvos) {
    itensComprados = "Leite"
}
console.log("item comprado: " + itensComprados)

//ESTRUTURAS DE CONTROLE
//TRABALHANDO COM IF e ELSE

let possuiOvos = false // se for false vai trazer lazanha, se for verdadeiro traz leite
let itensComprados = ""

if(possuiOvos) {
    itensComprados = "Leite"
}
else{
    console.log("Passe na sessão de congelados")
    itensComprados = "Lasanha"
}
console.log("item comprado: " + itensComprados)

//ESTRUTURAS DE CONTROLE
//TRABALHANDO COM if, else if E else

let nivelDeFome = 3

if(nivelDeFome === 1) {
    console.log("pouca fome")
}
else if(nivelDeFome === 2) {
    console.log("muita fome")
}
else{
    console.log("Você comeria até um boi")
}

//switch utiliza em Estruturas de decisão
//switch/case/break/default

let fruta = "maçã"

switch (fruta){
    case "laranja":
        console.log("Suco de laranja")
        break
    case "banana":
        console.log("Vitamina de banana")
        break
    case "maçã":
        console.log("Suco de maça")
        break

// Caso não seja nenhuma das frutas acima, podemos enviar uma msg default

        default :
        console.log("suco genérico")


        //switch utiliza em Estruturas de decisão
//switch/case/break/default

let fruta = "morango"

switch (fruta){
    case "laranja":
        console.log("Suco de laranja")
        console.log("segunda mensagem")
        break
//Pode-se ter no mesmo bloco mais de um case e mais de uma exibição (console.log)
//Pode-se usar o switch case com número
    case "banana":
    case "morango":
        console.log("Vitamina de " + fruta)
        console.log("")
        break
    case "maçã":
        console.log("Suco de maça")
        break
}
// Caso não seja nenhuma das frutas acima, podemos enviar uma msg default

        default :
        console.log("suco genérico")

}

//for

for (let contador = 0; contador <= 4; contador++) {
    console.log(contador)
}

//for

let pontosDeVida = 0

for(let i = 0; i < 11; i++ ){                        //quando coloca ++ depois da variável, incrementar +1
    pontosDeVida += 1 //Maneira resumida de fazer pontosDeVida = PontosDeVida +1
    console.log("Tomou poção mágica " + i)
}

console.log(pontosDeVida + " Totais ")

//while
//alternativa ao FOR

let contador = 0

while (contador < 3){
    console.log("Olá")
    contador++  //Não esquecer de no while de incementar a variável no final senão vira loop infinito. 

    //do while = faça enquanto
    //A estrutura "do-while" executa pelo menos uma vez, mesmo que a condição seja falsa no início

let contador = 0   //Caso eu altere o contador para 3, vai exibir 1 (uma vez o resuldo). Isso ocorre porque diferentemente do while, o do while executa o contador e 
                   //depois que ele vai executar o while. 

do {
    console.log(" Holla que tal")
    contador++ //não esquecer de incrementar a variável. outra maneira de incrementar: contatodor +=1 ou contador + 1
} while (contador < 3)

