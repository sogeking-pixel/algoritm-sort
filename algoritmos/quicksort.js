import { bar_actual_add } from "../progrebar/bar_actual_add.js";
import { bar_actual_remove } from "../progrebar/bar_actual_remove.js";
import { bar_comparar_add } from "../progrebar/bar_comparar_add.js";
import { bar_comparar_remove } from "../progrebar/bar_comparar_remove.js";
import { bar_swap } from "../progrebar/bar_swap.js";
import { bar_complete } from "../progrebar/bar_complete_add.js";

let height = 0;
let time = 0;


export async function quicksort(
  array,
  time1,
  height2,
  buttonDesordenar    
) {

  height = height2; 
  time = time1;
  await quicksort_recursiva(array, 0, array.length - 1);

  bar_complete(array, time);
  buttonDesordenar.disabled = false;

}



async function quicksort_recursiva(array, left, right) {
  let indexPivote = Math.floor((right + left) / 2);
  let pivot = array[indexPivote],
    i = left,
    j = right;

  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
   bar_actual_add(indexPivote);
  
  while (i <= j) {
    while (array[i] < pivot) {
      bar_comparar_add(i);
      await pause(time);
      bar_comparar_remove(i);
      i++;
    }
    while (array[j] > pivot) {
      bar_comparar_add(j);
      await pause(time);
      bar_comparar_remove(j);
      j--;
    }
    if (i <= j) {
      [array[i], array[j]] = [array[j], array[i]];
      bar_swap(array, i, j, height);
      i++;
      j--;
    }
     await pause(time);
  }
  bar_actual_remove(indexPivote);
  
  if (left < i - 1) {      
    await quicksort_recursiva(array, left, i - 1);
  }
  if (i < right) {      
    await quicksort_recursiva(array, i, right);
  }
  
}
