
//Problem 1(kilometerToMeter)

function kilometerToMeter(distance) {
    if (distance >= 0) {
        var meter = distance * 1000;
    }
    else {
        return ('Error!! distance can not be negative');    /** error handling portion */
    }
    return meter;
}

//problem 2(budgetCalculator)

function budgetCalculator(watch, phone, laptop) {
    if ((watch >= 0 && parseInt(watch) == watch) && (phone >= 0 && parseInt(phone) == phone) && (laptop >= 0 && parseInt(laptop) == laptop)) {
        var budget = watch * 50 + phone * 100 + laptop * 500;
    }
    else {
        return ('Error!! quantity should be positive integer');    /** error handling portion */
    }
    return budget;
}

//problem 3(hotelCost)

function hotelCost(days) {
    var cost = 0;
    if (days >= 0) {
        if (days <= 10) {
            cost = days * 100;
        }
        else if (days <= 20) {
            cost = 1000 + (days - 10) * 80;            // for first 10 days cost=(10*100)=1000 added & for second 10 days cost will be increased by @ 80$/day
        }
        else {
            cost = 1000 + 800 + (days - 20) * 50;       // cost up to 20 days (10*100)=1000 &(10*80)=800 added & for   rest of the days after 20days cost will be increased by @ 50$/day
        }
    }
    else {
        return ('Error!! input should be positive');    /** error handling portion */
    }
    return cost;
}

//problem 3(megaFriend)

function megaFriend(friendName) {                      // call the function as array
    var bigName = [];

    for (i = 0; i < friendName.length; i++) {
        var individualName = friendName[i];
        var element = individualName.length;
        if (element > bigName.length) {
            bigName = individualName;
        }
    }
    if (friendName == 0) {
        return 'Error!! input valid string';             /** error handling portion */
    }
    return bigName;
}