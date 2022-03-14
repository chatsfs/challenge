var numbers = [3, 5, 6, 11, 13];
var target = 19;
function findPair(pool, target) {
    var tempMap = {};
    var result = [0, 0];
    for (var i = 0; i < pool.length; i++) {
        if (tempMap[pool[i]]) {
            result = [target - pool[i], pool[i]];
            break;
        }
        tempMap[target - pool[i]] = 1;
    }
    return result;
}
console.log(findPair(numbers, target));
