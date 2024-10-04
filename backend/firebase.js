const admin = require('firebase-admin')

// Initialize firebase admin SDK
admin.initializeApp({
  credential: admin.credential.cert("./fireBaseLog.json"),
  storageBucket: "test-982d0.appspot.com"
})
// Cloud storage
const bucket = admin.storage().bucket()

module.exports = {
  bucket
}