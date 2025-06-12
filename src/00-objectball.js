function gameObject(){
    let object = {
        home: {
            teamName:"Brooklyn Nets",
            colors:["black", "White"],
            players:{
                "Alan Anderson":{
                    number:0,
                    shoes:16,
                    points:22,
                    rebounds:12,
                    assists:12,
                    steals:3,
                    blocks:1,
                    slamDunks:1
                
                },
                "Reggie Evans":{
                    number:30,
                    shoes:14,
                    points:12,
                    rebounds:12,
                    assists:12,
                    steals:12,
                    blocks:12,
                    slamDunks:7
                },
                "Brook Lopez":{
                    number:11,
                    shoes:17,
                    points:17,
                    rebounds:19,
                    assists:10,
                    steals:3,
                    blocks:1,
                    slamDunks:15

                },
                "Mason Plumlee":{
                    number:1,
                    shoes:19,
                    points:26,
                    rebounds:12,
                    assists:6,
                    steals:3,
                    blocks:8,
                    slamDunks:5
                },
                "Jason Terry":{
                    number:31,
                    shoes:15,
                    points:19,
                    rebounds:2,
                    assists:2,
                    steals:4,
                    blocks:11,
                    slamDunks:1
                },
                
            }
        },
        away:{
            teamName:"Charlotte Hornets",
            colors:["Turquoise", "Purple"],
            players:{ 
               "Jeff Adrien":{
                    number:4,
                    shoes:18,
                    points:10,
                    rebounds:1,
                    assists:1,
                    steals:2,
                    blocks:7,
                    slamDunks:2

               },
               "Bismak Biyombo":{
                    number:0,
                    shoes:16,
                    points:12,
                    rebounds:4,
                    assists:7,
                    steals:7,
                    blocks:15,
                    slamDunks:10
               },
               "DeSagna Diop":{
                    number:2,
                    shoes:14,
                    points:24,
                    rebounds:12,
                    assists:12,
                    steals:4,
                    blocks:5,
                    slamDunks:5
               },
               "Ben Gordon":{
                    number:8,
                    shoes:15,
                    points:33,
                    rebounds:3,
                    assists:2,
                    steals:1,
                    blocks:1,
                    slamDunks:0
               },
               "Brendan Haywood":{
                    number:33,
                    shoes:15,
                    points:6,
                    rebounds:12,
                    assists:12,
                    steals:22,
                    blocks:5,
                    slamDunks:12
               }
            
             }
            }
    };
    return object;

};
console.log(gameObject());

// acedssing the team name of the home team

function homeTeamName(){
    let object=gameObject();
    return object["home"]["teamName"];
}
console.log(homeTeamName());

// Points scored by a player
function numPointScored(playerName){
    const game= gameObject(); // this gets the object and assigns it to the variable game

    for(let teamKey in game){ // this loops through home and away keys
        const team = game[teamKey]; //This retrieves the whole team, either home or away
        const players = team.players; // This retrieves the players specifically from the team

    for(let name in players){ //this loops through players now that we have retrieved it
        if(name ===playerName){ // condition. Is the player name the same name we are looking for
            return players[name].points;// if the condition is true, then return the player name and the points
        }
    }

    }
    return "player not found"

}
console.log(numPointScored("Ben Gordon"));


//Building shoeSize Function
function shoeSize(playerName) {
    const game = gameObject();

    for (let teamKey in game) {
        const team = game[teamKey];
        const players = team.players;
        
        for (let name in players) {
            if (name === playerName) {
                return players[name].shoes;
            }
        }
    }

    return "Player not found";
}
console.log(shoeSize("Mason Plumlee"));


// Building teamColors function
function teamColors(teamName) {
    const game = gameObject(); // this calls the gameObject function

    for(let teamKey in game){ // Lopps  through every team
        const team=game[teamKey];// gets the team object and store it in the variable, team 

        if(team.teamName ===teamName){
            return team.colors;
        }
    }
    return "Team not found";
}    

console.log(teamColors("Charlotte Hornets"));



// Building teamNames  function
function teamNames() { // not told that it takes in an argument. 
    const game = gameObject(); //calls the gameObject function, retrieves all its data to be used in this new function. The objects stored in a variable, game.
    const names = []; // create an empty arrays to store the team names.

    for (let teamKey in game) { // loops over the two teams, home and away.
        names.push(game[teamKey].teamName); // game[teamKey] retrieves the team objects, .teamName gets the specific name of the team, name.push adds the name of the team to the name arrays created earlier/
    }

    return names;
}
console.log(teamNames());




//
function playerNumbers(teamName){
    const game=gameObject();
    const arr = [];

    for(let teamKey in game){
         const team = game[teamKey]

        if(team.teamName ===teamName){
            for(let player in team.players){
                arr.push(team.players[player].number);
        }
    }
    
    

    }
    return arr;

}
console.log(playerNumbers("Charlotte Hornets"));

//
function playerStats(playerName){
    const game = gameObject(); // wes call the previous function and store it in game variable.
    const obj={}; // create an empty object to return stats of a player to.

    for(let teamKey in game){ // Loop through all the teams
        const team = game[teamKey]; // now store the teams in the variable team
        const players = team.players;// access the p;layers in the teams
        
        for(let player in players){ // now we loop through each player in the players we have accessed.
            if(player === playerName){ // if we get a playerName that matches the name
            return players[player]; // then return the player
        }
         }
    }
    return {};
}
console.log(playerStats("Ben Gordon"));


