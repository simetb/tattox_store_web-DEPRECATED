function gray_color(){
	const images = [...document.getElementsByClassName('filter-gray')];
	images.forEach(element => {
	    element.onmouseenter = () => {
	        element.classList.remove('filter-gray')
	    }
	    element.onmouseleave = () => {
	        element.classList.add('filter-gray')
	    }
	});
}


export {gray_color}