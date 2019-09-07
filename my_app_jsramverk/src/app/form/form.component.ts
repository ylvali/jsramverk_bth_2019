import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent {
  title = 'form';


  // ------------------------------- Properties
  // Values to be collected
  value1 = "";
  value2 = "";
  value3 = "";
  value4 = "";

  // Feedback output
  feedback = "";
  value1_feedback = "";
  value2_feedback = "";
  value3_feedback = "";

  // Valid flag : valid if all input is correct
  validName = false;
  validEmail = false;
  validPassword = false;

  date = new Date();
  theYear = this.date.getFullYear();
  theSelectedYear = this.theYear;
  theMonth = this.date.getMonth();
  theSelectedMonth = this.theMonth;
  theDay = this.date.getDay();
  theSelectedDay = this.theDay;

  theSelectedDate = new Date(this.theSelectedYear, this.theSelectedMonth, this.theSelectedDay);



  // ------------------------------- Methods


  //
  // Next year adds a year to the calender picker
  //
  nextYear() {
    this.theSelectedYear += 1;

    // Restrict the calender
    if (this.theSelectedYear > this.theYear) {
      this.theSelectedYear = this.theYear;
    }

    // Update the selected date
    this.checkSelectedDate();

  }


  //
  // Next year adds a year to the calender picker
  //
  previousYear() {
    this.theSelectedYear -= 1;

    // Restrict the calender
    if (this.theSelectedYear < 1900) {
      this.theSelectedYear = 1900;
    }

    // Update the selected date
    this.checkSelectedDate();

  }


  //
  // Next year adds a month to the calender picker
  //
  nextMonth() {
    this.theSelectedMonth += 1;

    // Restrict the calender
    if (this.theSelectedMonth > 12) {
      this.theSelectedMonth = 12;
    }

    // Update the selected date
    this.checkSelectedDate();

  }


  //
  // Next year adds a year to the calender picker
  //
  previousMonth() {
    this.theSelectedMonth -= 1;

    // Restrict the calender
    if (this.theSelectedMonth < 1) {
      this.theSelectedMonth = 1;
    }

    // Update the selected date
    this.checkSelectedDate();

  }


  //
  // Next year adds a month to the calender picker
  //
  nextDay() {
    this.theSelectedDay += 1;

    // Restrict the calender
    if (this.theSelectedDay > 31) {
      this.theSelectedDay = 31;
    }

    // Update the selected Date
    this.checkSelectedDate();
  }


  //
  // Next year adds a year to the calender picker
  //
  previousDay() {
    this.theSelectedDay -= 1;

    // Restrict the calender
    if (this.theSelectedDay < 1) {
      this.theSelectedDay = 1;
    }

    // Update the selected date
    this.checkSelectedDate();
  }


  //
  // Updates the selected date
  //
  checkSelectedDate() {
    this.theSelectedDate = new Date(this.theSelectedYear, this.theSelectedMonth, this.theSelectedDay);
  }








  //
  // Checks so a value is in string, else raises UI error
  // Returns : output of result to user if not valid
  //
  checkValueString(theValue) {
    var letters = /^[a-z][a-z\s]*$/;

    if(theValue.match(letters)) {
      this.value1_feedback = "";
      this.validName = true;
    } else {
      this.value1_feedback = "Not valid: letters only!";
      this.validName = false;
    }
  }


  //
  // Check so it is a valid email
  // Returns: output of result to user if not valid
  //
  checkForEmail(aValue) {
    var allowedLetters = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (allowedLetters.test(aValue)) {
      this.value2_feedback = "";
      this.validEmail = true;
    } else {
      this.value2_feedback = "Not a valid email";
      this.validEmail = false;
    }
  }


  //
  // Check so password is numbers and letters only
  // Returns: output of result to user if not valid
  //
  checkThePassword(thePassword) {
    var stringAndInt = /^[0-9a-zA-Z]+$/;

    if (thePassword.match(stringAndInt)) {
      this.value3_feedback = "";
      this.validPassword = true;
    } else {
      this.value3_feedback = "Not valid. Numbers and letters only."
      this.validPassword = false;
    }
  }


  //
  // Checks that all is valid
  // Prints what has been typed to user
  // Returns the result to the user
  //
  theForm(value1, value2, value3, value4) {

    var allValid = true;

    // Check the values
    if (this.validName == false) {
      allValid = false;
    }

    if (this.validEmail == false) {
      allValid = false;
    }

    if (this.validPassword == false) {
      allValid = false;
    }

    if (allValid) {
      this.feedback = " The form input is valid. ";

      this.value1 = value1;
      this.value2 = value2;
      this.value3 = value3;
      this.value4 = this.theSelectedDate.toString();
    } else {
      this.feedback = "Please fill in all values in a correct way";
    }

  }

}
