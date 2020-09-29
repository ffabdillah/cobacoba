// Event
$('.page-scroll').on('click', function(Event){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// menagkap elemen
	var elemenTujuan = $(tujuan);

	//pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top -50
	}, 1250);


	Event.preventDefault();
});