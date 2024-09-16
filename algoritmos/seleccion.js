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

  let xd = 0;
  let k = 0; 
  let aux = 0;

  for (let i = 0; i < array.length; i++) {
    aux = array[i];
    k = i;
    for (let j = i + 1; j < array.length; j++) {
       
      await funcion_generica(k, j, time); 
      if (array[j] < aux) {
        aux = array[j];
        k = j;
      }      
      xd += time;      
    }

    array[k] = array[i];
    array[i] = aux;
    bar_swap(array, i, k, height);  
  }

  console.log(xd);
  bar_complete(array, time);
  buttonDesordenar.disabled = false;
  
}

async function funcion_generica(k, j, time) {
  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  bar_actual_add(k);
  bar_comparar_add(j);
  await pause(time);
  bar_actual_remove(k);
  bar_comparar_remove(j);  
}
