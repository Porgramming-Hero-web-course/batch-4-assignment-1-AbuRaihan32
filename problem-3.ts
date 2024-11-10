type CountWordOccurrences = (params1 : string, params2 : string) => number ;

const countWordOccurrences : CountWordOccurrences = (sentence, word) =>{
    const arr = sentence.toLowerCase().split(' ');
    
    const wordCount = arr.filter(elem => elem === word.toLowerCase()).length

    return wordCount
}

console.log(countWordOccurrences('hello abul kalam Hello', 'hello'))