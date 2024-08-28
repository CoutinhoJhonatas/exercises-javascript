const numero = Number(document.getElementById("dados").innerHTML);

for(let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`)
}