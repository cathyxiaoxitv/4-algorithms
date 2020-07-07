let sort = arr=>{
    if (arr.length <= 1) {
        return arr
    }
    let pivotIndex = Math.floor((arr.length) / 2)
    let pivot = arr.splice(pivotIndex, 1)[0];
    //注意splice用法
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
            console.log(`left:${left}`)
        } else {
            right.push(arr[i])
            console.log(`right:${right}`)

        }
    }
    return sort(left).concat([pivot], sort(right))
}
sort.call(null,[4,2,3,1,5])
