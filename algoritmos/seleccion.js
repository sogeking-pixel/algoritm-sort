import { bar_actual_add } from "../progrebar/bar_actual_add.js";
import { bar_actual_remove } from "../progrebar/bar_actual_remove.js";
import { bar_comparar_add } from "../progrebar/bar_comparar_add.js";
import { bar_comparar_remove } from "../progrebar/bar_comparar_remove.js";
import { bar_swap } from "../progrebar/bar_swap.js";
import { bar_complete } from "../progrebar/bar_complete_add.js";

export async function seleccion(
  array,
  time,
  height,
  buttonDesordenar
) {

  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  let xd = 0;
  let k = 0; 
  let aux = 0;
  let id_actual = 0;
  let id_compare = 0;

  for (let i = 0; i < array.length; i++) {
    aux = array[i];
    k = i;
    for (let j = i + 1; j < array.length; j++) {
      id_actual = array.indexOf(array[k]);
      id_compare = array.indexOf(array[j]);
      bar_actual_add(id_actual);
      bar_comparar_add(id_compare);
      if (array[j] < aux) {
        aux = array[j];
        k = j;
      }
      await pause(time);
      xd += time;
      bar_actual_remove(id_actual);
      bar_comparar_remove(id_compare);
    }

    array[k] = array[i];
    array[i] = aux;
    bar_swap(array, i, k, height);  
  }

  console.log(xd);
  bar_complete(array, time);
  buttonDesordenar.disabled = false;
  
}
