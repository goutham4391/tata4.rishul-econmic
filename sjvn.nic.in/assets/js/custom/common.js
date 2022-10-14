$(document).on("click", ".changeLanguage", function (e) {
    e.preventDefault();
    $.ajax({
        url: "/home/changelanguage",
        contentType: "application/json; charset=utf-8",
        data: { "id": $(this).attr("data-Id") },
        dataType: "json",
        success: function (response) {
            location.reload();
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    });
});

$(document).on("click", ".changeCustomTheme", function (e) {
    e.preventDefault();
    $.ajax({
        url: "/home/ChangeTheme",
        contentType: "application/json; charset=utf-8",
        data: { "theme": $(this).attr("data-Id") },
        dataType: "json",
        success: function (response) {  
            $("body").removeClass();
            $('body').addClass(response);            
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
    });
});

$(document).on("click", ".pager-link a", function (e) {
    e.preventDefault();
    var action = $(this).attr("href");
    var thisObject = $(this);
    if (action !== "#" && action !== null && action !== undefined && action.trim() !== "") {
        $.ajax({
            url: action,
            type: "POST",
            data: "page=" + thisObject.attr("data-page") + "&sortby=" + thisObject.attr("table-sortby") + "&pagerow=" + thisObject.attr("item-page"),
            cache: false,
            beforeSend: function () {

            },
            success: function (data) {
                $(".target-load").html(data);
                $('html, body').animate({ scrollTop: 200 }, 'slow');
            },
            complete: function () {
            },
            error: function () {
            }
        });
    }
});

$(document).on("change", "#PageSize", function (e) {
    e.preventDefault();
    $.ajax({
        url: $("#PageUrl").val(),
        type: "POST",
        data: "page=" + 1 + "&sortby=" + "" + "&pagerow=" + $("#PageSize option:selected").val(),
        cache: false,
        beforeSend: function () {
        },
        success: function (data) {
            $(".target-load").html(data);
        },
        complete: function () {
        },
        error: function () {
        }
    });
});


