var path = require("path");
var friends = require("../data/friends.js");

module.exports = function (app) {

    // displays friends.js file in json format
    app.get("/api/friends", function (req, res) {

        // console.log(res);
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        // stores request from the get route into var
        var newFriend = req.body;
        // logs var to terminal 
        // console.log(newFriend);

        var closestScore = 50;
        var closestMatch = 0;

        // math to compare newFriend var with existing friendsArr

        // first loop through friendsArr
        for (var i = 0; i < friends.length; i++) {

            var diff = 0;

            // console.log("\nfriend #" + i + "\nfriend.AnswersArr = " + friends[i].answersArr);
            // console.log("newFriend.Arr = " + newFriend.answersArr);

            // then loop through each index of the newFriend.answersArr
            for (var j = 0; j < newFriend.answersArr.length; j++) {

                // take the absolute value of the difference of each index from friend[i] and newFriend
                diff += Math.abs(newFriend.answersArr[j] - friends[i].answersArr[j]);

                // console.log("\nnewFriend.answersArr[j] - " + newFriend.answersArr[j]);
                // console.log("friends[i].answersArr[j] - " + friends[i].answersArr[j]);
                // console.log("diff = " + diff + "\n"); 
            }

            if (diff < closestScore) {
                closestScore = diff;
                closestMatch = i;
            }

        }

        // console.log("friends[closestMatch] = " + i);
        // console.log(friends[closestMatch]);
        // console.log("closestScore = "  + closestScore);

        // gives response of the closest match back to front ent post route
        res.json(friends[closestMatch]);

        // pushes to friendsArr
        friends.push(newFriend);

    });

}