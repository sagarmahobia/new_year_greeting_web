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
function generateUrl(senderName, inAdvanced) {
    if (senderName != null && senderName !== "") {

        if (inAdvanced) {
            return "?n=" + encodeURIComponent(senderName) + "&a=t";
        } else {
            return "?n=" + encodeURIComponent(senderName);
        }

    } else {
        return null;
    }
}


//set the title..
function setTitle(name) {
    if (name == null) {
        document.title = "Welcome to HNYwish.com . Create Happy New Year 2018 ! greeting.";
    } else {
        document.title = name + " is wishing you a very Happy New Year!! at HNYwish.com ";
    }
}


//ui minupulation methods..

function showInAdvanced() {
    $(".advance").css({ "display": "block" });
}

function hideInAdvanced() {
    $(".advance").css({ "display": "none" });
}


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
    if (inputName.length <= 40) {
        var inputInAdvanced = $("#input-in-advanced").is(":checked");
        var url = generateUrl(inputName, inputInAdvanced);
        if (url != null) {

            generatedUrl = url;

            window.location = generatedUrl;
        }
    } else {
        console.log("Name is too long");
    }
}


function onClickFacebookShare() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(generatedUrl), '_blank');
}

function onClickTweet() {
    var msg = 'https://twitter.com/home/?status=' + encodeURIComponent(generatedUrl);

    if (msg.length <= 140) {
        window.open(msg, '_blank');
    } else {
        console.log("tweet msg is too long (>140).");
    }
}

function onClickWhatsAppShare() {
    window.open('whatsapp://send?text=' + document.title.toString() + " click here to open your greeting ->" + encodeURIComponent(generatedUrl), '_blank');
}


// on ducument loaded.
$(document).ready(function () {

    var name = getParameterByName("n");
    var inAdvance = getParameterByName("a");


    if (name != null && name !== "") {

        setName(name);
        setTitle(name);
        if (inAdvance != null
            && inAdvance !== ""
            && inAdvance === "t") {

            showInAdvanced();
        }
    } else {
        showInAdvanced();
        setTitle(null);
        hideShare();
    }


});