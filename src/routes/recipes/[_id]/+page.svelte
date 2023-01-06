<script>
	import { PortableText } from '@portabletext/svelte';
	import SingleComponentBlock from '$lib/portableTextConfig/SingleComponentBlock.svelte';

	/** @type {import('./$types').PageData}*/
	export let data;
	console.log(data.recipe)

</script>

<div class="grid p-4">
	{#if data.recipe}
		{#each data.recipe as r}
			<h2 class="text-2xl font-semibold text-center mb-12 tracking-wider">{r.title}</h2>
			<img src="{r.imageUrl}" alt={r.title} class="object-cover object-center min-w-full h-96" loading="lazy" />
			<div class="grid grid-cols-2 my-4">
				<div class="border-y border-r border-gray-200 p-3 text-xs sm:text-sm md:text-lg">
					<p><strong>Tiempo De Preparacion:</strong> {r.preparationTime} </p>
					<p><strong>Tiempo De Coccion:</strong> {r.cookingTime} </p>
					<p><strong>Numero De Porciones:</strong> {r.peopleServe} </p>
				</div>
				<div class="text-xs sm:text-sm md:text-lg border-y border-l border-gray-200 p-3"><strong>Author:</strong> Lizbeth Gonzales</div>
			</div>
			<PortableText value={r.content}  components={{
				block: SingleComponentBlock
			}}/>
		{/each}
	{/if}
</div>
