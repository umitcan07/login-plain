const pwdelement = document.getElementById("pwd")
const emailelement = document.getElementById("email")
const e_correct_icon = document.getElementById("e_correct_icon")
const e_wrong_icon = document.getElementById("e_wrong_icon")
const p_correct_icon = document.getElementById("p_correct_icon")
const p_wrong_icon = document.getElementById("p_wrong_icon")



function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}


function emailblurred() {


    if (emailelement.value !== "") {
        if(emailIsValid(emailelement.value)) {

            emailelement.classList.add("correctemail");
            emailelement.classList.remove("wrongemail")
            //Show a correct icon
            e_correct_icon.style.visibility = "visible"
            e_wrong_icon.style.visibility = "hidden"


        }
        else {

            emailelement.classList.add("wrongemail");
            emailelement.classList.remove("correctemail")
            //Show a cross icon
            e_correct_icon.style.visibility = "hidden"
            e_wrong_icon.style.visibility = "visible"



        }

    } else {

        emailelement.className = "";
        e_correct_icon.style.visibility = "hidden"
        e_wrong_icon.style.visibility = "hidden"

    }

}

function pwdblurred() {

    if (pwdelement.value !== "") {
        if (pwdelement.value.length > 7) {

            pwdelement.classList.add("correctpwd");
            pwdelement.classList.remove("wrongpwd")
            p_correct_icon.style.visibility = "visible"
            p_wrong_icon.style.visibility = "hidden"

        } else {

            pwdelement.classList.add("wrongpwd");
            pwdelement.classList.remove("correctpwd")
            p_correct_icon.style.visibility = "hidden"
            p_wrong_icon.style.visibility = "visible"

        }
    } else {

        pwdelement.className = "";
        p_correct_icon.style.visibility = "hidden"
        p_wrong_icon.style.visibility = "hidden"

    }
}

