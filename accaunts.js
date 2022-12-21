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


let penIconTable2 = document.getElementsByClassName("pen-icon-table2");
for (i = 0; penIconTable2.length > i; i++) {
  penIconTable2[i].onclick = function() {
  let popupSetCity = document.getElementById('popup-set-city');
  popupSetCity.classList.toggle('show-popup-set-city');
}
let popupCloseCity =  document.getElementById ("button-cansel-city");
popupCloseCity.onclick = function  () {
let popupSetCity = document.getElementById('popup-set-city');
popupSetCity.classList.toggle("show-popup-set-city");
}
}

let penIconTableUsers = document.getElementsByClassName("pen-icon-users");
for (i = 0; penIconTableUsers.length > i; i++) {
  penIconTableUsers[i].onclick = function() {
  let popupSetUsers = document.getElementById('popup-users');
  popupSetUsers.classList.toggle('show-popup-users');
}
let popupCloseUsers =  document.getElementById ("button-cansel-users");
popupCloseUsers.onclick = function  () {
let popupSetUsers = document.getElementById('popup-users');
popupSetUsers.classList.toggle("show-popup-users");
}
}

let trashIconUsers = document.getElementsByClassName("trash-icon-users");
for (i = 0; trashIconUsers.length > i; i++) {
  trashIconUsers[i].onclick = function() {
    let popupDelete = document.getElementById('popupDelete');
    popupDelete.classList.toggle('show');
  }
  let popupClose = document.getElementById ("popup-delete");
  popupClose.onclick = function  () {
  let popup = document.getElementById('popupDelete');
  popup.classList.toggle("show");
}
}

let penIconNotif = document.getElementsByClassName("pen-icon-notif");
for (i = 0; penIconNotif.length > i; i++) {
  penIconNotif[i].onclick = function() {
  let popupNotif = document.getElementById('popup-notif');
  popupNotif.classList.toggle('show-popup-notif');
}
let popupCloseNotif =  document.getElementById ("button-cansel-notif");
popupCloseNotif.onclick = function  () {
let popupNotif = document.getElementById('popup-notif');
popupNotif.classList.toggle("show-popup-notif");
}
}

let penIconClock = document.getElementsByClassName("pen-icon-clock");
for (i = 0; penIconClock.length > i; i++) {
  penIconClock[i].onclick = function() {
  let popupSetClock = document.getElementById('popup-set-clock');
  popupSetClock.classList.toggle('show-popup-set-clock');
}
let popupCloseClock =  document.getElementById ("button-cansel-clock");
popupCloseClock.onclick = function  () {
let popupSetClock = document.getElementById('popup-set-clock');
popupSetClock.classList.toggle("show-popup-set-clock");
}
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

function openTableMenu(evt, tableName, headerName) {
 
  var i, tableScreen, headerScreen, tablinks;
  tableScreen = document.getElementsByClassName("table-screen");
  for (i = 0; i < tableScreen.length; i++) {
    tableScreen[i].style.display = "none";
  }
  headerScreen = document.getElementsByClassName("city-and-filter");
  for (i = 0; i < headerScreen.length; i++) {
    headerScreen[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active-direction", "");
  }

  document.getElementById(tableName).style.display = "block";
  document.getElementById(headerName).style.display = "flex";
  evt.currentTarget.className += "active-direction";
}