<script>
	import '../app.css';
	import logo from '$lib/image/logo.svg';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Aichat from '$lib/components/aichat.svelte';
</script>

<svelte:head>
	<link rel="shortcut icon" href={logo} type="image/x-icon" />
</svelte:head>

<Header />

<section id="content" class="w-full md:w-2/3 mt-8">
	<slot />
</section>

<Footer />

<Aichat />
