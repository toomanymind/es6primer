const routes = require('./routes');


function router(pathname) {
    let handler = routes[pathname];
    return handler ? handler() : '404'
}


module.exports = router;


