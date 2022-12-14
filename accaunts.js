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

let trashIcon = document.getElementsByClassName("trash-icon");
for (i = 0; trashIcon.length > i; i++) {
  trashIcon[i].onclick = function() {
    let popup = document.getElementById('popupArchive');
    popup.classList.toggle('show');
  }
  let popupClose =  document.getElementById ("popup-cansel");
  popupClose.onclick = function  () {
  let popup = document.getElementById('popupArchive');
  popup.classList.toggle("show");
}
}

let penIcon = document.getElementsByClassName("pen-icon");
for (i = 0; penIcon.length > i; i++) {
  penIcon[i].onclick = function() {
    console.log('click');
    let popupSet = document.getElementById('popup-set');
    popupSet.classList.toggle('show-popup-set');
}
}


