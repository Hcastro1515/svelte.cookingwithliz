import sanityClient from "@sanity/client";
import { error } from "@sveltejs/kit";

const client = sanityClient({
    projectId: "nrx0t8ko",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
})


/** @type {import('./$types').PageLoad} */
export const load = async () => {
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


