<script>
	import { fade } from "svelte/transition";
	import "../app.css"
	import Navbar from "../components/Navbar.svelte";
	import Footer from "../components/Footer.svelte"
	import { cubicIn } from "svelte/easing";
</script>

<Navbar />

<section class="container md:w-2/3 mx-auto py-12 px-6" in:fade={{easing: cubicIn, delay: 300}}>
	<slot></slot>
</section>

<Footer />