var friendsData = require("../data/friend.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
   
    var newFriend = req.body;
    var currentDiff;
    var bestDiff;
    var currentMatch;
    
      // comparing survey answers
    for (var i = 0; i < friendsData.length; i++) {
      currentDiff = 0;
      for (var j = 0; j < 10; j++) {
        currentDiff = currentDiff + Math.abs((parseInt(newFriend.scores[j]) - friendsData[i].scores[j]));
      }
      if (i === 0) { 
        currentMatch = 0;
        bestDiff = currentDiff;
      } else {
        if (currentDiff < bestDiff) {
          currentMatch = i;
          bestDiff = currentDiff;
        }
      }
    }
    //displays the best match
    friendsData.push(newFriend);
    
    res.send(friendsData[currentMatch]);
  });

  app.post("/api/clear", function() {
   
    friendsData = [];

   // console.log(friendsData);
  });
};