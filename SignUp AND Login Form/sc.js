const form = document.querySelector("form");
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");
ConField = form.querySelector(".conpassword");
ConInput = ConField.querySelector("input");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),

form.onsubmit = (e)=>{
    e.preventDefault(); //preventing from form submitting
    (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
    (ConInput.value == "") ? ConField.classList.add("shake", "error") : checkConPass();
    (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();

    setTimeout(()=>{ //remove shake class after 500ms
      eField.classList.remove("shake");
      pField.classList.remove("shake");
      ConField.classList.remove("shake");
    }, 500);


pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup
ConInput.onkeyup = ()=>{checkConPass();} //calling checkConPassword function on conpass input keyup
 eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup

function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  function checkConPass(){ //checkConPass function
    if(pInput.value != ConInput.value){ //if conpass is empty then add error and remove valid class
      ConField.classList.add("error");
      ConField.classList.remove("valid");
    }else{ //if conpass is empty then remove error and add valid class
      ConField.classList.remove("error");
      ConField.classList.add("valid");
    }
  }

  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  if(!eField.classList.contains("error") && !pField.classList.contains("error") && !ConField.classList.contains("error")) {
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}