import drawerModule = require("nativescript-telerik-ui/sidedrawer");
import observableModule = require("ui/core/dependency-observable");
import frameModule = require("ui/frame");

export class DrawerCallbacksModel extends observableModule.DependencyObservable {

    constructor() {
        super();
    }
    
    public onOpenDrawerTap() {
        var sideDrawer: drawerModule.RadSideDrawer = frameModule.topmost().getViewById("sideDrawer");
        sideDrawer.showDrawer();
    }

    public onDrawerOpening() {
        this.set("currentDrawerNotification", "Drawer opening");
    }

    public onDrawerOpened() {
        this.set("currentDrawerNotification", "Drawer opened");
    }

    public onDrawerClosing() {
        this.set("currentDrawerNotification", "Drawer closing");
    }

    public onDrawerClosed() {
        this.set("currentDrawerNotification", "Drawer closed");
    }
}
