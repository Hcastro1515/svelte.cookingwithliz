<script>
	import { slide } from 'svelte/transition';
	import { cubicIn, cubicOut } from 'svelte/easing';
	import TiThMenu from 'svelte-icons/ti/TiThMenu.svelte';
	import FaAngleRight from 'svelte-icons/fa/FaAngleRight.svelte';
	import FaChevronDown from 'svelte-icons/fa/FaChevronDown.svelte';
	import FaBook from 'svelte-icons/fa/FaBook.svelte';
	let isMenuOpen = false;
	let isRecetasMenuOpen = false;

	const handleRecetasMenuOpen = () => (isRecetasMenuOpen = !isRecetasMenuOpen);
	const handleMobileIconClick = () => (isMenuOpen = !isMenuOpen);

	let menu = [
		{
			menuItemName: 'Panes',
			url: '/recipes'
		},
		{
			menuItemName: 'Postres',
			url: '/recipes'
		},
		{
			menuItemName: 'Desayunos',
			url: '/recipes'
		},
		{
			menuItemName: 'Aperitivos',
			url: '/recipes'
		},
		{
			menuItemName: 'Platos Fuertes',
			url: '/recipes'
		},
		{
			menuItemName: 'Bebidas',
			url: '/recipes'
		},
		{
			menuItemName: 'Ensaladas',
			url: '/recipes'
		},
		{
			menuItemName: 'Salsas',
			url: '/recipes'
		}
	];
</script>

<div class="p-8 flex justify-between items-center shadow-sm">
	<a href="/" class="text-xl font-semibold">Cookingwithliz</a>
	<button on:click={handleMobileIconClick} class="w-6 h-6 cursor-pointer md:hidden">
		<TiThMenu />
	</button>
	<nav class="hidden md:flex items-center space-x-4">
		<a href="/" class="hover:border-b-2 border-orange-300 transition ease-in">Home</a>
		<a href="#about">About</a>
		<div class="flex space-x-2 justify-center items-center relative">
			<a href="/" on:click={handleRecetasMenuOpen}>Recetas</a>
			<div class="w-4 h-4 cursor-pointer">
				<FaAngleRight />
			</div>

			{#if isRecetasMenuOpen}
				<div
					class="flex justify-center items-center flex-col space-y-4 absolute top-16 bg-orange-50 z-10 w-40 p-6"
					in:slide
					out:slide
				>
					{#each menu as item}
						<a href={`${item.url}`}>{item.menuItemName}</a>
					{/each}
				</div>
			{/if}
		</div>
	</nav>
	<button disabled class="hidden py-2 px-4 rounded-md bg-black md:flex justify-center items-center text-white cursor-pointer hover:bg-gray-400 ease-in transition-colors">
		Ebook <span class="ml-2 h-4 w-4"><FaBook /></span>
	</button>
</div>
{#if isMenuOpen}
	<div
		class=" py-6 px-8 flex justify-center bg-orange-50 flex-col"
		in:slide={{ duration: 200, easing: cubicIn }}
		out:slide={{ duration: 200, easing: cubicOut }}
	>
		<nav class="flex flex-col space-y-6 justify-center items-center">
			<a href="/">Home</a>
			<a href="#about">About</a>
			<div class="flex space-x-2 justify-center items-center">
				<a href="/" on:click={handleRecetasMenuOpen}>Recetas</a>
				<div class="w-4 h-4 cursor-pointer">
					{#if isRecetasMenuOpen}
						<FaChevronDown />
					{:else}
						<FaAngleRight />
					{/if}
				</div>
			</div>
			{#if isRecetasMenuOpen}
				<div class="flex justify-center items-center flex-col space-y-4" in:slide out:slide>
					{#each menu as item}
						<a href={`${item.url}`}>{item.menuItemName}</a>
					{/each}
				</div>
			{/if}
		</nav>
		<button
			disabled
			class="flex items-center bg-black text-white w-full py-2 rounded-md justify-center mt-6"
		>
			Ebook <span class="ml-2 h-4 w-4"><FaBook /></span>
		</button>
	</div>
{/if}
