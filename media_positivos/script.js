const dados = document.getElementById("dados").innerHTML.split("\n").map(n => Number(n));

let soma = 0;
let nPositivos = 0;
dados.forEach(n => {
    if(n > 0) {
        soma += n;
        nPositivos += 1;
    }
})

switch(nPositivos) {
    case 0:
        console.log("IMPOSSIVEL CALCULAR");
        break;
    default:
        console.log(`MÉDIA = ${(soma / nPositivos).toFixed(2)}`)
}
