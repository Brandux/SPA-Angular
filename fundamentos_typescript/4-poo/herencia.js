// Herencia con TypeScript 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    return Programa;
}());
var EditarVideo = /** @class */ (function (_super) {
    __extends(EditarVideo, _super);
    function EditarVideo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditarVideo.prototype.setTimeline = function (timeline) {
        this.timeline = timeline;
    };
    EditarVideo.prototype.gettimeline = function () {
        return this.timeline;
    };
    EditarVideo.prototype.getAllData = function () {
        return ('Nombre : ' + this.getNombre() + ', version : ' + this.getVersion() + ', Timeline : ' + this.gettimeline());
    };
    return EditarVideo;
}(Programa));
var programas = new EditarVideo();
programas.setNombre('adobePremier');
programas.setVersion(4);
programas.setTimeline(235);
console.log(programas.getAllData());
