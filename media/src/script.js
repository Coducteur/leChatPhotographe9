/* page presentation.html */

/* display div with texts when click on first img or second img */
const whoIAm = document.querySelector("#who-i-am");
const onMouseOver = document.querySelector(".on-mouseOver");
const matos = document.querySelector("#matos");
const onMouseOver2 = document.querySelector(".on-mouseOver2");
const gridContainerMainArticle1 = document.querySelector(
  ".gridContainer-mainArticle1"
);
const gridContainerMainArticle2 = document.querySelector(
  ".gridContainer-mainArticle2"
);
whoIAm.addEventListener("click", function () {
  /*display div*/
  onMouseOver.classList.toggle("visible");
  /* erasing right content */
  gridContainerMainArticle1.remove();
  gridContainerMainArticle2.remove();
});
matos.addEventListener("click", function () {
  onMouseOver2.classList.toggle("visible");
});
/* end of display div when click on first img or second img */
