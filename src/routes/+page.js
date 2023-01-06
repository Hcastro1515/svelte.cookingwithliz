import client from "../sanityClient";
import { error } from "@sveltejs/kit";


/** @type {import('./$types').PageLoad} */
export const load = async () => {
    const recipes = await client.fetch(`*[_type == "recipe"][0...3]{
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

      const categories = await client.fetch(`*[_type == "category"][0...4]{
        _id, 
        name,
        "imageUrl": image.asset->url,
        summary
      }`)

      if(recipes && categories){
        return {
          "recipes": recipes, 
          "categories": categories
        }
      }

     error(500, "Internal server error")
}


