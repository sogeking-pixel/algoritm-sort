export function bar_swap(array, i, j, height,cant1 = null, cant2=null) {  
  let num1 = cant1 === null ? array[i] : cant1; 
  let num2 = cant2 === null ? array[j] : cant2;

  const bar1 = document.getElementById("barProgreso" + i);
  const bar2 = document.getElementById("barProgreso" + j);
  const innerBar1 = bar1.querySelector(".progress-bar");
  const innerBar2 = bar2.querySelector(".progress-bar");
  innerBar1.style.height = height * num1 + "%";
  innerBar2.style.height = height * num2 + "%";
}
