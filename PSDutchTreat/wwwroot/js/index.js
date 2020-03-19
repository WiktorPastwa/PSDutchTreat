$(document).ready(function() {

    console.log("Hello User");

    var theForm = $("#theForm");
    theForm.hide();

    var button = $("#buyButton");
    button.on("click",
        function() {
            console.log("Buying Item");
        });

    var productInfo = $(".productProps li");
    productInfo.on("click",
        function() {
            console.log("You clicked on " + $(this).text());
        });

    var $loginToggle = $("#loginToogle");
    var $popupForm = $(".popupForm");

    $loginToggle.on("click",
        function() {
            $popupForm.toggle(1000);
        });
});