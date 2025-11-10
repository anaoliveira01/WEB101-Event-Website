/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById('theme-button');

// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    // This section will run whenever the button is clicked
    document.body.classList.toggle('dark-mode');
}

// Step 3: Register a 'click' event listener for the theme button,
// and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
let submitButton = document.getElementById('rsvp-button');

const addParticipant = (event, person) => {
    // Step 2: Write your code to manipulate the DOM here
    event.preventDefault();

    let newParagraph = document.createElement('p');

    newParagraph.textContent = '🎟️ ' + person.name.value + ' from ' + person.location.value + ' has RSVP\'d.';

    // Add elements to the participants div
    let participants = document.querySelector('.rsvp-participants');
    participants.appendChild(newParagraph);
    
}



// Step 3: Add a click event listener to the submit RSVP button here
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {

  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // Loop through all inputs
  /*
  for(let i=0; i < rsvpInputs.length; i++){
    if(rsvpInputs[i].value.length < 2){
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    } else {
      rsvpInputs[i].classList.remove("error");
    }
  }*/
  // TODO: Inside loop, validate the value of each input

  let person = {
    name: rsvpInputs[0],
    location: rsvpInputs[1],
    email: rsvpInputs[2],
    number: rsvpInputs[3]
  }

  if (person.name.value.length < 2){
    containsErrors = true;
    person.name.classList.add("error");
  } else {
    person.name.classList.remove("error");
  }
  
  if (person.location.value.length < 2){
    containsErrors = true;
    person.location.classList.add("error");
  } else {
    person.location.classList.remove("error");
  }
  
  if (person.email.value.length < 2){
    containsErrors = true;
    person.email.classList.add("error");
  } else {
    person.email.classList.remove("error");
  }
  
  if (person.number.value.length < 2){
    containsErrors = true;
    person.number.classList.add("error");
  } else {
    person.number.classList.remove("error");
  }

  // TODO: If no errors, call addParticipant() and clear fields
  if(containsErrors==false){
    addParticipant(event, person);
    toggleModal(person);
    for(let i=0; i < rsvpInputs.length; i++){
      rsvpInputs[i].value = "";
    }
  }

}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
submitButton.addEventListener("click", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/

/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    let modal = document.getElementById("success-modal");
    let modalContent = document.getElementById("modal-text");
    
    modal.style.display = "flex";
    

    modalContent.textContent = 'Thanks for RSVP\'ing, ' + person.name.value + '! We can\'t wait to see you there!';
    
    let intervalId = setInterval(animateImage, 500)
    // Set modal timeout to 5 seconds
    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId)
    }, 5000);
}

// TODO: animation variables and animateImage() function
let rotateFactor = 0
let modalImage = document.getElementById("modal-image");

const animateImage = () => {
  if(rotateFactor == 0){
    rotateFactor = -10;
  }
  else{
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

