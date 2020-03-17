// console.log("test");

function validation() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error_message");
    var text;

    // when we trigger the function, the error div will add 10px and display
    error_message.style.padding = "10px";

    // validate name input is not < 5 characters
    if (name.length < 5) {
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }

    // validatete subject 
    if (subject.length < 10) {
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }


    // validate phone 
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }


    // validatete email 
    if (email.indexOf("@") == -1 || email.length < 6) {
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    // validate message area
    if (message.length <= 30) {
        text = "Please Enter More than 140 characters";
        error_message.innerHTML = text;
        return false;
    }

    // alert user of suvvessful submission 
    alert("Form Submitted Successfully");

    // allow the form to submit if everything validates 
    return true;

    // alert(name);
}