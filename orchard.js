///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using a for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0

for (i = 0; i < 7; i++){
    totalAcres += fujiAcres[i];
    totalAcres += galaAcres[i];
    totalAcres += pinkAcres[i];
}

console.log(totalAcres)

// this one was tricky, I'm not going to lie, I got held up on this problem for a long time. I ended up solving it by having a loop that added the value at the index (i) for each array to the variable 'totalAcres.' Once the loop is complete, it logs to the console the total acres worth of harvest that has been gathered for all three varieties of apples.

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / 7

console.log(averageDailyAcres)

//This code takes the total acres harvested and divides it by the number of days of the week. In other words, it just finds the average amount of acres harvested everyday.



// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0){
    acresLeft = acresLeft -= averageDailyAcres;
    days = days + 1;
}

//This while loop uses the averageDailyAcres variable defined above and uses it to calculate/estimate how many days it will take to finish the harvest at the current pace. Each time if runs through the loop, it subtracts from the acresLeft variable the previous average amount harvested per day and adds 1 to the days variable. The loop closes once there are no acres left to harvest and gives you an estimate of how many days are left to complete. In this instance, the answer is 20. The console message below just prints the answer to the console.

console.log(`it will take ${days} days to finish the harvest.`)



// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = fujiAcres.slice()
let galaTons = galaAcres.slice()
let pinkTons = pinkAcres.slice()

for (i = 0; i < fujiTons.length; i++){
    fujiTons[i] = fujiTons[i] * 6.5;
    galaTons[i] = galaTons[i] * 6.5;
    pinkTons[i] = pinkTons[i] * 6.5;
}

//There are two main things going on in this answer. One, the original arrays containing the harvest data for the 3 different varieties of apples are copied to new arrays. Two, a for loop runs through each newly made array and multiplies the value of each item in the array by 6.5 to calculate the tonage harvested.

// console.log(fujiTons)
// console.log(galaTons)
// console.log(pinkTons)






// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0

for (i = 0; i < fujiTons.length; i++){
    fujiPounds = fujiPounds += fujiTons[i] * 2000
}

console.log(fujiPounds)

let galaPounds = 0

for (i = 0; i < galaTons.length; i++){
    galaPounds = galaPounds += galaTons[i] * 2000
}

console.log(galaPounds)

let pinkPounds = 0

for (i = 0; i < pinkTons.length; i++){
    pinkPounds = pinkPounds += pinkTons[i] * 2000
}

console.log(pinkPounds)


// Above are three four loops that convert the values of tons to pounds. Each apple variety gets a new variable to store the amount in pounds. Initially, before each loop, the pound variable are declared at 0. The loops take the amount in ton, multiply that by 2000 and add that value to the new pound variables.

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("$" + fujiProfit + " $" + galaProfit + " $" + pinkProfit)

//Above code determines the profit per variety of apple by multiplying the pound variables declared in problem 5 by the price per pound declared at the beginning of this file. After determing profit, the amounts are printed to the console.


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(totalProfit)

//The above code adds together the values from the profit variables determined above to get a total profit. This is then printed to the console.