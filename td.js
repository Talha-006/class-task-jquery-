$(function(){
    $("#addbutton").click(handlebtnclick);
    $("#todos").on("click", ".removebtn", removeMe);
});

function handlebtnclick() {
    var newtodo = $("#myinput").val();
    if (!newtodo) {
        $("#myinput").addClass("error");
        return;
    }
    $("#myinput").removeClass("error");
    $("#todos").append('<tr><td>' + newtodo + '</td><td><button class="removebtn">Remove</button></td></tr>');
}

function removeMe() {
    $(this).closest('tr').fadeOut(function() {
        $(this).remove();
    });
}
