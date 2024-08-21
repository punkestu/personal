import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

// /** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const { prompt } = await request.json();
	const result = await fetch('https://api.groq.com/openai/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			authorization: `Bearer ${env.GROQ_API_KEY}`
		},
		body: JSON.stringify({
			messages: [
				{
					role: 'user',
					content: prompt
				}
			],
			model: 'llama3-8b-8192'
		})
	}).then((res) => res.json());
	return json(result);
}
