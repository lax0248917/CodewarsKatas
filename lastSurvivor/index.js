function lastSurvivor(letters, coords) {

    // get starting index
    var currentIndex = coords[0];

    // take letters and create an array
    var arr = letters.split('');
    console.log(arr);
    //splice to remove specific item from array
    arr.splice(currentIndex, 1);
    console.log(arr);
    // convert the array back into a string
    var newLettersArr = arr;
    var newLetters = newLettersArr.join('');
    console.log(newLetters);

}
lastSurvivor("abcd",[0,1,2]);