/* =====================================================
 page presentation.html 
 =====================================================*/

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++
display div with texts when click on first img or second img 
++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
function toggleArticle(element) {
  /*display div*/
  element.classList.toggle("visible");
  /* hide right content */
  gridContainerMainArticle1.classList.toggle("invisible");
  gridContainerMainArticle2.classList.toggle("invisible");
}

/* declaring variables*/
// img class click (x2)
// articles extent contents (x2)
// variables for show or hide extent content (x2)
const firsImgPrez = document.querySelector("#first-img-prez"),
  secondImgPrez = document.querySelector("#second-img-prez"),
  onMouseOver = document.querySelector(".on-mouseOver"),
  onMouseOver2 = document.querySelector(".on-mouseOver2"),
  gridContainerMainArticle1 = document.querySelector(
    ".gridContainer-mainArticle1"
  ),
  gridContainerMainArticle2 = document.querySelector(
    ".gridContainer-mainArticle2"
  );

/* listening actions first article (click on img)*/
firsImgPrez.addEventListener("click", function () {
  toggleArticle(onMouseOver);
});
/* listening actions second article (click on img)*/
secondImgPrez.addEventListener("click", function () {
  toggleArticle(onMouseOver2);
});
/* end of display div when click on first img or second img */

/* closing windows extent content via button x */
/* 1st div */
const btn1CloseDiv = document.querySelector("#btn1-close-div");
btn1CloseDiv.addEventListener("click", function () {
  toggleArticle(onMouseOver);
});
/* 2de div */
const btn2CloseDiv = document.querySelector("#btn2-close-div");
btn2CloseDiv.addEventListener("click", function () {
  toggleArticle(onMouseOver2);
});

/* =====================================================
 end of page presentation.html 
 =====================================================*/
