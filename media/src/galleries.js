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
const animals = [];

for (let i = 1; i <= 28; i++) {
  animals.push({
    name: `animals(${i})`,
    url: `./media/img_maxRez/animaux/animals(${i})`,
    alt: `image d'un animal`,
  });
}

// creating array "cars"
const cars = [];

for (let i = 1; i <= 28; i++) {
  cars.push({
    name: `cars(${i})`,
    url: `./media/img_maxRez/auto/cars(${i})`,
    alt: `image d'une voiture`,
  });
}

// creating array "nb"
const nb = [];

for (let i = 1; i <= 10; i++) {
  nb.push({
    name: `nb(${i})`,
    url: `./media/img_maxRez/N&B/nb(${i})`,
    alt: `image en noir et blanc`,
  });
}

// creating array "paysage"
const paysage = [];

for (let i = 1; i <= 7; i++) {
  paysage.push({
    name: `paysage(${i})`,
    url: `./media/img_maxRez/paysage/paysage(${i})`,
    alt: `image d'un paysage`,
  });
}
// creating array "cars"
const spitzberg = [];

for (let i = 1; i <= 17; i++) {
  spitzberg.push({
    name: `spitzberg(${i})`,
    url: `./media/img_maxRez/spitzberg/spitzberg(${i})`,
    alt: `image du spitzberg`,
  });
}
console.log(animals);
// console.log(cars);
// console.log(nb);
// console.log(paysage);
// console.log(spitzberg);
