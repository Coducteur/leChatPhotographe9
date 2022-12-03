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
be carefull of the first number (1 or 0)

you will have an array like this:

name_of_array [
  {
    name: namePicture(number1):
    url: `./media/img_maxRez/subDirectory/namePicture(number1)`,
    alt: `some alt you give for all pictures`,
  }
  {
    name: namePicture(number2):
    url: `./media/img_maxRez/subDirectory/namePicture(number2)`,
    alt: `some alt you give for all pictures`,
  }
  {
    name: namePicture(number3):
    url: `./media/img_maxRez/subDirectory/namePicture(number3)`,
    alt: `some alt you give for all pictures`,
  }
  {
    name: namePicture(number4):
    url: `./media/img_maxRez/subDirectory/namePicture(number4)`,
    alt: `some alt you give for all pictures`,
  }
  ...
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
// console.log(animals);
// console.log(cars);
// console.log(nb);
// console.log(paysage);
// console.log(spitzberg);

/* 

==============================================================
|             |              sub                             |
|             |                 menu                         |
| ============| =============================================|
|             |                                              |
|             |                                              |
|             |                                              |
|             |                                              |
|             |        large                                 |
|             |              display                         |
|             |                     Area                     |
|             |                                              |
|             |                                              |
|             |                                              |
|             |                                              |
|             |                                              |
|=============| =============================================|
|             |   all     small                              |
|             |                pictures  carousel            |
==============================================================

*/
/* 
générating small pictures for 1 gallery's pictures:

first we're adding each pictures in the small section area (pictures carousel)
then we listen the mouse click for each pictures. If click, then show the picture in the large display area.

*/
// gallery animals (default gallery)

let animalsPicCarousel = document.querySelector(".animalsGal");
let autoPicCarousel = document.querySelector(".autoGal");
let nbPicCarousel = document.querySelector(".nbGal");
let paysagePicCarousel = document.querySelector(".paysageGal");
let spitzbergPicCarousel = document.querySelector(".spitzbergGal");

if (animalsPicCarousel !== null) {
  for (let i = 0; i < animalsArray.length; i++) {
    let newPicAnimals = document.createElement("img");
    newPicAnimals.src = animalsArray[i].url;
    newPicAnimals.classList = "newImg";
    newPicAnimals.id = animalsArray[i].name;
    newPicAnimals.alt = animalsArray[i].alt;
    animalsPicCarousel.appendChild(newPicAnimals);
  }
} else if (autoPicCarousel !== null) {
  for (let i = 0; i < carsArray.length; i++) {
    let newPicAuto = document.createElement("img");
    newPicAuto.src = carsArray[i].url;
    newPicAuto.classList = "newImg";
    newPicAuto.id = carsArray[i].name;
    newPicAuto.alt = carsArray[i].alt;
    autoPicCarousel.appendChild(newPicAuto);
  }
} else if (nbPicCarousel !== null) {
  for (let i = 0; i < nbArray.length; i++) {
    let newPicNB = document.createElement("img");
    newPicNB.src = nbArray[i].url;
    newPicNB.classList = "newImg";
    newPicNB.id = nbArray[i].name;
    newPicNB.alt = nbArray[i].alt;
    nbPicCarousel.appendChild(newPicNB);
  }
} else if (paysagePicCarousel !== null) {
  for (let i = 0; i < paysageArray.length; i++) {
    let newPicPaysage = document.createElement("img");
    newPicPaysage.src = paysageArray[i].url;
    newPicPaysage.classList = "newImg";
    newPicPaysage.id = paysageArray[i].name;
    newPicPaysage.alt = paysageArray[i].alt;
    paysagePicCarousel.appendChild(newPicPaysage);
  }
} else if (spitzbergPicCarousel !== null) {
  for (let i = 0; i < spitzbergArray.length; i++) {
    let newPicSpitzberg = document.createElement("img");
    newPicSpitzberg.src = spitzbergArray[i].url;
    newPicSpitzberg.classList = "newImg";
    newPicSpitzberg.id = spitzbergArray[i].name;
    newPicSpitzberg.alt = spitzbergArray[i].alt;
    spitzbergPicCarousel.appendChild(newPicSpitzberg);
  }
}

// gallery auto

// let newImg = document.querySelector(".newImg"),
//   test = document.querySelector(".test");

// newImg.addEventListener("click", function () {
//   test.appendChild(newImg);
// });
