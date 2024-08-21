<script>
	let prompt = '';
	/**
	 * @type {HTMLDivElement}
	 */
	let chatsContainer;
	/**
	 * @type {any[]}
	 */
	let chats = [];
	function submitChat() {
		chats = [
			...chats,
			{
				from: 'you',
				message: prompt
			}
		];
		setTimeout(() => {
			chatsContainer.scrollTo(0, chatsContainer.scrollHeight);
		}, 100);
		fetch('/api/ai', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ prompt })
		})
			.then((res) => res.json())
			.then((data) => {
				chats = [
					...chats,
					{
						from: 'ai',
						message: data.choices[0].message.content
					}
				];
				setTimeout(() => {
					chatsContainer.scrollTo(0, chatsContainer.scrollHeight);
				}, 100);
			})
			.catch((err) => {
				console.error(err);
			});
		prompt = '';
	}
</script>

<div popover="auto" id="ai-prompter" class="w-[90%] md:w-1/2 p-2 rounded-md">
	<div
		bind:this={chatsContainer}
		id="chat-field"
		class="h-[50vh] overflow-y-auto flex flex-col gap-2 p-2"
	>
		{#each chats as chat}
			<div class="flex {chat.from == 'you' && 'self-end'} gap-2 max-w-[75%]">
				<div class="flex flex-col {chat.from == 'you' && 'items-end'} gap-1">
					<div class="flex gap-1">
						<div class="flex flex-col">
							<span class="font-semibold">{chat.from}</span>
						</div>
					</div>
					<div class="bg-gray-700 text-white rounded-md p-2">
						<pre class="break-words w-full">{chat.message}</pre>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div id="input-field" class="flex gap-2 p-2">
		<textarea
			class="resize-none px-2 py-1 border-2 flex-grow"
			rows="1"
			placeholder="Tolong buatkan ..."
			bind:value={prompt}
		></textarea>
		<button class="bg-gray-700 text-white rounded-md px-2 py-1" on:click={submitChat}>Submit</button
		>
	</div>
</div>

<button
	popovertarget="ai-prompter"
	class="sticky bottom-4 bg-gray-700 dark:bg-white text-white dark:text-black border-2 border-white dark:border-gray-800 hover:shadow-lg hover:shadow-slate-800 dark:hover:shadow-white duration-300 rounded-full px-4 py-2 font-medium"
	>Open Chat</button
>
