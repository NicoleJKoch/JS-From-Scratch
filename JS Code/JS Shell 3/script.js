//DO NOT MODIFY THIS CODE
function calculateTax(subtotal, taxRate) {
    const tax = parseFloat(subtotal * taxRate);
    return tax.toFixed(2);
}

function print(grossTax, federalTax, stateTax, ssTax, medicareTax, netWages) {
    const msg = `
                Gross wages: $${gross.toFixed(2)}

                Deductions:
                --------------------------------
                Federal Taxes:   $${fed.toFixed(2)}
                State Taxes:     $${state.toFixed(2)}
                Social Security: $${ss.toFixed(2)}
                Medicare:        $${medicare.toFixed(2)}

                Net wages: $${net.toFixed(2)}
    `;
    alert(msg);
}
//END DO NOT MODIFY THIS CODE
//YOUR CODE GOES BELOW

const $ = selector => document.querySelector(selector);

//declare variables

//anonymous function to load the page first
document.addEventListener("DOMContentLoaded", () => {
    //add calculate taxes element and monthly salary element from the HTML
    
    //anonymous function to calculate taxes
    //and display the results
    calculateButton.addEventListener("click", () => {
        gross = parseFloat(grossInput.value);
        //fed tax = 12%
        //state tax = 5%
        //ss tax = 6%
        //medicare tax = 1.5%
        grossTaxes = fed + state + ss + medicare;
        net = gross - grossTaxes;
        //add the parameters for the print function
        print( )
    });
});

