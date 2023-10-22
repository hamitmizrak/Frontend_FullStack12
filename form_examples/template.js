const formInput=()=>{
    let nickName,email,password;
    nickName=document.getElementById("nickname_data").value;
    email=document.getElementById("email_data").value;
    password=$('#password_data').val();
    //alert(nickName+" " +email+" "+password)
    $("#param_id").html(nickName+" " +email+" "+password).css("color","red");
}