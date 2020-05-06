const app = Sammy("#main", function () {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', homeController.getHome);

    // User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);
    this.get('#/logout', userController.logout);
    this.get("#/share", userController.shareRecipe)
    //postShareRecipe
    this.post("#/share", userController.postShareRecipe)
});

(() => {
    app.run('#/home');
})();