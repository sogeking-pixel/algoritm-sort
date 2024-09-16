import { burbuja } from "./algoritmos/burbuja.js";
import { seleccion } from "./algoritmos/seleccion.js";
import { insercion } from "./algoritmos/insercion.js";
import { quicksort } from "./algoritmos/quicksort.js";
import { mergesort } from "./algoritmos/megesort.js";



//obtener los elementos del html
const elements = document.getElementById("containerElements");
const buttonOrdenar = document.getElementById("button_ordenar");
const buttonDesordenar = document.getElementById("button_desordenar");
const select = document.getElementById("algoritmoSelect");


const time = 1;
const cant = 120;
let height = 100 / cant;

let progressBars = "";

let arrayEelement = [];
for (let i = 1; i <= cant; i++) {
  arrayEelement.push(i);
}

let shuffledArray = shuffle(arrayEelement);

desordenar(); 



function ordenar() {
  const algoritmo = select.value;
  if (algoritmo === "") {
   Swal.fire({
     title: "¿Algoritmo?",
     text: "Seleccione un algoritmo para comenzar a ordenar :D",
     icon: "warning",
     confirmButtonColor: "#3085d6",
   });
    return;
  }

  let array = shuffledArray.slice();
  buttonOrdenar.disabled = true;
  buttonDesordenar.disabled = true;
  console.log(array);
  switch (algoritmo) {
    case "1":
      burbuja(array, time, height, buttonDesordenar);
      break;

    case "2":
      seleccion(array, time, height, buttonDesordenar);
      break;

    case "3":
      insercion(array, time, height, buttonDesordenar);
      break;
    case "4":
      quicksort(array, time, height, buttonDesordenar);
      break;
    case "5":
      mergesort(array, time, height, buttonDesordenar);
      break;
    default:
      buttonDesordenar.disabled = false;
      buttonOrdenar.disabled = false;
      Swal.fire({
        title: "Oops...",
        text: "Este algoritmo aún está en construcción, por favor tenga paciencia :'D",
        icon: "info",
        confirmButtonColor: "#3085d6",
      });
      break;
  }
  
}


function desordenar() {
  if (buttonOrdenar.disabled) {
    buttonOrdenar.disabled = false;
  }

  shuffledArray = shuffle(arrayEelement);
  let num;
  progressBars = "";
  for (let i = 0; i < shuffledArray.length; i++) {
    num = shuffledArray[i];
    progressBars += `<div id="barProgreso${i}" class="progress me-1" role="progressbar" aria-label="Basic example" aria-valuenow="${
      height * num
    }" aria-valuemin="0" aria-valuemax="100" >
    <div class="progress-bar" style="height: ${height * num}%"></div>
</div>`;
  }
  elements.innerHTML = progressBars;
}


function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

window.ordenar = ordenar;
window.desordenar = desordenar;