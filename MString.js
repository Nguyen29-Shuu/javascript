let txt="Hello World";
//dộ dài
console.log(txt.length);
//Trích xuất ký tự chuỗi
console.log(txt.charAt(1));// cho biết kí tự ở vị trí chỉ định
console.log(txt.charCodeAt(1));// cho biết mã của ký tự ở vị trí chỉ định
//
console.log(txt.at(-2)); // tương tự như charAt() nhưng at() lại cho phép sữ dụng số âm
//Truy xuất các phần của chuỗi
console.log(txt.slice(0,5));//truy xuất chuỗi từ vị trí đầu tiên đến vị trí cuối cùng
console.log(txt.slice(6));
console.log(txt.slice(-3));
//
console.log(txt.substring(0,6));
//
console.log(txt.substr(3,5));//giống như slice nhưng số t2 là chiều dài đậy lấy
//Chuyển chuỗi Hoa <=> Thường
console.log(txt.toUpperCase());
console.log(txt.toLowerCase());
//Nối chuổi
let test="From Nguyen";
let test1=txt.concat(" ",test);
console.log(test1);
console.log(txt+" "+test);//có thể dùng toán tử + thay cho concat()
//Chuỗi Trim
txt="    Hello   World   ";
console.log(txt.trim());//loại bỏ khoảng trắng 2 bên
console.log(txt.trimStart());// Loại bỏ khoảng trắng ở đầu chuỗi
console.log(txt.trimEnd());//Loại bỏ khoảng trắng ở cuối chuỗi 
//Chèn chuỗi
txt1="5";
console.log(txt1.padStart(10,"t"));// thêm t vào đầu txt1 cho đến khi độ dài bằng 10
console.log(txt1.padEnd(10,"t"));// thêm t vào cuối txt1 cho đến khi độ dài băng 10
//Lặp lại chuỗi
console.log(txt.repeat(2));
//Thay thế nội dung chuỗi
txt="Đoàn Công Công Nguyên";
console.log(txt.replace("Công","Bình"));
console.log(txt.replace(/Công/g,"Bình"));//dùng /g để thay đổi tất cả
console.log(txt.replace(/CÔNG/i,"Bình"));
console.log(txt.replaceAll("Công","Bình"));//có thể dùng replaceALl để thay cho /g
