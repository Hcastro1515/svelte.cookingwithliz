import client from "../../../sanityClient";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageLoad} */
export const load = async ({params}) => {
    const recipe = await client.fetch(`*[_id == "${params._id}" ]{
        _id,
          title,
          content,
          summary,
          "imageUrl": Image.asset->url,
          slideshowImages,
          cookingTime,
          peopleServe,
          category
      }`);


      if(recipe){
        return {
          "recipe": recipe, 
        }
      }

     error(500, "Internal server error")
}