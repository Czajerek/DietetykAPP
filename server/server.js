const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const localStrategy = require('passport-local').Strategy;
const connectEnsureLogin = require('connect-ensure-login')

const User = require('./models/user');

const app = express();
app.use(express.json());
app.use(cors());

app.use(session({
  secret: "Server secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000
  }

}));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(passport.initialize());
app.use(passport.session());


mongoose.connect("mongodb+srv://XXX.mongodb.net/dietetykAPP");


passport.use(User.createStrategy());


passport.serializeUser(function(user, cb) {
  console.log("serializeUser : ", user);
  cb(null, user.username);

});
passport.deserializeUser(User.deserializeUser());


const contactSchema = new mongoose.Schema({
  name: String,
  familyName: String,
  email: String

});

const Contact = mongoose.model("Contact", contactSchema);

const postSchema = new mongoose.Schema({
  title: String,
  content: String,

});

const Post = mongoose.model("Post", postSchema);

const weekSchema = new mongoose.Schema({
  week: String,
  days: [{
      name: String,
      eight: String,
      halfPastEight: String,
      nine: String,
      halfPastNine: String,
      ten: String,
      halfPastTen: String,
      eleven: String,
      halfPastEleven: String,
      twelve: String,
      halfPastTwelve: String,
      thirteen: String,
      halfPastThirteen: String,
      fourteen: String,
      halfPastFourteen: String,
      fifteen: String,
      halfPastFifteen: String,
      sixteen: String
    },

    {
      name: String,
      eight: String,
      halfPastEight: String,
      nine: String,
      halfPastNine: String,
      ten: String,
      halfPastTen: String,
      eleven: String,
      halfPastEleven: String,
      twelve: String,
      halfPastTwelve: String,
      thirteen: String,
      halfPastThirteen: String,
      fourteen: String,
      halfPastFourteen: String,
      fifteen: String,
      halfPastFifteen: String,
      sixteen: String
    },
    {
      name: String,
      eight: String,
      halfPastEight: String,
      nine: String,
      halfPastNine: String,
      ten: String,
      halfPastTen: String,
      eleven: String,
      halfPastEleven: String,
      twelve: String,
      halfPastTwelve: String,
      thirteen: String,
      halfPastThirteen: String,
      fourteen: String,
      halfPastFourteen: String,
      fifteen: String,
      halfPastFifteen: String,
      sixteen: String
    },
    {
      name: String,
      eight: String,
      halfPastEight: String,
      nine: String,
      halfPastNine: String,
      ten: String,
      halfPastTen: String,
      eleven: String,
      halfPastEleven: String,
      twelve: String,
      halfPastTwelve: String,
      thirteen: String,
      halfPastThirteen: String,
      fourteen: String,
      halfPastFourteen: String,
      fifteen: String,
      halfPastFifteen: String,
      sixteen: String
    },
    {
      name: String,
      eight: String,
      halfPastEight: String,
      nine: String,
      halfPastNine: String,
      ten: String,
      halfPastTen: String,
      eleven: String,
      halfPastEleven: String,
      twelve: String,
      halfPastTwelve: String,
      thirteen: String,
      halfPastThirteen: String,
      fourteen: String,
      halfPastFourteen: String,
      fifteen: String,
      halfPastFifteen: String,
      sixteen: String
    },
  ]


});

const Week = mongoose.model("Week", weekSchema);



app.post("/toCall", function(req, res) {


  const contact = new Contact({
    name: req.body.name,
    familyName: req.body.email,
    email: req.body.mobileNumber
  });

  contact.save();

  res.sendStatus(200);

})

app.post("/posts", function(req, res) {


  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save();

  res.sendStatus(200);

})

app.get("/posts", function(req, res) {

  Post.find(function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      res.send(posts);
    }
  });

  console.log("Activated!");

});


app.get("/posts/:postName", function(req, res) {

  console.log(req.params.postName);

  Post.findOne({
    title: req.params.postName
  }, function(err, foundPost) {
    if (foundPost) {
      console.log(foundPost);
      res.send(foundPost);
    } else {
      console.log("ERROR - post not found!");
      res.send("This post does not exist");

    }
  });
});

app.post("/register", function(req, res) {
  console.log(req.body);
  User.register({
    username: req.body.username
  }, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      res.sendStatus(418);
    } else {
      passport.authenticate("local")(req, res, function() {
        res.sendStatus(201);
      });
    }

  });

});

