

function EyeIconChange () {
    var eyeicon = document.getElementById("eye")
    if (eyeicon.classList.contains('fa-eye-slash')) {
        eyeicon.classList.remove('fa-eye-slash');
        eyeicon.classList.add('fa-eye');
        document.getElementById('pass').type = 'text';
    } else {
        eyeicon.classList.remove('fa-eye');
        eyeicon.classList.add('fa-eye-slash');
        document.getElementById('pass').type = 'password';
    }
 
}

function OnSubmit(){
    console.log('click')
    var email = document.getElementById('email').value
    var pass = document.getElementById('pass').value 
    console.log(email,pass)
    
    if(!email || !pass  ){
        alert('required fields are missing')
    }

    var isValid = email.indexOf('@gmail.com')

    if(isValid == -1){
        alert('Wrong Email')
    }
    else if(pass.search(/[A-Z]/) == -1){
        alert('Password must contain at least one uppercase letter')
    }
    else if(pass.search(/[a-z]/) == -1){
        alert('Password must contain at least one lowercase letter')
    }
    else if(pass.search(/[0-9]/) == -1){
        alert('Password must contain at least one number')
    }
    else if(pass.length < 8){
        alert('Password must be at least 8 characters long')
    }

    else if(pass.search(/[!@#$%^&*(),.?":{}|<>]/) == -1){
        alert('Password must contain at least one special character')
    }
    
    else if(email === 'accijaz@gmail.com' && pass === 'Ijaz12345@'){
        alert('Login Successfully')
        window.location.href = "home.html"
    }else{
        alert('invalid email and password')
    }

}