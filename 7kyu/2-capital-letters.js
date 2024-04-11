// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output it should look like this:
// Sam Harris => S.H
// patrick feeney => P.F


function abbrevName(name){
    return name.split(/ /g).map(element=>element[0].toUpperCase()).join('.');
}
