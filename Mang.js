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