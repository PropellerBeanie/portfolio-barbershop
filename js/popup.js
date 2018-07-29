var login_link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var popup_overlay = document.querySelector(".modal-overlay")
var close = popup.querySelector(".modal-content-close");

var login_input = popup.querySelector("[name=login]");
var password_input = popup.querySelector("[name=password]");
var popup_login_form = popup.querySelector("form")
var login_storage = localStorage.getItem("user_login");
// popup-map var
var mapPopup = document.querySelector(".modal-content-map");
var mapLink = document.querySelector(".js-map-popup");
var mapClose = mapPopup.querySelector(".modal-content-close");
// var mapCloseArray = [popup_overlay, mapClose];
var popup_close_array = [popup_overlay, close, mapClose];
// popup-map open on click
mapLink.addEventListener("click", function(event) {
  event.preventDefault();
  popup_overlay.classList.add("modal-overlay-show");
  mapPopup.classList.add("modal-content-map-show");
});

// popup open on click
login_link.addEventListener("click", function(event) {
  event.preventDefault();
  popup_overlay.classList.add("modal-overlay-show");
  popup.classList.add("modal-content-show");
  if (login_storage) {
    login_input.value = login_storage;
    password_input.focus();
  } else {
    login_input.focus();
  }
});

// popup close on click
popup_close_array.forEach(function(element) {
  element.addEventListener("click", function(event) {
    event.preventDefault();
    popup_overlay.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    mapPopup.classList.remove("modal-content-map-show");
  });
});

// login submit
popup_login_form.addEventListener("submit", function(event) {
  if (!login_input.value || !password_input.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    void popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("user_login", login_input.value);
  }
});

// popup close on esc
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup_overlay.classList.remove("modal-overlay-show");
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});
