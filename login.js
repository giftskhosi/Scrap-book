const emaillg = document.getElementById('txtEmail');
const passwdlg = document.getElementById('txtPassword');

const btSubmit = document.getElementById('submit');
const btCancel = document.getElementById('cancel');

btSubmit.addEventListener('click', (e) => {
    loginDetails();
    passwdlg.value = '';
});

function loginDetails(){
    if(emaillg.value == null || passwdlg.value == '12345'){
        window.open('home.html');
    } else {
        alert('please enter correct email or password');
    }
}