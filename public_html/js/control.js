function next() {
    var login = sessionStorage.getItem("login");

    if (!login) {
        sessionStorage.setItem("login", "admin");
    }

    window.location.href = "home.html";
}

function proximo() {
    var login = sessionStorage.getItem("login");

    if (!login) {
        sessionStorage.setItem("login", "admin");
    }

    localStorage.setItem("user", document.getElementById("login").value);
    localStorage.setItem("password", document.getElementById("senha").value);

    if (document.getElementById("lembrar".checked)) {
        document.cookie = "lembrar=sim"
    }

    window.location.href = "home.html";
}

function carregar() {
    var lembrar = getCookie("lembrar");

    if (!lembrar) {
        alert(localStorage.getItem("user").value + localStorage.getItem("password").value)

    }

    localStorage.setItem("user", document.getElementById("login").value);
    localStorage.setItem("password", document.getElementById("senha").value);
}

function inicio() {
    var login = sessionStorage.getItem("login");

    if (!login) {
        window.location.href = "login.html";
    }
}