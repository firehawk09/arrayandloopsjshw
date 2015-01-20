/**
*
*/




function getAverageTime(person) {
    "use strict";

    for (var sum = 0, i = 1; i <= 5; i++) {
        sum += person["finishingTime" + i];
    }

    return sum;
}

function getAverageTime2(person) {
    "use strict";

    var sum = 0;

    var length = Object.keys(person).length;

    for (var bob in person) {
        sum += person[bob];
    }

    return sum / length;
}

/// Object.keas way
function getAverageTime3(person) {
    "use strict";

    var keys = Object.keys(person);

    for (var sum = 0, i = 0; i < keys.length; i += 1) {
        sum += person[keys[i]]
    }

}

function getAverageTime4(person) {
    "use strict";

    var keys = Object.keys(person),
        sum = 0;

    keys.forEach(function(value, index) {
        sum += person[value];
    });

    return sum / keys.length;
}


var matt = {
    finishingTime1: 240, //in minutes
    finishingTime2: 210.4,
    finishingTime3: 235.1,
    finishingTime4: 208.9,
    finishingTime5: 197.5,
    asdasdas: 250.5,
    asdasdasdasdas: 350.5
};

console.log(getAverageTime4(matt));
