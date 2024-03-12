<script>
	import blogRegistry from '$lib/data/blogRegistry';
	import { onMount } from 'svelte';
	blogRegistry.reverse();
	onMount(() => {
		blogRegistry.reverse();
	});
</script>

<svelte:head>
	<title>Punkestu | Blogs</title>
</svelte:head>

<h1 class="text-4xl font-bold">Blogs</h1>
<section id="blogs" class="mt-4 flex flex-col gap-2 min-h-[70vh]">
	{#each blogRegistry as register}
		<a
			href="/blog/{register.slug}"
			class="flex flex-col bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 duration-300 p-4 rounded-lg"
		>
			<div class="w-full h-44 relative">
				<img
					src={register.thumbnail}
					class="absolute w-full top-0 left-0 h-full object-cover z-50"
					alt="illustration"
					srcset=""
				/>
				<div class="w-full h-full bg-slate-300 animate-pulse"></div>
			</div>
			<h2 class="text-xl font-semibold mt-2">{register.title}</h2>
			<p class="text-sm dark:text-slate-500 mb-2">
				| {register.postAt.toLocaleString().split(', ')[0]}
			</p>
		</a>
	{/each}
</section>
