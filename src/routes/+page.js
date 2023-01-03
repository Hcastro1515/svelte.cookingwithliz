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
    const recipes = await client.fetch(`*[_type == "recipe"]{
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

      if(recipes){
        return {recipes}
      }

     error(500, "Internal server error")
}


