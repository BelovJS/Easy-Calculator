const input1 = document.getElementById("input1")
//console.log(input1.value);
const input2 = document.getElementById("input2")
//console.log(input2.value)
const resultElem = document.getElementById("result")
//console.log(result.textContent);

//console.log(sum);
const submitBtn = document.getElementById("submit")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const proizvBtn = document.getElementById("proizv")
const delenBtn = document.getElementById("delen")

let action = "+"

plusBtn.onclick = function () {
    action = "+"
}
minusBtn.onclick = function () {
    action = "-"
}
proizvBtn.onclick = function () {
    action = "*"
}
delenBtn.onclick = function () {
    action = "/"
}

function printResult(resul) {
    if (resul < 0) {
        resultElem.style.color = "red"
        resultElem.textContent = resul
    }
    if (resul > 0) {
        resultElem.style.color = "green"}
        resultElem.textContent = resul
}
function plusORminus(inp1,inp2,act) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (act == "+") {
        return num1 + num2
    } else if (act == "-") {
        return num1 - num2
    } else if (act == "*") {
        return num1 * num2
    } else if (act == "/") {
        return num1 / num2
    }
        //Можно вот так! (тернарный оператор)
   //return act == "+" ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {
    const resultElem = plusORminus(input1, input2,action)
    printResult(resultElem)
    }




