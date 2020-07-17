function feetToMile(feet){
    if(feet < 0){
        return feet + " Ivalid value. Because feet value negative impossible.";
    }
    var mile = feet * 0.000189394;
    return feet + " Feet = " + mile.toFixed(2) + " Mile.";
}
var mile = feetToMile(5280);
console.log(mile);

// Wood Calculator 
function woodCalculator(numOfChair, numOfTable, numOfBed){
    if(numOfChair < 0){
        return "You given an negative value. Please enter a valid number of chair.";
    }
    else if(numOfTable < 0){
        return "You given an negative value. Please enter a valid number of table";
    }
    else if(numOfBed < 0){
        return "You given an negative value. Please enter a valid number of bed";
    }
    else{
        var woodForChair = numOfChair * 1;
        var woodForTable = numOfTable * 3;
        var woodForBed = numOfBed * 5;
        var totalWood = woodForChair + woodForTable + woodForBed;

        return "Total wood need = " + totalWood;
    }
    
}
var total = woodCalculator(10, 20, 10);
console.log(total);

// Wood Calculator 

function brickCalculator(numOfFloor){
    var totalBrick;
    if(numOfFloor < 11){
        totalBrick = 15 * 1000;
    }
    else if(numOfFloor < 21){
        totalBrick = 12 * 1000;
    }
    else{
        totalBrick = 10 * 1000;
    }
    return "Total Brick need " + totalBrick + " for " + numOfFloor + "th floor ";
}

console.log(brickCalculator(20));

// Tiny Friend Name Calculator 
function tinyFriend(friendNames){
    var smallestName = friendNames[0];

    for(var i = 0; i < friendNames.length; i++){
        if(friendNames[i].length < smallestName.length)
        {
            smallestName = friendNames[i];
        }
    }
    return "Smallest Friend Name = " + smallestName;
}
var names = ['imran', 'arafat', 'suma'];
console.log(tinyFriend(names));
// Tiny Friend Name Calculator 
