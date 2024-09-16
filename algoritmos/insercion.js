import { bar_actual_add } from "../progrebar/bar_actual_add.js";
import { bar_actual_remove } from "../progrebar/bar_actual_remove.js";
import { bar_comparar_add } from "../progrebar/bar_comparar_add.js";
import { bar_comparar_remove } from "../progrebar/bar_comparar_remove.js";
import { bar_swap } from "../progrebar/bar_swap.js";
import { bar_complete } from "../progrebar/bar_complete_add.js";


export async function insercion(array, time, height, buttonDesordenar) {
  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  let j = 0;
  let aux = 0;
  let xd = 0;
  let id_actual = 0;
  let id_compare = 0;

  for (let i = 1; i < array.length; i++) {
    aux = array[i];
    j = i;
    id_actual = array.indexOf(aux);
    id_compare = array.indexOf(array[j - 1]);
    bar_actual_add(id_actual);
    bar_comparar_add(id_compare);
   
    while (array[j - 1] > aux && j > 0) {
      id_compare = array.indexOf(array[j - 1]);
      bar_actual_add(id_actual);
      bar_comparar_add(id_compare);      
      array[j] = array[j - 1];
      bar_swap(array, j - 1, j, height, aux, array[j]);
      await pause(time);
      bar_actual_remove(id_actual);
      bar_comparar_remove(id_compare);
      xd += time;     
      j--;     
    }
    
    await pause(time);  
    
    array[j] = aux;
    
    xd += time;
    
     bar_actual_remove(id_actual);
     bar_comparar_remove(id_compare);
   

  }

  
  bar_complete(array, time);
  buttonDesordenar.disabled = false;
  console.log(xd);
}
