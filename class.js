class person{
    constructor(name,brithday){
        this.name=name;
        this.brithday=brithday;
    }
    age(){
        const date=new Date();
        return date.getFullYear()-this.brithday;
    }
}
const person1=new person("Nguyen",2004);
console.log(person1.name+" "+person1.age());