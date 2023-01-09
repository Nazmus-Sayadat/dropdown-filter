
var searchFilterDivision = () => {
  let selectedDivision = document.getElementById("division").value;
  const zillas = document.getElementsByClassName("zilla");
  for (let i = 0; i < zillas.length; i++) {
      if ((zillas[i].classList.contains(selectedDivision) || selectedDivision=="")) {
          zillas[i].classList.remove("hide");
      } else {
          zillas[i].classList.add("hide");
      }
  }
}



var searchFilterZilla = () => {
  let selectedZilla = document.getElementById("zilla").value;
  const upozillas = document.getElementsByClassName("upozilla");
  for (let i = 0; i < upozillas.length; i++) {
      if ((upozillas[i].classList.contains(selectedZilla) || selectedZilla=="")) {
          upozillas[i].classList.remove("hide");
      } else {
          upozillas[i].classList.add("hide");
      }
  }
}