export function toggleDarkMode() {
	const darkMode = localStorage.getItem('darkMode') === 'true' ? 'false' : 'true';
	localStorage.setItem('darkMode', darkMode);
	beDarkMode();
}

export function beDarkMode() {
	const darkMode = localStorage.getItem('darkMode') === 'true';
	if (darkMode) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}
}
