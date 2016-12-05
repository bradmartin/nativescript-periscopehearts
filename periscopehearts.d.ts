import { View } from "ui/core/view";
import { Color } from "color";

/**
 * Represents a Periscope Hearts component.
 */
export declare class PeriscopeHearts extends View {

    /**
     * Gets the native [android widget](https://github.com/tyrantgit/HeartLayout) that represents the user interface for this component. Valid only when running on Android OS.
     */
    android: any /* tyrantgit.widget.HeartLayout */;

    /**
     * Adds a heart into the layout.
     * @param {string} - The color of the heart. 
     */
    addHeart(string: Color): void;


}
