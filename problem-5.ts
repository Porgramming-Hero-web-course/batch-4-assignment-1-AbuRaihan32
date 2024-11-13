

const getProperty = <T, X extends keyof T> (Obj : T , propertyName : X) : T[X] =>{
    return Obj[propertyName]
};


const person = {name : 'abu', age : 25}

console.log(getProperty(person, 'name'))