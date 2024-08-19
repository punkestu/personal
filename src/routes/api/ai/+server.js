import { json } from '@sveltejs/kit';
import Groq from 'groq-sdk/index.mjs';
import { env } from '$env/dynamic/private';

// /** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { prompt } = await request.json();
	console.log('prompt', prompt);
	const groq = new Groq({
		apiKey: env.GROQ_API_KEY
	});
	const result = await groq.chat.completions.create({
		messages: [
			{
				role: 'user',
				content: prompt
			}
		],
		model: 'llama3-8b-8192'
	});
	return json(result);
}
