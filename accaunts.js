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
    let popupSet = document.getElementById('popup-set');
    popupSet.classList.toggle('show-popup-set');
}
let popupCloseSet =  document.getElementById ("button-cansel-set");
popupCloseSet.onclick = function  () {
let popupSet = document.getElementById('popup-set');
popupSet.classList.toggle("show-popup-set");
}
}

let changePopup = document.getElementById('popup-set-text');
changePopup.onclick = function () {
    let popupSet = document.getElementById('popup-set');
    popupSet.classList.toggle("show-popup-set");
    let setFio = document.getElementById('popup-set-fio');
    setFio.classList.toggle('show-popup-set-fio');
}

let popupCloseSetFio =  document.getElementById ("button-cansel-set-fio");
    popupCloseSetFio.onclick = function  () {
    let setFio = document.getElementById('popup-set-fio');
    setFio.classList.toggle("show-popup-set-fio");
}

function openTable(evt, tableName) {
 
  var i, tableScreen, tablinks;
  tableScreen = document.getElementsByClassName("table-screen");
  for (i = 0; i < tableScreen.length; i++) {
    tableScreen[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("but-active", "");
  }

  document.getElementById(tableName).style.display = "block";
  evt.currentTarget.className += "but-active";
}

let penIconTable2 = document.getElementsByClassName("pen-icon-table2");
for (i = 0; penIconTable2.length > i; i++) {
  penIconTable2[i].onclick = function() {
    console.log('click')
  let popupSetCity = document.getElementById('popup-set-city');
  popupSetCity.classList.toggle('show-popup-set-city');
}
let popupCloseCity =  document.getElementById ("button-cansel-city");
popupCloseCity.onclick = function  () {
let popupSetCity = document.getElementById('popup-set-city');
popupSetCity.classList.toggle("show-popup-set-city");
}
}