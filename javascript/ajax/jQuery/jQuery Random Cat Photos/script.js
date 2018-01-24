$(document).ready(function () {
    $("#btn").click(function () {
        $.getJSON("https://random.cat/meow")
            .done(changePic)
            .fail(function () {
                alert("OH NO! FAILED!");
            })
    })

    function changePic(data) {
        $("#photo").attr("src", data.file);
    };
});