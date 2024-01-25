//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  return [managerName, managerAge, currentTeam, trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  let objFormation = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
  if (formation.length == 0) {
    return null;
  } else {
    return objFormation;
  }
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let arrPlayers = players.filter((player) => player.debut == year);
  return arrPlayers;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) {
  let arrPlayers = players.filter((player) => player.position == position);
  return arrPlayers;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardname) {
  let arrPlayers = [];

  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardname) {
        arrPlayers.push(players[i]);
      }
    }
  }
  return arrPlayers;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes) {
  let arrPlayers = [];
  let count = 0;
  let j;
  for (let i = 0; i < players.length; i++) {
    for (j = 0; j < players[i].awards.length; j++) {
      if (players[i].awards[j].name == awardName) {
        count++;
      }
    }
    if (count == noOfTimes) {
      arrPlayers.push(players[i]);
    }
    count = 0;
  }
  return arrPlayers;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country) {
  var awardsData = filterByAward(awardName);
  var arrPlayers = awardsData.filter((player) => player.country == country);
  return arrPlayers;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let arrPlayers = [];

  for (let i = 0; i < players.length; i++) {
    if (
      players[i].awards.length >= noOfAwards &&
      players[i].team == team &&
      players[i].age < age
    ) {
      arrPlayers.push(players[i]);
    }
  }
  return arrPlayers;
}

//Progression 9 - Sort players in descending order of their age
function sortByAge() {
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      if (players[i].age < players[j].age) {
        let temp = players[i];
        players[i] = players[j];
        players[j] = temp;
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team) {
  let count = 0;
  let filteredPlayers = [];
  for (let i = 0; i < players.length; i++) {
    if (players[i].team == team) {
      filteredPlayers[count++] = players[i];
    }
  }
  return filteredPlayers;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country) {
  var arrPlayers = filterByAwardxTimes(awardName, noOfTimes).filter(
    (player) => player.country == country
  );
  return arrPlayers.sort(compare);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age) {
  var arrPlayers = players.filter((player) => player.age > age);
  return arrPlayers;
}