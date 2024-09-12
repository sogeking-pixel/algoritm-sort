const elements = document.getElementById("containerElements");
const buttonOrdenar = document.getElementById("button_ordenar");
const buttonDesordenar = document.getElementById("button_desordenar");
function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
let progressBars = "";
let cant = 50;
let height = 100 / cant;
let arrayEelement = [];
for (let i = 1; i <= cant; i++) {
  arrayEelement.push(i);
}

let shuffledArray = shuffle(arrayEelement);
let num;
for (let i = 0; i < shuffledArray.length; i++) {
    num = shuffledArray[i];
  progressBars += `<div class="progress mx-1" role="progressbar" aria-label="Basic example" aria-valuenow="${
    height * (num)
  }" aria-valuemin="0" aria-valuemax="100" >
    <div class="progress-bar" style="height: ${height * (num)}%"></div>
</div>`;
}

elements.innerHTML = progressBars;



function ordenar() {
  let array = shuffledArray.slice();
  buttonOrdenar.disabled = true;
  buttonDesordenar.disabled = true;

  let i = cant;
  let j = 0;

  function ordenarPaso() {
    if (i > 0) {
      if (j < i - 1) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];         
        }
         updateProgressBars(array, j, j + 1);
        j++;
        setTimeout(ordenarPaso, 10); // Retraso de 300 ms entre cada paso
      } else {
        j = 0;
        i--;
        setTimeout(ordenarPaso, 0); // Retraso de 300 ms entre cada paso
      }
    } else {
      ordenado(array);
      buttonDesordenar.disabled = false;
    }
  }

  ordenarPaso();
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
    progressBars += `<div class="progress mx-1 ${className}" role="progressbar" aria-label="Basic example" aria-valuenow="${
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
    
    progressBars += `<div class="progress mx-1 highlight-comp" role="progressbar" aria-label="Basic example" aria-valuenow="${
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
    progressBars += `<div class="progress mx-1" role="progressbar" aria-label="Basic example" aria-valuenow="${
      height * num
    }" aria-valuemin="0" aria-valuemax="100" >
    <div class="progress-bar" style="height: ${height * num}%"></div>
</div>`;
  }
  elements.innerHTML = progressBars;
  
}