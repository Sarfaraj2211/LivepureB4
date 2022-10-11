function validation(){
    var user= document.getElementById("").value;
    if(user ==""){
        document.getElementById("spNam").innerHTML="**please fill the username...";
        return false;
    }
}