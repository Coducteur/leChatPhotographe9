/* =====================================================
common pages 
 =====================================================*/

/* =====================================================
end of common pages 
 =====================================================*/

/* 

/* 

/* 


=====================================================
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
/* img class click */
const firsImgPrez = document.querySelector("#first-img-prez");
const secondImgPrez = document.querySelector("#second-img-prez");
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
firsImgPrez.addEventListener("click", function () {
  toggleArticle(onMouseOver);
});
/* listening actions second article (click on img)*/
secondImgPrez.addEventListener("click", function () {
  toggleArticle(onMouseOver2);
});
/* end of display div when click on first img or second img */

/* closing windows extent content via button x */
/* 1e div */
const btn1CloseDiv = document.querySelector("#btn1-close-div");
btn1CloseDiv.addEventListener("click", function () {
  toggleArticle(onMouseOver);
});
/* 2e div */
const btn2CloseDiv = document.querySelector("#btn2-close-div");
btn2CloseDiv.addEventListener("click", function () {
  toggleArticle(onMouseOver2);
});

/* =====================================================
 end of page presentation.html 
 =====================================================*/
