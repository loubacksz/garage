$(document).ready(function () {
    $("a").addClass("test");
    $("a").mouseenter(function (event) {
        $("a").removeClass("test");
        event.preventDefault();
        $(this).hide("slow");
    });
});