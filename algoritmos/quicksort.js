export function quicksort(
  array,
  cant,
  time,
  updateProgressBars,
  ordenado,
  buttonDesordenar
) {
  quicksort_recursiva(array, 0, cant - 1, updateProgressBars, time);
  ordenado(array);
  console.log(array);

  buttonDesordenar.disabled = false;
}

function quicksort_recursiva(array, izq, der, updateProgressBars, time) {
  if (izq >= der) {
    return;
  }
  let i = izq;
  let j = der;
  const pivotIndex = izq;

  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const partition = async () => {
    while (i < j) {
      while (array[i] < array[pivotIndex] && i < j) {
       
        i++;
        await pause(time);
      }
      while (array[j] > array[pivotIndex]) {
        
        j--;
        await pause(time);
      }

      if (i <= j) {
        [array[i], array[j]] = [array[j], array[i]];
        updateProgressBars(array, i, j, pivotIndex, izq, der);
        await pause(time);
      }
    }
  };

  partition().then(() => {
    if (j - 1 > izq) {
      quicksort_recursiva(array, izq, j - 1, updateProgressBars, time);
    }

    if (j + 1 < der) {
      quicksort_recursiva(array, j + 1, der, updateProgressBars, time);
    }
  });
}
