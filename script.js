$('.welcome-screen').fadeIn();

// Common buttons across screens
$('.btn-scaredy-cat').click(function () {
    // hide all screens
    $('.screen').hide();
    // show the one we want
    $('.scaredy-cat-screen').fadeIn();
});

$(".btn-try-again").click(function () {
    // hide all screens
    $('.screen').hide();
    // show the one we want
	$(".welcome-screen").fadeIn();
});

$('.btn-fail').click(function() {
    // hide all screens
    $('.screen').hide();
    // show the one we want
	$('.fail-screen').fadeIn();
});


// User clicks Enter
$('.btn-enter').click(function () {
    $('.welcome-screen').hide();
    $('.enter-path-screen-1').fadeIn();
});

// Enter: Screen 1
$('.hidden-portal').dblclick(function() {
    $('.enter-path-screen-1').hide();
	$('.enter-path-screen-2').fadeIn();
});

// Enter: Screen 2
$('.btn-shoot').click(function() {
    $('.enter-path-screen-2').hide();
    $('.enter-path-screen-3').fadeIn();
});

// Enter: Screen 3
$('.correct-answer').click(function() {
    $('.enter-path-screen-3').hide();
    $('.enter-path-screen-4').fadeIn();
});

$('.wrong-answer').click(function() {
    $('.enter-path-screen-3').hide();
    $('.fail-screen').fadeIn();
});

// Enter: Screen 4
$('.sun-god').mouseleave(function() {
    $('.enter-path-screen-4').hide();
    $('.enter-path-screen-5').fadeIn();
});

// Bonus: petting the Sphynx
$('.sphynx').dblclick(function() {
    $('.sphynx-talk').show();
});