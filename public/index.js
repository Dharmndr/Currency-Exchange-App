const button=document.getElementById("calculate-btn");
const amount=document.getElementById("amount");
const error=document.getElementById("error-message");
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

  if(!isValid){
       e.preventDefault(); // Prevents the form from being submitted
       error.hidden = false; // Displays the error message
  }
  else{ 
    error.hidden = true; // Hides the error message
  }

  if(isValid && !amount.value){
    amount.value=0;  // Sets a default value for the amount field if empty
  }

});
