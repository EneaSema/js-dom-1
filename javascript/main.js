// console.log("ciao");

const light = document.getElementById("lamp");
console.log(light);

const buttonCommander = document.getElementById("btn-spento");
console.log(buttonCommander);

let lightOn = false;
console.log(lightOn);

buttonCommander.addEventListener(`click`, function () {
  light.src = "./img/yellow_lamp.png";
  buttonCommander.innerHTML = "Spegni";
  lightOn = true;
  console.log(lightOn);
  return lightOn;
});

if (lightOn === true) {
  buttonCommander.addEventListener(`click`, function () {
    light.src = "./img/white_lamp.png";
    buttonCommander.innerHTML = "Spegni";
    lightOn = false;
    console.log(lightOn);
    return lightOn;
  });
} else if (lightOn !== true) {
  buttonCommander.addEventListener(`click`, function () {
    light.src = "./img/yellow_lamp.png";
    buttonCommander.innerHTML = "Spegni";
    lightOn = true;
    console.log(lightOn);
    return lightOn;
  });
}
