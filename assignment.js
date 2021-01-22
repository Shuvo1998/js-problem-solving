//a function to convert kilometer to meter
function kilometerToMeter(kilometer){
    if(kilometer > 0){
        // 1 km = 1000 m
        var meter = kilometer * 1000;
        return meter;
    }else{
        return "Distance cannot be negative!";
    }
}
// console.log(kilometerToMeter(1));
// console.log(kilometerToMeter(-1));
//a function to calculate budget of buying electronics
function budgetCalculator(quantityOfWatch, quantityOfPhone, quantityOfLaptop){
    if(quantityOfWatch > 0 || quantityOfPhone > 0 || quantityOfLaptop >0){
        var costOfWatch = quantityOfWatch * 50;
        var costOfPhone = quantityOfPhone * 100;
        var costOfLaptop = quantityOfLaptop * 500;
        var totalCost = costOfWatch + costOfPhone + costOfLaptop;
        return totalCost;
    }else{
        return "Quantity of electronics cannot be negative or others!";
    }
}
console.log(budgetCalculator(1,2,3));