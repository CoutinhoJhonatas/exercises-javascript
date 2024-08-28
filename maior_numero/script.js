const result = document.getElementById("dados").innerHTML.split("\n").map(n => Number(n));

let maior = 0;
for(let i = 0; i < result.length; i++) {
    if(result[i] > maior) {
        maior = result[i];
    }
}

console.log(maior);