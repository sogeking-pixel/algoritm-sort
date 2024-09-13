const elements = document.getElementById("containerElements");
const buttonOrdenar = document.getElementById("button_ordenar");
const buttonDesordenar = document.getElementById("button_desordenar");
const select = document.getElementById("algoritmoSelect");
const time = 1;

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let progressBars = "";
let cant = 140;
let height = 100 / cant;
let arrayEelement = [];
for (let i = 1; i <= cant; i++) {
  arrayEelement.push(i);
}

let shuffledArray = shuffle(arrayEelement);
let num;
for (let i = 0; i < shuffledArray.length; i++) {
  num = shuffledArray[i];
  progressBars += `<div class="progress me-1" role="progressbar" aria-label="Basic example" aria-valuenow="${
    height * num
  }" aria-valuemin="0" aria-valuemax="100" >
    <div class="progress-bar" style="height: ${height * num}%"></div>
</div>`;
}

elements.innerHTML = progressBars;


//* falta implementar algoritmo de insercion
function ordenar() {  
  const algoritmo = select.value;
  if (algoritmo === "") {
    alert("Eliga un algoritmo:(");
    return;
  }

  let array = shuffledArray.slice();
  buttonOrdenar.disabled = true;
  buttonDesordenar.disabled = true;
  console.log(array);
  switch (algoritmo) {
    case '1':
      burbuja(array);
      break;
    case '2':
      seleccion(array);
      break;
    case '3':
      insercion(array);
      break;
    default:
      buttonOrdenar.disabled = false;
      buttonDesordenar.disabled = false;
      alert('todavia no se implementa :(');
      break;
  }
}

function insercion(array) {
  let i = 1;
  let j = 0;
  let aux = 0;
  function bucle1() {
    if (i < cant) {
      aux = array[i];
      j = i;
      function bucle2() {
        console.log("hola" + j);

        if (array[j - 1] > aux && j > 0) {
          array[j] = array[j - 1];
          j--;
          setTimeout(bucle2, time);
          updateProgressBars(array, j - 1, j);
        } else {
          array[j] = aux;
          updateProgressBars(array, j - 1, j);
          i++;
          setTimeout(bucle1, time);
        }
      }
      bucle2();
    } else {
      console.log(array);
      ordenado(array);
      buttonDesordenar.disabled = false;
    }
  }
  bucle1();
  
}

function seleccion(array) {
  let i = 0;
  let k = 0;
  let j = 0;
  let aux = 0;

  function bucle1() {
    if (i < cant) {
      aux = array[i];
      k = i;
      j = i;
      function bucle2() {
        if (j < cant - 1) {
          j++;
          if (array[j] < aux) {
            aux = array[j];
            k = j;
          }
          setTimeout(bucle2, time);
          updateProgressBars(array, k, j);
        } else {
          array[k] = array[i];
          array[i] = aux;
          updateProgressBars(array, i, k);
          i++;
          setTimeout(bucle1, time);
        }
      }
      bucle2();
    } else {
      console.log(array);

      ordenado(array);
      buttonDesordenar.disabled = false;
    }
  }

  bucle1();
}

function burbuja(array) {
  let i = 0;
  let j = 0;

  function bucle1() {
    if (i < cant) {
      if (j < cant) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
        updateProgressBars(array, j, j + 1);
        j++;
        setTimeout(bucle1, time);
      } else {
        j = 0;
        i++;
        setTimeout(bucle1, 0);
      }
    } else {
      ordenado(array);
      buttonDesordenar.disabled = false;
    }
  }
  bucle1();
}


function updateProgressBars(array, i, j) {
  let progressBars = "";
  for (let k = 0; k < array.length; k++) {
    let num = array[k];
    let className = "";
    if (k === i) {
      className = "highlight-current";
    } else if (k === j) {
      className = "highlight-compare";
    }
    progressBars += `<div class="progress me-1 ${className}" role="progressbar" aria-label="Basic example" aria-valuenow="${
      height * num
    }" aria-valuemin="0" aria-valuemax="100" >
            <div class="progress-bar" style="height: ${height * num}%"></div>
        </div>`;
  }
  elements.innerHTML = progressBars;
}

function ordenado(array) {
  let progressBars = "";
  for (let k = 0; k < array.length; k++) {
    let num = array[k];

    progressBars += `<div class="progress me-1 highlight-comp" role="progressbar" aria-label="Basic example" aria-valuenow="${
      height * num
    }" aria-valuemin="0" aria-valuemax="100" >
            <div class="progress-bar" style="height: ${height * num}%"></div>
        </div>`;
  }
  elements.innerHTML = progressBars;
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
    progressBars += `<div class="progress me-1" role="progressbar" aria-label="Basic example" aria-valuenow="${
      height * num
    }" aria-valuemin="0" aria-valuemax="100" >
    <div class="progress-bar" style="height: ${height * num}%"></div>
</div>`;
  }
  elements.innerHTML = progressBars;
}
