// Code your solution in this file!
function distanceFromHqInBlocks(value) {
return Math.abs(value - 42)
}

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264)
}

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination)
    if (feetTravelled < 400) {
        return 0
    } else if (feetTravelled > 400 && feetTravelled < 2000) {
        return (feetTravelled - 400) * .02
    } else if (feetTravelled >= 2000 && feetTravelled <= 2500) {
        return 25
    }else if(feetTravelled > 2500){
        return 'cannot travel that far'
    }
}