let x=10;
function thapnhi(a){
    return(a>>>0).toString(2);
}
console.log(thapnhi(x));
let y=1010;
function nhithap(a){
    return parseInt(a,2).toString(10);
}
console.log(nhithap(y));