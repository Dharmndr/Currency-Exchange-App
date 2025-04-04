const button=document.getElementById("calculate-btn");
const amount=document.getElementById("amount");
const error=document.getElementById("error-message");
const erroR=document.getElementById("erroR-message");
const erroRM=document.getElementById("erroR-Message");
const selectInputs=document.querySelectorAll("select");
const form=document.getElementById("form"); 

form.addEventListener("submit",(e)=>{
  let  isValid=true;
  selectInputs.forEach(select =>{
    if(!select.value){
        isValid=false; 
        select.classList.add("error"); // Adds a CSS class to highlight invalid inputs
    }
    else{
        select.classList.remove("error");  //  Removes the error class if valid
    }
  });

  if(!isValid  && amount.value>=0){ 
       e.preventDefault(); // Prevents the form from being submitted
       erroR.hidden = true;   // Displays the error message
       error.hidden = false;
       erroRM.hidden = true;
       
  }
  else if(amount.value<0 && isValid){ 
  e.preventDefault();
  error.hidden = true;
  erroR.hidden = false;
  erroRM.hidden = true;
  }
  else if(!isValid && amount.value<0){
    e.preventDefault();
    erroR.hidden = true;
  error.hidden = true;
    erroRM.hidden = false;
  }
  else{ 
    error.hidden = true; // Hides the error message
  }

  if(isValid && !amount.value){
    amount.value=0;  // Sets a default value for the amount field if empty
  }

});
