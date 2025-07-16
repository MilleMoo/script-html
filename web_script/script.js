function testVar(){
    var x = 10;
    if(true){
        var x = 20;
        console.log(x);
    }
    console.log(x);
}

testVar();

let y = 5;
function testLet(){
    let y = 10;
    if (true) {
        let y = 20;
        console.log(y);
    }
    console.log(y);
}

testLet();
console.log(y);

const pi = 3.141234;

const person = {name: "Adam"};
// person = {name: "James"}
person.age =  27;
console.log(person);

for(var i = 0; i < 3; i++){
    setTimeout(() => {
        
    })
    console.log(i);
}