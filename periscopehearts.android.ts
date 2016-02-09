import color = require("color");
import view = require("ui/core/view");

global.moduleMerge(exports);

export class PeriscopeHearts extends view.View {
    private _android: tyrantgit.widget.HeartLayout;

    get android(): tyrantgit.widget.HeartLayout {
        return this._android;
    }

    public _createUI() {
        this._android = new tyrantgit.widget.HeartLayout(this._context);
    }

    public addHeart(userColor: any) {
        this._android.addHeart(new color.Color(userColor).android);
    }

}