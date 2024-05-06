// Problem 1: Calculate the day rate given an hourly rate

const dayRate = (hourlyRate) => {
    return hourlyRate * 8;
}

//In problem 1, the dayRate function calculates the day rate given an hourly rate.
// It multiplies the hourly rate by the number of hours worked per day (in this case, 8) to obtain the day rate.

// Problem 2: Calculate the number of workdays given a fixed budget

const daysInBudget = (fixedBudget,hourlyRate) => { // conflict?
    return Math.floor((fixedBudget/hourlyRate)/8);
};

//In problem 2, the daysInBudget function calculates the number of workdays given a fixed budget and the freelancer's
// hourly rate. It first calculates the day rate by multiplying the hourly rate by the number of hours worked per day.
// Then, it divides the fixed budget by the day rate and rounds down the result to the nearest whole number using the 
//Math.floor function .

// Problem 3: Calculate the discounted rate for large projects

const priceWithMonthlyDiscount = (hourlyRate,projectSpan,discountRate) => {
    const daysPerMonth = 22; // billable days in a month
    const months = Math.floor(projectSpan/daysPerMonth); // to apply discount we need to calculate the nr of full months
    const remainingDays = projectSpan % daysPerMonth; // the remaining days with no discount

    const discountedRate = hourlyRate - (hourlyRate * discountRate) // for full month discount the dais are billed at this rate
    const discountCost = Math.ceil(months * daysPerMonth * discountedRate) // price per full month with discount applied of the projectt span 
    const remainingCost = Math.ceil(remainingDays * dayRate(hourlyRate)) // price for the remaining days of the project span

    return discountCost + remainingCost;
}

console.log(priceWithMonthlyDiscount(89, 75, 0.42));


//In problem 3, the calculateCost function estimates the cost for large projects considering a monthly discount rate.
//  It takes the hourly rate, the number of days the project spans, and the discount rate as parameters. The function
//   calculates the number of full months and remaining days, and then calculates the cost for each part accordingly. 
//   The discount is subtracted from the hourly rate for full months, and the remaining days are billed at the regular day rate. 
//The function uses Math.ceil to round up the cost to the nearest whole number