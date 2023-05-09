// con el query selector podemos usar la sintaxis de css

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnCalcular');
const p = document.querySelector('#resultado')
//form en lugar de button
button.addEventListener('click', sumarValue);

function sumarValue() {
    // event.prevenDefault();
   const suma = Number(input1.value) + Number(input2.value)
   p.innerHTML = "Resultado: " + suma;
}

// h1.innerHTML =  "manipulacion <br> del DOM";

// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

// h1.classList.add('rojo');
// h1.classList.remove('verde');

// const img = document.createElement('img');
// img.setAttribute('src', 'https://http2.mlstatic.com/D_NQ_NP_971088-MCO53946431700_022023-O.webp');
// pid.append(img);