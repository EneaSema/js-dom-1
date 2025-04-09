console.log("ciao");

const light = document.getElementById("lamp");
console.log(light);

const buttonCommander = document.getElementById("btn-spento");
console.log(buttonCommander);

buttonCommander.addEventListener(`click`, function () {
  light.src = "./img/yellow_lamp.png";
  buttonCommander.innerHTML = "Spegni";
});
