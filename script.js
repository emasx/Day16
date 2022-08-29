// Arrow function = is a special form of function expression that is shorter and therefore faster to write.

// function expression

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);






const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1994,'Emas'));



// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3'

const percentageOfWorld3 = population => (population / 7900) * 100;

const percPortugal = percentageOfWorld3(10);
const percRomania = percentageOfWorld3(19);
const perUSA = percentageOfWorld3(332);
console.log(percPortugal,percRomania,perUSA);
