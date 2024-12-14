const person={
    fname:"Nguyen",
    lname:"Doan",
    fullname:function(){
        return this.fname+" "+this.lname;
    }
}

const nember={
    fname:"Layla",
    lname:"Find"
}
let fullname=person.fullname.bind(nember);
console.log(fullname());