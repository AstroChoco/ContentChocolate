
function hide(id) {
    document.getElementById(id).style.display = "none";
}

function show(id) {
    document.getElementById(id).style.display = "inline-block";
}

function hideClass(className) {
    var subs = document.getElementsByClassName(className);
    for(var i = 0; i < subs.length; i++){
        subs[i].style.display = 'none';
    }
}

function showClass(className) {
    var subs = document.getElementsByClassName(className);
    for(var i = 0; i < subs.length; i++){
        subs[i].style.display = 'inline-block';
    }
}

function showContent(div_id) {
    hideClass('contentAreas');
    document.getElementById('intro-works').innerHTML = document.getElementById(div_id).innerHTML;
}

function hideAndShow(hide_id, show_id) {
    hideClass('bittenButton');
    hideClass('chocolateBite');
    showClass('notBittenButton');
    hide(hide_id);
    show(show_id + 'BittenButton');
    show(show_id + 'Bite');
}

