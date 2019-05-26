function $(id){
    return document.getElementById(id);
}
var sp1=$("sp1");
var nav_2=$("nav_2");
var lock=flase;
if(!lock){
    sp1.onclick=function(){
        nav_2.style.display="block";
        lock=true;
    }
}else{
    lock=flase; 
}
