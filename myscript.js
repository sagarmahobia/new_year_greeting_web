// Functions 
var generatedUrl = window.location;

//util methods


//return query parameter by key 
function getParameterByName(name) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


//generate url 
function generateUrl(senderName) {
    if (senderName != null && senderName !== "") {

        return "?n=" + encodeURIComponent(senderName);


    } else {
        return null;
    }
}


//set the title..
function setTitle(name) {
    if (name == null) {
        document.title = "Create Happy New Year 2019 Greeting.";
    } else {
        document.title = name + " is wishing you a very Happy New Year!! ";
    }
}


//ui minupulation methods..

function setName(name) {

    $("#name").html(name);

}
function increaseMarginBy(val) {
    $(".greeting").css({ "margin-bottom": val + "px" });
}
///////////////////


function showSharer() {
    $(".share-or-create").css({ "display": "none" });
    $(".form").css({ "display": "none" });
    $(".sharer").css({ "display": "block" });
}

function hideShare() {
    $("#share-button").css({ "display": "none" });
    $("#create-own-button").css({ "width": "100%" });
}




//onCLick Methods.
function onClickCreateYourOwn() {
    $(".share-or-create").css({ "display": "none" });
    $(".form").css({ "display": "block" });
    increaseMarginBy(150);

}

function onClickShare() {
    $(".share-or-create").css({ "display": "none" });
    $(".sharer").css({ "display": "block" });
    increaseMarginBy(150);
}

function onClickCreateNew() {

    var inputName = $("#input-box").val();

    var url = generateUrl(inputName);
    if (url != null) {

        generatedUrl = url;

        window.location = generatedUrl;
    }

}


function onClickFacebookShare() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(generatedUrl), '_blank');
}

function onClickTweet() {
    var msg = 'https://twitter.com/share?url=' + encodeURIComponent(generatedUrl);
    window.open(msg, '_blank');
}

function onClickWhatsAppShare() {
    window.open('whatsapp://send?text=' + document.title.toString() + " click here to open your greeting ->" + encodeURIComponent(generatedUrl), '_blank');
}
 
// on ducument loaded.
$(document).ready(function () {

    $('#input-box').keydown(function (event) {
        if (event.keyCode == 13) {
            onClickCreateNew();
            return false;
        }
    });

    var name = getParameterByName("n");


    if (name != null && name !== "") {

        setName(name);
        setTitle(name);

    } else {

        setTitle(null);
        hideShare();
    }


});


