/*function showMindmap() {

        off = document.getElementById("intro-works);
        on = document.getElementById("mindmapContent");
        if(on.style.display == "none")
            {
                off.style.display = "none";
                on.style.display = "block";
            }
        else
            {
                off.style.display = "block";
                on.style.display = "none";
            }*/

function show(param_div_id) {
    document.getElementById('intro-works').innerHTML = document.getElementById(param_div_id).innerHTML;
  }



function biteChocolate() {
    var fullChocolate = document.getElementById("fullChocolate");
    var chocolateBite = document.createElement("chocolateBite");
    fullChocolate.parentNode.replaceChild(chocolateBite, fullChocolate);
    /*var off = document.getElementById("fullChocolate);
    var on = document.getElementById("chocolateBite");
            if(on.style.display == "none")
                {
                    off.style.display = "none";
                    on.style.display = "inline-block";
                }
            else
                {
                    off.style.display = "inline-block";
                    on.style.display = "none";

                }  */

}


/*function biteChocolate() {
    var chocolateBite = document.createElement{"button"};
    chocolateBite.id = "chocolateBite";
    var fullChocolate = document.getElementById("fullChocolate");
    var parentButton = fullChocolate.parentNode;
    parentButton.replaceChild(chocolateBite, fullChocolate)
    
}  */


