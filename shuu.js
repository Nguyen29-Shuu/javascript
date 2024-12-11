let txt;
switch(new Date().getDay()){
    case 0:
    case 6:
        txt="Cuối tuần rồi, YEAHHHH!";
        break;
    case 3:
        txt="Hôm nay la thứ 4";
        break;
    default:
        txt="Đi học huhu";
}
console.log(txt);
const chan=[];
const le=[];
let temp;
for(let i=0;i<=10;i++)
{
    temp=i%2;
    switch(temp){
        case 0:
            chan.push(i);
            break;
        default:
            le.push(i);
    }
}
console.log(chan.toString());
console.log(le.toString());
function ktra(x){
    if(x<2)
    {
        return false;
    }
    for(let i=2;i<x/2;i++)
    {
        if(x%i==0)
            return false;
    }
    return true;
}
const snt=[];
for(let i=0;i<=100;i++)
{
    if(ktra(i)==true)
    {
        snt.push(i);
    }
}
console.log(snt.toString());
const person=[
    {name:"Nguyen",age:20},
    {name:"D",age:18},
    {name:"A",age:2},
    {name:"E",age:50},
    {name:"W",age:29},
    {name:"B",age:13}
]
person.sort(function(a,b){
    let x=a.name.toLowerCase();
    let y=b.name.toLowerCase();
    if(x>y){return 1;};
    if(y>x){return -1;};
    return 0;
})
display(person);
function display(a) {
    for (let i of a) {
        console.log(i.name + " " + i.age);
    }
}
let i=0;
txt="";
while(person[i]){
    if(person[i].name=="Nguyen"){
        console.log(person[i].name+" "+person[i].age);
        break;
    }
    i++;
}
console.log();