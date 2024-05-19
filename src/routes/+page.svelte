<script>
	import bioImage from '$lib/image/bio.png';
	import workWith from '$lib/data/workWith.json';
</script>

<svelte:head>
	<title>Punkestu | Portfolio</title>
</svelte:head>

<section
	id="intro"
	class="w-full flex flex-col-reverse md:flex-row gap-8 justify-between md:items-center mt-4"
>
	<div class="xl:w-3/4">
		<h1 class="text-4xl font-bold">Punkestu</h1>
		<h2>Moch. Bima Pangestu</h2>
		<p class="dark:text-slate-400 my-2">
			Computer Science Entusiast | Fullstack Developer
			<br />
			Banyuwangi | Jember | Yogyakarta
			<br />
			Indonesia 🇮🇩️
		</p>
		<a
			class="mt-2 text-center px-4 py-1 border-2 border-black dark:border-white hover:shadow-md hover:shadow-slate-800 dark:hover:shadow-white rounded-xl duration-300"
			href="/cv">Resume</a
		>
	</div>
	<img
		src={bioImage}
		class="md:rounded-full w-full h-[20vh] object-cover object-top md:w-1/4 md:h-auto"
		alt="bio"
	/>
</section>
<section class="w-full mt-4">
	<h2 class="text-2xl font-semibold">Work with</h2>
	<div class="flex flex-wrap gap-2 mt-2">
		{#each workWith as item}
			<img
				src={`https://img.shields.io/badge/${item.name}-${item.color}?style=for-the-badge&logo=${item.logo}&logoColor=white`}
				alt={item.name}
			/>
		{/each}
	</div>
</section>
<section id="featured" class="w-full mt-8">
	<h2 class="text-2xl font-semibold">Featured</h2>
	<div class="flex flex-col gap-4 lg:gap-0 lg:flex-row mt-2 mb-4">
		<a href="/blog/who-am-i" class="lg:w-1/2 lg:pe-2">
			<div
				class="text-center px-2 py-20 border-2 border-black dark:border-white hover:shadow-lg hover:shadow-slate-800 dark:hover:shadow-white rounded-xl text-xl duration-300"
			>
				Who am I
			</div>
		</a>
		<a href="https://anime-app-mauve.vercel.app/" class="lg:w-1/2 lg:ps-2">
			<div
				class="text-center px-2 py-20 border-2 border-black dark:border-white hover:shadow-lg hover:shadow-slate-800 dark:hover:shadow-white rounded-xl text-xl duration-300"
			>
				Anime App
			</div></a
		>
	</div>
	<a
		href="/blog"
		class="dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-200 duration-300"
		>Read all blogs &raquo;</a
	>
</section>
