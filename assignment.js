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
console.log(kilometerToMeter(1));