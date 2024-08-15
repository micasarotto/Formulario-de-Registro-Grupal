function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

    
    // 1
document.getElementById('regBtn').addEventListener('click', function () {

    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;

   //2
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;


    //3
    if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "") {
        showAlertError();
        return;
    }

    //4
    if (password1.length < 6) {
        showAlertError();
        return;
    }

    //5
    if (password1 !== password2) {
        showAlertError();
        return;
    }

    // 6
    if (!terminos) {
        showAlertError();
        return;
    }

    showAlertSuccess();
});