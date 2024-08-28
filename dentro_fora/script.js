const dados = document.getElementById("dados").innerHTML.split("\n").map(n => Number(n));

let dentro = 0;
let fora = 0;
dados.forEach(n => {
    if(n >= 10 && n <=20) {
        dentro++;
    } else {
        fora++;
    }
})

console.log(`${dentro} DENTRO`);
console.log(`${fora} FORA`);