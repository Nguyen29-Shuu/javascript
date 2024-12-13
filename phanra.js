const person={
    fname:"Nguyen",
    lname:"Doan",
    ega:50
};
console.log(person.fname+" "+person.lname);
//console.log(fname+" "+lname); bi loi
let{fname,lname}=person;
console.log(lname+" "+fname);
console.log();
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1,,, fruit2] = fruits;
console.log(fruit2+" "+fruit1);
let {[0]:fruit3, [1]:fruit4} = fruits;
console.log(fruit3+" "+fruit4);
console.log();
const so=[1,2,3,4,5,6,7];
let=[a,b,...rest]=so;
console.log(a);
console.log(b);
console.log(rest);
