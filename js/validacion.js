function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const password1 = document.getElementById('password1').value;
const password2 = document.getElementById('password2').value;
const terminos = document.getElementById('terminos').checked;

 if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "") {
        showAlertError();
        return;
 }

if (password1.length < 6) {
    showAlertError();
    return;
}

if (password1 !== password2) {
    showAlertError();
    return;
}

if (!terminos) {
    showAlertError();
    return;
}

