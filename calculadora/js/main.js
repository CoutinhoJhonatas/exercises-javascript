const btnPlus = pickInputById("btn-plus");
btnPlus.addEventListener("click", handleBtnPlus);

const btnTimes = pickInputById("btn-times");
btnTimes.addEventListener("click", handleBtnTimes);

const btnClear = pickInputById("btn-clear");
btnClear.addEventListener("click", handleBtnClear);


function handleBtnPlus() {
    const inputNumber1 = pickInputById("number1");
    const inputNumber2 = pickInputById("number2");
    const result = pickInputById("result-box");

    const n1 = inputNumber1.value;
    const n2 = inputNumber2.value;
    let total = 0;
    if(isNumber(inputNumber1.value) && isNumber(inputNumber2.value)) {
        inputNumber1.classList.remove("input-error");
        inputNumber2.classList.remove("input-error");
        total = Number(n1) + Number(n2);
        result.innerHTML = total;
    } else {
        if(!isNumber(inputNumber1.value)) {
            inputNumber1.classList.add("input-error");
        }

        if(!isNumber(inputNumber2.value)) {
            inputNumber2.classList.add("input-error");
        }
    }
}

function handleBtnTimes() {
    const inputNumber1 = pickInputById("number1");
    const inputNumber2 = pickInputById("number2");
    const result = pickInputById("result-box");

    const n1 = inputNumber1.value;
    const n2 = inputNumber2.value;
    let total = 0;
    if(isNumber(inputNumber1.value) && isNumber(inputNumber2.value)) {
        inputNumber1.classList.remove("input-error");
        inputNumber2.classList.remove("input-error");
        total = Number(n1) * Number(n2);
        result.innerHTML = total;
    } else {
        if(!isNumber(inputNumber1.value)) {
            inputNumber1.classList.add("input-error");
        }

        if(!isNumber(inputNumber2.value)) {
            inputNumber2.classList.add("input-error");
        }
    }
}

function handleBtnClear() {
    const inputNumber1 = pickInputById("number1");
    const inputNumber2 = pickInputById("number2");
    const result = pickInputById("result-box");

    inputNumber1.value = "";
    inputNumber2.value = ""; 
    result.innerHTML = 0;
}

function pickInputById(id) {
    return document.querySelector(`[id=${id}]`);
}

function isNumber(n) { 
    return !isNaN(parseFloat(n)) && isFinite(n); 
} 

/* TODO: Depois de adquirir mais conhecimento em JavaScript, refatorar esse código, pois está poluído. */