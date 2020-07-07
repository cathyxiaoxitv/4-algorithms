let sort = arr => {
    let max = 0,hashTable= {},result = []
    //首先通过遍历数组创建哈希表
    for (let i = 0; i < arr.length; i++) {
        //判断if的用句还不熟悉👇
        if (!(arr[i] in hashTable)) {
            hashTable[arr[i]] = 1
        } else {
            hashTable[arr[i]] += 1
        }
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    //遍历哈希表
    for(let j=0;j<=max;j++){
        if(j in hashTable){
            for(let i = 0;i <hashTable[j];i++){
                result.push(j)
                //要考虑j出现多次的情况，value是几，就push几次
            }
        }
    }
    return result
}
sort.call(null,[6,7,7,10,8])
