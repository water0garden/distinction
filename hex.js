const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//#f15025
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
  let hexColor = '#';
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
})

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}

var currentIndex = 1;
displaySlides(currentIndex);

function setSlides(num) {
  displaySlides(currentIndex += num);
}

function displaySlides(num) {
    var x;
    var slides = document.getElementsByClassName("imageSlides");
    if (num > slides.length) { currentIndex = 1 }
    if (num < 1) { currentIndex = slides.length }
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    slides[currentIndex - 1].style.display = "block";
}
