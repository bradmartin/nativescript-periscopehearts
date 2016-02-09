/**
 * Contains the PeriscopeHearts class, which represents a the periscope hearts layout.
 */

declare module "periscopehearts" {
    import * as dependencyObservable from "ui/core/dependency-observable";
    import * as view from "ui/core/view";

    /**
     * Represents a Periscope Hearts component.
     */
    export class PeriscopeHearts extends view.View {        

        /**
         * String value used when hooking to addHeart event.
         */
        public static addHeartEvent: string;

        /**
         * Gets the native [android widget](https://github.com/tyrantgit/HeartLayout) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: any /* tyrantgit.widget.HeartLayout */;
    }

}