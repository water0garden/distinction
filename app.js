const colors = ["DarkSeaGreen", "SaddleBrown", "SteelBlue", "WhiteSmoke"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
  // get random number between 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors [randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
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
