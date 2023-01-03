<script>
	import "../app.css"
	import Navbar from "../components/Navbar.svelte";
</script>

<Navbar />

<section class="container md:w-2/3 mx-auto py-12 px-6">
	<slot></slot>
</section>