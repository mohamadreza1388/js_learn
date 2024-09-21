'use strict'

var list = [1,10,2,102]

var max = list.reduce((last, current) => {
    return current+last
}, 0)

console.log(max);
