<script>
	import '../app.css';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<Header />

<section id="content" class="w-full md:w-2/3 mt-8">
	<slot />
</section>
<Footer />
