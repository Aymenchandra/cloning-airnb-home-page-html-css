window.onload
{
    NavAttribut = ["Hébergements","Expériences","Expériences En ligne"];
    document.getElementById("NavAttribut1").innerHTML = NavAttribut[0];
    document.getElementById("NavAttribut2").innerHTML = NavAttribut[1];
    document.getElementById("NavAttribut3").innerHTML = NavAttribut[2];
    // document.getElementById("icon").style.display = "none";
}
$("#Textsearch").click(function() {
    $("nav").addClass("showbothnav");
    document.getElementById("NavAttribut1").innerHTML = NavAttribut[0];
    document.getElementById("NavAttribut2").innerHTML = NavAttribut[1];
    document.getElementById("NavAttribut3").innerHTML = NavAttribut[2];
  });

$(window).scroll(function () {
    
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
        $("nav").removeClass("showbothnav");
        document.getElementById("Textsearch").innerHTML = "Commencez vous recherche";
        document.getElementById("search").style.display = "inline";
        // document.getElementById("icon").style.display = "inline";
        document.getElementById("NavAttribut1").innerHTML="";
        document.getElementById("NavAttribut2").innerHTML = "";
        document.getElementById("NavAttribut3").innerHTML = "";
        }
        else {
        $("nav").removeClass("black");
        document.getElementById("search").style.display = "none";
        // document.getElementById("navbar2").style.display = "none";
        // document.getElementById("icon").style.display = "none";
        document.getElementById("Textsearch").innerHTML = "Commencez vous recherche";
        document.getElementById("NavAttribut1").innerHTML = NavAttribut[0];
        document.getElementById("NavAttribut2").innerHTML = NavAttribut[1];
        document.getElementById("NavAttribut3").innerHTML = NavAttribut[2];
        document.getElementById("NavAttribut1").style.color = "white";
        document.getElementById("NavAttribut2").style.color = "white";
        document.getElementById("NavAttribut3").style.color = "white";
        }
});