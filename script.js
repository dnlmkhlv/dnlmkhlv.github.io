var database = [
    {
        username: "daniil",
        password: "secret"
    },
    {
        username: "najma",
        password: "secret"
    },
    {
        username: "najma2",
        password: "secret"
    }
];

var newsFeed = [
    {
        username: "Najma",
        timeline: "Hmmm"
    },
    {
        username: "Daniil",
        timeline: "Hmmm"
    },
    {
        username: "njjmaaa",
        timeline: "Hmmm"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password){
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    for (var i=0; i < database.length; i++) {
        if(isUserValid(username, password)){
            console.log(newsFeed);
        }
        else {
            alert("Wrong!");
        }
    }
}

signIn(userNamePrompt, passwordPrompt);