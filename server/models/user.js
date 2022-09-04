const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

    Schema = mongoose.Schema;
    const User = new Schema({
      login: String,
      password: String,
      measurements: [{
        date: Date,
        weight: mongoose.Types.Decimal128,
        bmi: mongoose.Types.Decimal128,
        fatLevel: mongoose.Types.Decimal128,
        muscleLevel: mongoose.Types.Decimal128
      }],
      messages: [{
        date: Date,
        message: String,
        direction: Boolean
      }]
    });



    User.plugin(passportLocalMongoose);
    module.exports = mongoose.model('User', User);
