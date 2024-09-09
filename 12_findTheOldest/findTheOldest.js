const getAge = function (person) {
    return (person.yearOfDeath ??= new Date().getFullYear()) - person.yearOfBirth;
}

const findTheOldest = function (people) {
    return people.toSorted((a, b) => {
        if (getAge(a) > getAge(b)) {
            return -1;
        } else {
            return 1;
        }
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
