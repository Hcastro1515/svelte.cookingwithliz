<script>
	import { PortableText } from '@portabletext/svelte';
	/** @type {import('./$types').PageData}*/
	export let data;

	const { recipe } = data;
	console.log(data.recipe);
</script>

<div class="border border-red-500 grid place-items-center">
	{#if data.recipe}
		{#each data.recipe as r}
			<h2 class="text-2xl font-semibold text-center my-12 tracking-wider">{r.title}</h2>
			<img src={r.imageUrl} alt={r.title} class="w-full h-full object-cover object-center" />
			<div class="grid grid-cols-2 my-4">
				<div class="border-y border-r border-gray-200 p-3">
					{r.cookingTime}
				</div>
				<div class="border-y border-l border-gray-200 p-3">Author: Lizbeth Gonzales</div>
			</div>
            <PortableText value={r.content} />
		{/each}
	{/if}
</div>
