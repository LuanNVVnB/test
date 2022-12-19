const BasePathConstant = '/api/v1';

const ControllerConstant = {
    App: `${BasePathConstant}/app`,
    Authentication:`${BasePathConstant}/auth`,
    Role:`${BasePathConstant}/role`
}

const CommonMethodConstant = {
    GetAll: '/get-all',
    PostLogin:'/login/',
    PostRegister:'/register/',
    
   
}

module.exports = {
    CommonMethodConstant,
    ControllerConstant
};