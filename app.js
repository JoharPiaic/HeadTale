var a = prompt("Input your number")

var b = prompt("Input your number")

var random = Math.random()*2;
var random2 = Math.floor(random)

if(random2 == 0){
    document.write( a+ "HEAD you WIN")
}
else {
    document.write( b + "TALE you LOSS")
}