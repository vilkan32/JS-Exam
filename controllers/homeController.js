const homeController = function () {

    const getHome = function (context) {

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
        }).then(function(){
            this.partial('./views/home/home.hbs')
        })
    };

    return {
        getHome
    }
}();