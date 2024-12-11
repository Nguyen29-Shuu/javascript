const person={
    name: "Nguyen",
    age:20,
    school:[
        {name:"Cap1",lop:["1","2","3","4","5"]},
        {name:"Cap2",lop:["6","7","8","9"]},
        {name:"Cap3",lop:["10","11","12"]}
    ]
}

for(let i in person.school){
    console.log(person.school[i].name+":");
    for(let j in person.school[i].lop){
        console.log(person.school[i].lop[j]+" ");
    }
}
//
console.log(person.school[0].lop.toString());//in tra dưới dạng chuỗi cách nhau bơi dấu ","
console.log(person.school[0].lop.at(2));//lấy phần tử thứ 3 của lớp
console.log(person.school[0].lop.join("="));//giống như toString(), ngoài ra có chỉ định dấu ngăn ở giữa ở các đối tượng
console.log(person.school[0].lop.pop());//xóa phaanf tử cuối cùng
console.log(person.school[0].lop.toString());
console.log(person.school[0].lop.push(6));//thêm phần tử vào cuối danh sách
console.log(person.school[0].lop.toString());
//dịch chuyển mảng
const traicay=["Banana", "Orange", "Apple", "Mango"];
traicay.shift();//loại bỏ phàn tử đầu tiên và các phần tử sau lùi đi 1 đơn vị
console.log(traicay.toString());
traicay.unshift("Lemon");//thêm một phần tử vào đầu mảng
console.log(traicay.toString());
//xóa
//delete traicay[0];//xóa phần tử ở vị trị chỉ định
console.log(traicay.toString());
//Gộp mangr
const cars=["vinfast","lamborghini","Mercedes"];
const tong=traicay.concat(cars);//có thể gộp nhiều mảng
console.log(tong.toString());
const tong1=tong.concat("acer");//có thể gộp một phần tuer vào mảng
console.log(tong1.toString());
//copy mảng
traicay.copyWithin(2,0);//copy phần tử ở vt 2 bằng 0
console.log(traicay.toString());
tong1.copyWithin(3,0,3);
console.log(tong1.toString());
//Làm phẳng một mảng
const arr=[[1,2],[3,4],[5,6]];
console.log(arr.flat().toString());
console.log(arr.flat().flatMap(x=>[x,x*2]).toString());// lệnh flat đcược thực hiện trước
//đầu tiên ánh xạ tất cả các phần tử của một mảng và sau đó tạo một mảng mới bằng cách làm phẳng mảng đó
//
traicay.splice(3,0,"Kiwi","Banana");
// Tham số đầu tiên xác định vị trí mà các phần tử mới sẽ được thêm vào 
// Tham số thứ hai xác định số lượng phần tử cần loại bỏ 
// Các tham số còn lại  xác định các phần tử mới sẽ được thêm vào
console.log(traicay.toString());
//có thể dùng splice() để xóa phần tử
traicay.splice(0,2);
console.log(traicay.toString());
//cắt mảng
console.log("cắt mảng");
console.log(traicay.slice(1).toString());
console.log(traicay.slice(1,3).toString());
//
console.log("\n");
console.log("Sắp xếp");
const a=[51,61,29,99,1,5,3,2,8];
a.sort(function(a,b){return a-b});
console.log(a.toString());
for(let i=a.length-1;i>0;i--)
{
    let j=Math.floor(Math.random()*(i+1));
    let k=a[i];
    a[i]=a[j];
    a[j]=k;
}
console.log(a.toString());
//số nhỏ nhất
console.log(Math.min.apply(null,a));
console.log(Math.max.apply(null,a));
const pepelo=[
    {name:"B",age:12},
    {name:"A",age:51},
    {name:"C",age:9},
    {name:"J",age:11},
    {name:"E",age:2}
]
pepelo.sort(function(a,b){
    let x=a.name.toLowerCase();
    let y=b.name.toLowerCase();
    if(x>y){return 1;};
    if(y>x){return -1;};
    return 0;
});
display(pepelo);
pepelo.sort(function(a,b){
    let x=a.age;
    let y=b.age;
    if(x>y){return 1;};
    if(y>x){return -1;};
    return 0;
});
console.log();
display(pepelo);
function display(a) {
    for (let i = 0; i < a.length; i++) {
        console.log(a[i].name + " " + a[i].age);
    }
}
console.log();
let f=traicay.entries();
for(let x of f){
    console.log(x);
}



