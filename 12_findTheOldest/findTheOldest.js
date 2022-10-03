const findTheOldest = function(people) {
    return people.reduce(findOldest, null);
};

function findOldest(oldest, current) {
    if(!oldest && !current) return null;

    if(!oldest) return current;

    if(!('yearOfDeath' in current)) {
        current.lastYearBasis = new Date().getFullYear();
    } else {
        current.lastYearBasis = current.yearOfDeath;
    }

    if(!('yearOfDeath' in oldest)) {
        oldest.lastYearBasis = new Date().getFullYear();
    } else {
        oldest.lastYearBasis = oldest.yearOfDeath
    }

    if ((current.lastYearBasis - current.yearOfBirth) >= (oldest.lastYearBasis - oldest.yearOfBirth)) {
        return current;
    } else {
        return oldest;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
