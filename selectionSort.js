let min_num = numbers =>{
    if(numbers.length > 2){
        return min_num([numbers[0],min_num(numbers.slice(1))])
    }else{
        return numbers[0]< numbers[1]? numbers[0]:numbers[1];
    }
}


let sort = numbers =>{

    if(numbers.length > 2){
        let min = min_num(numbers);
        let minIndex = numbers.indexOf(min);
        numbers.splice(minIndex,1)
        return [min].concat(sort(numbers))
    }else{
        return numbers[0]< numbers[1]? numbers:numbers.reverse();
    }
}
sort.call(null,[4,2,5,3])







