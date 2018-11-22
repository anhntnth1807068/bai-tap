// var arrayP = document.getElementsByTagName('p');
// for (var i = 0; i < arrayP.length; i++) {
//     arrayP[i].style = 'color:red';
// }

$('p').attr('style', 'color:red');
$('p').text('Hung Ho Hung');
$('p').html('<span style="color:pink;">Hung Hong Ho Hung</span>');

// document.forms['demo-form']['btn-submit'].onclick = function () {
//     alert(document.forms['demo-form']['username'].value);
// }

$('form[name="demo-form"] [name="btn-submit"]').click(function () {
    $('form[name="demo-form"] [name="username"]').toggle();
    // show, hide, toogle, fadeIn, fadeOut, fadeToggle(1000)
});