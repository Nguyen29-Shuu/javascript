let txt="Hôm nay, trời hơi lạnh, trời hơi đang mưa";
console.log(txt.indexOf("trời"));//trả về vị trí lần đầu xuất hiện
console.log(txt.lastIndexOf("trời"));//trả về vị trí lần đầu xuất hiện nhừng theo chiều ngược lại
console.log(txt.indexOf("trời",15));//có thể thêm tham số t2, tham số t2 là vị trí bắt đầu tìm kiếm
console.log(txt.lastIndexOf("trời",15));//cũng như trên nhưng theo chiều ngược lại
console.log(txt.search("trời"))//trả về vị trí đầu tiên trong chuỗi
console.log(txt.search(/trời/));
//
let test=txt.match("ơi");//lấy cái đâu tiên
console.log(test.length+" "+test);
test=txt.match(/ơi/g);//lây ra hết tất cả, có phân biệt hoa thường
console.log(test.length+" "+test);
test=txt.match(/ơi/gi);//khồng phân biệt hoa hay thường
console.log(test.length+" "+test);
test=txt.matchAll("ơi");
console.log(Array.from(test));//nếu không muốn phân biệt hoa thường có thể dùng /gi
//
console.log(txt.includes("trời"));//trả về true nếu có và false nếu ko
console.log(txt.includes("trời",25));//chấp nhận tham số t2, nó dùng để xác định vị trị bắt đầu tìm kiếm
//
console.log(txt.startsWith("Hôm"));//trả về true nếu chuỗi bắt đầu bằng giá trị chỉ định vè ngược lại
console.log(txt.startsWith("nay",3));//tham só t2 là vị trị bắt đầu
//tương tự như startsWith
console.log(txt.endsWith("mưa"));
console.log(txt.endsWith("nay",7));
//
