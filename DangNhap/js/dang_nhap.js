var submit = document.getElementById("submit");
console.log(submit);
submit.addEventListener('click', function (event) {
    event.preventDefault();

    var name = document.getElementById("name");
    var pass = document.getElementById("pass");
    var error = document.getElementById("error");
    var error1 = document.getElementById("error1");
    var error2 = false;
    var error3 = false;
    if(name.value === ""){
        name.style.borderBottom = "1px red solid";
        name.style.backgroundColor = "lightred";
        error2 = true;
    }else{
        name.style.borderBottom = "1px lightgray solid";
        error2 = false;
        name.style.marginBottom = "20px";
    }
    if(pass.value === ""){
        pass.style.borderBottom = "1px red solid";
        error3 = true;
    }else{
        pass.style.borderBottom = "1px lightgray solid";
        error3 = false;
        pass.style.marginBottom = "20px";
    }
    if(error2 === true){
        error.style.display = "block";
        name.style.marginBottom = "0px";
    }else{
        error.style.display = "none";
    }
    if(error3 === true){
        error1.style.display = "block";
        pass.style.marginBottom = "0px";
    }else{
        error1.style.display = "none";
    }
    if(error2 === false && error3 === false){
        location.href = "../../index/index.html"
    }
    
});
function myFunction() {
      error.style.display = "none";
      document.getElementById("name").style.borderBottom = "1px solid white";
      document.getElementById("name").style.marginBottom = "20px";
}
function myFunction2() {
    error1.style.display = "none";
    document.getElementById("pass").style.borderBottom = "1px solid white";
    document.getElementById("pass").style.marginBottom = "20px";
}