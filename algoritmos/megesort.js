import { bar_actual_add } from "../progrebar/bar_actual_add.js";
import { bar_actual_remove } from "../progrebar/bar_actual_remove.js";
import { bar_comparar_add } from "../progrebar/bar_comparar_add.js";
import { bar_comparar_remove } from "../progrebar/bar_comparar_remove.js";
import { bar_swap } from "../progrebar/bar_swap.js";
import { bar_complete } from "../progrebar/bar_complete_add.js";

let height = 0;
let time = 0;

export async function mergesort(array, time1, height2, buttonDesordenar) {
  height = height2;
  time = time1;
  await mergesort_recursiva(array, 0, array.length - 1);

  bar_complete(array, time);
  buttonDesordenar.disabled = false;
}

async function mergesort_recursiva(array, ini, fin) {
  let mit = Math.floor((ini + fin) / 2);
  let dif = fin - ini;
  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  if (dif > 1) {
    await mergesort_recursiva(array, ini, mit);
    await mergesort_recursiva(array, mit + 1, fin);
  }
 bar_actual_add(mit);
  let i = ini;
  let j = mit + 1;
  const L = new Array();
  const R = new Array();
  let k = ini;
  for (let i = ini; i <= mit; i++) L[i] = array[i];
  for (let j = mit + 1; j <= fin; j++) R[j] = array[j];

  while (i <= mit && j <= fin) {
      bar_comparar_add(k);
      await pause(time);
      bar_comparar_remove(k);
    if (L[i] <= R[j]) {
      array[k] = L[i];
      bar_swap(array, k, array.indexOf(L[i]), height);
      i++;
    } else {      
      array[k] = R[j];
      bar_swap(array, k, array.indexOf(R[j]), height);
      j++;
    }
    k++;
    
  }

  while (i <= mit) {
     bar_comparar_add(k);
     await pause(time);
     bar_comparar_remove(k);
    array[k] = L[i];
    bar_swap(array, k, array.indexOf(L[i]), height);
    i++;
    k++;

  }

  while (j <= fin) {
     bar_comparar_add(k);
     await pause(time);
     bar_comparar_remove(k);
    array[k] = R[j];
    bar_swap(array, k, array.indexOf(R[j]), height);
    j++;
    k++;
  }

  bar_actual_remove(mit);
}
