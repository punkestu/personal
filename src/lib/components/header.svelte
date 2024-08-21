<script>
	import { env } from '$env/dynamic/public';
	import { toggleDarkMode, beDarkMode } from '$lib/helper/darkmode';
	import { onMount } from 'svelte';
	let darkState = '🌛';
	onMount(() => {
		if (!localStorage.getItem('darkMode')) {
			localStorage.setItem('darkMode', 'true');
		}
		const darkMode = localStorage.getItem('darkMode') === 'true';
		if (darkMode) {
			darkState = '🌛';
		} else {
			darkState = '🌞';
		}
		beDarkMode();
	});
	function darkButtonClick() {
		const darkMode = localStorage.getItem('darkMode') === 'true';
		if (darkMode) {
			darkState = '🌞';
		} else {
			darkState = '🌛';
		}
		toggleDarkMode();
	}
</script>

<header class="w-full md:w-2/3 dark:text-white py-4 flex justify-between">
	<nav>
		<ul class="flex gap-2 md:gap-8">
			<li>
				<a href="/" class="no-underline hover:underline">Home</a>
			</li>
			<li>
				<a href="/project" class="no-underline hover:underline">Projects</a>
			</li>
			<li>
				<a href="/app" class="no-underline hover:underline">Apps</a>
			</li>
			<li>
				<a href={env.PUBLIC_BLOG_URL} class="no-underline hover:underline">Blogs</a>
			</li>
		</ul>
	</nav>
	<aside class="flex gap-2">
		<a class="px-2 py-1 bg-yellow-500 text-gray-700" href="https://saweria.co/bpangestu"
			>Beliin kopi ☕️</a
		>
		<button on:click={darkButtonClick}>{darkState}</button>
	</aside>
</header>
<hr class="w-full md:w-2/3 border border-black dark:border-slate-50" />
