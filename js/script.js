$(document).ready(function () {
    $(".drawDiv").removeAttr("style");
    $(".dkonvajs-content").removeAttr("style");
    $(".getImage").click(function (e) {
//get image base64 & ... :
// $.ajax({
//                 url: URL,
//                 type: "GET",
//                 dataType: "html",
//                 async: false,
//                 crossDomain: "true",
//                 success: function(data, status) {
//                     console.log("Status: " + status + "\nData: " + data);
//                     result = data;
//
//                     /* creating image */
//                     var img = $('<img id="image_id">');
//                     img.attr("src", "data:image/gif;base64," + data);
//                     img.appendTo("#canvas");
//                 }
//             });
// get url of image (image address):

        // $.ajax({
        //     url: URL,
        //     type: "GET",
        //     dataType: "html",
        //     async: false,
        //     crossDomain: "true",
        //     success: function(data, status) {
        //         console.log("Status: " + status + "\nData: " + data);
        //         result = data;
        //
        //         dwv.gui.getElement = dwv.gui.base.getElement;
        //    dwv.gui.displayProgress = function (percent) {};
        //
        //    // create the dwv app
        //    var app = new dwv.App();
        //    // initialise with the id of the container div
        //        var options = {
        //            "containerDivId": "dwv",
        //            "tools": ["Draw"],
        //
        //        };
        //        app.init(options);
        //    // load dicom data
        //
        //        app.loadURLs(["http://s11.picofile.com/file/8395924226/founder-xray1.png"]);
        //     }
        // });
    });
});

