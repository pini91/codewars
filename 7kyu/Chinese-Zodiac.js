// The Chinese zodiac is a repeating cycle of 12 years, with each year being represented by an animal and its reputed attributes. The lunar calendar is divided into cycles of 60 years each, and each year has a combination of an animal 
//and an element. There are 12 animals and 5 elements; the animals change each year, and the elements change every 2 years. The current cycle was initiated in the year of 1984 which was the year of the Wood Rat.

// Since the current calendar is Gregorian, I will only be using years from the epoch 1924. For simplicity I am counting the year as a whole year and not from January/February to the end of the year.

// ##Task

// Given a year, return the element and animal that year represents ("Element Animal"). For example I'm born in 1998 so I'm an "Earth Tiger".

// animals (or $animals in Ruby) is a preloaded array containing the animals in order:

// ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']

// elements (or $elements in Ruby) is a preloaded array containing the elements in order:

// ['Wood', 'Fire', 'Earth', 'Metal', 'Water']

// Tell me your zodiac sign and element in the comments. Happy coding :)

function chineseZodiac(year){
    const animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    const elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
    // const baseYear = 1924;
    // const givenYear = year - baseYear;
    // const element = elements[(Math.floor(givenYear/2)%5)];
    // const animal = animals[givenYear % 12];
    // return element + " " + animal;

    //OR
    // let animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']
    // let elements = ['Wood', 'Wood', 'Fire', 'Fire', 'Earth', 'Earth', 'Metal', 'Metal', 'Water', 'Water']

    // let baseYear = year - 1924;
    // console.log(baseYear)
    // let animalIndex = baseYear % 12;//The Chinese zodiac is a repeating cycle of 12 years
    // console.log(animalIndex)
    // let elementsIndex = baseYear % 10;
    // console.log(elementsIndex)

    //return elements[elementsIndex]+ ' ' +animals[animalIndex];


    //OR 
    let current = year - 1924; //how many years between 1924 and the given year
 
    let animal = Math.floor(current%12); //The Chinese zodiac is a repeating cycle of 12 years --% gets the reminder
    let element = Math.floor((current/2)%5);//element chanfe every 2 years and there is 5 elements

    return `${elements[element]} ${animals[animal]}`;


  }

  console.log(chineseZodiac(1991))