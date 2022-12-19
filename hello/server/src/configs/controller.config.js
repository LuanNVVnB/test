const { ControllerConstant } = require('../constants/api.constant');
const { AppRouting } = require('../routes/app.routing');


const registerController = (expr) => {
    expr.use(ControllerConstant.App, AppRouting);
}

module.exports = {
    registerController
};