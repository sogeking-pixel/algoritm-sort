function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const elements = document.getElementById("containerElements");
let progressBars = "";
let cant = 27;
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
  let array = shuffledArray.slice(); // Copia del array para no modificar el original
  let i = 0;
  let j = 0;

  function step() {
    if (i < cant) {
      if (j < cant) {
        if (array[i] > array[j]) {
          [array[i], array[j]] = [array[j], array[i]];
        }
        updateProgressBars(array, i, j);
        j++;
      } else {
        i++;
        j = i;
      }
      setTimeout(step, 20); // Ajusta el tiempo de espera según sea necesario
      }
    else {
        ordenado(array);
      }
      
  } 
    step();
    
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
