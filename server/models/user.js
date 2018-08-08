const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

var surveySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    
  },

  technicalTag: {type: String}, 
  technicalPoints: {type: Number},
  techSkillType: {type: String},

  softTag: {type: String}, 
  softPoints: {type: Number},
  softSkillType: {type: String},

})

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String,
  selfSurveys: [surveySchema],
  firstName: {
    type: String,
    default: "FirstName"
  },
  lastName: {
    type: String,
    default: "LastName"
  },
  profilePicURL: {
    type: String,
    default: "https://34yigttpdc638c2g11fbif92-wpengine.netdna-ssl.com/wp-content/uploads/2016/09/default-user-img.jpg"
  },
  jobTitle: {
    type: String,
    default: "Full Stack Developer"
  },
  phoneNumber: {
    type: String,
    default: "555-555-5555"
  },
  location: {
    type: String,
    default: "Anytown, USA"
  },
  zipcode: String, 
  relocation: {
    type: String,
    default: "-"
  },
  portfolioURL : {
    type: String,
    default: "/"
  },
  linkedInURL: {
    type: String,
    default: "https://www.linkedin.com/"
  },
  githubURL: {
    type: String,
    default: "https://github.com/"
  },
  aboutYou: {
    type: String,
    default: "Default - Hi, I'm a developer and I love technology!"
  },
  impossibleQuestion: {
    type: String,
    default: "Default - I love documentation! I'd dive right in...as long as it takes."
  },
  deadlineQuestion: {
    type: String,
    default: "Default - Accept what you cannot control. That's my mantra."
  },
  teamQuestion: {
    type: String,
    default: "Default - I love teams! I grew up in a big family!"
  },
  personalityQuestion: {
    type: String,
    default: "Default - I wish I were more outgoing..."
  },
  dissatisfactionQuestion: {
    type: String,
    default: "Default - I am a perfectionist. My manager is always happy - seriously."
  },
  passionQuestion: {
    type: String,
    default: "Default - I love to code, it's all I ever do."
  },
  averageRating: {
      tag: {type: String}, //new object pushed with recalculated values 
      points: {type: Number} //Decimal??
  },
  communitySurveys: [surveySchema],
  });

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
 UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
 UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});


 module.exports = mongoose.model('User', UserSchema);
