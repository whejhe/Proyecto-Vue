const user = require('./user.routes');
const profile = require('./profileRoute');
const grupoRoute = require('./grupoRoute');
// const albumRoute = require('./albumRoute');
// const songRoute = require('./songRoute');

module.exports = [
    user,
    profile,
    grupoRoute,
    // albumRoute,
    // songRoute,
];