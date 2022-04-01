document.addEventListener("DOMContentLoaded", function (event)
{
	const menuBtn = document.querySelector('.js_menu');
	const footerBtn = document.querySelector('.js_btn-footer');
	const navBlock = document.querySelector('.js_nav');
	const footerBlock = document.querySelector('.js_footer-more');
	const footerGen = document.querySelector('.js_footer');
	
	// init wow.js
	new WOW().init();
	
	// copy clipboard element
	var clipboard = new ClipboardJS('#copyLink_js');
	clipboard.on('success', function (e)
	{
		tooltipBlock = document.querySelector("#js_tooltip");
		tooltipBlock.classList.add("active");
		
		setTimeout(function ()
		{
			tooltipBlock.classList.remove("active");
		}, 2000);
		
	});
	
	// mobile menu event
	
	menuBtn.addEventListener('click', function ()
	{
		navBlock.classList.toggle("active");
	});
	
	// footer event
	if (window.innerWidth > 1300)
	{
		var footerBlockHeight = footerBlock.clientHeight;
		footerBlock.setAttribute('data-height', footerBlockHeight);
		footerBlock.setAttribute('style', 'height: '+footerBlockHeight+'px');
		footerGen.classList.add("hidden-block");
		
		footerBtn.addEventListener('click', function ()
		{
			footerGen.classList.toggle("hidden-block");
			setTimeout(function ()
			{
				window.scrollTo( 500, 99999);
			}, 500);
		});
	}
	
});