app.post("/login", function(req, res) {
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });

  console.log(user);


  req.login(user, function(err) {
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req, res, function() {
        console.log("Zalogowany!");
        res.sendStatus(200);

      })
    }
  });

});


app.get("/users", function(req, res) {

  User.find(function(err, foundUser) {
    if (foundUser) {
      console.log(foundUser);
      res.send(foundUser);
    } else {
      console.log("ERROR - user not found!");
      res.send("This user does not exist");

    }
  });
});


app.post("/users/:userName", function(req, res) {

  User.updateOne({
    username: req.params.userName
  }, {
    $push: {
      measurements: {
        date: req.body.date,
        weight: req.body.weight,
        bmi: req.body.bmi,
        fatLevel: req.body.fatLevel,
        muscleLevel: req.body.muscleLevel
      }
    }
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Succesfully updated account");
    }
  });
  res.sendStatus(201);
});


app.get("/users/:userName/measurements", function(req, res) {

  User.findOne({
    username: req.params.userName
  }, function(err, foundUser) {
    if (foundUser) {
      console.log(foundUser.measurements);
      res.send(foundUser.measurements);
    } else {
      console.log("ERROR - user not found!");
      res.send("This user does not exist");

    }
  });
});


app.post("/calendar", function(req, res) {

  const week = new Week({
    week: req.body.week,
    days: [{
        name: "Monday",
        eight: "Wolne",
        halfPastEight: "Wolne",
        nine: "Wolne",
        halfPastNine: "Wolne",
        ten: "Wolne",
        halfPastTen: "Wolne",
        eleven: "Wolne",
        halfPastEleven: "Wolne",
        twelve: "Wolne",
        halfPastTwelve: "Wolne",
        thirteen: "Wolne",
        halfPastThirteen: "Wolne",
        fourteen: "Wolne",
        halfPastFourteen: "Wolne",
        fifteen: "Wolne",
        halfPastFifteen: "Wolne",
        sixteen: "Wolne"

      },

      {
        name: "Tuesday",
        eight: "Wolne",
        halfPastEight: "Wolne",
        nine: "Wolne",
        halfPastNine: "Wolne",
        ten: "Wolne",
        halfPastTen: "Wolne",
        eleven: "Wolne",
        halfPastEleven: "Wolne",
        twelve: "Wolne",
        halfPastTwelve: "Wolne",
        thirteen: "Wolne",
        halfPastThirteen: "Wolne",
        fourteen: "Wolne",
        halfPastFourteen: "Wolne",
        fifteen: "Wolne",
        halfPastFifteen: "Wolne",
        sixteen: "Wolne"
      },

      {
        name: "Wednesday",
        eight: "Wolne",
        halfPastEight: "Wolne",
        nine: "Wolne",
        halfPastNine: "Wolne",
        ten: "Wolne",
        halfPastTen: "Wolne",
        eleven: "Wolne",
        halfPastEleven: "Wolne",
        twelve: "Wolne",
        halfPastTwelve: "Wolne",
        thirteen: "Wolne",
        halfPastThirteen: "Wolne",
        fourteen: "Wolne",
        halfPastFourteen: "Wolne",
        fifteen: "Wolne",
        halfPastFifteen: "Wolne",
        sixteen: "Wolne"

      },

      {
        name: "Thursday",
        eight: "Wolne",
        halfPastEight: "Wolne",
        nine: "Wolne",
        halfPastNine: "Wolne",
        ten: "Wolne",
        halfPastTen: "Wolne",
        eleven: "Wolne",
        halfPastEleven: "Wolne",
        twelve: "Wolne",
        halfPastTwelve: "Wolne",
        thirteen: "Wolne",
        halfPastThirteen: "Wolne",
        fourteen: "Wolne",
        halfPastFourteen: "Wolne",
        fifteen: "Wolne",
        halfPastFifteen: "Wolne",
        sixteen: "Wolne"
      },

      {
        name: "Friday",
        eight: "Wolne",
        halfPastEight: "Wolne",
        nine: "Wolne",
        halfPastNine: "Wolne",
        ten: "Wolne",
        halfPastTen: "Wolne",
        eleven: "Wolne",
        halfPastEleven: "Wolne",
        twelve: "Wolne",
        halfPastTwelve: "Wolne",
        thirteen: "Wolne",
        halfPastThirteen: "Wolne",
        fourteen: "Wolne",
        halfPastFourteen: "Wolne",
        fifteen: "Wolne",
        halfPastFifteen: "Wolne",
        sixteen: "Wolne"
      },



    ]

  });

  week.save();

  res.sendStatus(201);

})


