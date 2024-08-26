const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item), args);
};

// Do not edit below this line
module.exports = removeFromArray;
