
type RemoveDuplicate = (params : number[]) => number[];

const removeDuplicates : RemoveDuplicate = (params) =>{

    let newArr : number[] = [];

    for(let elem of params){
        if(!newArr.includes(elem)){
            newArr.push(elem)
        }
    }

    console.log(newArr);
    return newArr
}


removeDuplicates([1,2, 2, 11, 12])