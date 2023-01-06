<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte';
	import FaRegUser from 'svelte-icons/fa/FaRegUser.svelte';
	import AuthorImage from '../images/cookingwithliz_portrait_1.jpeg';
	import AuthorImage2 from '../images/cookingwithliz_portrait_2.jpeg';
	import '@splidejs/svelte-splide/css';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Cooking With Liz</title>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9306994878118987"
     crossorigin="anonymous"></script>
</svelte:head>

<section class="flex justify-center items-center flex-col md:flex-row space-y-10 mt-4 mb-24">
	<div class=" space-y-6 sm:max-w-md lg:max-w-xl md:mr-14">
		<h1 class="text-2xl font-semibold text-black md:text-3xl lg:text-4xl xl:text-5xl xl:max-w-xl">
			Te Enseno A Lograr Las Recetas Caseras Mas Deliciosas
		</h1>
		<div class="h-0.5 w-full bg-gray-600 rounded-md" />
		<p class="text-xs opacity-75">
			Hola mi nombre es Lizbeth Gonzalez, hoy te invito a probar mis deliciosas recetas. Tambien te
			comparto mi libro para que tengas un look especial de mi vida y mi amor por la comida.
		</p>
		<div Class="space-x-1">
			<a href="/recipes">
				<button
					class="py-2 px-3 bg-black text-white rounded-md hover:bg-gray-800 transition-all ease-in "
					>Descubre Rectetas</button
				></a
			>
			<button
				disabled
				class="py-2 px-3 bg-gray-900 text-white rounded-md hover:bg-gray-900 transition-all ease-in"
				>EBOOK</button
			>
		</div>
	</div>
	<div class="sm:max-w-md md:max-w-md md:ml-14">
		<Splide
			options={{ rewind: true, width: 600 }}
			hasTrack={false}
			aria-label="Highligted Recipes"
			class="w-full h-full"
		>
			<SplideTrack class="rounded-md">
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
	<div class="flex justify-between items-center w-full mb-10">
		<h3 class=" font-extrabold tracking-wider lg:text-2xl">Recetas por categoria</h3>
		<a href="/recipes">
			<button
				class="py-1 px-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all ease-in"
				>Ver Mas
			</button></a
		>
	</div>

	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 cursor-pointer">
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
	<div class="flex justify-between items-center w-full mb-10">
		<h3 class=" font-extrabold tracking-wider lg:text-2xl">Mis Highlights</h3>
	</div>
	<div class="container grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.recipes as recipe}
			<a href="/recipes/{recipe._id}">
				<div
					class="bg-white flex flex-col mb-8 md:mb-0 cursor-pointer transform transition ease-in-out duration-300 hover:scale-105"
				>
					<div class="max-w-md">
						<img src={recipe.imageUrl} alt={recipe.title} class="w-full h-64 object-cover" />
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
			<p class="text-xs sm:text-sm md:text-lg mb-2 text-gray-700">Hola!!! Soy Lizbeth bienvenidos a cooking with Liz</p>
			<p class="text-xs sm:text-sm text-gray-700 mb-2">
				Siempre me a encantado la Cocina en especial la pastelería para mi es mi momento de paz el
				cual disfruto mucho, este blog está creado para aquellos amantes a la cocina ya sean o no
				profesionales. Cooking with Liz fue creado en el 2021 con la idea de compartir mi
				conocimiento mientras estudiaba pastry arts profesionalmente y con el tiempo se a convertido
				en mi pasa tiempo favorito.
			</p>
			<p class="text-xs text-gray-700">
				Cualificaciones Profesionales - Diploma on profesional Pastry and Culinary Arts de
				universidad culinary Auguste
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
