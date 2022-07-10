const jwt = require('jsonwebtoken');
const UserModel = require('../../models/user');

const generateAccessToken = (data) => {
    if (!data) return null

    delete data.password
    return jwt.sign(data, process.env.TOKEN, { expiresIn: '24h' })
}

const auth = async (data) => {

    const user = await UserModel.findOne({ login: data.login, password: data.password })

    return generateAccessToken(user)
}

const checkToken = async (req, res, next) => {
    const token = req.headers["authorization"];
    const user = await UserModel.findOne({ token })
    if (!token || !user) {
        return res.status(403).send("Vous n'êtes pas autorisé");
    }
    try {
        const decodetoken = jwt.verify(token, process.env.TOKEN);
        req.user = decodetoken;
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
    return next();
};

module.exports = { checkToken, generateAccessToken, auth };