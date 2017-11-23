$('#menu-btn').click(function() {
  $('#menu').slideDown(300);
  $('#presentation, #onglet').hide();
  $('.line').css("left", "590px");
  $('.line').css("width", "105px");
});

$('#onglet-btn').click(function() {
  $('#onglet').slideDown(300);
  $('#presentation, #menu').hide();
  $('.line').css("left", "730px");
  $('.line').css("width", "125px");
});

$('#presentation-btn').click(function() {
  $('#presentation').slideDown(300);
  $('#onglet, #menu').hide();
  $('.line').css("left", "400px");
  $('.line').css("width", "155px");
});

$('#adresse').click(function() {
  $('#localisation').show(1000);
});

$('#fermer').click(function() {
  $('#localisation').hide(1000);
});
