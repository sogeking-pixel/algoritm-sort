export async function bar_complete(time) {
  const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const container = document.getElementById("containerElements");
  const progressElements = container.querySelectorAll(".progress");

  for (const element of progressElements) {
    element.classList.add("highlight-complete");
    await pause(time);
  }
  await pause(time);
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Ordenado",
  });
}

