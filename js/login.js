const userEmail = document.getElementById('user-email');// get value from input by .value
const userPass = document.getElementById('user-pass');// get value from input by .value


//step 1
document.getElementById('submit-btn').addEventListener('click', function () {
    const emailValue = userEmail.value;
    const passValue = userPass.value;
    // console.log(emailValue, passValue);
    if (passValue == 'shumonaakter') {
        console.log('logged in');
        window.location.href = "bank.html";

    }
    else {
        alert('incorrect email or password')
    }
})
//step 2
