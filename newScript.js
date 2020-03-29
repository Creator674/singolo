document.addEventListener('scroll', onScroll);

function onScroll(e){
  let curPos = window.scrollY;
  const divs = document.querySelectorAll('div > a');
  const links = document.querySelectorAll('.nav_menu  a');
  divs.forEach((el) => {
    if(el.offsetTop <= curPos + 94){
      links.forEach((a) => {
        a.classList.remove('active');
        if(el.getAttribute('name') === a.getAttribute('href').substring(1)){
          a.classList.add('active');
        }
      })
    }
  })
}



let srcs = [];
let portfoliImg = document.querySelectorAll('.portfolio_images img');
let buttons = document.querySelectorAll('.portfolio_btn');
let pictures = document.querySelectorAll('.portfolio_img');

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
    portfoliImg = document.querySelectorAll('.portfolio_images img');
    pictures = document.querySelectorAll('.portfolio_img');
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
    img.classList.add('portfolio_img');
    document.querySelector('.portfolio_images').appendChild(img);
    pictures = document.querySelectorAll('.portfolio_img');
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


let modal = document.querySelector('.modal_wrapper');
let btn = document.querySelector(".feedback_btn__send");
let span = document.getElementsByClassName("close")[0];
let parent = document.querySelector('.modal_body');
span.onclick = function() {
    modal.style.display = "none";
    let element = document.querySelector('.modal_body');
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    p.className = "modal_topic";
    p2.className = "modal_description";
    element.appendChild(p);
    element.appendChild(p2);
    document.querySelector(".textarea").value = "";
    document.querySelector(".textEmail").value = "";
    document.querySelector(".textarea_special").value = "";
    document.querySelector(".textareaTopic").value = "";
}

btn.addEventListener('click', function(e){
  e.stopPropagation();
    let inpObj = document.querySelector(".textarea");
    let inpObj2 = document.querySelector(".textEmail");
    if (inpObj.checkValidity() && inpObj2.checkValidity()) {
        let p = document.querySelector('.modal_topic');
        let p2 = document.querySelector('.modal_description');
        let value = document.querySelector(".textareaTopic").value;
        let value2 = document.querySelector(".textarea_special").value;
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
        e.preventDefault();
    }
})

let vertBut = document.querySelector('.vertical_btn');

vertBut.addEventListener('click', switchLightVertical);
let removedVertical = false;

function switchLightVertical() {
    let horParent = document.querySelector('.vertical');
    let horOffParent = document.querySelector('.verticalOff');
    if(!removedVertical) {
        horParent.classList.remove('vertical');
        horParent.classList.add('verticalOff');
        removedVertical = true;
    }
    else {
        horOffParent.classList.remove('verticalOff');
        horOffParent.classList.add('vertical');
        removedVertical = false;
    }
}


let horBut = document.querySelector('.horizontal_btn');

horBut.addEventListener('click', switchLightHorizontal);
let removedHorizontal = false;

function switchLightHorizontal() {
    let horParent = document.querySelector('.horizontal');
    let horOffParent = document.querySelector('.horizontalOff');
    if(!removedHorizontal) {
        horParent.classList.remove('horizontal');
        horParent.classList.add('horizontalOff');
        removedHorizontal = true;
    }
    else {
        horOffParent.classList.remove('horizontalOff');
        horOffParent.classList.add('horizontal');
        removedHorizontal = false;
    }
}