function person(fname,lname,age,city){
    this.firstname=fname;
    this.lastname=lname;
    this.age=age;
    this.city=city;
    this.tt="Fa";
    this.fullname=function(){
        return this.lastname+" "+this.firstname;
    }
}
person.prototype.ti="Fn";
const me=new person("Nguyen","Doan Cong","20","Khanh Hoa");
const you=new person("A","Nguyen Van","20","dau do");
person.prototype.changename=function(lastname){
    this.lastname=lastname;
}
you.changename("Doan")
function In(a){
    let txt=a.fullname()+" "+a.age+" "+a.city
    +" "+a.ti;
    console.log(txt);
}

In(me);
In(you);