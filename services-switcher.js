$('document').ready(function() {



	$('#strategy-service').on('click', function() {

		$('#ux-service').removeClass('active');
		$('#dev-service').removeClass('active');
		$('#digital-service').removeClass('active');
		$('#strategy-service').addClass('active');

		var animateInStrategyTimeline = anime.timeline({
			autoplay: true
		});

		animateInStrategyTimeline
			.add({
				targets: '.service-desc-loader-overlay',
				height: ["0%", "100%"],
				duration: 300,
				easing: "easeInOutQuart",
				complete: function(anim) {
					$('#ux-desc').hide();
					$('#digital-desc').hide();
					$('#dev-desc').hide();
					$('#strategy-desc').show();
					$('.service-desc-loader-overlay').css('bottom', '0').css('top', '');
				}
			})
			.add({
				targets: '.service-desc-loader-overlay',
				height: ["100%", "0%"],
				duration: 300,
				offset: 300,
				easing: "easeInOutQuart",
				complete: function(anim) {
					$('.service-desc-loader-overlay').css('top', '0');
				}
			});


	});





	$('#ux-service').on('click', function() {

		$('#strategy-service').removeClass('active');
		$('#dev-service').removeClass('active');
		$('#digital-service').removeClass('active');
		$('#ux-service').addClass('active');

		var animateInUXTimeline = anime.timeline({
			autoplay: true
		});

		animateInUXTimeline
			.add({
				targets: '.service-desc-loader-overlay',
				height: ["0%", "100%"],
				duration: 300,
				easing: "easeInOutQuart",
				complete: function(anim) {
					$('#strategy-desc').hide();
					$('#dev-desc').hide();
					$('#digital-desc').hide();
					$('#ux-desc').show();
					$('.service-desc-loader-overlay').css('bottom', '0').css('top', '');
				}
			})
			.add({
				targets: '.service-desc-loader-overlay',
				height: ["100%", "0%"],
				duration: 300,
				offset: 300,
				easing: "easeInOutQuart",
				complete: function(anim) {
					$('.service-desc-loader-overlay').css('top', '0');
				}
			});


	});





	$('#digital-service').on('click', function() {

		$('#strategy-service').removeClass('active');
		$('#dev-service').removeClass('active');
		$('#ux-service').removeClass('active');
		$('#digital-service').addClass('active');

		var animateInDigitalTimeline = anime.timeline({
			autoplay: true
		});

		animateInDigitalTimeline
			.add({
				targets: '.service-desc-loader-overlay',
				height: ["0%", "100%"],
				duration: 300,
				easing: "easeInOutQuart",
				complete: function(anim) {
					$('#strategy-desc').hide();
					$('#dev-desc').hide();
					$('#ux-desc').hide();
					$('#digital-desc').show();
					$('.service-desc-loader-overlay').css('bottom', '0').css('top', '');
				}
			})
			.add({
				targets: '.service-desc-loader-overlay',
				height: ["100%", "0%"],
				duration: 300,
				offset: 300,
				easing: "easeInOutQuart",
				complete: function(anim) {
					$('.service-desc-loader-overlay').css('top', '0');
				}
			});


	});




	$('#dev-service').on('click', function() {

		$('#strategy-service').removeClass('active');
		$('#digital-service').removeClass('active');
		$('#ux-service').removeClass('active');
		$('#dev-service').addClass('active');

		var animateInDevTimeline = anime.timeline({
			autoplay: true
		});

		animateInDevTimeline
			.add({
				targets: '.service-desc-loader-overlay',
				height: ["0%", "100%"],
				duration: 300,
				easing: "easeInOutQuart",
				complete: function(anim) {
					$('#strategy-desc').hide();
					$('#digital-desc').hide();
					$('#ux-desc').hide();
					$('#dev-desc').show();
					$('.service-desc-loader-overlay').css('bottom', '0').css('top', '');
				}
			})
			.add({
				targets: '.service-desc-loader-overlay',
				height: ["100%", "0%"],
				duration: 300,
				offset: 300,
				easing: "easeInOutQuart",
				complete: function(anim) {
					$('.service-desc-loader-overlay').css('top', '0');
				}
			});


	});






});