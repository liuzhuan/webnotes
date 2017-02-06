function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		var newClassName = element.className;
		newClassName += " "
		newClassName += value
		element.className = newClassName
	}
}