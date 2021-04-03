$("#mewe") .mouseover(function () {
    this.src= "assets/img/logo/TheMeWeLogo-black.png";
    $("#mewe").css("border-color","black");
 })
 .mouseout(function () {
    this.src= "assets/img/logo/TheMeWeLogo-red.png";
    $("img").css("border-color","#E51200");
});

$("#etsyRamen").load("assets/blog/etsy.html #ramenShirt");

$("#mawanVlog").load("assets/blog/mawanVlog.html #mawanVlog");

$("#oldVersion").load("assets/blog/oldVersion.html #oldVersion");