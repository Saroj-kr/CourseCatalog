// $(window).scroll(function() {
//     var height = $('.navbar').outerHeight(true);
//     console.log(height);
//     $('#MenuPadding').height(height + 10);
//   });

$(document).ready(function(){

    var height = $('.navbar').outerHeight(true);

    $('#MenuPadding').height((height - 10) + 'px');

    if($('#UsrNavbar'))
        $('#UsrNavbar').css('top', (height-10) + 'px');
    
});

$(window).scroll(function(){
    
    var height = $('.navbar').outerHeight(true);

    if($('#UsrNavbar'))
        $('#UsrNavbar').css('top', (height-10) + 'px');
})

function enableEditFunction(event) {
    if($("#detailFieldset").attr("disabled")) {
        $("#detailFieldset").removeAttr("disabled");
        $("#enableEdit").html("Save");
    } else {
        $("#detailFieldset").attr("disabled","");
        $("#enableEdit").html("Edit");
    }
}

// $("#btn-sidebar").on("click", function(){
//     console.log($(this));
//     if($(this).hasClass("active"))
//         $(this).removeClass("active");
//     else
//         $(this).addClass("active");
// })

function activateTab(event) {
    $("#usrChildMenuNav a.active").removeClass("active");
    $(this).addClass("active");
}

var ClientScripts = ( function(alertUser, modalName, snackbarMsg, frmName) {
    return {
        dismissModalJs: function(modalName) {
            $('#' + modalName).modal('hide');
        },
        alertUser: function(alertMsg) {
            window.alert(alertMsg);
        },
        snackbar: function(snackbarMsg) {
                var snackbarDiv = document.getElementById("snackbar")
                snackbarDiv.innerHTML = snackbarMsg;
                snackbarDiv.className = "show";
                setTimeout(function(){ snackbarDiv.className = snackbarDiv.className.replace("show", ""); }, 3000);
        },
        toggleFieldset: function(frmName) {
            var fieldset = document.getElementById(frmName);
            fieldset.disabled? fieldset.disabled = false : fieldset.disabled = true;
        },
        isDisabled: function(frmName) {
            var fieldset = document.getElementById(frmName);
            return fieldset.disabled;
        }
    }
})(ClientScripts||{})