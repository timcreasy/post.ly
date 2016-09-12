const db = require('../db');
// select: false does not return password hash unless specified

let user = db.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true, select: false }
})
module.exports = db.model('User', user)

