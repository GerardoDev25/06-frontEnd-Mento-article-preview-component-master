const share = document.getElementById("share");
const share2 = document.getElementById("share-2");
const card = document.getElementById("card");
const cardShare = document.getElementById("cardShare");

// ? evento que se ejecuta al cargar la pagina
document.addEventListener("DOMContentLoaded", () => {
   if (window.innerWidth > 791) {
      cardShare.classList.add("no-active-desktop");
      cardShare.style.top =
         share.getBoundingClientRect().top - 70 + "px";
      cardShare.style.left =
         share.getBoundingClientRect().right - 215 + "px";
   }
});

// ? evento de redimension de la ventana
window.addEventListener("resize", () => {
   if (window.innerWidth > 791) {
      cardShare.style.top =
         share.getBoundingClientRect().top - 70 + "px";
      cardShare.style.left =
         share.getBoundingClientRect().right - 210 + "px";
      card.classList.remove("no-active");
      cardShare.classList.add("no-active-desktop");
   }
});

// ? evento de hacer clic en el boton de compartir
share.addEventListener("click", (e) => {
   e.stopPropagation();
   if (window.innerWidth < 791) {
      card.classList.add("no-active");
      cardShare.classList.remove("no-active-desktop");
   } else {
      cardShare.classList.toggle("no-active-desktop");
   }
});

share2.addEventListener("click", (e) => {
   e.stopPropagation();
   card.classList.remove("no-active");
});
