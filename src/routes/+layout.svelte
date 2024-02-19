<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';

	import {beDarkMode} from "$lib/index";
	import { onMount } from 'svelte';

	onMount(() => {
		beDarkMode();
	});
</script>

<Header />

<section id="content" class="w-full md:w-2/3 mt-8">
	<slot />
</section>
<Footer />
