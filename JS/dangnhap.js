function showError(key, mess){
            document.getElementById(key + '_error').innerHTML = mess;
        }
function Register(){

    const uname = document.getElementById("username");
    const pword = document.getElementById("password");
    const cfpword = document.getElementById("cpassword");
    const fname = document.getElementById("fname");
    const lname= document.getElementById("lname");
    const email = document.getElementById("email");
    console.log(uname.value, pword.value, cfpword.value, fname.value, lname.value, email.value)
    if (uname.value == "" ){
        alert('Vui lòng kiểm tra lại Tên đăng nhập');

    }
    else if (pword.value==""){
        alert('Vui lòng kiểm tra lại Mật khẩu');
    }
    else if ((cfpword.value=="")||(pword.value!= cfpword.value)){
        alert('Vui lòng kiểm tra lại Mật khẩu');
    }
    else if (fname.value==""){
        alert('Vui lòng điền đầy đủ Họ tên');
    }
    else if (lname.value==""){
        alert('Vui lòng điền đầy đủ Họ tên');
    }
    else if (email.value==""){
        alert('Vui lòng điền đầy đủ Email');
    }
    else{
        alert("Chúc mừng bạn đăng ký thành công");
        window.location="../HTML/index.html"
    }

    user_name_data = uname.value;
    localStorage.setItem("User Name",user_name_data);
    password_data = pword.value;
    localStorage.setItem("Password",password_data);
    confirm_password_data = cfpword.value;
    localStorage.setItem("Confirm Password", confirm_password_data);
    console.log(user_name_data, password_data, confirm_password_data)


}
function Login(){
    const user = document.getElementById("user")
    const pass = document.getElementById("pass")

    if ((localStorage.getItem("User Name") == user.value) && (localStorage.getItem("Password") == pass.value)){
        alert("Chuc mung ban da dang nhap thanh cong!")
        window.location="../HTML/khoahoc.html"
    }

    
    console.log(user.value, pass.value);
    if ((user.value == "admin")&& (pass.value =="admin")){
        alert("Dang nhap thanh cong!")
        window.location="../HTML/khoahoc.html"
    }
    else if ((localStorage.getItem("User Name") != user.value) && (localStorage.getItem("Password") != pass.value)){
        alert("Vui long dang nhap lai!")

    }
    
}