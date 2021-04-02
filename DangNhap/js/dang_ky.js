var submit = document.getElementById("submit");
console.log(submit);
submit.addEventListener('click', function (event) {
    event.preventDefault();
    var name = document.getElementById("name");
    var pass = document.getElementById("pass");
    var pass2 = document.getElementById("pass2");

    var error = document.getElementById("error");
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error22 = document.getElementById("error3");

    var loi1 = document.getElementById("loi1");
    var loi2 = document.getElementById("loi2");
    var loi3 = document.getElementById("loi3");

    var error3 = false;
    var error4 = false;
    var error5 = false;
    var error6 =false;

    var loi11= false;
    var loi22= false;
    var loi33= false;
    if(name.value === ""){
        name.style.borderBottom = "1px red solid";
        error3 = true;
    }
    else if(name.value.length < 4){
        name.style.borderBottom = "1px red solid";
        name.style.marginBottom = "0px";
        loi11 = true;
    }
    else{
        name.style.borderBottom = "1px lightgray solid";
        error3 = false;
        name.style.marginBottom = "20px";
    }
    
    if(pass.value === ""){
        pass.style.borderBottom = "1px red solid";
        error4 = true;
    }
    else if(pass.value.length < 8){
        pass.style.borderBottom = "1px red solid";
        pass.style.marginBottom = "0px";
        loi22 = true;
    }
    else{
        pass.style.borderBottom = "1px lightgray solid";
        error4 = false;
        pass.style.marginBottom = "20px";
    }
    if(pass2.value === ""){
        pass2.style.borderBottom = "1px red solid";
        error5 = true;
    
    }
    else if(pass2.value.length < 8){
        pass2.style.borderBottom = "1px red solid";
        pass2.style.marginBottom = "0px";
        loi33 = true;
    }
    else{
        pass2.style.borderBottom = "1px lightgray solid";
        error5 = false;
        pass2.style.marginBottom = "20px";
    }
    if(pass.value != pass2.value){
        error6 = true;
    }else{
        error6 = false;
    }
    if(error3 === true){
        error.style.display = "block";
        name.style.marginBottom = "0px";
    }else{
        error.style.display = "none";
    }
    if(error4 === true){
        error1.style.display = "block";
        pass.style.marginBottom = "0px";
    }else{
        error1.style.display = "none";
    }
    if(error5 === true){
        error2.style.display = "block";
        pass2.style.marginBottom = "0px";
    }else{
        error2.style.display = "none";
    }
    if(error6 === true){
        error22.style.display = "block";
        pass2.style.borderBottom = "1px red solid";
        pass2.style.marginBottom = "0px";
        pass2.value = "";
    }else{
        error22.style.display = "none";
    }
    if(loi11 === true){
        loi1.style.display = "block";
        name.value = "";
    }else{
        loi1.style.display = "none";
    }
    if(loi22 === true){
        loi2.style.display = "block";
        pass.value = "";
    }else{
        loi2.style.display = "none";
    }
    if(loi33 === true){
        loi3.style.display = "block";
        pass2.value = "";
    }else{
        loi3.style.display = "none";
    }
    if(error3 === false && error4 === false && error5 === false && error6 === false && name.value.length >= 4 && pass.value.length >= 8 && pass2.value.length >= 8){
        alert('Dang ky thanh cong')
        location.href =  "../index/index_dang_nhap.html"
    }
    
});
function myFunction() {
    error.style.display = "none";
    loi1.style.display = "none";
    document.getElementById("name").style.borderBottom = "1px solid white";
    document.getElementById("name").style.marginBottom = "20px";
}
function myFunction2() {
    error1.style.display = "none";
    loi2.style.display = "none";
    document.getElementById("pass").style.borderBottom = "1px solid white";
    document.getElementById("pass").style.marginBottom = "20px";
}
function myFunction3() {
    document.getElementById("error2").style.display = "none";
    document.getElementById("error3").style.display = "none";
    document.getElementById("loi3").style.display = "none";
    document.getElementById("pass2").style.borderBottom = "1px solid white";
    document.getElementById("pass2").style.marginBottom = "20px";
}
