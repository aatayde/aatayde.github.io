document.getElementById('accountTotal')

// List object key & value pairs
const accounts = {

    "petal": 764.11,
    "BoA Rewards": 5811.24,
    "BoA Unlimited": 1587.62,
    "PayPal": 1586.68,
    "Discover": 3996.91,
    "Citi": 2786.83,
    "Apple": 3994.74,
    "Synchrony": 150.65,
    "Synchrony / Tires": 325.18,
    "Wells Fargo": 5439.17,
    "Best Buy": 602.41,
    "Affrim": 183,
}

// Sum of all values in object
function sumOfValues(obj){

    let sum = 0;
        for (value in obj){

           sum += parseFloat(obj[value])
        }

        return sum.toFixed(2);
    }
    
    
    const summed = sumOfValues(accounts)
    console.log("Sum of values: ", summed)

    // Next Step:
    // Calculate interest rate 
    // Relitive change 
    // function relitiveChange(initialValue, finalValue){
        
    //     let answer = (((finalValue - initialValue) / initialValue) * 100)
    //     console.log(answer, "%")
    // }

    // Next Step:
    // Import data from user input

    // Next Step:
    // Export data 