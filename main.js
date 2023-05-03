// // ------------- Search Page -------- // //
var SearchBar = document.getElementById("search-bar")
var customize = document.getElementById("customize")
var BarCustomize = document.getElementById("bar-customize")
console.log(customize.style)
SearchBar.addEventListener('click', function() {
    document.getElementById("seachPage").style.display = "flex"
});
document.getElementById("close-search").addEventListener('click', function() {
    document.getElementById("seachPage").style.display = "none"
});

// // ------------- Menu NavBar -------- // //
document.getElementById("menu-nav").addEventListener('click', function() {
    document.getElementById("list-nav2").style.display = "block"
});
document.getElementById("close-menu").addEventListener('click', function() {
    document.getElementById("list-nav2").style.display = "none"
});
// // ------------- Customize Bar -------- // //
document.getElementById("customize").addEventListener('click', function() {
    if (customize.style.right == "0px") {
        customize.style.right = "195px"
        BarCustomize.style.cssText = "transform: translate(0%);"
    } else {
        customize.style.right = "0px"
        BarCustomize.style.cssText = "transform: translate(100%);"
    }
});
document.getElementById("CloseBar").addEventListener('click', function() {
    customize.style.right = "0px"
    BarCustomize.style.cssText = "transform: translate(100%);"
});
// // ------------- TheEmail -------- // //
var TheEmail = document.getElementById("TheEmail");
var ErorMail = document.getElementById("ErorMail");
var submitBtn = document.getElementById("submit-btn");

TheEmail.addEventListener("focusout", function() {
    ChackEmail()
    TheEmail.addEventListener("input", ChackEmail);
});
submitBtn.addEventListener("click", submitEror);

// // ------------- TheEmail Functions -------- // //
function ChackEmail() {
    if (!TheEmail.checkValidity()) {
        ErorMail.innerHTML = "Please enter a valid email address.";
        TheEmail.style.outlineColor = "red"
    } else {
        ErorMail.innerHTML = "";
        TheEmail.style.outlineColor = "rgba(0, 0, 0, 0.452)"
    }
}

function submitEror() {
    if (TheEmail.checkValidity()) {
        alert("تم الإرسال !");
    } else {
        ErorMail.innerHTML = "** BEFOR SENT ** Please enter a valid email address .";
    }
}