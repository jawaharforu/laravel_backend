function callingPopup(page) {
    $.get("/api/get/helppopup/" + page, function (data, status) {
        $('#content_section p').eq(0).append(data);
    });
}
$(".modal").each(function (l) { $(this).on("show.bs.modal", function (l) { var o = $(this).attr("data-easein"); "shake" == o ? $(".modal-dialog").velocity("callout." + o) : "pulse" == o ? $(".modal-dialog").velocity("callout." + o) : "tada" == o ? $(".modal-dialog").velocity("callout." + o) : "flash" == o ? $(".modal-dialog").velocity("callout." + o) : "bounce" == o ? $(".modal-dialog").velocity("callout." + o) : "swing" == o ? $(".modal-dialog").velocity("callout." + o) : $(".modal-dialog").velocity("transition." + o) }) });
var pathname = window.location.pathname;
var arr = pathname.split("/");
callingPopup(arr[3]);

