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
    picturesStyle();
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

function picturesStyle(){
    for (let i = 0; i < pictures.length; i++) {
        pictures[i].addEventListener('click', function() {
          for (let i = 0; i < pictures.length; i++) {
            pictures[i].classList.remove('currentImage');
          }
          this.classList.add('currentImage');
        })
    }
}
picturesStyle();


let modal = document.querySelector('.modal__wrapper');
let btn = document.querySelector(".feedback__btn_submit");
let span = document.getElementsByClassName("close")[0];
let parent = document.querySelector('.modal__body');
span.onclick = function() {
    modal.style.display = "none";
    let element = document.querySelector('.modal__body');
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    p.className = "modal__topic";
    p2.className = "modal__description";
    element.appendChild(p);
    element.appendChild(p2);
}

btn.addEventListener('click', function(e){
    e.stopPropagation();
    let inpObj = document.querySelector(".textarea");
    let inpObj2 = document.querySelector(".textEmail");
    if (inpObj.checkValidity() && inpObj2.checkValidity()) {
        let p = document.querySelector('.modal__topic');
        let p2 = document.querySelector('.modal__description');
        let value = document.querySelector(".textareaTopic").value;
        let value2 = document.querySelector(".textarea_thick").value;
        let text = document.createTextNode(`Тема: ` + value);
        let text2 = document.createTextNode(`Описание: ` + value2);
        if(value == ""){
            text = document.createTextNode("Без темы");
        }
        if(value2 == ""){
            text2 = document.createTextNode("Без описания");
        }
        p.appendChild(text);
        p2.appendChild(text2);
        modal.style.display = "block";
    }
})
