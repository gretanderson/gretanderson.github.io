$(document).ready(function() {
		$(".Month").click(function(){$(".Month.active").removeClass("active"); 
			$(this).addClass("active"); 
		});

		$(".year-total").click(function() {$(".card").hide(); 
			$("#year").show(); 
			$(".Month.active").removeClass("active");
		});

		$("#year").on('click', function() {$(".card").hide();
			$("#year-total").show();
		});

		$("#Jan").on('click', function() {$(".card").hide();
			$("#card-Jan").show();
		});

		$("#Feb").on('click', function() {$(".card").hide();
			$("#card-Feb").show();
		});

		$("#Mar").on('click', function() {$(".card").hide();
			$("#card-Mar").show();
		});

		$("#Apr").on('click', function() {$(".card").hide();
			$("#card-Apr").show();
		});

		$("#Ma").on('click', function() {$(".card").hide();
			$("#card-Ma").show();
		});

		$("#Jun").on('click', function() {$(".card").hide();
			$("#card-Jun").show();
		});

		$("#Jul").on('click', function() {$(".card").hide();
			$("#card-Jul").show();
		});

		$("#Aug").on('click', function() {$(".card").hide();
			$("#card-Aug").show();
		});

		$("#Sept").on('click', function() {$(".card").hide();
			$("#card-Sept").show();
		});

		$("#Oct").on('click', function() {$(".card").hide();
			$("#card-Oct").show();
		});

		$("#Nov").on('click', function() {$(".card").hide();
			$("#card-Nov").show();
		});

		$("#Dec").on('click', function() {$(".card").hide();
			$("#card-Dec").show();
		});
});