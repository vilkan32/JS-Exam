const userController = function () {

    const getRegister = function (context) {

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs",
            notifications: "./views/common/notifications.hbs"
        }).then(function () {
            this.partial('./views/register/registerPage.hbs')
        })
    };

    const getLogin = function (context) {
        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs",
            notifications: "./views/common/notifications.hbs"
        }).then(function () {
            this.partial('./views/login/loginPage.hbs')
        })
    };

    const postRegister = function (context) {

        userModel.register(context.params)
            .then(helper.handler)
            .then((data) => {
                storage.saveUser(data);
                homeController.getHome(context);
            })
    };

    const postLogin = function (context) {
        userModel.login(context.params)
            .then(helper.handler)
            .then((data) => {
                storage.saveUser(data);
                console.log(data);
                context.app.setLocation('#/home');
                homeController.getHome(context);
            })
    };

    const logout = function (context) {

        userModel.logout()
            .then(helper.handler)
            .then(() => {
                storage.deleteUser();
                homeController.getHome(context);
            });
    };

    const shareRecipe = function (context) {

        const loggedIn = storage.getData('userInfo') !== null;

        if(loggedIn){
            const names = JSON.parse(storage.getData('userInfo')).names;
            context.loggedIn = loggedIn;
            context.names = names;
        }

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs",
            notifications: "./views/common/notifications.hbs"
        }).then(function () {
            this.partial('./views/receips/createReceip.hbs')
        })
    };

    const postShareRecipe = function (context) {

        console.log(context);

    };

    return {
        getRegister,
        postRegister,
        getLogin,
        postLogin,
        logout,
        shareRecipe,
        postShareRecipe
    }
}();