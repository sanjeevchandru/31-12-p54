document.write("17. to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.  "+"<br>")
function test15(n){
    if(n<=19){
        return (19-n);
    }
    else{
        return (n-19)*3;
    }
}
document.write("The number is :20"+"<br>")
document.write("ans:"+test15(20)+"<br>");
// document.write(test15(10)+"<br><br>");