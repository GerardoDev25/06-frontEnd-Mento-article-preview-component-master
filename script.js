const share = document.getElementById("share");
const share2 = document.getElementById("share-2");
const card = document.getElementById("card");

share.addEventListener("click", (e) => {
   e.stopPropagation();
   // console.log(e.target);
   card.classList.add("no-active");
});

share2.addEventListener("click", (e) => {
   e.stopPropagation();
   card.classList.remove("no-active");

});
