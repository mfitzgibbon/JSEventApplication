import './general';

/* Part 1 - Check out the validation module in services/formValidation */
import validateRegistrationForm from './services/formValidation/validateRegistrationForm';
import apiCall from './services/api/apiCall';

import toastr from 'toastr';
import '../../node_modules/toastr/toastr.less';

class Home {
  constructor() {
    this.$form = document.getElementById("registrationForm");
    this.$username = document.getElementById('username');
    this.$email = document.getElementById('email');
    this.$phone = document.getElementById('phone');
    this.$age = document.getElementById('age');
    this.$profession = document.getElementById('profession');
    //this.$experience = document.getElementsByClassName('radio-inline');
    this.$experience = document.getElementById('experience');
    this.$comment = document.getElementById('comment');
    this.$submit = document.getElementById('submit');
    this.$loadingIndicator = document.getElementById('loadingIndicator');

    this.$form.addEventListener('submit', event =>{
      this.onFormSubmit(event);
    });
    /* Part 2 - Finish the constructor
       - Add references to each of these elements on the page
          this.$form = 
          this.$username = 
          this.$email = 
          this.$phone = 
          this.$age = 
          this.$profession = 
          this.$experience = 
          this.$comment = 
          this.$submit = 
          this.$loadingIndicator = 
      - Add a sumbit handler to the form that calls onFormSubmit
        - You don't actually want to submit the form so you'll have to 
          prevent the default behavior on the event when it fires.
          That means that you'll need the event as a parameter to onFormSubmit
    */
  }

  /* Part 3 - Write the first version of onFormSubmit */
  onFormSubmit(event) {
    // make sure the form is not submitted
    // get the values from the form and store in a variable
    event.preventDefault();
    const formValues = this.getFormValues();

    console.log(formValues);
    /* call the validateRegistrationForm method 
       pass variable from line above as a parameter.
       It will return an object that you should store in a varable
    */
   var validationBool = validateRegistrationForm(formValues)
   console.log(validationBool);

    // if the form is valid
    //    clear the errors
    //    call submitForm with the values from the form as a parameter
    //    (only the stub for submitForm is written. You'll write it  
    //     after testing validation and talking about the ajax call service)
    // otherwise
    //    clear all of the errors
    //    highlight the errors
    // end if

    if(validationBool.isValid)
    {
      console.log("Form was valid");
      this.clearErrors();
      this.submitForm(formValues);
    }
    else
    {
      console.log("Form had errors");
      this.clearErrors();
      this.highlightErrors(validationBool.result);
    }
  }

  /* Part 4 - Finish these 4 UI related methods */

  /* This method packages up all of the form data into one object
     Get the data from each of the form fields.
     Notice how the experience that is checked is retrieved.
  */
  getFormValues() {
    return {
      username: this.$username.value,
      email: this.$email.value,
      phone: this.$phone.value,
      age: this.$age.value,
      profession: this.$profession.value,
      experience: parseInt(document.querySelector('input[name="experience"]:checked').value),
      comment: this.$comment.value,
    };
  }

  /* This method clears each of the form fields.
     It gets called after the form is submitted successfully.
  */
  resetForm() {
    this.$username.value = '';
    this.$profession.value = 'school';
    this.$experience.checked = true;
    this.$phone.value = '';
    this.$age.value = '';
    this.$comment.value = '';
  }

  /* This method styles each of the form fields that contains an error.
     It gets called after the form is validated when errors occurr.
  */
  highlightErrors(result) {
    if (!result.username) {
      this.$username.parentElement.classList.add('has-error');
      console.log("Username is invalid");
    }

    if (!result.email) {
      this.$email.parentElement.classList.add('has-error');
      console.log("Email is invalid");
    }

    if (!result.phone) {
      this.$phone.parentElement.classList.add('has-error');
      console.log("Phone is invalid");
    }

    if (!result.age) {
      this.$age.parentElement.classList.add('has-error');
      console.log("Age is invalid");
    }

    if (!result.profession) {
      this.$profession.parentElement.classList.add('has-error');
      console.log("Profession is invalid");
    }

    if (!result.experience) {
      this.$experience.parentElement.classList.add('has-error');
      console.log("Experience is invalid");
    }
  }
  /* This method removes the style for errors from all form fields.
     It gets called after the form is validated.
  */
  clearErrors() {
    this.$username.parentElement.classList.remove('has-error');
    this.$email.parentElement.classList.remove('has-error');
    this.$phone.parentElement.classList.remove('has-error');
    this.$age.parentElement.classList.remove('has-error');
    this.$profession.parentElement.classList.remove('has-error');
    this.$experience.parentElement.classList.remove('has-error');
  }

  /* TEST - Instantiate a Home object at bottom of file first */

  /* Part 5 - Check out the ajax module in services/api/apiCall.js */

  /* Part 6 - Finish this function.  It makes the api call.  TEST */
  submitForm(formValues) {

    // hide the submit button
    this.$submit.classList.add('hidden');

    // show the loading indicator
    this.$loadingIndicator.classList.remove('hidden');

    /* call apiCall and
       pass '/registration', the form values, and POST as parameters
       When the ajax call returns successfully
          show the submit button
          hide the loading indicator
          use toastr to show the response message
          toastr.success(response.message);
          reset the form
       When there's an error
          show the submit button
          hide the loading indicator
          use toastr to show an error message
          toastr.error('Error!');
    */

    apiCall('registration', formValues, 'POST')
      .then(response => {
        this.$submit.classList.remove('hidden');
        this.$loadingIndicator.classList.add('hidden');
        toastr.success(response.message);
        this.resetForm();
      })
      .catch(() => {
        this.$submit.classList.remove('hidden');
        this.$loadingIndicator.classList.add('hidden');
        toastr.error('Error');
      });
  }
} // end of the class definition

// add a window onload handler. 
// It should create an (unnamed) instance of the class for this page
window.onload = () => {new Home()};
