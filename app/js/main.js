$(document).ready(function() {
    table = $('#dataTable').dataTable({
    	"lengthMenu":  [5, 10, 15, 20]
    });
    $('#searchTable').keyup(function() {
        table.fnFilter($(this).val()).draw();
    });
    $('#next').on( 'click', function () {
	    table.page( 'next' ).draw( 'page' );
	} );

	$('#previous').on( 'click', function () {
	    table.page( 'previous' ).draw( 'page' );
	} );

	var info = table.page.info();

	$('#tableInfo').html(
	    'Currently showing page '+(info.page+1)+' of '+info.pages+' pages.'
	);

});

