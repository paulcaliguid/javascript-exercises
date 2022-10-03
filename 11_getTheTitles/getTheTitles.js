const getTheTitles = function(arrayOfObjects) {
    const arrayOfTitles = arrayOfObjects.map(getTitle)
    return arrayOfTitles;
};

function getTitle(object){
    return object.title;
}
// Do not edit below this line
module.exports = getTheTitles;
