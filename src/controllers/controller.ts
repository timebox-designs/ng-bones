module app.controllers {
    class Controller {
        private welcome: string;

        constructor() {
            this.welcome = "Hello World!";
        }
    }

    angular.module("app.controllers")
        .controller("controller", Controller);
}