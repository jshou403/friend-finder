module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../home.html"));
    });

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
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