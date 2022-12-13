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


let popup = document.getElementsByClassName("trash-icon");
let popupButton = document.getElementById("popup-button");
for (i = 0; popup.length > i; i++) {
popupButton.onclick = function PopUpShow() {
  popup.classList.toggle("show");
}
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
    let childPlane = this.querySelector('.plane');
    let childCircle = this.querySelector('.container-number')
    if (this.classList.contains ('direction')){
      this.classList.remove('direction');
      this.classList.add('active-direction');
      if (this.classList.contains ('active-direction')) {
      childPlane.classList.toggle('plane-active')
      childCircle.classList.toggle('container-number-hide')
     }
      }
    
      else {
        this.classList.remove('active-direction');
        this.classList.add('direction');
        childPlane.classList.remove('plane-active')
        childPlane.classList.add('plane')
        childCircle.classList.remove('container-number-hide')
        childCircle.classList.add('container-number')
      }

}
}

let directionRent = document.getElementsByClassName('direction-rent');
for (i = 0; directionRent.length > i; i++) {
  directionRent[i].onclick = function() {
    let childPlane = this.querySelector('.plane');
    let childCircle = this.querySelector('.container-number')
    if (this.classList.contains ('direction-rent')){
      this.classList.remove('direction-rent');
      this.classList.add('direction-rent-active');
      if (this.classList.contains ('direction-rent-active')) {
      childPlane.classList.toggle('plane-active')
      childCircle.classList.toggle('container-number-hide')
     }
      }
    
      else {
        this.classList.remove('direction-rent-active');
        this.classList.add('direction-rent');
        childPlane.classList.remove('plane-active')
        childPlane.classList.add('plane')
        childCircle.classList.remove('container-number-hide')
        childCircle.classList.add('container-number')
      }
  }
}
  
let popupPlane = document.getElementsByClassName('img-plane');
for (i = 0; popupPlane.length > i; i++) {
popupPlane[i].onclick = function() {
let popupNotif = document.getElementById('popupNotif');
popupNotif.classList.add('show-popup-notif');
let popupCloseNotif = document.getElementById("popup-cansel-notif");
popupCloseNotif.onclick = function closePopupWindoNotif () {
  popupNotif.classList.remove("show-popup-notif");
}
  }
}

let settingsIcon = document.getElementById('settings-icon')
settingsIcon.onclick = function () {
  let popupSettings = document.getElementById('popupSettings');
  popupSettings.classList.toggle('show-settings');
  let settingContainer = document.getElementsByClassName('setting-container');
  for (i = 0; settingContainer.length > i; i++) {
  settingContainer[i].onclick = function() {
  this.classList.toggle('active-settings');
  this.querySelector('.check-img').classList.toggle ('check-active');
}
}
}


let newPerson = document.querySelector('.new-person')
newPerson.onclick = function () {
  window.open('add-new.html');
}