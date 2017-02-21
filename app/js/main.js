$(document).ready(function() {
    table = $('#dataTable').dataTable({
        // "searching":false
    });
    $('#searchTable').keyup(function() {
        table.fnFilter($(this).val()).draw();
    });

	table.on("draw.dt", function (e) {
	    setCustomPagingSigns.call($(this));
	}).each(function () {
	    setCustomPagingSigns.call($(this)); // initialize
	});

	// this should work with standard datatables styling - li.previous/li.next
	function setCustomPagingSigns() {
	    var wrapper = this.parent();
	    wrapper.find("li.previous > a").text("<");
	    wrapper.find("li.next > a").text(">");
	}

	//  - a.previous/a.next
	function setCustomPagingSigns() {
	    var wrapper = this.parent();
	    wrapper.find("a.previous").text("<");
	    wrapper.find("a.next").text(">");
	}

	// this one works with complex headers example, bootstrap style
	function setCustomPagingSigns() {
	    var wrap = this.closest(".dataTables_wrapper");
	    var lastrow= wrap.find("div.row:nth-child(3)");
	    lastrow.find("li.previous>a").text("<");
	    lastrow.find("li.next>a").text(">");
	}

});

