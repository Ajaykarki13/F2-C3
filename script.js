let form = document.querySelector(".form1")
let naam = document.querySelector("#name")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let confirmP = document.querySelector("#conpassword")
let btn = document.querySelector("#signup")

let arr = []
let id = 1;
//let emailregex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
form.addEventListener('submit', validateForm)

function validateForm(e) {

    e.preventDefault()  // form will never get submitted unless all condition passed

    let urname = naam.value;
    let uremail = email.value;
    let urpassword = password.value;
    let urconfirmP = confirmP.value;

   
    // name 
    if (checkname(urname) < 2) {
        let nameerror = document.querySelector(".name")
        nameerror.innerHTML = " Name must be at least 2 words!!"
    }
    //email

    else if (validateEmail(uremail)==false ) {
        let emailerror = document.querySelector(".email")
        emailerror.innerHTML = " e-mail is invalid"
       
    }
    //password
    else if (validatePassword(urpassword, urname, uremail) == false) {
        let passerror = document.querySelector(".pass")
        passerror.innerHTML = " Password is invalid"

    }

    //confirmpassword
    else if (urpassword != urconfirmP) {
        let conerror = document.querySelector(".confirm")
        conerror.innerHTML = " Password is not matching"
    }
    //checking already registered
    else if(checkemail(uremail)==false)
    {
        let message = document.querySelector(".message")
        message.innerHTML="Already Registered!!";
        message.style.color="red"
    }
    else {
        let msg = document.querySelector(".success")
        msg.innerHTML = "Success!"

        let obj = { id: id++, urname, uremail, urpassword }
        arr.push(obj);

        naam.value = '' ;
       email.value = '' ;
       password.value = '' ;
        confirmP.value = '' ;

        //storing data in local storage

    localStorage.setItem("data", JSON.stringify(arr));
    window.location.href = "./login.html";
    }

    
}


function checkname(urname) {
    urname.trim()
    let arr = urname.split(' ')
    return arr.length
}

function validatePassword(urpassword, urname, uremail) {
    if ((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{3,}$/.test(urpassword)) && urpassword != urname && urpassword != uremail)
  {
    return true
  }
    return false
}


function checkemail(uremail)
{
    for( t of arr)
    {
        if(t.uremail==uremail)
        {
            return false;
        }
    }
    return true;
}

function validateEmail(uremail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(uremail))
  {
    return (true)
  }
    return (false)
}




