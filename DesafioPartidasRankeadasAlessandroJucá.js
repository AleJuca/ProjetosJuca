
function calcularNivelRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";
    
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    }
    else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    }
    else if (saldoVitorias <= 50) {
        nivel = "Prata";
    }
    else if (saldoVitorias <= 80) {
        nivel = "Ouro";     
    }
    else if (saldoVitorias <= 90 ) {
        nivel = "Diamante";
    }
    else if (saldoVitorias <= 100 ) {
        nivel = "Lendário";
    }
    else {
        nivel = "Imortal";
    }

    return {saldoVitorias, nivel };

}

//chamando a função com os dados do herói

let vitoriasHeroi = 105;
let derrotasHeroi = 1;
let resultado = calcularNivelRank(vitoriasHeroi, derrotasHeroi);
let saldo = resultado.saldoVitorias;
let nivel = resultado.nivel;

//Exibindo o resultado final

console.log("O herói tem um saldo de rankeadas de: " + saldo);
console.log("O herói está no nível: " + nivel);




