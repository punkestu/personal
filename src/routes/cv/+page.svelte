<svelte:head>
  <title>Punkestu | CV</title>
  <meta name="description" content="My CV" />
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="flex flex-col gap-2">
	<a
		data-sveltekit-reload
		href="/cv.pdf"
		class="bg-slate-800 text-slate-50 dark:bg-slate-50 dark:text-slate-950 px-3 py-2 text-center duration-300">Download</a
	>
	<iframe src="/cvPage.html" title="cv" frameborder="0" class="bg-white w-full min-h-[70vh]"
	></iframe>
</section>
