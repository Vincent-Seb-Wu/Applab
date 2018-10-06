const events = [
    {orderTime: 2.90, waitTime: 1.33, numD: 1},
    {orderTime: 4.20, waitTime: 2.97, numD: 1},
    {orderTime: 1.67, waitTime: 2.78, numD: 1},
    {orderTime: 0.75, waitTime: 2.62, numD: 1},
    {orderTime: 0.80, waitTime: 2.13, numD: 2},
    {orderTime: 0.72, waitTime: 2.25, numD: 1},
    {orderTime: 0.77, waitTime: 1.37, numD: 1},
    {orderTime: 0.73, waitTime: 2.02, numD: 2},
    {orderTime: 0.57, waitTime: 1.67, numD: 1},
    {orderTime: 0.72, waitTime: 1.82, numD: 2},
    {orderTime: 2.87, waitTime: 2.15, numD: 4},
    {orderTime: 1.38, waitTime: 1.77, numD: 1},
    {orderTime: 1.00, waitTime: 1.12, numD: 1},
    {orderTime: 0.40, waitTime: 2.75, numD: 1},
    {orderTime: 1.22, waitTime: 1.85, numD: 1},
    {orderTime: 0.95, waitTime: 0.65, numD: 1},
    {orderTime: 1.65, waitTime: 1.38, numD: 2},
    {orderTime: 1.40, waitTime: 1.27, numD: 1},
    {orderTime: 3.10, waitTime: 4.75, numD: 1},
    {orderTime: 0.38, waitTime: 1.77, numD: 2},
    {orderTime: 0.70, waitTime: 1.82, numD: 1},
    {orderTime: 0.38, waitTime: 2.57, numD: 1},
    {orderTime: 0.52, waitTime: 0.43, numD: 1},
    {orderTime: 0.43, waitTime: 1.25, numD: 1},
    {orderTime: 1.02, waitTime: 1.60, numD: 2},
    {orderTime: 0.72, waitTime: 0.97, numD: 2},
    {orderTime: 0.83, waitTime: 2.67, numD: 2},
    {orderTime: 0.82, waitTime: 0.85, numD: 1},
    {orderTime: 0.62, waitTime: 0.60, numD: 2},
    {orderTime: 1.45, waitTime: 1.05, numD: 2},
]

//Hypothesis: The longer the ordertime, the more drinks they order, the longer the waittime. The longer the ordertime, the higher the amount of drinks. The longer the waittime, the higher the amount of drinks.

//store our n
const c = events.length;

//sum of x^2
let xSquaredSum = function (array,xVrb) {
    count = 0;
    for(i=0;i<c;i++) {
        count += Math.pow(array[i][xVrb], 2);
    }
    return count;
}

//sum of y^2
let ySquaredSum = function (array, yVrb) {
    count = 0;
    for(i=0;i<c;i++) {
        count += Math.pow(array[i][yVrb], 2);
    }
    return count;
}

//(sum of x)^2
let sumXSquared = function (array,xVrb) {
    count = 0;
    for(i=0;i<c;i++) {
        count += array[i][xVrb];
    }
    return Math.pow(count,2);
}

//(sum of y)^2
let sumYSquared = function (array,yVrb) {
    count = 0;
    for(i=0;i<c;i++) {
        count += array[i][yVrb];
    }
    return Math.pow(count,2);
}


//x*y
let sumXTimesY = function(array,xVrb, yVrb) {
    count = 0;
    for(i=0;i<c;i++) {
        count = array[i][xVrb] * events[i][yVrb] + count;
    }
    return count;
}

//now plug into our formula
let pearsonCorrelation = function (array, xVrb, yVrb){
    return (sumXTimesY(array,xVrb, yVrb) - sumXTimesY(array,xVrb, yVrb)/c) / ((Math.sqrt(xSquaredSum(array, xVrb)) -(sumXSquared(array,xVrb)/c)) * (Math.sqrt(ySquaredSum(array,yVrb)) -(sumYSquared(array,yVrb)/c)));
}

console.log(pearsonCorrelation(events, 'orderTime', 'waitTime'));
console.log(pearsonCorrelation(events, 'orderTime', 'numD'));
console.log(pearsonCorrelation(events, 'waitTime' , 'numD'));