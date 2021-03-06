'use strict';

import $ from 'jquery';
import SmoothScroll from 'smoothscroll-for-websites';

const om = {};

om.smoothscroll = function() {
	new SmoothScroll;
};

om.parallax = function () {
	let controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: "onEnter",
			duration: "200%"
		}
	});

	new ScrollMagic.Scene({triggerElement: "#o-parallax"})
			.setTween("#o-parallax .o-parallax__background", {y: "70%", ease: Linear.easeNone})
			.addTo(controller);
};

$(document).ready(function () {

	/**
	 * SmoothScroll
	 */

	om.smoothscroll();

	/**
	 * Parallax
	 */

	om.parallax();
});