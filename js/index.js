let aboutOffset = $("#about").offset().top

$(window).scroll(function () {
  let SrcollWindow = $(window).scrollTop();
  if (SrcollWindow >= aboutOffset) {
    $("#main-nav").css("background-color", "teal")
    $("#icon").fadeIn(1000)
  }
  else {
    $("#main-nav").css("background-color", "transparent")
    $("#icon").fadeOut(1000)
  }
})
$(".nav-link").click(function (e) {
  let Href = $(e.target).attr("href")
  let offsetTop = $(Href).offset().top
  $("body,html").animate({ scrollTop: offsetTop }, 3000)
})


$("#icon").click(function () {
  $("body,html").animate({ scrollTop: "0px" }, 3000)
})


$("document").ready(function () {
  $("#loadingPage").slideUp(2000, function () {
    $("body").css("overflow", "auto")
  });

})

let boxs = $(".box");

boxs.eq(0).css("backgroundColor","teal")
boxs.eq(1).css("backgroundColor","red")
boxs.eq(2).css("backgroundColor","gray")
boxs.eq(3).css("backgroundColor","yellow")
boxs.eq(4).css("backgroundColor","tomato")


let ouerWidth = $("#innerBox").outerWidth();
$("#settings").click(function () {
  let leftBox = $("#outerBox").css("left")
  if (leftBox == "0px") {
    $("#outerBox").animate({ left: `-${ouerWidth}px` }, 1000)
  }
  else {
    $("#outerBox").animate({ left: `0px` }, 1000)
  }

})


// $("#outerBox").css({left:`-${ouerWidth}px`})

$(".box").click(function (e) {
  let Color = $(e.target).css("background-color")
  $(".change").css("color",Color)
  $(".changebg").css("background-color",Color)
})


