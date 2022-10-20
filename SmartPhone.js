"use strict";
exports.__esModule = true;
exports.SmartPhone = void 0;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.estaPrendido = false;
    }
    SmartPhone.prototype.prender = function () {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
    };
    SmartPhone.prototype.apagar = function () {
        if (this.estaPrendido == true) {
            this.estaPrendido = false;
        }
    };
    SmartPhone.prototype.llamar = function (numero) {
        console.log("llamando a: ", numero);
    };
    SmartPhone.prototype.sacarFoto = function () {
        console.log("sacando foto");
    };
    return SmartPhone;
}());
exports.SmartPhone = SmartPhone;
