var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var color = require("color");
var view = require("ui/core/view");
global.moduleMerge(exports);
var PeriscopeHearts = (function (_super) {
    __extends(PeriscopeHearts, _super);
    function PeriscopeHearts() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(PeriscopeHearts.prototype, "android", {
        get: function () {
            return this._android;
        },
        enumerable: true,
        configurable: true
    });
    PeriscopeHearts.prototype._createUI = function () {
        this._android = new tyrantgit.widget.HeartLayout(this._context);
    };
    PeriscopeHearts.prototype.addHeart = function (userColor) {
        this._android.addHeart(new color.Color(userColor).android);
    };
    return PeriscopeHearts;
})(view.View);
exports.PeriscopeHearts = PeriscopeHearts;
