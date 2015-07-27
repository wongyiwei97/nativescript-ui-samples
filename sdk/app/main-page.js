var frame = require("ui/frame");
var appViewModel = require("./app-view-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = appViewModel.appModel;
}
exports.pageLoaded = pageLoaded;
function selectExample(args) {
    var example = args.view.bindingContext;
    if (example.moduleName) {
        frame.topmost().navigate({
            moduleName: example.moduleName
        });
    }
}
exports.selectExample = selectExample;
