
import viewModel = require("./item-loading-model");
var listView;
var lblSelection;
export function onPageLoaded(args) {
    var page = args.object;
    listView = page.getViewById("listView");
    lblSelection = page.getViewById("txtSelection");
    page.bindingContext = new viewModel.ViewModel();
}

export function onItemSelected(args) {

    var selectedItems = listView.getSelectedItems();
    var selectedTitles = "Selected items: ";
    for (var i = 0; i < selectedItems.length; i++) {
        selectedTitles += selectedItems[i].itemName;

        if (i < selectedItems.length - 1) {
            selectedTitles += ", ";
        }
    }

    lblSelection.text = selectedTitles;
}

export function onItemDeselected(args) {

    var selectedItems = listView.getSelectedItems();
    var selectedTitles = "Selected items: ";
    for (var i = 0; i < selectedItems.length; i++) {
        selectedTitles += selectedItems[i].itemName;

        if (i < selectedItems.length - 1) {
            selectedTitles += ", ";
        }
    }

    lblSelection.text = selectedTitles;
}

export function onItemLoading(args) {
    console.log(args.itemIndex);
    if (args.itemIndex % 2 == 0){
        args.view.backgroundColor="#2fcbf9";
    }
    else {
        args.view.backgroundColor="#cbcbcb";
    }
}