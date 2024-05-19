function cubeNumber(number) {
    if (typeof number !== 'number' || number < 0) {

       return 'not a valid number.';
    }
    else {
        let cube = Math.pow(number,3);
        return cube;
    }

}


function matchFinder(string1, string2) {
    let match = true;
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'This is not string.';
    }
    else {
        if (string1.includes(string2)) {
            return match;
        }
        else {
            match = false
            return match;
        }

    }


}


function sortMaker(arr) {

    if (arr[0] < 0 || arr[1] < 0) {
        return "Invalid Input";
    }
    else {
        if (arr[0] === arr[1]) {
            return "equal";
        }
        else if (arr[0] < arr[1]) {
            const temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
            return arr;
        }
        else {
            return arr;
        }

    }


}





function findAddress(obj) {

    let address = {
        street: "__",
        house:"__",
        society:"__"
    }

    streetKey = Object.keys(obj).includes("street");
    houseKey = Object.keys(obj).includes("house");
    societyKey = Object.keys(obj).includes("society");


    if(streetKey === true)
    {
        address.street = obj.street;
    }

    if(houseKey === true)
    {
        address.house = obj.house;
    }

    if(societyKey === true)
    {
        address.society = obj.society;
    }

    let result = Object.values(address);
    result = result.join(",")
    return result;

}




function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return 'The array is empty';
    }
    else {
        let result = true;
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            sum = sum + changeArray[i];
        }
        if(sum>=totalDue)
        {
            return result;

        }
        else 
        {
            result =false;
            return result;
        }

    }



}
