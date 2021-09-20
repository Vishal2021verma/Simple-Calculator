var display = document.getElementById("input");


function joint(n){
  if(display.innerHTML === "" && (n === "+" || n ==="-" || n ==="*" || n==="/" || n ==="+-" || n==="%")){
          display.innerHTML = "Error";
  }else if (display.innerHTML === "Error" && (n === "+" || n ==="-" || n ==="*" || n==="/" || n ==="+-" || n==="%")) {
          display.innerHTML = "";
  }
  else {
    display.innerHTML += n;
  }
}

function equal(){

  if(display.innerHTML ==="Error"){
    display.innerHTML = "";
  }
  else {
    var  c = eval(display.innerHTML);
    display.innerHTML = c;
  }

}

function clear(){
  
  display.innerHTML = "";
}

function del(){
  var n = window.screen.width;
  if (n < 800 ){
     document.getElementById("output").remove();
}
}

del();

document.getElementById("c").addEventListener("click",function(){ clear();});
document.getElementById("addsub").addEventListener("click",function(){ joint('+-'); });
document.getElementById("percentage").addEventListener("click",function(){ joint('%'); });
document.getElementById("multiply").addEventListener("click",function(){ joint('*'); });
document.getElementById("seven").addEventListener("click",function(){ joint(7); });
document.getElementById("eight").addEventListener("click",function(){ joint(8); });
document.getElementById("nine").addEventListener("click",function(){ joint(9); });
document.getElementById("divide").addEventListener("click",function(){ joint('/'); });
document.getElementById("four").addEventListener("click",function(){ joint(4); });
document.getElementById("five").addEventListener("click",function(){ joint(5); });
document.getElementById("six").addEventListener("click",function(){ joint(6); });
document.getElementById("sub").addEventListener("click",function(){ joint('-'); });
document.getElementById("one").addEventListener("click",function(){ joint(1); });
document.getElementById("two").addEventListener("click",function(){ joint(2); });
document.getElementById("three").addEventListener("click",function(){ joint(3); });
document.getElementById("add").addEventListener("click",function(){ joint('+'); });
document.getElementById("zero").addEventListener("click",function(){ joint(0); });
document.getElementById("dub_zero").addEventListener("click",function(){ joint('00'); });
document.getElementById("dot").addEventListener("click",function(){ joint('.'); });
document.getElementById("equal").addEventListener("click",function(){ equal(); });
