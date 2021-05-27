const share = document.getElementById("share");

share.addEventListener("click", (e) => {
   e.stopPropagation();
   console.log(e.target);
});
