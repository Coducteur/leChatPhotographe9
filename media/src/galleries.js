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
// creating array "cars"
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
let animalsPicCarousel = document.querySelector(".animalsGal");
(autoPicCarousel = document.querySelector(".autoGal")),
  (nbPicCarousel = document.querySelector(".nbGal")),
  (paysagePicCarousel = document.querySelector(".paysageGal")),
  (spitzbergPicCarousel = document.querySelector(".spitzbergGal"));

function addingImgCarrousel(nameOfGalleryCarousel, nameOfArray) {
  for (let i = 0; i < nameOfArray.length; i++) {
    let newPicInCarousel = document.createElement("img");
    newPicInCarousel.src = nameOfArray[i].url;
    newPicInCarousel.id = nameOfArray[i].name;
    newPicInCarousel.alt = nameOfArray[i].alt;
    newPicInCarousel.classList = "imgGenerate";
    nameOfGalleryCarousel.appendChild(newPicInCarousel);
  }
}

/* show pictures in the main "large display area" */
function showPictureLarge(nameOfArray) {
  let mainDisplay = document.querySelector(".mainDisplay"),
    displayFullRes = document.createElement("img"),
    number = 0;
  //
  displayFullRes.src = nameOfArray[number].url;
  mainDisplay.appendChild(displayFullRes);

  function changingPictures() {
    if (number++ >= nameOfArray.length - 1) {
      number = 0;
    }
    displayFullRes.src = nameOfArray[number].url;
    mainDisplay.appendChild(displayFullRes);
  }
  setInterval(changingPictures, 5000);
}

function closeBtn() {
  const divFullScreen = document.querySelector(".fullScreen");
  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.class = "closeBtn";
  closeBtn.id = "closeBtnPic";
  closeBtn.value = "close Picture";
  divFullScreen.appendChild(closeBtn);
  closeBtn.innerHTML = "Fermer";
}

/* function: show small picture in full screen.*/

function showPicFS(nameOfArray) {
  const largePic = document.querySelectorAll(".imgGenerate");
  const divFullScreen = document.querySelector(".fullScreen");
  for (let index = 0; index < largePic.length; index++) {
    largePic[index].onclick = function () {
      let exist = document.querySelector(".exist");
      console.log(exist);
      if (exist === null) {
        const imgDivFullScreen = document.createElement("img");
        imgDivFullScreen.src = nameOfArray[index].url;
        imgDivFullScreen.alt = nameOfArray[index].alt;
        imgDivFullScreen.id = nameOfArray[index].name;
        imgDivFullScreen.classList.add("divFullScreen");
        divFullScreen.appendChild(imgDivFullScreen);
        divFullScreen.style.zIndex = "10000";
        imgDivFullScreen.classList.add("exist");
        exist = document.querySelector(".exist");
        closeBtn();
      } else {
        exist = document.querySelector(".exist");
        divFullScreen.style.zIndex = "-10000";
        exist.remove();
      }
    };
  }
}

// we test on witch page of galleries we're on
// then 1st: small pictures in column to générate.
// 2st: large pictures with 5s before changing in large display zone
// and 3st: click on small pic on the right show the picture un full screen. re click to close the pic un full screen.
if (animalsPicCarousel !== null) {
  addingImgCarrousel(animalsPicCarousel, animalsArray);
  showPictureLarge(animalsArray);
  showPicFS(animalsArray);
} else if (autoPicCarousel !== null) {
  addingImgCarrousel(autoPicCarousel, carsArray);
  showPictureLarge(carsArray);
  showPicFS(carsArray);
} else if (nbPicCarousel !== null) {
  addingImgCarrousel(nbPicCarousel, nbArray);
  showPictureLarge(nbArray);
  showPicFS(nbArray);
} else if (paysagePicCarousel !== null) {
  addingImgCarrousel(paysagePicCarousel, paysageArray);
  showPictureLarge(paysageArray);
  showPicFS(paysageArray);
} else if (spitzbergPicCarousel !== null) {
  addingImgCarrousel(spitzbergPicCarousel, spitzbergArray);
  showPictureLarge(spitzbergArray);
  showPicFS(spitzbergArray);
}
