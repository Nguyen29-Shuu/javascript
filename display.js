const person={
    name:"Nguyen",
    age:"20",
    city:"HCM"
}
//Hien thi theo vong lap
let txt="";
for(let x in person){
    txt+=person[x]+" "; 
}
console.log(txt);
//Su dung Object.values()
const Ar=Object.values(person);
console.log(Ar);
//Su dung Object.entries
let txt1="";
for(let[key,value] of Object.entries(person)){
    txt1+=key+":"+value+" ";
}
console.log(txt1);
//Su dung JSON.stringify()
let str=JSON.stringify(person);
console.log(str);
