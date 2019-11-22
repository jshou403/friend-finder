var path = require("path");
var friends = require("../data/friends.js");

module.exports = function (app) {

    // displays friends.js file in json format
    app.get("/api/friends", function (req, res) {
        console.log(res);
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        var newFriend = req.body;
        console.log(newFriend);
        res.json(newFriend);
        friends.push(newFriend);

        // console.log(newFriend);

        // res.json(newFriend);

        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        // var newReservation = req.body;

        // Using a RegEx Pattern to remove spaces from newReservation
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        // newReservation.routeName = newReservation.name
        //   .replace(/\s+/g, "")
        //   .toLowerCase();

        // console.log(newReservation);

        // res.json(newReservation);

        // if (reservations.length < 5) {
        //   reservations.push(newReservation);
        // } else {
        //   waitlist.push(newReservation);
        // }

    });

}