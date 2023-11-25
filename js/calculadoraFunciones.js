function sumarNumerosCompleto(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value)
    console.log('Function sumarNumeros' + n1)
    console.log('Function sumarNumeros' + n2)
    var resultado = n1 + n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

function restarNumeros(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value)
    console.log('Function sumarNumeros' + n1)
    console.log('Function sumarNumeros' + n2)
    var resultado = n1 - n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

function multiplicarNumeros(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value)
    console.log('Function sumarNumeros' + n1)
    console.log('Function sumarNumeros' + n2)
    var resultado = n1 * n2;
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

function dividirNumeros(){
    var n1 = parseInt(document.getElementById('idNumero1').value);
    var n2 = parseInt(document.getElementById('idNumero2').value)
    console.log('Function sumarNumeros' + n1)
    console.log('Function sumarNumeros' + n2)
    if( n2!=0){
        var resultado = n1 / n2;
    }
    else{
        var resultado = "Syntax Error";
    }
    
    console.log(resultado)
    document.getElementById('idResultado2').innerText=resultado;
}

function cambiarImagen(){
    document.getElementById('idImagen').src='https://usagif.com/wp-content/uploads/gifs/monkey-23.gif';
}