let page = document.getElementsByClassName("amount-of-number");
let actives = document.getElementsByClassName('choosen-number');
for (i = 0; page.length > i; i++) {
  page[i].onclick = function() {
    let currentActive = actives[0];
    if (currentActive)
      currentActive.classList.remove("choosen-number");

    if (currentActive !== this)
      this.classList.add("choosen-number");
  };
}

let number = document.getElementsByClassName("page-number");
let active2 = document.getElementsByClassName('choosen-page');
for (i = 0; number.length > i; i++) {
  number[i].onclick = function() {
    let currentActive = active2[0];
    if (currentActive)
      currentActive.classList.remove("choosen-page");

    if (currentActive !== this)
      this.classList.add("choosen-page");
  };
}

let checkboxesPrevios = document.getElementsByClassName('fake');
let archiveLeads = document.getElementById('archive-dedicated');
for(let i=0; i<checkboxesPrevios.length;i++){
  checkboxesPrevios[i].addEventListener('click', ChangeCheckboxStyle);
}

function ChangeCheckboxStyle () {
  if (this.classList.contains ('fake')){
  this.classList.remove('fake');
  this.classList.add('chek');
  }else {
    this.classList.remove('chek');
    this.classList.add('fake');
  }
  checkArxiv();
  if (this.classList.contains('chek')) {
    archiveLeads.classList.add('active');
  }else {
    archiveLeads.classList.remove('active');
  }
}

function checkArxiv(){

}

let popup = document.getElementById("popupArchive");
let popupButton = document.getElementById("popup-button");
popupButton.onclick = function PopUpShow() {
  popup.classList.toggle("show");
}

let popupClose =  document.getElementById ("popup-cansel");
popupClose.onclick = function closePopupWindow () {
  popup.classList.toggle("show");
}

let emptyCustom = document.getElementById("custom-button");
let parent = document.getElementById("direction-botton");
emptyCustom.onclick = function createCustom () {
    emptyCustom.parentNode.removeChild(emptyCustom);
    let botton = document.createElement("botton");
    botton.innerHTML = "Кастомное";
    parent.appendChild(botton);
    botton.classList.add('direction-rent'); 
}

let menu = document.getElementsByClassName('menu');
let direction = document.getElementsByClassName('direction');
for (i = 0; direction.length > i; i++) {
  direction[i].onclick = function() {
    console.log('djjfj');
    if (this.classList.contains ('direction')){
      this.classList.remove('direction');
      this.classList.add('active-direction');
      }else {
        this.classList.remove('active-direction');
        this.classList.add('direction');
      }
}
}