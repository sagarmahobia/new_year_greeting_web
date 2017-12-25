// Functions 
var generatedUrl = window.location;
function getSiteName() {
    return window.location.host+"/index.html";

}
function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function encodeName(senderName) {
    return encodeURIComponent(senderName);
    //to be implemented
}

function generateUrl(senderName, inAdvanced) {
    if (senderName != null && senderName !== "") {

        if (inAdvanced) {
            return getSiteName() + "?n=" + encodeName(senderName) + "&a=t";
        } else {
            return getSiteName() + "?n=" + encodeName(senderName);
        }

    } else {
        return null;
    }
}

function showInAdvanced() {
    $(".advance").css({ "display": "block" });
}

function hideInAdvanced() {
    $(".advance").css({ "display": "none" });
}


function setName(name) {

    $("#name").html(name);

}

function setTitle(name){
    document.title = name +" is wishing you a very Happy New Year";
}


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
    console.log("onClickCreateYourOwn() clicked");
}

function onClickShare() {
    $(".share-or-create").css({ "display": "none" });
    $(".sharer").css({ "display": "block" });
    console.log("onClickOnClickShare() clicked");
}

function onClickCreateNew() {
    console.log("create new");
    var inputName = $("#input-box").val();
    var inputInAdvanced = $("#input-in-advanced").is(":checked");
    var url = generateUrl(inputName, inputInAdvanced);
    if (url != null) {
        setName(inputName);
        setTitle(inputName);
        if (inputInAdvanced) {
            showInAdvanced();

        } else {
            hideInAdvanced();
        }

        showSharer();
        generatedUrl = url;
    }
}


function onClickFacebookShare() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(generatedUrl), '_blank');
}

function onClickWhatsAppShare() {
    window.open('whatsapp://send?text=' + document.title.toString() + " click to see ->" + generatedUrl, '_blank');
}


// A $( document ).ready() block.
$(document).ready(function () {

    var name = getParameterByName("n");
    var inAdvance = getParameterByName("a");


    if (name != null && name !== "") {

        setName(name);
        setTitle(name);
        if (inAdvance != null && inAdvance !== "" && inAdvance === "t") {
            //user is visiting the greeting page
            //and in advanced is visible

            showInAdvanced();
        }  
    } else {
        showInAdvanced();
        setName("Your Name");
        setTitle("Sagar");
        hideShare();
    }


});