let NomeDoHeroi = "Capitão América"
let XpDoHeroi = 999
let NivelDoHeroi

//Se XP for menor do que 1.000 = Ferro

if (XpDoHeroi < 1000) { 
    NivelDoHeroi = "Ferro"
}

// Se XP for entre 1.001 e 2.000 = Bronze

else if (XpDoHeroi >= 1001 && XpDoHeroi <= 2000) {
    NivelDoHeroi = "Bronze"
}

// Se XP for entre 2.001 e 3.000 = Prata

else if (XpDoHeroi >= 2001 && XpDoHeroi <= 5000) {
    NivelDoHeroi = "Prata"
}       
// Se XP for entre 5000 e 7000 = Ouro

else if (XpDoHeroi >= 5000 &&XpDoHeroi <= 7000) {
    NivelDoHeroi = "Ouro"
} 
// Se XP for entre 7001 e 8000 = Platina

else if (XpDoHeroi >= 7001 && XpDoHeroi <= 8000) {
    NivelDoHeroi = "Platina"
}
// Se XP for entre 8001 e 9000 = Ascendente
else if (XpDoHeroi >= 8001 && XpDoHeroi <= 9000) {
    NivelDoHeroi = "Ascendente"
}

else if (XpDoHeroi >= 9001 && XpDoHeroi <= 10000) {
    NivelDoHeroi = "Imortal"
}
// Se XP for maior do que 10.001 = Radiante
else if (XpDoHeroi > 10001) {
    NivelDoHeroi = "Radiante"
}   
console.log("Nome do Herói: " + NomeDoHeroi)
console.log("XP do Herói: " + XpDoHeroi)
console.log("Nível do Herói: " + NivelDoHeroi)              
