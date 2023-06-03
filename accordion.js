jQuery(document).ready(function(){

		jQuery('#opis-kategorii h2').each(function(){
		jQuery(this).nextUntil('h2').wrapAll('<div />');
		jQuery(this).addClass('h2').after('<span class="accordion">+</span>');
		jQuery(this).nextUntil('h2').addBack().wrapAll('<div class="content" />');
		jQuery('.term-description div').addClass('panel');

	});

	var acc = document.getElementsByClassName('h2'); //odkrywanie po nacisnięciu na nagłówek
	var acc1 = document.getElementsByClassName('accordion'); //odkrywanie po nacisnięciu na plus
	var i;
//odkrywanie po nacisnięciu na nagłówek
	for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
     this.classList.toggle('active');
    var panel = this.nextElementSibling.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }});
    //odkrywanie po nacisnięciu na plus
		acc1[i].addEventListener('click', function() {
     this.classList.toggle('active');
    var panel1 = this.nextElementSibling;
    if (panel1.style.display === 'block') {
      panel1.style.display = 'none';
    } else {
      panel1.style.display = 'block';
    }
   });
	}});fg
