$(document).ready(function () {
	// Header Scroll
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
	nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();
		sections.each(function () {
			var top = $(this).offset().top - 76
			bottom = top + $(this).outerHeight();
			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});
	nav.find('a').on('click', function () {
		var $el = $(this)
		id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
		return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function () {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function () {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

	//发送邮箱
	$("#submitEmail").click(function () {
		$.ajax({
			type: 'POST',
			url: 'http://www.ooago.com/sendEmail.php',
			dataType: "json",
			timeout: 30000,
			data: {
				username: $("#username").val(),
				email: $("#email").val(),
				val: $("#comments").val(),
			},
			success: function (response) {
				// var obj = eval('(' + response + ')');
				if (response.code == 0) {
					$(".send-email-typedata").html("您的信息已经接收，我会在第一时间回复您")
				} else {
					$(".send-email-typedata").html("抱歉发送失败")
				}
			},
			error: function (xhr, status, error) {
				console.log(error)
				$(".send-email-typedata").html("抱歉发送失败")
			}
		})
	})
});