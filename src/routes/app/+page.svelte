<script>
	import appsRegistry from '$lib/data/appsRegistry.json';
	let search = '';
	$: apps = appsRegistry.filter(
		(app) =>
			app.name.toLowerCase().includes(search.toLowerCase()) ||
			app.description.toLowerCase().includes(search.toLowerCase())
	);
</script>

<svelte:head>
	<title>Punkestu | Apps</title>
</svelte:head>

<h1 class="text-4xl font-bold">Apps</h1>
<section id="blogs" class="mt-4 min-h-[70vh]">
	<div class="p-1 flex justify-end w-full">
		<input
			type="text"
			class="px-3 py-1 rounded-md text-slate-950"
			placeholder="Search..."
			bind:value={search}
		/>
	</div>
	{#if apps.length === 0}
		<div
			class="h-40 flex justify-center items-center text-xl font-semibold text-slate-950 dark:text-slate-50"
		>
			⚠️ No apps found
		</div>
	{/if}
	<div class="flex flex-wrap items-stretch">
		{#each apps as app}
			<div class="w-full md:w-1/2 lg:w-1/3 p-1">
				<a
					href={app.url}
					class="flex flex-col bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-900 duration-300 p-4 rounded-lg w-full h-full"
				>
					<img src={app.image} alt={app.name} class="w-full h-48 object-cover rounded-lg" />
					<h2 class="text-xl font-semibold mt-2">{app.name}</h2>
					<p class="text-sm dark:text-slate-400 mb-2">{app.description}</p>
				</a>
			</div>
		{/each}
	</div>
</section>
