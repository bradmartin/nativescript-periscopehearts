import { Color } from "color";
import { View } from "ui/core/view";

declare var tyrantgit: any;

export class PeriscopeHearts extends View {
    private _android: tyrantgit.widget.HeartLayout;

    get android(): tyrantgit.widget.HeartLayout {
        return this._android;
    }

    public _createUI() {
        this._android = new tyrantgit.widget.HeartLayout(this._context);
    }

    public addHeart(userColor: any) {
        this._android.addHeart(new Color(userColor).android);
    }

}