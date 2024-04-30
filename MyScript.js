function Vali() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    var pattern = /^[a-z]+[a-z0-9]+@[a-z]+\.[a-z]{2,}$/

    var pass_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

    if (email == "") {
        alert("Enter Email Adress !");
        return false;
    } else if (!pattern.test(email)) {
        alert("Enter Valid Address !");
        return false;
    }

    if (pass == "") {
        alert("Enter Password !");
        return false;
    } else if (!pass_pattern.test(pass)) {
        alert("Password pattern Not Matched !\n User Upper Lower and Number only.\n Mininum 6 Letters");
        return false;

    }






}