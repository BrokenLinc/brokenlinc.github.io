		//CUSTOM ANIMATIONS!

		var ring_draw = {
			css: {
				'stroke-dashoffset': 0,
				'stroke-width': 40
			},
			duration: 400,
			easing: 'easeInQuad'
		}

		var presequence = [
			{
				what:'#circle-logo',
				css: {
					opacity: 0
				}
			},
			{
				what:'circle',
				css: {
					'stroke-width': 0
				}
			},
			{
				what:'#ring-inner',
				css: {
					'stroke-dashoffset': 230
				}
			},
			{
				what:'#ring-middle',
				css: {
					'stroke-dashoffset': 335
				}
			},
			{
				what:'#ring-outer',
				css: {
					'stroke-dashoffset': 440
				}
			},
		];
		var sequence = [
			{
				when:100,
				what:'#circle-logo',
				how: {
					css: {
						'opacity': 1
					},
					duration: 200,
					easing: 'easeInQuad'
				}
			},
			{
				when:400,
				what:'#ring-inner',
				how: ring_draw
			},
			{
				when:500,
				what:'#ring-middle',
				how: ring_draw
			},
			{
				when:600,
				what:'#ring-outer',
				how: ring_draw
			},
		];

		// Another variation
		// var ring_bloop = {
		// 	css: {
		// 		'stroke-width': 40
		// 	},
		// 	duration: 200,
		// 	easing: 'easeInQuad'
		// };
		// var bloop_presequence = [
		// 	{
		// 		what:'circle',
		// 		css: {
		// 			'stroke-width': 0
		// 		}
		// 	}
		// ];
		// var bloop_sequence = [
		// 	{
		// 		when:200,
		// 		what:'#ring-inner',
		// 		how: ring_bloop
		// 	},
		// 	{
		// 		when:300,
		// 		what:'#ring-middle',
		// 		how: ring_bloop
		// 	},
		// 	{
		// 		when:400,
		// 		what:'#ring-outer',
		// 		how: ring_bloop
		// 	},
		// ];


		//AUTOMATION ENGINE -_-

		function doanim() {
			var $circle_logo = $('svg');

			for(var i in presequence) {
				var preset = presequence[i];

				$(preset.what, $circle_logo).css(preset.css);
			}

			$('html').addClass('animations-ready');

			for(var i in sequence) {
				var animation = sequence[i];

				setTimeout(function(animation) {
					$(animation.what, $circle_logo).stop().animate(
						animation.how.css, 
						animation.how.duration, 
						animation.how.easing);
				}, animation.when, animation);
			}
		}
		doanim();

		$('.js-replay').click(doanim);