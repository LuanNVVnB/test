const CONSTANT = require('../constants/jwt.constant'); 
const jwtOptions = {
    signingKey: CONSTANT.JWT_TOKEN_SECRET,
    cookieName: "JWT-TOKEN",
    expires: "24h"
};
const jwtCommon = require("../jwtcommon")(jwtOptions);

// module.exports =function extractToken(req) {
//     if (
//         req.headers.authorization &&
//         req.headers.authorization.split(" ")[0] === CONSTANT.BEARER
//     ) {
//         return req.headers.authorization.split(" ")[1];
//     } else if (req.query && req.query.token) {
//         return req.query.token;
//     }
//     return null;
// }

module.exports =function createToken(user) {
    let data = jwtCommon.jwtUtil.generateToken(user);
    let token = {
        tokenType: CONSTANT.BEARER,
        accessToken: data
    };
    return token;
}

// module.exports =function verifyToken(token) {
//     return jwtCommon.jwtUtil.getSubject(token);
// };
