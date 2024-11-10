
type SumArray = (params : number[]) => number;

const sumArray : SumArray = (params)=>{
    let sum = 0;
    params.forEach(elem => sum = sum + elem);
    console.log(sum);
    return sum
}


sumArray([10, 20])