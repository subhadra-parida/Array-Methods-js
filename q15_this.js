// Using this keyword..............
function my(n,age){
    this.myname=n     
    this.myage=age 
} 
const per=new my("Barsha",22) 
console.log(per)


// OUTPUT:-
// MY{myname: "Barsha", myage:22}}