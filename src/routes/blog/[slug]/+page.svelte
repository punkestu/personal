<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import { marked } from 'marked';
	import { onMount } from 'svelte';

	let blogData = { title: '', body: '', postAt: '', thumbnail: '' };
	let state = 'loading';
	onMount(async () => {
		if (data.post) {
			blogData = data.post;
			state = 'success';
		} else {
			state = 'not found';
		}
	});
</script>

{#if state !== 'success'}
	<div class="w-full h-[80vh] flex justify-center items-center">
		{#if state === 'not found'}
			⚠️ Blog Not Found
		{:else if state === 'loading'}
			🔄 Loading
		{:else if state === 'error'}
			🤯 Error
		{/if}
	</div>
{:else}
	<div class="w-full h-64 mb-2 bg-slate-700 relative">
		<img
			src={blogData.thumbnail}
			alt="thumbnail"
			class="w-full h-full object-cover object-center absolute top-0 left-0 z-50"
		/>
		<div class="w-full h-full bg-slate-300 animate-pulse"></div>
	</div>
	<h1 class="text-4xl font-bold">{blogData.title}</h1>
	<p class="text-slate-400">| {blogData.postAt}</p>
	<hr class="mt-4 mb-6" />
	<div class="text-justify w-full prose prose-invert max-w-full">
		{@html marked(blogData.body)}
	</div>
{/if}
