// =====================================================
// galleries pages
//  =====================================================*/

/* 
creating an array for 1 gallerie of pictures:
pictures must be in 1 sub-directory and be named like: NamePicture(number).

name of array = next to sub-directory's name.
let create an empty array and push each pictures in with a loop:

we're adding each picture in the array as an object with:
  name:  "namePicture(number)"
  url:   `./media/img_maxRez/sub-directory/namePicture(number)
  alt:  "same alt for all pictures"
  
loop for: i = number of the picture in the directory 
>> the i argument = lenght of the array and must be changed if adding some new pictures.
be carefull of the first number with the name of your first picture(1 or 0)

you will have an array like this:

name_of_array [
  {
    name: namePicture(number1):
    url: `./media/img_maxRez/subDirectory/namePicture(number1)`,
    alt: `some alt you give for all pictures`,
  }
 ... (X number of photos)
]

explications for inserting pictures in the html pages are belows.
*/

// creating array "animals"
const animalsArray = [];

for (let i = 1; i <= 28; i++) {
  animalsArray.push({
    name: `animals(${i})`,
    url: `./media/img_maxRez/animaux/animals(${i}).jpg`,
    alt: `image d'un animal`,
  });
}

// creating array "cars"
const carsArray = [];

for (let i = 1; i <= 28; i++) {
  carsArray.push({
    name: `cars(${i})`,
    url: `./media/img_maxRez/auto/cars(${i}).jpg`,
    alt: `image d'une voiture`,
  });
}

// creating array "nb"
const nbArray = [];

for (let i = 1; i <= 10; i++) {
  nbArray.push({
    name: `nb(${i})`,
    url: `./media/img_maxRez/N&B/n&b(${i}).jpg`,
    alt: `image en noir et blanc`,
  });
}

// creating array "paysage"
const paysageArray = [];

for (let i = 1; i <= 7; i++) {
  paysageArray.push({
    name: `paysage(${i})`,
    url: `./media/img_maxRez/paysage/paysage(${i}).jpg`,
    alt: `image d'un paysage`,
  });
}
// creating array "spitzberg"
const spitzbergArray = [];

for (let i = 1; i <= 17; i++) {
  spitzbergArray.push({
    name: `spitzberg(${i})`,
    url: `./media/img_maxRez/spitzberg/spitzberg(${i}).jpg`,
    alt: `image du spitzberg`,
  });
}
/* 

=======================================================================
|             |              sub                                      |
|             |                 menu                                  |
| ============| =============================================|========|
|             |                                              |        |
|             |                                              | small  |
|             |                                              |  img   |
|             |                                              |        |
|             |        large                                 |   in   |
|             |              display                         |carousel|
|             |                     Area                     |        |
|             |                                              |        |
|             |                                              |        |
|             |                                              |        |
|             |                                              |        |
|             |                                              |        |
|=============|=======================================================|
|             |                                                       |
|             |                                                       | 
=======================================================================

*/
/* 
générating small pictures for 1 gallery's pictures:
*/

// we're adding each pictures in the small section area (pictures carousel)
let animalsSmallPic = document.querySelector(".animalsGal");
(autoSmallPic = document.querySelector(".autoGal")),
  (nbSmallPic = document.querySelector(".nbGal")),
  (paysageSmallPic = document.querySelector(".paysageGal")),
  (spitzbergSmallPic = document.querySelector(".spitzbergGal"));

function addingSmallRightImg(galOfsmallPic, nameOfArray) {
  for (let i = 0; i < nameOfArray.length; i++) {
    let newSmallPic = document.createElement("img");
    newSmallPic.src = nameOfArray[i].url;
    newSmallPic.id = nameOfArray[i].name;
    newSmallPic.alt = nameOfArray[i].alt;
    newSmallPic.classList = "imgGenerate";
    galOfsmallPic.appendChild(newSmallPic);
  }
}

/* show pictures in the main "large display area" */
function showPictureLarge(nameOfArray) {
  let mainDisplay = document.querySelector(".mainDisplay"),
    displayNormalPic = document.createElement("img"),
    index = 0;
  displayNormalPic.src = nameOfArray[index].url;
  mainDisplay.appendChild(displayNormalPic);
  function changingPictures() {
    if (index++ >= nameOfArray.length - 1) {
      index = 0;
    }
    displayNormalPic.src = nameOfArray[index].url;
    mainDisplay.appendChild(displayNormalPic);
  }
  setInterval(changingPictures, 5000);
}

function closeBtn() {
  const insertBtn = document.querySelector(".insertBtn");
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.class = "closeBtn";
  closeBtn.id = "closeBtnPic";
  closeBtn.value = "close Picture";
  closeBtn.style.fontSize = "1.5em";
  insertBtn.appendChild(closeBtn);
  closeBtn.classList.add("exist");
  closeBtn.textContent = "Fermer" + " l'image";
}

/* function: click on picture = show in full screen.*/

function showPicGiant(nameOfArray) {
  const GiantPic = document.querySelectorAll(".imgGenerate");
  const divFullScreen = document.querySelector(".fullScreen");

  for (let index = 0; index < GiantPic.length; index++) {
    GiantPic[index].onclick = function () {
      let exist = document.querySelector(".exist");
      // const listenCloseBtn = document.querySelector("#clseBtnPic");
      if (exist === null) {
        const imgGiant = document.createElement("img");
        imgGiant.src = nameOfArray[index].url;
        imgGiant.alt = nameOfArray[index].alt;
        imgGiant.id = nameOfArray[index].name;
        imgGiant.classList.add("divFullScreen");
        divFullScreen.appendChild(imgGiant);
        divFullScreen.style.zIndex = "10000";
        imgGiant.classList.add("exist");
        closeBtn();
      } else if (exist !== null ) {
        exist = document.querySelector(".exist");
        let clseBtn = document.querySelector("#closeBtnPic");
        divFullScreen.style.zIndex = "-10000";
        exist.remove();
        clseBtn.remove();
      }
    };
  }

  // const listenCloseBtn = document.querySelector("#clseBtnPic");
  // listenCloseBtn.onclick = function () {
  //   exist = document.querySelector(".exist");
  //   let clseBtn = document.querySelector("#closeBtnPic");
  //   divFullScreen.style.zIndex = "-10000";
  //   exist.remove();
  //   clseBtn.remove();
  // };
}

// we test on witch page of galleries we're on
// then 1st: small pictures in column to générate.
// 2st: large pictures with 5s before changing in large display zone
// and 3st: click on small pic on the right show the picture un full screen. re click to close the pic un full screen.
if (animalsSmallPic !== null) {
  addingSmallRightImg(animalsSmallPic, animalsArray);
  showPictureLarge(animalsArray);
  showPicGiant(animalsArray);
} else if (autoSmallPic !== null) {
  addingSmallRightImg(autoSmallPic, carsArray);
  showPictureLarge(carsArray);
  showPicGiant(carsArray);
} else if (nbSmallPic !== null) {
  addingSmallRightImg(nbSmallPic, nbArray);
  showPictureLarge(nbArray);
  showPicGiant(nbArray);
} else if (paysageSmallPic !== null) {
  addingSmallRightImg(paysageSmallPic, paysageArray);
  showPictureLarge(paysageArray);
  showPicGiant(paysageArray);
} else if (spitzbergSmallPic !== null) {
  addingSmallRightImg(spitzbergSmallPic, spitzbergArray);
  showPictureLarge(spitzbergArray);
  showPicGiant(spitzbergArray);
}
