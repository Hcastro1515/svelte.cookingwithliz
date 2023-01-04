<script>
    import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte'
    import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte'
    import AuthorImage from '../images/cookingwithliz_portrait_1.jpeg'; 
    import AuthorImage2 from '../images/cookingwithliz_portrait_2.jpeg'
</script>

<section class="py-10 px-8">
    <div class="flex justify-between items-baseline space-y-8">
        <div class="flex items-center space-x-8">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="/recipes">Recipes</a>
        </div>
        <div class="space-x-2 flex items-center justify-center">
            <span class="cursor-pointer">
                <a href="https://www.instagram.com/_cookingwithliz/">
                    <div class="w-4 h-4">
                        <FaInstagram />
                    </div>
                </a>
            </span>
            <span class="cursor-pointer">
                <a href="https://www.instagram.com/_cookingwithliz">
                    <div class="w-4 h-4">
                        <FaYoutube />
                    </div>
                </a>
            </span>
        </div>
    </div>
    <div Class="mt-4 mb-4 h-0.5 bg-gray-200"></div>
    <p>© 2022 CookingWithLiz. All rights reserved</p>
</section>
