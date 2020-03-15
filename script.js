let srcs = [];
let portfoliImg = document.querySelectorAll('.portfolio__imgs img');
let buttons = document.querySelectorAll('.btn');
let pictures = document.querySelectorAll('.image');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = changePortfolioPictures;
    buttons[i].addEventListener('click', function() {
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('btn_pressed');
      }
      this.classList.add('btn_pressed');
    })
}
function changePortfolioPictures(){
    portfoliImg = document.querySelectorAll('.portfolio__imgs img');
    pictures = document.querySelectorAll('.image');
    for(let i = 0; i < portfoliImg.length; i++){
        srcs[i] = portfoliImg[i].src;
        portfoliImg[i].remove();
    }
    shuffle(srcs);
    draw();
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].addEventListener('click', function() {
          for (let i = 0; i < pictures.length; i++) {
            pictures[i].classList.remove('currentImage');
          }
          this.classList.add('currentImage');
        })
    }
}
function draw(){
    for(let i = 0; i < portfoliImg.length; i++){
    let img = document.createElement('img');
    img.src = srcs[i];
    img.classList.add('image');
    document.querySelector('.portfolio__imgs').appendChild(img);
    pictures = document.querySelectorAll('.image');
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}

