const txtName = document.getElementById('name');
const txtSurname = document.getElementById('surname');
const age = document.getElementById('age');
const occupation = document.getElementById('occupation');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const passwd = document.getElementById('password');
const cpasswd = document.getElementById('cpassword');

const btnSubmit = document.getElementById('bsubmit');
const btnCancel = document.getElementById('bcancel');

btnSubmit.addEventListener('click', (e) => {
    verifyData();
// Clear form fields after submitting
        txtName.value = '';
        txtSurname.value = '';
        age.value = '';
        occupation.value = '';
        email.value = '';
        phone.value = '';
        passwd.value = '';
        cpasswd.value = '';
})

function verifyData(){

    let successmsg = document.getElementById('success');

    if (passwd.value !== cpasswd.value || email.value == '' || txtName.value == '' || txtSurname.value == '' || phone.value == '') {
         alert('Please carefully check your information there has been an error!'); 
    } else if (passwd.value === cpasswd.value) {
        successmsg.innerHTML += `Successfully registered`;
    }
}

btnCancel.addEventListener('click', (e) => {
    clearData();
});

function clearData(){
    txtName.value = '';
    txtSurname.value = '';
    age.value = '';
    occupation.value = '';
    email.value = '';
    phone.value = '';
    passwd.value = '';
    cpasswd.value = '';
}