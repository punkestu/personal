export function toggleDarkMode() {
	// change dark mode state on local storage
	const darkMode = localStorage.getItem('darkMode') === 'true' ? 'false' : 'true';
	localStorage.setItem('darkMode', darkMode);
	// call beDarkMode
	beDarkMode();
}

export function beDarkMode() {
	// get dark mode on local storage an save it on a variable
	const darkMode = localStorage.getItem('darkMode') === 'true';
	// set class dark on root html tag if dark mode is true
	if (darkMode) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
}
