const functions = require('firebase-functions');

exports.validateEmail = functions.auth.user().onCreate(async (user) => {
    const email = user.email;
    if (!email || !email.endsWith('@mitmeerut.ac.in')) {
        // If email is not valid, delete the user
        await admin.auth().deleteUser(user.uid);
        throw new functions.https.HttpsError('invalid-argument', 'Invalid email address. Only email addresses ending with @mitmeerut.ac.in are allowed.');
    }
    return;
});
