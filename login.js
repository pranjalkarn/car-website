function doLogin() {
    var email = document.getElementById("userName").value;
    var pass  = document.getElementById("password").value;
    if (email == "pranjal" && pass == "abcd") {
        alert("success full ! ")
        window.location.assign("Home.html")

    } else {
        alert("Please Try Again !");
    }
    return false;
}