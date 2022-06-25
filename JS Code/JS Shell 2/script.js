//declare variables
cargoWeight = ;         //this will hold an array of different item weights
totalCargoWeight = 0;       //this will hold the total weight of all items
itemWeight = 0;             //this will hold the weight of a single item
maxWeightLbs = 1000;      //this specifies the maximum weight for all cargo
average = 0;                //this will hold the average weight of all items
exit = -1;                //this specifies the number to exit the loop

//do-while loop though until -1 is entered. 
do {
    itemWeight = parseFloat(prompt("Please enter the item weight in pounds, or input -1 to exit.", -1));

    //if
    //else if
} while (itemWeight != exit);


//for loop

//average

//use template literal to format text
const html = '<h1>Space Weight</h1>'
            '<p>Total cargo weight:' + totalCargoWeight.toFixed(2) +
            '</p> <p>Average item weight: ' + average.toFixed(2) + '</p>';

document.write(html);

//use if statements to determine which text to show
document.write(`<p>Congratuluations! The rocket can take off!</p>`);

document.write(`<p>Oh no! Your rocket is too heavy to take off!</p>
                   <p>The rocket must be less than 1000 pounds to take off!</p>`);