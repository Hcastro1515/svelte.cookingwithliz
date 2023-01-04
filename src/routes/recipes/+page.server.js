import { error } from '@sveltejs/kit';
import client from '../../sanityClient';

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    const recipes = await client.fetch(`*[_type == "recipe"][]{
        _id,
          title,
          slug,
          content,
          summary,
          "imageUrl": Image.asset->url,
          slideshowImages,
          cookingTime,
          peopleServe,
          category
      }`);

    const categories = await client.fetch(`*[_type == "category"]{
        _id, 
        name,
      }`)

    if (recipes && categories) {
        return {
            "recipes": recipes,
            "categories": categories
        }
    }

    throw error(404, 'Not found');
}