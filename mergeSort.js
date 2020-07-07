let sort = arr =>{
    let k = arr.length
    if (k !== 1) {
        let left = arr.slice(0, Math.floor(k / 2))
        console.log(`left:${left}`)
        let right = arr.slice(Math.floor(k / 2))
        console.log(`right:${right}`)
        return merge(sort(left), sort(right))
    }else{
        return arr
    }
}

let merge = (a,b) =>{
    if(a.length === 0)return b
    if(b.length === 0)return a
    return a[0] < b[0] ?
        [a[0]].concat(merge(a.slice(1),b)):[b[0]].concat(merge(a,b.slice(1)))
}

sort.call(null,[4,5,2,1,3])
