const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// create helloWorld function
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

const createNotifications = (notification => {
    return admin.firestore().collection("notifications")
        .add(notification)
        .then(doc => console.log("notification added", doc))
})

exports.eventCreated = functions.firestore
    .document('events/{event}')
    .onCreate( doc => {
        const event = doc.data();
        const notification = {
            content: "Added a new event",
            user: event.authorFirstName + " " + event.authorLastName,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotifications(notification);
});

exports.userJoined = functions.auth.user().onCreate(user => {

    return admin.firestore().collection("users")
        .doc(user.uid).get().then(doc => {

            const newUser = doc.data();
            const notification = {
                content: 'Joined the event scheduling platform',
                user: newUser.firstName + ' ' + newUser.lastName,
                time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createNotifications(notification);
        });
});