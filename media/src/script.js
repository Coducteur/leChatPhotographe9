/* =====================================================
common pages 
 =====================================================*/

/* =====================================================
end of common pages 
 =====================================================*/

 /* =====================================================
 page presentation.html 
 =====================================================*/

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++
display div with texts when click on first img or second img 
++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function toggleArticle() {
    /*display div*/
    onMouseOver.classList.toggle("visible");
    /* erasing right content */
    gridContainerMainArticle1.classList.toggle("invisible");
    gridContainerMainArticle2.classList.toggle("invisible");
    };
/* declaring variables*/
    /* img class click */
const whoIAm = document.querySelector("#who-i-am");
const matos = document.querySelector("#matos");
    /*articles extent contents  */
const onMouseOver = document.querySelector(".on-mouseOver");
const onMouseOver2 = document.querySelector(".on-mouseOver2");
    /* variables for show or hide extent content*/
const gridContainerMainArticle1 = document.querySelector(
  ".gridContainer-mainArticle1"
);
const gridContainerMainArticle2 = document.querySelector(
  ".gridContainer-mainArticle2"
);



/* listening actions first article (click on img)*/
whoIAm.addEventListener("click", function () {
    toggleArticle();
});
/* listening actions second article (click on img)*/
matos.addEventListener("click", function () {
  onMouseOver2.classList.toggle("visible");
});
/* end of display div when click on first img or second img */
/*close div*/
const btnCloseDiv = document.querySelector(".btn-close-div");
btnCloseDiv.addEventListener("click", function () {
    toggleArticle();
});


 /* =====================================================
 end of page presentation.html 
 =====================================================*/
