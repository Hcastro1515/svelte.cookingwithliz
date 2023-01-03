<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<section class="space-y-6 md:space-x-6 md:flex">
	<div class="flex-1 space-y-6 flex justify-center flex-col">
		<h1 class="text-4xl text-black md:text-5xl">
			Te Enseno A Lograr Las Recetas Caseras Mas Deliciosas
		</h1>
		<div class="h-0.5 w-full bg-gray-600 rounded-md" />
		<p class="text-sm opacity-75">
			Hola mi nombre es Lizbeth Gonzalez, hoy te invito a probar mis deliciosas recetas. Tambien te
			comparto mi libro para que tengas un look especial de mi vida y mi amor por la comida.
		</p>
		<div Class="space-x-1">
			<button
				class="py-2 px-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all ease-in "
				>Descubre Rectetas</button
			>
			<button
				class="py-2 px-3 bg-black text-white rounded-md hover:bg-gray-900 transition-all ease-in"
				>EBOOK</button
			>
		</div>
	</div>
	<div class="flex-1">
		<Splide aria-label="Highligted Recipes">
			{#each data.recipes as recipe}
				<SplideSlide>
					<img src={recipe.imageUrl} alt={recipe.title} />
				</SplideSlide>
			{/each}
		</Splide>
	</div>
</section>