app.get("/calendar/:weekName", function(req, res) {

  Week.findOne({
    week: req.params.weekName
  }, function(err, foundWeek) {
    if (foundWeek) {
      console.log(foundWeek.days);
      res.send(foundWeek.days);
    } else {
      console.log("ERROR - week not found!");
      res.send("This week does not exist");

    }
  });
});


app.get("/calendar", function(req, res) {

  Week.find(function(err, foundWeek) {
    if (foundWeek) {
      console.log(foundWeek);
      res.send(foundWeek);
    } else {
      console.log("ERROR - week not found!");
      res.send("This week does not exist");

    }
  });
});


app.post("/calendar/:weekName", async function(req, res) {

  console.log(req.body);
  var dayIndicator = 0;

  const week = await Week.findOne({
    week: req.params.weekName
  })

  switch (req.body.name) {
    case "Monday":
      dayIndicator = 0;
      break;
    case "Tuesday":
      dayIndicator = 1;
      break;
    case "Wednesday":
      dayIndicator = 2;
      break;
    case "Thursday":
      dayIndicator = 3;
      break;
    case "Friday":
      dayIndicator = 4;
  };

  switch (req.body.hourOperator) {
    case "eight":
      week.days[dayIndicator].eight = req.body.content;
      break;
    case "halfPastEight":
      week.days[dayIndicator].halfPastEight = req.body.content;
      break;
    case "nine":
      week.days[dayIndicator].nine = req.body.content;
      break;
    case "halfPastNine":
      week.days[dayIndicator].halfPastNine = req.body.content;
      break;
    case "ten":
      week.days[dayIndicator].ten = req.body.content;
      break;
    case "halfPastTen":
      week.days[dayIndicator].halfPastTen = req.body.content;
      break;
    case "eleven":
      week.days[dayIndicator].eleven = req.body.content;
      break;
    case "halfPastEleven":
      week.days[dayIndicator].halfPastEleven = req.body.content;
      break;
    case "twelve":
      week.days[dayIndicator].twelve = req.body.content;
      break;
    case "halfPastTwelve":
      week.days[dayIndicator].halfPastTwelve = req.body.content;
      break;
    case "thirteen":
      week.days[dayIndicator].thirteen = req.body.content;
      break;
    case "halfPastThirteen":
      week.days[dayIndicator].halfPastThirteen = req.body.content;
      break;
    case "fourteen":
      week.days[dayIndicator].fourteen = req.body.content;
      break;
    case "halfPastFourteen":
      week.days[dayIndicator].halfPastFourteen = req.body.content;
      break;
    case "fifteen":
      week.days[dayIndicator].fifteen = req.body.content;
      break;
    case "halfPastFifteen":
      week.days[dayIndicator].halfPastFifteen = req.body.content;
      break;
    case "sixteen":
      week.days[dayIndicator].sixteen = req.body.content;

  };

  console.log(dayIndicator);
  console.log(req.params.weekName);


  console.log(week);
  console.log(dayIndicator);

  week.days[dayIndicator].hourIndicator = req.body.content;
  console.log(week);
  await week.save();
  //  function(err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Succesfully updated account");
  //     console.log(Week)
  //   }
  // });
  res.sendStatus(201);
});



app.post("/users/:userName/messages", function(req, res) {

  console.log(req.body);
  console.log(req.params.userName);

  User.updateOne({
    username: req.params.userName
  }, {
    $push: {
      messages: {
        date: req.body.date,
        direction: req.body.direction,
        message: req.body.message
      }
    }
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Succesfully updated account");
      res.sendStatus(201);
    }
  });

});



app.get("/users/:userName/messages", function(req, res) {


  User.findOne({
    username: req.params.userName
  }, function(err, foundUser) {
    if (foundUser) {
      console.log(foundUser.messages);
      res.send(foundUser.messages);
    } else {
      console.log("ERROR - user or messages not found!");
      res.send("This user or messages does not exist");

    }
  });



});


app.get("/login", function(req, res) {
  if (req.isAuthenticated()) {
    res.redirect("http://localhost:3000/Contact");
  } else {
    res.redirect("http://localhost:3000/LogScreen");
  }


});

app.get("/logout", function(req, res, next) {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:5000/login");
  });
});


app.listen(5000, function() {

  console.log("Server started on port 5000");

});
