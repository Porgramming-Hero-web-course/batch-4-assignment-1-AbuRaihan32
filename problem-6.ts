
interface Profile {
    name : string;
    email : string;
    age : number;
}


type PartialProfile = Partial<Profile>;


const updateProfile = (Obj1 : Profile, Obj2 : PartialProfile ) : Profile =>{
    return {
        ...Obj1,
        ...Obj2
    }
}


const myProfile = { name: "abu", age: 25, email: "abu@example.com" };
console.log(updateProfile(myProfile, { name : 'mahfuz' }));