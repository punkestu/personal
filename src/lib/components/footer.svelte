<script>
	import logo from '$lib/image/logo.svg';
	let mail = {
		subject: "Hello, I'm interested in your work",
		body: "Hi, I'm interested in your work. Can you tell me more about it?"
	};
</script>

<hr class="mt-8 w-full md:w-2/3 border border-black dark:border-slate-50" />
<footer class="flex py-4 w-full md:w-2/3 gap-8 dark:text-slate-200 justify-between">
	<ul class="flex flex-col gap-2">
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
			<a href="/blog" class="no-underline hover:underline">Blogs</a>
		</li>
	</ul>
	<ul class="flex flex-col gap-2">
		<li>
			<a href="https://www.instagram.com/b_pangestu03" class="no-underline hover:underline"
				>Instagram</a
			>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/bpangestu" class="no-underline hover:underline"
				>LinkedIn</a
			>
		</li>
		<li>
			<a href="https://github.com/punkestu" class="no-underline hover:underline">Github</a>
		</li>
		<li>
			<a
				href="mailto:pangestubima89@gmail.com?subject={mail.subject}&body={mail.body}"
				class="no-underline hover:underline">Mail me</a
			>
		</li>
	</ul>
	<div>
		<img src={logo} alt="logo" class="" />
	</div>
</footer>
