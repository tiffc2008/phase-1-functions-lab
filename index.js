function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(pickupLocation - 42)
}

function distanceFromHqInFeet(blocksToFeet){
    distanceFromHqInBlocks(blocksToFeet)
    return distanceFromHqInBlocks(blocksToFeet) * 264
}

function distanceTravelledInFeet(num1,num2){
    return Math.abs(num1-num2) * 264
}

function calculatesFarePrice(num1,num2){
    if (distanceTravelledInFeet(num1,num2) < 400){
        return 0
    }
    if (distanceTravelledInFeet(num1,num2) > 400 && distanceTravelledInFeet(num1,num2) < 2000){
        return (distanceTravelledInFeet(num1,num2) - 400) * .02
    }
    if (distanceTravelledInFeet(num1,num2) > 2000 && distanceTravelledInFeet(num1,num2) < 2500){
        return 25
    }
    if (distanceTravelledInFeet(num1,num2) > 2500){
        return 'cannot travel that far'
    }
}

