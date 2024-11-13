{
   //
   
   const validateKeys = <T extends object> (obj: {}, keys: (keyof T)[]) => {
        const objKeys = Object.keys(obj)
        return keys.every(key => objKeys.includes(key as string))
    }
    
    const person = { name: "Alice", age: 25 };
    console.log(validateKeys(person, ["name", "age"]));
    console.log(validateKeys(person, ["name", "email"]));
     
   
   
   //
}