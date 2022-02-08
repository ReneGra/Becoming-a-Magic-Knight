$(".yesno") .hide();
$(".yesno2") .hide();
$(".start-button2").hide();
$(".start-button3").hide();
$(".message-1").hide();
$(".message-2").hide();
$(".message-3").hide();
$(".message-4").hide();
$(".message-5").hide();
$(".message-6").hide();
$(".restart").hide();


$(".start-button").click(function() {
	$(".firstImage") .attr("src","https://pbs.twimg.com/media/E56KudnXMAEY_js?format=jpg&name=large");
	$(".message-1") .show();
    $(".title").hide();
	$(".start-button2").show();
	$(".start-button").hide();
    $(".restart").show();
});

$(".restart").click(function() {
    $(".firstImage") .attr("src","https://static.wikia.nocookie.net/blackclover/images/a/a3/Asta_anime_profile.png/revision/latest/scale-to-width-down/250?cb=20180708200543");
    $(".title").show();
    $(".yesno") .hide();
	$(".yesno2") .hide();
	$(".start-button2").hide();
	$(".start-button3").hide();
	$(".message-1").hide();
	$(".message-2").hide();
	$(".message-3").hide();
	$(".message-4").hide();
	$(".message-5").hide();
	$(".message-6").hide();
	$(".restart").hide();
    $(".start-button").show();
    $(".treasure").hide();
});
    
 
$(".start-button2").click(function() {
    $(".message-1").hide();
    $(".message-2").show();
    $(".message-3").show();
    $(".start-button2").hide();
    $(".yesno").show();
    $(".nob").show();
    $(".firstImage") .attr("src","https://files.cults3d.com/uploaders/13404053/illustration-file/01d3577d-1271-4c8c-b682-dc7ea9c5fefd/727c93ee0f42adec30ce9f020d2bca47_large.jpg");

});

$(".yesb").click(function() {
    $(".message-2").hide();
    $(".message-3").hide();
    $(".message-4").show();
    $(".message-5").show();
    $(".firstImage") .attr("src","https://media.comicbook.com/2020/09/black-clover-spade-kingdom-war-asta-magic-knights-spoilers-manga-1236104.jpeg?auto=webp");
    $(".yesno").hide();
    $(".yesno2").show();
    $(".yesb2").show();
});

$(".nob").click(function() {
    $(".message-6").show();
    $(".firstImage") .attr("src","https://lh3.googleusercontent.com/proxy/uN0x3UIWcZ3MxPqRcQalVHoSGTDXjINBGKDu1lpHSdf1RNFbSXUvCgwT9tlbntz6ylLVSeWZ2RwmmFud7wCwghGWNfeEewP6a8RYurWxoTSTd_XL50198-ZiVfERh5kWI3MoJNyKJ8TJpQ");
    $(".title").show();
    $(".yesno") .hide();
	$(".yesno2") .hide();
	$(".start-button2").hide();
	$(".start-button3").hide();
	$(".message-1").hide();
	$(".message-2").hide();
	$(".message-3").hide();
	$(".message-4").hide();
	$(".message-5").hide();
});

$(".yesb2").click(function() {
    $(".treasure").show();
    $(".firstImage") .attr("src","https://c.tenor.com/K8sFhOWZ-JkAAAAM/black-clover-asta.gif");
    $(".nob").hide();
    $(".message-4").hide();
    $(".message-5").hide();
    $(".yesb2").hide();
    
});
