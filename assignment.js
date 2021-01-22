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
    if(quantityOfWatch > 0 && quantityOfPhone > 0 &&  quantityOfLaptop >0){
        var costOfWatch = quantityOfWatch * 50;
        var costOfPhone = quantityOfPhone * 100;
        var costOfLaptop = quantityOfLaptop * 500;
        var totalCost = costOfWatch + costOfPhone + costOfLaptop;
        return totalCost;
    }else{
        return "Error: Quantity of electronics cannot be negative or others!";
    }
}
// console.log(budgetCalculator(1,2,3));
// console.log(budgetCalculator(1,-2,3));
// a function to calculate hotel cost
function hotelCost(howManyDaysToStay){
    var fare = 0;
    if(howManyDaysToStay > 0){
        if(howManyDaysToStay <= 10){
            fare = howManyDaysToStay * 100;
            //fare of first ten days = 1000 (per day 100)
        }
        if(howManyDaysToStay > 10 && howManyDaysToStay <= 20){
            var moreThanTen = howManyDaysToStay - 10;
            fare = 1000 + moreThanTen * 80;
            //fare of second ten days = 800 (per day 80 after first 10 days)
        }
        if(howManyDaysToStay > 20){
            var moreThanTwenty = howManyDaysToStay - 20;
            fare = 1000 + 800 + moreThanTwenty * 50;
            //fare of second ten days = 800 (per day 80 after first 10 days)
            //fare of  every days after 20 is 50$
        }
        return fare;
    }else{
        return "Error: Days can be only positive numbers!";
    }
}
// console.log(hotelCost(10));
// console.log(hotelCost(20));
// console.log(hotelCost(22));
// console.log(hotelCost(-1));
// a function to return the largest names from an array of names
function megaFriend(friends){
    var name, largestCountedName = 0, largeName;
    //iterating each names from the array friends
    for(var i=0; i<friends.length; i++){
        var count = 0 , index;
        var sameLength;
        name = friends[i];
        for(var j=0; j<name.length; j++){
            ++count;//counting the length of each name
        }
        if(largestCountedName < count){//checking the largest one
            largestCountedName = count;
            largeName = name;
            sameLength = 0;
            index = i;
        }else if(largestCountedName == count){
            sameLength++;
            if(sameLength == 1){
                largeName = friends[i-1];
            }else{
                largeName = friends[index];
            }
        }
    }
    return largeName;  
}
var friendList = ['shuvo', 'tumpa','krishna'];
console.log(megaFriend(friendList));
var friendList = ['shuvo', 'tumpa','krish'];
console.log(megaFriend(friendList));
var friendList = ['shuvo', 'tumpa','krishna','trishna'];
console.log(megaFriend(friendList));