$('document').ready(function() {


	$('body').css('overflow', 'hidden');

	$(window).scroll(function(event) {
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);

		if (scrollTop >= 1700) {
			servicesEnterTimeline.play();
		}

	});


	var menuActive = false;

	var devMode = !false;

	if (devMode) {
		$('.gl-preloader').hide();
		$('body').css('overflow', '');
		$('.preloader-crossover').hide();
	} else {
		$('.gl-preloader').show();

		var myTimeline = anime.timeline();

		myTimeline
			.add({
				targets: '.preloader-crossover',
				height: ["0vh", "100vh"],
				duration: 800,
				easing: "easeInQuart",
				delay: 3000
			})
			.add({
				targets: '.preloader-crossover',
				translateY: "-=100vh",
				duration: 1000,
				easing: "easeOutQuart",
				delay: 200,
				run: function(anim) {
					hidePreloader.play();
					$('.gl-preloader').hide();
					$('body').css('overflow', '');
					wavesEnterTimeline.play();
				},
			});


		var wavesEnterTimeline = anime.timeline({
			autoplay: false
		});


		wavesEnterTimeline
			.add({
				targets: '#top-long-wave',
				translateX: ["1000px", "0"],
				translateY: ["-1000px", "0"],
				duration: 3000,
				offset: -1500,
				easing: "easeInOutQuart",
			})
			.add({
				targets: '#top-short-wave',
				translateX: ["1200px", "0"],
				translateY: ["-1200px", "0"],
				duration: 3000,
				offset: -1400,
				easing: "easeInOutQuart",
			})
			.add({
				targets: '#bot-long-wave',
				translateX: ["-1000px", "0"],
				translateY: ["1000px", "0"],
				duration: 3000,
				offset: -1500,
				easing: "easeInOutQuart",
			})
			.add({
				targets: '.gl-header-text-left h1',
				translateY: ["20px", "0"],
				translateX: ["20px", "0"],
				rotate: [-3, 0],
				opacity: [0, 1],
				duration: 2000,
				offset: -800,
				easing: "easeInOutQuart",
			})
			.add({
				targets: '.gl-header-text-left h6',
				translateY: ["10px", "0"],
				translateX: ["10px", "0"],
				rotate: [-2, 0],
				opacity: [0, 1],
				duration: 1500,
				offset: -400,
				easing: "easeInOutQuart",
			})
			.add({
				targets: '.gl-header-scroll-btn-container button',
				translateY: ["-10px", "0"],
				opacity: [0, 1],
				duration: 1500,
				offset: -400,
				easing: "easeInOutQuart",
			});





	}

	particlesJS("particles-js", {
		"particles": {
			"number": {
				"value": 120,
				"density": {
					"enable": true,
					"value_area": 789.1476416322727
				}
			},
			"color": {
				"value": "#B4A990"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.48927153781200905,
				"random": false,
				"anim": {
					"enable": true,
					"speed": 0.2,
					"opacity_min": 0,
					"sync": false
				}
			},
			"size": {
				"value": 1.5,
				"random": true,
				"anim": {
					"enable": true,
					"speed": 1,
					"size_min": 0,
					"sync": false
				}
			},
			"line_linked": {
				"enable": false,
				"distance": 150,
				"color": "#ffffff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 10,
				"direction": "none",
				"random": true,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "bubble"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 400,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 83.91608391608392,
					"size": 1,
					"duration": 3,
					"opacity": 1,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true
	});





	var hidePreloader = anime({
		targets: '.gl-preloader',
		height: ['100vh', '0vh'],
		duration: 100,
		autoplay: false
	});



	var showMenuAnim = anime.timeline({
		autoplay: false
	});


	showMenuAnim
		.add({
			targets: ".gl-menu-overlay",
			height: ["0vh", "100%"],
			duration: 300,
			easing: "easeInOutQuart",
			offset: 0
		})
		.add({
			targets: ".menu-btn-top",
			rotate: 45,
			duration: 100,
			left: "4.3px",
			translateY: "6px",
			easing: "easeInOutQuart",
			offset: 0
		})
		.add({
			targets: ".menu-btn-btm",
			width: ["10px", "17px"],
			rotate: -45,
			left: "4.3px",
			translateY: "-5.5px",
			duration: 100,
			easing: "easeInOutQuart",
			offset: 0
		})
		.add({
			targets: "#gl-menu-links-main li",
			translateY: ["-15.5px", "0"],
			opacity: [0, 1],
			duration: 300,
			easing: "easeInOutCubic",
			offset: 300
		})
		.add({
			targets: "#gl-menu-links-secondary li",
			translateY: ["-10.5px", "0"],
			opacity: [0, 1],
			duration: 300,
			easing: "easeInOutCubic",
			delay: 300,
			offset: 100,
		})
		.add({
			targets: ".gl-menu-project-btn-container a",
			translateX: ["-15.5px", "0"],
			opacity: [0, 1],
			duration: 300,
			easing: "easeInOutCubic",
			delay: 300,
			offset: 600,
		});


	$('.gl-nav-menu-btn').on("click", function() {

		if (!menuActive) {
			showMenuAnim.play();
			menuActive = true;
			$('.gl-menu-overlay').css('pointer-events', 'auto');
		} else {
			showMenuAnim.play();
			showMenuAnim.reverse();
			$('.gl-menu-overlay').css('pointer-events', 'none');
		}

	});



	var servicesEnterTimeline = anime.timeline({
		autoplay: false
	});


	servicesEnterTimeline
		.add({
			targets: '#strategy-service',
			translateY: ["40px", "0"],
			translateX: ["40px", "0"],
			rotate: [-3, 0],
			opacity: [0, 1],
			duration: 2000,
			offset: -800,
			easing: "easeInOutQuart",
		})
		.add({
			targets: '#ux-service',
			translateY: ["40px", "0"],
			translateX: ["40px", "0"],
			rotate: [-3, 0],
			opacity: [0, 1],
			duration: 2000,
			offset: -750,
			easing: "easeInOutQuart",
		})
		.add({
			targets: '#digital-service',
			translateY: ["40px", "0"],
			translateX: ["40px", "0"],
			rotate: [-3, 0],
			opacity: [0, 1],
			duration: 2000,
			offset: -700,
			easing: "easeInOutQuart",
		})
		.add({
			targets: '#dev-service',
			translateY: ["40px", "0"],
			translateX: ["40px", "0"],
			rotate: [-3, 0],
			opacity: [0, 1],
			duration: 2000,
			offset: -650,
			easing: "easeInOutQuart",
		})
		.add({
			targets: '.service-desc-loader-overlay',
			height: ["0%", "100%"],
			duration: 500,
			offset: 300,
			easing: "easeInOutQuart",
			complete: function(anim) {
				$('#service-desc .backdrop').css('display', 'flex');
				$('.service-desc-loader-overlay').css('top', '0');
			}

		})
		.add({
			targets: '.service-desc-loader-overlay',
			height: ["100%", "0%"],
			duration: 300,
			offset: "-=500",
			easing: "easeInOutQuart",
			complete: function(anim) {
				$('.service-desc-loader-overlay').css('bottom', '0');
			}
		});

	// Add an overlay to the services section and animate it upwards while display:blocking the backdrop behind it





});