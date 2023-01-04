<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte';
	import FaRegUser from 'svelte-icons/fa/FaRegUser.svelte';
	import AuthorImage from '../images/cookingwithliz_portrait_1.jpeg';
	import AuthorImage2 from '../images/cookingwithliz_portrait_2.jpeg';
	import '@splidejs/svelte-splide/css';
	/** @type {import('./$types').PageData} */
	export let data;
	console.log(data);
</script>

<section class="space-y-6 flex flex-col md:flex-row mt-6 justify-center mb-24">
	<div class="flex-1 space-y-6 max-w-md md:mr-14 md:flex md:justify-center md:flex-col">
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
	<div class="flex-1 grid place-items-center max-w-sm md:ml-14">
		<Splide
			options={{ rewind: true, width: 600 }}
			hasTrack={false}
			aria-label="Highligted Recipes"
			class="w-full h-full"
		>
			<SplideTrack>
				{#each data.recipes as recipe}
					<SplideSlide>
						<img
							src={recipe.imageUrl}
							alt={recipe.title}
							class="w-full h-full object-cover object-center"
						/>
					</SplideSlide>
				{/each}
			</SplideTrack>
		</Splide>
	</div>
</section>

<section class="my-20">
	<div class="flex justify-between items-center w-full mb-6">
		<h3 class=" font-extrabold tracking-wider">Recetas por categoria</h3>
		<a href="/recipes">
			<button
				class="py-1 px-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all ease-in"
				>Ver Mas
			</button></a
		>
	</div>

	<div class="md:flex md:justify-center md:items-center justify-center w-full cursor-pointer">
		{#each data.categories as category}
			<div class="mt-8 flex flex-col items-center justify-center p-4 space-x-8">
				<div>
					<img
						class="border-1 border-red-100"
						src={category.imageUrl}
						alt={category.name}
						width="150px"
						height="150px"
					/>
				</div>
				<div class="h-1 rounded-md bg-black w-1/3 self-start my-4" />
				<div class="self-start">
					<p class="mb-3 text-xl font-extrabold">{category.name}</p>
					<p class="text-sm text-gray-700">{category.summary}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="my-28 space-y-6">
	<div class="flex justify-between items-center w-full">
		<h3 class=" font-extrabold tracking-wider">Mis Highlights</h3>
		<button
			class="py-1 px-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all ease-in "
			>Ver Mas</button
		>
	</div>
	<div class="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-3 gap-8">
		{#each data.recipes as recipe}
			<a href="/recipes">
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
	</div>
</section>
<section id="about" class="px-6 py-12 flex justify-center items-center my-12">
	<div class="container sm:space-x-3 md:space-x-5 md:flex md:justify-center md:items-center">
		<div class="py-4 md:w-2/6 md:self-center lg:p-6">
			<h3 class=" mb-2 text-xl md:text-3xl font-extrabold">
				Hola soy lizbeth, mucho Gusto en conocerlos
			</h3>
			<p class="text-xs sm:text-sm text-gray-700">
				Soy una Dominicana emprendedora que empezó su carrera con una guardería en la ciudad de
				Nueva York. Hoy en día estoy expandiendo mi horizonte y aprendiendo más sobre la cocina. Te
				invito a que aprendas más de mí.
			</p>
		</div>
		<div class="flex space-x-2 md:w-6/12">
			<div class="w-3/6">
				<img
					class="w-full h-full rounded-lg object-cover object-center"
					src={AuthorImage}
					alt="Lizbeth Gonzales Portrait"
				/>
			</div>
			<div class="w-3/6">
				<img
					class="w-full h-full rounded-lg object-cover object-center"
					src={AuthorImage2}
					alt="Lizbeth Gonzales Portrait"
				/>
			</div>
		</div>
	</div>
</section>
