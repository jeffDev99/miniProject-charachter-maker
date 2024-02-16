let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];
let tailsColors = (hornsColors = [...bodyColors, "transparent"]);
let $ = document;
let faceBtn = $.querySelector("#face-btn");
let colorBtn = $.querySelector("#color-btn");
let hornsBtn = $.querySelector("#horns-btn");
let tailBtn = $.querySelector("#tail-btn");
let monsterHorns = $.querySelector("#monster-horns");
let monsterTail = $.querySelector("#monster-tail");
let face = $.querySelector("#face");
let imgCounter = 0,
  colorCounter = 0,
  tailsColorsCounter = 0,
  hornsColorsCounter = 0;

faceBtn.addEventListener("click", () => {
  // if (imgCounter>=5) {
  //     imgCounter=0
  // }else{
  //     imgCounter++
  // }
  imgCounter >= 5 ? (imgCounter = 0) : imgCounter++;
  face.setAttribute("src", `face-${imgCounter}.png`);
});

colorBtn.addEventListener("click", () => {
  colorCounter >= bodyColors.length - 1 ? (colorCounter = 0) : colorCounter++;
  document.documentElement.style.setProperty(
    "--color-character",
    bodyColors[colorCounter]
  );
});
hornsBtn.addEventListener("click", () => {
  hornsColorsCounter >= hornsColors.length - 1
    ? (hornsColorsCounter = 0)
    : hornsColorsCounter++;
  document.documentElement.style.setProperty(
    "--color-horns",
    hornsColors[hornsColorsCounter]
  );
});
tailBtn.addEventListener("click", () => {
  tailsColorsCounter >= tailsColors.length - 1
    ? (tailsColorsCounter = 0)
    : tailsColorsCounter++;
  document.documentElement.style.setProperty(
    "--color-tail",
    tailsColors[tailsColorsCounter]
  );
});
