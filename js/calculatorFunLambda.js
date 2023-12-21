let num1 = null;
let num2 = null;

function getValue(button) {
  if (num1 === null) {
    num1 = parseInt(button.innerText.trim());
    console.log(num1)
  } else if (num2 === null) {
    num2 = parseInt(button.innerText.trim());
    console.log(num2)
  }
}

const sumarCompleto = () => {
  if (num1 !== null && num2 !== null) {
    var resultado = num1 + num2;
    console.log(resultado);
    document.getElementById("idResultado2").innerText = resultado;
  }
};

const restarCompleto = () => {
  if (num1 !== null && num2 !== null) {
    var resultado = num1 - num2;
    console.log(resultado);
    document.getElementById("idResultado2").innerText = resultado;
  }
};
const multiplicarCompleto = () => {
  if (num1 !== null && num2 !== null) {
    var resultado = num1 * num2;
    console.log(resultado);
    document.getElementById("idResultado2").innerText = resultado;
  }
};
const dividirCompleto = () => {
  if (num1 !== null && num2 !== null) {
    if (num2 != 0) {
      var resultado = num1 / num2;
    } else {
      var resultado = "Syntax Error";
    }

    console.log(resultado);
    document.getElementById("idResultado2").innerText = resultado;
  }
};
const reset = () => {
  num1 = null;
  num2 = null;
  document.getElementById("idResultado2").innerText = "";

};
