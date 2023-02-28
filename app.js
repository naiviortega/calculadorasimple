let botonS = document.getElementById('sumar');
let botonR = document.getElementById('restar');
let botonM = document.getElementById('multiplicar');
let botonD = document.getElementById('dividir');
let respuesta = document.getElementById('respuesta');

botonS.addEventListener('click', hacersuma);
botonR.addEventListener('click', hacerresta);
botonM.addEventListener('click', hacermultiplicaion);
botonD.addEventListener('click', hacerdivision);

function hacersuma(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 + n2;
    respuesta.innerHTML = `El resultado de la suma es: ${n3}`;
}

function hacerresta(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 - n2;
    respuesta.innerHTML = `El resultado de la suma es: ${n3}`;
}

function hacermultiplicaion(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 * n2;
    respuesta.innerHTML = `El resultado de la suma es: ${n3}`;
}

function hacerdivision(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let n3 = n1 / n2;
    respuesta.innerHTML = `El resultado de la suma es: ${n3}`;
}