let NomeHeroi = "Homem Aranha"
let XpDoHeroi = 6.000
let NivelDoHeroi;

//Se XP for menor do que 1.000 = Ferro

if (XpDoHeroi <= 1.000) {
    NivelDoHeroi = "Ferro"

// Se XP for entre 1.001 e 2.000 = Bronze

} 
else if (XpDoHeroi >= 1.001 && XpDoHeroi <= 2.000) {
    NivelDoHeroi = "Bronze"

//Se XP for entre 2.001 e 5.000 = Prata

} else if (XpDoHeroi >= 2.001 && XpDoHeroi <= 5.000) {
    NivelDoHeroi = "Prata"

//Se XP for entre 5.001 e 7.000 = Ouro

}else if (XpDoHeroi >= 5.001 && XpDoHeroi <= 7.000) {
    NivelDoHeroi = "Ouro"

//Se XP for entre 7.001 e 8.000 = Platina
} else if (XpDoHeroi >= 7.001 && XpDoHeroi <= 8.000) {
        NivelDoHeroi = "Platina"

//Se XP for entre 8.001 e 9.000 = Ascendente

} else if (XpDoHeroi >= 8.001 && XpDoHeroi <= 9.000) {
        NivelDoHeroi = "Ascendente"

//Se XP for entre 9.001 e 10.000 = Imortal
} else if (XpDoHeroi >= 9.001 && XpDoHeroi <= 10.000) {
                NivelDoHeroi = "Imortal"
} else if (XpDoHeroi >= 10.001) {
            NivelDoHeroi = "Radiante"

                }
console.log("O herói " + NomeHeroi + " está no nível " + NivelDoHeroi)  
    



