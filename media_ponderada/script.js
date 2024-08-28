const numeros = document.getElementById("dados").innerHTML.split("\n").map(n => Number(n));

const media = (numeros[0] * 2 + numeros[1] * 3 + numeros[2] * 5) / (2 + 3 + 5);
console.log(`MÉDIA = ${media.toFixed(1)}`);