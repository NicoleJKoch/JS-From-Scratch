//declare and set lbs to string input from user and covert string to float
lbs = parseFloat(prompt("Please enter your weight in pounds.")); 
//declare and set inches to string input from user and covert string to float
inches = parseFloat(prompt("Please enter your height in inches"));
//declare and set farenheit to string input from user and covert string to float
farenheit = parseFloat(prompt("Please enter the current temperature in Fahrenheit"));

//kg = lb x 0.45359237
kg = parseFloat(lbs * 0.45359237);

//cm = inches x 2.54
cm = parseFloat(inches * 2.54);

//c = (f -32) * 5/9
celsius = parseFloat(farenheit - 32) * 5/9;

const html = 
    `
    <h1>The Metroficator</h1>  
    <p>${lbs} pounds equals ${kg} kg</p>
    <p>${inches} inches equals ${cm} cm</p>
    <p>${farenheit} F equals ${celsius} C</p>
    `;
document.write(html);