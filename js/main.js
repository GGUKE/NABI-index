document.addEventListener("DOMContentLoaded", () => {
	
	document.querySelectorAll(".nav > ul > li").forEach(item => {

		item.addEventListener("mouseenter", () => {
			const subMenu = item.querySelector("ul");
			if (subMenu) subMenu.style.display = "block";
		});
	 	item.addEventListener("mouseleave", () => {
			const subMenu = item.querySelector("ul");
			if (subMenu) subMenu.style.display = "none";
		});
	});
  
	document.querySelectorAll(".nav > ul > li > a").forEach(link => {
		link.addEventListener("focusin", () => {
			link.parentElement.classList.add("active");
			const subMenu = link.nextElementSibling;
			if (subMenu) subMenu.style.display = "block";
		});
	});
  

	let n = 0;
	const sliderItems = document.querySelectorAll(".slider .gallery ul li");
	const controlItems = document.querySelectorAll(".slider .control li");
	
	function setGallery() {
		sliderItems.forEach(item => item.classList.remove("active"));
		sliderItems[n].classList.add("active");
		controlItems.forEach(item => item.classList.remove("active"));
		controlItems[n].classList.add("active");
	}
	
	controlItems.forEach((control, index) => {
		control.addEventListener("click", (e) => {
			e.preventDefault();

			if (n !== index) {
					n = index;
					setGallery();
			}

		});

	});
	
	setGallery();
  
	let topButton = document.getElementById("top");
	let lnbClick = document.querySelector(".lnb .close");

	window.addEventListener("scroll", () => {
	  	topButton.style.display = window.scrollY > 100 ? "block" : "none";
	});
  
	topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  

	lnbClick.addEventListener("click", (e) => {
		e.preventDefault();

		lnbClick.classList.toggle("active");
	});

  });
  