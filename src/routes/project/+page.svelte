<script>
	import projectRegistry from '$lib/data/featuredProject.json';
</script>

<svelte:head>
	<title>Punkestu | Projects</title>
</svelte:head>

<h1 class="text-4xl font-bold">Projects</h1>
<section id="blogs" class="mt-4 min-h-[70vh]">
	<div class="flex items-start flex-wrap gap-2">
		{#each projectRegistry as register}
			<a
				href={register.url}
				class="flex flex-col bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 duration-300 p-4 rounded-lg flex-grow"
			>
				<h2 class="text-xl font-semibold mt-2">{register.title}</h2>
				<p class="text-sm dark:text-slate-400 mb-2">{register.description}</p>
			</a>
		{/each}
	</div>
</section>
