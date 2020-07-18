// Problem-1
var feet;
function feetToMile(feet) {
  if (feet < 0) {
    return -1;
  } else {
    var mile = 0.000189394 * feet;
    return mile;
  }
}
var totalMile = feetToMile(50000);
if (totalMile == -1) {
  console.log('Feet can not be negative.You have to put positive number.');
} else {
  console.log(totalMile);
}

// Problem-2
var chair, table, bed;
function woodCalculator(chair, table, bed) {
  if (chair < 0 || table < 0 || bed < 0) {
    return -1;
  } else {
    var wood = chair * 1 + table * 3 + bed * 5;
    return wood;
  }
}
var totalWood = woodCalculator(14, 5, 12);
if (totalWood == -1) {
  console.log(
    'Required wood for Chair,table and bed all have to be positive.None of those can be negative.'
  );
} else {
  console.log(totalWood);
}

// Problem-3
var floor;
function brickCalculator(floor) {
  if (floor >= 1 && floor <= 10) {
    var brickForFirstTen = 10000 * floor * 15;
    return brickForFirstTen;
  } else if (floor >= 11 && floor <= 20) {
    var brickForSecondTen = 10000 * floor * 12;
    return brickForSecondTen;
  } else if (floor > 20) {
    var brickForLastAll = 10000 * floor * 10;
    return brickForLastAll;
  } else {
    return -1;
  }
}
var brick = brickCalculator(17);
if (brick == -1) {
  console.log('Inputted floor should be positive.It can not be negative.');
} else {
  console.log(brick);
}

// Problem-4
var friendsName;
function tinyFriend(friendsName) {
  var friend1 = friendsName[0].length;
  var friend2 = friendsName[1].length;
  var friend3 = friendsName[2].length;
  var friend4 = friendsName[3].length;
  var friend5 = friendsName[4].length;
  var minLengthName = Math.min(friend1, friend2, friend3, friend4, friend5);
  return minLengthName;
}
var friend = tinyFriend(['Sakib', 'Ome', 'Rakibul', 'Asad', 'Mehedi']);
var allFriends = ['Sakib', 'Ome', 'Rakibul', 'Asad', 'Mehedi'];
for (var i = 0; i < allFriends.length; i++) {
  if (allFriends[i].length == friend) {
    console.log(allFriends[i]);
  }
}
