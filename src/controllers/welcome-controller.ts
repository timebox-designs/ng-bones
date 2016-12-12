module app.controllers {
    class WelcomeController {
        private welcome: string;

        constructor() {
            this.welcome = "Hello World!";
        }
    }

    angular.module("app.controllers")
        .controller("WelcomeController", WelcomeController);
}