/*
Make Thelia lists sortbale with drag and drop

(c) 2019 nicolas@omnitic.com
*/
"use strict";
(function($, window) {
    let delivery_list = document.getElementById('sortable-items-2');
    let delivery = new Sortable(delivery_list, { // delivery
        draggable: ".item",  // Specifies which items inside the element should be draggable
        ghostClass: "item-ghost",  // Class name for the drop placeholder
        chosenClass: "item-drag",  // Class name for the drop placeholder
        dragClass: "item-drag",  // Class name for the drop placeholder

        // Element dragging ended
        onEnd: function (/**Event*/evt) {
            // console.log('Process change');
            // console.dir(evt.item.dataset.moduleId);

           // Reload the page
           location.href = '/admin/module/update-position?module_order=manual&module_id=' + evt.item.dataset.moduleId + '&position=' + ((evt.newIndex + 1) * 1);
        },
    });

    let classic_list = document.getElementById('sortable-items-1');
    let classic = new Sortable(classic_list, { // delivery
        draggable: ".item",  // Specifies which items inside the element should be draggable
        ghostClass: "item-ghost",  // Class name for the drop placeholder
        chosenClass: "item-drag",  // Class name for the drop placeholder
        dragClass: "item-drag",  // Class name for the drop placeholder

        // Element dragging ended
        onEnd: function (/**Event*/evt) {
            // console.log('Process change');
            // console.dir(evt.item.dataset.moduleId);

           // Reload the page
           location.href = '/admin/module/update-position?module_order=manual&module_id=' + evt.item.dataset.moduleId + '&position=' + ((evt.newIndex + 1) * 1);
        },
    });

    let payment_list = document.getElementById('sortable-items-3');
    let payment = new Sortable(payment_list, { // delivery
        draggable: ".item",  // Specifies which items inside the element should be draggable
        ghostClass: "item-ghost",  // Class name for the drop placeholder
        chosenClass: "item-drag",  // Class name for the drop placeholder
        dragClass: "item-drag",  // Class name for the drop placeholder

        // Element dragging ended
        onEnd: function (/**Event*/evt) {
            // console.log('Process change');
            // console.dir(evt.item.dataset.moduleId);

           // Reload the page
           location.href = '/admin/module/update-position?module_order=manual&module_id=' + evt.item.dataset.moduleId + '&position=' + ((evt.newIndex + 1) * 1);
        },
    });

}(window.jQuery, window));