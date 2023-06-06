const UserModel = require('../model/user.model');

exports.getLoginPage = (req, res) => {
    res.render('login');
}

exports.login = async (req, res) => {


    const { username, password } = req.body;
    console.log('Login request:', username, password);
    try {
        const user = await UserModel.findOne({ username });
        console.log(user)
        if (user) {
            if (password === user.password) {
                res.render('login-successful');
            } else {
                res.render("invalid-password");
            }
        } else {
            res.render('user-not-found');
        }
    } catch (error) {
        console.error(error);
        res.render('error');
    };








}










/*const { username, password } = req.body;


if (username === 'admin' && password === 'password') {
    res.send('Login successful');
} else {
    res.send('Invalid username or password');
}
*/


