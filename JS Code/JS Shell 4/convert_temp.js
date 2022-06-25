//DO NOT MODIFY THE CODE BELOW 

/*********************
*  helper functions  *
**********************/
const $ = selector => document.querySelector(selector);
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;
//ADD YOUR CODE BELOW 
//make const for calculating feet to meters 
const calculateMeters = measurement => measurement / 0.3048;
//make const for calculating meters to feet
const calculateFeet = measurement => measurement * 0.3048;

//anon function to toggle display
const toggleDisplay = (label1Text, label2Text) => {
    // update labels and clear disabled textbox
    $("#label_1").textContent = label1Text;
    $("#label_2").textContent = label2Text;
    $("#value_computed").value = "";

    // select text in degrees textbox
	$("#value_entered").select();
}

//anon function to check valid data and preform conversion based on what is selected
const performConversion = () => { 
    //variables for the value of value entered and the div
    let valueEntered = ;
    const div = document.querySelector("div");

    //if statemnet to check if valid number is entered for degrees
    //"You must enter a valid number for degrees!";

    //else if statemnet to check if valid number is entered for the measurements
    //"You must enter a valid number for the measurement!";
        
    //else clear error (if needed), run calculations based on what radio button is checked 

        //if
        //else if
        //else if
        //else
}

//toggle what is displayed for the textboxes
const toggleToCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toggleToFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");
const toggleToFeet = () => toggleDisplay("Enter Feet:", "Meters:");
const toggleToMeters = () => toggleDisplay("Enter Meters:", "Feet:");

//anon function for event listeners on click events
document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", performConversion);
    $("#to_celsius").addEventListener("click", toggleToCelsius);
    $("#to_fahrenheit").addEventListener("click", toggleToFahrenheit);
    $("#to_feet").addEventListener("click", toggleToFeet);
    $("#to_meters").addEventListener("click", toggleToMeters);
	
	// move focus
	$("#value_entered").focus();
});