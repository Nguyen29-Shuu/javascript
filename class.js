class person{
    constructor(name,brithday){
        this.name=name;
        this.brithday=brithday;
    }
    age(){
        const date=new Date();
        let bd=new Date(this.brithday);
        let old= date.getFullYear()-bd.getFullYear();
        if(date.getMonth()<bd.getMonth())
        {
             old-=1;
        }
        let month=0;
        function getday(x)
        {
            let m=0;
            switch(x)
            {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    m=31;
                    break;
                case 2:
                    if(date.getFullYear()%4==0)
                    {
                        if(date.getFullYear()%100!=0)
                         {
                            m=29;
                            break;
                         } 
                         else{
                            m=28;
                            break;
                         }
                    }
                default:
                    m=30;
            }
            return m;
        }
        let day=0;
        month=getday(date.getMonth()+1);
        if(date.getMonth()<bd.getMonth()){
            let monthO=bd.getMonth()+1;
            let monthN=date.getMonth()+1;
            let dn=getday(monthN);
            let d=dn-date.getDate();
            monthN++;
            while(monthN!=monthO)
            {
                dn=getday(monthN);
                d+=dn;
                monthN++;
            }
            day=d+bd.getDate();
        }
        else if(date.getMonth()>bd.getMonth())
        {
            let monthO=bd.getMonth()+1;
            let monthN=date.getMonth()+1;
            let d=date.getDate();
            let dn;
            monthN--;
            while(monthN!=monthO)
                {
                    dn=getday(monthN);
                    d+=dn;
                    monthN--;
                }
            dn=getday(monthN);
            day=d+(dn-bd.getDate());
        }
        return old+" tuổi "+day+" ngày";
    }
}
const person1=new person("Nguyen","2004-09-09");
console.log(person1.name+" "+person1.age());
class man extends person{
    constructor(name,brithday,sex){
        super(name,brithday);
        this.s=sex;
    }
    show(){
        return this.name+" "+this.brithday+" "+this.s;
    }
}

let a1=new man("Nguyen",2004,"Nam");
console.log(a1.show());