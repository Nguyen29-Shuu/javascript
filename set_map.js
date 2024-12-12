const letters=new Set(["a","b","c"]);
function In(x)
{
    for(let x of letters)
        {
            console.log(x);
        }
}
letters.add("d");
//In(letters);
console.log("So luong phan tu:"+letters.size);
if(letters.has("d")==true){
    console.log("co trong Set");
}
else{
    console.log("ko co");
}
letters.forEach(function(value){
    console.log(value);
})
console.log();
console.log("Maps");
const traicay=new Map([
    ["banana",100],
    ["apple",500],
    ["kiwi",300]
]);
traicay.set("orange",600);
console.log(traicay.get("banana"));
for(let x of traicay.keys()){
    console.log(x);
}
traicay.delete("kiwi");
if(traicay.has("kiwi")==true)
{
    console.log("co");
}
else{
    console.log("ko");
}
for(let x of traicay.keys()){
    console.log(x);
}
console.log();
const fruits = [
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
];
function sl({quantity}){
    return quantity>200?"ok":"low";
}
const rs=Map.groupBy(fruits,sl);
console.log("Trai cay co so luong tren 200");
for(let x of rs.get("ok")){
    console.log(x.name+" "+x.quantity);
}
console.log("Trai cay co so luong tu 200 do xuong");
for(let x of rs.get("low")){
    console.log(x.name+" "+x.quantity);
}