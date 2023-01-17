<script>
	import { fade, slide } from 'svelte/transition';
	import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte';
	import FaRegUser from 'svelte-icons/fa/FaRegUser.svelte';
	import { cubicIn } from 'svelte/easing';

	/** @type {import('./$types').PageServerData}*/
	export let data;

	const { categories, recipes } = data;

	let selected = '';
	$: filteredRecipes = recipes.filter((/** @type {{ category: string | string[]; }} */ recipe) => {
		return recipe.category.includes(selected);
	});
</script>

<svelte:head>
	<title>Recipes | All Recipes</title>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9306994878118987"
	crossorigin="anonymous"></script>
</svelte:head>

<div>
	<select bind:value={selected} class="w-full p-3 rounded-md focus:border-purple-400 bg-gray-100">
		<option value="">Select a category</option>
		{#each categories as category}
			<option value={category.name}>{category.name}</option>
		{/each}
	</select>

	<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
		{#if filteredRecipes.length > 0}
			{#each filteredRecipes as recipe}
				<a href="/recipes/{recipe._id}" in:fade={{ easing: cubicIn, duration: 500 }}>
					<div
						class="bg-white flex flex-col mb-8 md:mb-0 cursor-pointer transform transition ease-in-out duration-300 hover:scale-105"
					>
						<div class="max-w-md">
							<img src={recipe.imageUrl} alt={recipe.title} class="w-full h-56 object-cover" />
						</div>
						<div class="flex-1 px-6 py-2">
							<div class="h-1 rounded-md bg-black w-1/3 self-start my-4" />
							<p class="text-xl font-semibold mb-1">{recipe.title}</p>
							<p class="text-xs">{recipe.summary}</p>
						</div>
						<div class="h-0.5 w-full bg-gray-600 rounded-md my-3" />
						<div class=" flex justify-center items-center py-4">
							<div class="flex items-center mr-4">
								<span class="mr-2 w-4 h-4">
									<FaRegClock />
								</span>
								<p class="inline">{recipe.cookingTime}</p>
							</div>
							<div class="flex items-center">
								<span class="mr-2 w-4 h-4">
									<FaRegUser />
								</span>
								<p class="inline">{recipe.peopleServe}</p>
							</div>
						</div>
					</div>
				</a>
			{/each}
		{:else}
			<div>
				<p>There are currently no recipes for this category</p>
			</div>
		{/if}
	</div>
</div>
