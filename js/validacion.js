function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
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
