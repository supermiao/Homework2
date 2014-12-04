function map(arr, iter, context){
    if (arr == null) {
        return [];
    };
    iter = _.iteratee(iter, context);
    len = arr.length;
    result = Array(len);
    for (var i = 0; i < len; i++) {
        result[i] = iter(arr[i], i, arr)
    };
    return result;
}

function filter(arr, predicate, context){
    result = [];
    if (arr == null) {
        return result;
    };
    predicate = _.iteratee(predicate, context);
    _.each(arr, function(value, index, list){
        if (predicate(value, index, list)) {result.push(value)};
    })
    return result;
}