import { bar_actual_add } from "../progrebar/bar_actual_add.js";
import { bar_actual_remove } from "../progrebar/bar_actual_remove.js";
import { bar_comparar_add } from "../progrebar/bar_comparar_add.js";
import { bar_comparar_remove } from "../progrebar/bar_comparar_remove.js";
import { bar_swap } from "../progrebar/bar_swap.js";
import { bar_complete } from "../progrebar/bar_complete_add.js";


export async function burbuja(
  array,
  time,
  height,
  buttonDesordenar
) {
  
  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let xd = 0;
  let id_actual = 0;
  let id_compare = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1; j++) {
      id_actual = array.indexOf(array[j]);
      id_compare = array.indexOf(array[j+1]);
      bar_actual_add(id_actual);
      bar_comparar_add(id_compare);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        bar_swap(array, j, j + 1, height);
      }      
      await pause(time);
      xd += time;
      bar_actual_remove(id_actual);
      bar_comparar_remove(id_compare);
    }
  }

  bar_complete(array,time);
  buttonDesordenar.disabled = false;
  console.log(xd);

}
